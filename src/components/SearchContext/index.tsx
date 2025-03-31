import { createContext, useContext, useState, ReactNode } from 'react'

type SearchContextType = {
  username: string
  setUsername: (name: string) => void
  page: number
  setPage: (page: number) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState(
    sessionStorage.getItem('username') ?? ''
  )
  const [page, setPage] = useState(1)

  return (
    <SearchContext.Provider value={{ username, setUsername, page, setPage }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
