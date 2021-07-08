import React from 'react';

import UserService from '../services/UserService.js';

export default class AdminUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: ""
        };
    }
    componentDidMount(){
        UserService.getModeratorBoard().then(
            response=>{
                this.setState({
                    content: response.data
                });
            },
            error=>{
                this.setState({
                    content: (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString()
                });
            }
        );
    }
    render(){
        return(
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.content}</h3>
                </header>
            </div>
        );
    }
}