import React from "react";
import "../styles.css"
import { UserInfo } from "./UserInfo";

export function CardVideo (props){
    function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
    }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.video.image} alt="Imagem do Video"/>
            <h4>{props.video.titulo}</h4>
            <UserInfo user={props.user}/>
        </div>
    );
}