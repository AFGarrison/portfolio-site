import { actionBlock } from "../interfaces/interfaces.ts";

export default function CodingExample(props: actionBlock) {
    return (
        <div className="display-area">
            <h4>{props.name}</h4>
            <p>{props.details}</p>
            <img src={props.picture} alt={props.name} />
            {props.description.map(e => <p>{e}</p>)}
            {props.action}
        </div>
    )
}