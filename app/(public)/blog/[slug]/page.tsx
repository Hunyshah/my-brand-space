import { getPostBySlug } from "@/actions/post.actions";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPostBySlug((await params).slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">{post.data?.title}</h1>

      {post.data?.coverImage && (
        <img
          src={post.data.coverImage}
          alt={post.data.title}
          className="my-6"
        />
      )}

      <p>{post.data?.content}</p>
    </div>
  );
}
