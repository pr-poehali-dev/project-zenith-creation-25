import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с лендинга биобезопасности на почту менеджера"""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    company = body.get("company", "").strip()
    message = body.get("message", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": {"error": "Имя и телефон обязательны"},
        }

    smtp_host = os.environ.get("SMTP_HOST", "smtp.mail.ru")
    smtp_port = int(os.environ.get("SMTP_PORT", "465"))
    smtp_user = os.environ.get("SMTP_USER", "ra@telecom-master.ru")
    smtp_password = os.environ["SMTP_PASSWORD"]
    to_email = "ra@telecom-master.ru"

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #222;">
    <h2 style="color: #1d4ed8;">Новая заявка с сайта BioGuard</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
      <tr><td style="padding: 8px; background: #f1f5f9; font-weight: bold;">Имя</td>
          <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">{name}</td></tr>
      <tr><td style="padding: 8px; background: #f1f5f9; font-weight: bold;">Телефон</td>
          <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">{phone}</td></tr>
      <tr><td style="padding: 8px; background: #f1f5f9; font-weight: bold;">Компания</td>
          <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">{company or '—'}</td></tr>
      <tr><td style="padding: 8px; background: #f1f5f9; font-weight: bold;">Сообщение</td>
          <td style="padding: 8px;">{message or '—'}</td></tr>
    </table>
    <p style="margin-top: 20px; color: #64748b; font-size: 12px;">Заявка с лендинга bgtm.ru — система биобезопасности птицефабрик</p>
    </body></html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Заявка BioGuard: {name} / {phone}"
    msg["From"] = smtp_user
    msg["To"] = to_email
    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": {"ok": True},
    }