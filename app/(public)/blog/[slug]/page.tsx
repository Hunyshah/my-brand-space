import { getPostBySlug } from "@/actions/post.actions";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="my-6" />
      )}

      <p>{post.content}</p>
    </div>
  );
}
