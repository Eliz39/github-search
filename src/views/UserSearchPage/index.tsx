import React from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { GitHubUsersList } from '../../components/GitHubUsersList'
import { Pagination } from '../../components/Pagination'
import { useFetchGithubUsers } from '../../hooks/useFetchGithubUsers'

export const UserSearchPage = () => {
  const { data, totalPages, refetch } = useFetchGithubUsers()

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <h1 className="mb-8 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl">
        Hi! Type a github username or part of it to display information about
        matching users. By clicking on the name display their repos.
      </h1>
      <div className="flex items-center justify-center">
        <Input />
        <Button />
      </div>
      <GitHubUsersList />
      {data !== undefined && data.items.length !== 0 && (
        <Pagination pageCount={totalPages} onPageChange={refetch} />
      )}
    </div>
  )
}
