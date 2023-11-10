// import screens here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainscreen from './screens/Mainscreen';


// main router
const WebApp = () => { 
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Mainscreen />} />

      </Routes>
    </Router>
  );
}

export default WebApp;