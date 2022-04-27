export async function onRequestPost({ request, env }) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message)
    return new Response('Bad input', { status: 400 });

  await fetch('https://api.sendgrid.com/v3/mail/send', {
    body: JSON.stringify({
      from: {
        name: 'Decentree Form Response',
        email: 'filip@decentree.com',
      },
      replyTo: { email },
      personalizations: [
        {
          to: [
            {
              email: 'info@decentree.com',
            },
          ],
          dynamic_template_data: {
            email,
            name,
            message,
          },
        },
      ],
      template_id: 'd-438290a672054b63bce747e0b39397c6',
    }),
    headers: {
      'Authorization': 'Bearer ' + env.SENDGRID_TOKEN,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  return new Response('ok', { status: 200 });
}
