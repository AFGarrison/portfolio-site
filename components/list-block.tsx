export default function ListBlock(props: {title: string, contents: string[], callsToAction: {text: string, link: string}[]}) {
    return (
        <div className="page-margins">
            <h4 className="section-title orange-color">{props.title}</h4>
            {props.contents.forEach(e => <p>{e}</p>)}
            {props.callsToAction.forEach(e => <a href={e.link}><div class="button">{e.text}</div></a>)}
        </div>
    )
}