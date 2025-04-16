import React, { useEffect, useState } from "react";
import Input from "../../../../common/components/input/Input";
import ViewBookCard from "../card/ViewBookCard";
import UseAuth from "../../../../hooks/authHook";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../../../common/components/button/Button";
import { useDispatch } from "react-redux";
import { listBook, updateBook } from "../../../../../redux/bookSlice";

function HandleBook() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isEdit = location.state?.id;
  const bookData = location.state || {};
  const bookId = bookData.id;
  const [imagePreview, setImagePreview] = useState("");

  const initialvalue = {
    title: bookData.title || "",
    published: bookData.published || "",
    availableCopie: bookData.availableCopie || "",
    isbn: bookData.isbn || "",
    author: bookData.author || "",
    image: bookData.image || "",
  };
  

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    author: Yup.string().required("Required"),
    published: Yup.string().required("Required"),
    availableCopie: Yup.number().required("Required"),
    isbn: Yup.string().required("Required"),
    image: Yup.mixed().required("Required"),
  });

//   const onsubmit = async (values) => {
//     if (isEdit) {
//       console.log("Updating book with ID:", bookId);
//       console.log("Updated values:", values);
//       await dispatch(updateBook({ id: bookId, values }));
//       dispatch(listBook(""));
//       navigate("/books"); // redirect after update
//     } else {
//       console.log("Creating new book", values);
//       // dispatch for createBook can go here
//     }
//   };

  const { formik } = UseAuth(
    initialvalue,
    (values) => {
      console.log(values);
    },
    isEdit ? "Update" : "addbook",
    validationSchema,
    bookData.id
  );

  useEffect(() => {
    if (bookData.image) {
      setImagePreview(bookData.image);
    }
  }, [bookData.image]);

  const field = [
    { name: "image", type: "file", label: "Book Cover Image" },
    { name: "author", type: "text", label: "Author" },
    { name: "title", type: "text", label: "Title" },
    { name: "isbn", type: "text", label: "ISBN" },
    { name: "published", type: "text", label: "Publication Date" },
    { name: "availableCopie", type: "number", label: "Available Copies" },
  ];

  const handleInputChange = (e, fieldName, fieldType) => {
    if (fieldType === "file") {
      const file = e.currentTarget.files[0];
      if (file) {
        formik.setFieldValue(fieldName, file);
        setImagePreview(URL.createObjectURL(file));
      }
    } else {
      formik.handleChange(e);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-y-3 p-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isEdit ? "Update Book Details" : "Add New Book"}
        </h2>

        {field.map((item, i) => (
          <div key={i} className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {item.label || item.name}
            </label>
            <Input
              placeholder={item.label || item.name}
              type={item.type}
              name={item.name}
              handleBlur={formik.handleBlur}
              handleChange={(e) => handleInputChange(e, item.name, item.type)}
              value={item.type === "file" ? "" : formik.values[item.name]}
              errors={formik.errors[item.name]}
            />
            {formik.touched[item.name] && formik.errors[item.name] && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors[item.name]}
              </div>
            )}
          </div>
        ))}

        <Button
          onClick={formik.handleSubmit}
          className="bg-blue-500 text-white py-2 mt-4"
          name={isEdit ? "Update Book" : "Add Book"}
        />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Book Preview</h3>
        <ViewBookCard
          id={bookId}
          title={formik.values.title}
          author={formik.values.author}
          image={
            typeof formik.values.image === "string"
              ? formik.values.image
              : formik.values.image instanceof File
              ? URL.createObjectURL(formik.values.image)
              : imagePreview
          }
          availableCopie={formik.values.availableCopie}
          published={formik.values.published}
          isbn={formik.values.isbn}
        />
      </div>
    </>
  );
}

export default HandleBook;
