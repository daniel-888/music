import React from "react";

const FormEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Search Somthing.." />
      {/* serarch field */}

      <button>
        <img src="images/icon/54.svg" alt="icon" />
      </button>
      {/* Search button */}

      <select className="form-control" id="exampleFormControlSelect1">
        <option>All</option>
        <option>Layout</option>
        <option>API</option>
        <option>Doc</option>
      </select>
      {/* End select menu */}
    </form>
  );
};

export default FormEvent;
