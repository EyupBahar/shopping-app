export function truncate(string: string, limit: number) {
  return string?.length > limit ? `${string.substr(0, limit)}...` : string;
}
