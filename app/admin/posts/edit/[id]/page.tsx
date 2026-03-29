interface EditPostPageProps {
  params: { id: string };
}

export default function EditAdminPostPage({ params }: EditPostPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Post {params.id}</h1>
      <p className="mt-2 text-slate-600">
        Update the selected post content and metadata.
      </p>
    </div>
  );
}
