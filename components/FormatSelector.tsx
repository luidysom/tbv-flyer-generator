"use client"

import { useEditor } from "@/lib/store"

export default function FormatSelector() {
  const { setCanvas, canvas } = useEditor()

  return (
    <div>
      <button onClick={() => setCanvas({ ...canvas, width: 1080, height: 1350 })}>
        Feed
      </button>

      <button onClick={() => setCanvas({ ...canvas, width: 1080, height: 1920 })}>
        Story
      </button>
    </div>
  )
}