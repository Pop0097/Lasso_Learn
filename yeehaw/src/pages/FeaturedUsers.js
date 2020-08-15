import React, { useEffect, useState } from 'react'
import '../styles/featuredusers.css';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UserCard from "../components/UserCard";
import db from "../firebase";

function FeaturedUsers() {
    
    const [featuredUsers, setFeaturedUsers] = useState([])
    useEffect(() => {
        db.collection("users").onSnapshot((snapshot) => {
            setFeaturedUsers(
                snapshot.docs.map((doc)=> doc.data()))
        })
    }, [])

    return(
        <div className="featured-users">
            <p>this is the featured users page</p>
            <div className="featured-users-container row-flex">
            {/* add key to each map child*/}
                {featuredUsers.map((user) => (
                    <UserCard user={user}/>
                ))}
            </div>
        </div>
    );
}

const HomeLink = () => (
    <p> Go back to <Link to="/">Home</Link> </p>
);

export default FeaturedUsers

export { HomeLink }


