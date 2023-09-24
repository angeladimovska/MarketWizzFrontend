import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  //display: flex;
  //width: 100%;
  //align-items: center;
  //width: 100%;
  //max-width: 1200px;
`;


const Navigation = styled.nav`
  background-color: #7b9fb0;
  //display: flex;
  //justify-content: space-around;
  //margin: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  padding: 5px;
`
const SearchInput = styled.div`
  padding-top: 5px;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  margin: 10px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledInput = styled.input`
  margin: 10px;
  padding: 7px;
  font-size: 14px;
  text-align: center;
  border: none;
  border-radius: 15px;
  background-color: #f0f0f0;
`;

export const Header = () => {
    return (

        <Container>
            <Navigation className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">Market Wizard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/home" className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/categories">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                        </ul>
                        <SearchInput>
                            <StyledInput type="text" placeholder="" style={ { background: "#ffffff" } }/>
                            <StyledButton>
                                <FontAwesomeIcon icon={ faSearch } style={ { background: "#ffffff" } }/>
                            </StyledButton>
                        </SearchInput>
                        <StyledLink href="/login" className="navbar-text">Login |</StyledLink>
                        <StyledLink href="/register" className="navbar-text">Register</StyledLink>
                    </div>
                </div>
            </Navigation>
        </Container>

    )
}