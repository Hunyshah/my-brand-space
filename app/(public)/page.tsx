import { BlogList } from "@/components/blog/blog-list";

export default function HomePage() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome to My Brand Space</h1>
        <p className="mt-4 text-slate-600">
          A public blog feed and portfolio landing page.
        </p>
      </div>
      <BlogList />
    </section>
  );
}
