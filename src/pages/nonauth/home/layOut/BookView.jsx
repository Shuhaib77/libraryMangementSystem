import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBook } from "../../../../../redux/bookSlice";
import ProductView from "../cards/ProductView";
import Input from "../../../../common/components/input/Input";

function BookView() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.bookData);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(listBook(""));
  }, [dispatch]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(listBook(value));
  };
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-5">
        <div>
          <Input
            type="text"
            placeholder="Search"
            name="search"
            value={searchTerm}
            handleChange={handleSearch}
            handleBlur={() => {}}
          />
        </div>
        {/* title */}
        <div>
          <h1 className="text-2xl font-bold">Explore Library</h1>
          <h1 className="font-light">BOOK COLLECTION</h1>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-full grid shadow-xl rounded-2xl p-5 grid-cols-1 gap-y-5 lg:grid-cols-3 sm:gap-y-5 place-items-center">
          {data.length
            ? data.map((item) => (
                <ProductView
                  title={item?.title}
                  author={item?.author}
                  image={item?.image}
                  key={item?.key}
                  published={item.published}
                  availableCopie={item.availableCopie}
                />
              ))
            : !loading && <p>No products found</p>}
        </div>
      </div>
    </div>
  );
}

export default BookView;
