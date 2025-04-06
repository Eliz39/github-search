import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Input = () => {
  const [searchParams, setSearchParams] = useSearchParams('')
  const username = searchParams.get('username') || ''
  const paramsObj = Object.fromEntries(searchParams.entries())

  return (
    <input
      type="text"
      value={username}
      onChange={(e) => {
        setSearchParams({ ...paramsObj, username: e.target.value })
      }}
      placeholder="Type username..."
      className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}
