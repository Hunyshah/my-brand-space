interface EditProjectPageProps {
  params: { id: string };
}

export default function EditAdminProjectPage({ params }: EditProjectPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Project {params.id}</h1>
      <p className="mt-2 text-slate-600">Update details for this project.</p>
    </div>
  );
}
