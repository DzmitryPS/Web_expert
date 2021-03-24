import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { Header } from './components/header';
import { LogIn } from './pages/login';
import { Profile } from './pages/profile';
import {Main} from "./styles";

function App() {
    return (
        <>
            <Router>
                <Main>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/login" />
                    </Route>
                    <PublicRoute path="/login">
                        <LogIn />
                    </PublicRoute>
                    <PrivateRoute path="/profile">
                        <Profile />
                    </PrivateRoute>
                </Switch>
                </Main>
            </Router>
        </>
    );
}

export default App;
