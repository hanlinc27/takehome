import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EnglishQuiz } from "./pages/EnglishQuiz";
import { MathQuiz } from "./pages/MathQuiz";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/english" component={EnglishQuiz}/>
        <Route path="/math" component={MathQuiz}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
