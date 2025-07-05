
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Karyawan
 * 
 */
export type Karyawan = $Result.DefaultSelection<Prisma.$KaryawanPayload>
/**
 * Model Divisi
 * 
 */
export type Divisi = $Result.DefaultSelection<Prisma.$DivisiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JenisKelamin: {
  L: 'L',
  P: 'P'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]


export const StatusKepegawaian: {
  PNS: 'PNS',
  NON_PNS: 'NON_PNS'
};

export type StatusKepegawaian = (typeof StatusKepegawaian)[keyof typeof StatusKepegawaian]

}

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

export type StatusKepegawaian = $Enums.StatusKepegawaian

export const StatusKepegawaian: typeof $Enums.StatusKepegawaian

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.karyawan`: Exposes CRUD operations for the **Karyawan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Karyawans
    * const karyawans = await prisma.karyawan.findMany()
    * ```
    */
  get karyawan(): Prisma.KaryawanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.divisi`: Exposes CRUD operations for the **Divisi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisis
    * const divisis = await prisma.divisi.findMany()
    * ```
    */
  get divisi(): Prisma.DivisiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Admin: 'Admin',
    Karyawan: 'Karyawan',
    Divisi: 'Divisi'
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
      modelProps: "admin" | "karyawan" | "divisi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Karyawan: {
        payload: Prisma.$KaryawanPayload<ExtArgs>
        fields: Prisma.KaryawanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KaryawanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KaryawanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          findFirst: {
            args: Prisma.KaryawanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KaryawanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          findMany: {
            args: Prisma.KaryawanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>[]
          }
          create: {
            args: Prisma.KaryawanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          createMany: {
            args: Prisma.KaryawanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KaryawanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>[]
          }
          delete: {
            args: Prisma.KaryawanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          update: {
            args: Prisma.KaryawanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          deleteMany: {
            args: Prisma.KaryawanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KaryawanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KaryawanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>[]
          }
          upsert: {
            args: Prisma.KaryawanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          aggregate: {
            args: Prisma.KaryawanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKaryawan>
          }
          groupBy: {
            args: Prisma.KaryawanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KaryawanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KaryawanCountArgs<ExtArgs>
            result: $Utils.Optional<KaryawanCountAggregateOutputType> | number
          }
        }
      }
      Divisi: {
        payload: Prisma.$DivisiPayload<ExtArgs>
        fields: Prisma.DivisiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>
          }
          findFirst: {
            args: Prisma.DivisiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>
          }
          findMany: {
            args: Prisma.DivisiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>[]
          }
          create: {
            args: Prisma.DivisiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>
          }
          createMany: {
            args: Prisma.DivisiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DivisiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>[]
          }
          delete: {
            args: Prisma.DivisiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>
          }
          update: {
            args: Prisma.DivisiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>
          }
          deleteMany: {
            args: Prisma.DivisiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivisiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DivisiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>[]
          }
          upsert: {
            args: Prisma.DivisiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisiPayload>
          }
          aggregate: {
            args: Prisma.DivisiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivisi>
          }
          groupBy: {
            args: Prisma.DivisiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisiCountArgs<ExtArgs>
            result: $Utils.Optional<DivisiCountAggregateOutputType> | number
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
    admin?: AdminOmit
    karyawan?: KaryawanOmit
    divisi?: DivisiOmit
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
   * Count Type KaryawanCountOutputType
   */

  export type KaryawanCountOutputType = {
    Divisi: number
  }

  export type KaryawanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Divisi?: boolean | KaryawanCountOutputTypeCountDivisiArgs
  }

  // Custom InputTypes
  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KaryawanCountOutputType
     */
    select?: KaryawanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeCountDivisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminSumAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminMinAggregateOutputType = {
    admin_id: number | null
    username: string | null
    email: string | null
    password: string | null
    peran: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    admin_id: number | null
    username: string | null
    email: string | null
    password: string | null
    peran: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    admin_id: number
    username: number
    email: number
    password: number
    peran: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    admin_id?: true
  }

  export type AdminSumAggregateInputType = {
    admin_id?: true
  }

  export type AdminMinAggregateInputType = {
    admin_id?: true
    username?: true
    email?: true
    password?: true
    peran?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminMaxAggregateInputType = {
    admin_id?: true
    username?: true
    email?: true
    password?: true
    peran?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminCountAggregateInputType = {
    admin_id?: true
    username?: true
    email?: true
    password?: true
    peran?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    admin_id: number
    username: string
    email: string
    password: string
    peran: string
    created_at: Date
    updated_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    peran?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    peran?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    peran?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    admin_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    peran?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admin_id" | "username" | "email" | "password" | "peran" | "created_at" | "updated_at", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      admin_id: number
      username: string
      email: string
      password: string
      peran: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.findMany({ select: { admin_id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.createManyAndReturn({
     *   select: { admin_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.updateManyAndReturn({
     *   select: { admin_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly admin_id: FieldRef<"Admin", 'Int'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly peran: FieldRef<"Admin", 'String'>
    readonly created_at: FieldRef<"Admin", 'DateTime'>
    readonly updated_at: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Karyawan
   */

  export type AggregateKaryawan = {
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  export type KaryawanAvgAggregateOutputType = {
    karyawan_id: number | null
  }

  export type KaryawanSumAggregateOutputType = {
    karyawan_id: number | null
  }

  export type KaryawanMinAggregateOutputType = {
    karyawan_id: number | null
    nama_karyawan: string | null
    alamat: string | null
    no_hp: string | null
    email: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    status_kepegawaian: $Enums.StatusKepegawaian | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KaryawanMaxAggregateOutputType = {
    karyawan_id: number | null
    nama_karyawan: string | null
    alamat: string | null
    no_hp: string | null
    email: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    status_kepegawaian: $Enums.StatusKepegawaian | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KaryawanCountAggregateOutputType = {
    karyawan_id: number
    nama_karyawan: number
    alamat: number
    no_hp: number
    email: number
    jenis_kelamin: number
    status_kepegawaian: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KaryawanAvgAggregateInputType = {
    karyawan_id?: true
  }

  export type KaryawanSumAggregateInputType = {
    karyawan_id?: true
  }

  export type KaryawanMinAggregateInputType = {
    karyawan_id?: true
    nama_karyawan?: true
    alamat?: true
    no_hp?: true
    email?: true
    jenis_kelamin?: true
    status_kepegawaian?: true
    created_at?: true
    updated_at?: true
  }

  export type KaryawanMaxAggregateInputType = {
    karyawan_id?: true
    nama_karyawan?: true
    alamat?: true
    no_hp?: true
    email?: true
    jenis_kelamin?: true
    status_kepegawaian?: true
    created_at?: true
    updated_at?: true
  }

  export type KaryawanCountAggregateInputType = {
    karyawan_id?: true
    nama_karyawan?: true
    alamat?: true
    no_hp?: true
    email?: true
    jenis_kelamin?: true
    status_kepegawaian?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KaryawanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Karyawan to aggregate.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Karyawans
    **/
    _count?: true | KaryawanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KaryawanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KaryawanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KaryawanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KaryawanMaxAggregateInputType
  }

  export type GetKaryawanAggregateType<T extends KaryawanAggregateArgs> = {
        [P in keyof T & keyof AggregateKaryawan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKaryawan[P]>
      : GetScalarType<T[P], AggregateKaryawan[P]>
  }




  export type KaryawanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaryawanWhereInput
    orderBy?: KaryawanOrderByWithAggregationInput | KaryawanOrderByWithAggregationInput[]
    by: KaryawanScalarFieldEnum[] | KaryawanScalarFieldEnum
    having?: KaryawanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KaryawanCountAggregateInputType | true
    _avg?: KaryawanAvgAggregateInputType
    _sum?: KaryawanSumAggregateInputType
    _min?: KaryawanMinAggregateInputType
    _max?: KaryawanMaxAggregateInputType
  }

  export type KaryawanGroupByOutputType = {
    karyawan_id: number
    nama_karyawan: string
    alamat: string
    no_hp: string
    email: string | null
    jenis_kelamin: $Enums.JenisKelamin
    status_kepegawaian: $Enums.StatusKepegawaian
    created_at: Date
    updated_at: Date
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  type GetKaryawanGroupByPayload<T extends KaryawanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KaryawanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KaryawanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
            : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
        }
      >
    >


  export type KaryawanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    karyawan_id?: boolean
    nama_karyawan?: boolean
    alamat?: boolean
    no_hp?: boolean
    email?: boolean
    jenis_kelamin?: boolean
    status_kepegawaian?: boolean
    created_at?: boolean
    updated_at?: boolean
    Divisi?: boolean | Karyawan$DivisiArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["karyawan"]>

  export type KaryawanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    karyawan_id?: boolean
    nama_karyawan?: boolean
    alamat?: boolean
    no_hp?: boolean
    email?: boolean
    jenis_kelamin?: boolean
    status_kepegawaian?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["karyawan"]>

  export type KaryawanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    karyawan_id?: boolean
    nama_karyawan?: boolean
    alamat?: boolean
    no_hp?: boolean
    email?: boolean
    jenis_kelamin?: boolean
    status_kepegawaian?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["karyawan"]>

  export type KaryawanSelectScalar = {
    karyawan_id?: boolean
    nama_karyawan?: boolean
    alamat?: boolean
    no_hp?: boolean
    email?: boolean
    jenis_kelamin?: boolean
    status_kepegawaian?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type KaryawanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"karyawan_id" | "nama_karyawan" | "alamat" | "no_hp" | "email" | "jenis_kelamin" | "status_kepegawaian" | "created_at" | "updated_at", ExtArgs["result"]["karyawan"]>
  export type KaryawanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Divisi?: boolean | Karyawan$DivisiArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KaryawanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KaryawanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KaryawanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Karyawan"
    objects: {
      Divisi: Prisma.$DivisiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      karyawan_id: number
      nama_karyawan: string
      alamat: string
      no_hp: string
      email: string | null
      jenis_kelamin: $Enums.JenisKelamin
      status_kepegawaian: $Enums.StatusKepegawaian
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["karyawan"]>
    composites: {}
  }

  type KaryawanGetPayload<S extends boolean | null | undefined | KaryawanDefaultArgs> = $Result.GetResult<Prisma.$KaryawanPayload, S>

  type KaryawanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KaryawanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KaryawanCountAggregateInputType | true
    }

  export interface KaryawanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Karyawan'], meta: { name: 'Karyawan' } }
    /**
     * Find zero or one Karyawan that matches the filter.
     * @param {KaryawanFindUniqueArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KaryawanFindUniqueArgs>(args: SelectSubset<T, KaryawanFindUniqueArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Karyawan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KaryawanFindUniqueOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KaryawanFindUniqueOrThrowArgs>(args: SelectSubset<T, KaryawanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Karyawan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindFirstArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KaryawanFindFirstArgs>(args?: SelectSubset<T, KaryawanFindFirstArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Karyawan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindFirstOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KaryawanFindFirstOrThrowArgs>(args?: SelectSubset<T, KaryawanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Karyawans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Karyawans
     * const karyawans = await prisma.karyawan.findMany()
     * 
     * // Get first 10 Karyawans
     * const karyawans = await prisma.karyawan.findMany({ take: 10 })
     * 
     * // Only select the `karyawan_id`
     * const karyawanWithKaryawan_idOnly = await prisma.karyawan.findMany({ select: { karyawan_id: true } })
     * 
     */
    findMany<T extends KaryawanFindManyArgs>(args?: SelectSubset<T, KaryawanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Karyawan.
     * @param {KaryawanCreateArgs} args - Arguments to create a Karyawan.
     * @example
     * // Create one Karyawan
     * const Karyawan = await prisma.karyawan.create({
     *   data: {
     *     // ... data to create a Karyawan
     *   }
     * })
     * 
     */
    create<T extends KaryawanCreateArgs>(args: SelectSubset<T, KaryawanCreateArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Karyawans.
     * @param {KaryawanCreateManyArgs} args - Arguments to create many Karyawans.
     * @example
     * // Create many Karyawans
     * const karyawan = await prisma.karyawan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KaryawanCreateManyArgs>(args?: SelectSubset<T, KaryawanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Karyawans and returns the data saved in the database.
     * @param {KaryawanCreateManyAndReturnArgs} args - Arguments to create many Karyawans.
     * @example
     * // Create many Karyawans
     * const karyawan = await prisma.karyawan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Karyawans and only return the `karyawan_id`
     * const karyawanWithKaryawan_idOnly = await prisma.karyawan.createManyAndReturn({
     *   select: { karyawan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KaryawanCreateManyAndReturnArgs>(args?: SelectSubset<T, KaryawanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Karyawan.
     * @param {KaryawanDeleteArgs} args - Arguments to delete one Karyawan.
     * @example
     * // Delete one Karyawan
     * const Karyawan = await prisma.karyawan.delete({
     *   where: {
     *     // ... filter to delete one Karyawan
     *   }
     * })
     * 
     */
    delete<T extends KaryawanDeleteArgs>(args: SelectSubset<T, KaryawanDeleteArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Karyawan.
     * @param {KaryawanUpdateArgs} args - Arguments to update one Karyawan.
     * @example
     * // Update one Karyawan
     * const karyawan = await prisma.karyawan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KaryawanUpdateArgs>(args: SelectSubset<T, KaryawanUpdateArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Karyawans.
     * @param {KaryawanDeleteManyArgs} args - Arguments to filter Karyawans to delete.
     * @example
     * // Delete a few Karyawans
     * const { count } = await prisma.karyawan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KaryawanDeleteManyArgs>(args?: SelectSubset<T, KaryawanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Karyawans
     * const karyawan = await prisma.karyawan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KaryawanUpdateManyArgs>(args: SelectSubset<T, KaryawanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karyawans and returns the data updated in the database.
     * @param {KaryawanUpdateManyAndReturnArgs} args - Arguments to update many Karyawans.
     * @example
     * // Update many Karyawans
     * const karyawan = await prisma.karyawan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Karyawans and only return the `karyawan_id`
     * const karyawanWithKaryawan_idOnly = await prisma.karyawan.updateManyAndReturn({
     *   select: { karyawan_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KaryawanUpdateManyAndReturnArgs>(args: SelectSubset<T, KaryawanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Karyawan.
     * @param {KaryawanUpsertArgs} args - Arguments to update or create a Karyawan.
     * @example
     * // Update or create a Karyawan
     * const karyawan = await prisma.karyawan.upsert({
     *   create: {
     *     // ... data to create a Karyawan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Karyawan we want to update
     *   }
     * })
     */
    upsert<T extends KaryawanUpsertArgs>(args: SelectSubset<T, KaryawanUpsertArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanCountArgs} args - Arguments to filter Karyawans to count.
     * @example
     * // Count the number of Karyawans
     * const count = await prisma.karyawan.count({
     *   where: {
     *     // ... the filter for the Karyawans we want to count
     *   }
     * })
    **/
    count<T extends KaryawanCountArgs>(
      args?: Subset<T, KaryawanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KaryawanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KaryawanAggregateArgs>(args: Subset<T, KaryawanAggregateArgs>): Prisma.PrismaPromise<GetKaryawanAggregateType<T>>

    /**
     * Group by Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanGroupByArgs} args - Group by arguments.
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
      T extends KaryawanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KaryawanGroupByArgs['orderBy'] }
        : { orderBy?: KaryawanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KaryawanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKaryawanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Karyawan model
   */
  readonly fields: KaryawanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Karyawan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KaryawanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Divisi<T extends Karyawan$DivisiArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$DivisiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Karyawan model
   */
  interface KaryawanFieldRefs {
    readonly karyawan_id: FieldRef<"Karyawan", 'Int'>
    readonly nama_karyawan: FieldRef<"Karyawan", 'String'>
    readonly alamat: FieldRef<"Karyawan", 'String'>
    readonly no_hp: FieldRef<"Karyawan", 'String'>
    readonly email: FieldRef<"Karyawan", 'String'>
    readonly jenis_kelamin: FieldRef<"Karyawan", 'JenisKelamin'>
    readonly status_kepegawaian: FieldRef<"Karyawan", 'StatusKepegawaian'>
    readonly created_at: FieldRef<"Karyawan", 'DateTime'>
    readonly updated_at: FieldRef<"Karyawan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Karyawan findUnique
   */
  export type KaryawanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan findUniqueOrThrow
   */
  export type KaryawanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan findFirst
   */
  export type KaryawanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan findFirstOrThrow
   */
  export type KaryawanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan findMany
   */
  export type KaryawanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawans to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan create
   */
  export type KaryawanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The data needed to create a Karyawan.
     */
    data: XOR<KaryawanCreateInput, KaryawanUncheckedCreateInput>
  }

  /**
   * Karyawan createMany
   */
  export type KaryawanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Karyawans.
     */
    data: KaryawanCreateManyInput | KaryawanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Karyawan createManyAndReturn
   */
  export type KaryawanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * The data used to create many Karyawans.
     */
    data: KaryawanCreateManyInput | KaryawanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Karyawan update
   */
  export type KaryawanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The data needed to update a Karyawan.
     */
    data: XOR<KaryawanUpdateInput, KaryawanUncheckedUpdateInput>
    /**
     * Choose, which Karyawan to update.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan updateMany
   */
  export type KaryawanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Karyawans.
     */
    data: XOR<KaryawanUpdateManyMutationInput, KaryawanUncheckedUpdateManyInput>
    /**
     * Filter which Karyawans to update
     */
    where?: KaryawanWhereInput
    /**
     * Limit how many Karyawans to update.
     */
    limit?: number
  }

  /**
   * Karyawan updateManyAndReturn
   */
  export type KaryawanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * The data used to update Karyawans.
     */
    data: XOR<KaryawanUpdateManyMutationInput, KaryawanUncheckedUpdateManyInput>
    /**
     * Filter which Karyawans to update
     */
    where?: KaryawanWhereInput
    /**
     * Limit how many Karyawans to update.
     */
    limit?: number
  }

  /**
   * Karyawan upsert
   */
  export type KaryawanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The filter to search for the Karyawan to update in case it exists.
     */
    where: KaryawanWhereUniqueInput
    /**
     * In case the Karyawan found by the `where` argument doesn't exist, create a new Karyawan with this data.
     */
    create: XOR<KaryawanCreateInput, KaryawanUncheckedCreateInput>
    /**
     * In case the Karyawan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KaryawanUpdateInput, KaryawanUncheckedUpdateInput>
  }

  /**
   * Karyawan delete
   */
  export type KaryawanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter which Karyawan to delete.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan deleteMany
   */
  export type KaryawanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Karyawans to delete
     */
    where?: KaryawanWhereInput
    /**
     * Limit how many Karyawans to delete.
     */
    limit?: number
  }

  /**
   * Karyawan.Divisi
   */
  export type Karyawan$DivisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    where?: DivisiWhereInput
    orderBy?: DivisiOrderByWithRelationInput | DivisiOrderByWithRelationInput[]
    cursor?: DivisiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisiScalarFieldEnum | DivisiScalarFieldEnum[]
  }

  /**
   * Karyawan without action
   */
  export type KaryawanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Karyawan
     */
    omit?: KaryawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
  }


  /**
   * Model Divisi
   */

  export type AggregateDivisi = {
    _count: DivisiCountAggregateOutputType | null
    _avg: DivisiAvgAggregateOutputType | null
    _sum: DivisiSumAggregateOutputType | null
    _min: DivisiMinAggregateOutputType | null
    _max: DivisiMaxAggregateOutputType | null
  }

  export type DivisiAvgAggregateOutputType = {
    divisi_id: number | null
    karyawan_id: number | null
  }

  export type DivisiSumAggregateOutputType = {
    divisi_id: number | null
    karyawan_id: number | null
  }

  export type DivisiMinAggregateOutputType = {
    divisi_id: number | null
    nama_divisi: string | null
    posisi: string | null
    karyawan_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DivisiMaxAggregateOutputType = {
    divisi_id: number | null
    nama_divisi: string | null
    posisi: string | null
    karyawan_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DivisiCountAggregateOutputType = {
    divisi_id: number
    nama_divisi: number
    posisi: number
    karyawan_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DivisiAvgAggregateInputType = {
    divisi_id?: true
    karyawan_id?: true
  }

  export type DivisiSumAggregateInputType = {
    divisi_id?: true
    karyawan_id?: true
  }

  export type DivisiMinAggregateInputType = {
    divisi_id?: true
    nama_divisi?: true
    posisi?: true
    karyawan_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DivisiMaxAggregateInputType = {
    divisi_id?: true
    nama_divisi?: true
    posisi?: true
    karyawan_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DivisiCountAggregateInputType = {
    divisi_id?: true
    nama_divisi?: true
    posisi?: true
    karyawan_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DivisiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisi to aggregate.
     */
    where?: DivisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisis to fetch.
     */
    orderBy?: DivisiOrderByWithRelationInput | DivisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisis
    **/
    _count?: true | DivisiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisiMaxAggregateInputType
  }

  export type GetDivisiAggregateType<T extends DivisiAggregateArgs> = {
        [P in keyof T & keyof AggregateDivisi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivisi[P]>
      : GetScalarType<T[P], AggregateDivisi[P]>
  }




  export type DivisiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisiWhereInput
    orderBy?: DivisiOrderByWithAggregationInput | DivisiOrderByWithAggregationInput[]
    by: DivisiScalarFieldEnum[] | DivisiScalarFieldEnum
    having?: DivisiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisiCountAggregateInputType | true
    _avg?: DivisiAvgAggregateInputType
    _sum?: DivisiSumAggregateInputType
    _min?: DivisiMinAggregateInputType
    _max?: DivisiMaxAggregateInputType
  }

  export type DivisiGroupByOutputType = {
    divisi_id: number
    nama_divisi: string
    posisi: string
    karyawan_id: number
    created_at: Date
    updated_at: Date
    _count: DivisiCountAggregateOutputType | null
    _avg: DivisiAvgAggregateOutputType | null
    _sum: DivisiSumAggregateOutputType | null
    _min: DivisiMinAggregateOutputType | null
    _max: DivisiMaxAggregateOutputType | null
  }

  type GetDivisiGroupByPayload<T extends DivisiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisiGroupByOutputType[P]>
            : GetScalarType<T[P], DivisiGroupByOutputType[P]>
        }
      >
    >


  export type DivisiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    divisi_id?: boolean
    nama_divisi?: boolean
    posisi?: boolean
    karyawan_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisi"]>

  export type DivisiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    divisi_id?: boolean
    nama_divisi?: boolean
    posisi?: boolean
    karyawan_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisi"]>

  export type DivisiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    divisi_id?: boolean
    nama_divisi?: boolean
    posisi?: boolean
    karyawan_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisi"]>

  export type DivisiSelectScalar = {
    divisi_id?: boolean
    nama_divisi?: boolean
    posisi?: boolean
    karyawan_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DivisiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"divisi_id" | "nama_divisi" | "posisi" | "karyawan_id" | "created_at" | "updated_at", ExtArgs["result"]["divisi"]>
  export type DivisiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }
  export type DivisiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }
  export type DivisiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }

  export type $DivisiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Divisi"
    objects: {
      Karyawan: Prisma.$KaryawanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      divisi_id: number
      nama_divisi: string
      posisi: string
      karyawan_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["divisi"]>
    composites: {}
  }

  type DivisiGetPayload<S extends boolean | null | undefined | DivisiDefaultArgs> = $Result.GetResult<Prisma.$DivisiPayload, S>

  type DivisiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DivisiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisiCountAggregateInputType | true
    }

  export interface DivisiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Divisi'], meta: { name: 'Divisi' } }
    /**
     * Find zero or one Divisi that matches the filter.
     * @param {DivisiFindUniqueArgs} args - Arguments to find a Divisi
     * @example
     * // Get one Divisi
     * const divisi = await prisma.divisi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivisiFindUniqueArgs>(args: SelectSubset<T, DivisiFindUniqueArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Divisi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DivisiFindUniqueOrThrowArgs} args - Arguments to find a Divisi
     * @example
     * // Get one Divisi
     * const divisi = await prisma.divisi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivisiFindUniqueOrThrowArgs>(args: SelectSubset<T, DivisiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Divisi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisiFindFirstArgs} args - Arguments to find a Divisi
     * @example
     * // Get one Divisi
     * const divisi = await prisma.divisi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivisiFindFirstArgs>(args?: SelectSubset<T, DivisiFindFirstArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Divisi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisiFindFirstOrThrowArgs} args - Arguments to find a Divisi
     * @example
     * // Get one Divisi
     * const divisi = await prisma.divisi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivisiFindFirstOrThrowArgs>(args?: SelectSubset<T, DivisiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Divisis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisis
     * const divisis = await prisma.divisi.findMany()
     * 
     * // Get first 10 Divisis
     * const divisis = await prisma.divisi.findMany({ take: 10 })
     * 
     * // Only select the `divisi_id`
     * const divisiWithDivisi_idOnly = await prisma.divisi.findMany({ select: { divisi_id: true } })
     * 
     */
    findMany<T extends DivisiFindManyArgs>(args?: SelectSubset<T, DivisiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Divisi.
     * @param {DivisiCreateArgs} args - Arguments to create a Divisi.
     * @example
     * // Create one Divisi
     * const Divisi = await prisma.divisi.create({
     *   data: {
     *     // ... data to create a Divisi
     *   }
     * })
     * 
     */
    create<T extends DivisiCreateArgs>(args: SelectSubset<T, DivisiCreateArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Divisis.
     * @param {DivisiCreateManyArgs} args - Arguments to create many Divisis.
     * @example
     * // Create many Divisis
     * const divisi = await prisma.divisi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivisiCreateManyArgs>(args?: SelectSubset<T, DivisiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Divisis and returns the data saved in the database.
     * @param {DivisiCreateManyAndReturnArgs} args - Arguments to create many Divisis.
     * @example
     * // Create many Divisis
     * const divisi = await prisma.divisi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Divisis and only return the `divisi_id`
     * const divisiWithDivisi_idOnly = await prisma.divisi.createManyAndReturn({
     *   select: { divisi_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DivisiCreateManyAndReturnArgs>(args?: SelectSubset<T, DivisiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Divisi.
     * @param {DivisiDeleteArgs} args - Arguments to delete one Divisi.
     * @example
     * // Delete one Divisi
     * const Divisi = await prisma.divisi.delete({
     *   where: {
     *     // ... filter to delete one Divisi
     *   }
     * })
     * 
     */
    delete<T extends DivisiDeleteArgs>(args: SelectSubset<T, DivisiDeleteArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Divisi.
     * @param {DivisiUpdateArgs} args - Arguments to update one Divisi.
     * @example
     * // Update one Divisi
     * const divisi = await prisma.divisi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivisiUpdateArgs>(args: SelectSubset<T, DivisiUpdateArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Divisis.
     * @param {DivisiDeleteManyArgs} args - Arguments to filter Divisis to delete.
     * @example
     * // Delete a few Divisis
     * const { count } = await prisma.divisi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivisiDeleteManyArgs>(args?: SelectSubset<T, DivisiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisis
     * const divisi = await prisma.divisi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivisiUpdateManyArgs>(args: SelectSubset<T, DivisiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisis and returns the data updated in the database.
     * @param {DivisiUpdateManyAndReturnArgs} args - Arguments to update many Divisis.
     * @example
     * // Update many Divisis
     * const divisi = await prisma.divisi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Divisis and only return the `divisi_id`
     * const divisiWithDivisi_idOnly = await prisma.divisi.updateManyAndReturn({
     *   select: { divisi_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DivisiUpdateManyAndReturnArgs>(args: SelectSubset<T, DivisiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Divisi.
     * @param {DivisiUpsertArgs} args - Arguments to update or create a Divisi.
     * @example
     * // Update or create a Divisi
     * const divisi = await prisma.divisi.upsert({
     *   create: {
     *     // ... data to create a Divisi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Divisi we want to update
     *   }
     * })
     */
    upsert<T extends DivisiUpsertArgs>(args: SelectSubset<T, DivisiUpsertArgs<ExtArgs>>): Prisma__DivisiClient<$Result.GetResult<Prisma.$DivisiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Divisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisiCountArgs} args - Arguments to filter Divisis to count.
     * @example
     * // Count the number of Divisis
     * const count = await prisma.divisi.count({
     *   where: {
     *     // ... the filter for the Divisis we want to count
     *   }
     * })
    **/
    count<T extends DivisiCountArgs>(
      args?: Subset<T, DivisiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Divisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisiAggregateArgs>(args: Subset<T, DivisiAggregateArgs>): Prisma.PrismaPromise<GetDivisiAggregateType<T>>

    /**
     * Group by Divisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisiGroupByArgs} args - Group by arguments.
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
      T extends DivisiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisiGroupByArgs['orderBy'] }
        : { orderBy?: DivisiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Divisi model
   */
  readonly fields: DivisiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Divisi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Karyawan<T extends KaryawanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KaryawanDefaultArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Divisi model
   */
  interface DivisiFieldRefs {
    readonly divisi_id: FieldRef<"Divisi", 'Int'>
    readonly nama_divisi: FieldRef<"Divisi", 'String'>
    readonly posisi: FieldRef<"Divisi", 'String'>
    readonly karyawan_id: FieldRef<"Divisi", 'Int'>
    readonly created_at: FieldRef<"Divisi", 'DateTime'>
    readonly updated_at: FieldRef<"Divisi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Divisi findUnique
   */
  export type DivisiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * Filter, which Divisi to fetch.
     */
    where: DivisiWhereUniqueInput
  }

  /**
   * Divisi findUniqueOrThrow
   */
  export type DivisiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * Filter, which Divisi to fetch.
     */
    where: DivisiWhereUniqueInput
  }

  /**
   * Divisi findFirst
   */
  export type DivisiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * Filter, which Divisi to fetch.
     */
    where?: DivisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisis to fetch.
     */
    orderBy?: DivisiOrderByWithRelationInput | DivisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisis.
     */
    cursor?: DivisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisis.
     */
    distinct?: DivisiScalarFieldEnum | DivisiScalarFieldEnum[]
  }

  /**
   * Divisi findFirstOrThrow
   */
  export type DivisiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * Filter, which Divisi to fetch.
     */
    where?: DivisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisis to fetch.
     */
    orderBy?: DivisiOrderByWithRelationInput | DivisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisis.
     */
    cursor?: DivisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisis.
     */
    distinct?: DivisiScalarFieldEnum | DivisiScalarFieldEnum[]
  }

  /**
   * Divisi findMany
   */
  export type DivisiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * Filter, which Divisis to fetch.
     */
    where?: DivisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisis to fetch.
     */
    orderBy?: DivisiOrderByWithRelationInput | DivisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisis.
     */
    cursor?: DivisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisis.
     */
    skip?: number
    distinct?: DivisiScalarFieldEnum | DivisiScalarFieldEnum[]
  }

  /**
   * Divisi create
   */
  export type DivisiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * The data needed to create a Divisi.
     */
    data: XOR<DivisiCreateInput, DivisiUncheckedCreateInput>
  }

  /**
   * Divisi createMany
   */
  export type DivisiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisis.
     */
    data: DivisiCreateManyInput | DivisiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Divisi createManyAndReturn
   */
  export type DivisiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * The data used to create many Divisis.
     */
    data: DivisiCreateManyInput | DivisiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Divisi update
   */
  export type DivisiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * The data needed to update a Divisi.
     */
    data: XOR<DivisiUpdateInput, DivisiUncheckedUpdateInput>
    /**
     * Choose, which Divisi to update.
     */
    where: DivisiWhereUniqueInput
  }

  /**
   * Divisi updateMany
   */
  export type DivisiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisis.
     */
    data: XOR<DivisiUpdateManyMutationInput, DivisiUncheckedUpdateManyInput>
    /**
     * Filter which Divisis to update
     */
    where?: DivisiWhereInput
    /**
     * Limit how many Divisis to update.
     */
    limit?: number
  }

  /**
   * Divisi updateManyAndReturn
   */
  export type DivisiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * The data used to update Divisis.
     */
    data: XOR<DivisiUpdateManyMutationInput, DivisiUncheckedUpdateManyInput>
    /**
     * Filter which Divisis to update
     */
    where?: DivisiWhereInput
    /**
     * Limit how many Divisis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Divisi upsert
   */
  export type DivisiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * The filter to search for the Divisi to update in case it exists.
     */
    where: DivisiWhereUniqueInput
    /**
     * In case the Divisi found by the `where` argument doesn't exist, create a new Divisi with this data.
     */
    create: XOR<DivisiCreateInput, DivisiUncheckedCreateInput>
    /**
     * In case the Divisi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisiUpdateInput, DivisiUncheckedUpdateInput>
  }

  /**
   * Divisi delete
   */
  export type DivisiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
    /**
     * Filter which Divisi to delete.
     */
    where: DivisiWhereUniqueInput
  }

  /**
   * Divisi deleteMany
   */
  export type DivisiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisis to delete
     */
    where?: DivisiWhereInput
    /**
     * Limit how many Divisis to delete.
     */
    limit?: number
  }

  /**
   * Divisi without action
   */
  export type DivisiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisi
     */
    select?: DivisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisi
     */
    omit?: DivisiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisiInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    admin_id: 'admin_id',
    username: 'username',
    email: 'email',
    password: 'password',
    peran: 'peran',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const KaryawanScalarFieldEnum: {
    karyawan_id: 'karyawan_id',
    nama_karyawan: 'nama_karyawan',
    alamat: 'alamat',
    no_hp: 'no_hp',
    email: 'email',
    jenis_kelamin: 'jenis_kelamin',
    status_kepegawaian: 'status_kepegawaian',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KaryawanScalarFieldEnum = (typeof KaryawanScalarFieldEnum)[keyof typeof KaryawanScalarFieldEnum]


  export const DivisiScalarFieldEnum: {
    divisi_id: 'divisi_id',
    nama_divisi: 'nama_divisi',
    posisi: 'posisi',
    karyawan_id: 'karyawan_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DivisiScalarFieldEnum = (typeof DivisiScalarFieldEnum)[keyof typeof DivisiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'JenisKelamin[]'
   */
  export type ListEnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin[]'>
    


  /**
   * Reference to a field of type 'StatusKepegawaian'
   */
  export type EnumStatusKepegawaianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKepegawaian'>
    


  /**
   * Reference to a field of type 'StatusKepegawaian[]'
   */
  export type ListEnumStatusKepegawaianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKepegawaian[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    admin_id?: IntFilter<"Admin"> | number
    username?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    peran?: StringFilter<"Admin"> | string
    created_at?: DateTimeFilter<"Admin"> | Date | string
    updated_at?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    admin_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    peran?: StringFilter<"Admin"> | string
    created_at?: DateTimeFilter<"Admin"> | Date | string
    updated_at?: DateTimeFilter<"Admin"> | Date | string
  }, "admin_id" | "email">

  export type AdminOrderByWithAggregationInput = {
    admin_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    admin_id?: IntWithAggregatesFilter<"Admin"> | number
    username?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    peran?: StringWithAggregatesFilter<"Admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type KaryawanWhereInput = {
    AND?: KaryawanWhereInput | KaryawanWhereInput[]
    OR?: KaryawanWhereInput[]
    NOT?: KaryawanWhereInput | KaryawanWhereInput[]
    karyawan_id?: IntFilter<"Karyawan"> | number
    nama_karyawan?: StringFilter<"Karyawan"> | string
    alamat?: StringFilter<"Karyawan"> | string
    no_hp?: StringFilter<"Karyawan"> | string
    email?: StringNullableFilter<"Karyawan"> | string | null
    jenis_kelamin?: EnumJenisKelaminFilter<"Karyawan"> | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFilter<"Karyawan"> | $Enums.StatusKepegawaian
    created_at?: DateTimeFilter<"Karyawan"> | Date | string
    updated_at?: DateTimeFilter<"Karyawan"> | Date | string
    Divisi?: DivisiListRelationFilter
  }

  export type KaryawanOrderByWithRelationInput = {
    karyawan_id?: SortOrder
    nama_karyawan?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrderInput | SortOrder
    jenis_kelamin?: SortOrder
    status_kepegawaian?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Divisi?: DivisiOrderByRelationAggregateInput
  }

  export type KaryawanWhereUniqueInput = Prisma.AtLeast<{
    karyawan_id?: number
    AND?: KaryawanWhereInput | KaryawanWhereInput[]
    OR?: KaryawanWhereInput[]
    NOT?: KaryawanWhereInput | KaryawanWhereInput[]
    nama_karyawan?: StringFilter<"Karyawan"> | string
    alamat?: StringFilter<"Karyawan"> | string
    no_hp?: StringFilter<"Karyawan"> | string
    email?: StringNullableFilter<"Karyawan"> | string | null
    jenis_kelamin?: EnumJenisKelaminFilter<"Karyawan"> | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFilter<"Karyawan"> | $Enums.StatusKepegawaian
    created_at?: DateTimeFilter<"Karyawan"> | Date | string
    updated_at?: DateTimeFilter<"Karyawan"> | Date | string
    Divisi?: DivisiListRelationFilter
  }, "karyawan_id">

  export type KaryawanOrderByWithAggregationInput = {
    karyawan_id?: SortOrder
    nama_karyawan?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrderInput | SortOrder
    jenis_kelamin?: SortOrder
    status_kepegawaian?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: KaryawanCountOrderByAggregateInput
    _avg?: KaryawanAvgOrderByAggregateInput
    _max?: KaryawanMaxOrderByAggregateInput
    _min?: KaryawanMinOrderByAggregateInput
    _sum?: KaryawanSumOrderByAggregateInput
  }

  export type KaryawanScalarWhereWithAggregatesInput = {
    AND?: KaryawanScalarWhereWithAggregatesInput | KaryawanScalarWhereWithAggregatesInput[]
    OR?: KaryawanScalarWhereWithAggregatesInput[]
    NOT?: KaryawanScalarWhereWithAggregatesInput | KaryawanScalarWhereWithAggregatesInput[]
    karyawan_id?: IntWithAggregatesFilter<"Karyawan"> | number
    nama_karyawan?: StringWithAggregatesFilter<"Karyawan"> | string
    alamat?: StringWithAggregatesFilter<"Karyawan"> | string
    no_hp?: StringWithAggregatesFilter<"Karyawan"> | string
    email?: StringNullableWithAggregatesFilter<"Karyawan"> | string | null
    jenis_kelamin?: EnumJenisKelaminWithAggregatesFilter<"Karyawan"> | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianWithAggregatesFilter<"Karyawan"> | $Enums.StatusKepegawaian
    created_at?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
  }

  export type DivisiWhereInput = {
    AND?: DivisiWhereInput | DivisiWhereInput[]
    OR?: DivisiWhereInput[]
    NOT?: DivisiWhereInput | DivisiWhereInput[]
    divisi_id?: IntFilter<"Divisi"> | number
    nama_divisi?: StringFilter<"Divisi"> | string
    posisi?: StringFilter<"Divisi"> | string
    karyawan_id?: IntFilter<"Divisi"> | number
    created_at?: DateTimeFilter<"Divisi"> | Date | string
    updated_at?: DateTimeFilter<"Divisi"> | Date | string
    Karyawan?: XOR<KaryawanScalarRelationFilter, KaryawanWhereInput>
  }

  export type DivisiOrderByWithRelationInput = {
    divisi_id?: SortOrder
    nama_divisi?: SortOrder
    posisi?: SortOrder
    karyawan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Karyawan?: KaryawanOrderByWithRelationInput
  }

  export type DivisiWhereUniqueInput = Prisma.AtLeast<{
    divisi_id?: number
    AND?: DivisiWhereInput | DivisiWhereInput[]
    OR?: DivisiWhereInput[]
    NOT?: DivisiWhereInput | DivisiWhereInput[]
    nama_divisi?: StringFilter<"Divisi"> | string
    posisi?: StringFilter<"Divisi"> | string
    karyawan_id?: IntFilter<"Divisi"> | number
    created_at?: DateTimeFilter<"Divisi"> | Date | string
    updated_at?: DateTimeFilter<"Divisi"> | Date | string
    Karyawan?: XOR<KaryawanScalarRelationFilter, KaryawanWhereInput>
  }, "divisi_id">

  export type DivisiOrderByWithAggregationInput = {
    divisi_id?: SortOrder
    nama_divisi?: SortOrder
    posisi?: SortOrder
    karyawan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DivisiCountOrderByAggregateInput
    _avg?: DivisiAvgOrderByAggregateInput
    _max?: DivisiMaxOrderByAggregateInput
    _min?: DivisiMinOrderByAggregateInput
    _sum?: DivisiSumOrderByAggregateInput
  }

  export type DivisiScalarWhereWithAggregatesInput = {
    AND?: DivisiScalarWhereWithAggregatesInput | DivisiScalarWhereWithAggregatesInput[]
    OR?: DivisiScalarWhereWithAggregatesInput[]
    NOT?: DivisiScalarWhereWithAggregatesInput | DivisiScalarWhereWithAggregatesInput[]
    divisi_id?: IntWithAggregatesFilter<"Divisi"> | number
    nama_divisi?: StringWithAggregatesFilter<"Divisi"> | string
    posisi?: StringWithAggregatesFilter<"Divisi"> | string
    karyawan_id?: IntWithAggregatesFilter<"Divisi"> | number
    created_at?: DateTimeWithAggregatesFilter<"Divisi"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Divisi"> | Date | string
  }

  export type AdminCreateInput = {
    username: string
    email: string
    password: string
    peran: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    admin_id?: number
    username: string
    email: string
    password: string
    peran: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    admin_id?: number
    username: string
    email: string
    password: string
    peran: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanCreateInput = {
    nama_karyawan: string
    alamat: string
    no_hp: string
    email?: string | null
    jenis_kelamin: $Enums.JenisKelamin
    status_kepegawaian: $Enums.StatusKepegawaian
    created_at?: Date | string
    updated_at?: Date | string
    Divisi?: DivisiCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateInput = {
    karyawan_id?: number
    nama_karyawan: string
    alamat: string
    no_hp: string
    email?: string | null
    jenis_kelamin: $Enums.JenisKelamin
    status_kepegawaian: $Enums.StatusKepegawaian
    created_at?: Date | string
    updated_at?: Date | string
    Divisi?: DivisiUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUpdateInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFieldUpdateOperationsInput | $Enums.StatusKepegawaian
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Divisi?: DivisiUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateInput = {
    karyawan_id?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFieldUpdateOperationsInput | $Enums.StatusKepegawaian
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Divisi?: DivisiUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanCreateManyInput = {
    karyawan_id?: number
    nama_karyawan: string
    alamat: string
    no_hp: string
    email?: string | null
    jenis_kelamin: $Enums.JenisKelamin
    status_kepegawaian: $Enums.StatusKepegawaian
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KaryawanUpdateManyMutationInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFieldUpdateOperationsInput | $Enums.StatusKepegawaian
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanUncheckedUpdateManyInput = {
    karyawan_id?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFieldUpdateOperationsInput | $Enums.StatusKepegawaian
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisiCreateInput = {
    nama_divisi: string
    posisi: string
    created_at?: Date | string
    updated_at?: Date | string
    Karyawan: KaryawanCreateNestedOneWithoutDivisiInput
  }

  export type DivisiUncheckedCreateInput = {
    divisi_id?: number
    nama_divisi: string
    posisi: string
    karyawan_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DivisiUpdateInput = {
    nama_divisi?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Karyawan?: KaryawanUpdateOneRequiredWithoutDivisiNestedInput
  }

  export type DivisiUncheckedUpdateInput = {
    divisi_id?: IntFieldUpdateOperationsInput | number
    nama_divisi?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    karyawan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisiCreateManyInput = {
    divisi_id?: number
    nama_divisi: string
    posisi: string
    karyawan_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DivisiUpdateManyMutationInput = {
    nama_divisi?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisiUncheckedUpdateManyInput = {
    divisi_id?: IntFieldUpdateOperationsInput | number
    nama_divisi?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    karyawan_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type EnumStatusKepegawaianFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKepegawaian | EnumStatusKepegawaianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKepegawaianFilter<$PrismaModel> | $Enums.StatusKepegawaian
  }

  export type DivisiListRelationFilter = {
    every?: DivisiWhereInput
    some?: DivisiWhereInput
    none?: DivisiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DivisiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KaryawanCountOrderByAggregateInput = {
    karyawan_id?: SortOrder
    nama_karyawan?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    jenis_kelamin?: SortOrder
    status_kepegawaian?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KaryawanAvgOrderByAggregateInput = {
    karyawan_id?: SortOrder
  }

  export type KaryawanMaxOrderByAggregateInput = {
    karyawan_id?: SortOrder
    nama_karyawan?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    jenis_kelamin?: SortOrder
    status_kepegawaian?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KaryawanMinOrderByAggregateInput = {
    karyawan_id?: SortOrder
    nama_karyawan?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    jenis_kelamin?: SortOrder
    status_kepegawaian?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KaryawanSumOrderByAggregateInput = {
    karyawan_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type EnumStatusKepegawaianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKepegawaian | EnumStatusKepegawaianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKepegawaianWithAggregatesFilter<$PrismaModel> | $Enums.StatusKepegawaian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKepegawaianFilter<$PrismaModel>
    _max?: NestedEnumStatusKepegawaianFilter<$PrismaModel>
  }

  export type KaryawanScalarRelationFilter = {
    is?: KaryawanWhereInput
    isNot?: KaryawanWhereInput
  }

  export type DivisiCountOrderByAggregateInput = {
    divisi_id?: SortOrder
    nama_divisi?: SortOrder
    posisi?: SortOrder
    karyawan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DivisiAvgOrderByAggregateInput = {
    divisi_id?: SortOrder
    karyawan_id?: SortOrder
  }

  export type DivisiMaxOrderByAggregateInput = {
    divisi_id?: SortOrder
    nama_divisi?: SortOrder
    posisi?: SortOrder
    karyawan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DivisiMinOrderByAggregateInput = {
    divisi_id?: SortOrder
    nama_divisi?: SortOrder
    posisi?: SortOrder
    karyawan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DivisiSumOrderByAggregateInput = {
    divisi_id?: SortOrder
    karyawan_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DivisiCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<DivisiCreateWithoutKaryawanInput, DivisiUncheckedCreateWithoutKaryawanInput> | DivisiCreateWithoutKaryawanInput[] | DivisiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: DivisiCreateOrConnectWithoutKaryawanInput | DivisiCreateOrConnectWithoutKaryawanInput[]
    createMany?: DivisiCreateManyKaryawanInputEnvelope
    connect?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
  }

  export type DivisiUncheckedCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<DivisiCreateWithoutKaryawanInput, DivisiUncheckedCreateWithoutKaryawanInput> | DivisiCreateWithoutKaryawanInput[] | DivisiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: DivisiCreateOrConnectWithoutKaryawanInput | DivisiCreateOrConnectWithoutKaryawanInput[]
    createMany?: DivisiCreateManyKaryawanInputEnvelope
    connect?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin
  }

  export type EnumStatusKepegawaianFieldUpdateOperationsInput = {
    set?: $Enums.StatusKepegawaian
  }

  export type DivisiUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<DivisiCreateWithoutKaryawanInput, DivisiUncheckedCreateWithoutKaryawanInput> | DivisiCreateWithoutKaryawanInput[] | DivisiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: DivisiCreateOrConnectWithoutKaryawanInput | DivisiCreateOrConnectWithoutKaryawanInput[]
    upsert?: DivisiUpsertWithWhereUniqueWithoutKaryawanInput | DivisiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: DivisiCreateManyKaryawanInputEnvelope
    set?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    disconnect?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    delete?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    connect?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    update?: DivisiUpdateWithWhereUniqueWithoutKaryawanInput | DivisiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: DivisiUpdateManyWithWhereWithoutKaryawanInput | DivisiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: DivisiScalarWhereInput | DivisiScalarWhereInput[]
  }

  export type DivisiUncheckedUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<DivisiCreateWithoutKaryawanInput, DivisiUncheckedCreateWithoutKaryawanInput> | DivisiCreateWithoutKaryawanInput[] | DivisiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: DivisiCreateOrConnectWithoutKaryawanInput | DivisiCreateOrConnectWithoutKaryawanInput[]
    upsert?: DivisiUpsertWithWhereUniqueWithoutKaryawanInput | DivisiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: DivisiCreateManyKaryawanInputEnvelope
    set?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    disconnect?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    delete?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    connect?: DivisiWhereUniqueInput | DivisiWhereUniqueInput[]
    update?: DivisiUpdateWithWhereUniqueWithoutKaryawanInput | DivisiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: DivisiUpdateManyWithWhereWithoutKaryawanInput | DivisiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: DivisiScalarWhereInput | DivisiScalarWhereInput[]
  }

  export type KaryawanCreateNestedOneWithoutDivisiInput = {
    create?: XOR<KaryawanCreateWithoutDivisiInput, KaryawanUncheckedCreateWithoutDivisiInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutDivisiInput
    connect?: KaryawanWhereUniqueInput
  }

  export type KaryawanUpdateOneRequiredWithoutDivisiNestedInput = {
    create?: XOR<KaryawanCreateWithoutDivisiInput, KaryawanUncheckedCreateWithoutDivisiInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutDivisiInput
    upsert?: KaryawanUpsertWithoutDivisiInput
    connect?: KaryawanWhereUniqueInput
    update?: XOR<XOR<KaryawanUpdateToOneWithWhereWithoutDivisiInput, KaryawanUpdateWithoutDivisiInput>, KaryawanUncheckedUpdateWithoutDivisiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type NestedEnumStatusKepegawaianFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKepegawaian | EnumStatusKepegawaianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKepegawaianFilter<$PrismaModel> | $Enums.StatusKepegawaian
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type NestedEnumStatusKepegawaianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKepegawaian | EnumStatusKepegawaianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKepegawaian[] | ListEnumStatusKepegawaianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKepegawaianWithAggregatesFilter<$PrismaModel> | $Enums.StatusKepegawaian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKepegawaianFilter<$PrismaModel>
    _max?: NestedEnumStatusKepegawaianFilter<$PrismaModel>
  }

  export type DivisiCreateWithoutKaryawanInput = {
    nama_divisi: string
    posisi: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DivisiUncheckedCreateWithoutKaryawanInput = {
    divisi_id?: number
    nama_divisi: string
    posisi: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DivisiCreateOrConnectWithoutKaryawanInput = {
    where: DivisiWhereUniqueInput
    create: XOR<DivisiCreateWithoutKaryawanInput, DivisiUncheckedCreateWithoutKaryawanInput>
  }

  export type DivisiCreateManyKaryawanInputEnvelope = {
    data: DivisiCreateManyKaryawanInput | DivisiCreateManyKaryawanInput[]
    skipDuplicates?: boolean
  }

  export type DivisiUpsertWithWhereUniqueWithoutKaryawanInput = {
    where: DivisiWhereUniqueInput
    update: XOR<DivisiUpdateWithoutKaryawanInput, DivisiUncheckedUpdateWithoutKaryawanInput>
    create: XOR<DivisiCreateWithoutKaryawanInput, DivisiUncheckedCreateWithoutKaryawanInput>
  }

  export type DivisiUpdateWithWhereUniqueWithoutKaryawanInput = {
    where: DivisiWhereUniqueInput
    data: XOR<DivisiUpdateWithoutKaryawanInput, DivisiUncheckedUpdateWithoutKaryawanInput>
  }

  export type DivisiUpdateManyWithWhereWithoutKaryawanInput = {
    where: DivisiScalarWhereInput
    data: XOR<DivisiUpdateManyMutationInput, DivisiUncheckedUpdateManyWithoutKaryawanInput>
  }

  export type DivisiScalarWhereInput = {
    AND?: DivisiScalarWhereInput | DivisiScalarWhereInput[]
    OR?: DivisiScalarWhereInput[]
    NOT?: DivisiScalarWhereInput | DivisiScalarWhereInput[]
    divisi_id?: IntFilter<"Divisi"> | number
    nama_divisi?: StringFilter<"Divisi"> | string
    posisi?: StringFilter<"Divisi"> | string
    karyawan_id?: IntFilter<"Divisi"> | number
    created_at?: DateTimeFilter<"Divisi"> | Date | string
    updated_at?: DateTimeFilter<"Divisi"> | Date | string
  }

  export type KaryawanCreateWithoutDivisiInput = {
    nama_karyawan: string
    alamat: string
    no_hp: string
    email?: string | null
    jenis_kelamin: $Enums.JenisKelamin
    status_kepegawaian: $Enums.StatusKepegawaian
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KaryawanUncheckedCreateWithoutDivisiInput = {
    karyawan_id?: number
    nama_karyawan: string
    alamat: string
    no_hp: string
    email?: string | null
    jenis_kelamin: $Enums.JenisKelamin
    status_kepegawaian: $Enums.StatusKepegawaian
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KaryawanCreateOrConnectWithoutDivisiInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutDivisiInput, KaryawanUncheckedCreateWithoutDivisiInput>
  }

  export type KaryawanUpsertWithoutDivisiInput = {
    update: XOR<KaryawanUpdateWithoutDivisiInput, KaryawanUncheckedUpdateWithoutDivisiInput>
    create: XOR<KaryawanCreateWithoutDivisiInput, KaryawanUncheckedCreateWithoutDivisiInput>
    where?: KaryawanWhereInput
  }

  export type KaryawanUpdateToOneWithWhereWithoutDivisiInput = {
    where?: KaryawanWhereInput
    data: XOR<KaryawanUpdateWithoutDivisiInput, KaryawanUncheckedUpdateWithoutDivisiInput>
  }

  export type KaryawanUpdateWithoutDivisiInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFieldUpdateOperationsInput | $Enums.StatusKepegawaian
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanUncheckedUpdateWithoutDivisiInput = {
    karyawan_id?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status_kepegawaian?: EnumStatusKepegawaianFieldUpdateOperationsInput | $Enums.StatusKepegawaian
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisiCreateManyKaryawanInput = {
    divisi_id?: number
    nama_divisi: string
    posisi: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DivisiUpdateWithoutKaryawanInput = {
    nama_divisi?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisiUncheckedUpdateWithoutKaryawanInput = {
    divisi_id?: IntFieldUpdateOperationsInput | number
    nama_divisi?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisiUncheckedUpdateManyWithoutKaryawanInput = {
    divisi_id?: IntFieldUpdateOperationsInput | number
    nama_divisi?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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