import React, { useState } from "react";
import FetchData from "./fetchdata";
import DisplayData from "./Displaydata";

function Output() {
  const [postData, setPostData] = useState(null);
  const [showDisplayPage, setShowDisplayPage] = useState(false);

  return (
    <div>
      {!showDisplayPage && (
        <FetchData
          setPostData={setPostData}
          setShowDisplayPage={setShowDisplayPage}
        />
      )}
      {showDisplayPage && <DisplayData postData={postData} />}
    </div>
  );
}

export default Output;
