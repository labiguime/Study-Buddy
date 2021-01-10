import React, {useState, useRef} from 'react';
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
            
            <div>
                <DrawingBoard
                    userId="User"
                    operations={operations}
                    className={classes.draw}
                    onChange={(newOperation, afterOperation) => {
                        console.log("new", newOperation)
                        console.log("after", afterOperation)
                        setOperations(afterOperation)
                    }}
                    style={{width: '800px', height: '500px'}}
                />
            </div>
        </Grid>
        </>
    )
}

export default WhiteBoard;