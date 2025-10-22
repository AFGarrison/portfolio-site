import BlogHeader from "../../components/blog-header.tsx";
import { Handlers } from "$fresh/server.ts";
import { getPosts } from "../../utils/post-functions.ts";
import { Post } from "../../interfaces/interfaces.ts";
import { PageProps } from "$fresh/server.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function Categories(props: PageProps<Post[]>) {
  const posts = props.data;

  return (
    <div>
      <BlogHeader />
      <div id="blog-contents" className="column-stack">
        <h2>Categories</h2>
        <br />
        <div id="categories-group">
            {posts.filter((e, i, a) => !a.slice(0, i).some(f => f.category === e.category)).map((e, index) => <a key={index} className="category-link internal" href={`/nippon-things/category/${e.category}`}><div className="gray-out">{e.category}</div></a>)}
        </div>
      </div>
    </div>
  );
}