const objectElements = document.querySelectorAll("object");
const callback = (event) => {
  const objectElement = event.target;
  const svgDocument = objectElement.contentDocument;
  const svgElement = svgDocument.querySelector("svg");

  objectElement.parentNode.insertBefore(svgElement, objectElement.nextSibling);
  objectElement.remove();
};

objectElements.forEach((objectElement) =>
  objectElement.addEventListener("load", callback)
);
