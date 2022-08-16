import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from './theme/globalStyle.js';
import Landing from "./components/Landing";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import Form from "./components/Form";
import {PageProvider} from './PageContext'

function App() {
  return (
    <PageProvider>
    <BrowserRouter>
    <GlobalStyle/>
    
      <div className="App">
        <Route path="/videogames/:id" component={CardDetail} />
        <Route exact path="/videogames" component={Home} />
        <Route exact path="/creategame" component={Form} />
        <Route exact path="/" component={Landing} />
      </div>
    </BrowserRouter>
    </PageProvider>
  );
}

export default App;
