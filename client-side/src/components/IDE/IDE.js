import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AceEditor from 'react-ace';
import SplitPane, {Pane} from 'react-split-pane';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {languageMap, languagePlaceHolder} from './constants';
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import { socket } from '../../shared/constants';
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "10px"
    },
    submitGroup: {
        marginTop: 10,
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    splitPane: {
        position: 'none'
    }
}))
const IDE = () => {
    const classes = useStyles();
    
    useEffect(() => {
        socket.on('code', (data) => {
            console.log("code in")

        })
    }, [])
    const [splitSize, setSplitSize] = useState(500);
    const [editorState, setEditorState] = useState({
        mode: "javascript",
        fontSize: 14,
        theme: "xcode",
        value: languagePlaceHolder["javascript"]
    }); 
    function onEditorBlur(event, editor) {
        if(editor)
            setEditorState({...editorState, value: editor.getValue()});
            socket.emit('code', 'hello')
    }
    function handleEditorStateChange(newState){
        if(newState.mode){
            if(newState.mode == "c++")
                newState.mode = "c_cpp";
            newState.value = languagePlaceHolder[newState.mode];
        }
        setEditorState({...editorState, ...newState});
    }
    function handleSplitSizeChange(size){
        setSplitSize(size);
    }
    return (
        <>
        <Grid container>
    <FormControl className={classes.formControl}>
        <Select
          labelId="language"
          id="language-select"
          value={editorState.mode}
          onChange={(event) => handleEditorStateChange({mode: event.target.value})}
        >
          <MenuItem value={"javascript"}>javascript</MenuItem>
          <MenuItem value={"c_cpp"}>c++</MenuItem>
          <MenuItem value={"python"}>python 3</MenuItem>
        </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
        <Select
          labelId="theme"
          id="theme-select"
          value={editorState.theme}
          onChange={(event) => handleEditorStateChange({theme: event.target.value})}
        >
          <MenuItem value={"xcode"}>xcode</MenuItem>
          <MenuItem value={"github"}>github</MenuItem>
          <MenuItem value={"twilight"}>twilight</MenuItem>
          <MenuItem value={"monokai"}>monokai</MenuItem>
        </Select>
    </FormControl>
                <AceEditor 
                    {...editorState}
                    name="editor"
                    onBlur={onEditorBlur}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        showLineNumbers: true,
                        enableSnippets: true,
                        tabSize: 2,
                    }} 
                    editorProps={{ $blockScrolling: true }}
                    height='calc(35vh)'
                    width="100%">
                </AceEditor>
                </Grid>
                </>
    // <div class="se-widget" data-widget="kINjZ0td3N"></div>
    // <div className="se-widget" data-widget="ssa0qsO5yn"></div>
    )
}

export default IDE