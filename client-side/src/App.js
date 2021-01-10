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
    socket.emit('video', {
      leo : 'bitch'
    })
  }, [])
  
  socket.on('hello', data => {
    console.log(data)
  })
  

  return (
    <div className="App">
      <Navbar/>
      <header className="space-top"> 
      <Grid container>
          <Grid item xs={1}>
            rer
          </Grid>
          <Grid item xs={6}>
            <Player />
          </Grid>
          <Grid item xs={4}>
            Chat
          </Grid>
          <Grid item xs={1}>
            rer
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
