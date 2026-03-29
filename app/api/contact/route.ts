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

    const recipients = [
      process.env.CONTACT_EMAIL_1,
      process.env.CONTACT_EMAIL_2,
    ].filter(Boolean) as string[]

    const data = await resend.emails.send({
      from: "V&A Page <onboarding@resend.dev>",
      to: recipients,
      replyTo: email,
      subject: `Novo Diagnóstico Solicitado: ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Nova Solicitação de Diagnóstico</title>
        </head>
        <body style="margin:0;padding:0;background-color:#0f172a;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;padding:40px 16px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#0f172a 0%,#134e4a 100%);border-radius:16px 16px 0 0;padding:36px 40px 28px;text-align:center;border:1px solid #1e293b;border-bottom:none;">
                      <div style="display:inline-block;background-color:#14b8a6;border-radius:50%;width:52px;height:52px;line-height:52px;text-align:center;font-size:24px;margin-bottom:16px;">✉</div>
                      <h1 style="margin:0;font-size:22px;font-weight:700;color:#f1f5f9;letter-spacing:-0.3px;">Nova Solicitação de Diagnóstico</h1>
                      <p style="margin:8px 0 0;font-size:14px;color:#94a3b8;">Você recebeu uma nova solicitação via site</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="background-color:#1e293b;padding:32px 40px;border-left:1px solid #1e293b;border-right:1px solid #1e293b;">

                      <!-- Name field -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                        <tr>
                          <td style="background-color:#0f172a;border-radius:10px;padding:16px 20px;border:1px solid #334155;">
                            <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#14b8a6;text-transform:uppercase;letter-spacing:0.8px;">Nome</p>
                            <p style="margin:0;font-size:16px;font-weight:600;color:#f1f5f9;">${name}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Email field -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                        <tr>
                          <td style="background-color:#0f172a;border-radius:10px;padding:16px 20px;border:1px solid #334155;">
                            <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#14b8a6;text-transform:uppercase;letter-spacing:0.8px;">E-mail</p>
                            <p style="margin:0;font-size:16px;font-weight:600;color:#f1f5f9;">${email}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}?subject=Re: Diagnóstico Gratuito - V%26A"
                              style="display:inline-block;background-color:#14b8a6;color:#0f172a;text-decoration:none;font-weight:700;font-size:15px;padding:14px 32px;border-radius:8px;letter-spacing:0.2px;">
                              Responder ao Solicitante →
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#0f172a;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border:1px solid #1e293b;border-top:1px solid #1e293b;">
                      <p style="margin:0;font-size:12px;color:#475569;">Este e-mail foi gerado automaticamente pelo site <strong style="color:#94a3b8;">V&A</strong>.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
