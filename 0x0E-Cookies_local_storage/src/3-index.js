// returns the value of the cookie with the name passed in argument

function setCookies(){
    let date = new Date(Date.now() + 10 * 86400000);
    date = date.toUTCString();
    document.cookie = `firstname=${document.getElementById('firstname').value}; expires=${date}`;
    document.cookie = `email=${document.getElementById('email').value}; expires=${date}`;
}

function showCookies() {
    const paragraph = document.createElement('p');
    const cookies = `Cookies: ${decodeURIComponent(document.cookie)}`
    const text= document.createTextNode(cookies);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
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

function showForm() {
  const exist = document.getElementById('welcome');
  if (exist !== null) {
    exist.remove();
  }

  let form = document.getElementById('login');

  if (form === null) {
    makeform();
  } else {
    form.style.visibility = 'visible';
  }
}


function hideForm() {
  let form = document.getElementById('login');

  if (form !== null) {
    form.style.visibility = 'hidden'
  }
}

function deleteCookiesAndShowForm() {
  document.cookie = "Firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  showForm();
}

function showWelcomeMessageOrForm() {
  const name = getCookie("Firstname");
  const email = getCookie("Email");
  if (name !== "" && email !== "") {
    hideForm();
    let title = document.createElement('h1');
    title.id = "welcome";
    title.innerHTML = `<strong>Welcome: ${name}</strong><a id="logout" style="font-style: italic; margin-left: 10px;">(logout)</a>`;
    document.querySelector('main').append(title);
    document.getElementById('logout').addEventListener('click', deleteCookiesAndShowForm);
  } else {
    showForm();
  }
}
