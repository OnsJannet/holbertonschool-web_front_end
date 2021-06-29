// Creates cookies that expires in 10 days

function setCookies(){
    let date = new Date(Date.now() + 10 * 86400000);
    date = date.toUTCString();
    document.cookie= `firstname=${document.getElementById('firstname').value}; expires=${date}`;
    document.cookie= `email=${document.getElementById('email').value} expires=${date}`;
}


function showCookies() {
    const paragraph = document.createElement('p');
    const cookies = `Cookies: ${decodeURIComponent(document.cookie)}`
    const text= document.createTextNode(cookies);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}