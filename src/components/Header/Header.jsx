import { NavLink } from 'react-router-dom'
import './Header.css'
const nav__links = [
    {
      display: 'Todo List',
      path: '/ToDoList'
    },
    {
      display: 'Products List',
      path: '/ProductList'
    },
  ]
  
  const Header = () => {
    return (
      <header className="header">
        <div className="nav__wrapper">
          <div className="navigation">
            <div className="menu">
              {nav__links.map((item, index) => (
                <NavLink to={item.path} key={index}>{item.display}</NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;