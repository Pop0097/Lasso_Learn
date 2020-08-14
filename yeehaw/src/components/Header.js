import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

const FORM_INITIAL_STATE = {
    search: '',
};

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { ...FORM_INITIAL_STATE };
    }

    onChange = (event) => {
        this.setStaet({ [event.target.name]: event.target.value });
    }
    
    onSubmit = (event) => {
        event.preventDefault();

        const { search } = this.state;

        alert(search);

        /* Call to the firestore database with the searched term to pull up results */
    }

    render() {
        const { search } = this.state;

        const isInvalid = search === '';

        return (
            <div className="SearchBar">
                <form className="SearchForm" onSubmit={this.onSubmit}>
                    <input type="text" value={search} onChange={this.onChange} id="search-input" placeHolder="Search for a Course!" />
                    <button disabled={isInvalid} id="submit-button" type="submit"> Search! </button>
                </form>
            </div>
        );
    }
}

function Header() {
    return(
        <div className="HeaderContainer">
            <div className="row">
                <div classname="col-3 my-auto HeaderLogo">
                    <h1>LLearn!</h1>
                </div>
                <div className="col-6 my-auto ">
                    <SearchBar />
                </div>
                <div className="col-3 my-auto AccountLink">
                    <p>Account Link</p>
                </div>
            </div>
        </div>
    );
}

export default Header
