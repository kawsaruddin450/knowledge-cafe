import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
function App() {
  const [posts, setPosts] = useState([])

  const addToBookmarks = (post) => {
    const newPosts = [...posts, post];
    setPosts(newPosts);
  }
  return (
    <>
      <Header></Header>
      <main className='main'>
        <Posts addToBookmarks={addToBookmarks}></Posts>
        <div className='side-bar'>
          <Bookmarks posts={posts}></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
