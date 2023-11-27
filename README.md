# `console.image()`

<p align=center>
  <img src="https://i.imgur.com/saAGkiR.png">
</p>

✅ Works in browsers \
🔗 Prints URL in Node.js and other environments

## Installation

![npm](https://img.shields.io/static/v1?style=for-the-badge&message=npm&color=CB3837&logo=npm&logoColor=FFFFFF&label=)
![Yarn](https://img.shields.io/static/v1?style=for-the-badge&message=Yarn&color=2C8EBB&logo=Yarn&logoColor=FFFFFF&label=)
![pnpm](https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=)
![jsDelivr](https://img.shields.io/static/v1?style=for-the-badge&message=jsDelivr&color=E84D3D&logo=jsDelivr&logoColor=FFFFFF&label=)

You can install this package using npm or your favorite npm package manager like
[Yarn] or [pnpm].

```sh
npm install console.image
```

If you're using [Deno], you can use [`npm:` specifiers] to import it directly:

```js
import ... from "npm:console.image"
```

If you want to use it in the browser and want to go buildless, you can import this package straight from an npm CDN like jsDelivr's [esm.run]:

```js
import ... from "https://esm.run/console.image"
```

## Usage

![Browser](https://img.shields.io/static/v1?style=for-the-badge&message=Browser&color=4285F4&logo=Google+Chrome&logoColor=FFFFFF&label=)
![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![Deno](https://img.shields.io/static/v1?style=for-the-badge&message=Deno&color=000000&logo=Deno&logoColor=FFFFFF&label=)
![Bun](https://img.shields.io/static/v1?style=for-the-badge&message=Bun&color=000000&logo=Bun&logoColor=FFFFFF&label=)

There are two primary entry points for this package: `console.image` and `console.image/auto`. The `/auto` export subpath will automatically apply `console.image()` to the global `console` object. The `console.image` entrypoint exports the implementation without applying it to the global `console` object.

```js
import "console.image/auto";
console.image("https://picsum.photos/200");
```

```js
import consoleImage from "console.image";
consoleImage("https://picsum.photos/200");
```

<sup>This package uses CommonJS and supports being `require()`-ed.</sup>

## Development

[![](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://pr.new/https://github.com/YannickDot/console.image)

<sup>This project is polyfill<i>-ish</i> and uses the [es-shim-api].</sup>

[es-shim-api]: https://github.com/es-shims/es-shim-api
[yarn]: https://yarnpkg.com/
[pnpm]: https://pnpm.io/
[esm.run]: https://esm.run/
[deno]: https://deno.com/
[`npm:` specifiers]: https://docs.deno.com/runtime/manual/node/npm_specifiers
