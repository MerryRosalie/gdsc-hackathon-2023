"use client";

import { useState } from "react";
import Draggable from "react-draggable";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const [text, setText] = useState<string>("");

  const handleChange = (html: string) => {
    setText(html);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ align: [] }],
      ["clean"],
    ],
  };
  return (
    <Draggable>
      <div className="absolute right-[336px] top-4">
        <ReactQuill
          value={text}
          onChange={handleChange}
          modules={modules}
          theme="snow"
          className="h-1/3 w-72 cursor-pointer overflow-y-auto bg-white"
        />
      </div>
    </Draggable>
  );
}
