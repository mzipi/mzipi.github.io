import Main from './Main';
import Blog from './Blog';
import Portfolio from './Portfolio';
import './app.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="head">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
