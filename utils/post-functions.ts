import { Post } from "../interfaces/interfaces.ts";
import { extract } from "@std/front-matter/any";
import { join } from "@std/path";

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./blog-posts/", `${slug}.md`));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: (attrs as Post).title,
    publishedAt: new Date((attrs as Post).publishedAt),
    content: body,
    snippet: (attrs as Post).snippet,
    category: (attrs as Post).category
  };
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./blog-posts/");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

export async function getCategory(categoryName: string): Promise<Post[]> {
  const files = Deno.readDir("./blog-posts/");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    await getPost(slug).then(e => {
      if (e?.category === categoryName) {
        promises.push(e);
      }
    });
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}