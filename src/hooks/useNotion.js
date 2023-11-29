import { Client } from '@notionhq/client'

const notion = new Client({ auth: 'secret' })

export const useNotion = async () => {
  const projects = await notion.databases.query({
    database_id: 'database_id'
  })

  console.log(projects.results)
}
