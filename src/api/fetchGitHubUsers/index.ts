export const fetchGitHubUsers = async (username: string) => {
  const response = await fetch(`https://api.github.com/search/users?q=${username}`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
