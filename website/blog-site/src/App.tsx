// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Navbar } from 'react-bootstrap';
import BlogNav from './components/BlogNav';
import Posts from './components/Posts';

function App() {
  // const [count, setCount] = useState(0)
  const message = "Hello World";

  return (
    <>   
      <div className="main-container">
        <BlogNav/>
        <Posts/>
      </div>
    </>
  )
}

export default App
