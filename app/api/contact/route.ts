import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.RESEND_TO_EMAIL || "daniel@noko.com.py"],
      subject: `Nuevo mensaje de contacto desde NOKO - ${name}`,
      html: `
        <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #002eff; font-size: 28px; margin: 0;">NOKO</h1>
            <p style="color: #666; margin: 5px 0;">Nuevo mensaje de contacto</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #1a1a1a; margin-top: 0; font-size: 20px;">Información del contacto</h2>
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #002eff;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Empresa:</strong> ${company || "No especificada"}</p>
          </div>
          
          <div style="background: #fff; border: 2px solid #002eff; border-radius: 10px; padding: 25px; margin-bottom: 20px;">
            <h3 style="color: #002eff; margin-top: 0; font-size: 18px;">Mensaje:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-line;">${message}</p>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #1a1a1a; border-radius: 10px;">
            <p style="color: #fff; margin: 0; font-size: 14px;">
              📅 Enviado el ${new Date().toLocaleString("es-ES", {
                timeZone: "America/Asuncion",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      `,
      text: `
Nuevo mensaje de contacto desde NOKO

Nombre: ${name}
Email: ${email}
Empresa: ${company || "No especificada"}

Mensaje:
${message}

---
Enviado el ${new Date().toLocaleString("es-ES", { timeZone: "America/Asuncion" })}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
