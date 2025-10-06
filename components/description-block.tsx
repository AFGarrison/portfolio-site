export default function DescriptionBlock(props: {text: string[]}) {
    return (
        <div className="page-margins">
            {props.text.map((e, i) => <p key={i}>{e}</p>)}
        </div>
    )
}