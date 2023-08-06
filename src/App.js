import './App.scss';
import {Routes, Route} from "react-router-dom"
import Navigation from "./components/gloabals/Navigation";
import Home from './pages/Home';
import Post from './pages/Post';
import FeaturedPost from './pages/FeaturedPost';
import Footer from './components/gloabals/Footer';
import Invalid from './components/Invalid';
function App() {
  return (
    <main>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/post/:id"} element={<Post />} />
        <Route path="*" element={<Invalid/>} />
        <Route path="/featured/:id" element={<FeaturedPost />} />
        
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
