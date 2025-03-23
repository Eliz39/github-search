import { useFetchGithubUsers } from '../../hooks/useFetchGithubUsers'

export const GitHubUsers = () => {
  const { data, isLoading, error } = useFetchGithubUsers()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching users</p>

  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data?.items?.map((user: any) => (
        <li
          key={user.id}
          className="flex items-center space-x-4 p-4 hover:cursor-pointer bg-white shadow-md hover:shadow-lg rounded-lg"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-12 h-12 rounded-full border"
          />
          <span className="text-black/75 hover:text-black/90 font-medium">
            {user.login}
          </span>
        </li>
      ))}
    </ul>
  )
}
