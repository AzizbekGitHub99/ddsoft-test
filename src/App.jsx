import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import OwlHelper from './components/owlHelper/owlHelper';
import Footer from './components/Footer/Footer';
import AllCourses from './pages/AllCourses/AllCourses';
import Celebrates from './pages/Celebrates/Celebrates';



function App() {
  return (
    <div className="App">   
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>        
        <Route path='/allCourses' element={<AllCourses/>}/>        
        <Route path='/celebrates' element={<Celebrates/>}/>        
      </Routes>   
      <OwlHelper/>
      <Footer/>
    </div>
  );
}

export default App;
