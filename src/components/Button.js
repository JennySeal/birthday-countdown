const Button = ({color, text, onClick}) => {
    return (
    <div className="buttonBlock">
    <button 
        onClick={onClick}
        type="button" 
        style={{backgroundColor: color}}
>   
        {text}
        </button>
        </div>
    )
}

Button.defaultProps = {
    color: "dodgerblue"
}
export default Button
