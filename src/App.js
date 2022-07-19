import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home'



function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <h1> Blogs Frontend </h1>
      
     <Switch>
      <Route exact path='/' render={routerProps => 
      <Landing {...routerProps} setUser={setUser}/> } /> 
      <Route path='/home' render={routerProps => <Home 
      {...routerProps} user={user} />} />
     </Switch>
    </div>
  );
}

export default App;
