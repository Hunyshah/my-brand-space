import Link from "next/link";

export default function AdminProjectsPage() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link href="/admin/projects/create" className="text-sm text-blue-600">
          Add new project
        </Link>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border bg-white p-4">
          Project item placeholder
        </div>
      </div>
    </section>
  );
}
