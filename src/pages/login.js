import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const history = useNavigate();
  const [value, setValue] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const changeHandle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser && loggedUser.email === value.email && loggedUser.password === value.password) {
      localStorage.setItem('loggedin', true);
      history('/');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <div className="login_box">
        <h1>Login Page</h1>
      </div>
      <form onSubmit={submitHandle}>
        <div className="formcontainer">
          <div className="inputfiled">
            <label>Enter Your Email:</label><br /><br />
            <input type="email" name="email" className="inputbox" onChange={changeHandle} required />
          </div><br />
          <div className="inputfiled">
            <label>Enter Your Password:</label><br /><br />
            <input type="password" name="password" className="inputbox" onChange={changeHandle} required />
          </div><br />
          <div className="inputfield">
            <button className="formbtn" type="submit">Login</button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <p>If not registered, <Link to="/register" className="anchor">Register here</Link></p>
        </div>
      </form>
    </>
  );
}

export default Login;