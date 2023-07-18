import React, { useState } from "react";
import "./homepage.css";
function DisplayData({ postData }) {
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredData, setFilteredData] = useState(postData);

  const handleSearch = () => {
    const filtered = postData.filter((post) =>
      post.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <nav>
        <p>home</p>
        <p>about</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button onClick={handleSearch}>
            <span role="img" aria-label="search-icon">
              🔍
            </span>
          </button>
        </div>
      </nav>
      <div className="content">
        <h2>Display Data Page</h2>
        {filteredData && (
          <div className="grid-container">
            {filteredData.map((post) => (
              <div key={post.id} className="grid-item">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayData;
