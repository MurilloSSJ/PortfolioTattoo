import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { HomePage } from "./Pages/HomePage";
const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes