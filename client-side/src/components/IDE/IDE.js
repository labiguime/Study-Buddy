import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AceEditor from 'react-ace';
import Button from '@material-ui/core/Button';
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
    // const classes = useStyles();
    // const [lang, setLang] = useState("javascript");    
    // const [theme, setTheme] = useState("xcode");    
    // const [defaultCode, setDefaultCode] = useState(""); 
    // // const [font, setfont] = useState(14);
    // const [editorState, setEditorState] = useState({
    //     value: languagePlaceHolder["javascript"]
    // }); 
    // useEffect(() => {
    //     socket.on('code', (data) => {
    //         console.log("code in")
    //         console.log('data', data)
    //         setEditorState(data)
    //     })
    //     setDefaultCode(languagePlaceHolder["javascript"])
    //     handleLang("javascript")
    // }, [])
    // // const [splitSize, setSplitSize] = useState(500);
    
    // // const [submitting, setSubmitting] = useState(false);
    // // const {courseId, problemId, submitDeadline, isAdmin} = props;
    // console.log("def", defaultCode)
    // console.log("edit", editorState)
    // function onEditorBlur(event, editor) {
    //     console.log(editor)
    //     if (editor) {
    //         setEditorState({...editorState, value: editor.lines[0]});
    //         handleCode()
    //     }
    // }

    // const handleCode = () => {
    //     socket.emit('code', editorState)
    // }
    // // function handleRunCode(){
    // //     const token = localStorage.getItem('token');
    // //     setSubmitting(true);
    // //     axios({
    // //         url: `${COURSE_URL}/${courseId}/problems/${problemId}/submissions/test`,
    // //         method: "post",
    // //         headers: {
    // //             'x-auth-token': token
    // //         },
    // //         data: {
    // //             source_code: editorState.value,
    // //             language_id: languageMap[editorState.mode],
    // //         }
    // //     }).then(res => {
    // //         let testcaseResults = res.data.testcase_results;
    // //         let newSubmissionError = {};
    // //         let newTestCasesState = testcases.map(testcase => {
    // //             let updatedTestCase = testcaseResults.find(e => e.testcase_id == testcase._id);
    // //             if(updatedTestCase){
    // //                 let {result, stdout} = updatedTestCase;
    // //                 if(!result){
    // //                     newSubmissionError.wrong_answer = true;
    // //                 }
    // //                 return {...testcase, result, stdout};
    // //             }
    // //             return testcase;
    // //         })
    // //         setSubmitting(false);
    // //         setConsoleExpanded(true);
    // //         setTestcases(newTestCasesState);
    // //         setSubmissionError(newSubmissionError);
    // //         setIsCodeRunOrSubmitted(true);
    // //     }).catch(error => {
    // //         let newTestcases = testcases.map(e => {return {...e, stdout: "", result: false}});
    // //         setSubmissionError(error.response.data);
    // //         setTestcases(newTestcases);
    // //         setConsoleExpanded(true);
    // //         setSubmitting(false);
    // //         setIsCodeRunOr Submitted(true);
    // //     })
    // // }
    // function handleLang(e){
    //     console.log("lang", e)
    //     setLang(e)
    //     setEditorState({
    //         value: languagePlaceHolder[e]
    //     })
    // }
    // // function handleSplitSizeChange(size){
    // //     setSplitSize(size);
    // // }
    return (
    //     <>
    //     <Grid container>
    // <FormControl className={classes.formControl}>
    //     <Select
    //       labelId="language"
    //       id="language-select"
    //       value={lang}
    //       onChange={(event) => handleLang(event.target.value)}
    //     >
    //       <MenuItem value={"javascript"}>javascript</MenuItem>
    //       <MenuItem value={"c_cpp"}>c++</MenuItem>
    //       <MenuItem value={"python"}>python 3</MenuItem>
    //     </Select>
    // </FormControl>
    // <FormControl className={classes.formControl}>
    //     <Select
    //       labelId="theme"
    //       id="theme-select"
    //       value={theme}
    //       onChange={(event) => setTheme(event.target.value)}
    //     >
    //       <MenuItem value={"xcode"}>xcode</MenuItem>
    //       <MenuItem value={"github"}>github</MenuItem>
    //       <MenuItem value={"twilight"}>twilight</MenuItem>
    //       <MenuItem value={"monokai"}>monokai</MenuItem>
    //     </Select>
    // </FormControl>
    // <AceEditor 
    //     mode={lang}
    //     theme={theme}
    //     name="editor"
    //     value={defaultCode}
    //     onChange={(value, stat) => {
    //         setEditorState(value)
    //         console.log("onchange", value, stat)
    //     }}
    //     showPrintMargin={true}
    //     showGutter={true}
    //     highlightActiveLine={true}
    //     setOptions={{
    //         enableBasicAutocompletion: false,
    //         enableLiveAutocompletion: false,
    //         showLineNumbers: true,
    //         enableSnippets: true,
    //         tabSize: 2,
    //     }} 
    //     editorProps={{ $blockScrolling: true }}
    //     height='calc(35vh)'
    //     width="100%">
    // </AceEditor>
    // {/* <Button variant="contained" style={{marginRight: 10}} onClick={handleRunCode}>
    //             Run code
    //         </Button> */}
    // </Grid>
    // </>
    // <div class="se-widget" data-widget="kINjZ0td3N"></div>
    <div className="se-widget" data-widget="ssa0qsO5yn"></div>
    )
}

export default IDE