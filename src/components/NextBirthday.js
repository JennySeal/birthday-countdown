import Moment from 'react-moment';

export const NextBirthday = ({values, happyBirthday, nextBirthdayDate}) => {


    return (
        <div>
            <p>You will be <Moment diff={values.birthday} unit="years">{nextBirthdayDate}</Moment> years old.</p>
            {(happyBirthday) && <h3 className="Birthday">TODAY is your birthday! <br/>HAPPY BIRTHDAY!!</h3>}
            <p>Your next birthday is on a <Moment format="dddd">{nextBirthdayDate}</Moment></p>
        </div>
    )
}
export default NextBirthday