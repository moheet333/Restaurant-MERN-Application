import { Link } from "react-router-dom";
const SignUp = ({
    name, setName, email, setEmail, handleSubmit 
}) => {
  return (
    <main>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input 
            id="name"
            type="text"
            required
            value={ name }
            onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <label htmlFor="email">Email id : </label>
        <input 
            id="email"
            type="text"
            required
            value={ email }
            onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <button type="Submit">Submit</button>
      </form>
      <button>
        <Link to="/">Go back</Link>
      </button>
    </main>
  );
};

export default SignUp;
