import React from "react";
import "../styles.css";

export function UserInfo (props) {

    return (
        <div className="userInfo">
            <img src={props.user.avatar}/>
            <p>{props.user.name}</p>
        </div>
    )
}