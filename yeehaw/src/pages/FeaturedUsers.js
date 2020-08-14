import React, { useEffect } from 'react'
import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function FeaturedUsers() {
    /* Use Firestore to get 12 courses and display them in table format. Large page will be 3*4 and small page will be 2*6 */
    
    useEffect(() => {

    })

    return(

        <div className="featured-users-container">
            <h2 id="welcome-header"> Howdy ___(User's name)___! {/* User's username */}</h2>
            <hr className="center"/>
            <h3 id="featured-courses-header"> Featured Users </h3> 
        </div>
        {/* <div className="CoursesTableContainer">
            <div className="row">
                <div className="col-md-4 col-6">
                    <p>1</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>2</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>3</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>4</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>5</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>6</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>7</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>8</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>9</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>10</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>11</p>
                </div>
                <div className="col-md-4 col-6">
                    <p>12</p>
                </div>
            </div>
        </div> */}
    );
}

const HomeLink = () => (
    <p> Go back to <Link to="/">Home</Link> </p>
);

export default FeaturedUsers

export { HomeLink }


