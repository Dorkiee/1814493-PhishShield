import React, {Component} from "react";

export default class UserDetails extends Component {
    componentDidMount() {
        fetch("https://localhost:4000/app/Dashboard", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            }, 
            body: JSON.stringify ({
                token: window.localStorage.getItem("token"),
            }),
        })

        .then((response) => response.json())
        .then((data) => {
            console.log(data, "userData");
        });
    }
    render () {
        return (
            <div>Hi There</div>
        );
    }
}