export default function ContactMe() {
    const account = "andrewfgarrison";
    const domain = "gmail";
    const extension = "com";
    function addLink() {
        globalThis.location.href = "mailto:" + account + "@" + domain + "." + extension;
    }

    return (
        <div id="contact-me">
            <h3>Contact Me</h3>
            <div className="list-column third-size center-text">
                <p>My GitHub contains all the code for my programming examples.</p>
                <a href="">
                    <button>GitHub</button>
                </a>
            </div>
            <div className="list-column third-size center-text">
                <p>You can read my resume for more detailed information on my education and work history.</p>
                <a href="">
                    <button>My Resume</button>
                </a>
            </div>
            <div className="list-column third-size center-text">
                <p>I also have a LinkedIn page.</p>
                <a href="">
                    <button>LinkedIn</button>
                </a>
            </div>
            <div className="direct-contact center-text">
                <p>If you would like to contact me directly, feel free to use the button below.</p>
                <button onClick={addLink}>Contact Me</button>
            </div>
        </div>
    )
}