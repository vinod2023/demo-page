import { Route, Switch } from 'react-router-dom';
import './App.css';
import FirstPage from './components/firstPage';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={FirstPage} exact />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}

export default App;