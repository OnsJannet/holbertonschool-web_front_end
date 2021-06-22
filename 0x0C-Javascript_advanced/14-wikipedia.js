function createElement(data) {
	const paragraph = document.createElement("p");
	const node = document.createTextNode(data);
	paragraph.appendChild(node);
	document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow", true);
	req.onload = (x)=>(callback(x.extract));
    req.send();
}

queryWikipedia(createElement);