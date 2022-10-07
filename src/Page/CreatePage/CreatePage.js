import React from "react";

const CreatePage = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl">Create page</h2>
      <div className="my-3">
        <input
          className="border w-2/5 h-9 rounded"
          type="text"
          name="text"
          id=""
          required
          placeholder="Enter Your Title"
        />
        <br />
        <input
          className="border mt-2 w-2/5 h-9 rounded"
          type="text"
          name="text"
          id=""
          placeholder="Enter Your Description"
        />{" "}
        <br />
        <input
          className="border mt-2 w-2/5 h-9 rounded"
          type="text"
          name="image"
          id=""
          placeholder="Enter Your Image"
        />{" "}
        <br />
        <input
          className="border mt-2 w-2/5 h-9 rounded bg-gray-300 text-white"
          type="submit"
          value="Submit"
        />
      </div>
    </div>
  );
};

export default CreatePage;
