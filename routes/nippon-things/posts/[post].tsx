// deno-lint-ignore-file
import BlogHeader from "../../../components/blog-header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost } from "../../../utils/post-functions.ts";
import { Post } from "../../../interfaces/interfaces.ts";
import { render } from "@deno/gfm";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.post);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main>
      <BlogHeader />
      <div id="blog-contents" className="column-stack">
        <h1>{post.title}</h1>
        <time>
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div dangerouslySetInnerHTML={{ __html: render(post.content) }} />
        <a href={`../category/${post.category}`}>
          <div className="gray-out">{post.category}</div>
        </a>
      </div>
    </main>
  );
}
