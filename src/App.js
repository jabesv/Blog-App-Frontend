import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home'
import UpdateBlog from './components/forms/UpdateBlog';
import About from './components/pages/About';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <h1 className='text-center' id='tilte1'> Blogs Frontend App </h1>
      
     <Switch>
      <Route exact path='/' render={routerProps => 
      <Landing {...routerProps} setUser={setUser}/> } /> 
      <Route path='/home' render={routerProps => <Home 
      {...routerProps} user={user} />} />
      <Route path='/update/:id' component={UpdateBlog} />
      <Route path='/about' render={routerProps => 
      <About {...routerProps} user={user} />} />
     </Switch>
    </div>
  );
}

export default App;
