import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function likes() {
    if (count === 1) {
      return "Like"
    } else {
      return "Likes"
    }
  }

  return (
    <div>
      <button onClick={handleClick} className="button">
        {count} {likes()}
      </button>
    </div>
  )
}
// const [likes, addLike] = useState(true)

export default App
