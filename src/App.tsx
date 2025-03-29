import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserSearchPage } from './views/UserSearchPage'
import { UserReposPage } from './views/UserReposPage'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserSearchPage />} />
            <Route path="/user/:login" element={<UserReposPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
