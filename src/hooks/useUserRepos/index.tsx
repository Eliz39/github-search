import { useQuery } from '@tanstack/react-query'
import { fetchUserRepos } from '../../api/fetchUserRepos'
import { RepoInterface } from '../../types/RepoInterface'

export const useUserRepos = (login: string) => {
  const { data, isLoading, isError, error } = useQuery<RepoInterface[]>({
    queryKey: ['userRepos', login],
    queryFn: () => fetchUserRepos(login),
    enabled: true
  })

  return { data, isLoading, isError, error }
}
