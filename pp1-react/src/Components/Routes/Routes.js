import React from "react";
import { Route, Switch } from "react-router-dom";
import Resume from '../../Pages/Resume';
import Home from '../../Pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" component={Resume} />
        </Switch>
    );
}

