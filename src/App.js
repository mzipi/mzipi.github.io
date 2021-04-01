import Main from './Main';
import Nav from './Nav';
import Tech from './Tech';
import Games from './Games';
import Portfolio from './Portfolio';
import './nav.css';
import './article.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/tecno">
          <Tech />
        </Route>
        <Route exact path="/juegos">
          <Games />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
