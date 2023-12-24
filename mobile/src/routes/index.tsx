import React,{ useContext} from "react";

import { View, ActivityIndicator } from "react-native";

import { AuthContext } from "../contexts/AuthContext";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){

    const { isAuthenticated } = useContext(AuthContext);
    const loading = false;

    if(loading){
        return(
            <View style={{flex: 1, backgroundColor: '#1d1d2e', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={60} color="#FFF" />
            </View>

        )
    }

    return(
        isAuthenticated ?  <AppRoutes/> : <AuthRoutes />
    )
}

export default Routes;