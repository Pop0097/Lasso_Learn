import React, { useState, useEffect } from 'react'
import { useStateValue } from "../StateProvider";
import db from '../firebase';
import UserCard from "../components/UserCard";
import "../styles/featuredusers.css";

function Search() {
    const [{search}, dispatch] = useStateValue();
    const [searchResults, setSearchResults] = useState([]);

    var userRef = db.collection("users");
    var query = userRef.where("coursesOffered", "array-contains", search).limit(10);
    
    query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for(let doc of docs) {
            console.log("Here");
            setSearchResults(prevSearchResults => {
                return [
                    doc.data(),
                    ...prevSearchResults
                ]
            })
        }
    });

    return (
        <div className="searchContainer">
            <p id="result-indication">Results for "{ search }" </p>
            { searchResults.map((user) => (
                <UserCard user={user} />
            ))}
        </div>
    );
}

export default Search
