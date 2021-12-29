import React from "react";
import Search from "./components/Search";
import Sort from "./components/Sort";

const Control = () => {
  return (
    <div>
      <div className='row mt-15 mb-3'>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          <Search />
        </div>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default Control;
