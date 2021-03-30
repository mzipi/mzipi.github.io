import Main from './Main';
import Head from './Head';
import './app.css';
import './head.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Head />
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
export default App;
