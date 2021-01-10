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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import PlayArrowIcon from '@material-ui/icons/PlayArrowOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import MWLogo from './assets/StudyBuddy2.png';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
    orange,
    lightBlue,
    deepPurple,
    deepOrange
  } from "@material-ui/core/colors";

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
import { CssBaseline } from '@material-ui/core';


// export const URLcontext = React.createContext();

// const initialState = {
//   url : 'https://www.youtube.com/watch?v=pKO9UjSeLew'
// }
const useStyles = makeStyles(theme => ({    
  paper: {
      padding: '2px 4px',
      marginTop: '8px',
      marginBottom: '8px',
      display: 'flex',
      width: '600px',
      height: '40px',
      borderRadius: '32px'
  },
  paperMini: {
      padding: '2px 4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      width: '100px',
      height: '40px',
      borderRadius: '32px'
  },
  title: {
      display: 'flex',
      position: 'absolute',
      top: '50%',
      'transform': `translate(0%, -50%)`,
  },
  videoURL: {
      marginLeft: "16px",
      width: 400
  },
  videoURLGrid: {
      display: 'flex',
      flex: 'auto',
      justifyContent: 'center',
      marginRight: '64px'
  },
  box: {
      height: 35,
      width: 250,
      textAlign: "center",
      display: "flex",
    //marginTop: theme.spacing(1),    
    marginTop: 15,
  }, 
  chatGrid: {
    border:'#96F3C5 solid 2px', 
    borderRadius: '5px', 
    marginRight:'32px', 
    overflow: 'hidden', 
    minHeight: '40vh',
    gridTemplateRows: 'min-content auto min-content', 
    [theme.breakpoints.down('lg')]: {
      height: '40vh'
    },
  },
  container: {
      display: "none",
      [theme.breakpoints.up('md')]: {
          display: 'flex',
          position: 'relative', 
          width: 'auto'
        },
    marginLeft: 'auto',
  },
  nav: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        width: 'auto',
        justifyContent: 'center'
      },
  },
  name: {      
      "transition" : "all 0.6s",
      "font-size" : "26px",
      "font-family" : "Cairo, sans-serif",
      "letter-spacing" : "2px",
      "text-decoration": "none",
      marginLeft: "30px",
      marginRight: "30px",
      opacity : "1.0",
          "&:hover": {
              opacity: "0.6",
              "font-size": "27px"
        }
  },
  link: {
      "text-decoration": "none",
  },
  navBtns: {
      "transition" : "all 0.6s",
      "font-size" : "1rem",
      "font-family" : "Cairo, sans-serif",
      "letter-spacing" : "2px",
      "text-decoration": "none",
      opacity : "1.0",
      "&:hover": {
          opacity: "0.6",
          "font-size": "1.01rem"
    }
  },
  drawerPaper: {
    width: 250,
  },
  chatContainer: {
    display:'flex',
    maxHeight: '100%',
    overflow: 'hidden',
  }
}));
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
  const classes = useStyles();
  const [darkState, setDarkState] = useState();

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? '#228B22' : '#96F3C5';
  const mainSecondaryColor = darkState ? '#228B22' : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });  
  const handleThemeChange = () => {
      setDarkState(!darkState);
    }; 
    const handlePress = (event) => {
      setURL(event.target.value)
   }


  console.log(URL)

  return (
  <ThemeProvider theme={darkTheme}>
    <div className={classes.App}>
      <CssBaseline/>
        <AppBar className={classes.root} position="sticky">
            <Toolbar>                    
                <Grid container>
                    <Grid item>
                    <div className={classes.title}>
                        <img src={MWLogo} alt="Logo" Width="100px" />
                    </div>
                    </Grid>
                    <Grid className={classes.videoURLGrid} item>
                        <Paper component="form" className={classes.paper}>
                            <InputBase className={classes.videoURL} placeholder="Enter a Youtube Link" onBlur={handlePress}>Video URL</InputBase>
                            <IconButton className={classes.iconButton} aria-label="search">
                                <PlayArrowIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid className={classes.nav} container>
                    <Grid item>
                        <List className={classes.container}>                      
                            
                            <ListItem>
                                <li>
                                  <Paper className={classes.paperMini}>
                                  <Typography className={classes.navBtns}><ShareIcon/></Typography>
                                  </Paper>
                                </li>
                            </ListItem>
                            <ListItem>
                              <li>
                                <Paper className={classes.paperMini}>
                                  <Typography className={classes.navBtns}><AccountCircleIcon /></Typography>
                                </Paper>
                              </li>
                            </ListItem>
                            <ListItem>
                                <IconButton onClick={handleThemeChange}>
                                    <Brightness4OutlinedIcon></Brightness4OutlinedIcon>
                                </IconButton>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
               
                {/* <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton> */}

                {/* Mobile Navbar */}
                {/* <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <Paper elevation={0} className={classes.drawerPaper}>
                    <Button size='small' onClick={handleDrawerToggle} style={{margin: 10}} color="default">
                        <CloseIcon color='primary'/>
                    </Button>
                        
                    <List>
                        <Divider />
                        <ListItem>
                            <li><a className={classes.navBtns}>Home</a></li>
                        </ListItem>
                       
                    </List>
                  
                    </Paper>
                    
                </Drawer> */}
            </Toolbar>
        </AppBar>
      <header className="space-top"> 
      <main className={classes.content}>
      <Grid container style={{gridAutoRows: 'auto'}}>
        
        <Grid item xs={1}>
        </Grid>
          <Grid style={{border:'#96F3C5 solid 2px', borderRadius: '5px', marginRight:'32px'}} item xs={7}>
            <Player youtube_url={URL? URL : 'https://www.youtube.com/watch?v=pKO9UjSeLew'}/> 
          </Grid>
          <Grid className={classes.chatGrid} item xs={3}>
              <ChatContainer className={classes.chatContainer}>
                <MessageList style={{overflow:'hidden', height: '100%'}}>
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
          </Grid>
          
          <Grid item xs={1}>
          </Grid>
      </Grid>

      <Grid container className='space-top'>
          <Grid item xs={1}>

          </Grid>
          <Grid style={{border:'#96F3C5 solid 2px', borderRadius: '5px', marginRight:'32px'}} item xs={5}>
            <WhiteBoard/>
          </Grid>
          <Grid style={{border:'#96F3C5 solid 2px', borderRadius: '5px', marginRight:'32px'}} item xs={5} >
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
      
      </main>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
