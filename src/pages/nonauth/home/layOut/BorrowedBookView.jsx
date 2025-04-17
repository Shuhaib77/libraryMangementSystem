import React, { useEffect } from "react";
import ProductView from "../cards/ProductView";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowByUser } from "../../../../../redux/borrowSlice";

function BorrowedBookView() {
  const { borrowed, loading } = useSelector((state) => state.borrowData);
  const dispatch = useDispatch();
  const id = sessionStorage.getItem("id");
  useEffect(() => {
    dispatch(getBorrowByUser(id));
  }, []);

  console.log(borrowed, "borowdataa");
  {
    loading && <p>Loading...</p>;
  }
  return (
   <>
   <h1 className="text-2xl p-2 mb-3 font-bold">Borrow Details</h1>
    <div className="flex flex-wrap justify-center items-center gap-6 gap-x-3 h-[78vh] overflow-auto">
      {borrowed.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          No borrowed books found.
        </p>
      ) : (
        borrowed.map((item, i) => (
          <ProductView
            key={item.book._id || i}
            title={item.book.title}
            author={item.book.author}
            image={item.book.image}
            published={item.book.published}
         
            isbn={item.book.isbn}
            name={"boorrow"}
            id={item.book._id}
          />
        ))
      )}
    </div>
   </>
  );
}

export default BorrowedBookView;
