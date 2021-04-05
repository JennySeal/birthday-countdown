import Moment from 'react-moment'
const RhymeResults = ({values}) => {
    let birthdayDay = <Moment format='dddd'>{values.birthday}</Moment>
    let birthday = new Date(values.birthday);
    let greeting = "";
        const findTheRhyme = () => {
            const day = birthday.getDay();
            switch (day) {	
                case 0: return greeting = "Sunday's child is bonny and blithe, and good and gay!";
                case 1: return greeting = "Monday's child is fair of face!";
                case 2: return greeting = "Tuesday's child is full of grace!";
                case 3: return greeting = "Wednesday's child is in the know!";
                case 4: return greeting = "Thursday's child has far to go!";
                case 5: return greeting = "Friday's child is loving and giving!";
                case 6: return greeting = "Saturday's child thinks life is for living!";
                default: return greeting = "Greeting isn't working but at least you got here!";
                }
            }            
    findTheRhyme()            


    return (
        <div>
             <h3>You were born on a {birthdayDay}.</h3>   
             <h3>{greeting}</h3>   
        </div>
    )
}

export default RhymeResults
