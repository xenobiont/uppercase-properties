type UppercaseObject<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends string ? Uppercase<T[K]> : T[K];
};


type Foo = {
  foo: 'foo string';
  bar: 'bar string';
  baz: number;
};

const foo = {
  foo: 'foo string',
  bar: 'bar string',
  baz: 12
} as const;

type Uppercased = UppercaseObject<typeof foo>
type Uppercased2 = UppercaseObject<Foo>