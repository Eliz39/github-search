import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserSearchPage } from './views/UserSearchPage'
import { UserReposPage } from './views/UserReposPage'

function App() {
  return (
    <div className="relative bg-white">
      <div className="pb-8 pt-12 sm:pt-24">
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
