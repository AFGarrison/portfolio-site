import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getPosts } from "../../utils/post-functions.ts";
import { Post } from "../../interfaces/interfaces.ts";
import BlogHeader from "../../components/blog-header.tsx";
import PostCard from "../../components/postcard.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function Home(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main>
      <BlogHeader />
      <div id="blog-contents" className="column-stack">
        <h2>Latest Post</h2>
        <div id="latest-post">
          <PostCard post={posts[0]} />
        </div>
        <h2>Recent Posts</h2>
        <div id="recent-posts">
          {posts.slice(1, 11).map((post, index) => (
            <a href={`/nippon-things/posts/${post.slug}`} key={index}>
              <div className="post-block recents-link">
                <span className="recents-title">{post.title}</span>
                <span className="recents-date">
                  {new Date(post.publishedAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <hr />
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
