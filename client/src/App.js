import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, NavLink } from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Recipes Deluxe</Logo>
          <Login to={'/login'}>Log In!</Login>
          <Signup to={'/signup'}>Sign Up!</Signup>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 1rem;
`

const Login = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 1rem;
  &.active{
    padding: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #f27121, #e94057);
    color: white;
    }
`

const Signup = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  &.active{
    padding: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #f27121, #e94057);
    color: white;
    }
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`

export default App;
