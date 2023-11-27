declare global {
  interface Console {
    image?(url: string, width?: number, height?: number): void;
  }
}
declare const shim: () => void;
export = shim;
