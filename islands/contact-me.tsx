import Footer from "../components/footer.tsx";

export default function ContactMe() {
  const account = "andrewfgarrison";
  const domain = "gmail";
  const extension = "com";
  function fireLink() {
    globalThis.location.href = "mailto:" + account + "@" + domain + "." +
      extension;
  }

  return (
    <div id="contact-me" className="section-dimensions">
      <div className="text-dimensions">
        <div className="center-text">
          <h3 className="section-title">Contact Me</h3>
        </div>
        <div className="list-column third-size center-text">
          <div className="text-block">
            <p>My GitHub contains all the code for my programming examples.</p>
          </div>
          <a href="">
            <button>GitHub</button>
          </a>
        </div>
        <div className="list-column third-size center-text">
          <div className="text-block">
            <p>
              You can read my resume for more detailed information on my
              education and work history.
            </p>
          </div>
          <a href="">
            <button>My Resume</button>
          </a>
        </div>
        <div className="list-column third-size center-text">
          <div className="text-block">
            <p>I also have a LinkedIn page.</p>
          </div>
          <a href="">
            <button>LinkedIn</button>
          </a>
        </div>
        <div className="direct-contact center-text">
          <p>
            If you would like to contact me directly, feel free to use the
            button below.
          </p>
          <button onClick={fireLink}>Contact Me</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
