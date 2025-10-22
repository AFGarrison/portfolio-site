export default function BlogHeader() {
  return (
    <div id="blog-header" className="column-stack center-text">
      <a href="/nippon-things/home/" className="header-link">
        <img title="blog-logo" src="" alt="Nippon Things Logo" />
        <div>Nippon Things</div>
        <br />
        <div className="center-text">
          <a href="/nippon-things/about-the-blog" className="header-link">About the Blog</a>
        </div>
        <br />
        <div className="center-text">
          <a className="header-link" href="/nippon-things/categories">Categories</a>
        </div>
      </a>
    </div>
  );
}
