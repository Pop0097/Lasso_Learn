import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';
import { useStateValue } from "../StateProvider";
import { useHistory } from 'react-router-dom';

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

function Header() {
    return(
        <div className="HeaderContainer">
            <div className="row height100">
                <div className="col-md-3 col-2 my-auto HeaderLogo text-center">
                    <h1>LLearn!</h1>
                </div>
                <div className="col-md-6 col-8 my-auto">
                    <SearchBar />
                </div>
                <div className="col-md-3 col-2 my-auto AccountLink text-center">
                    <p>Account </p>
                </div>
            </div>
        </div>
    );
}

export default Header
