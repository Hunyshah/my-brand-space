export function UploadWidget() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-600">
        Upload files here for posts and projects.
      </p>
      <button className="mt-4 rounded bg-slate-900 px-4 py-2 text-white">
        Choose file
      </button>
    </div>
  );
}
