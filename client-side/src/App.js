import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WhiteBoard from './components/WhiteBoard';
import DrawingBoard from 'react-drawing-board';
import {SketchField, Tools} from 'react-sketch2';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Navbar/>

        <WhiteBoard />
    </div>
  );
}

export default App;
