export function getTemplate(day: string) {
  if (day === "sexta") {
    return {
      bg: "gradient-purple",
      title: "BINGOKÊ",
      style: "neon"
    }
  }

  if (day === "sabado") {
    return {
      bg: "gradient-red",
      title: "DRAG SHOW",
      style: "glam"
    }
  }

  if (day === "domingo") {
    return {
      bg: "gradient-green",
      title: "VIDEOKÊ",
      style: "soft"
    }
  }
}