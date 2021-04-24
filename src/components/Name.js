import React from "react"

export default function Name({ list }) {
  return (
    <>
      <div className="list-item">
        <span className="list-item-text">{list.name}</span>
        <button className="btn btn--delete btn--small">X</button>
      </div>
    </>
  )
}
