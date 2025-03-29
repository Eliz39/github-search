import React from 'react'
import { useParams } from 'react-router-dom'
import { useUserRepos } from '../../hooks/useUserRepos'

export const UserReposPage = () => {
  const { login } = useParams()
  const { data, isLoading, isError, error } = useUserRepos(login ?? '')

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>

  if (isError)
    return <p className="text-center text-red-500">Error: {error?.message}</p>

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-bold">
        GitHub Repositories of <strong>{login}</strong>
      </h2>

      <div className="space-y-4">
        {data?.length === 0 && !isLoading && !isError && (
          <p className="text-center text-gray-500">No repositories found.</p>
        )}

        {data?.map((repo) => (
          <div
            key={repo.id}
            className="rounded-lg border p-4 shadow-sm transition hover:shadow-md"
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                {repo.name}
              </h3>
            </a>
            <p className="text-gray-700">
              {repo.description || 'No description available'}
            </p>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🛠 {repo.language || 'N/A'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
