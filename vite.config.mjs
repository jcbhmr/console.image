import commonjs from "vite-plugin-commonjs";
import directoryIndex from "vite-plugin-directory-index";

export default {
  plugins: [commonjs(), directoryIndex()],
};
