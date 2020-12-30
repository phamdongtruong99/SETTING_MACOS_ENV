export type PathOf<T extends object> = {
  [K in keyof T]: T[K] extends object ? [K] | [K, ...PathOf<T[K]>]: [K]
}[keyof T]

export type TypeOf<T extends {[K: string]: any}, TPath extends SerialzedPathOf<T> = SerializedPathOf<T>> = 
  TPath extends `${infer F}.${infer U}` ? TypeOf<T[F]> : TPath extends `${infer F}` ? T[F] : null;
  
export type SerializedPathOf<T extends object>= Join<Extract<PathOf<T>, string[]>, '.'>;

export type Join<T extends string[], D extends string> =
  T extends [] ? '' :
  T extends [infer U] ? U:
  T extends [unknown, ...infer U] ? `${T[0]}${D}${Join<U, D>}` :
  string;

export type Maybe<T> = T | null;

export type Optional<T extends object, K extends keyof T = keyof T> = Omit<
  T,
  K
> & Partial<Pick<T, K>>;

// https://github.com/piotrwitek/utility-types

type ConditionalTypes<Base, Condition, Extract extends Boolean> =  Pick<Base, {
  [Key in keyof Base]: Extract extends true ? 
    Base[Key] extends Condition ? Key : never 
    : 
    Base[Key] extends Condition ? never : Key
}[keyof Base]>;

type ParameterType<T> = Partial<
  ConditionalTypes<T, Function, false> // Properties that are not functions
  & 
  { 
    [K in keyof ConditionalTypes<T, Function, true>]: Parameters<ConditionalTypes<T, Function, true>[K]> // Tuple
  }
>;

export type JsonValue = string | number | boolean;

export interface JsonObject {
  [k: string]: JsonValue | JsonValue[] | JsonObject;
}

// https://dev.to/nomoredeps/going-deeper-with-typescript-advanced-types-2ljn

export type GenericKeyObject<K extends keyof any, T> = {
  [P in K]?: T;
};

// GenericKeyObject: https://medium.com/better-programming/mastering-typescripts-mapped-types-5fa5700385eb
