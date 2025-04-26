
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_tb
 * 
 */
export type user_tb = $Result.DefaultSelection<Prisma.$user_tbPayload>
/**
 * Model money_tb
 * 
 */
export type money_tb = $Result.DefaultSelection<Prisma.$money_tbPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_tbs
 * const user_tbs = await prisma.user_tb.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_tbs
   * const user_tbs = await prisma.user_tb.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_tb`: Exposes CRUD operations for the **user_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tbs
    * const user_tbs = await prisma.user_tb.findMany()
    * ```
    */
  get user_tb(): Prisma.user_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.money_tb`: Exposes CRUD operations for the **money_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Money_tbs
    * const money_tbs = await prisma.money_tb.findMany()
    * ```
    */
  get money_tb(): Prisma.money_tbDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_tb: 'user_tb',
    money_tb: 'money_tb'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_tb" | "money_tb"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_tb: {
        payload: Prisma.$user_tbPayload<ExtArgs>
        fields: Prisma.user_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findFirst: {
            args: Prisma.user_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findMany: {
            args: Prisma.user_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>[]
          }
          create: {
            args: Prisma.user_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          createMany: {
            args: Prisma.user_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          update: {
            args: Prisma.user_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          deleteMany: {
            args: Prisma.user_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          aggregate: {
            args: Prisma.User_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tb>
          }
          groupBy: {
            args: Prisma.user_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tbCountArgs<ExtArgs>
            result: $Utils.Optional<User_tbCountAggregateOutputType> | number
          }
        }
      }
      money_tb: {
        payload: Prisma.$money_tbPayload<ExtArgs>
        fields: Prisma.money_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.money_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.money_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload>
          }
          findFirst: {
            args: Prisma.money_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.money_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload>
          }
          findMany: {
            args: Prisma.money_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload>[]
          }
          create: {
            args: Prisma.money_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload>
          }
          createMany: {
            args: Prisma.money_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.money_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload>
          }
          update: {
            args: Prisma.money_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload>
          }
          deleteMany: {
            args: Prisma.money_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.money_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.money_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tbPayload>
          }
          aggregate: {
            args: Prisma.Money_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoney_tb>
          }
          groupBy: {
            args: Prisma.money_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Money_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.money_tbCountArgs<ExtArgs>
            result: $Utils.Optional<Money_tbCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_tb?: user_tbOmit
    money_tb?: money_tbOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model user_tb
   */

  export type AggregateUser_tb = {
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  export type User_tbAvgAggregateOutputType = {
    userId: number | null
  }

  export type User_tbSumAggregateOutputType = {
    userId: number | null
  }

  export type User_tbMinAggregateOutputType = {
    userId: number | null
    userFullname: string | null
    userBirthDate: string | null
    userName: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbMaxAggregateOutputType = {
    userId: number | null
    userFullname: string | null
    userBirthDate: string | null
    userName: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbCountAggregateOutputType = {
    userId: number
    userFullname: number
    userBirthDate: number
    userName: number
    userPassword: number
    userImage: number
    _all: number
  }


  export type User_tbAvgAggregateInputType = {
    userId?: true
  }

  export type User_tbSumAggregateInputType = {
    userId?: true
  }

  export type User_tbMinAggregateInputType = {
    userId?: true
    userFullname?: true
    userBirthDate?: true
    userName?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbMaxAggregateInputType = {
    userId?: true
    userFullname?: true
    userBirthDate?: true
    userName?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbCountAggregateInputType = {
    userId?: true
    userFullname?: true
    userBirthDate?: true
    userName?: true
    userPassword?: true
    userImage?: true
    _all?: true
  }

  export type User_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tb to aggregate.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tbs
    **/
    _count?: true | User_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tbMaxAggregateInputType
  }

  export type GetUser_tbAggregateType<T extends User_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tb[P]>
      : GetScalarType<T[P], AggregateUser_tb[P]>
  }




  export type user_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tbWhereInput
    orderBy?: user_tbOrderByWithAggregationInput | user_tbOrderByWithAggregationInput[]
    by: User_tbScalarFieldEnum[] | User_tbScalarFieldEnum
    having?: user_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tbCountAggregateInputType | true
    _avg?: User_tbAvgAggregateInputType
    _sum?: User_tbSumAggregateInputType
    _min?: User_tbMinAggregateInputType
    _max?: User_tbMaxAggregateInputType
  }

  export type User_tbGroupByOutputType = {
    userId: number
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  type GetUser_tbGroupByPayload<T extends user_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tbGroupByOutputType[P]>
            : GetScalarType<T[P], User_tbGroupByOutputType[P]>
        }
      >
    >


  export type user_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userFullname?: boolean
    userBirthDate?: boolean
    userName?: boolean
    userPassword?: boolean
    userImage?: boolean
  }, ExtArgs["result"]["user_tb"]>



  export type user_tbSelectScalar = {
    userId?: boolean
    userFullname?: boolean
    userBirthDate?: boolean
    userName?: boolean
    userPassword?: boolean
    userImage?: boolean
  }

  export type user_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userFullname" | "userBirthDate" | "userName" | "userPassword" | "userImage", ExtArgs["result"]["user_tb"]>

  export type $user_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userFullname: string
      userBirthDate: string
      userName: string
      userPassword: string
      userImage: string
    }, ExtArgs["result"]["user_tb"]>
    composites: {}
  }

  type user_tbGetPayload<S extends boolean | null | undefined | user_tbDefaultArgs> = $Result.GetResult<Prisma.$user_tbPayload, S>

  type user_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tbCountAggregateInputType | true
    }

  export interface user_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tb'], meta: { name: 'user_tb' } }
    /**
     * Find zero or one User_tb that matches the filter.
     * @param {user_tbFindUniqueArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tbFindUniqueArgs>(args: SelectSubset<T, user_tbFindUniqueArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tbFindUniqueOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tbFindFirstArgs>(args?: SelectSubset<T, user_tbFindFirstArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tbs
     * const user_tbs = await prisma.user_tb.findMany()
     * 
     * // Get first 10 User_tbs
     * const user_tbs = await prisma.user_tb.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const user_tbWithUserIdOnly = await prisma.user_tb.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends user_tbFindManyArgs>(args?: SelectSubset<T, user_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_tb.
     * @param {user_tbCreateArgs} args - Arguments to create a User_tb.
     * @example
     * // Create one User_tb
     * const User_tb = await prisma.user_tb.create({
     *   data: {
     *     // ... data to create a User_tb
     *   }
     * })
     * 
     */
    create<T extends user_tbCreateArgs>(args: SelectSubset<T, user_tbCreateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tbs.
     * @param {user_tbCreateManyArgs} args - Arguments to create many User_tbs.
     * @example
     * // Create many User_tbs
     * const user_tb = await prisma.user_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tbCreateManyArgs>(args?: SelectSubset<T, user_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tb.
     * @param {user_tbDeleteArgs} args - Arguments to delete one User_tb.
     * @example
     * // Delete one User_tb
     * const User_tb = await prisma.user_tb.delete({
     *   where: {
     *     // ... filter to delete one User_tb
     *   }
     * })
     * 
     */
    delete<T extends user_tbDeleteArgs>(args: SelectSubset<T, user_tbDeleteArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_tb.
     * @param {user_tbUpdateArgs} args - Arguments to update one User_tb.
     * @example
     * // Update one User_tb
     * const user_tb = await prisma.user_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tbUpdateArgs>(args: SelectSubset<T, user_tbUpdateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tbs.
     * @param {user_tbDeleteManyArgs} args - Arguments to filter User_tbs to delete.
     * @example
     * // Delete a few User_tbs
     * const { count } = await prisma.user_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tbDeleteManyArgs>(args?: SelectSubset<T, user_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tbs
     * const user_tb = await prisma.user_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tbUpdateManyArgs>(args: SelectSubset<T, user_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tb.
     * @param {user_tbUpsertArgs} args - Arguments to update or create a User_tb.
     * @example
     * // Update or create a User_tb
     * const user_tb = await prisma.user_tb.upsert({
     *   create: {
     *     // ... data to create a User_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tb we want to update
     *   }
     * })
     */
    upsert<T extends user_tbUpsertArgs>(args: SelectSubset<T, user_tbUpsertArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbCountArgs} args - Arguments to filter User_tbs to count.
     * @example
     * // Count the number of User_tbs
     * const count = await prisma.user_tb.count({
     *   where: {
     *     // ... the filter for the User_tbs we want to count
     *   }
     * })
    **/
    count<T extends user_tbCountArgs>(
      args?: Subset<T, user_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tbAggregateArgs>(args: Subset<T, User_tbAggregateArgs>): Prisma.PrismaPromise<GetUser_tbAggregateType<T>>

    /**
     * Group by User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tbGroupByArgs['orderBy'] }
        : { orderBy?: user_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tb model
   */
  readonly fields: user_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tb model
   */
  interface user_tbFieldRefs {
    readonly userId: FieldRef<"user_tb", 'Int'>
    readonly userFullname: FieldRef<"user_tb", 'String'>
    readonly userBirthDate: FieldRef<"user_tb", 'String'>
    readonly userName: FieldRef<"user_tb", 'String'>
    readonly userPassword: FieldRef<"user_tb", 'String'>
    readonly userImage: FieldRef<"user_tb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_tb findUnique
   */
  export type user_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findUniqueOrThrow
   */
  export type user_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findFirst
   */
  export type user_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findFirstOrThrow
   */
  export type user_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findMany
   */
  export type user_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tbs to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb create
   */
  export type user_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The data needed to create a user_tb.
     */
    data: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
  }

  /**
   * user_tb createMany
   */
  export type user_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tbs.
     */
    data: user_tbCreateManyInput | user_tbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tb update
   */
  export type user_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The data needed to update a user_tb.
     */
    data: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
    /**
     * Choose, which user_tb to update.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb updateMany
   */
  export type user_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tbs.
     */
    data: XOR<user_tbUpdateManyMutationInput, user_tbUncheckedUpdateManyInput>
    /**
     * Filter which user_tbs to update
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to update.
     */
    limit?: number
  }

  /**
   * user_tb upsert
   */
  export type user_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The filter to search for the user_tb to update in case it exists.
     */
    where: user_tbWhereUniqueInput
    /**
     * In case the user_tb found by the `where` argument doesn't exist, create a new user_tb with this data.
     */
    create: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
    /**
     * In case the user_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
  }

  /**
   * user_tb delete
   */
  export type user_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter which user_tb to delete.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb deleteMany
   */
  export type user_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tbs to delete
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to delete.
     */
    limit?: number
  }

  /**
   * user_tb without action
   */
  export type user_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
  }


  /**
   * Model money_tb
   */

  export type AggregateMoney_tb = {
    _count: Money_tbCountAggregateOutputType | null
    _avg: Money_tbAvgAggregateOutputType | null
    _sum: Money_tbSumAggregateOutputType | null
    _min: Money_tbMinAggregateOutputType | null
    _max: Money_tbMaxAggregateOutputType | null
  }

  export type Money_tbAvgAggregateOutputType = {
    moneyId: number | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tbSumAggregateOutputType = {
    moneyId: number | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tbMinAggregateOutputType = {
    moneyId: number | null
    moneyDetail: string | null
    moneyDate: string | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tbMaxAggregateOutputType = {
    moneyId: number | null
    moneyDetail: string | null
    moneyDate: string | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tbCountAggregateOutputType = {
    moneyId: number
    moneyDetail: number
    moneyDate: number
    moneyInOut: number
    moneyType: number
    userId: number
    _all: number
  }


  export type Money_tbAvgAggregateInputType = {
    moneyId?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tbSumAggregateInputType = {
    moneyId?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tbMinAggregateInputType = {
    moneyId?: true
    moneyDetail?: true
    moneyDate?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tbMaxAggregateInputType = {
    moneyId?: true
    moneyDetail?: true
    moneyDate?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tbCountAggregateInputType = {
    moneyId?: true
    moneyDetail?: true
    moneyDate?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
    _all?: true
  }

  export type Money_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which money_tb to aggregate.
     */
    where?: money_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tbs to fetch.
     */
    orderBy?: money_tbOrderByWithRelationInput | money_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: money_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned money_tbs
    **/
    _count?: true | Money_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Money_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Money_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Money_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Money_tbMaxAggregateInputType
  }

  export type GetMoney_tbAggregateType<T extends Money_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateMoney_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoney_tb[P]>
      : GetScalarType<T[P], AggregateMoney_tb[P]>
  }




  export type money_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: money_tbWhereInput
    orderBy?: money_tbOrderByWithAggregationInput | money_tbOrderByWithAggregationInput[]
    by: Money_tbScalarFieldEnum[] | Money_tbScalarFieldEnum
    having?: money_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Money_tbCountAggregateInputType | true
    _avg?: Money_tbAvgAggregateInputType
    _sum?: Money_tbSumAggregateInputType
    _min?: Money_tbMinAggregateInputType
    _max?: Money_tbMaxAggregateInputType
  }

  export type Money_tbGroupByOutputType = {
    moneyId: number
    moneyDetail: string
    moneyDate: string
    moneyInOut: number
    moneyType: number
    userId: number
    _count: Money_tbCountAggregateOutputType | null
    _avg: Money_tbAvgAggregateOutputType | null
    _sum: Money_tbSumAggregateOutputType | null
    _min: Money_tbMinAggregateOutputType | null
    _max: Money_tbMaxAggregateOutputType | null
  }

  type GetMoney_tbGroupByPayload<T extends money_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Money_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Money_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Money_tbGroupByOutputType[P]>
            : GetScalarType<T[P], Money_tbGroupByOutputType[P]>
        }
      >
    >


  export type money_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    moneyId?: boolean
    moneyDetail?: boolean
    moneyDate?: boolean
    moneyInOut?: boolean
    moneyType?: boolean
    userId?: boolean
  }, ExtArgs["result"]["money_tb"]>



  export type money_tbSelectScalar = {
    moneyId?: boolean
    moneyDetail?: boolean
    moneyDate?: boolean
    moneyInOut?: boolean
    moneyType?: boolean
    userId?: boolean
  }

  export type money_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"moneyId" | "moneyDetail" | "moneyDate" | "moneyInOut" | "moneyType" | "userId", ExtArgs["result"]["money_tb"]>

  export type $money_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "money_tb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      moneyId: number
      moneyDetail: string
      moneyDate: string
      moneyInOut: number
      moneyType: number
      userId: number
    }, ExtArgs["result"]["money_tb"]>
    composites: {}
  }

  type money_tbGetPayload<S extends boolean | null | undefined | money_tbDefaultArgs> = $Result.GetResult<Prisma.$money_tbPayload, S>

  type money_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<money_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Money_tbCountAggregateInputType | true
    }

  export interface money_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['money_tb'], meta: { name: 'money_tb' } }
    /**
     * Find zero or one Money_tb that matches the filter.
     * @param {money_tbFindUniqueArgs} args - Arguments to find a Money_tb
     * @example
     * // Get one Money_tb
     * const money_tb = await prisma.money_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends money_tbFindUniqueArgs>(args: SelectSubset<T, money_tbFindUniqueArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Money_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {money_tbFindUniqueOrThrowArgs} args - Arguments to find a Money_tb
     * @example
     * // Get one Money_tb
     * const money_tb = await prisma.money_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends money_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, money_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Money_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tbFindFirstArgs} args - Arguments to find a Money_tb
     * @example
     * // Get one Money_tb
     * const money_tb = await prisma.money_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends money_tbFindFirstArgs>(args?: SelectSubset<T, money_tbFindFirstArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Money_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tbFindFirstOrThrowArgs} args - Arguments to find a Money_tb
     * @example
     * // Get one Money_tb
     * const money_tb = await prisma.money_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends money_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, money_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Money_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Money_tbs
     * const money_tbs = await prisma.money_tb.findMany()
     * 
     * // Get first 10 Money_tbs
     * const money_tbs = await prisma.money_tb.findMany({ take: 10 })
     * 
     * // Only select the `moneyId`
     * const money_tbWithMoneyIdOnly = await prisma.money_tb.findMany({ select: { moneyId: true } })
     * 
     */
    findMany<T extends money_tbFindManyArgs>(args?: SelectSubset<T, money_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Money_tb.
     * @param {money_tbCreateArgs} args - Arguments to create a Money_tb.
     * @example
     * // Create one Money_tb
     * const Money_tb = await prisma.money_tb.create({
     *   data: {
     *     // ... data to create a Money_tb
     *   }
     * })
     * 
     */
    create<T extends money_tbCreateArgs>(args: SelectSubset<T, money_tbCreateArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Money_tbs.
     * @param {money_tbCreateManyArgs} args - Arguments to create many Money_tbs.
     * @example
     * // Create many Money_tbs
     * const money_tb = await prisma.money_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends money_tbCreateManyArgs>(args?: SelectSubset<T, money_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Money_tb.
     * @param {money_tbDeleteArgs} args - Arguments to delete one Money_tb.
     * @example
     * // Delete one Money_tb
     * const Money_tb = await prisma.money_tb.delete({
     *   where: {
     *     // ... filter to delete one Money_tb
     *   }
     * })
     * 
     */
    delete<T extends money_tbDeleteArgs>(args: SelectSubset<T, money_tbDeleteArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Money_tb.
     * @param {money_tbUpdateArgs} args - Arguments to update one Money_tb.
     * @example
     * // Update one Money_tb
     * const money_tb = await prisma.money_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends money_tbUpdateArgs>(args: SelectSubset<T, money_tbUpdateArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Money_tbs.
     * @param {money_tbDeleteManyArgs} args - Arguments to filter Money_tbs to delete.
     * @example
     * // Delete a few Money_tbs
     * const { count } = await prisma.money_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends money_tbDeleteManyArgs>(args?: SelectSubset<T, money_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Money_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Money_tbs
     * const money_tb = await prisma.money_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends money_tbUpdateManyArgs>(args: SelectSubset<T, money_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Money_tb.
     * @param {money_tbUpsertArgs} args - Arguments to update or create a Money_tb.
     * @example
     * // Update or create a Money_tb
     * const money_tb = await prisma.money_tb.upsert({
     *   create: {
     *     // ... data to create a Money_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Money_tb we want to update
     *   }
     * })
     */
    upsert<T extends money_tbUpsertArgs>(args: SelectSubset<T, money_tbUpsertArgs<ExtArgs>>): Prisma__money_tbClient<$Result.GetResult<Prisma.$money_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Money_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tbCountArgs} args - Arguments to filter Money_tbs to count.
     * @example
     * // Count the number of Money_tbs
     * const count = await prisma.money_tb.count({
     *   where: {
     *     // ... the filter for the Money_tbs we want to count
     *   }
     * })
    **/
    count<T extends money_tbCountArgs>(
      args?: Subset<T, money_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Money_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Money_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Money_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Money_tbAggregateArgs>(args: Subset<T, Money_tbAggregateArgs>): Prisma.PrismaPromise<GetMoney_tbAggregateType<T>>

    /**
     * Group by Money_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends money_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: money_tbGroupByArgs['orderBy'] }
        : { orderBy?: money_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, money_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoney_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the money_tb model
   */
  readonly fields: money_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for money_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__money_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the money_tb model
   */
  interface money_tbFieldRefs {
    readonly moneyId: FieldRef<"money_tb", 'Int'>
    readonly moneyDetail: FieldRef<"money_tb", 'String'>
    readonly moneyDate: FieldRef<"money_tb", 'String'>
    readonly moneyInOut: FieldRef<"money_tb", 'Float'>
    readonly moneyType: FieldRef<"money_tb", 'Int'>
    readonly userId: FieldRef<"money_tb", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * money_tb findUnique
   */
  export type money_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * Filter, which money_tb to fetch.
     */
    where: money_tbWhereUniqueInput
  }

  /**
   * money_tb findUniqueOrThrow
   */
  export type money_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * Filter, which money_tb to fetch.
     */
    where: money_tbWhereUniqueInput
  }

  /**
   * money_tb findFirst
   */
  export type money_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * Filter, which money_tb to fetch.
     */
    where?: money_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tbs to fetch.
     */
    orderBy?: money_tbOrderByWithRelationInput | money_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for money_tbs.
     */
    cursor?: money_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of money_tbs.
     */
    distinct?: Money_tbScalarFieldEnum | Money_tbScalarFieldEnum[]
  }

  /**
   * money_tb findFirstOrThrow
   */
  export type money_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * Filter, which money_tb to fetch.
     */
    where?: money_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tbs to fetch.
     */
    orderBy?: money_tbOrderByWithRelationInput | money_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for money_tbs.
     */
    cursor?: money_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of money_tbs.
     */
    distinct?: Money_tbScalarFieldEnum | Money_tbScalarFieldEnum[]
  }

  /**
   * money_tb findMany
   */
  export type money_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * Filter, which money_tbs to fetch.
     */
    where?: money_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tbs to fetch.
     */
    orderBy?: money_tbOrderByWithRelationInput | money_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing money_tbs.
     */
    cursor?: money_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tbs.
     */
    skip?: number
    distinct?: Money_tbScalarFieldEnum | Money_tbScalarFieldEnum[]
  }

  /**
   * money_tb create
   */
  export type money_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * The data needed to create a money_tb.
     */
    data: XOR<money_tbCreateInput, money_tbUncheckedCreateInput>
  }

  /**
   * money_tb createMany
   */
  export type money_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many money_tbs.
     */
    data: money_tbCreateManyInput | money_tbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * money_tb update
   */
  export type money_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * The data needed to update a money_tb.
     */
    data: XOR<money_tbUpdateInput, money_tbUncheckedUpdateInput>
    /**
     * Choose, which money_tb to update.
     */
    where: money_tbWhereUniqueInput
  }

  /**
   * money_tb updateMany
   */
  export type money_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update money_tbs.
     */
    data: XOR<money_tbUpdateManyMutationInput, money_tbUncheckedUpdateManyInput>
    /**
     * Filter which money_tbs to update
     */
    where?: money_tbWhereInput
    /**
     * Limit how many money_tbs to update.
     */
    limit?: number
  }

  /**
   * money_tb upsert
   */
  export type money_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * The filter to search for the money_tb to update in case it exists.
     */
    where: money_tbWhereUniqueInput
    /**
     * In case the money_tb found by the `where` argument doesn't exist, create a new money_tb with this data.
     */
    create: XOR<money_tbCreateInput, money_tbUncheckedCreateInput>
    /**
     * In case the money_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<money_tbUpdateInput, money_tbUncheckedUpdateInput>
  }

  /**
   * money_tb delete
   */
  export type money_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
    /**
     * Filter which money_tb to delete.
     */
    where: money_tbWhereUniqueInput
  }

  /**
   * money_tb deleteMany
   */
  export type money_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which money_tbs to delete
     */
    where?: money_tbWhereInput
    /**
     * Limit how many money_tbs to delete.
     */
    limit?: number
  }

  /**
   * money_tb without action
   */
  export type money_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tb
     */
    select?: money_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tb
     */
    omit?: money_tbOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_tbScalarFieldEnum: {
    userId: 'userId',
    userFullname: 'userFullname',
    userBirthDate: 'userBirthDate',
    userName: 'userName',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type User_tbScalarFieldEnum = (typeof User_tbScalarFieldEnum)[keyof typeof User_tbScalarFieldEnum]


  export const Money_tbScalarFieldEnum: {
    moneyId: 'moneyId',
    moneyDetail: 'moneyDetail',
    moneyDate: 'moneyDate',
    moneyInOut: 'moneyInOut',
    moneyType: 'moneyType',
    userId: 'userId'
  };

  export type Money_tbScalarFieldEnum = (typeof Money_tbScalarFieldEnum)[keyof typeof Money_tbScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const user_tbOrderByRelevanceFieldEnum: {
    userFullname: 'userFullname',
    userBirthDate: 'userBirthDate',
    userName: 'userName',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type user_tbOrderByRelevanceFieldEnum = (typeof user_tbOrderByRelevanceFieldEnum)[keyof typeof user_tbOrderByRelevanceFieldEnum]


  export const money_tbOrderByRelevanceFieldEnum: {
    moneyDetail: 'moneyDetail',
    moneyDate: 'moneyDate'
  };

  export type money_tbOrderByRelevanceFieldEnum = (typeof money_tbOrderByRelevanceFieldEnum)[keyof typeof money_tbOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_tbWhereInput = {
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userId?: IntFilter<"user_tb"> | number
    userFullname?: StringFilter<"user_tb"> | string
    userBirthDate?: StringFilter<"user_tb"> | string
    userName?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringFilter<"user_tb"> | string
  }

  export type user_tbOrderByWithRelationInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
    _relevance?: user_tbOrderByRelevanceInput
  }

  export type user_tbWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userFullname?: StringFilter<"user_tb"> | string
    userBirthDate?: StringFilter<"user_tb"> | string
    userName?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringFilter<"user_tb"> | string
  }, "userId">

  export type user_tbOrderByWithAggregationInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
    _count?: user_tbCountOrderByAggregateInput
    _avg?: user_tbAvgOrderByAggregateInput
    _max?: user_tbMaxOrderByAggregateInput
    _min?: user_tbMinOrderByAggregateInput
    _sum?: user_tbSumOrderByAggregateInput
  }

  export type user_tbScalarWhereWithAggregatesInput = {
    AND?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    OR?: user_tbScalarWhereWithAggregatesInput[]
    NOT?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"user_tb"> | number
    userFullname?: StringWithAggregatesFilter<"user_tb"> | string
    userBirthDate?: StringWithAggregatesFilter<"user_tb"> | string
    userName?: StringWithAggregatesFilter<"user_tb"> | string
    userPassword?: StringWithAggregatesFilter<"user_tb"> | string
    userImage?: StringWithAggregatesFilter<"user_tb"> | string
  }

  export type money_tbWhereInput = {
    AND?: money_tbWhereInput | money_tbWhereInput[]
    OR?: money_tbWhereInput[]
    NOT?: money_tbWhereInput | money_tbWhereInput[]
    moneyId?: IntFilter<"money_tb"> | number
    moneyDetail?: StringFilter<"money_tb"> | string
    moneyDate?: StringFilter<"money_tb"> | string
    moneyInOut?: FloatFilter<"money_tb"> | number
    moneyType?: IntFilter<"money_tb"> | number
    userId?: IntFilter<"money_tb"> | number
  }

  export type money_tbOrderByWithRelationInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
    _relevance?: money_tbOrderByRelevanceInput
  }

  export type money_tbWhereUniqueInput = Prisma.AtLeast<{
    moneyId?: number
    AND?: money_tbWhereInput | money_tbWhereInput[]
    OR?: money_tbWhereInput[]
    NOT?: money_tbWhereInput | money_tbWhereInput[]
    moneyDetail?: StringFilter<"money_tb"> | string
    moneyDate?: StringFilter<"money_tb"> | string
    moneyInOut?: FloatFilter<"money_tb"> | number
    moneyType?: IntFilter<"money_tb"> | number
    userId?: IntFilter<"money_tb"> | number
  }, "moneyId">

  export type money_tbOrderByWithAggregationInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
    _count?: money_tbCountOrderByAggregateInput
    _avg?: money_tbAvgOrderByAggregateInput
    _max?: money_tbMaxOrderByAggregateInput
    _min?: money_tbMinOrderByAggregateInput
    _sum?: money_tbSumOrderByAggregateInput
  }

  export type money_tbScalarWhereWithAggregatesInput = {
    AND?: money_tbScalarWhereWithAggregatesInput | money_tbScalarWhereWithAggregatesInput[]
    OR?: money_tbScalarWhereWithAggregatesInput[]
    NOT?: money_tbScalarWhereWithAggregatesInput | money_tbScalarWhereWithAggregatesInput[]
    moneyId?: IntWithAggregatesFilter<"money_tb"> | number
    moneyDetail?: StringWithAggregatesFilter<"money_tb"> | string
    moneyDate?: StringWithAggregatesFilter<"money_tb"> | string
    moneyInOut?: FloatWithAggregatesFilter<"money_tb"> | number
    moneyType?: IntWithAggregatesFilter<"money_tb"> | number
    userId?: IntWithAggregatesFilter<"money_tb"> | number
  }

  export type user_tbCreateInput = {
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
  }

  export type user_tbUncheckedCreateInput = {
    userId?: number
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
  }

  export type user_tbUpdateInput = {
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbCreateManyInput = {
    userId?: number
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
  }

  export type user_tbUpdateManyMutationInput = {
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type money_tbCreateInput = {
    moneyDetail: string
    moneyDate: string
    moneyInOut: number
    moneyType: number
    userId: number
  }

  export type money_tbUncheckedCreateInput = {
    moneyId?: number
    moneyDetail: string
    moneyDate: string
    moneyInOut: number
    moneyType: number
    userId: number
  }

  export type money_tbUpdateInput = {
    moneyDetail?: StringFieldUpdateOperationsInput | string
    moneyDate?: StringFieldUpdateOperationsInput | string
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type money_tbUncheckedUpdateInput = {
    moneyId?: IntFieldUpdateOperationsInput | number
    moneyDetail?: StringFieldUpdateOperationsInput | string
    moneyDate?: StringFieldUpdateOperationsInput | string
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type money_tbCreateManyInput = {
    moneyId?: number
    moneyDetail: string
    moneyDate: string
    moneyInOut: number
    moneyType: number
    userId: number
  }

  export type money_tbUpdateManyMutationInput = {
    moneyDetail?: StringFieldUpdateOperationsInput | string
    moneyDate?: StringFieldUpdateOperationsInput | string
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type money_tbUncheckedUpdateManyInput = {
    moneyId?: IntFieldUpdateOperationsInput | number
    moneyDetail?: StringFieldUpdateOperationsInput | string
    moneyDate?: StringFieldUpdateOperationsInput | string
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type user_tbOrderByRelevanceInput = {
    fields: user_tbOrderByRelevanceFieldEnum | user_tbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tbCountOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type user_tbMaxOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbMinOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type money_tbOrderByRelevanceInput = {
    fields: money_tbOrderByRelevanceFieldEnum | money_tbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type money_tbCountOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tbAvgOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tbMaxOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tbMinOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tbSumOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}