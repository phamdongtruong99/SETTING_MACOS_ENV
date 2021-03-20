import React from 'react'

export interface Dict<T> {
  [key: string]: T;
}

type GenericFunctionConstructor<T> = (...args: any[]) => T;

export type GenericFunction = GenericFunctionConstructor<any>;

export type GenericVoidFunction = GenericFunctionConstructor<void | Promise<void>>;

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };  // https://viblo.asia/p/4-tinh-nang-rat-hay-tu-typescript-vyDZOMn95wj
export type WithChildren<T = {}> = T & { children?: React.ReactNode }; 
