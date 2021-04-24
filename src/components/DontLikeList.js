import React from "react"
import Name from "./Name"

export default function DontLikeList({ dontLikeLists }) {
  return (
    <>
      <div className="dont-like-lists lists-area">
        {dontLikeLists.map((list) => {
          return <Name key={list.id} list={list} />
        })}
      </div>
    </>
  )
}
