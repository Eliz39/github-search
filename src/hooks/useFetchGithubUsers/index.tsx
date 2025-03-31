import { useSearch } from '../../components/SearchContext'
import { useQuery } from '@tanstack/react-query'
import { fetchGitHubUsers } from '../../api/fetchGitHubUsers'

export const useFetchGithubUsers = () => {
  const { username, page } = useSearch()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['githubUsers', username, page],
    queryFn: () => fetchGitHubUsers(username, page),
    enabled: false
  })

  const perPage = 30
  // GitHub's Search API limits search results to only the first 1000 results
  const totalUsers =
    data?.totalCount && data.totalCount > 1000 ? 1000 : data?.totalCount ?? 0
  const totalPages = Math.ceil(totalUsers / perPage)
  const hasNextPage = data?.linkHeader?.includes('rel="next"')
  const hasPrevPage = page > 1

  return {
    data,
    isLoading,
    error,
    refetch,
    hasNextPage,
    hasPrevPage,
    totalPages
  }
}
