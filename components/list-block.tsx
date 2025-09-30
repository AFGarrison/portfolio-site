export default function ListBlock(input: {title: string, contents: string[], callsToAction: {text: string, link: string}[]}) {
    return (
        <div>
            <h4 class="section-title">{input.title}</h4>
            {input.contents.forEach(e => <p>{e}</p>)}
            {input.callsToAction.forEach(e => <a href={e.link}><div class="button">{e.text}</div></a>)}
        </div>
    )
}