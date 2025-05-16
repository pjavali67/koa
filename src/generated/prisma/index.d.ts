
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
 * Model Members
 * 
 */
export type Members = $Result.DefaultSelection<Prisma.$MembersPayload>
/**
 * Model MemberRole
 * 
 */
export type MemberRole = $Result.DefaultSelection<Prisma.$MemberRolePayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.members.findMany()
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
   * // Fetch zero or more Members
   * const members = await prisma.members.findMany()
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
   * `prisma.members`: Exposes CRUD operations for the **Members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.MembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberRole`: Exposes CRUD operations for the **MemberRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberRoles
    * const memberRoles = await prisma.memberRole.findMany()
    * ```
    */
  get memberRole(): Prisma.MemberRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
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
    Members: 'Members',
    MemberRole: 'MemberRole',
    VerificationToken: 'VerificationToken',
    PasswordResetToken: 'PasswordResetToken'
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
      modelProps: "members" | "memberRole" | "verificationToken" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Members: {
        payload: Prisma.$MembersPayload<ExtArgs>
        fields: Prisma.MembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findFirst: {
            args: Prisma.MembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findMany: {
            args: Prisma.MembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          create: {
            args: Prisma.MembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          createMany: {
            args: Prisma.MembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          delete: {
            args: Prisma.MembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          update: {
            args: Prisma.MembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          deleteMany: {
            args: Prisma.MembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          upsert: {
            args: Prisma.MembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          aggregate: {
            args: Prisma.MembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembers>
          }
          groupBy: {
            args: Prisma.MembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembersCountArgs<ExtArgs>
            result: $Utils.Optional<MembersCountAggregateOutputType> | number
          }
        }
      }
      MemberRole: {
        payload: Prisma.$MemberRolePayload<ExtArgs>
        fields: Prisma.MemberRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          findFirst: {
            args: Prisma.MemberRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          findMany: {
            args: Prisma.MemberRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>[]
          }
          create: {
            args: Prisma.MemberRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          createMany: {
            args: Prisma.MemberRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>[]
          }
          delete: {
            args: Prisma.MemberRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          update: {
            args: Prisma.MemberRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          deleteMany: {
            args: Prisma.MemberRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>[]
          }
          upsert: {
            args: Prisma.MemberRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberRolePayload>
          }
          aggregate: {
            args: Prisma.MemberRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberRole>
          }
          groupBy: {
            args: Prisma.MemberRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberRoleCountArgs<ExtArgs>
            result: $Utils.Optional<MemberRoleCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
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
    members?: MembersOmit
    memberRole?: MemberRoleOmit
    verificationToken?: VerificationTokenOmit
    passwordResetToken?: PasswordResetTokenOmit
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
   * Count Type MemberRoleCountOutputType
   */

  export type MemberRoleCountOutputType = {
    members: number
  }

  export type MemberRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | MemberRoleCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * MemberRoleCountOutputType without action
   */
  export type MemberRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRoleCountOutputType
     */
    select?: MemberRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberRoleCountOutputType without action
   */
  export type MemberRoleCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Members
   */

  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type MembersSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type MembersMinAggregateOutputType = {
    id: number | null
    email: string | null
    mobile: string | null
    password: string | null
    emailVerified: Date | null
    name: string | null
    firstName: string | null
    lastName: string | null
    koa_no: string | null
    address_personal: string | null
    address_office: string | null
    img1: string | null
    img2: string | null
    img3: string | null
    url_code: string | null
    para1: string | null
    para2: string | null
    para3: string | null
    nick_name: string | null
    mobile_no_office1: string | null
    mobile_no_office2: string | null
    ug_college: string | null
    ug_passout: string | null
    pg_college: string | null
    pg_passout: string | null
    proposer_name: string | null
    propose_koa_num: string | null
    seconded_name: string | null
    seconded_koa_num: string | null
    qualifications: string | null
    website: string | null
    location_office: string | null
    whatsapp_office: string | null
    facebook_office: string | null
    socialmedia1_title: string | null
    social_media1_handle: string | null
    socialmedia2_title: string | null
    socialmedia2_handle: string | null
    dob: Date | null
    doj: Date | null
    status: string | null
    type: string | null
    role_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    mobile: string | null
    password: string | null
    emailVerified: Date | null
    name: string | null
    firstName: string | null
    lastName: string | null
    koa_no: string | null
    address_personal: string | null
    address_office: string | null
    img1: string | null
    img2: string | null
    img3: string | null
    url_code: string | null
    para1: string | null
    para2: string | null
    para3: string | null
    nick_name: string | null
    mobile_no_office1: string | null
    mobile_no_office2: string | null
    ug_college: string | null
    ug_passout: string | null
    pg_college: string | null
    pg_passout: string | null
    proposer_name: string | null
    propose_koa_num: string | null
    seconded_name: string | null
    seconded_koa_num: string | null
    qualifications: string | null
    website: string | null
    location_office: string | null
    whatsapp_office: string | null
    facebook_office: string | null
    socialmedia1_title: string | null
    social_media1_handle: string | null
    socialmedia2_title: string | null
    socialmedia2_handle: string | null
    dob: Date | null
    doj: Date | null
    status: string | null
    type: string | null
    role_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    email: number
    mobile: number
    password: number
    emailVerified: number
    name: number
    firstName: number
    lastName: number
    koa_no: number
    address_personal: number
    address_office: number
    img1: number
    img2: number
    img3: number
    url_code: number
    para1: number
    para2: number
    para3: number
    nick_name: number
    mobile_no_office1: number
    mobile_no_office2: number
    ug_college: number
    ug_passout: number
    pg_college: number
    pg_passout: number
    proposer_name: number
    propose_koa_num: number
    seconded_name: number
    seconded_koa_num: number
    qualifications: number
    website: number
    location_office: number
    whatsapp_office: number
    facebook_office: number
    socialmedia1_title: number
    social_media1_handle: number
    socialmedia2_title: number
    socialmedia2_handle: number
    dob: number
    doj: number
    status: number
    type: number
    role_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembersAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type MembersSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type MembersMinAggregateInputType = {
    id?: true
    email?: true
    mobile?: true
    password?: true
    emailVerified?: true
    name?: true
    firstName?: true
    lastName?: true
    koa_no?: true
    address_personal?: true
    address_office?: true
    img1?: true
    img2?: true
    img3?: true
    url_code?: true
    para1?: true
    para2?: true
    para3?: true
    nick_name?: true
    mobile_no_office1?: true
    mobile_no_office2?: true
    ug_college?: true
    ug_passout?: true
    pg_college?: true
    pg_passout?: true
    proposer_name?: true
    propose_koa_num?: true
    seconded_name?: true
    seconded_koa_num?: true
    qualifications?: true
    website?: true
    location_office?: true
    whatsapp_office?: true
    facebook_office?: true
    socialmedia1_title?: true
    social_media1_handle?: true
    socialmedia2_title?: true
    socialmedia2_handle?: true
    dob?: true
    doj?: true
    status?: true
    type?: true
    role_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
    email?: true
    mobile?: true
    password?: true
    emailVerified?: true
    name?: true
    firstName?: true
    lastName?: true
    koa_no?: true
    address_personal?: true
    address_office?: true
    img1?: true
    img2?: true
    img3?: true
    url_code?: true
    para1?: true
    para2?: true
    para3?: true
    nick_name?: true
    mobile_no_office1?: true
    mobile_no_office2?: true
    ug_college?: true
    ug_passout?: true
    pg_college?: true
    pg_passout?: true
    proposer_name?: true
    propose_koa_num?: true
    seconded_name?: true
    seconded_koa_num?: true
    qualifications?: true
    website?: true
    location_office?: true
    whatsapp_office?: true
    facebook_office?: true
    socialmedia1_title?: true
    social_media1_handle?: true
    socialmedia2_title?: true
    socialmedia2_handle?: true
    dob?: true
    doj?: true
    status?: true
    type?: true
    role_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    email?: true
    mobile?: true
    password?: true
    emailVerified?: true
    name?: true
    firstName?: true
    lastName?: true
    koa_no?: true
    address_personal?: true
    address_office?: true
    img1?: true
    img2?: true
    img3?: true
    url_code?: true
    para1?: true
    para2?: true
    para3?: true
    nick_name?: true
    mobile_no_office1?: true
    mobile_no_office2?: true
    ug_college?: true
    ug_passout?: true
    pg_college?: true
    pg_passout?: true
    proposer_name?: true
    propose_koa_num?: true
    seconded_name?: true
    seconded_koa_num?: true
    qualifications?: true
    website?: true
    location_office?: true
    whatsapp_office?: true
    facebook_office?: true
    socialmedia1_title?: true
    social_media1_handle?: true
    socialmedia2_title?: true
    socialmedia2_handle?: true
    dob?: true
    doj?: true
    status?: true
    type?: true
    role_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to aggregate.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type MembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithAggregationInput | MembersOrderByWithAggregationInput[]
    by: MembersScalarFieldEnum[] | MembersScalarFieldEnum
    having?: MembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _avg?: MembersAvgAggregateInputType
    _sum?: MembersSumAggregateInputType
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }

  export type MembersGroupByOutputType = {
    id: number
    email: string | null
    mobile: string | null
    password: string | null
    emailVerified: Date | null
    name: string | null
    firstName: string | null
    lastName: string | null
    koa_no: string | null
    address_personal: string | null
    address_office: string | null
    img1: string | null
    img2: string | null
    img3: string | null
    url_code: string | null
    para1: string | null
    para2: string | null
    para3: string | null
    nick_name: string | null
    mobile_no_office1: string | null
    mobile_no_office2: string | null
    ug_college: string | null
    ug_passout: string | null
    pg_college: string | null
    pg_passout: string | null
    proposer_name: string | null
    propose_koa_num: string | null
    seconded_name: string | null
    seconded_koa_num: string | null
    qualifications: string | null
    website: string | null
    location_office: string | null
    whatsapp_office: string | null
    facebook_office: string | null
    socialmedia1_title: string | null
    social_media1_handle: string | null
    socialmedia2_title: string | null
    socialmedia2_handle: string | null
    dob: Date | null
    doj: Date | null
    status: string | null
    type: string | null
    role_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends MembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type MembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mobile?: boolean
    password?: boolean
    emailVerified?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    koa_no?: boolean
    address_personal?: boolean
    address_office?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    url_code?: boolean
    para1?: boolean
    para2?: boolean
    para3?: boolean
    nick_name?: boolean
    mobile_no_office1?: boolean
    mobile_no_office2?: boolean
    ug_college?: boolean
    ug_passout?: boolean
    pg_college?: boolean
    pg_passout?: boolean
    proposer_name?: boolean
    propose_koa_num?: boolean
    seconded_name?: boolean
    seconded_koa_num?: boolean
    qualifications?: boolean
    website?: boolean
    location_office?: boolean
    whatsapp_office?: boolean
    facebook_office?: boolean
    socialmedia1_title?: boolean
    social_media1_handle?: boolean
    socialmedia2_title?: boolean
    socialmedia2_handle?: boolean
    dob?: boolean
    doj?: boolean
    status?: boolean
    type?: boolean
    role_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | Members$roleArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mobile?: boolean
    password?: boolean
    emailVerified?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    koa_no?: boolean
    address_personal?: boolean
    address_office?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    url_code?: boolean
    para1?: boolean
    para2?: boolean
    para3?: boolean
    nick_name?: boolean
    mobile_no_office1?: boolean
    mobile_no_office2?: boolean
    ug_college?: boolean
    ug_passout?: boolean
    pg_college?: boolean
    pg_passout?: boolean
    proposer_name?: boolean
    propose_koa_num?: boolean
    seconded_name?: boolean
    seconded_koa_num?: boolean
    qualifications?: boolean
    website?: boolean
    location_office?: boolean
    whatsapp_office?: boolean
    facebook_office?: boolean
    socialmedia1_title?: boolean
    social_media1_handle?: boolean
    socialmedia2_title?: boolean
    socialmedia2_handle?: boolean
    dob?: boolean
    doj?: boolean
    status?: boolean
    type?: boolean
    role_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | Members$roleArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    mobile?: boolean
    password?: boolean
    emailVerified?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    koa_no?: boolean
    address_personal?: boolean
    address_office?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    url_code?: boolean
    para1?: boolean
    para2?: boolean
    para3?: boolean
    nick_name?: boolean
    mobile_no_office1?: boolean
    mobile_no_office2?: boolean
    ug_college?: boolean
    ug_passout?: boolean
    pg_college?: boolean
    pg_passout?: boolean
    proposer_name?: boolean
    propose_koa_num?: boolean
    seconded_name?: boolean
    seconded_koa_num?: boolean
    qualifications?: boolean
    website?: boolean
    location_office?: boolean
    whatsapp_office?: boolean
    facebook_office?: boolean
    socialmedia1_title?: boolean
    social_media1_handle?: boolean
    socialmedia2_title?: boolean
    socialmedia2_handle?: boolean
    dob?: boolean
    doj?: boolean
    status?: boolean
    type?: boolean
    role_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | Members$roleArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectScalar = {
    id?: boolean
    email?: boolean
    mobile?: boolean
    password?: boolean
    emailVerified?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    koa_no?: boolean
    address_personal?: boolean
    address_office?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    url_code?: boolean
    para1?: boolean
    para2?: boolean
    para3?: boolean
    nick_name?: boolean
    mobile_no_office1?: boolean
    mobile_no_office2?: boolean
    ug_college?: boolean
    ug_passout?: boolean
    pg_college?: boolean
    pg_passout?: boolean
    proposer_name?: boolean
    propose_koa_num?: boolean
    seconded_name?: boolean
    seconded_koa_num?: boolean
    qualifications?: boolean
    website?: boolean
    location_office?: boolean
    whatsapp_office?: boolean
    facebook_office?: boolean
    socialmedia1_title?: boolean
    social_media1_handle?: boolean
    socialmedia2_title?: boolean
    socialmedia2_handle?: boolean
    dob?: boolean
    doj?: boolean
    status?: boolean
    type?: boolean
    role_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "mobile" | "password" | "emailVerified" | "name" | "firstName" | "lastName" | "koa_no" | "address_personal" | "address_office" | "img1" | "img2" | "img3" | "url_code" | "para1" | "para2" | "para3" | "nick_name" | "mobile_no_office1" | "mobile_no_office2" | "ug_college" | "ug_passout" | "pg_college" | "pg_passout" | "proposer_name" | "propose_koa_num" | "seconded_name" | "seconded_koa_num" | "qualifications" | "website" | "location_office" | "whatsapp_office" | "facebook_office" | "socialmedia1_title" | "social_media1_handle" | "socialmedia2_title" | "socialmedia2_handle" | "dob" | "doj" | "status" | "type" | "role_id" | "createdAt" | "updatedAt", ExtArgs["result"]["members"]>
  export type MembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | Members$roleArgs<ExtArgs>
  }
  export type MembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | Members$roleArgs<ExtArgs>
  }
  export type MembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | Members$roleArgs<ExtArgs>
  }

  export type $MembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Members"
    objects: {
      role: Prisma.$MemberRolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      mobile: string | null
      password: string | null
      emailVerified: Date | null
      name: string | null
      firstName: string | null
      lastName: string | null
      koa_no: string | null
      address_personal: string | null
      address_office: string | null
      img1: string | null
      img2: string | null
      img3: string | null
      url_code: string | null
      para1: string | null
      para2: string | null
      para3: string | null
      nick_name: string | null
      mobile_no_office1: string | null
      mobile_no_office2: string | null
      ug_college: string | null
      ug_passout: string | null
      pg_college: string | null
      pg_passout: string | null
      proposer_name: string | null
      propose_koa_num: string | null
      seconded_name: string | null
      seconded_koa_num: string | null
      qualifications: string | null
      website: string | null
      location_office: string | null
      whatsapp_office: string | null
      facebook_office: string | null
      socialmedia1_title: string | null
      social_media1_handle: string | null
      socialmedia2_title: string | null
      socialmedia2_handle: string | null
      dob: Date | null
      doj: Date | null
      status: string | null
      type: string | null
      role_id: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["members"]>
    composites: {}
  }

  type MembersGetPayload<S extends boolean | null | undefined | MembersDefaultArgs> = $Result.GetResult<Prisma.$MembersPayload, S>

  type MembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface MembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Members'], meta: { name: 'Members' } }
    /**
     * Find zero or one Members that matches the filter.
     * @param {MembersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembersFindUniqueArgs>(args: SelectSubset<T, MembersFindUniqueArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembersFindUniqueOrThrowArgs>(args: SelectSubset<T, MembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembersFindFirstArgs>(args?: SelectSubset<T, MembersFindFirstArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembersFindFirstOrThrowArgs>(args?: SelectSubset<T, MembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembersFindManyArgs>(args?: SelectSubset<T, MembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Members.
     * @param {MembersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
     */
    create<T extends MembersCreateArgs>(args: SelectSubset<T, MembersCreateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MembersCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembersCreateManyArgs>(args?: SelectSubset<T, MembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MembersCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembersCreateManyAndReturnArgs>(args?: SelectSubset<T, MembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Members.
     * @param {MembersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
     */
    delete<T extends MembersDeleteArgs>(args: SelectSubset<T, MembersDeleteArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Members.
     * @param {MembersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembersUpdateArgs>(args: SelectSubset<T, MembersUpdateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MembersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembersDeleteManyArgs>(args?: SelectSubset<T, MembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembersUpdateManyArgs>(args: SelectSubset<T, MembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MembersUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MembersUpdateManyAndReturnArgs>(args: SelectSubset<T, MembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Members.
     * @param {MembersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
     */
    upsert<T extends MembersUpsertArgs>(args: SelectSubset<T, MembersUpsertArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MembersCountArgs>(
      args?: Subset<T, MembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersGroupByArgs} args - Group by arguments.
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
      T extends MembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembersGroupByArgs['orderBy'] }
        : { orderBy?: MembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Members model
   */
  readonly fields: MembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends Members$roleArgs<ExtArgs> = {}>(args?: Subset<T, Members$roleArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Members model
   */
  interface MembersFieldRefs {
    readonly id: FieldRef<"Members", 'Int'>
    readonly email: FieldRef<"Members", 'String'>
    readonly mobile: FieldRef<"Members", 'String'>
    readonly password: FieldRef<"Members", 'String'>
    readonly emailVerified: FieldRef<"Members", 'DateTime'>
    readonly name: FieldRef<"Members", 'String'>
    readonly firstName: FieldRef<"Members", 'String'>
    readonly lastName: FieldRef<"Members", 'String'>
    readonly koa_no: FieldRef<"Members", 'String'>
    readonly address_personal: FieldRef<"Members", 'String'>
    readonly address_office: FieldRef<"Members", 'String'>
    readonly img1: FieldRef<"Members", 'String'>
    readonly img2: FieldRef<"Members", 'String'>
    readonly img3: FieldRef<"Members", 'String'>
    readonly url_code: FieldRef<"Members", 'String'>
    readonly para1: FieldRef<"Members", 'String'>
    readonly para2: FieldRef<"Members", 'String'>
    readonly para3: FieldRef<"Members", 'String'>
    readonly nick_name: FieldRef<"Members", 'String'>
    readonly mobile_no_office1: FieldRef<"Members", 'String'>
    readonly mobile_no_office2: FieldRef<"Members", 'String'>
    readonly ug_college: FieldRef<"Members", 'String'>
    readonly ug_passout: FieldRef<"Members", 'String'>
    readonly pg_college: FieldRef<"Members", 'String'>
    readonly pg_passout: FieldRef<"Members", 'String'>
    readonly proposer_name: FieldRef<"Members", 'String'>
    readonly propose_koa_num: FieldRef<"Members", 'String'>
    readonly seconded_name: FieldRef<"Members", 'String'>
    readonly seconded_koa_num: FieldRef<"Members", 'String'>
    readonly qualifications: FieldRef<"Members", 'String'>
    readonly website: FieldRef<"Members", 'String'>
    readonly location_office: FieldRef<"Members", 'String'>
    readonly whatsapp_office: FieldRef<"Members", 'String'>
    readonly facebook_office: FieldRef<"Members", 'String'>
    readonly socialmedia1_title: FieldRef<"Members", 'String'>
    readonly social_media1_handle: FieldRef<"Members", 'String'>
    readonly socialmedia2_title: FieldRef<"Members", 'String'>
    readonly socialmedia2_handle: FieldRef<"Members", 'String'>
    readonly dob: FieldRef<"Members", 'DateTime'>
    readonly doj: FieldRef<"Members", 'DateTime'>
    readonly status: FieldRef<"Members", 'String'>
    readonly type: FieldRef<"Members", 'String'>
    readonly role_id: FieldRef<"Members", 'Int'>
    readonly createdAt: FieldRef<"Members", 'DateTime'>
    readonly updatedAt: FieldRef<"Members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Members findUnique
   */
  export type MembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findUniqueOrThrow
   */
  export type MembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findFirst
   */
  export type MembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findFirstOrThrow
   */
  export type MembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findMany
   */
  export type MembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members create
   */
  export type MembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to create a Members.
     */
    data?: XOR<MembersCreateInput, MembersUncheckedCreateInput>
  }

  /**
   * Members createMany
   */
  export type MembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MembersCreateManyInput | MembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Members createManyAndReturn
   */
  export type MembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MembersCreateManyInput | MembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Members update
   */
  export type MembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to update a Members.
     */
    data: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
    /**
     * Choose, which Members to update.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members updateMany
   */
  export type MembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Members updateManyAndReturn
   */
  export type MembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Members upsert
   */
  export type MembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The filter to search for the Members to update in case it exists.
     */
    where: MembersWhereUniqueInput
    /**
     * In case the Members found by the `where` argument doesn't exist, create a new Members with this data.
     */
    create: XOR<MembersCreateInput, MembersUncheckedCreateInput>
    /**
     * In case the Members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
  }

  /**
   * Members delete
   */
  export type MembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter which Members to delete.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members deleteMany
   */
  export type MembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Members.role
   */
  export type Members$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    where?: MemberRoleWhereInput
  }

  /**
   * Members without action
   */
  export type MembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
  }


  /**
   * Model MemberRole
   */

  export type AggregateMemberRole = {
    _count: MemberRoleCountAggregateOutputType | null
    _avg: MemberRoleAvgAggregateOutputType | null
    _sum: MemberRoleSumAggregateOutputType | null
    _min: MemberRoleMinAggregateOutputType | null
    _max: MemberRoleMaxAggregateOutputType | null
  }

  export type MemberRoleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type MemberRoleSumAggregateOutputType = {
    role_id: number | null
  }

  export type MemberRoleMinAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    role_description: string | null
  }

  export type MemberRoleMaxAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    role_description: string | null
  }

  export type MemberRoleCountAggregateOutputType = {
    role_id: number
    role_name: number
    role_description: number
    _all: number
  }


  export type MemberRoleAvgAggregateInputType = {
    role_id?: true
  }

  export type MemberRoleSumAggregateInputType = {
    role_id?: true
  }

  export type MemberRoleMinAggregateInputType = {
    role_id?: true
    role_name?: true
    role_description?: true
  }

  export type MemberRoleMaxAggregateInputType = {
    role_id?: true
    role_name?: true
    role_description?: true
  }

  export type MemberRoleCountAggregateInputType = {
    role_id?: true
    role_name?: true
    role_description?: true
    _all?: true
  }

  export type MemberRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberRole to aggregate.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberRoles
    **/
    _count?: true | MemberRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberRoleMaxAggregateInputType
  }

  export type GetMemberRoleAggregateType<T extends MemberRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberRole[P]>
      : GetScalarType<T[P], AggregateMemberRole[P]>
  }




  export type MemberRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberRoleWhereInput
    orderBy?: MemberRoleOrderByWithAggregationInput | MemberRoleOrderByWithAggregationInput[]
    by: MemberRoleScalarFieldEnum[] | MemberRoleScalarFieldEnum
    having?: MemberRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberRoleCountAggregateInputType | true
    _avg?: MemberRoleAvgAggregateInputType
    _sum?: MemberRoleSumAggregateInputType
    _min?: MemberRoleMinAggregateInputType
    _max?: MemberRoleMaxAggregateInputType
  }

  export type MemberRoleGroupByOutputType = {
    role_id: number
    role_name: string
    role_description: string | null
    _count: MemberRoleCountAggregateOutputType | null
    _avg: MemberRoleAvgAggregateOutputType | null
    _sum: MemberRoleSumAggregateOutputType | null
    _min: MemberRoleMinAggregateOutputType | null
    _max: MemberRoleMaxAggregateOutputType | null
  }

  type GetMemberRoleGroupByPayload<T extends MemberRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberRoleGroupByOutputType[P]>
            : GetScalarType<T[P], MemberRoleGroupByOutputType[P]>
        }
      >
    >


  export type MemberRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    role_description?: boolean
    members?: boolean | MemberRole$membersArgs<ExtArgs>
    _count?: boolean | MemberRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberRole"]>

  export type MemberRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    role_description?: boolean
  }, ExtArgs["result"]["memberRole"]>

  export type MemberRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    role_description?: boolean
  }, ExtArgs["result"]["memberRole"]>

  export type MemberRoleSelectScalar = {
    role_id?: boolean
    role_name?: boolean
    role_description?: boolean
  }

  export type MemberRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "role_name" | "role_description", ExtArgs["result"]["memberRole"]>
  export type MemberRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | MemberRole$membersArgs<ExtArgs>
    _count?: boolean | MemberRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MemberRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberRole"
    objects: {
      members: Prisma.$MembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      role_name: string
      role_description: string | null
    }, ExtArgs["result"]["memberRole"]>
    composites: {}
  }

  type MemberRoleGetPayload<S extends boolean | null | undefined | MemberRoleDefaultArgs> = $Result.GetResult<Prisma.$MemberRolePayload, S>

  type MemberRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberRoleCountAggregateInputType | true
    }

  export interface MemberRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberRole'], meta: { name: 'MemberRole' } }
    /**
     * Find zero or one MemberRole that matches the filter.
     * @param {MemberRoleFindUniqueArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberRoleFindUniqueArgs>(args: SelectSubset<T, MemberRoleFindUniqueArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberRoleFindUniqueOrThrowArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleFindFirstArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberRoleFindFirstArgs>(args?: SelectSubset<T, MemberRoleFindFirstArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleFindFirstOrThrowArgs} args - Arguments to find a MemberRole
     * @example
     * // Get one MemberRole
     * const memberRole = await prisma.memberRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberRoles
     * const memberRoles = await prisma.memberRole.findMany()
     * 
     * // Get first 10 MemberRoles
     * const memberRoles = await prisma.memberRole.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const memberRoleWithRole_idOnly = await prisma.memberRole.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends MemberRoleFindManyArgs>(args?: SelectSubset<T, MemberRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberRole.
     * @param {MemberRoleCreateArgs} args - Arguments to create a MemberRole.
     * @example
     * // Create one MemberRole
     * const MemberRole = await prisma.memberRole.create({
     *   data: {
     *     // ... data to create a MemberRole
     *   }
     * })
     * 
     */
    create<T extends MemberRoleCreateArgs>(args: SelectSubset<T, MemberRoleCreateArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberRoles.
     * @param {MemberRoleCreateManyArgs} args - Arguments to create many MemberRoles.
     * @example
     * // Create many MemberRoles
     * const memberRole = await prisma.memberRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberRoleCreateManyArgs>(args?: SelectSubset<T, MemberRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberRoles and returns the data saved in the database.
     * @param {MemberRoleCreateManyAndReturnArgs} args - Arguments to create many MemberRoles.
     * @example
     * // Create many MemberRoles
     * const memberRole = await prisma.memberRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberRoles and only return the `role_id`
     * const memberRoleWithRole_idOnly = await prisma.memberRole.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberRole.
     * @param {MemberRoleDeleteArgs} args - Arguments to delete one MemberRole.
     * @example
     * // Delete one MemberRole
     * const MemberRole = await prisma.memberRole.delete({
     *   where: {
     *     // ... filter to delete one MemberRole
     *   }
     * })
     * 
     */
    delete<T extends MemberRoleDeleteArgs>(args: SelectSubset<T, MemberRoleDeleteArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberRole.
     * @param {MemberRoleUpdateArgs} args - Arguments to update one MemberRole.
     * @example
     * // Update one MemberRole
     * const memberRole = await prisma.memberRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberRoleUpdateArgs>(args: SelectSubset<T, MemberRoleUpdateArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberRoles.
     * @param {MemberRoleDeleteManyArgs} args - Arguments to filter MemberRoles to delete.
     * @example
     * // Delete a few MemberRoles
     * const { count } = await prisma.memberRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberRoleDeleteManyArgs>(args?: SelectSubset<T, MemberRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberRoles
     * const memberRole = await prisma.memberRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberRoleUpdateManyArgs>(args: SelectSubset<T, MemberRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberRoles and returns the data updated in the database.
     * @param {MemberRoleUpdateManyAndReturnArgs} args - Arguments to update many MemberRoles.
     * @example
     * // Update many MemberRoles
     * const memberRole = await prisma.memberRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberRoles and only return the `role_id`
     * const memberRoleWithRole_idOnly = await prisma.memberRole.updateManyAndReturn({
     *   select: { role_id: true },
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
    updateManyAndReturn<T extends MemberRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberRole.
     * @param {MemberRoleUpsertArgs} args - Arguments to update or create a MemberRole.
     * @example
     * // Update or create a MemberRole
     * const memberRole = await prisma.memberRole.upsert({
     *   create: {
     *     // ... data to create a MemberRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberRole we want to update
     *   }
     * })
     */
    upsert<T extends MemberRoleUpsertArgs>(args: SelectSubset<T, MemberRoleUpsertArgs<ExtArgs>>): Prisma__MemberRoleClient<$Result.GetResult<Prisma.$MemberRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleCountArgs} args - Arguments to filter MemberRoles to count.
     * @example
     * // Count the number of MemberRoles
     * const count = await prisma.memberRole.count({
     *   where: {
     *     // ... the filter for the MemberRoles we want to count
     *   }
     * })
    **/
    count<T extends MemberRoleCountArgs>(
      args?: Subset<T, MemberRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberRoleAggregateArgs>(args: Subset<T, MemberRoleAggregateArgs>): Prisma.PrismaPromise<GetMemberRoleAggregateType<T>>

    /**
     * Group by MemberRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberRoleGroupByArgs} args - Group by arguments.
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
      T extends MemberRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberRoleGroupByArgs['orderBy'] }
        : { orderBy?: MemberRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberRole model
   */
  readonly fields: MemberRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends MemberRole$membersArgs<ExtArgs> = {}>(args?: Subset<T, MemberRole$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MemberRole model
   */
  interface MemberRoleFieldRefs {
    readonly role_id: FieldRef<"MemberRole", 'Int'>
    readonly role_name: FieldRef<"MemberRole", 'String'>
    readonly role_description: FieldRef<"MemberRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemberRole findUnique
   */
  export type MemberRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole findUniqueOrThrow
   */
  export type MemberRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole findFirst
   */
  export type MemberRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberRoles.
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberRoles.
     */
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * MemberRole findFirstOrThrow
   */
  export type MemberRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRole to fetch.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberRoles.
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberRoles.
     */
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * MemberRole findMany
   */
  export type MemberRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter, which MemberRoles to fetch.
     */
    where?: MemberRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberRoles to fetch.
     */
    orderBy?: MemberRoleOrderByWithRelationInput | MemberRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberRoles.
     */
    cursor?: MemberRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberRoles.
     */
    skip?: number
    distinct?: MemberRoleScalarFieldEnum | MemberRoleScalarFieldEnum[]
  }

  /**
   * MemberRole create
   */
  export type MemberRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberRole.
     */
    data: XOR<MemberRoleCreateInput, MemberRoleUncheckedCreateInput>
  }

  /**
   * MemberRole createMany
   */
  export type MemberRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberRoles.
     */
    data: MemberRoleCreateManyInput | MemberRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberRole createManyAndReturn
   */
  export type MemberRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * The data used to create many MemberRoles.
     */
    data: MemberRoleCreateManyInput | MemberRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberRole update
   */
  export type MemberRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberRole.
     */
    data: XOR<MemberRoleUpdateInput, MemberRoleUncheckedUpdateInput>
    /**
     * Choose, which MemberRole to update.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole updateMany
   */
  export type MemberRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberRoles.
     */
    data: XOR<MemberRoleUpdateManyMutationInput, MemberRoleUncheckedUpdateManyInput>
    /**
     * Filter which MemberRoles to update
     */
    where?: MemberRoleWhereInput
    /**
     * Limit how many MemberRoles to update.
     */
    limit?: number
  }

  /**
   * MemberRole updateManyAndReturn
   */
  export type MemberRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * The data used to update MemberRoles.
     */
    data: XOR<MemberRoleUpdateManyMutationInput, MemberRoleUncheckedUpdateManyInput>
    /**
     * Filter which MemberRoles to update
     */
    where?: MemberRoleWhereInput
    /**
     * Limit how many MemberRoles to update.
     */
    limit?: number
  }

  /**
   * MemberRole upsert
   */
  export type MemberRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberRole to update in case it exists.
     */
    where: MemberRoleWhereUniqueInput
    /**
     * In case the MemberRole found by the `where` argument doesn't exist, create a new MemberRole with this data.
     */
    create: XOR<MemberRoleCreateInput, MemberRoleUncheckedCreateInput>
    /**
     * In case the MemberRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberRoleUpdateInput, MemberRoleUncheckedUpdateInput>
  }

  /**
   * MemberRole delete
   */
  export type MemberRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
    /**
     * Filter which MemberRole to delete.
     */
    where: MemberRoleWhereUniqueInput
  }

  /**
   * MemberRole deleteMany
   */
  export type MemberRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberRoles to delete
     */
    where?: MemberRoleWhereInput
    /**
     * Limit how many MemberRoles to delete.
     */
    limit?: number
  }

  /**
   * MemberRole.members
   */
  export type MemberRole$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    cursor?: MembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * MemberRole without action
   */
  export type MemberRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberRole
     */
    select?: MemberRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberRole
     */
    omit?: MemberRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberRoleInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: number
    email: string
    token: string
    expires: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expires" | "createdAt", ExtArgs["result"]["passwordResetToken"]>

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      token: string
      expires: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'Int'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expires: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
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


  export const MembersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    mobile: 'mobile',
    password: 'password',
    emailVerified: 'emailVerified',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    koa_no: 'koa_no',
    address_personal: 'address_personal',
    address_office: 'address_office',
    img1: 'img1',
    img2: 'img2',
    img3: 'img3',
    url_code: 'url_code',
    para1: 'para1',
    para2: 'para2',
    para3: 'para3',
    nick_name: 'nick_name',
    mobile_no_office1: 'mobile_no_office1',
    mobile_no_office2: 'mobile_no_office2',
    ug_college: 'ug_college',
    ug_passout: 'ug_passout',
    pg_college: 'pg_college',
    pg_passout: 'pg_passout',
    proposer_name: 'proposer_name',
    propose_koa_num: 'propose_koa_num',
    seconded_name: 'seconded_name',
    seconded_koa_num: 'seconded_koa_num',
    qualifications: 'qualifications',
    website: 'website',
    location_office: 'location_office',
    whatsapp_office: 'whatsapp_office',
    facebook_office: 'facebook_office',
    socialmedia1_title: 'socialmedia1_title',
    social_media1_handle: 'social_media1_handle',
    socialmedia2_title: 'socialmedia2_title',
    socialmedia2_handle: 'socialmedia2_handle',
    dob: 'dob',
    doj: 'doj',
    status: 'status',
    type: 'type',
    role_id: 'role_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


  export const MemberRoleScalarFieldEnum: {
    role_id: 'role_id',
    role_name: 'role_name',
    role_description: 'role_description'
  };

  export type MemberRoleScalarFieldEnum = (typeof MemberRoleScalarFieldEnum)[keyof typeof MemberRoleScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


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


  export type MembersWhereInput = {
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    id?: IntFilter<"Members"> | number
    email?: StringNullableFilter<"Members"> | string | null
    mobile?: StringNullableFilter<"Members"> | string | null
    password?: StringNullableFilter<"Members"> | string | null
    emailVerified?: DateTimeNullableFilter<"Members"> | Date | string | null
    name?: StringNullableFilter<"Members"> | string | null
    firstName?: StringNullableFilter<"Members"> | string | null
    lastName?: StringNullableFilter<"Members"> | string | null
    koa_no?: StringNullableFilter<"Members"> | string | null
    address_personal?: StringNullableFilter<"Members"> | string | null
    address_office?: StringNullableFilter<"Members"> | string | null
    img1?: StringNullableFilter<"Members"> | string | null
    img2?: StringNullableFilter<"Members"> | string | null
    img3?: StringNullableFilter<"Members"> | string | null
    url_code?: StringNullableFilter<"Members"> | string | null
    para1?: StringNullableFilter<"Members"> | string | null
    para2?: StringNullableFilter<"Members"> | string | null
    para3?: StringNullableFilter<"Members"> | string | null
    nick_name?: StringNullableFilter<"Members"> | string | null
    mobile_no_office1?: StringNullableFilter<"Members"> | string | null
    mobile_no_office2?: StringNullableFilter<"Members"> | string | null
    ug_college?: StringNullableFilter<"Members"> | string | null
    ug_passout?: StringNullableFilter<"Members"> | string | null
    pg_college?: StringNullableFilter<"Members"> | string | null
    pg_passout?: StringNullableFilter<"Members"> | string | null
    proposer_name?: StringNullableFilter<"Members"> | string | null
    propose_koa_num?: StringNullableFilter<"Members"> | string | null
    seconded_name?: StringNullableFilter<"Members"> | string | null
    seconded_koa_num?: StringNullableFilter<"Members"> | string | null
    qualifications?: StringNullableFilter<"Members"> | string | null
    website?: StringNullableFilter<"Members"> | string | null
    location_office?: StringNullableFilter<"Members"> | string | null
    whatsapp_office?: StringNullableFilter<"Members"> | string | null
    facebook_office?: StringNullableFilter<"Members"> | string | null
    socialmedia1_title?: StringNullableFilter<"Members"> | string | null
    social_media1_handle?: StringNullableFilter<"Members"> | string | null
    socialmedia2_title?: StringNullableFilter<"Members"> | string | null
    socialmedia2_handle?: StringNullableFilter<"Members"> | string | null
    dob?: DateTimeNullableFilter<"Members"> | Date | string | null
    doj?: DateTimeNullableFilter<"Members"> | Date | string | null
    status?: StringNullableFilter<"Members"> | string | null
    type?: StringNullableFilter<"Members"> | string | null
    role_id?: IntNullableFilter<"Members"> | number | null
    createdAt?: DateTimeNullableFilter<"Members"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Members"> | Date | string | null
    role?: XOR<MemberRoleNullableScalarRelationFilter, MemberRoleWhereInput> | null
  }

  export type MembersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    koa_no?: SortOrderInput | SortOrder
    address_personal?: SortOrderInput | SortOrder
    address_office?: SortOrderInput | SortOrder
    img1?: SortOrderInput | SortOrder
    img2?: SortOrderInput | SortOrder
    img3?: SortOrderInput | SortOrder
    url_code?: SortOrderInput | SortOrder
    para1?: SortOrderInput | SortOrder
    para2?: SortOrderInput | SortOrder
    para3?: SortOrderInput | SortOrder
    nick_name?: SortOrderInput | SortOrder
    mobile_no_office1?: SortOrderInput | SortOrder
    mobile_no_office2?: SortOrderInput | SortOrder
    ug_college?: SortOrderInput | SortOrder
    ug_passout?: SortOrderInput | SortOrder
    pg_college?: SortOrderInput | SortOrder
    pg_passout?: SortOrderInput | SortOrder
    proposer_name?: SortOrderInput | SortOrder
    propose_koa_num?: SortOrderInput | SortOrder
    seconded_name?: SortOrderInput | SortOrder
    seconded_koa_num?: SortOrderInput | SortOrder
    qualifications?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    location_office?: SortOrderInput | SortOrder
    whatsapp_office?: SortOrderInput | SortOrder
    facebook_office?: SortOrderInput | SortOrder
    socialmedia1_title?: SortOrderInput | SortOrder
    social_media1_handle?: SortOrderInput | SortOrder
    socialmedia2_title?: SortOrderInput | SortOrder
    socialmedia2_handle?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    doj?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    role?: MemberRoleOrderByWithRelationInput
  }

  export type MembersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    mobile?: StringNullableFilter<"Members"> | string | null
    password?: StringNullableFilter<"Members"> | string | null
    emailVerified?: DateTimeNullableFilter<"Members"> | Date | string | null
    name?: StringNullableFilter<"Members"> | string | null
    firstName?: StringNullableFilter<"Members"> | string | null
    lastName?: StringNullableFilter<"Members"> | string | null
    koa_no?: StringNullableFilter<"Members"> | string | null
    address_personal?: StringNullableFilter<"Members"> | string | null
    address_office?: StringNullableFilter<"Members"> | string | null
    img1?: StringNullableFilter<"Members"> | string | null
    img2?: StringNullableFilter<"Members"> | string | null
    img3?: StringNullableFilter<"Members"> | string | null
    url_code?: StringNullableFilter<"Members"> | string | null
    para1?: StringNullableFilter<"Members"> | string | null
    para2?: StringNullableFilter<"Members"> | string | null
    para3?: StringNullableFilter<"Members"> | string | null
    nick_name?: StringNullableFilter<"Members"> | string | null
    mobile_no_office1?: StringNullableFilter<"Members"> | string | null
    mobile_no_office2?: StringNullableFilter<"Members"> | string | null
    ug_college?: StringNullableFilter<"Members"> | string | null
    ug_passout?: StringNullableFilter<"Members"> | string | null
    pg_college?: StringNullableFilter<"Members"> | string | null
    pg_passout?: StringNullableFilter<"Members"> | string | null
    proposer_name?: StringNullableFilter<"Members"> | string | null
    propose_koa_num?: StringNullableFilter<"Members"> | string | null
    seconded_name?: StringNullableFilter<"Members"> | string | null
    seconded_koa_num?: StringNullableFilter<"Members"> | string | null
    qualifications?: StringNullableFilter<"Members"> | string | null
    website?: StringNullableFilter<"Members"> | string | null
    location_office?: StringNullableFilter<"Members"> | string | null
    whatsapp_office?: StringNullableFilter<"Members"> | string | null
    facebook_office?: StringNullableFilter<"Members"> | string | null
    socialmedia1_title?: StringNullableFilter<"Members"> | string | null
    social_media1_handle?: StringNullableFilter<"Members"> | string | null
    socialmedia2_title?: StringNullableFilter<"Members"> | string | null
    socialmedia2_handle?: StringNullableFilter<"Members"> | string | null
    dob?: DateTimeNullableFilter<"Members"> | Date | string | null
    doj?: DateTimeNullableFilter<"Members"> | Date | string | null
    status?: StringNullableFilter<"Members"> | string | null
    type?: StringNullableFilter<"Members"> | string | null
    role_id?: IntNullableFilter<"Members"> | number | null
    createdAt?: DateTimeNullableFilter<"Members"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Members"> | Date | string | null
    role?: XOR<MemberRoleNullableScalarRelationFilter, MemberRoleWhereInput> | null
  }, "id" | "email">

  export type MembersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    koa_no?: SortOrderInput | SortOrder
    address_personal?: SortOrderInput | SortOrder
    address_office?: SortOrderInput | SortOrder
    img1?: SortOrderInput | SortOrder
    img2?: SortOrderInput | SortOrder
    img3?: SortOrderInput | SortOrder
    url_code?: SortOrderInput | SortOrder
    para1?: SortOrderInput | SortOrder
    para2?: SortOrderInput | SortOrder
    para3?: SortOrderInput | SortOrder
    nick_name?: SortOrderInput | SortOrder
    mobile_no_office1?: SortOrderInput | SortOrder
    mobile_no_office2?: SortOrderInput | SortOrder
    ug_college?: SortOrderInput | SortOrder
    ug_passout?: SortOrderInput | SortOrder
    pg_college?: SortOrderInput | SortOrder
    pg_passout?: SortOrderInput | SortOrder
    proposer_name?: SortOrderInput | SortOrder
    propose_koa_num?: SortOrderInput | SortOrder
    seconded_name?: SortOrderInput | SortOrder
    seconded_koa_num?: SortOrderInput | SortOrder
    qualifications?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    location_office?: SortOrderInput | SortOrder
    whatsapp_office?: SortOrderInput | SortOrder
    facebook_office?: SortOrderInput | SortOrder
    socialmedia1_title?: SortOrderInput | SortOrder
    social_media1_handle?: SortOrderInput | SortOrder
    socialmedia2_title?: SortOrderInput | SortOrder
    socialmedia2_handle?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    doj?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: MembersCountOrderByAggregateInput
    _avg?: MembersAvgOrderByAggregateInput
    _max?: MembersMaxOrderByAggregateInput
    _min?: MembersMinOrderByAggregateInput
    _sum?: MembersSumOrderByAggregateInput
  }

  export type MembersScalarWhereWithAggregatesInput = {
    AND?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    OR?: MembersScalarWhereWithAggregatesInput[]
    NOT?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Members"> | number
    email?: StringNullableWithAggregatesFilter<"Members"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Members"> | string | null
    password?: StringNullableWithAggregatesFilter<"Members"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Members"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Members"> | string | null
    koa_no?: StringNullableWithAggregatesFilter<"Members"> | string | null
    address_personal?: StringNullableWithAggregatesFilter<"Members"> | string | null
    address_office?: StringNullableWithAggregatesFilter<"Members"> | string | null
    img1?: StringNullableWithAggregatesFilter<"Members"> | string | null
    img2?: StringNullableWithAggregatesFilter<"Members"> | string | null
    img3?: StringNullableWithAggregatesFilter<"Members"> | string | null
    url_code?: StringNullableWithAggregatesFilter<"Members"> | string | null
    para1?: StringNullableWithAggregatesFilter<"Members"> | string | null
    para2?: StringNullableWithAggregatesFilter<"Members"> | string | null
    para3?: StringNullableWithAggregatesFilter<"Members"> | string | null
    nick_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    mobile_no_office1?: StringNullableWithAggregatesFilter<"Members"> | string | null
    mobile_no_office2?: StringNullableWithAggregatesFilter<"Members"> | string | null
    ug_college?: StringNullableWithAggregatesFilter<"Members"> | string | null
    ug_passout?: StringNullableWithAggregatesFilter<"Members"> | string | null
    pg_college?: StringNullableWithAggregatesFilter<"Members"> | string | null
    pg_passout?: StringNullableWithAggregatesFilter<"Members"> | string | null
    proposer_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    propose_koa_num?: StringNullableWithAggregatesFilter<"Members"> | string | null
    seconded_name?: StringNullableWithAggregatesFilter<"Members"> | string | null
    seconded_koa_num?: StringNullableWithAggregatesFilter<"Members"> | string | null
    qualifications?: StringNullableWithAggregatesFilter<"Members"> | string | null
    website?: StringNullableWithAggregatesFilter<"Members"> | string | null
    location_office?: StringNullableWithAggregatesFilter<"Members"> | string | null
    whatsapp_office?: StringNullableWithAggregatesFilter<"Members"> | string | null
    facebook_office?: StringNullableWithAggregatesFilter<"Members"> | string | null
    socialmedia1_title?: StringNullableWithAggregatesFilter<"Members"> | string | null
    social_media1_handle?: StringNullableWithAggregatesFilter<"Members"> | string | null
    socialmedia2_title?: StringNullableWithAggregatesFilter<"Members"> | string | null
    socialmedia2_handle?: StringNullableWithAggregatesFilter<"Members"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
    doj?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Members"> | string | null
    type?: StringNullableWithAggregatesFilter<"Members"> | string | null
    role_id?: IntNullableWithAggregatesFilter<"Members"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Members"> | Date | string | null
  }

  export type MemberRoleWhereInput = {
    AND?: MemberRoleWhereInput | MemberRoleWhereInput[]
    OR?: MemberRoleWhereInput[]
    NOT?: MemberRoleWhereInput | MemberRoleWhereInput[]
    role_id?: IntFilter<"MemberRole"> | number
    role_name?: StringFilter<"MemberRole"> | string
    role_description?: StringNullableFilter<"MemberRole"> | string | null
    members?: MembersListRelationFilter
  }

  export type MemberRoleOrderByWithRelationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrderInput | SortOrder
    members?: MembersOrderByRelationAggregateInput
  }

  export type MemberRoleWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    role_name?: string
    AND?: MemberRoleWhereInput | MemberRoleWhereInput[]
    OR?: MemberRoleWhereInput[]
    NOT?: MemberRoleWhereInput | MemberRoleWhereInput[]
    role_description?: StringNullableFilter<"MemberRole"> | string | null
    members?: MembersListRelationFilter
  }, "role_id" | "role_name">

  export type MemberRoleOrderByWithAggregationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrderInput | SortOrder
    _count?: MemberRoleCountOrderByAggregateInput
    _avg?: MemberRoleAvgOrderByAggregateInput
    _max?: MemberRoleMaxOrderByAggregateInput
    _min?: MemberRoleMinOrderByAggregateInput
    _sum?: MemberRoleSumOrderByAggregateInput
  }

  export type MemberRoleScalarWhereWithAggregatesInput = {
    AND?: MemberRoleScalarWhereWithAggregatesInput | MemberRoleScalarWhereWithAggregatesInput[]
    OR?: MemberRoleScalarWhereWithAggregatesInput[]
    NOT?: MemberRoleScalarWhereWithAggregatesInput | MemberRoleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"MemberRole"> | number
    role_name?: StringWithAggregatesFilter<"MemberRole"> | string
    role_description?: StringNullableWithAggregatesFilter<"MemberRole"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email_token?: PasswordResetTokenEmailTokenCompoundUniqueInput
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id" | "email_token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _avg?: PasswordResetTokenAvgOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
    _sum?: PasswordResetTokenSumOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expires?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type MembersCreateInput = {
    email?: string | null
    mobile?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    koa_no?: string | null
    address_personal?: string | null
    address_office?: string | null
    img1?: string | null
    img2?: string | null
    img3?: string | null
    url_code?: string | null
    para1?: string | null
    para2?: string | null
    para3?: string | null
    nick_name?: string | null
    mobile_no_office1?: string | null
    mobile_no_office2?: string | null
    ug_college?: string | null
    ug_passout?: string | null
    pg_college?: string | null
    pg_passout?: string | null
    proposer_name?: string | null
    propose_koa_num?: string | null
    seconded_name?: string | null
    seconded_koa_num?: string | null
    qualifications?: string | null
    website?: string | null
    location_office?: string | null
    whatsapp_office?: string | null
    facebook_office?: string | null
    socialmedia1_title?: string | null
    social_media1_handle?: string | null
    socialmedia2_title?: string | null
    socialmedia2_handle?: string | null
    dob?: Date | string | null
    doj?: Date | string | null
    status?: string | null
    type?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    role?: MemberRoleCreateNestedOneWithoutMembersInput
  }

  export type MembersUncheckedCreateInput = {
    id?: number
    email?: string | null
    mobile?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    koa_no?: string | null
    address_personal?: string | null
    address_office?: string | null
    img1?: string | null
    img2?: string | null
    img3?: string | null
    url_code?: string | null
    para1?: string | null
    para2?: string | null
    para3?: string | null
    nick_name?: string | null
    mobile_no_office1?: string | null
    mobile_no_office2?: string | null
    ug_college?: string | null
    ug_passout?: string | null
    pg_college?: string | null
    pg_passout?: string | null
    proposer_name?: string | null
    propose_koa_num?: string | null
    seconded_name?: string | null
    seconded_koa_num?: string | null
    qualifications?: string | null
    website?: string | null
    location_office?: string | null
    whatsapp_office?: string | null
    facebook_office?: string | null
    socialmedia1_title?: string | null
    social_media1_handle?: string | null
    socialmedia2_title?: string | null
    socialmedia2_handle?: string | null
    dob?: Date | string | null
    doj?: Date | string | null
    status?: string | null
    type?: string | null
    role_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MembersUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    koa_no?: NullableStringFieldUpdateOperationsInput | string | null
    address_personal?: NullableStringFieldUpdateOperationsInput | string | null
    address_office?: NullableStringFieldUpdateOperationsInput | string | null
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    url_code?: NullableStringFieldUpdateOperationsInput | string | null
    para1?: NullableStringFieldUpdateOperationsInput | string | null
    para2?: NullableStringFieldUpdateOperationsInput | string | null
    para3?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office1?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office2?: NullableStringFieldUpdateOperationsInput | string | null
    ug_college?: NullableStringFieldUpdateOperationsInput | string | null
    ug_passout?: NullableStringFieldUpdateOperationsInput | string | null
    pg_college?: NullableStringFieldUpdateOperationsInput | string | null
    pg_passout?: NullableStringFieldUpdateOperationsInput | string | null
    proposer_name?: NullableStringFieldUpdateOperationsInput | string | null
    propose_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_name?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location_office?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_office?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_office?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia1_title?: NullableStringFieldUpdateOperationsInput | string | null
    social_media1_handle?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_title?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_handle?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: MemberRoleUpdateOneWithoutMembersNestedInput
  }

  export type MembersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    koa_no?: NullableStringFieldUpdateOperationsInput | string | null
    address_personal?: NullableStringFieldUpdateOperationsInput | string | null
    address_office?: NullableStringFieldUpdateOperationsInput | string | null
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    url_code?: NullableStringFieldUpdateOperationsInput | string | null
    para1?: NullableStringFieldUpdateOperationsInput | string | null
    para2?: NullableStringFieldUpdateOperationsInput | string | null
    para3?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office1?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office2?: NullableStringFieldUpdateOperationsInput | string | null
    ug_college?: NullableStringFieldUpdateOperationsInput | string | null
    ug_passout?: NullableStringFieldUpdateOperationsInput | string | null
    pg_college?: NullableStringFieldUpdateOperationsInput | string | null
    pg_passout?: NullableStringFieldUpdateOperationsInput | string | null
    proposer_name?: NullableStringFieldUpdateOperationsInput | string | null
    propose_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_name?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location_office?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_office?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_office?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia1_title?: NullableStringFieldUpdateOperationsInput | string | null
    social_media1_handle?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_title?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_handle?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembersCreateManyInput = {
    id?: number
    email?: string | null
    mobile?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    koa_no?: string | null
    address_personal?: string | null
    address_office?: string | null
    img1?: string | null
    img2?: string | null
    img3?: string | null
    url_code?: string | null
    para1?: string | null
    para2?: string | null
    para3?: string | null
    nick_name?: string | null
    mobile_no_office1?: string | null
    mobile_no_office2?: string | null
    ug_college?: string | null
    ug_passout?: string | null
    pg_college?: string | null
    pg_passout?: string | null
    proposer_name?: string | null
    propose_koa_num?: string | null
    seconded_name?: string | null
    seconded_koa_num?: string | null
    qualifications?: string | null
    website?: string | null
    location_office?: string | null
    whatsapp_office?: string | null
    facebook_office?: string | null
    socialmedia1_title?: string | null
    social_media1_handle?: string | null
    socialmedia2_title?: string | null
    socialmedia2_handle?: string | null
    dob?: Date | string | null
    doj?: Date | string | null
    status?: string | null
    type?: string | null
    role_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MembersUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    koa_no?: NullableStringFieldUpdateOperationsInput | string | null
    address_personal?: NullableStringFieldUpdateOperationsInput | string | null
    address_office?: NullableStringFieldUpdateOperationsInput | string | null
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    url_code?: NullableStringFieldUpdateOperationsInput | string | null
    para1?: NullableStringFieldUpdateOperationsInput | string | null
    para2?: NullableStringFieldUpdateOperationsInput | string | null
    para3?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office1?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office2?: NullableStringFieldUpdateOperationsInput | string | null
    ug_college?: NullableStringFieldUpdateOperationsInput | string | null
    ug_passout?: NullableStringFieldUpdateOperationsInput | string | null
    pg_college?: NullableStringFieldUpdateOperationsInput | string | null
    pg_passout?: NullableStringFieldUpdateOperationsInput | string | null
    proposer_name?: NullableStringFieldUpdateOperationsInput | string | null
    propose_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_name?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location_office?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_office?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_office?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia1_title?: NullableStringFieldUpdateOperationsInput | string | null
    social_media1_handle?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_title?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_handle?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    koa_no?: NullableStringFieldUpdateOperationsInput | string | null
    address_personal?: NullableStringFieldUpdateOperationsInput | string | null
    address_office?: NullableStringFieldUpdateOperationsInput | string | null
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    url_code?: NullableStringFieldUpdateOperationsInput | string | null
    para1?: NullableStringFieldUpdateOperationsInput | string | null
    para2?: NullableStringFieldUpdateOperationsInput | string | null
    para3?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office1?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office2?: NullableStringFieldUpdateOperationsInput | string | null
    ug_college?: NullableStringFieldUpdateOperationsInput | string | null
    ug_passout?: NullableStringFieldUpdateOperationsInput | string | null
    pg_college?: NullableStringFieldUpdateOperationsInput | string | null
    pg_passout?: NullableStringFieldUpdateOperationsInput | string | null
    proposer_name?: NullableStringFieldUpdateOperationsInput | string | null
    propose_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_name?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location_office?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_office?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_office?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia1_title?: NullableStringFieldUpdateOperationsInput | string | null
    social_media1_handle?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_title?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_handle?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberRoleCreateInput = {
    role_name: string
    role_description?: string | null
    members?: MembersCreateNestedManyWithoutRoleInput
  }

  export type MemberRoleUncheckedCreateInput = {
    role_id?: number
    role_name: string
    role_description?: string | null
    members?: MembersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type MemberRoleUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    members?: MembersUpdateManyWithoutRoleNestedInput
  }

  export type MemberRoleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
    members?: MembersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type MemberRoleCreateManyInput = {
    role_id?: number
    role_name: string
    role_description?: string | null
  }

  export type MemberRoleUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberRoleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: number
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: number
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MemberRoleNullableScalarRelationFilter = {
    is?: MemberRoleWhereInput | null
    isNot?: MemberRoleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    koa_no?: SortOrder
    address_personal?: SortOrder
    address_office?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    url_code?: SortOrder
    para1?: SortOrder
    para2?: SortOrder
    para3?: SortOrder
    nick_name?: SortOrder
    mobile_no_office1?: SortOrder
    mobile_no_office2?: SortOrder
    ug_college?: SortOrder
    ug_passout?: SortOrder
    pg_college?: SortOrder
    pg_passout?: SortOrder
    proposer_name?: SortOrder
    propose_koa_num?: SortOrder
    seconded_name?: SortOrder
    seconded_koa_num?: SortOrder
    qualifications?: SortOrder
    website?: SortOrder
    location_office?: SortOrder
    whatsapp_office?: SortOrder
    facebook_office?: SortOrder
    socialmedia1_title?: SortOrder
    social_media1_handle?: SortOrder
    socialmedia2_title?: SortOrder
    socialmedia2_handle?: SortOrder
    dob?: SortOrder
    doj?: SortOrder
    status?: SortOrder
    type?: SortOrder
    role_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembersAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type MembersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    koa_no?: SortOrder
    address_personal?: SortOrder
    address_office?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    url_code?: SortOrder
    para1?: SortOrder
    para2?: SortOrder
    para3?: SortOrder
    nick_name?: SortOrder
    mobile_no_office1?: SortOrder
    mobile_no_office2?: SortOrder
    ug_college?: SortOrder
    ug_passout?: SortOrder
    pg_college?: SortOrder
    pg_passout?: SortOrder
    proposer_name?: SortOrder
    propose_koa_num?: SortOrder
    seconded_name?: SortOrder
    seconded_koa_num?: SortOrder
    qualifications?: SortOrder
    website?: SortOrder
    location_office?: SortOrder
    whatsapp_office?: SortOrder
    facebook_office?: SortOrder
    socialmedia1_title?: SortOrder
    social_media1_handle?: SortOrder
    socialmedia2_title?: SortOrder
    socialmedia2_handle?: SortOrder
    dob?: SortOrder
    doj?: SortOrder
    status?: SortOrder
    type?: SortOrder
    role_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    koa_no?: SortOrder
    address_personal?: SortOrder
    address_office?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    url_code?: SortOrder
    para1?: SortOrder
    para2?: SortOrder
    para3?: SortOrder
    nick_name?: SortOrder
    mobile_no_office1?: SortOrder
    mobile_no_office2?: SortOrder
    ug_college?: SortOrder
    ug_passout?: SortOrder
    pg_college?: SortOrder
    pg_passout?: SortOrder
    proposer_name?: SortOrder
    propose_koa_num?: SortOrder
    seconded_name?: SortOrder
    seconded_koa_num?: SortOrder
    qualifications?: SortOrder
    website?: SortOrder
    location_office?: SortOrder
    whatsapp_office?: SortOrder
    facebook_office?: SortOrder
    socialmedia1_title?: SortOrder
    social_media1_handle?: SortOrder
    socialmedia2_title?: SortOrder
    socialmedia2_handle?: SortOrder
    dob?: SortOrder
    doj?: SortOrder
    status?: SortOrder
    type?: SortOrder
    role_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembersSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type MembersListRelationFilter = {
    every?: MembersWhereInput
    some?: MembersWhereInput
    none?: MembersWhereInput
  }

  export type MembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberRoleCountOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
  }

  export type MemberRoleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type MemberRoleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
  }

  export type MemberRoleMinOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
  }

  export type MemberRoleSumOrderByAggregateInput = {
    role_id?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type PasswordResetTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MemberRoleCreateNestedOneWithoutMembersInput = {
    create?: XOR<MemberRoleCreateWithoutMembersInput, MemberRoleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: MemberRoleCreateOrConnectWithoutMembersInput
    connect?: MemberRoleWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MemberRoleUpdateOneWithoutMembersNestedInput = {
    create?: XOR<MemberRoleCreateWithoutMembersInput, MemberRoleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: MemberRoleCreateOrConnectWithoutMembersInput
    upsert?: MemberRoleUpsertWithoutMembersInput
    disconnect?: MemberRoleWhereInput | boolean
    delete?: MemberRoleWhereInput | boolean
    connect?: MemberRoleWhereUniqueInput
    update?: XOR<XOR<MemberRoleUpdateToOneWithWhereWithoutMembersInput, MemberRoleUpdateWithoutMembersInput>, MemberRoleUncheckedUpdateWithoutMembersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembersCreateNestedManyWithoutRoleInput = {
    create?: XOR<MembersCreateWithoutRoleInput, MembersUncheckedCreateWithoutRoleInput> | MembersCreateWithoutRoleInput[] | MembersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutRoleInput | MembersCreateOrConnectWithoutRoleInput[]
    createMany?: MembersCreateManyRoleInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type MembersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<MembersCreateWithoutRoleInput, MembersUncheckedCreateWithoutRoleInput> | MembersCreateWithoutRoleInput[] | MembersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutRoleInput | MembersCreateOrConnectWithoutRoleInput[]
    createMany?: MembersCreateManyRoleInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MembersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<MembersCreateWithoutRoleInput, MembersUncheckedCreateWithoutRoleInput> | MembersCreateWithoutRoleInput[] | MembersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutRoleInput | MembersCreateOrConnectWithoutRoleInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutRoleInput | MembersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: MembersCreateManyRoleInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutRoleInput | MembersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutRoleInput | MembersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type MembersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<MembersCreateWithoutRoleInput, MembersUncheckedCreateWithoutRoleInput> | MembersCreateWithoutRoleInput[] | MembersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutRoleInput | MembersCreateOrConnectWithoutRoleInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutRoleInput | MembersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: MembersCreateManyRoleInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutRoleInput | MembersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutRoleInput | MembersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type MemberRoleCreateWithoutMembersInput = {
    role_name: string
    role_description?: string | null
  }

  export type MemberRoleUncheckedCreateWithoutMembersInput = {
    role_id?: number
    role_name: string
    role_description?: string | null
  }

  export type MemberRoleCreateOrConnectWithoutMembersInput = {
    where: MemberRoleWhereUniqueInput
    create: XOR<MemberRoleCreateWithoutMembersInput, MemberRoleUncheckedCreateWithoutMembersInput>
  }

  export type MemberRoleUpsertWithoutMembersInput = {
    update: XOR<MemberRoleUpdateWithoutMembersInput, MemberRoleUncheckedUpdateWithoutMembersInput>
    create: XOR<MemberRoleCreateWithoutMembersInput, MemberRoleUncheckedCreateWithoutMembersInput>
    where?: MemberRoleWhereInput
  }

  export type MemberRoleUpdateToOneWithWhereWithoutMembersInput = {
    where?: MemberRoleWhereInput
    data: XOR<MemberRoleUpdateWithoutMembersInput, MemberRoleUncheckedUpdateWithoutMembersInput>
  }

  export type MemberRoleUpdateWithoutMembersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberRoleUncheckedUpdateWithoutMembersInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembersCreateWithoutRoleInput = {
    email?: string | null
    mobile?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    koa_no?: string | null
    address_personal?: string | null
    address_office?: string | null
    img1?: string | null
    img2?: string | null
    img3?: string | null
    url_code?: string | null
    para1?: string | null
    para2?: string | null
    para3?: string | null
    nick_name?: string | null
    mobile_no_office1?: string | null
    mobile_no_office2?: string | null
    ug_college?: string | null
    ug_passout?: string | null
    pg_college?: string | null
    pg_passout?: string | null
    proposer_name?: string | null
    propose_koa_num?: string | null
    seconded_name?: string | null
    seconded_koa_num?: string | null
    qualifications?: string | null
    website?: string | null
    location_office?: string | null
    whatsapp_office?: string | null
    facebook_office?: string | null
    socialmedia1_title?: string | null
    social_media1_handle?: string | null
    socialmedia2_title?: string | null
    socialmedia2_handle?: string | null
    dob?: Date | string | null
    doj?: Date | string | null
    status?: string | null
    type?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MembersUncheckedCreateWithoutRoleInput = {
    id?: number
    email?: string | null
    mobile?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    koa_no?: string | null
    address_personal?: string | null
    address_office?: string | null
    img1?: string | null
    img2?: string | null
    img3?: string | null
    url_code?: string | null
    para1?: string | null
    para2?: string | null
    para3?: string | null
    nick_name?: string | null
    mobile_no_office1?: string | null
    mobile_no_office2?: string | null
    ug_college?: string | null
    ug_passout?: string | null
    pg_college?: string | null
    pg_passout?: string | null
    proposer_name?: string | null
    propose_koa_num?: string | null
    seconded_name?: string | null
    seconded_koa_num?: string | null
    qualifications?: string | null
    website?: string | null
    location_office?: string | null
    whatsapp_office?: string | null
    facebook_office?: string | null
    socialmedia1_title?: string | null
    social_media1_handle?: string | null
    socialmedia2_title?: string | null
    socialmedia2_handle?: string | null
    dob?: Date | string | null
    doj?: Date | string | null
    status?: string | null
    type?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MembersCreateOrConnectWithoutRoleInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutRoleInput, MembersUncheckedCreateWithoutRoleInput>
  }

  export type MembersCreateManyRoleInputEnvelope = {
    data: MembersCreateManyRoleInput | MembersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type MembersUpsertWithWhereUniqueWithoutRoleInput = {
    where: MembersWhereUniqueInput
    update: XOR<MembersUpdateWithoutRoleInput, MembersUncheckedUpdateWithoutRoleInput>
    create: XOR<MembersCreateWithoutRoleInput, MembersUncheckedCreateWithoutRoleInput>
  }

  export type MembersUpdateWithWhereUniqueWithoutRoleInput = {
    where: MembersWhereUniqueInput
    data: XOR<MembersUpdateWithoutRoleInput, MembersUncheckedUpdateWithoutRoleInput>
  }

  export type MembersUpdateManyWithWhereWithoutRoleInput = {
    where: MembersScalarWhereInput
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyWithoutRoleInput>
  }

  export type MembersScalarWhereInput = {
    AND?: MembersScalarWhereInput | MembersScalarWhereInput[]
    OR?: MembersScalarWhereInput[]
    NOT?: MembersScalarWhereInput | MembersScalarWhereInput[]
    id?: IntFilter<"Members"> | number
    email?: StringNullableFilter<"Members"> | string | null
    mobile?: StringNullableFilter<"Members"> | string | null
    password?: StringNullableFilter<"Members"> | string | null
    emailVerified?: DateTimeNullableFilter<"Members"> | Date | string | null
    name?: StringNullableFilter<"Members"> | string | null
    firstName?: StringNullableFilter<"Members"> | string | null
    lastName?: StringNullableFilter<"Members"> | string | null
    koa_no?: StringNullableFilter<"Members"> | string | null
    address_personal?: StringNullableFilter<"Members"> | string | null
    address_office?: StringNullableFilter<"Members"> | string | null
    img1?: StringNullableFilter<"Members"> | string | null
    img2?: StringNullableFilter<"Members"> | string | null
    img3?: StringNullableFilter<"Members"> | string | null
    url_code?: StringNullableFilter<"Members"> | string | null
    para1?: StringNullableFilter<"Members"> | string | null
    para2?: StringNullableFilter<"Members"> | string | null
    para3?: StringNullableFilter<"Members"> | string | null
    nick_name?: StringNullableFilter<"Members"> | string | null
    mobile_no_office1?: StringNullableFilter<"Members"> | string | null
    mobile_no_office2?: StringNullableFilter<"Members"> | string | null
    ug_college?: StringNullableFilter<"Members"> | string | null
    ug_passout?: StringNullableFilter<"Members"> | string | null
    pg_college?: StringNullableFilter<"Members"> | string | null
    pg_passout?: StringNullableFilter<"Members"> | string | null
    proposer_name?: StringNullableFilter<"Members"> | string | null
    propose_koa_num?: StringNullableFilter<"Members"> | string | null
    seconded_name?: StringNullableFilter<"Members"> | string | null
    seconded_koa_num?: StringNullableFilter<"Members"> | string | null
    qualifications?: StringNullableFilter<"Members"> | string | null
    website?: StringNullableFilter<"Members"> | string | null
    location_office?: StringNullableFilter<"Members"> | string | null
    whatsapp_office?: StringNullableFilter<"Members"> | string | null
    facebook_office?: StringNullableFilter<"Members"> | string | null
    socialmedia1_title?: StringNullableFilter<"Members"> | string | null
    social_media1_handle?: StringNullableFilter<"Members"> | string | null
    socialmedia2_title?: StringNullableFilter<"Members"> | string | null
    socialmedia2_handle?: StringNullableFilter<"Members"> | string | null
    dob?: DateTimeNullableFilter<"Members"> | Date | string | null
    doj?: DateTimeNullableFilter<"Members"> | Date | string | null
    status?: StringNullableFilter<"Members"> | string | null
    type?: StringNullableFilter<"Members"> | string | null
    role_id?: IntNullableFilter<"Members"> | number | null
    createdAt?: DateTimeNullableFilter<"Members"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Members"> | Date | string | null
  }

  export type MembersCreateManyRoleInput = {
    id?: number
    email?: string | null
    mobile?: string | null
    password?: string | null
    emailVerified?: Date | string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    koa_no?: string | null
    address_personal?: string | null
    address_office?: string | null
    img1?: string | null
    img2?: string | null
    img3?: string | null
    url_code?: string | null
    para1?: string | null
    para2?: string | null
    para3?: string | null
    nick_name?: string | null
    mobile_no_office1?: string | null
    mobile_no_office2?: string | null
    ug_college?: string | null
    ug_passout?: string | null
    pg_college?: string | null
    pg_passout?: string | null
    proposer_name?: string | null
    propose_koa_num?: string | null
    seconded_name?: string | null
    seconded_koa_num?: string | null
    qualifications?: string | null
    website?: string | null
    location_office?: string | null
    whatsapp_office?: string | null
    facebook_office?: string | null
    socialmedia1_title?: string | null
    social_media1_handle?: string | null
    socialmedia2_title?: string | null
    socialmedia2_handle?: string | null
    dob?: Date | string | null
    doj?: Date | string | null
    status?: string | null
    type?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MembersUpdateWithoutRoleInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    koa_no?: NullableStringFieldUpdateOperationsInput | string | null
    address_personal?: NullableStringFieldUpdateOperationsInput | string | null
    address_office?: NullableStringFieldUpdateOperationsInput | string | null
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    url_code?: NullableStringFieldUpdateOperationsInput | string | null
    para1?: NullableStringFieldUpdateOperationsInput | string | null
    para2?: NullableStringFieldUpdateOperationsInput | string | null
    para3?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office1?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office2?: NullableStringFieldUpdateOperationsInput | string | null
    ug_college?: NullableStringFieldUpdateOperationsInput | string | null
    ug_passout?: NullableStringFieldUpdateOperationsInput | string | null
    pg_college?: NullableStringFieldUpdateOperationsInput | string | null
    pg_passout?: NullableStringFieldUpdateOperationsInput | string | null
    proposer_name?: NullableStringFieldUpdateOperationsInput | string | null
    propose_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_name?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location_office?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_office?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_office?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia1_title?: NullableStringFieldUpdateOperationsInput | string | null
    social_media1_handle?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_title?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_handle?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembersUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    koa_no?: NullableStringFieldUpdateOperationsInput | string | null
    address_personal?: NullableStringFieldUpdateOperationsInput | string | null
    address_office?: NullableStringFieldUpdateOperationsInput | string | null
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    url_code?: NullableStringFieldUpdateOperationsInput | string | null
    para1?: NullableStringFieldUpdateOperationsInput | string | null
    para2?: NullableStringFieldUpdateOperationsInput | string | null
    para3?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office1?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office2?: NullableStringFieldUpdateOperationsInput | string | null
    ug_college?: NullableStringFieldUpdateOperationsInput | string | null
    ug_passout?: NullableStringFieldUpdateOperationsInput | string | null
    pg_college?: NullableStringFieldUpdateOperationsInput | string | null
    pg_passout?: NullableStringFieldUpdateOperationsInput | string | null
    proposer_name?: NullableStringFieldUpdateOperationsInput | string | null
    propose_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_name?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location_office?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_office?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_office?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia1_title?: NullableStringFieldUpdateOperationsInput | string | null
    social_media1_handle?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_title?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_handle?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembersUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    koa_no?: NullableStringFieldUpdateOperationsInput | string | null
    address_personal?: NullableStringFieldUpdateOperationsInput | string | null
    address_office?: NullableStringFieldUpdateOperationsInput | string | null
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    url_code?: NullableStringFieldUpdateOperationsInput | string | null
    para1?: NullableStringFieldUpdateOperationsInput | string | null
    para2?: NullableStringFieldUpdateOperationsInput | string | null
    para3?: NullableStringFieldUpdateOperationsInput | string | null
    nick_name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office1?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no_office2?: NullableStringFieldUpdateOperationsInput | string | null
    ug_college?: NullableStringFieldUpdateOperationsInput | string | null
    ug_passout?: NullableStringFieldUpdateOperationsInput | string | null
    pg_college?: NullableStringFieldUpdateOperationsInput | string | null
    pg_passout?: NullableStringFieldUpdateOperationsInput | string | null
    proposer_name?: NullableStringFieldUpdateOperationsInput | string | null
    propose_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_name?: NullableStringFieldUpdateOperationsInput | string | null
    seconded_koa_num?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    location_office?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_office?: NullableStringFieldUpdateOperationsInput | string | null
    facebook_office?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia1_title?: NullableStringFieldUpdateOperationsInput | string | null
    social_media1_handle?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_title?: NullableStringFieldUpdateOperationsInput | string | null
    socialmedia2_handle?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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