import React from "react"
import DontLikeList from "./DontLikeList"
import LikeLists from "./LikeLists"

export default function Lists({
  likeLists,
  dontLikeLists,
  setActiveLikeLists,
}) {
  return (
    <div className="lists__wrapper">
      <div className="like-lists-wrapper active">
        <button
          className="btn btn--tab-left active"
          onClick={() => setActiveLikeLists(true)}
        >
          Likes
        </button>
        <LikeLists likeLists={likeLists} />
      </div>
      <div className="dont-like-lists-wrapper">
        <button
          className="btn btn--tab-right"
          onClick={() => setActiveLikeLists(false)}
        >
          Don't likes
        </button>
        <DontLikeList dontLikeLists={dontLikeLists} />
      </div>
    </div>
  )
}
