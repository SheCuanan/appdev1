import './App.css'
import AdminPanel from './AdminPannel';
import LoginForm from './LoginForm';

function App() {
  let isLoggedIn = false;

  return (
    <>
      <h1>Welcome to my App</h1>
      {isLoggedIn ? (<AdminPanel />) : (<LoginForm />)}
    </>
  );
}
 

export default App


