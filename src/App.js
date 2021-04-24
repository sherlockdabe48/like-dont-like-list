import React, { useState } from "react"
import InputForm from "./components/InputForm"
import Lists from "./components/Lists"
import "./css/app.css"

function newList(name) {
  return { id: Date.now(), name: name }
}

function App() {
  const [name, setName] = useState("")
  const [likeLists, setLikeLists] = useState([])
  const [dontLikeLists, setDontLikeLists] = useState([])
  const [activeLikeLists, setActiveLikeLists] = useState(true)

  function handleAddToLikes(name) {
    setLikeLists([...likeLists, newList(name)])
  }

  function handleAddToDontLikes(name) {
    setDontLikeLists([...dontLikeLists, newList(name)])
  }
  return (
    <>
      <Lists
        likeLists={likeLists}
        dontLikeLists={dontLikeLists}
        setActiveLikeLists={setActiveLikeLists}
      />
      <InputForm
        name={name}
        setName={setName}
        handleAddToLikes={handleAddToLikes}
        handleAddToDontLikes={handleAddToDontLikes}
        activeLikeLists={activeLikeLists}
      />
    </>
  )
}

// const likeLists = [{ id: Date.now(), name: "Final Fantasy" }]
// const dontLikeLists = []

export default App
