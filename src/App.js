import Home from "./Components/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Details from "./Components/Details.component";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/details/:id' element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
