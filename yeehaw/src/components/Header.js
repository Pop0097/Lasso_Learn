import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';
import { useStateValue } from "../StateProvider";
import { useHistory, Link } from 'react-router-dom';
import db from "../firebase";

function SearchBar() {
    const [input, setInput] = useState("");
    const [{search}, dispatch] = useStateValue();
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
        <div className="SearchBar">
            <form className="SearchForm center" onSubmit={onSubmit}>
                <input name="input" type="text" value={input} onChange={onChange} id="search-input" placeHolder="Search for a Course!" />
                <button disabled={isInvalid} id="submit-button" type="submit"> Go </button>
            </form>
        </div>
    );
}

function Linker({ user }){
    return(
        <Link to={{
            pathname: '/account',
            state: {
                person: user
            }
        }}> 
            Account
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
                    <h1>LassoLearn</h1>
                </div>
                <div className="col-md-6 col-8 my-auto">
                    <SearchBar />
                </div>
                <div className="col-md-3 col-2 my-auto AccountLink text-center">
                    <Linker user={currentUser} />
                </div>
            </div>
        </div>
    );
}

export default Header
