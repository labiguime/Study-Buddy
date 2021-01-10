import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrowOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({    
    root: {
        backgroundColor:  "#96F3C5",
        //backgroundColor:  "#ffdd00",
    },
    paper: {
        padding: '2px 4px',
        marginTop: '8px',
        marginBottom: '8px',
        display: 'flex',
        width: '600px',
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
        width: 500
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
        color: "black",
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
        color: 'black',
        "transition" : "all 0.6s",
        "font-size" : "1rem",
        "font-family" : "Cairo, sans-serif",
        "letter-spacing" : "2px",
        "text-transform" : "uppercase",
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
  }));
  
const Navbar = () => {
    const classes = useStyles();

    return (
        <>
        <AppBar className={classes.root} position="sticky" color='transparent'>
            <Toolbar>                    
                <Grid container>
                    <Grid item>
                    <div className={classes.title}>
                            <Typography  className={classes.name} variant="h5">Study</Typography>
                    </div>
                    </Grid>
                    <Grid className={classes.videoURLGrid} item>
                        <Paper component="form" className={classes.paper}>
                            <InputBase className={classes.videoURL} placeholder="Enter a Youtube Link">Video URL</InputBase>
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <PlayArrowIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid className={classes.nav} container>
                    <Grid item>
                        <List className={classes.container}>                      
                            
                            <ListItem>
                                <li><a className={classes.navBtns}>Share</a></li>
                            </ListItem>
                            <ListItem >
                                <li><a className={classes.navBtns}>Join</a></li>
                            </ListItem>
                            <ListItem>
                                <li><a className={classes.navBtns}>User</a></li>
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
        </>
    )
}

export default Navbar;