import { useState } from "react";

export default function InputField() {
  const [text, setText] = useState("");

  return (
    <>
    <h1>Dynamic input Display</h1>
    <div className="p-5 bg-primary flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-4 text-lg font-bold h1 text-danger bg-warning">{text}</p>
    </div>
    </>
  );
}
