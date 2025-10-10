import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getPosts } from "../../utils/post-functions.ts";
import { Post } from "../../interfaces/interfaces.ts";
import BlogHeader from "../../components/blog-header.tsx";

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div>
      <a href={`./posts/${post.slug}`}>
        <h3>
          {post.title}
        </h3>
        <time>
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div>
          {post.snippet}
          <div>{post.author}</div>
          <a href={`./category/${post.category}`}>
            <div className="gray-out">{post.category}</div>
          </a>
        </div>
      </a>
    </div>
  );
}

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
        <div id="latest-post"></div>
        <div id="recent-posts">
          {posts.map((post, index) => <PostCard post={post} key={index} />)}
        </div>
      </div>
    </main>
  );
}
