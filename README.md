<div align="center">
<img src="https://media1.tenor.com/m/H8h2JQ-qYUkAAAAC/email-email-marketing.gif"/>

# Cloudflare Workers with Temporary Email

</div>
<br />

## Getting Started!
1. Clone this repository
```
git clone https://github.com/gohchengxian/temporary-email-service.git
cd ./temporary-email-service
```
2. Open wrangler.toml file
   - key in kv_namespaces,
   - key in routes (can be ignored)
   - key in under [vars] category, website_name, email_domain, contact_email, abuse_email
3. Go to [email workers](https://dash.cloudflare.com/?to=/:account/:zone/email/routing/routes)
   - Redirect Catch-all to your workers
4.  Deploy it
5.  You may enjoy your service now!
```
npx wrangler deploy
```

<br/>

## information
- The kv namespace you might put as "kv4email"
