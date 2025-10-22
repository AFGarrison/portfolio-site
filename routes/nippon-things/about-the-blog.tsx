import BlogHeader from "../../components/blog-header.tsx";

export default function AboutTheBlog() {
    return (
        <div>
        <BlogHeader />
        <div id="blog-contents" className="column-stack">
            <h2>About The Blog</h2>
            <br />
            <p><i>Nippon Things</i> is a blog run by Andrew Garrison that discusses all things about Japan. Language, history, culture, current events, and other topics from the country are covered in blog posts that are meant to be both informative and entertaining.</p>
            <p>Updates every Monday.</p>
            <br />
            <h2>About the Author</h2>
            <p>Andrew Garrison is a writer and Japanese/English translator who has lived in Japan for close to a decade. His favorite topics are Japanese history and linguistics. He currently provides services in content creation and translation.</p>
            <p>For more information on services and commissions, feel free to check out his <a className="header-link" href="/">porfolio site</a>.</p>
        </div>
        </div>
    );
}