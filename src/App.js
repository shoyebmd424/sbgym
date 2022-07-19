import { Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './components/Join/Form';
import Home from './Home';

function App() {
  return (
    <>
    <div className='app'>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/join' component={Form}/>
    </Switch>
     </div>
    </>
  );
}

export default App;
