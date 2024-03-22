// This is the worker code that will be executed in the Cloudflare edge
// environment. It will be executed for every email that is received by
// the worker.
// The worker code is written in JavaScript and uses the Cloudflare Workers
// API to interact with the email. The API is a subset of the standard Web API
const PostalMime = require('postal-mime');

export default {
  fetch: fetchs, email
}

function generateEmailUsername(domain) {
  var adjective = ["Enthusiastic", "Intelligent", "Creative", "Hardworking", "Happy", "Positive", "Energetic", "Humorous", "Thoughtful", "Quiet", "Pleasant", "Interesting", "Efficient", "Kind", "Zealous", "Independent", "Humble", "Beautiful", "Brave", "Lovely", "Unique", "Ardent", "Blissful", "Steadfast", "Joyful", "Honest", "Versatile", "Shrewd", "Meticulous", "Serene", "Curious", "Outgoing", "Considerate", "Sensitive", "Witty", "Equal", "Reliable", "Gentle", "Generous", "Balanced", "Resolute", "Flexible", "Dedicated", "Tolerant", "Calm", "Cool-headed", "Hopeful", "Perfect", "Shy", "Tranquil", "Cozy", "Solid", "Noble", "Capricious", "Tender", "Sharp", "Ambitious", "Pleased", "Dazzling", "Blissful", "Changeable", "Focused", "Comfortable", "Dynamic", "Adaptable", "Crazy", "Independent-minded", "Energetic", "Passionate", "Soft", "Inspirational", "Hardworking", "Confident", "Efficient", "Tenacious", "Excited", "Capricious", "Steady", "Infectious", "Enthusiastic", "Uninhibited", "Humorous", "Artistic", "Personable", "Alert", "Lively", "Eager", "Charismatic", "Friendly", "Charming", "Warm-hearted", "Understanding", "Deeply_humorous", "Charismatic", "Clever", "Blissful", "Extroverted", "Introverted", "Cautious", "Insightful"]
  var noun = ["Apple", "Tiger", "Ocean", "Guitar", "Smile", "River", "Elephant", "Mountain", "Sunshine", "Bicycle", "Camera", "Tree", "Moon", "Fire", "Library", "Adventure", "Butterfly", "Journey", "Symphony", "Potion", "Harmony", "Pencil", "Rainbow", "Feather", "Whisper", "Dream", "Diamond", "Meadow", "Courage", "Laughter", "Anchor", "Carousel", "Quasar", "Galaxy", "Mystery", "Beacon", "Harmony", "Serenity", "Eclipse", "Infinity", "Velocity", "Tranquility", "Miracle", "Orchestra", "Horizon", "Wilderness", "Castle", "Adventure", "Essence", "Galaxy", "Tornado", "Symphony", "Comet", "Legend", "Beacon", "Pineapple", "Festival", "Chocolate", "Harmony", "Echo", "Fountain", "Whisper", "Squirrel", "Sunset", "Volcano", "Telescope", "Cactus", "Blizzard", "Rhythm", "Penguin", "Breeze", "Potion", "Echo", "Velvet", "Stardust", "Cascade", "Dragon", "Harmony", "River", "Enigma", "Sapphire", "Carnival", "Butterfly", "Echo", "Harmony", "Seashell", "Lighthouse", "Velocity", "Symphony", "Elegance", "Whisper", "Meadow", "Serenity", "Galaxy", "Rainbow", "Courage", "Lullaby", "Horizon", "Adventure", "Cascade", "Bonsai", "Lighthouse", "Symphony", "Tulip", "Journey", "Bliss", "Cascade", "Destiny", "Lantern", "Symphony", "Comet", "Canyon", "Serenade", "Elegance", "Blossom", "Castle", "Carnival", "Symphony", "Essence", "Breeze", "Harmony", "Echo", "Velvet", "Stardust", "Lagoon", "Cascade", "Serenity", "Radiance", "Firefly", "Horizon", "Journey", "Harmony", "Cascade", "Quasar", "Bliss", "Serenity", "Symphony", "Fountain", "Mystery", "Journey", "Cascade", "Essence", "Eclipse", "Breeze", "Lighthouse", "Melody", "Zenith", "Cascade", "Blossom", "Radiance"];
  var username = adjective[Math.floor(Math.random() * adjective.length)].toLocaleLowerCase().replace(/ /g, "_") + "." + noun[Math.floor(Math.random() * noun.length)].toLocaleLowerCase().replace(/ /g, "_") + "@" + domain;
  return username;
}

import aboutHTML from './about.html';
import terms from './terms.html';
import privacy from './privacy.html';
import sitemap from './sitemap.html';
import robots from './robots.txt';
import custom_mail_html from './custom.html';

async function fetchs(request, env, ctx) {
  const url = new URL(request.url);
  try {
    var upgradeHeader = request.headers.get('Upgrade');
    if (!upgradeHeader || upgradeHeader != 'websocket') {
      try {
        switch (request.method) {
          case 'GET':
            switch (url.pathname) {
              case '/':
                var index = `
              <!DOCTYPE html>
              <html id="htmlid" lang="en">
                <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <meta charset="UTF-8">
                  <meta name="description" content="Welcome to our temporary email reception service. Quickly and securely receive temporary email addresses here. Receive verification codes and validation emails anytime, anywhere, protecting your real email privacy.">
                  <meta name="keywords" content="临时邮件, 邮件接收, 验证码接收, 匿名邮箱, 保护隐私, Temporary email, email reception, verification code reception, anonymous email, privacy protection">
                  <!-- Open Graph Protocol (OGP) meta tags for Facebook, Discord, etc. -->
                  <meta property="og:title" content="Temporary Email Reception Service - Fast and Secure">
                  <meta name="og:description" content="Welcome to our temporary email reception service. Quickly and securely receive temporary email addresses here. Receive verification codes and validation emails anytime, anywhere, protecting your real email privacy.">
                  <meta property="og:type" content="website">
                  <meta property="og:url" content="https://anons.email/">
                  <!-- Twitter Card meta tags for Twitter preview -->
                  <meta name="twitter:title" content="Temporary Email Reception Service - Fast and Secure">
                  <meta name="twitter:description" content="Welcome to our temporary email reception service. Quickly and securely receive temporary email addresses here. Receive verification codes and validation emails anytime, anywhere, protecting your real email privacy.">
                  <title>Temporary Email Reception Service - Fast and Secure</title>
                  <link rel="icon" href="https://img.icons8.com/?size=256&id=LPcVDft9Isqt&format=png">
                  <style>
                  .btn-bd-primary {
                    --bs-btn-font-weight: 600 !important;
                    --bs-btn-color: #fff !important; 
                    --bs-btn-bg: #712cf9 !important;
                    --bs-btn-border-color: #712cf9 !important;
                    --bs-btn-hover-color: #fff !important;
                    --bs-btn-hover-bg: #6528e0 !important;
                    --bs-btn-hover-border-color: #6528e0 !important;
                    --bs-btn-focus-shadow-rgb: rgb(112.520718,44.062154,249.437846) !important;
                    --bs-btn-active-color: #fff !important;
                    --bs-btn-active-bg: #5a23c8 !important;
                    --bs-btn-active-border-color: #5a23c8 !important;
                }
                  </style>
                  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css">
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
                </head>
                <body id="bodyid" style="min-height: 80vh !important;">
                  <div class="container">
                    <section id="nav" class="my-3">
                    <nav class="navbar navbar-expand-lg">
                      <div class="container-fluid">
                        <a class="navbar-brand my-auto disabled" href="/"><img alt="webpage-icon" height="40px" src="https://img.icons8.com/?size=128&id=LPcVDft9Isqt&format=png" class="mx-2"/>${env.website_name ? env.website_name : "Temp Mail"}</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar">
                          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-1">
                              <a class="nav-link active" aria-current="page" href="/about">About</a>
                            </li>
                            <li class="nav-item mx-1">
                              <a class="nav-link active" aria-current="page" href="/privacy">Privacy</a>
                            </li>
                            <li class="nav-item mx-1">
                              <a class="nav-link active" aria-current="page" href="/terms">Terms</a>
                            </li>
                            <li class="nav-item mx-1">
                              <a class="nav-link active" href="#" aria-current="page" onclick="navigator.share({title: 'Temp-mail', url: window.location.href}).then()">Share</a>
                            </li>
                            <li class="nav-item mx-1">
                              <a class="nav-link active" href="https://ko-fi.com/gohcx" target="__blank">Donate</a>
                            </li>
                            <li class="nav-item mx-1">
                              <button class="nav-link active" onclick="changeTheme()" href="#">Theme</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                    <hr id="line-2" style="border: 1px solid #000000;"/>
                    <div class="container-fluid" style="height: 10px"></div>
                    </section>
                    <section id="content" class="my-3" style="min-height: 75vh !important;">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-6">
                            <h1 class="my-3">Temporary Mail</h1>
                            <hr id="line-3" style="border: 1px solid #000000;"/>
                            <ul>
                              <li>Secure</li>
                              <li>Fast</li>
                              <li>Free</li>
                              <li>Disposable</li>
                              <li>Temporary</li>
                            </ul>
                            <div class="container-fluid" style="height: 10px"></div>
                            <div class="form-floating">
                              <select class="form-select" id="selectDomain" aria-label="Floating label select example">
                              </select>
                              <label for="selectDomain">Domain</label>
                            </div>
                            <div class="container-fluid" style="height: 10px"></div>
                            <div class="input-group mb-3" >
                              <input type="text" class="form-control" disabled placeholder="Email" aria-label="Email" id="temp-emailaddress" aria-describedby="button-addon2">
                              <button disabled class="btn btn-outline-primary" type="button" id="copy-email-button" onclick="navigator.clipboard.writeText(document.getElementById('temp-emailaddress').value);">Copy</button>
                            </div>
                            <p>Use this email to sign up for services, verify accounts, and more.</p>
                            <div class="container-fluid" style="height: 10px"></div>
                            <div id="button_group">
                              <button class="btn" onclick="start_email()" id="start_button">Start now</button>
                              <a class="btn mx-1 text-dark" href="/custom_mail" id='custom_email_button'>Custom email</a>
                            </div>
                          </div>  
                          <div class="col-md-6" style="height: auto !important;" id="inbox">
                            <img src="https://media.tenor.com/xc_PE3FS8dsAAAAi/everyday-canadian-box.gif" width="100%" alt="Waiting mail">
                          </div>
                        </div>
                      </div>
                    </section>
                    <section id="content" class="footer">
                      <div class="container-fluid" style="height: 30px;"></div>
                      <div class="container">
                        <div class="row">
                          <div class="col-6">
                            <p>© 2024 Temp Mail</p>
                          </div>
                          <div class="col-6">
                            <div class="d-flex justify-content-end">
                              <a href="https://github.com/gohcx/temporary-email-service" target="__blank" class="nav-link"><i class="fa-brands fa-github"></i> Github</a>
                            </div>
                          </div>
                        </div>
                    </section>
                  </div>
                  <script>
                  var start_emails = false;
                  var domain_list = ${env.email_domain ? env.email_domain : '["example.com"]'} ;
                  var domainHTML = '';
                  for (var i = 0; i < domain_list.length; i++) {
                    domainHTML += '<option value="' + domain_list[i] + '">' + domain_list[i] + '</option>';
                  }
                  document.getElementById('selectDomain').innerHTML = domainHTML;
                  var request_data;
                  var websocket;
                    function start_email() {
                      start_emails = true;
                      document.getElementById('start_button').disabled = true;
                      fetch('/start_email', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({domain: document.getElementById('selectDomain').value})
                      }).then(owo => owo.text()).then(async res => {
                        document.getElementById('temp-emailaddress').value = res;
                        document.getElementById('copy-email-button').disabled = false;
                        websocket = new WebSocket('wss://' + window.location.host);
                        websocket.onopen = function() {
                          console.log(res)
                          console.log('WebSocket is open now.');
                          websocket.send(res);
                        };
                        websocket.onclose = function(event) {
                          start_emails = false;
                          fetch('/stop_email', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({email: res})
                          });
                          document.getElementById('temp-emailaddress').value = '';
                          document.getElementById('copy-email-button').disabled = true;
                          document.getElementById('start_button').disabled = false;
                          if (event.wasClean) {
                            console.log('Connection closed cleanly, code=' + event.code + ' reason=' + event.reason);
                          } else {
                            console.log('Connection died');
                          }
                          clearInterval(request_data);
                        };
                        websocket.onmessage = async function(event) {
                          request_data = catchEmail(res);
                          if(!event.data.error) {
                            var theme = getCookie("theme");
                            if(theme == "dark") {
                              document.getElementById('inbox').innerHTML = "<h1 class='my-3'>Mail Box</h1><hr id='line-1' style='border: 1px solid #ffffff;' class='mb-3'/>";
                            } else {
                              document.getElementById('inbox').innerHTML = "<h1 class='my-3'>Mail Box</h1><hr id='line-1' style='border: 1px solid #000000;' class='mb-3'/>";
                            }
                            document.getElementById('inbox').innerHTML += '<div class="mx-2 my-2 accordion overflow-y-auto" id="inbox-email"></div>';    
                            document.getElementById('button_group').innerHTML += '<button class="btn btn-danger mx-3" id="end-button" onclick="closeMail()">End Mail</button>';
                          } else {
                            alert('Error: ' + event.data.message);
                          }
                        };
                      });
                    };
                    function closeMail() {
                      start_emails = false;
                      clearInterval(request_data);
                      fetch('/stop_email', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email: document.getElementById('temp-emailaddress').value})
                      });
                      document.getElementById('start_button').disabled = false;
                      document.getElementById('temp-emailaddress').value = '';
                      document.getElementById('copy-email-button').disabled = true;
                      document.getElementById('inbox').innerHTML = '<img src="https://media.tenor.com/xc_PE3FS8dsAAAAi/everyday-canadian-box.gif" width="100%" alt="Waiting mail">';
                      if(theme == "dark") {
                        document.getElementById('button_group').innerHTML = '<button class="btn btn-bd-primary" onclick="start_email()" id="start_button">Start now</button>';
                      } else {
                        document.getElementById('button_group').innerHTML = '<button class="btn btn-dark" onclick="start_email()" id="start_button">Start now</button>';
                      }
                      websocket.close();
                    };
                    function catchEmail(email) {
                      var interval = setInterval(()  => {
                        fetch('/email', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({email: email})
                        }).then(owo => owo.json()).then(async res => {
                          console.log(res);
                          var data = res[0].data;
                          document.getElementById('inbox-email').innerHTML = '';
                          data.forEach(element => {
                            document.getElementById('inbox-email').innerHTML += "<div class='accordion-item'><h2 class='accordion-header'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + data.indexOf(element) + "' aria-expanded='false' aria-controls='collapse" + data.indexOf(element) + "'>" + element.subject  + ' (From: ' + element.from + ')' + "</button></h2><div id='collapse" + data.indexOf(element) + "' class='accordion-collapse collapse' aria-labelledby='heading" + data.indexOf(element) + "' data-bs-parent='#inbox-email'><div class='accordion-body'><iframe width='100%' style='overflow-y: auto;' frameborder='0' srcdoc='" + element.content + "'></iframe></div></div></div>";
                          });
                        });
                      }, 1000*30);
                      return interval;
                    };
                    let theme = getCookie("theme");
                    if (theme == "dark") {
                        document.getElementById("line-2").style.border = "1px solid #ffffff";
                        document.getElementById("line-3").style.border = "1px solid #ffffff";
                        document.getElementById('start_button').classList.add('btn-bd-primary');
                        document.getElementById("custom_email_button").style.backgroundColor = "#15F5BA";
                        document.getElementById("bodyid").setAttribute("data-bs-theme", "dark");
                    } else {
                        document.getElementById("line-2").style.border = "1px solid #000000";
                        document.getElementById("line-3").style.border = "1px solid #000000";
                        document.getElementById('start_button').classList.add('btn-dark');
                        document.getElementById("custom_email_button").style.backgroundColor = "#15F5BA";
                        document.getElementById("bodyid").setAttribute("data-bs-theme", "light");
                    }
                    function changeTheme() {
                      var html = document.getElementById('bodyid');
                      if (html.getAttribute('data-bs-theme') == 'dark') {
                        setCookie("theme", "light", 365);
                        if(start_emails) {
                          document.getElementById('line-1').style.border = '1px solid #000000';
                        }
                        document.getElementById('line-2').style.border = '1px solid #000000';
                        document.getElementById('line-3').style.border = '1px solid #000000';
                        document.getElementById('start_button').classList.remove('btn-bd-primary');
                        document.getElementById('start_button').classList.add('btn-dark');
                        html.setAttribute('data-bs-theme', 'light');
                      } else {
                        setCookie("theme", "dark", 365);
                        if(start_emails) {
                          document.getElementById('line-1').style.border = '1px solid #ffffff';
                        }
                        document.getElementById('line-2').style.border = '1px solid #ffffff';
                        document.getElementById('line-3').style.border = '1px solid #ffffff';
                        document.getElementById('start_button').classList.remove('btn-dark');
                        document.getElementById('start_button').classList.add('btn-bd-primary');
                        html.setAttribute('data-bs-theme', 'dark');
                      }
                    }
                    function setCookie(cname, cvalue, exdays) {
                      const d = new Date();
                      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                      let expires = "expires=" + d.toUTCString();
                      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                  }
                  function getCookie(cname) {
                      let name = cname + "=";
                      let decodedCookie = decodeURIComponent(document.cookie);
                      let ca = decodedCookie.split(';');
                      for (let i = 0; i < ca.length; i++) {
                          let c = ca[i];
                          while (c.charAt(0) == ' ') {
                              c = c.substring(1);
                          }
                          if (c.indexOf(name) == 0) {
                              return c.substring(name.length, c.length);
                          }
                      }
                      return "";
                  }
                  </script>
                  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
                </body>
              </html>`;
                return new Response(index, {
                  headers: { 'content-type': 'text/html;charset=UTF-8' },
                });
                break;
              case '/about':
                return new Response(aboutHTML, {
                  headers: { 'content-type': 'text/html;charset=UTF-8' },
                });
                break;
              case '/terms':
                return new Response(terms, {
                  headers: { 'content-type': 'text/html;charset=UTF-8' },
                });
                break;
              case '/privacy':
                return new Response(privacy, {
                  headers: { 'content-type': 'text/html;charset=UTF-8' },
                });
                break;
              case '/contact_email':
                return new Response(env.contact_email, {
                  headers: { 'content-type': 'text/plain' },
                });
                break;
              case '/abuse_email':
                return new Response(env.abuse_email, {
                  headers: { 'content-type': 'text/plain' },
                });
                break;
              case '/website_name':
                return new Response(env.website_name, {
                  headers: { 'content-type': 'text/plain' },
                });
                break;
              case '/robots.txt':
                return new Response(robots, {
                  headers: { 'content-type': 'text/plain' },
                });
                break;
              case '/sitemap.xml':
                var text = sitemap;
                return new Response(text, {
                  headers: { 'content-type': 'text/xml' },
                });
                break;
              case '/favicon.ico':
                return Response.redirect('https://img.icons8.com/?size=256&id=LPcVDft9Isqt&format=png', 301);
                break;
              case '/custom_mail':
                return new Response(custom_mail_html, {
                  headers: { 'content-type': 'text/html;charset=UTF-8' },
                });
                break;
              case '/custom_mail_info':
                var json = {};
                json['email_domain'] = JSON.parse(env.custom_email_domain);
                json['website_name'] = env.website_name;
                return new Response(JSON.stringify(json), {
                  headers: { 'content-type': 'application/json' },
                });
              default:
                return Response.redirect((url.hostname), 301);
            };
            break;
          case 'POST':
            switch (url.pathname) {
              case '/start_email':
                var reqBody = (JSON.stringify(await request.json()));
                var domain = JSON.parse(reqBody).domain;
                if (domain == undefined || env.email_domain.indexOf(domain) == -1) {
                  return new Response('Domain not found', { status: 404 });
                } else {
                  var email = generateEmailUsername(domain);
                  var data = await env.kv4email.get('on_activeEmail');
                  if (!data || data == undefined || data == null || data == 'undefined' || data == 'null' || data == '[]' || data == '""' || data == '') {
                    await env.kv4email.put('on_activeEmail', JSON.stringify([{ email: email, data: [] }]));
                  } else {
                    var datas = await env.kv4email.get('on_activeEmail', { type: 'json' });
                    datas.push({ email: email, data: [] });
                    await env.kv4email.put('on_activeEmail', JSON.stringify(datas));
                  };
                  console.log("POST request /start_email")
                  console.log(await env.kv4email.get('on_activeEmail', { type: 'json' }));
                  return new Response(email, {
                    headers: { 'content-type': 'text/plain' },
                  });
                };
                break;
              case '/stop_email':
                var reqBody = (JSON.stringify(await request.json()));
                var data = await env.kv4email.get('on_activeEmail', { type: 'json' });
                await env.kv4email.put('on_activeEmail', JSON.stringify(data.filter(x => x.email !== JSON.parse(reqBody).email)));
                return new Response('success', { status: 200 });
                break;
              case '/email':
                var reqBody = (JSON.stringify(await request.json()));
                var data = await env.kv4email.get('on_activeEmail', { type: 'json' });
                var email = data.filter(x => x.email == JSON.parse(reqBody).email);
                console.log("POST request /email")
                console.log(email);
                if (email.length == 0) {
                  return new Response('Email not found', { status: 404 });
                } else {
                  return new Response(JSON.stringify(email), {
                    headers: { 'content-type': 'application/json' },
                  });
                };
                break;
              case '/check_ct_email':
                var reqBody = await request.json()
                var data = await env.kv4email.get('customEmail');
                if (!data || data == undefined || data == null || data == 'undefined' || data == 'null' || data == '[]' || data == '""' || data == '') {
                  return new Response('Username available', { status: 200 });
                } else {
                  var data_json = JSON.parse(data);
                  if (data_json.filter(owo => owo.email === reqBody['email']).length === 0) {
                    return new Response('Username available', { status: 200 });
                  } else {
                    return new Response('Username unavailable', { status: 200 });
                  };
                }
                break;
              case '/verifyWebhook':
                const init = {
                  headers: {
                    "content-type": "application/json;charset=UTF-8",
                  },
                };
                var reqBody = await request.json()
                var data = await env.kv4email.get('customEmail');
                if (!data || data == undefined || data == null || data == 'undefined' || data == 'null' || data == '[]' || data == '""' || data == '') {
                  if (reqBody['webhook'].startsWith('https://discord.com/api/webhooks/')) {
                    var verify_code = Math.floor(100000 + Math.random() * 900000);
                    try {
                      var fetch_webhook = await fetch(reqBody['webhook'], {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                          username: 'anons.email',
                          avatar_url: 'https://img.icons8.com/?size=256&id=LPcVDft9Isqt&format=png',
                          content: `Verify code: ${verify_code}`
                        })
                      });
                      if (fetch_webhook.status !== 204) {
                        var json = {};
                        json['error'] = true;
                        json['message'] = 'Invalid webhook';
                        return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                      } else {
                        var json = {};
                        json['error'] = false;
                        json['message'] = 'success';
                        json['verify_code'] = verify_code;
                        return new Response(JSON.stringify(json), {
                          headers: { 'content-type': 'application/json' },
                        });
                      };
                    } catch (error) {
                      var json = {};
                      json['error'] = true;
                      json['message'] = 'Invalid webhook';
                      return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                    }
                  } else {
                    var json = {};
                    json['error'] = true;
                    json['message'] = 'Invalid webhook';
                    return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                  }
                } else {
                  var data_json = JSON.parse(data);
                  var json = {};
                  if (data_json.filter(owo => owo.email === reqBody['email']).length !== 0) {
                    json['error'] = true;
                    json['message'] = 'Username unavailable';
                    return new Response(JSON.stringify(json), { status: 404, headers: { 'content-type': 'application/json' } });
                  } else {
                    var verify_code = Math.floor(100000 + Math.random() * 900000);
                    try {
                      var fetch_webhook = await fetch(reqBody['webhook'], {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                          username: 'anons.email',
                          avatar_url: 'https://img.icons8.com/?size=256&id=LPcVDft9Isqt&format=png',
                          content: `Verify code: ${verify_code}`
                        })
                      });
                      if (fetch_webhook.status !== 204) {
                        var json = {};
                        json['error'] = true;
                        json['message'] = 'Invalid webhook';
                        return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                      } else {
                        var json = {};
                        json['error'] = false;
                        json['message'] = 'success';
                        json['verify_code'] = verify_code;
                        return new Response(JSON.stringify(json), {
                          headers: { 'content-type': 'application/json' },
                        });
                      };
                    } catch (error) {
                      var json = {};
                      json['error'] = true;
                      json['message'] = 'Invalid webhook';
                      return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                    }
                  }
                };
                break;
              case '/connectWebhookCTEmail':
                var reqBody = await request.json()
                var data = await env.kv4email.get('customEmail');
                if (!data || data == undefined || data == null || data == 'undefined' || data == 'null' || data == '[]' || data == '""' || data == '') {
                  var request = await fetch(reqBody['webhook']);
                  if (request.status !== 200) {
                    var json = {};
                    json['error'] = true;
                    json['message'] = 'Invalid webhook';
                    return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                  } else {
                    var json = {};
                    json['error'] = false;
                    json['message'] = 'success';
                    json['webhook'] = reqBody['webhook'];
                    json['email'] = reqBody['email'];
                    env.kv4email.put('customEmail', JSON.stringify([{ email: reqBody['email'], webhook: reqBody['webhook'], type: 'discord_webhook' }]));
                    return new Response(JSON.stringify(json), { status: 200, headers: { 'content-type': 'application/json' } });
                  };
                } else {
                  var data = JSON.parse(data);
                  if (data.filter(owo => owo.email === reqBody['email']).length !== 0) {
                    var json = {};
                    json['error'] = true;
                    json['message'] = 'Username unavailable';
                    return new Response(JSON.stringify(json), { status: 404, headers: { 'content-type': 'application/json' } });
                  } else {
                    var request = await fetch(reqBody['webhook']);
                    if (request.status !== 200) {
                      var json = {};
                      json['error'] = true;
                      json['message'] = 'Invalid webhook';
                      return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                    } else {
                      var json = {};
                      json['error'] = false;
                      json['message'] = 'success';
                      json['webhook'] = reqBody['webhook'];
                      json['email'] = reqBody['email'];
                      env.kv4email.put('customEmail', JSON.stringify([{ email: reqBody['email'], webhook: reqBody['webhook'], type: 'discord_webhook' }]));
                      return new Response(JSON.stringify(json), { status: 200, headers: { 'content-type': 'application/json' } });
                    };
                  };
                };
                break;
              case '/verifyEmail':
                var reqBody = await request.json();
                var data = await env.kv4email.get('customEmail');
                if (!data || data == undefined || data == null || data == 'undefined' || data == 'null' || data == '[]' || data == '""' || data == '') {
                  var verify_code = Math.floor(100000 + Math.random() * 900000);
                  try {
                    const response = await fetch(`https://api.mailgun.net/v3/${env.mailGunDomain}/messages`, {
                      method: 'POST',
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": `Basic ${env.mailGun_apikey}`
                      },
                      body: new URLSearchParams({
                        from: `no-reply@${env.mailGunDomain}`,
                        to: reqBody.email2receive,
                        subject: "Verify code for anons.email",
                        text: `Congratulations, you just sent received an email from a anons.email.\nVerify code: ${verify_code}`
                      })
                    });
                    if(response.ok) {
                      var json = {};
                      json['error'] = false;
                      json['message'] = 'Username available';
                      json['verify_code'] = verify_code;
                      new Response(JSON.stringify(json), { status: 200, headers: { 'content-type': 'application/json' } });
                      await env.CF_MAILER.send(message);
                    } else {
                      var json = {};
                      json['error'] = true;
                      json['message'] = 'Invalid email';
                      return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                    }
                  } catch (e) {
                    var json = {};
                    json['error'] = true;
                    json['message'] = e.message;
                    return new Response(JSON.stringify(json), { status: 404, headers: { 'content-type': 'application/json' } });
                  };
                } else {
                  var data = JSON.parse(data);
                  if (data.filter(owo => owo.email === reqBody['email']).length !== 0) {
                    var json = {};
                    json['error'] = true;
                    json['message'] = 'Username unavailable';
                    return new Response(JSON.stringify(json), { status: 404, headers: { 'content-type': 'application/json' } });
                  } else {
                    console.log(reqBody)
                    var verify_code = Math.floor(100000 + Math.random() * 900000);
                    var formDate = new FormData();
                    formDate.append('from', `no-reply@${env.mailGun_domain}`);
                    formDate.append('to', reqBody.email2receive);
                    formDate.append('subject', "Verify code for anons.email");
                    formDate.append('text', `Congratulations, you just sent received an email from a anons.email.\nVerify code: ${verify_code}`);
                    try {
                      const response = await fetch(`https://api.mailgun.net/v3/${env.mailGun_domain}/messages`, {
                        method: 'POST',
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                          "Authorization": `Basic ${Buffer.from(`api:${env.mailGun_apikey}`).toString(
                            'base64',
                          )}`
                        },
                        body: formDate
                      });
                      console.log(env.mailGun_apikey)
                      console.log(response);
                      console.log(response.status);
                      if(response.ok) {
                        var json = {};
                        json['error'] = false;
                        json['message'] = 'Username available';
                        json['verify_code'] = verify_code;
                        new Response(JSON.stringify(json), { status: 200, headers: { 'content-type': 'application/json' } });
                        await env.CF_MAILER.send(message);
                      } else {
                        var json = {};
                        json['error'] = true;
                        json['message'] = 'Invalid email';
                        return new Response(JSON.stringify(json), { status: 400, headers: { 'content-type': 'application/json' } });
                      }
                    } catch (e) {
                      var json = {};
                      json['error'] = true;
                      json['message'] = e.message;
                      return new Response(JSON.stringify(json), { status: 404, headers: { 'content-type': 'application/json' } });
                    };
                  }
                };
                break;
              default:
                return new Response('Page not found', { status: 404 });
            };
            break;
          default:
            return new Response('Page not found', { status: 404 });
        };
      } catch (error) {
        console.error(error);
      }
    } else {
      const webSocketPair = new WebSocketPair();
      const [client, server] = Object.values(webSocketPair);
      server.accept();
      var email;
      server.addEventListener('message', async event => {
        var data = await env.kv4email.get('on_activeEmail', { type: 'json' });
        if (data.filter(x => x.email == event.data).length !== 0) {
          email = event.data;
          var json = {};
          json['error'] = false;
          json['message'] = 'success: connected';
          json['type'] = 'message';
          server.send(JSON.stringify(json));
        } else {
          server.close(1000, 'Error');
        }
      });
      server.addEventListener('close', async event => {
        console.log('Client disconnected');
        var data = await env.kv4email.get('on_activeEmail', { type: 'json' });
        await env.kv4email.put('on_activeEmail', data.filter(x => x.email !== email));
        console.log(await env.kv4email.get('on_activeEmail', { type: 'json' }));
      });
      return new Response(null, {
        status: 101,
        webSocket: client,
      });
    };
  } catch (error) {
    // Log the error for debugging
    return new Response('Internal Error', { status: 500 });
  }
}

async function email(message, env, ctx) {
  const rawEmail = await streamToArrayBuffer(message.raw, message.rawSize);
  const parser = new PostalMime.default();
  const parsedEmail = await parser.parse(rawEmail);
  //console.log(parsedEmail.html);
  //console.log(parsedEmail.text);
  //console.log(parsedEmail);
  //console.log(message.headers.get("to")); // joyful.castle@hhias.tech
  //console.log(message.from); // chengxiangoh357@gmail.com
  //console.log(message.headers.get("subject")); //title
  //console.log(message.headers.get("date"));//Sun, 11 Feb 2024 18:44:32 +0800
  //console.log(message.headers.get("content-type"));
  var data = await env.kv4email.get('on_activeEmail', { type: 'json' });
  if (data.filter(x => (x.email == (message.headers.get("to"))) || ((message.headers.get("to").split("<").length == 2) && (message.headers.get("to").split("<")[1].split(">").length == 2) && x.email == message.headers.get("to").split("<")[1].split(">")[0])).length == 0) {
    var ct_email = await env.kv4email.get('customEmail');
    if (!ct_email || ct_email == undefined || ct_email == null || ct_email == 'undefined' || ct_email == 'null' || ct_email == '[]' || ct_email == '""' || ct_email == '') {
      console.log("Address not allowed because no custom email found")
      return;
    } else {
      var ct_email_json = JSON.parse(ct_email);
      console.log(ct_email_json.filter(x => (x.email == (message.headers.get("to"))) || ((message.headers.get("to").split("<").length == 2) && (message.headers.get("to").split("<")[1].split(">").length == 2) && x.email == message.headers.get("to").split("<")[1].split(">")[0])));
      console.log(ct_email_json.filter(x => (x.email == (message.headers.get("to")))));
      console.log(ct_email_json.filter(x => ((message.headers.get("to").split("<").length == 2) && (message.headers.get("to").split("<")[1].split(">").length == 2) && x.email == message.headers.get("to").split("<")[1].split(">")[0])))
      if (ct_email_json.filter(x => (x.email == (message.headers.get("to"))) || ((message.headers.get("to").split("<").length == 2) && (message.headers.get("to").split("<")[1].split(">").length == 2) && x.email == message.headers.get("to").split("<")[1].split(">")[0])).length !== 0) {
        var emailAddress = ct_email_json.filter(x => (x.email == (message.headers.get("to"))) || ((message.headers.get("to").split("<").length == 2) && (message.headers.get("to").split("<")[1].split(">").length == 2) && x.email == message.headers.get("to").split("<")[1].split(">")[0]))[0];
        console.log(emailAddress);
        if ((new Date(message.headers.get("date")).valueOf() + 1000 * 60 * 15) > new Date().valueOf()) {
          var fetching = await fetch(emailAddress.webhook, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: `anons.email (email: ${emailAddress.email})`,
              avatar_url: 'https://img.icons8.com/?size=256&id=LPcVDft9Isqt&format=png',
              embeds: [{
                title: message.headers.get("subject") + ` (From: ${message.from})`,
                description: parsedEmail.text,
                color: 5793266,
                type: 'rich',
                timestamp: new Date(message.headers.get("date")).toISOString(),
                author: {
                  name: emailAddress.email,
                  url: 'https://anons.email/',
                  icon_url: 'https://img.icons8.com/?size=256&id=LPcVDft9Isqt&format=png'
                },
                footer: {
                  text: 'Powered by anons.email'
                }
              }]
            })
          });
          console.log(fetching.status);
          var fetching_json = await fetching.json();
          console.log(fetching_json);
        }
      } else {
        console.log("Address not allowed")
        //message.setReject("Address not allowed");
      };
    }
  } else {
    console.log("Address allowed")
    var json = {};
    json['error'] = false;
    json['from'] = message.from;
    json['to'] = message.headers.get("to");
    json['subject'] = message.headers.get("subject");
    json['date'] = message.headers.get("date");
    json['content'] = parsedEmail.html;
    console.log(parsedEmail.html)
    //check is html or text
    if (message.headers.get("content-type").includes("text/html")) {
      json['content-type'] = "html";
    } else {
      json['content-type'] = "text";
    }
    data.filter(x => (x.email == (message.headers.get("to"))) || ((message.headers.get("to").split("<").length == 2) && (message.headers.get("to").split("<")[1].split(">").length == 2) && x.email == message.headers.get("to").split("<")[1].split(">")[0]))[0].data.push(json);
    console.log(data);
    await env.kv4email.put('on_activeEmail', JSON.stringify(data));
  };
  message.forward(env.dropMail_email);
}

async function streamToArrayBuffer(stream, streamSize) {
  let result = new Uint8Array(streamSize);
  let bytesRead = 0;
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result.set(value, bytesRead);
    bytesRead += value.length;
  }
  return result;
}