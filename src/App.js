import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Landing from './components/pages/Landing';



function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <h1> Blogs Frontend </h1>
      
<Switch>
  <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser}/> } /> 
</Switch>

    </div>
  );
}

export default App;
