export function validateProject(data: unknown) {
  return typeof data === "object" && data !== null;
}
