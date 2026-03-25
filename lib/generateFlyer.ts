export function generateFlyer(day: string) {
  if (day === "sexta") {
    return {
      title: "BINGOKÊ",
      promo: "1h CHOPP GRÁTIS 21h-22h",
      color: "purple"
    }
  }

  if (day === "sabado") {
    return {
      title: "DRAG SHOW",
      promo: "1h CHOPP 21h30-22h30",
      color: "red"
    }
  }

  if (day === "domingo") {
    return {
      title: "VIDEOKÊ",
      promo: "1h CHOPP 19h30-20h30",
      color: "green"
    }
  }
}