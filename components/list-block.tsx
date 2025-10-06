export default function ListBlock(props: {title: string, contents: string[], callsToAction: {text: string, link: string}[]}) {
    return (
        <div className="page-margins">
            <h4 className="section-title orange-color">{props.title}</h4>
            <ul>
                {props.contents.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
            
            {props.callsToAction.map((e, i) => <a key={i} href={e.link}><div class="button">{e.text}</div></a>)}
        </div>
    )
}