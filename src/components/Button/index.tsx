import React from 'react'
import { useFetchGithubUsers } from '../../hooks/useFetchGithubUsers'

export const Button = () => {
  const { refetch } = useFetchGithubUsers()

  return (
    <button
      onClick={() => refetch()}
      className="rounded-lg bg-black/90 px-6 py-2 text-white transition hover:bg-black/80 focus:outline-none"
    >
      Search
    </button>
  )
}
