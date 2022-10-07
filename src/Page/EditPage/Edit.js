import React from "react";

const Edit = () => {
  return (
    <div>
      <h2 className="text-xl">Edit page</h2>
      <div className="my-3">
        <input
          className="border w-2/5 h-9 rounded"
          type="text"
          name="text"
          id=""
          required
          placeholder="Edit Title"
        />
        <br />
        <input
          className="border mt-2 w-2/5 h-9 rounded"
          type="text"
          name="text"
          id=""
          placeholder="Edit Description"
        />{" "}
        <br />
        <input
          className="border mt-2 w-2/5 h-9 rounded"
          type="text"
          name="image"
          id=""
          placeholder="Change Image"
        />{" "}
        <br />
        <input
          className="border mt-2 w-2/5 h-9 rounded bg-gray-300 text-white"
          type="submit"
          value="Edit"
        />
      </div>
    </div>
  );
};

export default Edit;
