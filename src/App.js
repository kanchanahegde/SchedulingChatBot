import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {AmplifyChatbot} from "@aws-amplify/ui-react";

function App() {
  const handleChatComplete = (event) => {
    const {data, err} = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
  };

  useEffect(() => {
    const chatbotElement = document.querySelector("amplify-chatbot");
    chatbotElement.addEventListener("chatCompleted", handleChatComplete);
    return function cleanup() {
      chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h4>
          Schedule Appointment
        </h4>

      </header>

      <AmplifyChatbot
      botName="ScheduleAppointment_dev"
      botTitle="Schedule Appointment"
      welcomeMessage="Hello, how can I help you?"
    
    />
    </div>
  );
}

export default App;


// import React, { Component } from 'react';

// import { Interactions } from 'aws-amplify';
// import { ChatFeed, Message } from 'react-chat-ui'

// class App extends Component {
//   state = {
//     input: '',
//     finalMessage: '',
//     messages: [
//       new Message({
//         id: 1,
//         message: <div style={{color:'black'}}>Hello, how can I help you today?</div>,
//       })
//     ]
//   }
//   _handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.submitMessage()
//     }
//   }
//   onChange(e) {
//     const input = e.target.value
//     this.setState({
//       input
//     })
//   }
//   async submitMessage() {
//     const { input } = this.state
//     if (input === '') return
//     const message = new Message({
//       id: 0,
//       message: input,
//     })
//     let messages = [...this.state.messages, message]

//     this.setState({
//       messages,
//       input: ''
//     })
//     const response = await Interactions.send("ScheduleAppointment_dev", input);
//     const responseMessage = new Message({
//       id: 1,
//       message: <div style={{color:"black"}}>{response.message}</div>,
//     })
//     messages  = [...this.state.messages, responseMessage]
//     this.setState({ messages })
//     console.log(response)
//     // if (response.dialogState === 'Fulfilled') {
//     //   if (response.intentName === 'MakeAppointment') {
//     //     const { slots: { BookTripCheckInDate, BookTripLocation, BookTripNights, BookTripRoomType } } = response
//     //     const finalMessage = `Congratulations! Your trip to ${BookTripLocation}  with a ${BookTripRoomType} rooom on ${BookTripCheckInDate} for ${BookTripNights} days has been booked!!`
//     //     this.setState({ finalMessage })
//     //   }
//     // }
//   }
//   render() {
//     return (
//       <div className="App">
//         <header style={styles.header}>
//           <p style={styles.headerTitle}>Welcome to appointment bot!</p>
//         </header>
//         <div style={styles.messagesContainer}>
//         <h2>{this.state.finalMessage}</h2>
//         <ChatFeed
//           messages={this.state.messages}
//           hasInputField={false}
//           bubbleStyles={styles.bubbleStyles}
//         />

//         <input
//           onKeyPress={this._handleKeyPress}
//           onChange={this.onChange.bind(this)}
//           style={styles.input}
//           value={this.state.input}
//         />
//         </div>
//       </div>
//     );
//   }
// }

// const styles = {
//   bubbleStyles: {
//     text: {
//       fontSize: 16,
      
//     },
//     chatbubble: {
//       borderRadius: 30,
//       padding: 10,
      
//     }
//   },
//   headerTitle: {
//     color: 'white',
//     fontSize: 22
//   },
//   header: {
//     backgroundColor: 'rgb(0, 132, 255)',
//     padding: 20,
//     borderTop: '12px solid rgb(204, 204, 204)'
//   },
//   messagesContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: 10,
//     alignItems: 'center'
//   },
//   input: {
//     fontSize: 16,
//     padding: 10,
//     outline: 'none',
//     width: 350,
//     border: 'none',

//     borderBottom: '2px solid rgb(0, 132, 255)'
//   }
// }

// export default App