import { Component } from "react";


class AddListing extends Component{
    constructor()
    {
        super();
        this.state = 
        {
            location: '',
            owner: '',
            rent:''
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            location: this.state.location,
            owner: this.state.owner,
            rent: this.state.rent
        };
    };

    render(){
        return null;
    }
}