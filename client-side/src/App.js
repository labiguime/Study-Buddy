import './App.css'
import Navbar from './components/Navbar';
import WhiteBoard from './components/WhiteBoard';
import IDE from './components/IDE';
import DrawingBoard from 'react-drawing-board';
import ReactPlayer from 'react-player';
import { useState } from 'react';

import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header"> 
      <Grid container>
          <Grid item xs='7'>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                controls='true'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='90%'
              />
            </div>
          </Grid>
          <Grid item xs='4'>
            Chat
          </Grid>
      </Grid>

      <Grid container>
          <Grid item xs='6'>
            <WhiteBoard/>
          </Grid>
          <Grid item xs='6'>
            <IDE/>
          </Grid>
      </Grid>
      </header>
    </div>
  );
}

export default App;
