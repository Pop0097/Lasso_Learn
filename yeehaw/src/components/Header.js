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
        this.setState({ [event.target.name]: event.target.value });
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
                <form className="SearchForm center" onSubmit={this.onSubmit}>
                    <input name="search" type="text" value={search} onChange={this.onChange} id="search-input" placeHolder="Search for a Course!" />
                    <button disabled={isInvalid} id="submit-button" type="submit"> Go </button>
                </form>
            </div>
        );
    }
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
