import React from "react";
import { Switch, Route } from 'react-router-dom';
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import Nav from './components/Nav/Nav';

export default (
    <div>
        <Nav />
        <Switch>
            <Route exact path="/" component={PageOne} />
            <Route path="/pageTwo/:id" component={PageTwo} />
            <Route path="/PageThree" component={PageThree} />
        </Switch>
    </div>
)

