import { useSearch } from '../../components/SearchContext'
import { useQuery } from '@tanstack/react-query'
import { fetchGitHubUsers } from '../../api/fetchGitHubUsers'

export const useFetchGithubUsers = () => {
  const { username } = useSearch()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['githubUsers', username],
    queryFn: () => fetchGitHubUsers(username),
    enabled: false
  })

  return { data, isLoading, error, refetch }
}
