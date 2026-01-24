import "./MessageForm.css";
import {useState} from 'react';
import axios from "axios";
function MessageForm() {
    const [name,setName] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        const payload={
            name,message
        }
        axios.post('http://localhost:3000/message', payload)
    }
  return (
    <div className="form-container">
      <h2>Contact Us</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          className="input"
          onChange={e => setName(e.target.value)}
          value={name}
        />

        <input
          placeholder="Your Message"
          className="textarea"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />

        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default MessageForm