import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await Promise.all([
      // 1. Confirmation to the visitor
      transporter.sendMail({
        from: `"Mohamad Joundi" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Got your message — I'll be in touch.",
        html: confirmationEmail(name),
      }),

      // 2. Notification to me
      transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: "mhmdjn0@gmail.com",
        subject: `New message from ${name}`,
        html: notificationEmail(name, email, message),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] mail error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

// ─── Email templates ────────────────────────────────────────────────────────

function confirmationEmail(name: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Message received</title>
</head>
<body style="margin:0;padding:0;background:#07111c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background:#07111c;padding:40px 16px;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" border="0"
               style="max-width:600px;width:100%;background:linear-gradient(160deg,#131f2f,#0c1521);
                      border-radius:24px;border:1px solid rgba(173,201,255,.1);overflow:hidden;">

          <tr>
            <td style="height:2px;background:linear-gradient(90deg,transparent,#47a4ff 40%,#43d6c9 70%,transparent);"></td>
          </tr>

          <tr>
            <td style="padding:44px 44px 0;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:rgba(71,164,255,.1);border:1px solid rgba(71,164,255,.2);
                             border-radius:10px;padding:8px 16px;">
                    <span style="font-family:'Courier New',monospace;font-size:13px;
                                 font-weight:700;letter-spacing:0.14em;color:#47a4ff;">
                      mhmdjnde.dev
                    </span>
                  </td>
                </tr>
              </table>

              <h1 style="margin:28px 0 0;font-size:36px;font-weight:800;
                         line-height:1.1;letter-spacing:-0.03em;color:#edf6ff;">
                Signal received,<br />
                <span style="color:#47a4ff;">${name}.</span>
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 44px 0;">
              <p style="margin:0 0 18px;font-size:15px;line-height:1.8;color:#9fb2ca;">
                Thanks for reaching out — your message landed safely. I read every
                message personally and will get back to you as soon as possible.
              </p>
              <p style="margin:0;font-size:15px;line-height:1.8;color:#9fb2ca;">
                In the meantime, feel free to explore my work or connect on the socials below.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 44px 0;">
              <div style="height:1px;background:rgba(173,201,255,.08);"></div>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 44px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background:rgba(71,164,255,.05);border:1px solid rgba(71,164,255,.12);
                            border-radius:16px;padding:20px 24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-family:'Courier New',monospace;
                               font-size:9px;letter-spacing:0.2em;text-transform:uppercase;
                               color:#62758d;">
                      What happens next
                    </p>
                    <p style="margin:0;font-size:14px;line-height:1.75;color:#9fb2ca;">
                      I'll review your message and reply directly to this email address.
                      For complex projects I typically respond within
                      <span style="color:#8fd5ff;font-weight:600;">24–48 hours</span>.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 44px 0;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="https://www.linkedin.com/in/mohammad-joundi/"
                       style="display:inline-block;padding:10px 20px;
                              background:rgba(255,255,255,.04);
                              border:1px solid rgba(173,201,255,.1);border-radius:10px;
                              font-size:12px;font-weight:600;letter-spacing:0.04em;
                              color:#9fb2ca;text-decoration:none;">
                      LinkedIn
                    </a>
                  </td>
                  <td>
                    <a href="https://github.com/mhmdjnde"
                       style="display:inline-block;padding:10px 20px;
                              background:rgba(255,255,255,.04);
                              border:1px solid rgba(173,201,255,.1);border-radius:10px;
                              font-size:12px;font-weight:600;letter-spacing:0.04em;
                              color:#9fb2ca;text-decoration:none;">
                      GitHub
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:36px 44px 44px;">
              <p style="margin:0;font-size:12px;color:#3d526a;line-height:1.6;">
                You're receiving this because you submitted the contact form at mhmdjnde.dev.
                No mailing list, no spam — just this one confirmation.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

function notificationEmail(name: string, email: string, message: string) {
  const escaped = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const ts = new Date().toLocaleString("en-US", {
    weekday: "short", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit", timeZoneName: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New contact message</title>
</head>
<body style="margin:0;padding:0;background:#07111c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background:#07111c;padding:40px 16px;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" border="0"
               style="max-width:600px;width:100%;background:linear-gradient(160deg,#131f2f,#0c1521);
                      border-radius:24px;border:1px solid rgba(173,201,255,.1);overflow:hidden;">

          <tr>
            <td style="height:2px;background:linear-gradient(90deg,transparent,#7e7cff 40%,#47a4ff 70%,transparent);"></td>
          </tr>

          <tr>
            <td style="padding:36px 40px 0;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:rgba(126,124,255,.1);border:1px solid rgba(126,124,255,.2);
                             border-radius:10px;padding:8px 16px;">
                    <span style="font-family:'Courier New',monospace;font-size:11px;
                                 font-weight:700;letter-spacing:0.14em;color:#b3b1ff;">
                      PORTFOLIO / NEW MESSAGE
                    </span>
                  </td>
                </tr>
              </table>

              <h1 style="margin:20px 0 4px;font-size:28px;font-weight:800;
                         letter-spacing:-0.03em;color:#edf6ff;">
                ${name}
              </h1>
              <p style="margin:0;font-family:'Courier New',monospace;font-size:11px;
                        color:#62758d;letter-spacing:0.06em;">
                ${ts}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background:rgba(255,255,255,.02);border:1px solid rgba(173,201,255,.09);
                            border-radius:14px;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid rgba(173,201,255,.06);">
                    <p style="margin:0 0 3px;font-family:'Courier New',monospace;font-size:9px;
                               letter-spacing:0.18em;text-transform:uppercase;color:#62758d;">Name</p>
                    <p style="margin:0;font-size:14px;color:#edf6ff;font-weight:600;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 3px;font-family:'Courier New',monospace;font-size:9px;
                               letter-spacing:0.18em;text-transform:uppercase;color:#62758d;">Email</p>
                    <a href="mailto:${email}"
                       style="font-size:14px;color:#47a4ff;text-decoration:none;font-weight:600;">
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 40px 0;">
              <p style="margin:0 0 10px;font-family:'Courier New',monospace;font-size:9px;
                        letter-spacing:0.18em;text-transform:uppercase;color:#62758d;">Message</p>
              <div style="background:rgba(255,255,255,.025);border:1px solid rgba(173,201,255,.08);
                          border-left:3px solid #47a4ff;border-radius:0 14px 14px 0;
                          padding:20px 24px;">
                <p style="margin:0;font-size:14px;line-height:1.8;color:#9fb2ca;
                          white-space:pre-wrap;">${escaped}</p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 40px 0;">
              <a href="mailto:${email}?subject=Re: Your message"
                 style="display:inline-block;padding:12px 28px;
                        background:linear-gradient(135deg,#47a4ff,#43d6c9);
                        border-radius:12px;font-size:13px;font-weight:700;
                        color:#07111c;text-decoration:none;letter-spacing:0.04em;">
                Reply to ${name}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 40px 40px;">
              <div style="height:1px;background:rgba(173,201,255,.06);margin-bottom:20px;"></div>
              <p style="margin:0;font-size:11px;color:#3d526a;line-height:1.6;">
                Sent from the contact form at mhmdjnde.dev
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
