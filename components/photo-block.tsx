export default function PhotoBlock(alignment: "left" | "right", image: string, input: string) {
    switch (alignment) {
        case "left": 
            return (
                <div>
                    <image src={image}></image>
                    <p>{input}</p>
                </div>
            );
        case "right":
            return (
                <div>
                    <p>{input}</p>
                    <image src={image}></image>
                </div>
            );
    }
}