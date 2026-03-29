import PostForm from "@/components/admin/post-form";

export default function CreatePostPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Post</h1>
      <PostForm />
    </div>
  );
}
