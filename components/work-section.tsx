import { InfoObject } from "../interfaces/interfaces.ts";

export default function WorkSection(props: {info: InfoObject}) {
    const { info } = props;

    return (
        <div class="work-section">
            <h3>Work History</h3>
            <img src={info.picture} alt={info.name} class="section-picture inline-block"/>
            <div class="inline-block">
                <h3>{info.name}</h3>
                <h4>{info.details}</h4>
                {info.description.map(e => <p>{e}</p>)}
            </div>
        </div>
    )
}