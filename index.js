"use strict";
/**
 * @param {string} url
 * @param {number} [width]
 * @param {number} [height]
 */
module.exports = async (url, width = undefined, height = undefined) => {
  if (typeof Image === "undefined" || typeof document === "undefined") {
    return;
  }

  /** @type {HTMLImageElement} */
  const image = await new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "";
    image.src = url;
    image.onload = (event) => resolve(event.target);
    image.onerror = (event) => reject(event.error);
  });

  if (width !== undefined) {
    image.width = width;
  }
  if (height !== undefined) {
    image.height = height;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);
  const dataURL = canvas.toDataURL();

  console.log(
    "%c%s",
    `color: blue;
    text-decoration: underline;
    background: url("${dataURL}");
    font-size: 0;
    line-height: ${image.height}px;
    padding-right: ${image.width}px`,
    image.src
  );
};
