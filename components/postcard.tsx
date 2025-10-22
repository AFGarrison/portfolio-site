import { Post } from "../interfaces/interfaces.ts";

export default function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div className="post-block">
      <a href={`/nippon-things/posts/${post.slug}`}>
        <div className="column-stack image-frame">
          <img className="image-preview" src={`/pictures/blog-images/${post.image}`} alt={post.image} />
        </div>
        <div className="column-stack contents-frame">
          <h3>
            {post.title}
          </h3>
          <div>
            <time>
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          </div>
          <div>
            {post.snippet}
          </div>
        </div>
      </a>
      <a className="category-link" href={`/nippon-things/category/${post.category}`}>
        <div className="gray-out">{post.category}</div>
      </a>
    </div>
  );
}
