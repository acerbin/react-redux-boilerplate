import React from "react";
import { useSelector } from "react-redux";
import DashboardPage from "../components/DashboardPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

export const PublicRoute = ({load}) => {
    const auth = useSelector(state => state.auth)
    const isAuthenticated = !!auth.uid
    return (
        <div>
        {isAuthenticated ? <Header />: null}
        {isAuthenticated ? <DashboardPage /> : <LoginPage />}
        </div>
    )
}
