import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail basename={process.env.PUBLIC_URL}/>} />
      </Routes>
    </Router> 
  );
}

export default App;
//https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year