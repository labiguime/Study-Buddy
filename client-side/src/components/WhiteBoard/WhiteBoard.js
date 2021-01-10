import React from 'react';
import DrawingBoard from 'react-drawing-board';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({ 
    draw: {
        //backgroundColor:  "#ffdd00",
    },   
    grid: {
        backgroundColor: 'grey',
        padding: '8px',
    }
}))

const WhiteBoard = () => {

    const classes = useStyles();
    return (
        <>
        <Grid className={classes.grid} container>
            
            <div>
                <DrawingBoard
                    userId="User"
                    className={classes.draw}
                    style={{width: '700px', height: '500px'}}
                />
            </div>
        </Grid>
        </>
    )
}

export default WhiteBoard;