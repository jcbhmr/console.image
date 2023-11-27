"use strict";
// Currently we don't protect against environment modifications. 🤷‍♀️
/**
 * @param {string} url
 * @param {number} [width]
 * @param {number} [height]
 * @returns {void}
 */
module.exports = (url, width = 320, height = 180) => {
  (async () => {
    url = `${url}`;
    width = +width
    height = +height

    /** @type {string | undefined} */
    let dataURL;
    if (url.startsWith("data:")) {
      dataURL = url
    } else if (typeof FileReader !== "undefined") {
      const response = await fetch(url).catch(() => {})
      if (response) {
        const blob = await response.blob()
        dataURL = await new Promise((resolve, reject) => {
          const fr = new FileReader()
          fr.onload = (event) => resolve(event.target.result)
          fr.onerror = () => resolve()
          fr.readAsDataURL(blob)          
        })
        console.log(dataURL?.slice(0, 100))
      }
    }

    if (width && height) {
      console.log(
        "%c%s",
        `color: blue;
        text-decoration: underline;
        ${
          dataURL
            ? `background: url("${dataURL}") left top no-repeat;
              font-size: 0;
              line-height: ${height}px;
              padding-right: ${width}px`
            : ""
        }`,
        url,
      );
    }
  })();
}