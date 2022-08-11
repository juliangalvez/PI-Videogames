import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from './theme/globalStyle.js';
import Landing from "./components/Landing";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/videogames" component={Home} />
        <Route path="/videogames/:id" component={CardDetail} />
        <Route exact path="/creategame" component={Form} />
      </div>
    </BrowserRouter>
  );
}

export default App;
