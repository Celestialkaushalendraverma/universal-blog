import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogPage() {
  const { postName } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(`/posts/${postName}.md`)
      .then(res => res.text())
      .then(text => setContent(text))
  }, [postName])

  return (
    <div style={{ whiteSpace: 'pre-wrap', padding: '2rem' }}>
      <h1>{postName.replace(/-/g, ' ')}</h1>
      <p>{content}</p>
    </div>
  )
}

export default BlogPage
