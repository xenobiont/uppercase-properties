type UppercasedObject<T> = {
  [K in keyof T]: T[K] extends string ? Uppercase<T[K]> : T[K];
};
