declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.gif' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

// React Native Metro bundler global
declare const __DEV__: boolean;

// Node.js require function
declare const require: {
  (id: string): any;
  resolve(id: string): string;
  cache: any;
  extensions: any;
  main: any;
};

// For any modules that might not have type definitions
declare module '*';