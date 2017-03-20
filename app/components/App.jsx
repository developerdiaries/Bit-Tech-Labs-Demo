import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  componentWillMount(){
    //this.startRecognising();
  }

  /*
    Features I wanna provide are as follows:

    1. This is the real stuff I wanna do. I wanna input text in the edditor with the user's voice
    and so it makes the editor the most interactive editor.
    2. We can also work on the camera libraries so that it will become a little more interactive.

    Below function startRecognising() is working fine in normal javascript document and it is
    converting speech into text.
    
  */


  /*startRecognising() {
    let r = this.refs.textEditor;
    if('webkitSpeechRecognition' in window){
        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = 'en-IN';
        speechRecognizer.start();
        var finalTranscripts = '';
        speechRecognizer.onresult = function(event) {
          var interimTranscripts = '';
          for(var i = event.resultIndex; i< event.results.length; i++){
            var transcript = event.results[i][0].transcript;
            transcript.replace("hello", "<br>");
            if(event.results[i].isFinal){
              finalTranscripts += transcript;
            }else {
              interimTranscripts += transcript;
            }
          }
          r.innerText = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        };
        speechRecognizer.onerror = function(event) {
        };
    }else{
      r.innerText = 'Your browser is not supported.';
    }
  }*/
  componentDidMount () {
     this.refs.textEdit.innerText = "Text-Interact";
 }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }
  render() {
    return (
      <div id="content">
        <h1 id="textEdit" ref="textEdit" style={{textAlign: 'center'}}></h1>
        <h3 style={{textAlign: 'center', color:'magenta'}}>Powered by Incredicodes</h3>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <div className="editor">
          <Editor
            id="textEditor"
            ref="textEditor"
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
        <div>
      </div>
      </div>
    );
 }
}
