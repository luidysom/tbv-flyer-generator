"use client"

import { supabase } from "@/lib/supabase"

export default function ImageUploader({ onUpload }: any) {
  const upload = async (e: any) => {
    const file = e.target.files[0]
    if (!file) return

    const fileName = `${Date.now()}-${file.name}`

    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, file)

    if (error) {
      console.error(error)
      return
    }

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(fileName)

    onUpload(data.publicUrl)
  }

  return <input type="file" accept="image/*" onChange={upload} />
}