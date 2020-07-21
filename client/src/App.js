import React from 'react';
import "bootswatch/dist/slate/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList  from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/new-task" component={TaskForm} />
      </Switch>
    </Router>

  );
}

export default App;
