export function injectInlineCSS(css) {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = css;
  document.head.appendChild(styleElement);
}
