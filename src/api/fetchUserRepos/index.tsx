export const fetchUserRepos = async (login: string) => {
  const response = await fetch(`https://api.github.com/users/${login}/repos`)
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return response.json()
}
