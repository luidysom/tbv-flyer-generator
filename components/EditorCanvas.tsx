"use client"

import { useEditor } from "@/lib/store"

export default function EditorCanvas() {
  const { elements, canvas } = useEditor()

  const scale = 0.4

  return (
    <div
      style={{
        width: canvas.width * scale,
        height: canvas.height * scale,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        background: "black",
        position: "relative"
      }}
    >

      {/* SAFE AREA */}
      <div
        style={{
          position: "absolute",
          top: canvas.margin,
          left: canvas.margin,
          right: canvas.margin,
          bottom: canvas.margin,
          border: "2px dashed rgba(255,255,255,0.3)"
        }}
      />

      {elements.map((el: any) => (
        <div
          key={el.id}
          style={{
            position: "absolute",
            top: el.y,
            left: el.x,
            zIndex: el.zIndex || 1
          }}
        >
          {el.type === "text" && (
            <span style={{ color: "white" }}>
              {el.content}
            </span>
          )}

          {el.type === "image" && (
            <img src={el.src} width={120} />
          )}
        </div>
      ))}
    </div>
  )
}