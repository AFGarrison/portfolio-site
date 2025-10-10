import BlogHeader from "../../../components/blog-header.tsx";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getCategory } from "../../../utils/post-functions.ts";
import { Post } from "../../../interfaces/interfaces.ts";

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div>
      <a href={`../posts/${post.slug}`}>
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
          <a href={`../category/${post.category}`}><div className="gray-out">{post.category}</div></a>
        </div>
      </a>
    </div>
  );
}

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getCategory(ctx.params.category);
    return ctx.render(posts);
  },
};

export default function CategoryList(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <div>
      <BlogHeader />
      <div id="blog-contents" className="column-stack">
      {posts.map((post, index) => <PostCard post={post} key={index} />)}
    </div>
    </div>
  );
}
