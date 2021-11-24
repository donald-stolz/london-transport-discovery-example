export const fetcher = <T = any>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());
