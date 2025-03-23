import { Input } from './Input'
import { Button } from './Button'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-8">
            Hi! Type a github username or part of it to display information about matching users. By clicking on the name display their repos.
          </h1>
          <div className="flex items-center justify-center">
          <Input/>
          <Button/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
