import { useState, useEffect } from 'react'
const { VITE_NOTION_SECRET, VITE_NOTION_DATABASE_ID } = import.meta.env

export const useNotion = async () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const headersList = {
      Authorization: `Bearer ${VITE_NOTION_SECRET}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    }

    fetch(
      `https://api.notion.com/v1/databases/${VITE_NOTION_DATABASE_ID}/query`, {
        mode: 'no-cors',
        method: 'POST',
        headers: headersList
      }
    ).then((res) => res.json())
      .then((data) => {
        console.log('Notion - ', data)
      })

    setProjects([])
  }, [])

  return projects
}
