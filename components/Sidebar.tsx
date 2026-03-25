"use client"

import { useEditor } from "@/lib/store"
import { v4 as uuid } from "uuid"

export default function Sidebar() {
  const { addElement } = useEditor()

  return (
    <div style={{ width: 250, padding: 10 }}>

      <button
        onClick={() =>
          addElement({
            id: uuid(),
            type: "text",
            content: "Texto",
            x: 50,
            y: 50,
            zIndex: 1
          })
        }
      >
        Texto
      </button>

      <button
        onClick={() =>
          addElement({
            id: uuid(),
            type: "image",
            src: "/placeholder.png",
            x: 100,
            y: 100,
            zIndex: 1
          })
        }
      >
        Imagem
      </button>
    </div>
  )
}