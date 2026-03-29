import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios" },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: "V&A Page <onboarding@resend.dev>", // Use o e-mail verificado no Resend
      to: ["antoniopf.contact@gmail.com"], 
      subject: `Novo Diagnóstico Solicitado: ${name}`,
      html: `
        <h2>Nova solicitação de diagnóstico</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json(
      { error: "Erro ao enviar e-mail" },
      { status: 500 }
    )
  }
}
