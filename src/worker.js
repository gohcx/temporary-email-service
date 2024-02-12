// This is the worker code that will be executed in the Cloudflare edge
// environment. It will be executed for every email that is received by
// the worker.
// The worker code is written in JavaScript and uses the Cloudflare Workers
// API to interact with the email. The API is a subset of the standard Web API
const PostalMime = require('postal-mime');

export default {
  fetch, email
}

function GetPathName(url) {
  return new URL(url).pathname + new URL(url).search;
};

function generateEmailUsername(domain) {
  var adjective = ["Enthusiastic", "Intelligent", "Creative", "Hardworking", "Happy", "Positive", "Energetic", "Humorous", "Thoughtful", "Quiet", "Pleasant", "Interesting", "Efficient", "Kind", "Zealous", "Independent", "Humble", "Beautiful", "Brave", "Lovely", "Unique", "Ardent", "Blissful", "Steadfast", "Joyful", "Honest", "Versatile", "Shrewd", "Meticulous", "Serene", "Curious", "Outgoing", "Considerate", "Sensitive", "Witty", "Equal", "Reliable", "Gentle", "Generous", "Balanced", "Resolute", "Flexible", "Dedicated", "Tolerant", "Calm", "Cool-headed", "Hopeful", "Perfect", "Shy", "Tranquil", "Cozy", "Solid", "Noble", "Capricious", "Tender", "Sharp", "Ambitious", "Pleased", "Dazzling", "Blissful", "Changeable", "Focused", "Comfortable", "Dynamic", "Adaptable", "Crazy", "Independent-minded", "Energetic", "Passionate", "Soft", "Inspirational", "Hardworking", "Confident", "Efficient", "Tenacious", "Excited", "Capricious", "Steady", "Infectious", "Enthusiastic", "Uninhibited", "Humorous", "Artistic", "Personable", "Alert", "Lively", "Eager", "Charismatic", "Friendly", "Charming", "Warm-hearted", "Understanding", "Deeply_humorous", "Charismatic", "Clever", "Blissful", "Extroverted", "Introverted", "Cautious", "Insightful"]
  var noun = ["Apple", "Tiger", "Ocean", "Guitar", "Smile", "River", "Elephant", "Mountain", "Sunshine", "Bicycle", "Camera", "Tree", "Moon", "Fire", "Library", "Adventure", "Butterfly", "Journey", "Symphony", "Potion", "Harmony", "Pencil", "Rainbow", "Feather", "Whisper", "Dream", "Diamond", "Meadow", "Courage", "Laughter", "Anchor", "Carousel", "Quasar", "Galaxy", "Mystery", "Beacon", "Harmony", "Serenity", "Eclipse", "Infinity", "Velocity", "Tranquility", "Miracle", "Orchestra", "Horizon", "Wilderness", "Castle", "Adventure", "Essence", "Galaxy", "Tornado", "Symphony", "Comet", "Legend", "Beacon", "Pineapple", "Festival", "Chocolate", "Harmony", "Echo", "Fountain", "Whisper", "Squirrel", "Sunset", "Volcano", "Telescope", "Cactus", "Blizzard", "Rhythm", "Penguin", "Breeze", "Potion", "Echo", "Velvet", "Stardust", "Cascade", "Dragon", "Harmony", "River", "Enigma", "Sapphire", "Carnival", "Butterfly", "Echo", "Harmony", "Seashell", "Lighthouse", "Velocity", "Symphony", "Elegance", "Whisper", "Meadow", "Serenity", "Galaxy", "Rainbow", "Courage", "Lullaby", "Horizon", "Adventure", "Cascade", "Bonsai", "Lighthouse", "Symphony", "Tulip", "Journey", "Bliss", "Cascade", "Destiny", "Lantern", "Symphony", "Comet", "Canyon", "Serenade", "Elegance", "Blossom", "Castle", "Carnival", "Symphony", "Essence", "Breeze", "Harmony", "Echo", "Velvet", "Stardust", "Lagoon", "Cascade", "Serenity", "Radiance", "Firefly", "Horizon", "Journey", "Harmony", "Cascade", "Quasar", "Bliss", "Serenity", "Symphony", "Fountain", "Mystery", "Journey", "Cascade", "Essence", "Eclipse", "Breeze", "Lighthouse", "Melody", "Zenith", "Cascade", "Blossom", "Radiance"];
  var username = adjective[Math.floor(Math.random() * adjective.length)].toLocaleLowerCase().replace(/ /g, "_") + "." + noun[Math.floor(Math.random() * noun.length)].toLocaleLowerCase().replace(/ /g, "_") + "@" + domain;
  return username;
}

import aboutHTML from './about.html';
import terms from './terms.html';
import privacy from './privacy.html';

async function fetch(request, env, ctx) {
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
                  <meta name="description" content="Temp Mail">
                  <title>Temp Mail</title>
                  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css">
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
                </head>
                <body id="bodyid" style="min-height: 80vh !important;">
                  <div class="container">
                    <section id="nav" class="my-3">
                    <nav class="navbar navbar-expand-lg">
                      <div class="container-fluid">
                        <a class="navbar-brand my-auto disabled" href="/"><img height="40px" src="https://icons.veryicon.com/png/o/business/oa-office/mail-227.png"/>${env.website_name ? env.website_name : "Temp Mail"}</a>
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
                              <a class="nav-link active" href="https://www.buymeacoffee.com/gohcx" target="__blank">Donate</a>
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
                    <section id="content" class="my-3" style="max-height: 30% !important;">
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
                              <button class="btn btn-dark" onclick="start_email()" id="start_button">Start now</button>
                            </div>
                          </div>  
                          <div class="col-md-6" style="height: auto !important;" id="inbox">
                            <img src="https://d9b3b4r2.stackpathcdn.com/wp-content/uploads/2022/02/Add-email-button-email-gif-1.gif" width="100%" alt="Waiting mail">
                          </div>
                        </div>
                      </div>
                    </section>
                    <section id="content" class="fixed-bottom ">
                      <div class="container">
                        <div class="row">
                          <div class="col-6">
                            <p>© 2024 Temp Mail</p>
                          </div>
                          <div class="col-6">
                            <div class="d-flex justify-content-end">
                              <a href="https://github.com/gohchengxian" target="__blank" class="nav-link"><i class="fa-brands fa-github"></i> Github</a>
                            </div>
                          </div>
                        </div>
                    </section>
                  </div>
                  <script>
                  var start_email = false;
                  var domain_list = ${env.email_domain ? env.email_domain : '["example.com"]'} ;
                  var domainHTML = '';
                  for (var i = 0; i < domain_list.length; i++) {
                    domainHTML += '<option value="' + domain_list[i] + '">' + domain_list[i] + '</option>';
                  }
                  document.getElementById('selectDomain').innerHTML = domainHTML;
                    function start_email() {
                      start_email = true;
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
                        const websocket = new WebSocket('wss://' + window.location.host);
                        websocket.onopen = function() {
                          console.log(res)
                          console.log('WebSocket is open now.');
                          websocket.send(res);
                        };
                        var request_data;
                        websocket.onclose = function(event) {
                          start_email = false;
                          document.getElementById('temp-emailaddress').value = '';
                          document.getElementById('copy-email-button').disabled = true;
                          document.getElementById('start_button').disabled = false;
                          if (event.wasClean) {
                            console.log('Connection closed cleanly, code=' + event.code + ' reason=' + event.reason);
                          } else {
                            console.log('Connection died');
                          }
                          clearInterval(request_data);
                          fetch('/stop_email', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({email: res})
                          });
                        };
                        websocket.onmessage = async function(event) {
                          request_data = catchEmail(res);
                          if(!event.data.error) {
                            document.getElementById('inbox').innerHTML = "<h1 class='my-3'>Mail Box</h1><hr id='line-1' style='border: 1px solid #000000;' class='mb-3'/>";
                            document.getElementById('inbox').innerHTML += '<div class="mx-2 my-2 accordion overflow-y-auto" id="inbox-email"></div>';    
                            document.getElementById('button_group').innerHTML += '<button class="btn btn-danger mx-3" id="end-button" onclick="closeMail()">End Mail</button>';
                          } else {
                            alert('Error: ' + event.data.message);
                          }
                        };
                      });
                    };
                    function closeMail() {
                      start_email = false;
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
                      document.getElementById('inbox').innerHTML = '<img src="https://d9b3b4r2.stackpathcdn.com/wp-content/uploads/2022/02/Add-email-button-email-gif-1.gif" width="100%" alt="Waiting mail">';
                      document.getElementById('button_group').innerHTML = '<button class="btn btn-dark" onclick="start_email()" id="start_button">Start now</button>';
                      websocket.close();
                    };
                    function catchEmail(email) {
                      console.log("catchEmail");
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
                        document.getElementById("bodyid").setAttribute("data-bs-theme", "dark");
                    } else {
                        document.getElementById("line-2").style.border = "1px solid #000000";
                        document.getElementById("line-3").style.border = "1px solid #000000";
                        document.getElementById("bodyid").setAttribute("data-bs-theme", "light");
                    }
                    function changeTheme() {
                      var html = document.getElementById('bodyid');
                      if (html.getAttribute('data-bs-theme') == 'dark') {
                        setCookie("theme", "light", 365);
                        if(start_email) {
                          document.getElementById('line-1').style.border = '1px solid #000000';
                        }
                        document.getElementById('line-2').style.border = '1px solid #000000';
                        document.getElementById('line-3').style.border = '1px solid #000000';
                        document.getElementById('start_button').classList.remove('btn-primary');
                        document.getElementById('start_button').classList.add('btn-dark');
                        html.setAttribute('data-bs-theme', 'light');
                      } else {
                        setCookie("theme", "dark", 365);
                        if(start_email) {
                          document.getElementById('line-1').style.border = '1px solid #ffffff';
                        }
                        document.getElementById('line-2').style.border = '1px solid #ffffff';
                        document.getElementById('line-3').style.border = '1px solid #ffffff';
                        document.getElementById('start_button').classList.remove('btn-dark');
                        document.getElementById('start_button').classList.add('btn-primary');
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
    console.log("Address not allowed")
    //message.setReject("Address not allowed");
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