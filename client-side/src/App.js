import './App.css'
import Navbar from './components/Navbar';
import WhiteBoard from './components/WhiteBoard';
import IDE from './components/IDE';
import Player from './components/Player';
import {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'


import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar
} from "@chatscope/chat-ui-kit-react";

const io = require('socket.io-client')
const socket = io.connect('http://localhost:3000')

function App() {

  useEffect(() => {
    socket.emit('video', {
      leo : 'bitch'
    })
  }, []);

  const [attr, setAttr] = useState({
    messages: [
      {
        text: 'First message',
        direction: 'outgoing',
      },
    ]
  });

  const handleMessageSent = (value) => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        text: value,
        direction: 'outgoing'
      })
    });

    socket.emit('chat', {
      message : value
    })
  }

  socket.on('chat', data => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        text: data,
        direction: 'incoming'
      })
    });
  })

  socket.on('hello', data => {
    console.log(data)
  })
  
  return (
    <div className="App">
      <Navbar/>
      <header className="space-top"> 
      <Grid container>
          <Grid item xs={6}>
            <Player />
          </Grid>
          <Grid item xs={4}>
            <MainContainer>
              <ChatContainer>
                <MessageList>
                {attr.messages.map((m, index) => (
                    <Message model={{
                      message: m.text,
                      sentTime: "just now",
                      sender: "Joe",
                      direction: m.direction,
                      position: "first"
                    }}>
                    </Message>
                ))}
                </MessageList>
                <MessageInput placeholder="Type message here" attachButton={false} onSend={handleMessageSent}/>
              </ChatContainer>
            </MainContainer>
          </Grid>
      </Grid>

      <Grid container className='space-top'>
          <Grid item xs={1}>

          </Grid>
          <Grid item xs={5}>
            <WhiteBoard/>
          </Grid>
          <Grid item xs={5} >
            <IDE/>
          </Grid>
          <Grid item xs={1} >
            
          </Grid>
      </Grid>
      </header>
    </div>
  );
}

export default App;
