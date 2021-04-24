import React from "react"

export default function InputForm({
  name,
  setName,
  handleAddToLikes,
  handleAddToDontLikes,
  activeLikeLists,
}) {
  function handleSubmit(e) {
    e.preventDefault()
    if (activeLikeLists) {
      handleAddToLikes(name)
    } else {
      handleAddToDontLikes(name)
    }
    setName("")
  }
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  )
}
