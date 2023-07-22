
import './App.scss';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/home.page';
import SingleUser from './pages/single.page';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/single-user/:userID' element={ <SingleUser /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
