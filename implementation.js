"use strict";
// Currently we don't protect against environment modifications. 🤷‍♀️
/**
 * @param {string} url
 * @param {number} [width]
 * @param {number} [height]
 * @returns {void}
 */
module.exports = async (url, width = undefined, height = undefined) => {
  url = `${url}`;
  /** @type {HTMLImageElement | undefined} */
  let image;
  if (typeof Image !== "undefined") {
    image = await new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "";
      image.src = url;
      image.onload = (event) => resolve(event.target);
      image.onerror = (event) => reject(event.error);
    });
  }

  if (image) {
    if (width !== undefined) {
      image.width = width;
    }
    if (height !== undefined) {
      image.height = height;
    }
  }

  /** @type {string | undefined} */
  let dataURL;
  if (image && typeof document !== "undefined") {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    dataURL = canvas.toDataURL();
  }

  console.log(
    "%c%s",
    `color: blue;
    text-decoration: underline;
    background: url("${dataURL}");
    font-size: 0;
    line-height: ${image?.height}px;
    padding-right: ${image?.width}px`,
    url,
  );
};
