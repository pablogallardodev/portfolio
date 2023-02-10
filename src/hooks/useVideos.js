import { useState, useEffect } from 'react'
const { VITE_YOUTUBE_APIKEY, VITE_PLAYLIST_ID, VITE_PLAYLIST_POPULAR } = import.meta.env

const useVideos = () => {
  const [videos, setVideos] = useState([])
  const [popularVideos, setPopularVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${VITE_PLAYLIST_ID}&maxResults=5&key=${VITE_YOUTUBE_APIKEY}`)
      .then((res) => res.json())
      .then(({ items }) => {
        const videosArray = items.map(({ snippet }) => {
          const { title, thumbnails, resourceId } = snippet
          const { videoId } = resourceId
          const { medium } = thumbnails

          return {
            videoUrl: `https://youtu.be/${videoId}`,
            imgUrl: medium.url,
            title
          }
        })
        setVideos(videosArray)

        return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${VITE_PLAYLIST_POPULAR}&maxResults=5&key=${VITE_YOUTUBE_APIKEY}`)
      }).then((res) => res.json())
      .then(({ items }) => {
        const videosArray = items.map(({ snippet }) => {
          const { title, thumbnails, resourceId } = snippet
          const { videoId } = resourceId
          const { medium } = thumbnails

          return {
            videoUrl: `https://youtu.be/${videoId}`,
            imgUrl: medium.url,
            title
          }
        })
        setPopularVideos(videosArray)
        setLoading(false)
      })
  }, [])

  return { videos, loading, popularVideos }
}

export default useVideos
