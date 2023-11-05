"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const [text, setText] = useState<string>("");
  const [active, setActive] = useState(false);

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
  const hideElement = () => {
    active ? setActive(false) : setActive(true);
  };
  return (
    <div>
      <button className="bg-white" onClick={hideElement}>
        Notes
      </button>
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={modules}
        theme="snow"
        className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white"
        style={{
          display: active ? "block" : "none",
        }}
      />
    </div>
  );
}
