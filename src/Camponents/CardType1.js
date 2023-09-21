import React from "react"

function Card(props) {
    return (
        <div className="rippleCard1">
            <img className="CardImage" src={props.img} alt="image" />

            <div className="details">
                <h1 id="name1">{props.name}</h1>
                <p id="about1"> {props.about} </p>
                <p id="Whilelist1">Add to Whilelist</p>
            </div>
        </div>
    )
}
export default Card;