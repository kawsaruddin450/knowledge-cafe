import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import ReadingTracker from './components/ReadingTracker/ReadingTracker';
function App() {
  const [posts, setPosts] = useState([])
  const [time, setTime] = useState(0);

  const addToBookmarks = (post) => {
    const newPosts = [...posts, post];
    setPosts(newPosts);
  }
  const trackReading = (post) => {
    const newtime = time + post.reading_time;
    setTime(newtime);
  }
  return (
    <>
      <Header></Header>
      <main className='main'>
        <Posts addToBookmarks={addToBookmarks} trackReading={trackReading}></Posts>
        <div className='side-bar'>
          <ReadingTracker time={time}></ReadingTracker>
          <Bookmarks posts={posts}></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
