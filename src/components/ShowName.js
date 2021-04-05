import Moment from 'react-moment'
const ShowName = ({values}) => {
    const birthday = (values.birthday);
     return (
        <div>
            <h1 style={{color: values.color}}>Hi {values.username}!</h1>
            <h2>You were born on the <Moment format = "Do MMMM YYYY">{birthday}
            </Moment></h2>
        </div>
    )
}

export default ShowName
