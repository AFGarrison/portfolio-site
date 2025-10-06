export default function PhotoBlock(props: {alignment: "left" | "right", image: string, input: string}) {
    const { alignment, image, input } = props;
    switch (alignment) {
        case "left": 
            return (
                <div className="page-margins">
                    <image src={image}></image>
                    <p>{input}</p>
                </div>
            );
        case "right":
            return (
                <div className="page-margins">
                    <p>{input}</p>
                    <image src={image}></image>
                </div>
            );
    }
}