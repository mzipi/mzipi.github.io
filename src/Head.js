import './head.css';
import { Link } from 'react-router-dom';

function Head(){
  return(
    <div className="head">
      <nav>
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Head;
