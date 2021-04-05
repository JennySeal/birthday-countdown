
import {useState, useEffect} from 'react';

const Countdown = (nextBirthdayDate) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
useEffect(() => {
    const time = (nextBirthdayDate.nextBirthdayDate) - Date.parse(new Date());
       const interval = setInterval(() => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);
      
        }, 1000);
    return () => clearInterval(interval);
}); 

      return (
        <div>
          <p>There are</p>
          
          <h2><span className="counter">{days}</span> days 
          <span className="counter"> {hours}</span> hours  
          <span className="counter"> {minutes}</span>minutes 
          <span className="counter"> {seconds}</span> seconds</h2>
          <p>before your birthday!</p>
        </div>
      );
    
      }
  export default Countdown;
  