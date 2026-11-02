import { useEffect } from 'react'
import { site } from '../data/content'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = `${title} | ${site.name}`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])

  return null
}