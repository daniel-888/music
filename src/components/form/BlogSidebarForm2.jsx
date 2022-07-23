import React from "react";

const BlogSidebarForm2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Search" />
      <button>
        <img src="images/icon/51.svg" alt="icon" />
      </button>
    </form>
  );
};

export default BlogSidebarForm2;
