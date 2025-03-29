import { createContext, useContext, useState, ReactNode } from 'react'

type SearchContextType = {
  username: string
  setUsername: (name: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState(
    sessionStorage.getItem('username') ?? ''
  )

  return (
    <SearchContext.Provider value={{ username, setUsername }}>
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
