import React, {useEffect, useState} from 'react';
import DrawingBoard from 'react-drawing-board';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { socket } from '../../shared/constants';

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
    const [operations, setOperations] = useState([])
    console.log("RENDER")
    useEffect(() => {
        socket.on('drawing', (data) => {
            console.log("in")
            onDrawing(data)
        })
    }, [])
    const onDrawing = (newOperation) => {
        setOperations((oldState) => {
            const newState = [...oldState];
            newState.push(newOperation)
            return newState
        })
    }
    const handleDrawing = (newOperation) => {
        socket.emit('drawing',
            newOperation
        )
    }
    const classes = useStyles();
    return (
        <>
        <Grid className={classes.grid} container>
            <DrawingBoard
                userId="User"
                operations={operations}
                className={classes.draw}
                onChange={(newOperation, afterOperation) => {
                    handleDrawing(newOperation)
                    setOperations(afterOperation)
                }}
                style={{width: '100%', height: '100%'}}
            />
        </Grid>
        </>
    )
}

export default WhiteBoard;
// const throttle = (callback, delay) => {
//     let prev = new Date().getTime();
//     return function () {
//         const time = new Date.getTime();

//         if ((time - prev) >= delay) {
//             prev = time;
//             callback.apply(null, arguments);
//         }
//     }
// }