import { UserInterface } from '../../types/UserInterface'

export const fetchGitHubUsers = async (
  username: string,
  page: number = 1
): Promise<{
  items: UserInterface[]
  linkHeader: string | null
  totalCount: number
}> => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${username}&per_page=30&page=${page}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  const data = await response.json()
  const linkHeader = response.headers.get('Link')

  return { items: data.items, linkHeader, totalCount: data.total_count }
}
