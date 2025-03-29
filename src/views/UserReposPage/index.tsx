import React from 'react'
import { useParams } from 'react-router-dom'
import { useUserRepos } from '../../hooks/useUserRepos'

export const UserReposPage = () => {
  const { login } = useParams()
  const { data, isLoading, isError, error } = useUserRepos(login ?? '')

  if (isLoading) return <p className="text-gray-500 text-center">Loading...</p>

  if (isError)
    return <p className="text-red-500 text-center">Error: {error?.message}</p>

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        GitHub Repositories of <strong>{login}</strong>
      </h2>

      <div className="space-y-4">
        {data?.length === 0 && !isLoading && !isError && (
          <p className="text-gray-500 text-center">No repositories found.</p>
        )}

        {data?.map((repo: any) => (
          <div
            key={repo.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                {repo.name}
              </h3>
            </a>
            <p className="text-gray-700">
              {repo.description || 'No description available'}
            </p>
            <div className="mt-2 flex items-center gap-4 text-gray-500 text-sm">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🛠 {repo.language || 'N/A'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
