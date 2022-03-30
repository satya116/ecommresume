import React from "react";

const SearchBar = () => {
  return (
    <>
      <input style={{ border: "1px solid blue", outline: "none", padding: "8px 15px", marginLeft: "22px" }} type="text" placeholder="Search anything..." />
       
      
    <button style={{ border: "1px solid blue",padding: "8px 15px",  }}> Search</button> 
    
    
    </>
  );
};

export default SearchBar;
