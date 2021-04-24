import React from "react"
import Name from "./Name"


export default function LikeLists({ likeLists }) {

  return (
    <>
      <div className="like-lists lists-area">
        
        {likeLists.map((list) => {
          return <Name key={list.id} list={list} />
        })}
      </div>
    </>
  )
}
