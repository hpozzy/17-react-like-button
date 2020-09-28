import React from "react"

function Card(props) {
  return (
    <div className="card">
      {" "}
      onClick={props.sayHi}
      {props.label} {props.foo}{" "}
    </div>
  )
}

export const foo = "hello"
export default Card
