export default function Header(props: {logo: string, links: [{link: string, text: string}]}) {
    const logo = props.logo;
    const links = props.links;
    return (
        <div id="header">
            <div id="logo-frame" className="horizontal-block">
                <img src={logo} alt="logo-image" id="logo" />
            </div>
            <div id="menu-frame" className="horizontal-block">
                <ul>
                    {links.map(e => {
                        <li className="menu-button">
                            <a src={e.link}>{e.text}</a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}