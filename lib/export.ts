import { toPng } from "html-to-image"

export async function exportFlyer(node: HTMLElement) {
  const dataUrl = await toPng(node, {
    cacheBust: true,
    pixelRatio: 2
  })

  const link = document.createElement("a")
  link.download = "tbv-flyer.png"
  link.href = dataUrl
  link.click()
}