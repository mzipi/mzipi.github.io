import Main from './Main';
import Head from './Head';
import Blog from './Blog';
import Portfolio from './Portfolio';
import './app.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Switch>
        <Route exact path="/">
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
  )
}
export default App;
