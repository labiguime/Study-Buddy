import React, {useState} from 'react';
import DrawingBoard from 'react-drawing-board';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({ 
    draw: {
        //backgroundColor:  "#ffdd00",
    },   
    grid: {
        backgroundColor: 'grey',
        padding: '8px',
        justifyContent: 'center',
    }
}))

const WhiteBoard = () => {
    const classes = useStyles();
    const [operations, setOperations] = useState([])
    console.log("operations", operations)
    return (
        <>
        <Grid className={classes.grid} container>
                <DrawingBoard
                    userId="User"
                    operations={operations}
                    className={classes.draw}
                    onChange={(newOperation, afterOperation) => {
                        console.log("new", newOperation)
                        console.log("after", afterOperation)
                        setOperations(afterOperation)
                    }}
                    style={{width: '100%', height: '100%'}}
                />
        </Grid>
        </>
    )
}

export default WhiteBoard;