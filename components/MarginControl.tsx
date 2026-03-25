"use client"

import { useEditor } from "@/lib/store"

export default function MarginControl() {
  const { canvas, setCanvas } = useEditor()

  return (
    <div>
      <input
        type="range"
        min={0}
        max={200}
        value={canvas.margin}
        onChange={(e) =>
          setCanvas({ ...canvas, margin: Number(e.target.value) })
        }
      />
    </div>
  )
}