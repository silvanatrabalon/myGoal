import React from 'react';
import "bootswatch/dist/slate/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList  from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navigation from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p4">
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route exact path="/new-task" component={TaskForm} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
