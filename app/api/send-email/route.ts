import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Chybí povinné údaje' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'Hadrons Web <noreply@resend.dev>',
      to: contactEmail!,
      subject: `Nová poptávka od ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nová poptávka</h2>
          <p><strong>Jméno:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Společnost:</strong> ${company}</p>` : ''}
          <h3>Zpráva:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Odpověď se odešle na: ${email}</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Hadrons <noreply@resend.dev>',
      to: email,
      subject: 'Potvrzení přijetí vaší poptávky',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Děkujeme za vaši poptávku</h2>
          <p>Ahoj ${name},</p>
          <p>Vaši poptávku jsme obdrželi a brzy vám odpovíme.</p>
          <p>Pokud máte jakékoli otázky, neváhejte nás kontaktovat.</p>
          <p style="margin-top: 30px;">S pozdravem,<br>Tým Hadrons</p>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Poptávka byla odeslána' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email error:', error)
    return NextResponse.json(
      { error: 'Chyba při odesílání poptávky' },
      { status: 500 }
    )
  }
}
