// bundle.js
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./public/build/bundle.css";
document.head.appendChild(link);

const script = document.createElement("script");
script.src = "./public/build/bundle.js";
document.head.appendChild(script);
