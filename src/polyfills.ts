// Polyfill Buffer for browser environment
import { Buffer } from "buffer";

// Make Buffer available globally
if (typeof window !== "undefined") {
  (window as any).Buffer = Buffer;
}
if (typeof globalThis !== "undefined") {
  (globalThis as any).Buffer = Buffer;
}

export { Buffer };
