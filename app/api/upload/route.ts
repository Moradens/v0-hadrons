import { put, del } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'Žádný soubor' }, { status: 400 })
    }

    const blob = await put(file.name, file, {
      access: 'public',
    })

    return NextResponse.json({ url: blob.url, pathname: blob.pathname })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload selhal' }, { status: 500 })
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
