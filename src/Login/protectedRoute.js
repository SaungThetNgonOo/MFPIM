import React from "react";
import {Navigate} from 'react-router-dom'
const ProtectedRoute=({children,User})=>{
    if(!User){
        return <Navigate to='/' User={User}/>
    }
    return children;
}
export default ProtectedRoute