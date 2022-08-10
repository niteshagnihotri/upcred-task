import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Watch from './components/Watch';

function App() {
  return (
    <>
    <Home/>
    <Routes>
        <Route exact path="/watch" element={<Watch />} />
    </Routes>
    </>
  );
}

export default App;
