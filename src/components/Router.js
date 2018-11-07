import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Payment from "./Payment";
import ShoppingCart from "./ShoppingCart";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/myOrder/" component={ShoppingCart} />
            <Route path="/checkout/" component={Payment} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
