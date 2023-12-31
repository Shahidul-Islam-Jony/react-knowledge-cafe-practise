
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const handleAddToBookmark =(blog)=>{
    // console.log(blog);
    const newBookmarks =[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time,id) =>{
    // console.log('marking as read',time);
    setReadingTime(readingTime+time);
    // Remove the read blog from bookmark
    // console.log('remove bookmark',id);
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
