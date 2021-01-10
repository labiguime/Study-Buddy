import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import AceEditor from 'react-ace';
import SplitPane, {Pane} from 'react-split-pane';
import {languageMap, languagePlaceHolder} from './constants';

const IDE = () => {
    // const classes = useStyles();
    
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
    }
    return (
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
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }} 
            height={splitSize - 50}
            width="100%">

        </AceEditor>
    // <div class="se-widget" data-widget="kINjZ0td3N"></div>
    // <div className="se-widget" data-widget="ssa0qsO5yn"></div>
    )
}

export default IDE