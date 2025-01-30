import { InfoObject } from "../interfaces/interfaces.ts";

export default function WorkSection(props: {info: InfoObject}) {
    const { info } = props;

    return (
        <div className="text-dimensions work-section">
            <div className="picture-frame inline-block">
                <img src={info.picture} alt={info.name} className="section-picture"/>
            </div>
            <div className="inline-block description-section">
                <span className="inline-heading">{info.name}</span><br />
                <span className="inline-heading">{info.details}</span>
                {info.description.map(e => <p>{e}</p>)}
            </div>
        </div>
    )
}