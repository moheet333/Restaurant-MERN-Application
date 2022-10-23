import { Link } from "react-router-dom";
const ThankYou = ({ handleReset }) => {
    return (
        <div>
            <h1>Thank you for placing order</h1>
            <h3>Your order is getting ready now!</h3>
            <button>
                <Link to="/menu" onClick={handleReset}>Go back</Link>
            </button>
        </div>
        
    )
}

export default ThankYou;