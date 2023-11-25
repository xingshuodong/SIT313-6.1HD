import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Footer from './components/footer';
import HomePage from './page/homepage';
import Login from './page/login';
import SignUp from './page/signup';
import Table from './page/findjob';
import SubscribeSection from './components/subscribe';
import './app.css'


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/findjob" component={Table} />
                </Switch>
                <SubscribeSection />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
