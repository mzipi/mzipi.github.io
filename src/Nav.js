import './nav.css';
import { Link } from 'react-router-dom';

function Nav(){
  return(
    <div className="head">
      <nav>
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/tecno">TECNOLOGÍA</Link></li>
          <li><Link to="/juegos">VIDEOJUEGOS</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Nav;
