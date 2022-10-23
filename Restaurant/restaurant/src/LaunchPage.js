import { Link } from "react-router-dom";
const LaunchPage = () => {
    return (
        <div>
            <h1>LaunchPage</h1>
            <button>
                <Link to="/signup">Signup</Link>
            </button>
            <button>
                <Link to="/login">Login</Link>
            </button>
        </div>
        
    )
}

export default LaunchPage;