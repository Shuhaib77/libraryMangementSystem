import React, { useEffect } from "react";
import Button from "../../../../common/components/button/Button";
import { useDispatch } from "react-redux";
import {
  addBorrow,
  getBorrowByUser,
  returnBorrow,
} from "../../../../../redux/borrowSlice";
import { listBook } from "../../../../../redux/bookSlice";
import { toast } from "sonner";

function ProductView({
  title,
  author,
  key,
  image,
  availableCopie,
  published,
  isbn,
  id,
  name,
}) {
  const dispatch = useDispatch();
  const handleBorrow = async (id) => {
    const result = await dispatch(addBorrow(id));

    if (addBorrow.fulfilled.match(result)) {
      toast.success("Book borrowed successfully");
      dispatch(listBook(""));
    } else if (addBorrow.rejected.match(result)) {
      toast.error(result.payload || "Borrow failed");
    }
  };
  const returnBook = async (id) => {
    console.log(id,"ll");
    
    const result = await dispatch(returnBorrow(id));

    if (returnBorrow.fulfilled.match(result)) {
      toast.success("Book returned successfully");
      dispatch(getBorrowByUser(sessionStorage.getItem("id")));
    } else if (returnBorrow.rejected.match(result)) {
      toast.error(result.payload || "Return failed");
    }
  };

  return (
    <div>
      <div>
        <div
          key={key}
          className="lg:w-[400px] lg:h-[440px] bg-gray-200 p-3 overflow-auto flex flex-col "
        >
          <div className="bg-red-600 rounded w-full h-[240px]">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
          <div className="pl-2">
            <h1>{title}</h1>
            <h1>{author}</h1>
            <h1>{availableCopie}</h1>
            <h1>{published}</h1>
            <h1>{isbn}</h1>
            {name === "boorrow" ? (
              <Button
                className={"bg-blue-300"}
                name={"returnBook"}
                onClick={() => {
                  returnBook(id);
                }}
              />
            ) : (
              <Button
                className={"bg-blue-300"}
                name={"addBorrow"}
                onClick={() => {
                  handleBorrow(id);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
