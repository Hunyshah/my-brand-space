"use client";

import { useState } from "react";
import { createPost } from "@/actions/post.actions";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await createPost({
      title,
      content,
      coverImage: image,
    });

    alert("Post Created ✅");

    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        placeholder="Image URL (Cloudinary)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 w-full"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Create Post
      </button>
    </form>
  );
}
