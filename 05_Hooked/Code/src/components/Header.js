import {Title} from "./Title";

export const Header = () => {
    return (
      <>    
      <header>  
        <nav className="navbar">
        <Title />
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
      </>
    );
  };