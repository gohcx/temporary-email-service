<div align="center">
<img src="https://media1.tenor.com/m/H8h2JQ-qYUkAAAAC/email-email-marketing.gif"/>

# Temp mail service with Cloudflare Workers

</div>
<br />

## ANONS.EMAIL
<br />

English | [中文文档](/README.md)

All tools just using Cloudflare service

## Website preview
![image](https://github.com/gohcx/temporary-email-service/assets/63181027/c6cec50f-d12a-424c-904d-8ae6835f0f59)

## 前期准备
1.   Set up a [Cloudflare account](https://dash.cloudflare.com/sign-up).
2.   Host your domain on [Cloudflare](https://dash.cloudflare.com/?to=/:account/add-site).
3.   Create a brand new [Workers](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/workers/new).
4.   Establish a [kv namespace](https://dash.cloudflare.com/?to=/:account/workers/kv/namespaces), and make note of its ID for later use.
5.   Install the wrangle environment locally and log in:

```
npm install wrangler@latest --save-dev
npx wrangler login
```

6.   Connect your computer with Workers and execute the following command:

```
npx wrangler init --from-dash [Workers name]
```
Replace [Workers name] with the name of your workers, for example, in the following image, it is "temp-mail".

![image](https://github.com/gohcx/temporary-email-service/assets/63181027/04ba81b5-ce63-4b4a-854c-c883fb08ed4d)

## Deployment
1.   Copy the git repository:
```
git clone https://github.com/gohcx/temporary-email-service.git
cd ./temporary-email-service
```
2.   Copy files to the wrangler environment.
3.   Edit wrangler.toml

| Function               | Description                                                     | Example                                                        | required |
| ---------------------- | --------------------------------------------------------------- | -------------------------------------------------------------- | --- |
| routes                 | Import the service's URLs here.	                               | `routes = [ { pattern = "anons.email", custom_domain = true }]`| NO |
| kv_namespace           | Service needed for email storage (binding must be  **kv4email**)| `kv_namespaces = [{ binding = "kv4email", id = "xxxxxxxxxx" }]`| YES |
| website_name           | Website name, will appear in the navigation bar.	             | `Anonymous mail`                                               | YES |
| email_domain           | Available domain choices.	                                     | `'["anons.email", "example.com"]'`                             | YES |
| contact_email          | Contact email	                                                 | `contact@anons.email`                                          | YES |
| abuse_email            | Abuse report email	                                           | `abuse@anons.email`                                            | YES | 
| custom_email_domain    | Custom email domain	                                           | `'["ct.anons.email"]'`                                         | YES | 
| dropMail_email         | Portion for deleting emails	                                  | `drop@anons.email`                                             | YES | 

4.   Connect the website to Workers, [Redirect](https://dash.cloudflare.com/?to=/:account/:zone/workers),as shown below:

![image](https://github.com/gohcx/temporary-email-service/assets/63181027/90d685b1-229c-4300-acc5-cdd75a8863a4)

5.   Enable [Catch-all address](https://dash.cloudflare.com/?to=/:account/:zone/email/routing/routes) address mode and point it to Workers as the email recipient.   
6.   In the custom email section, set the email within the function dropMail_email in wrangler.toml to (DELETE/DROP).
7.   To add other domains, go to [Subdomain](https://dash.cloudflare.com/?to=/:account/:zone/email/routing/settings), find the subdomain, and create it.
8.   Upload the code to Workers.

```
npx wrangler deploy
```

## Star History
Please support me thanks \( > u < ) _/
[![Star Rating](https://api.star-history.com/svg?repos=gohcx/temporary-email-service&type=Date)](https://star-history.com/#gohcx/temporary-email-service&Date)

## Sponser
<img alt="sponser" src="https://assets-global.website-files.com/5c14e387dab576fe667689cf/64f1a9ddd0246590df69ea06_kofi_short_button_white%402x.png" width="30%"/>

## Inspired By
 - [Email.ml](https://email.ml) A very clean temp mail.
