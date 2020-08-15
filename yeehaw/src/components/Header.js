import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';
import { useStateValue } from "../StateProvider";
import { useHistory, Link } from 'react-router-dom';
import db from "../firebase";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

function SearchBar() {
    const [input, setInput] = useState("");
    const [state, dispatch] = useStateValue();
    let history = useHistory();

    const onChange = (event) => {
        setInput(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "set_search",
            search_value: input
        })
        console.log(input);
        setInput("");
        
        history.push("/search");
    }
    
    const isInvalid = input === '';

    return (
        <form className="SearchForm center" onSubmit={onSubmit}>
            <input name="input" type="text" value={input} onChange={onChange} id="search-input" placeHolder="Search for a Course!" />
            <button id="submit-button" type="submit">Search</button>
        </form>
    );
}

function Linker({ user2 }){ //Link to the account page 
    const [{ userPic }, dispatch] = useStateValue();
    return(
        <Link to={{
            pathname: '/account',
            state: {
                person: user2
            }
        }}>
            <img src={userPic} alt="" id="profile-image-small" className="center"/> 
        </Link> 
    );
}

function Header() {
    const [currentUser, setCurrentUser] = useState(null);

    const [{ user }, dispatch] = useStateValue();
    const userEmail = user.email;

    db.collection("users")
        .doc(userEmail)
        .onSnapshot((snapshot) => setCurrentUser(snapshot.data()));
    
    return(
        <div className="HeaderContainer">
            <div className="row height100">
                <div className="col-md-3 col-2 my-auto HeaderLogo text-center">
                    <h1> <StyledLink to="/">LassoLearn</StyledLink></h1>
                </div>
                <div className="col-md-6 col-8 my-auto">
                    <SearchBar />
                </div>
                <div className="col-md-3 col-2 my-auto AccountLink text-center">
                    <Linker user2={currentUser} />
                </div>
            </div>
        </div>
    );
}

export default Header
