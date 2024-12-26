import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  // 메인 페이지 담당
  const [post, setPost] = useState("강남 우동 맛집");
  return (
    // jssx: className = class
    <div className="App">
      <div className="blog-header">
        <p className="logo">안녕하시긔?</p>
      </div>
      <h4 style={{}}>{post}</h4>
    </div>
  );
}

export default App;
