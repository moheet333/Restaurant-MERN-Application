import { Link } from "react-router-dom";
const Login = (
    {nameCheck , emailCheck, setNameCheck, setEmailCheck, handleCheck}
) => {
    return (
        <main>
        <h1>Login</h1>
        <form onSubmit={handleCheck}>
          <label htmlFor="name">Name : </label>
          <input 
              id="name"
              type="text"
              required
              value={ nameCheck }
              onChange={(e) => setNameCheck(e.target.value)}
          ></input>
          <br />
          <label htmlFor="email">Email id : </label>
          <input 
              id="email"
              type="text"
              required
              value={ emailCheck }
              onChange={(e) => setEmailCheck(e.target.value)}
          ></input>
          <br />
          <button type="Submit">Submit</button>
        </form>
        <button>
          <Link to="/">Go back</Link>
        </button>
      </main>
    )
}

export default Login;