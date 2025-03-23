import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchProvider } from './components/SearchContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <SearchProvider>
      <App />
    </SearchProvider>
  </QueryClientProvider>
)
