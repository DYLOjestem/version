var elem = document.createElement("button");
var body = document.getElementsByTagName("body")[0];
elem.innerHTML = "Add image";
elem.style = `color: #4DFF00; position: fixed; z-index: 2147483647; right: 0; bottom: 0; padding: 5px; cursor: pointer;`;
elem.style.background = 'black';
elem.onclick = () => {
    let x = document.createElement('script');
    x.src = 'https://cdn.jsdelivr.net/gh/DYLOjestem/version@main/Imgurl.js';
    x.onload = () => { x.remove() };
    (document.head || document.documentElement).appendChild(x);

    elem.remove();
}
(document.body || document.documentElement).appendChild(elem);
elem.style.borderRadius = '1em';
