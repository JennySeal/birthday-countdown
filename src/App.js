import Header from './components/Header';
import UseForm from './components/UseForm';
import ShowResults from './components/ShowResults';
import Button from './components/Button';
import {useState} from 'react';

const App = () => {
const [showHead, setShowHead] = useState(true);
const [showForm, setShowForm] = useState(true);
const [showResults, setShowResults] = useState(false);
const [values, handleChange] = UseForm({username: "", birthday: "", color:"#ff3322"});

const toggleResults = () => {
setShowResults(!showResults);
setShowForm(!showForm);
setShowHead(!showHead);
}
  
  return (
    <div className="container">
        {showHead&& <Header/>}  
        {showForm&& <form>
            <label className="formStyle">Your name:
            <input id="username" name="username" type="text" value={values.username} className="formStyle" autoComplete="off"
            onChange={handleChange}/>            
            </label>

            <label className="formStyle">The date you were born: 
            <input id="birthday" name="birthday" type="date" value={values.birthday} className="formStyle"
            onChange={handleChange}/>
            </label>

            <label className="formStyle">Your fave colour:
            <input id="color" name="color" type="color"  value={values.color} 
            onChange={handleChange}/>
            </label>
             
            <Button onClick={toggleResults} text="Click here to countdown" color={values.color}/>
        
        </form>}
        {showResults&&<ShowResults values={values} toggleResults={toggleResults}/>}

    </div>
  );
}

export default App;
