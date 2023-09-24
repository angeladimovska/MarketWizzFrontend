import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useEffect, useState } from "react";
import './LoginRegister.css';
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  padding: 5px;
`

export const LoginRegisterForm = () => {
    const [ activeTab, setActiveTab ] = useState("login");

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         navigate("/forum");
    //     }
    // }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="login-register-wrapper">
            <div className="login-register-container">
                <div className="logo-column">
                    <h3>Добредојдовте на Market Wizard</h3>
                </div>
                <div className="vertical-line"/>
                <div className="login-register-column">
                    <div className="tabs">
                        <StyledLink
                            className={ `tab ${ activeTab === "login" ? "tab-active" : "" }` }
                            onClick={ () => handleTabChange("login") }
                        >
                            НАЈАВА
                        </StyledLink>
                        <StyledLink
                            className={ `tab ${ activeTab === "register" ? "tab-active" : "" }` }
                            onClick={ () => handleTabChange("register") }
                        >
                            РЕГИСТРАЦИЈА
                        </StyledLink>
                    </div>
                    { activeTab === "login" ? (
                        <LoginForm/>
                    ) : (
                        <RegisterForm/>
                    ) }
                </div>
            </div>
        </div>
    );
};