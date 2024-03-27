const base = '/blogs'

export async function apiGetBlogList(): Promise<BlogAPI.BlogListItem[]> {
  const res = await fetch(`${base}/meta.json`, { method: 'GET' })
  return await res.json()
}

export async function apiGetBlogContent(bid: string | number): Promise<BlogAPI.BlogContent> {
  const res = await fetch(`${base}/${bid}.md`, { method: 'GET' })
  return await res.text()
}
