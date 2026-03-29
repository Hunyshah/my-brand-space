export function validatePost(data: unknown) {
  return typeof data === "object" && data !== null;
}
