import React, { useState } from "react";

function FetchData({ setPostData, setShowDisplayPage }) {
  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        setShowDisplayPage(true);
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div>
      <h2>Fetch Data Page</h2>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
}

export default FetchData;
