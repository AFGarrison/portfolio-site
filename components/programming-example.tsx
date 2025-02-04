import { actionBlock } from "../interfaces/interfaces.ts";

export default function ProgrammingExample(props: actionBlock) {
    return (
        <div className="display-area center-text">
            <h4>{props.name}</h4>
            <p>{props.details}</p>
            <img src={props.picture} alt={props.name} className="example-picture"/>
            {props.description.map(e => <p>{e}</p>)}
            {props.action}
        </div>
    )
}