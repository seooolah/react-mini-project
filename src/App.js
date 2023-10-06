import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
