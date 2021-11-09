import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";


export const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render = {
            (props) => {
                const isAuth = auth.isAuthenticate();
                console.log(isAuth);
                if(isAuth === true) {
                    return(
                        <Component {...props}/>
                    );
                } else if(isAuth === false) {
                    return(
                        <Redirect to = {
                            {
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }
                        }/>
                    );
                } else {
                    return(
                        <div>Reload</div>
                    );
                }
            }
        }>
        </Route>
    );
}