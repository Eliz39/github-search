import React from 'react'
import { useSearch } from '../SearchContext'

export const Input = () => {
  const { username, setUsername } = useSearch()

  return (
    <input
      type="text"
      value={username}
      onChange={(e) => {
        const value = e.target.value
        setUsername(value)
        sessionStorage.setItem('username', value)
      }}
      placeholder="Type username..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  )
}
