export default function AboutMe(props: {image: string}) {
    const { image } = props;
    return (
        <div id="about-me" className="center-text section-dimensions">
            <div id="my-picture">
                <img src={image} alt="Andrew Garrison" />
            </div>
            <p>I am an American living in Nagasaki, Japan since 2016. I have 6 years of experience in both front end/full stack development and the translation/provision of multilingual contents through work in the Japanese IT industry. My specializations are in ESC6 (JavaScript), Python, Linux (CENTOS), and the translation and localization of web and marketing contents. I also have experience in Japanese to English interpretation and legal translation, as well as technical writing and market research.</p>
            <p>I gain enjoyment from work when I get the chance to collaborate with people and find new opportunities. Solving problems is one of the most satisfying aspects of programming and product creation to me, and I value using front end/full stack development for the ability to create a visible result.</p>
        </div>
    )
}