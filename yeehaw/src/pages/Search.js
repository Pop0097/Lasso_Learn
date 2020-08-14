import React from 'react'
import { useStateValue } from "../StateProvider";
import { HomeLink } from './FeaturedUsers';

function ResultsTable() {
    /* Call to the firestore database with the searched term to pull up results */
    const [{search}, dispatch] = useStateValue();

    return(
        <div>
            <p> Results Table! </p>
        </div>
    );
}

function Search() {
    const [{search}, dispatch] = useStateValue();

    return (
        <div>
            <HomeLink />
            <h3>Results for "{ search }" </h3>
            <ResultsTable/>
        </div>
    )
}

export default Search
