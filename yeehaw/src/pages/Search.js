import React, { useState, useEffect } from 'react'
import { useStateValue } from "../StateProvider";
import { HomeLink } from './FeaturedUsers';
import db from '../firebase';
import UserCard from "../components/UserCard";

function Search() {
    const [{search}, dispatch] = useStateValue();
    const [searchResults, setSearchResults] = useState([]);

    var userRef = db.collection("users");
    var query = userRef.where("coursesOffered", "array-contains", search);
    
    query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for(let doc of docs) {
            setSearchResults(prevSearchResults => {
                return [
                    doc.data(),
                    ...prevSearchResults
                ]
            })
        }
    });

    return (
        <div>
            <HomeLink />
            <h3>Results for "{ search }" </h3>
            { searchResults.map((user) => (
                <UserCard user={user} />
            ))}
        </div>
    );
}

export default Search
