import './App.css';
import NavBar from './components/NavBar';
import About from './screens/About';
import Home from './screens/Home';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AllPosts from './screens/AllPosts';
import PostDetail from './screens/PostDetail';
import CreatePost from './screens/CreatePost';

function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/posts' element={<AllPosts />}></Route>
          <Route exact path='/create' element={<CreatePost />}></Route>
          <Route exact path='/posts/:postId/:userId' element={<PostDetail />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
