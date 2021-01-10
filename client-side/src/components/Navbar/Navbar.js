import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({    
    root: {
        backgroundColor:  "white",
        //backgroundColor:  "#ffdd00",
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
                    <div className={classes.title}>
                        <a className={classes.link} href="">
                            <Typography  className={classes.name} variant="h5">Study</Typography>
                        </a>        
                    </div>
                    <Grid item>
                        <TextField className={classes.videoURL} color="primary" variant="filled">Video URL</TextField>
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