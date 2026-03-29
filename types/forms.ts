import { PostStatus } from "./post";

export interface CreatePostInput {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;

  coverImage?: string;
  coverImageAlt?: string;

  status: PostStatus;
  isFeatured?: boolean;

  metaTitle?: string;
  metaDescription?: string;

  tags?: string[]; // tag ids
}

export interface UpdatePostInput extends CreatePostInput {
  id: string;
}

export interface CreateProjectInput {
  title: string;
  description?: string;

  image?: string;

  liveUrl?: string;
  githubUrl?: string;

  techStack?: string;
}
