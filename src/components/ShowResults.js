import ShowName from './ShowName'
import RhymeResults from './RhymeResults'
import Countdown from './Countdown'
import NextBirthday from './NextBirthday.js'
import Button from './Button';


const ShowResults = ({values, toggleResults}) => {

    const today = new Date();
    let birthday = values.birthday;  
    let happyBirthday = false;
    let nextBirthdayDate;
    const nextBirthday = () => {
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDayOfMonth = today.getDate();
    
    let birthMonth = new Date(birthday).getMonth();
        let birthdayDate = new Date(birthday).getDate();
    
    let isBirthdayNextYear = (birthMonth < currentMonth || (birthMonth < currentMonth && birthdayDate < currentDayOfMonth));
    
    if (birthMonth === currentMonth && birthdayDate === currentDayOfMonth) {
        happyBirthday = true; 
        isBirthdayNextYear = true;}
    
        if (isBirthdayNextYear) {
        return nextBirthdayDate = new Date(birthday).setFullYear(currentYear+1)
     } else { 
        nextBirthdayDate = new Date(birthday).setFullYear(currentYear);
    }
}
nextBirthday();

    return (
        <div className="ShowResultsStyle" style={{borderColor: values.color}}>
            <ShowName values={values}/>
            <RhymeResults values={values}/>
            <Countdown nextBirthdayDate={nextBirthdayDate}/>
            <NextBirthday values={values} happyBirthday={happyBirthday} nextBirthdayDate={nextBirthdayDate}/>
            <Button onClick={toggleResults} text="Try another birthday" color={values.color} />
        </div>
    )
}

export default ShowResults
