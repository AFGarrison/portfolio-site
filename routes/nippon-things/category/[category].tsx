import BlogHeader from "../../../components/blog-header.tsx";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getCategory } from "../../../utils/post-functions.ts";
import { Post } from "../../../interfaces/interfaces.ts";
import PostCard from "../../../components/postcard.tsx";

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
