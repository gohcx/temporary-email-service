<div align="center">
<img src="https://media1.tenor.com/m/H8h2JQ-qYUkAAAAC/email-email-marketing.gif"/>

# 通过Cloudflare Workers搭建临时邮件

</div>
<br />

## ANONS.EMAIL
<br />

[English](/README_en.md) | 中文文档

目前皆使用Cloudflare服务

## 网页预览
![image](https://github.com/gohcx/temporary-email-service/assets/63181027/c6cec50f-d12a-424c-904d-8ae6835f0f59)

## 前期准备
1.   开设[Cloudflare 账户](https://dash.cloudflare.com/sign-up)
2.   将域名托管至[Cloudflare](https://dash.cloudflare.com/?to=/:account/add-site)上
3.   创建全新的[Workers](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/workers/new)
4.   创建[kv空间](https://dash.cloudflare.com/?to=/:account/workers/kv/namespaces)，并记录其id，之后会用到
5.   本地安装wrangle 环境并登录
```
npm install wrangler@latest --save-dev
npx wrangler login
```
6.   电脑与Workers进行连接，执行以下命令
```
npx wrangler init --from-dash [Workers name]
```
[Workers name]替代成你的workers的名字，以下图距离，便是temp-mail:

![image](https://github.com/gohcx/temporary-email-service/assets/63181027/04ba81b5-ce63-4b4a-854c-c883fb08ed4d)

## 部署
1.   复制git仓库
```
git clone https://github.com/gohcx/temporary-email-service.git
cd ./temporary-email-service
```
2.   复制文件至wrangler环境中
3.   编辑wrangler.toml

| 函数                    | 说明                                           | 示例                                                           | 必填 |
| ---------------------- | ---------------------------------------------- | -------------------------------------------------------------- | -- |
| routes                 | 可以将服务的网址导入此                           | `routes = [ { pattern = "anons.email", custom_domain = true }]`| 非 |
| kv_namespace           | 邮件存储所需要的服务(binding必须是 **kv4email** )| `kv_namespaces = [{ binding = "kv4email", id = "xxxxxxxxxx" }]`| 是 |
| website_name           | 网站名称，将出现在导航栏中                       | `Anonymous mail`                                               | 是 |
| email_domain           | 可提供的域名选择                                | `'["anons.email", "example.com"]'`                             | 是 |
| contact_email          | 联络email                                      | `contact@anons.email`                                          | 是 |
| abuse_email            | 滥用举报email                                  | `abuse@anons.email`                                             | 是 | 
| custom_email_domain    | 自定义email的域名                              | `'["ct.anons.email"]'`                                          | 是 | 
| dropMail_email         | 进行删除邮件的部分                              | `drop@anons.email`                                              | 是 | 

4.   连接网站至workers中，[点我跳转](https://dash.cloudflare.com/?to=/:account/:zone/workers)，如下图

![image](https://github.com/gohcx/temporary-email-service/assets/63181027/90d685b1-229c-4300-acc5-cdd75a8863a4)

5.   开启[Catch-all address](https://dash.cloudflare.com/?to=/:account/:zone/email/routing/routes) 模式，并指向Workers 为邮件接受地
6.   在自定义邮箱处，将wrangler.toml 中dropMail_email的函数内的email 设置为(删除/DROP)
7.   若要添加其他域名可前往[Subdomain](https://dash.cloudflare.com/?to=/:account/:zone/email/routing/settings) 找到subdomain，并创建
8.   上传代码至Workers中
```
npx wrangler deploy
```

## Star History
多多支持本高中生吧 \( > u < ) _/
[![Star Rating](https://api.star-history.com/svg?repos=gohcx/temporary-email-service&type=Date)](https://star-history.com/#gohcx/temporary-email-service&Date)

## 赞助
<a href="https://ko-fi.com/gohcx" target="__blank" ><img src="https://assets-global.website-files.com/5c14e387dab576fe667689cf/64f1a9ddd0246590df69ea06_kofi_short_button_white%402x.png" width="30%"/></a>

## 项目灵感来源
 - [Email.ml](https://email.ml) 十分简洁的临时邮件！！
