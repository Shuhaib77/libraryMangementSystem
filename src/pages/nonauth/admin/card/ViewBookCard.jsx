import React from "react";
import Button from "../../../../common/components/button/Button";
import { useDispatch } from "react-redux";
import { deleteBook, listBook } from "../../../../../redux/bookSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function ViewBookCard({ title, author, image, availableCopie, published, id, isbn }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = async () => {
    try {
      await dispatch(deleteBook(id)).unwrap();
      dispatch(listBook(""));
      toast.success("Delete successful");
    } catch (error) {
      toast.error("Delete failed:", error);
    }
  };

  const onUpdate = () => {
    navigate(`/admin/update`, {
      state: {
        id,
        title,
        author,
        image,
        availableCopie,
        published,
        isbn,
      },
    });
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-1/3 h-[300px] bg-amber-900 rounded-l-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="w-2/3 h-[300px] bg-amber-300 p-6 flex flex-col justify-between rounded-r-xl">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <h2 className="text-lg">{author}</h2>
          <p className="text-sm">Available Copies: {availableCopie}</p>
          <p className="text-sm">Published: {published}</p>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            name="Update"
            className="bg-blue-400 w-full p-2"
            onClick={onUpdate}
          />
          <Button
            name="Delete"
            className="bg-green-400 w-full p-2"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewBookCard;
