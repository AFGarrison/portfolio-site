export default function DescriptionBlock(props: {text: string[]}) {
    return (
        <div className="page-margins">
            <p>{props.text}</p>
        </div>
    )
}