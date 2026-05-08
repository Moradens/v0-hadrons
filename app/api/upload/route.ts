import { put, del } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log("[v0] Upload API called")
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    console.log("[v0] File received:", file?.name, file?.size)

    if (!file) {
      console.log("[v0] No file in request")
      return NextResponse.json({ error: 'Žádný soubor' }, { status: 400 })
    }

    console.log("[v0] Uploading to Vercel Blob...")
    const blob = await put(file.name, file, {
      access: 'public',
    })

    console.log("[v0] Upload success:", blob.url)
    return NextResponse.json({ url: blob.url, pathname: blob.pathname })
  } catch (error) {
    console.error('[v0] Upload error:', error)
    return NextResponse.json({ error: 'Upload selhal: ' + (error as Error).message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'Chybí URL' }, { status: 400 })
    }

    await del(url)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json({ error: 'Smazání selhalo' }, { status: 500 })
  }
}
