import '../../Styles/Greeting.css'

const Greeting = ({ userName }) => {
    let date = new Date();
    let hour = date.getHours()
    let session = "";
    if (hour <= 12) {
        session = "Morning"
    } else {
        session = "Evening"
    }
    return (
        <div className="greeting-container">
            <span>{`Good ${session},${userName}`}</span>
            <span>{date.toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
    )
}

export default Greeting