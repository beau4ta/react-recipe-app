import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from 'react-router-dom'
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
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 1rem;
`

const Login = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
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
