import React, { useState } from "react";
import "./homepage.css";

function HomePage({ handleClick }) {
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
}

function DisplayPage({ postData }) {
  return (
    <div>
      <h2>Display Page</h2>
      {postData && (
        <div className="grid-container">
          {postData.map((post) => (
            <div key={post.id} className="grid-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Home() {
  const [postData, setPostData] = useState(null);
  const [showDisplayPage, setShowDisplayPage] = useState(false);

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
      {!showDisplayPage && <HomePage handleClick={handleClick} />}
      {showDisplayPage && <DisplayPage postData={postData} />}
    </div>
  );
}

export default Home;
