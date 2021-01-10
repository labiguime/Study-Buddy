import './App.css'
import Navbar from './components/Navbar';
import WhiteBoard from './components/WhiteBoard';
import IDE from './components/IDE';
import Player from './components/Player';
import {React, useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Intro from './components/Intro';

import chatStyles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar
} from "@chatscope/chat-ui-kit-react";

import { socket } from './shared/constants';


// export const URLcontext = React.createContext();

// const initialState = {
//   url : 'https://www.youtube.com/watch?v=pKO9UjSeLew'
// }
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

function App() {

  const [attr, setAttr] = useState({
    messages: [ ]
  });

  const handleMessageSent = (value) => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        text: value,
        direction: 'outgoing'
      })
    });

    socket.emit('chat', {
      message : value
    })
  }

  socket.on('chat', data => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        text: data,
        direction: 'incoming'
      })
    });
  })

  const [URL, setURL] = useState()  
  
  //Intro
  const [open, setOpen] = useState(true);
  
  const handleClose = () => {
    setOpen(false);
  };

  console.log(URL)

  return (

    <div className="App">
      <Navbar setURL={setURL}/>
      <header className="space-top"> 

      <Grid container>
        
        <Grid item xs={1}>
        </Grid>
          <Grid item xs={7}>
            <Player youtube_url={URL? URL : 'https://www.youtube.com/watch?v=pKO9UjSeLew'}/> 
          </Grid>
          <Grid item xs={3}>
            <div style={{
                height: "500px",
                overflow: "hidden"
              }}>
              <ChatContainer>
                <MessageList>
                {attr.messages.map((m, index) => (
                    <Message model={{
                      message: m.text,
                      sentTime: "just now",
                      sender: "Joe",
                      direction: m.direction,
                      position: "first"
                    }}>
                    </Message>
                ))}
                </MessageList>
                <MessageInput placeholder="Type message here" attachButton={false} onSend={handleMessageSent}/>
              </ChatContainer>
            </div>
          </Grid>
          
          <Grid item xs={1}>
          </Grid>
      </Grid>

      <Grid container className='space-top'>
          <Grid item xs={1}>

          </Grid>
          <Grid item xs={5}>
            <WhiteBoard/>
          </Grid>
          <Grid item xs={5} >
            <IDE/>
          </Grid>
          <Grid item xs={1} >
            
          </Grid>
      </Grid> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Hi, welcome to Study Buddy!
          </DialogTitle>          
          <Intro/>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      
      </header>
    </div>
  );
}

export default App;
