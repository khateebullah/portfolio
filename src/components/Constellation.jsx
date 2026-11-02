import { useEffect, useRef } from 'react'

export default function Constellation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const LINK = 130
    const MOUSE_LINK = 170
    const mouse = { x: null, y: null }
    let w = 0, h = 0, stars = [], raf

    const init = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(Math.floor((w * h) / 9000), 140)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
        tw: Math.random() * Math.PI * 2,
        ts: 0.01 + Math.random() * 0.02,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.vx
          s.y += s.vy
          s.tw += s.ts
        }
        if (s.x < 0) s.x = w
        if (s.x > w) s.x = 0
        if (s.y < 0) s.y = h
        if (s.y > h) s.y = 0

        const alpha = 0.55 + 0.45 * Math.sin(s.tw)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226, 232, 255, ${alpha})`
        ctx.fill()
      }

      // lines between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const d = Math.hypot(dx, dy)
          if (d < LINK) {
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `rgba(129, 140, 248, ${(1 - d / LINK) * 0.28})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }

        // lines to the mouse
        if (mouse.x !== null) {
          const d = Math.hypot(stars[i].x - mouse.x, stars[i].y - mouse.y)
          if (d < MOUSE_LINK) {
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - d / MOUSE_LINK) * 0.35})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = null; mouse.y = null }

    init()
    draw()
    window.addEventListener('resize', init)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />
}