import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBook } from "../../../../../redux/bookSlice";
import ProductView from "../cards/ProductView";
import Input from "../../../../common/components/input/Input";
import Button from "../../../../common/components/button/Button";
import ViewBookCard from "../../admin/card/ViewBookCard";

function BookView({ name }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.bookData);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const booksPerPage = 3;
  useEffect(() => {
    dispatch(listBook(searchTerm));
    setPage(1);
  }, [dispatch, searchTerm]);
  const indexOfLast = page * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / booksPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-5">
        <div>
          <Input
            type="text"
            placeholder="Search"
            name="search"
            value={searchTerm}
            handleChange={(e) => setSearchTerm(e.target.value)}
            handleBlur={() => {}}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Explore Library</h1>
          <h1 className="font-light">BOOK COLLECTION</h1>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-full grid shadow-xl rounded-2xl p-5 grid-cols-1 gap-y-5 lg:grid-cols-3 sm:gap-y-5 place-items-center gap-x-2 h-[65vh] overflow-auto">
          {currentBooks.length > 0
            ? currentBooks.map((item) =>
                name === "admin" ? (
                  <ViewBookCard
                    key={item?.key}
                    title={item?.title}
                    author={item?.author}
                    image={item?.image}
                    published={item?.published}
                    availableCopie={item?.availableCopie}
                    id={item._id}
                    isbn={item.isbn}
                  />
                ) : (
                  <ProductView
                    key={item?.key}
                    title={item?.title}
                    author={item?.author}
                    image={item?.image}
                    published={item?.published}
                    availableCopie={item?.availableCopie}
                    isbn={item.isbn}
                    id={item._id}
                  />
                )
              )
            : !loading && <p>No books found</p>}
          {!searchTerm && (
            <div className="flex justify-center gap-4 mt-5 w-full">
              <Button
                name="Prev"
                type="button"
                className={`bg-gray-200 hover:bg-gray-300 ${
                  page === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              />
              <span className="font-semibold flex items-center text-center">
                Page {page}
              </span>
              <Button
                name="Next"
                type="button"
                className={`bg-gray-200 hover:bg-gray-300 ${
                  page === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookView;
