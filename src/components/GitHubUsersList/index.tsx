import { useFetchGithubUsers } from '../../hooks/useFetchGithubUsers'
import { useNavigate } from 'react-router-dom'

export const GitHubUsersList = () => {
  const { data, isLoading, error } = useFetchGithubUsers()
  const navigate = useNavigate()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching users</p>

  return (
    <>
      <ul className="mb-8 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data?.items?.map((user) => (
          <li
            key={user.id}
            className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-md hover:cursor-pointer hover:shadow-lg"
            onClick={() => navigate(`/user/${user.login}`)}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="size-12 rounded-full border"
            />
            <span className="font-medium text-black/75 hover:text-black/90">
              {user.login}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
