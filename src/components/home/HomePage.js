import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{

    render(){

        return (
            <div className="jumbotron">
                <h1>React Slingshot</h1>

                <h2>Get Started</h2>
                <Link to="about" className="btn btn-primary btn-lg" >Learn More </Link>
            </div>
        );

    }

}

export default HomePage;