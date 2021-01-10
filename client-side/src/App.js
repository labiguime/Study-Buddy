import './App.css'
import Navbar from './components/Navbar';
import WhiteBoard from './components/WhiteBoard';
import IDE from './components/IDE';
import Player from './components/Player';
import {useEffect} from 'react'
import Grid from '@material-ui/core/Grid'

const io = require('socket.io-client')
const socket = io.connect('http://localhost:3000')
function App() {

  useEffect(() => {
    console.log('whats going on')
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <header className="space-top content"> 
      <Grid container className='margin-top '>
          <Grid item xs={8}>
            <Player />
          </Grid>
          <Grid item xs={4}>
            Chat
          </Grid>
      </Grid>

      <Grid container className='space-top'>
          <Grid item xs={6}>
            <WhiteBoard/>
          </Grid>
          <Grid item xs={6} >
            <IDE/>
          </Grid>
      </Grid>
      </header>
    </div>
  );
}

export default App;
