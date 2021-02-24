import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./data/main";
import page1 from "./data/page1";
import page2 from "./data/page2";
import page3 from "./data/page3";
import h from "./h";
function App() {
  return (
    <Router h={h}>
        <Route exact path="/" component={Main} />
        <Route exact path="/worklaws" component={Main} />
        <Route path="/P1" component={page1} />
        <Route path="/p2" component={page2} />
        <Route path="/P3" component={page3} />
    </Router>
  );
}

export default App;
