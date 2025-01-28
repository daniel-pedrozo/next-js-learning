import { useState } from "react";

import PostsLists from "./components/PostsLists"
import MainHeader from "./components/MainHeader"

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <PostsLists isPosting={modalIsVisible} onStopPosting={hideModalHandler} ></PostsLists>

    </main>
  )
}

export default App
