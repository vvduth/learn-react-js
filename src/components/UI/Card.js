import './Card.css';

const  Card = (props) => {
    const classes = 'card ' + props.className; //tell react that you can set class name in the custom compo
    //'card is a default class, no big deal
    return <div className = {classes}>{props.children}</div>
}


export default Card;

//cannot use a plain custom components as a parent, use childern to fix this