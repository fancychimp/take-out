import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Order from "./Order";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/checkout" component={Order} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
