import Header from "../../../components/header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost } from "../../../utils/posts.ts";
import { Post } from "../../../interfaces/interfaces.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main>
      <Header logo="" links={[{ link: "", text: "" }]} />
      <h1>{post.title}</h1>
      <time>
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}