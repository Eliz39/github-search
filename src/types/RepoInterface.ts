export interface RepoInterface {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string | null
}
