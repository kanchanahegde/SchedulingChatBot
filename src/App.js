import logo from './logo.svg';
import './App.css';
import {AmplifyChatbot} from "@aws-amplify/ui-react";

function App() {
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
