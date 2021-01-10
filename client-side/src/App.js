import Navbar from './components/Navbar';
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
          <Grid item xs='9'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            />
          </Grid>
          <Grid item xs='3'>
            Chat
          </Grid>
      </Grid>
      <Grid container>
          <Grid item xs='6'>
            drawing
          </Grid>
          <Grid item xs='6'>
            IDE
          </Grid>
      </Grid>
      
      {/* <DrawingBoard
        userId="user1" // identify for different players.
      /> */}
      </header>
    </div>
  );
}

export default App;
