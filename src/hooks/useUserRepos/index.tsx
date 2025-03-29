import { useQuery } from '@tanstack/react-query'
import { fetchUserRepos } from '../../api/fetchUserRepos'

export const useUserRepos = (login: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userRepos', login],
    queryFn: () => fetchUserRepos(login),
    enabled: true
  })

  return { data, isLoading, isError, error }
}
