// Creates cookies

function setCookies(){
    document.cookie= `firstname=${document.getElementById('firstname').value}`;
    document.cookie= `email=${document.getElementById('email').value}`;
}

function showCookies() {
    const paragraph = document.createElement('p');
    const cookies = `Cookies: ${decodeURIComponent(document.cookie)}`
    const text= document.createTextNode(cookies);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}