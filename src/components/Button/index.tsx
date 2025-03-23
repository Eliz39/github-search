import React from 'react'
import { useFetchGithubUsers } from '../../hooks/useFetchGithubUsers'

export const Button = () => {
  const { refetch } = useFetchGithubUsers()

  return (
    <button
      onClick={() => refetch()}
      className="px-6 py-2 text-white bg-black/90 rounded-lg hover:bg-black/80 focus:outline-none transition"
    >
      Search
    </button>
  )
}
