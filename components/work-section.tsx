import { InfoObject } from "../interfaces/interfaces.ts";

export default function WorkSection(props: {info: InfoObject}) {
    const { info } = props;

    return (
        <div className="work-section">
            <h3>Work History</h3>
            <img src={info.picture} alt={info.name} className="section-picture inline-block"/>
            <div className="inline-block">
                <span className="inline-heading">{info.name}</span><br />
                <span className="inline-heading">{info.details}</span>
                {info.description.map(e => <p>{e}</p>)}
            </div>
        </div>
    )
}