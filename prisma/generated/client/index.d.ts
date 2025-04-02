
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Header
 * 
 */
export type Header = $Result.DefaultSelection<Prisma.$HeaderPayload>
/**
 * Model HeaderImage
 * 
 */
export type HeaderImage = $Result.DefaultSelection<Prisma.$HeaderImagePayload>
/**
 * Model ProjectCategory
 * 
 */
export type ProjectCategory = $Result.DefaultSelection<Prisma.$ProjectCategoryPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectImage
 * 
 */
export type ProjectImage = $Result.DefaultSelection<Prisma.$ProjectImagePayload>
/**
 * Model About
 * 
 */
export type About = $Result.DefaultSelection<Prisma.$AboutPayload>
/**
 * Model Expertise
 * 
 */
export type Expertise = $Result.DefaultSelection<Prisma.$ExpertisePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Testimonial
 * 
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model Award
 * 
 */
export type Award = $Result.DefaultSelection<Prisma.$AwardPayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model SocialMedia
 * 
 */
export type SocialMedia = $Result.DefaultSelection<Prisma.$SocialMediaPayload>
/**
 * Model FormType
 * 
 */
export type FormType = $Result.DefaultSelection<Prisma.$FormTypePayload>
/**
 * Model FormBudget
 * 
 */
export type FormBudget = $Result.DefaultSelection<Prisma.$FormBudgetPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model FormSetting
 * 
 */
export type FormSetting = $Result.DefaultSelection<Prisma.$FormSettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.header`: Exposes CRUD operations for the **Header** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Headers
    * const headers = await prisma.header.findMany()
    * ```
    */
  get header(): Prisma.HeaderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headerImage`: Exposes CRUD operations for the **HeaderImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeaderImages
    * const headerImages = await prisma.headerImage.findMany()
    * ```
    */
  get headerImage(): Prisma.HeaderImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectCategory`: Exposes CRUD operations for the **ProjectCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectCategories
    * const projectCategories = await prisma.projectCategory.findMany()
    * ```
    */
  get projectCategory(): Prisma.ProjectCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectImage`: Exposes CRUD operations for the **ProjectImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectImages
    * const projectImages = await prisma.projectImage.findMany()
    * ```
    */
  get projectImage(): Prisma.ProjectImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.about`: Exposes CRUD operations for the **About** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abouts
    * const abouts = await prisma.about.findMany()
    * ```
    */
  get about(): Prisma.AboutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expertise`: Exposes CRUD operations for the **Expertise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expertise
    * const expertise = await prisma.expertise.findMany()
    * ```
    */
  get expertise(): Prisma.ExpertiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award`: Exposes CRUD operations for the **Award** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awards
    * const awards = await prisma.award.findMany()
    * ```
    */
  get award(): Prisma.AwardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialMedia`: Exposes CRUD operations for the **SocialMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialMedias
    * const socialMedias = await prisma.socialMedia.findMany()
    * ```
    */
  get socialMedia(): Prisma.SocialMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formType`: Exposes CRUD operations for the **FormType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormTypes
    * const formTypes = await prisma.formType.findMany()
    * ```
    */
  get formType(): Prisma.FormTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formBudget`: Exposes CRUD operations for the **FormBudget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormBudgets
    * const formBudgets = await prisma.formBudget.findMany()
    * ```
    */
  get formBudget(): Prisma.FormBudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formSetting`: Exposes CRUD operations for the **FormSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSettings
    * const formSettings = await prisma.formSetting.findMany()
    * ```
    */
  get formSetting(): Prisma.FormSettingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    User: 'User',
    Header: 'Header',
    HeaderImage: 'HeaderImage',
    ProjectCategory: 'ProjectCategory',
    Project: 'Project',
    ProjectImage: 'ProjectImage',
    About: 'About',
    Expertise: 'Expertise',
    Service: 'Service',
    Testimonial: 'Testimonial',
    Award: 'Award',
    ContactInfo: 'ContactInfo',
    SocialMedia: 'SocialMedia',
    FormType: 'FormType',
    FormBudget: 'FormBudget',
    Form: 'Form',
    FormSetting: 'FormSetting'
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
      modelProps: "user" | "header" | "headerImage" | "projectCategory" | "project" | "projectImage" | "about" | "expertise" | "service" | "testimonial" | "award" | "contactInfo" | "socialMedia" | "formType" | "formBudget" | "form" | "formSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Header: {
        payload: Prisma.$HeaderPayload<ExtArgs>
        fields: Prisma.HeaderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeaderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeaderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>
          }
          findFirst: {
            args: Prisma.HeaderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeaderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>
          }
          findMany: {
            args: Prisma.HeaderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>[]
          }
          create: {
            args: Prisma.HeaderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>
          }
          createMany: {
            args: Prisma.HeaderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeaderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>[]
          }
          delete: {
            args: Prisma.HeaderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>
          }
          update: {
            args: Prisma.HeaderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>
          }
          deleteMany: {
            args: Prisma.HeaderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeaderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeaderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>[]
          }
          upsert: {
            args: Prisma.HeaderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderPayload>
          }
          aggregate: {
            args: Prisma.HeaderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeader>
          }
          groupBy: {
            args: Prisma.HeaderGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeaderGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeaderCountArgs<ExtArgs>
            result: $Utils.Optional<HeaderCountAggregateOutputType> | number
          }
        }
      }
      HeaderImage: {
        payload: Prisma.$HeaderImagePayload<ExtArgs>
        fields: Prisma.HeaderImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeaderImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeaderImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>
          }
          findFirst: {
            args: Prisma.HeaderImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeaderImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>
          }
          findMany: {
            args: Prisma.HeaderImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>[]
          }
          create: {
            args: Prisma.HeaderImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>
          }
          createMany: {
            args: Prisma.HeaderImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeaderImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>[]
          }
          delete: {
            args: Prisma.HeaderImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>
          }
          update: {
            args: Prisma.HeaderImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>
          }
          deleteMany: {
            args: Prisma.HeaderImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeaderImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeaderImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>[]
          }
          upsert: {
            args: Prisma.HeaderImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeaderImagePayload>
          }
          aggregate: {
            args: Prisma.HeaderImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeaderImage>
          }
          groupBy: {
            args: Prisma.HeaderImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeaderImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeaderImageCountArgs<ExtArgs>
            result: $Utils.Optional<HeaderImageCountAggregateOutputType> | number
          }
        }
      }
      ProjectCategory: {
        payload: Prisma.$ProjectCategoryPayload<ExtArgs>
        fields: Prisma.ProjectCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProjectCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          findMany: {
            args: Prisma.ProjectCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[]
          }
          create: {
            args: Prisma.ProjectCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          createMany: {
            args: Prisma.ProjectCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProjectCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          update: {
            args: Prisma.ProjectCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProjectCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProjectCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectCategory>
          }
          groupBy: {
            args: Prisma.ProjectCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCategoryCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectImage: {
        payload: Prisma.$ProjectImagePayload<ExtArgs>
        fields: Prisma.ProjectImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          findFirst: {
            args: Prisma.ProjectImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          findMany: {
            args: Prisma.ProjectImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>[]
          }
          create: {
            args: Prisma.ProjectImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          createMany: {
            args: Prisma.ProjectImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>[]
          }
          delete: {
            args: Prisma.ProjectImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          update: {
            args: Prisma.ProjectImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          deleteMany: {
            args: Prisma.ProjectImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>[]
          }
          upsert: {
            args: Prisma.ProjectImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          aggregate: {
            args: Prisma.ProjectImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectImage>
          }
          groupBy: {
            args: Prisma.ProjectImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectImageCountAggregateOutputType> | number
          }
        }
      }
      About: {
        payload: Prisma.$AboutPayload<ExtArgs>
        fields: Prisma.AboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          findFirst: {
            args: Prisma.AboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          findMany: {
            args: Prisma.AboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          create: {
            args: Prisma.AboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          createMany: {
            args: Prisma.AboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          delete: {
            args: Prisma.AboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          update: {
            args: Prisma.AboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          deleteMany: {
            args: Prisma.AboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          upsert: {
            args: Prisma.AboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          aggregate: {
            args: Prisma.AboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbout>
          }
          groupBy: {
            args: Prisma.AboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutCountArgs<ExtArgs>
            result: $Utils.Optional<AboutCountAggregateOutputType> | number
          }
        }
      }
      Expertise: {
        payload: Prisma.$ExpertisePayload<ExtArgs>
        fields: Prisma.ExpertiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          findFirst: {
            args: Prisma.ExpertiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          findMany: {
            args: Prisma.ExpertiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          create: {
            args: Prisma.ExpertiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          createMany: {
            args: Prisma.ExpertiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          delete: {
            args: Prisma.ExpertiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          update: {
            args: Prisma.ExpertiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          deleteMany: {
            args: Prisma.ExpertiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          upsert: {
            args: Prisma.ExpertiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          aggregate: {
            args: Prisma.ExpertiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpertise>
          }
          groupBy: {
            args: Prisma.ExpertiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertiseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      Award: {
        payload: Prisma.$AwardPayload<ExtArgs>
        fields: Prisma.AwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findFirst: {
            args: Prisma.AwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findMany: {
            args: Prisma.AwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          create: {
            args: Prisma.AwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          createMany: {
            args: Prisma.AwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          delete: {
            args: Prisma.AwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          update: {
            args: Prisma.AwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          deleteMany: {
            args: Prisma.AwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          upsert: {
            args: Prisma.AwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          aggregate: {
            args: Prisma.AwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward>
          }
          groupBy: {
            args: Prisma.AwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardCountArgs<ExtArgs>
            result: $Utils.Optional<AwardCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      SocialMedia: {
        payload: Prisma.$SocialMediaPayload<ExtArgs>
        fields: Prisma.SocialMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          findFirst: {
            args: Prisma.SocialMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          findMany: {
            args: Prisma.SocialMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>[]
          }
          create: {
            args: Prisma.SocialMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          createMany: {
            args: Prisma.SocialMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>[]
          }
          delete: {
            args: Prisma.SocialMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          update: {
            args: Prisma.SocialMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          deleteMany: {
            args: Prisma.SocialMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>[]
          }
          upsert: {
            args: Prisma.SocialMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          aggregate: {
            args: Prisma.SocialMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialMedia>
          }
          groupBy: {
            args: Prisma.SocialMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialMediaCountArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaCountAggregateOutputType> | number
          }
        }
      }
      FormType: {
        payload: Prisma.$FormTypePayload<ExtArgs>
        fields: Prisma.FormTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>
          }
          findFirst: {
            args: Prisma.FormTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>
          }
          findMany: {
            args: Prisma.FormTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>[]
          }
          create: {
            args: Prisma.FormTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>
          }
          createMany: {
            args: Prisma.FormTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>[]
          }
          delete: {
            args: Prisma.FormTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>
          }
          update: {
            args: Prisma.FormTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>
          }
          deleteMany: {
            args: Prisma.FormTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>[]
          }
          upsert: {
            args: Prisma.FormTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTypePayload>
          }
          aggregate: {
            args: Prisma.FormTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormType>
          }
          groupBy: {
            args: Prisma.FormTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormTypeCountArgs<ExtArgs>
            result: $Utils.Optional<FormTypeCountAggregateOutputType> | number
          }
        }
      }
      FormBudget: {
        payload: Prisma.$FormBudgetPayload<ExtArgs>
        fields: Prisma.FormBudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormBudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormBudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>
          }
          findFirst: {
            args: Prisma.FormBudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormBudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>
          }
          findMany: {
            args: Prisma.FormBudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>[]
          }
          create: {
            args: Prisma.FormBudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>
          }
          createMany: {
            args: Prisma.FormBudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormBudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>[]
          }
          delete: {
            args: Prisma.FormBudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>
          }
          update: {
            args: Prisma.FormBudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>
          }
          deleteMany: {
            args: Prisma.FormBudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormBudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormBudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>[]
          }
          upsert: {
            args: Prisma.FormBudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormBudgetPayload>
          }
          aggregate: {
            args: Prisma.FormBudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormBudget>
          }
          groupBy: {
            args: Prisma.FormBudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormBudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormBudgetCountArgs<ExtArgs>
            result: $Utils.Optional<FormBudgetCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      FormSetting: {
        payload: Prisma.$FormSettingPayload<ExtArgs>
        fields: Prisma.FormSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>
          }
          findFirst: {
            args: Prisma.FormSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>
          }
          findMany: {
            args: Prisma.FormSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>[]
          }
          create: {
            args: Prisma.FormSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>
          }
          createMany: {
            args: Prisma.FormSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>[]
          }
          delete: {
            args: Prisma.FormSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>
          }
          update: {
            args: Prisma.FormSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>
          }
          deleteMany: {
            args: Prisma.FormSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>[]
          }
          upsert: {
            args: Prisma.FormSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSettingPayload>
          }
          aggregate: {
            args: Prisma.FormSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormSetting>
          }
          groupBy: {
            args: Prisma.FormSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormSettingCountArgs<ExtArgs>
            result: $Utils.Optional<FormSettingCountAggregateOutputType> | number
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
    user?: UserOmit
    header?: HeaderOmit
    headerImage?: HeaderImageOmit
    projectCategory?: ProjectCategoryOmit
    project?: ProjectOmit
    projectImage?: ProjectImageOmit
    about?: AboutOmit
    expertise?: ExpertiseOmit
    service?: ServiceOmit
    testimonial?: TestimonialOmit
    award?: AwardOmit
    contactInfo?: ContactInfoOmit
    socialMedia?: SocialMediaOmit
    formType?: FormTypeOmit
    formBudget?: FormBudgetOmit
    form?: FormOmit
    formSetting?: FormSettingOmit
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
   * Count Type HeaderCountOutputType
   */

  export type HeaderCountOutputType = {
    HeaderImage: number
  }

  export type HeaderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HeaderImage?: boolean | HeaderCountOutputTypeCountHeaderImageArgs
  }

  // Custom InputTypes
  /**
   * HeaderCountOutputType without action
   */
  export type HeaderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderCountOutputType
     */
    select?: HeaderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeaderCountOutputType without action
   */
  export type HeaderCountOutputTypeCountHeaderImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeaderImageWhereInput
  }


  /**
   * Count Type ProjectCategoryCountOutputType
   */

  export type ProjectCategoryCountOutputType = {
    Project: number
  }

  export type ProjectCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectCategoryCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * ProjectCategoryCountOutputType without action
   */
  export type ProjectCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategoryCountOutputType
     */
    select?: ProjectCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCategoryCountOutputType without action
   */
  export type ProjectCategoryCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    ProjectImage: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectImage?: boolean | ProjectCountOutputTypeCountProjectImageArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectImageWhereInput
  }


  /**
   * Count Type AboutCountOutputType
   */

  export type AboutCountOutputType = {
    Expertise: number
  }

  export type AboutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expertise?: boolean | AboutCountOutputTypeCountExpertiseArgs
  }

  // Custom InputTypes
  /**
   * AboutCountOutputType without action
   */
  export type AboutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCountOutputType
     */
    select?: AboutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AboutCountOutputType without action
   */
  export type AboutCountOutputTypeCountExpertiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseWhereInput
  }


  /**
   * Count Type FormTypeCountOutputType
   */

  export type FormTypeCountOutputType = {
    Form: number
  }

  export type FormTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Form?: boolean | FormTypeCountOutputTypeCountFormArgs
  }

  // Custom InputTypes
  /**
   * FormTypeCountOutputType without action
   */
  export type FormTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTypeCountOutputType
     */
    select?: FormTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormTypeCountOutputType without action
   */
  export type FormTypeCountOutputTypeCountFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }


  /**
   * Count Type FormBudgetCountOutputType
   */

  export type FormBudgetCountOutputType = {
    Form: number
  }

  export type FormBudgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Form?: boolean | FormBudgetCountOutputTypeCountFormArgs
  }

  // Custom InputTypes
  /**
   * FormBudgetCountOutputType without action
   */
  export type FormBudgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudgetCountOutputType
     */
    select?: FormBudgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormBudgetCountOutputType without action
   */
  export type FormBudgetCountOutputTypeCountFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Header
   */

  export type AggregateHeader = {
    _count: HeaderCountAggregateOutputType | null
    _min: HeaderMinAggregateOutputType | null
    _max: HeaderMaxAggregateOutputType | null
  }

  export type HeaderMinAggregateOutputType = {
    id: string | null
    logoText: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryButtonText: string | null
    primaryButtonLink: string | null
    secondaryButtonText: string | null
    secondaryButtonLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeaderMaxAggregateOutputType = {
    id: string | null
    logoText: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryButtonText: string | null
    primaryButtonLink: string | null
    secondaryButtonText: string | null
    secondaryButtonLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeaderCountAggregateOutputType = {
    id: number
    logoText: number
    heroTitle: number
    heroSubtitle: number
    primaryButtonText: number
    primaryButtonLink: number
    secondaryButtonText: number
    secondaryButtonLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeaderMinAggregateInputType = {
    id?: true
    logoText?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryButtonText?: true
    primaryButtonLink?: true
    secondaryButtonText?: true
    secondaryButtonLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeaderMaxAggregateInputType = {
    id?: true
    logoText?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryButtonText?: true
    primaryButtonLink?: true
    secondaryButtonText?: true
    secondaryButtonLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeaderCountAggregateInputType = {
    id?: true
    logoText?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryButtonText?: true
    primaryButtonLink?: true
    secondaryButtonText?: true
    secondaryButtonLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeaderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Header to aggregate.
     */
    where?: HeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headers to fetch.
     */
    orderBy?: HeaderOrderByWithRelationInput | HeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Headers
    **/
    _count?: true | HeaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeaderMaxAggregateInputType
  }

  export type GetHeaderAggregateType<T extends HeaderAggregateArgs> = {
        [P in keyof T & keyof AggregateHeader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeader[P]>
      : GetScalarType<T[P], AggregateHeader[P]>
  }




  export type HeaderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeaderWhereInput
    orderBy?: HeaderOrderByWithAggregationInput | HeaderOrderByWithAggregationInput[]
    by: HeaderScalarFieldEnum[] | HeaderScalarFieldEnum
    having?: HeaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeaderCountAggregateInputType | true
    _min?: HeaderMinAggregateInputType
    _max?: HeaderMaxAggregateInputType
  }

  export type HeaderGroupByOutputType = {
    id: string
    logoText: string
    heroTitle: string
    heroSubtitle: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    createdAt: Date
    updatedAt: Date
    _count: HeaderCountAggregateOutputType | null
    _min: HeaderMinAggregateOutputType | null
    _max: HeaderMaxAggregateOutputType | null
  }

  type GetHeaderGroupByPayload<T extends HeaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeaderGroupByOutputType[P]>
            : GetScalarType<T[P], HeaderGroupByOutputType[P]>
        }
      >
    >


  export type HeaderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logoText?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryButtonText?: boolean
    primaryButtonLink?: boolean
    secondaryButtonText?: boolean
    secondaryButtonLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    HeaderImage?: boolean | Header$HeaderImageArgs<ExtArgs>
    _count?: boolean | HeaderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["header"]>

  export type HeaderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logoText?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryButtonText?: boolean
    primaryButtonLink?: boolean
    secondaryButtonText?: boolean
    secondaryButtonLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["header"]>

  export type HeaderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logoText?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryButtonText?: boolean
    primaryButtonLink?: boolean
    secondaryButtonText?: boolean
    secondaryButtonLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["header"]>

  export type HeaderSelectScalar = {
    id?: boolean
    logoText?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryButtonText?: boolean
    primaryButtonLink?: boolean
    secondaryButtonText?: boolean
    secondaryButtonLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeaderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logoText" | "heroTitle" | "heroSubtitle" | "primaryButtonText" | "primaryButtonLink" | "secondaryButtonText" | "secondaryButtonLink" | "createdAt" | "updatedAt", ExtArgs["result"]["header"]>
  export type HeaderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HeaderImage?: boolean | Header$HeaderImageArgs<ExtArgs>
    _count?: boolean | HeaderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeaderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HeaderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HeaderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Header"
    objects: {
      HeaderImage: Prisma.$HeaderImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logoText: string
      heroTitle: string
      heroSubtitle: string
      primaryButtonText: string
      primaryButtonLink: string
      secondaryButtonText: string
      secondaryButtonLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["header"]>
    composites: {}
  }

  type HeaderGetPayload<S extends boolean | null | undefined | HeaderDefaultArgs> = $Result.GetResult<Prisma.$HeaderPayload, S>

  type HeaderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeaderCountAggregateInputType | true
    }

  export interface HeaderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Header'], meta: { name: 'Header' } }
    /**
     * Find zero or one Header that matches the filter.
     * @param {HeaderFindUniqueArgs} args - Arguments to find a Header
     * @example
     * // Get one Header
     * const header = await prisma.header.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeaderFindUniqueArgs>(args: SelectSubset<T, HeaderFindUniqueArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Header that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeaderFindUniqueOrThrowArgs} args - Arguments to find a Header
     * @example
     * // Get one Header
     * const header = await prisma.header.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeaderFindUniqueOrThrowArgs>(args: SelectSubset<T, HeaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Header that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderFindFirstArgs} args - Arguments to find a Header
     * @example
     * // Get one Header
     * const header = await prisma.header.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeaderFindFirstArgs>(args?: SelectSubset<T, HeaderFindFirstArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Header that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderFindFirstOrThrowArgs} args - Arguments to find a Header
     * @example
     * // Get one Header
     * const header = await prisma.header.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeaderFindFirstOrThrowArgs>(args?: SelectSubset<T, HeaderFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Headers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Headers
     * const headers = await prisma.header.findMany()
     * 
     * // Get first 10 Headers
     * const headers = await prisma.header.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headerWithIdOnly = await prisma.header.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeaderFindManyArgs>(args?: SelectSubset<T, HeaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Header.
     * @param {HeaderCreateArgs} args - Arguments to create a Header.
     * @example
     * // Create one Header
     * const Header = await prisma.header.create({
     *   data: {
     *     // ... data to create a Header
     *   }
     * })
     * 
     */
    create<T extends HeaderCreateArgs>(args: SelectSubset<T, HeaderCreateArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Headers.
     * @param {HeaderCreateManyArgs} args - Arguments to create many Headers.
     * @example
     * // Create many Headers
     * const header = await prisma.header.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeaderCreateManyArgs>(args?: SelectSubset<T, HeaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Headers and returns the data saved in the database.
     * @param {HeaderCreateManyAndReturnArgs} args - Arguments to create many Headers.
     * @example
     * // Create many Headers
     * const header = await prisma.header.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Headers and only return the `id`
     * const headerWithIdOnly = await prisma.header.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeaderCreateManyAndReturnArgs>(args?: SelectSubset<T, HeaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Header.
     * @param {HeaderDeleteArgs} args - Arguments to delete one Header.
     * @example
     * // Delete one Header
     * const Header = await prisma.header.delete({
     *   where: {
     *     // ... filter to delete one Header
     *   }
     * })
     * 
     */
    delete<T extends HeaderDeleteArgs>(args: SelectSubset<T, HeaderDeleteArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Header.
     * @param {HeaderUpdateArgs} args - Arguments to update one Header.
     * @example
     * // Update one Header
     * const header = await prisma.header.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeaderUpdateArgs>(args: SelectSubset<T, HeaderUpdateArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Headers.
     * @param {HeaderDeleteManyArgs} args - Arguments to filter Headers to delete.
     * @example
     * // Delete a few Headers
     * const { count } = await prisma.header.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeaderDeleteManyArgs>(args?: SelectSubset<T, HeaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Headers
     * const header = await prisma.header.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeaderUpdateManyArgs>(args: SelectSubset<T, HeaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headers and returns the data updated in the database.
     * @param {HeaderUpdateManyAndReturnArgs} args - Arguments to update many Headers.
     * @example
     * // Update many Headers
     * const header = await prisma.header.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Headers and only return the `id`
     * const headerWithIdOnly = await prisma.header.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeaderUpdateManyAndReturnArgs>(args: SelectSubset<T, HeaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Header.
     * @param {HeaderUpsertArgs} args - Arguments to update or create a Header.
     * @example
     * // Update or create a Header
     * const header = await prisma.header.upsert({
     *   create: {
     *     // ... data to create a Header
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Header we want to update
     *   }
     * })
     */
    upsert<T extends HeaderUpsertArgs>(args: SelectSubset<T, HeaderUpsertArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Headers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderCountArgs} args - Arguments to filter Headers to count.
     * @example
     * // Count the number of Headers
     * const count = await prisma.header.count({
     *   where: {
     *     // ... the filter for the Headers we want to count
     *   }
     * })
    **/
    count<T extends HeaderCountArgs>(
      args?: Subset<T, HeaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Header.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeaderAggregateArgs>(args: Subset<T, HeaderAggregateArgs>): Prisma.PrismaPromise<GetHeaderAggregateType<T>>

    /**
     * Group by Header.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderGroupByArgs} args - Group by arguments.
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
      T extends HeaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeaderGroupByArgs['orderBy'] }
        : { orderBy?: HeaderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Header model
   */
  readonly fields: HeaderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Header.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeaderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    HeaderImage<T extends Header$HeaderImageArgs<ExtArgs> = {}>(args?: Subset<T, Header$HeaderImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Header model
   */ 
  interface HeaderFieldRefs {
    readonly id: FieldRef<"Header", 'String'>
    readonly logoText: FieldRef<"Header", 'String'>
    readonly heroTitle: FieldRef<"Header", 'String'>
    readonly heroSubtitle: FieldRef<"Header", 'String'>
    readonly primaryButtonText: FieldRef<"Header", 'String'>
    readonly primaryButtonLink: FieldRef<"Header", 'String'>
    readonly secondaryButtonText: FieldRef<"Header", 'String'>
    readonly secondaryButtonLink: FieldRef<"Header", 'String'>
    readonly createdAt: FieldRef<"Header", 'DateTime'>
    readonly updatedAt: FieldRef<"Header", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Header findUnique
   */
  export type HeaderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * Filter, which Header to fetch.
     */
    where: HeaderWhereUniqueInput
  }

  /**
   * Header findUniqueOrThrow
   */
  export type HeaderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * Filter, which Header to fetch.
     */
    where: HeaderWhereUniqueInput
  }

  /**
   * Header findFirst
   */
  export type HeaderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * Filter, which Header to fetch.
     */
    where?: HeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headers to fetch.
     */
    orderBy?: HeaderOrderByWithRelationInput | HeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headers.
     */
    cursor?: HeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headers.
     */
    distinct?: HeaderScalarFieldEnum | HeaderScalarFieldEnum[]
  }

  /**
   * Header findFirstOrThrow
   */
  export type HeaderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * Filter, which Header to fetch.
     */
    where?: HeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headers to fetch.
     */
    orderBy?: HeaderOrderByWithRelationInput | HeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headers.
     */
    cursor?: HeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headers.
     */
    distinct?: HeaderScalarFieldEnum | HeaderScalarFieldEnum[]
  }

  /**
   * Header findMany
   */
  export type HeaderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * Filter, which Headers to fetch.
     */
    where?: HeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headers to fetch.
     */
    orderBy?: HeaderOrderByWithRelationInput | HeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Headers.
     */
    cursor?: HeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headers.
     */
    skip?: number
    distinct?: HeaderScalarFieldEnum | HeaderScalarFieldEnum[]
  }

  /**
   * Header create
   */
  export type HeaderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * The data needed to create a Header.
     */
    data: XOR<HeaderCreateInput, HeaderUncheckedCreateInput>
  }

  /**
   * Header createMany
   */
  export type HeaderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Headers.
     */
    data: HeaderCreateManyInput | HeaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Header createManyAndReturn
   */
  export type HeaderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * The data used to create many Headers.
     */
    data: HeaderCreateManyInput | HeaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Header update
   */
  export type HeaderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * The data needed to update a Header.
     */
    data: XOR<HeaderUpdateInput, HeaderUncheckedUpdateInput>
    /**
     * Choose, which Header to update.
     */
    where: HeaderWhereUniqueInput
  }

  /**
   * Header updateMany
   */
  export type HeaderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Headers.
     */
    data: XOR<HeaderUpdateManyMutationInput, HeaderUncheckedUpdateManyInput>
    /**
     * Filter which Headers to update
     */
    where?: HeaderWhereInput
    /**
     * Limit how many Headers to update.
     */
    limit?: number
  }

  /**
   * Header updateManyAndReturn
   */
  export type HeaderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * The data used to update Headers.
     */
    data: XOR<HeaderUpdateManyMutationInput, HeaderUncheckedUpdateManyInput>
    /**
     * Filter which Headers to update
     */
    where?: HeaderWhereInput
    /**
     * Limit how many Headers to update.
     */
    limit?: number
  }

  /**
   * Header upsert
   */
  export type HeaderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * The filter to search for the Header to update in case it exists.
     */
    where: HeaderWhereUniqueInput
    /**
     * In case the Header found by the `where` argument doesn't exist, create a new Header with this data.
     */
    create: XOR<HeaderCreateInput, HeaderUncheckedCreateInput>
    /**
     * In case the Header was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeaderUpdateInput, HeaderUncheckedUpdateInput>
  }

  /**
   * Header delete
   */
  export type HeaderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
    /**
     * Filter which Header to delete.
     */
    where: HeaderWhereUniqueInput
  }

  /**
   * Header deleteMany
   */
  export type HeaderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Headers to delete
     */
    where?: HeaderWhereInput
    /**
     * Limit how many Headers to delete.
     */
    limit?: number
  }

  /**
   * Header.HeaderImage
   */
  export type Header$HeaderImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    where?: HeaderImageWhereInput
    orderBy?: HeaderImageOrderByWithRelationInput | HeaderImageOrderByWithRelationInput[]
    cursor?: HeaderImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeaderImageScalarFieldEnum | HeaderImageScalarFieldEnum[]
  }

  /**
   * Header without action
   */
  export type HeaderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Header
     */
    select?: HeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Header
     */
    omit?: HeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderInclude<ExtArgs> | null
  }


  /**
   * Model HeaderImage
   */

  export type AggregateHeaderImage = {
    _count: HeaderImageCountAggregateOutputType | null
    _min: HeaderImageMinAggregateOutputType | null
    _max: HeaderImageMaxAggregateOutputType | null
  }

  export type HeaderImageMinAggregateOutputType = {
    id: string | null
    path: string | null
    headerId: string | null
    createdAt: Date | null
  }

  export type HeaderImageMaxAggregateOutputType = {
    id: string | null
    path: string | null
    headerId: string | null
    createdAt: Date | null
  }

  export type HeaderImageCountAggregateOutputType = {
    id: number
    path: number
    headerId: number
    createdAt: number
    _all: number
  }


  export type HeaderImageMinAggregateInputType = {
    id?: true
    path?: true
    headerId?: true
    createdAt?: true
  }

  export type HeaderImageMaxAggregateInputType = {
    id?: true
    path?: true
    headerId?: true
    createdAt?: true
  }

  export type HeaderImageCountAggregateInputType = {
    id?: true
    path?: true
    headerId?: true
    createdAt?: true
    _all?: true
  }

  export type HeaderImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeaderImage to aggregate.
     */
    where?: HeaderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeaderImages to fetch.
     */
    orderBy?: HeaderImageOrderByWithRelationInput | HeaderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeaderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeaderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeaderImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeaderImages
    **/
    _count?: true | HeaderImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeaderImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeaderImageMaxAggregateInputType
  }

  export type GetHeaderImageAggregateType<T extends HeaderImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHeaderImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeaderImage[P]>
      : GetScalarType<T[P], AggregateHeaderImage[P]>
  }




  export type HeaderImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeaderImageWhereInput
    orderBy?: HeaderImageOrderByWithAggregationInput | HeaderImageOrderByWithAggregationInput[]
    by: HeaderImageScalarFieldEnum[] | HeaderImageScalarFieldEnum
    having?: HeaderImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeaderImageCountAggregateInputType | true
    _min?: HeaderImageMinAggregateInputType
    _max?: HeaderImageMaxAggregateInputType
  }

  export type HeaderImageGroupByOutputType = {
    id: string
    path: string
    headerId: string
    createdAt: Date
    _count: HeaderImageCountAggregateOutputType | null
    _min: HeaderImageMinAggregateOutputType | null
    _max: HeaderImageMaxAggregateOutputType | null
  }

  type GetHeaderImageGroupByPayload<T extends HeaderImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeaderImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeaderImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeaderImageGroupByOutputType[P]>
            : GetScalarType<T[P], HeaderImageGroupByOutputType[P]>
        }
      >
    >


  export type HeaderImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    headerId?: boolean
    createdAt?: boolean
    header?: boolean | HeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headerImage"]>

  export type HeaderImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    headerId?: boolean
    createdAt?: boolean
    header?: boolean | HeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headerImage"]>

  export type HeaderImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    headerId?: boolean
    createdAt?: boolean
    header?: boolean | HeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headerImage"]>

  export type HeaderImageSelectScalar = {
    id?: boolean
    path?: boolean
    headerId?: boolean
    createdAt?: boolean
  }

  export type HeaderImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "headerId" | "createdAt", ExtArgs["result"]["headerImage"]>
  export type HeaderImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    header?: boolean | HeaderDefaultArgs<ExtArgs>
  }
  export type HeaderImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    header?: boolean | HeaderDefaultArgs<ExtArgs>
  }
  export type HeaderImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    header?: boolean | HeaderDefaultArgs<ExtArgs>
  }

  export type $HeaderImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeaderImage"
    objects: {
      header: Prisma.$HeaderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      headerId: string
      createdAt: Date
    }, ExtArgs["result"]["headerImage"]>
    composites: {}
  }

  type HeaderImageGetPayload<S extends boolean | null | undefined | HeaderImageDefaultArgs> = $Result.GetResult<Prisma.$HeaderImagePayload, S>

  type HeaderImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeaderImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeaderImageCountAggregateInputType | true
    }

  export interface HeaderImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeaderImage'], meta: { name: 'HeaderImage' } }
    /**
     * Find zero or one HeaderImage that matches the filter.
     * @param {HeaderImageFindUniqueArgs} args - Arguments to find a HeaderImage
     * @example
     * // Get one HeaderImage
     * const headerImage = await prisma.headerImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeaderImageFindUniqueArgs>(args: SelectSubset<T, HeaderImageFindUniqueArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeaderImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeaderImageFindUniqueOrThrowArgs} args - Arguments to find a HeaderImage
     * @example
     * // Get one HeaderImage
     * const headerImage = await prisma.headerImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeaderImageFindUniqueOrThrowArgs>(args: SelectSubset<T, HeaderImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeaderImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderImageFindFirstArgs} args - Arguments to find a HeaderImage
     * @example
     * // Get one HeaderImage
     * const headerImage = await prisma.headerImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeaderImageFindFirstArgs>(args?: SelectSubset<T, HeaderImageFindFirstArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeaderImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderImageFindFirstOrThrowArgs} args - Arguments to find a HeaderImage
     * @example
     * // Get one HeaderImage
     * const headerImage = await prisma.headerImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeaderImageFindFirstOrThrowArgs>(args?: SelectSubset<T, HeaderImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeaderImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeaderImages
     * const headerImages = await prisma.headerImage.findMany()
     * 
     * // Get first 10 HeaderImages
     * const headerImages = await prisma.headerImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headerImageWithIdOnly = await prisma.headerImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeaderImageFindManyArgs>(args?: SelectSubset<T, HeaderImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeaderImage.
     * @param {HeaderImageCreateArgs} args - Arguments to create a HeaderImage.
     * @example
     * // Create one HeaderImage
     * const HeaderImage = await prisma.headerImage.create({
     *   data: {
     *     // ... data to create a HeaderImage
     *   }
     * })
     * 
     */
    create<T extends HeaderImageCreateArgs>(args: SelectSubset<T, HeaderImageCreateArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeaderImages.
     * @param {HeaderImageCreateManyArgs} args - Arguments to create many HeaderImages.
     * @example
     * // Create many HeaderImages
     * const headerImage = await prisma.headerImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeaderImageCreateManyArgs>(args?: SelectSubset<T, HeaderImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeaderImages and returns the data saved in the database.
     * @param {HeaderImageCreateManyAndReturnArgs} args - Arguments to create many HeaderImages.
     * @example
     * // Create many HeaderImages
     * const headerImage = await prisma.headerImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeaderImages and only return the `id`
     * const headerImageWithIdOnly = await prisma.headerImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeaderImageCreateManyAndReturnArgs>(args?: SelectSubset<T, HeaderImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeaderImage.
     * @param {HeaderImageDeleteArgs} args - Arguments to delete one HeaderImage.
     * @example
     * // Delete one HeaderImage
     * const HeaderImage = await prisma.headerImage.delete({
     *   where: {
     *     // ... filter to delete one HeaderImage
     *   }
     * })
     * 
     */
    delete<T extends HeaderImageDeleteArgs>(args: SelectSubset<T, HeaderImageDeleteArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeaderImage.
     * @param {HeaderImageUpdateArgs} args - Arguments to update one HeaderImage.
     * @example
     * // Update one HeaderImage
     * const headerImage = await prisma.headerImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeaderImageUpdateArgs>(args: SelectSubset<T, HeaderImageUpdateArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeaderImages.
     * @param {HeaderImageDeleteManyArgs} args - Arguments to filter HeaderImages to delete.
     * @example
     * // Delete a few HeaderImages
     * const { count } = await prisma.headerImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeaderImageDeleteManyArgs>(args?: SelectSubset<T, HeaderImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeaderImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeaderImages
     * const headerImage = await prisma.headerImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeaderImageUpdateManyArgs>(args: SelectSubset<T, HeaderImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeaderImages and returns the data updated in the database.
     * @param {HeaderImageUpdateManyAndReturnArgs} args - Arguments to update many HeaderImages.
     * @example
     * // Update many HeaderImages
     * const headerImage = await prisma.headerImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeaderImages and only return the `id`
     * const headerImageWithIdOnly = await prisma.headerImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeaderImageUpdateManyAndReturnArgs>(args: SelectSubset<T, HeaderImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeaderImage.
     * @param {HeaderImageUpsertArgs} args - Arguments to update or create a HeaderImage.
     * @example
     * // Update or create a HeaderImage
     * const headerImage = await prisma.headerImage.upsert({
     *   create: {
     *     // ... data to create a HeaderImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeaderImage we want to update
     *   }
     * })
     */
    upsert<T extends HeaderImageUpsertArgs>(args: SelectSubset<T, HeaderImageUpsertArgs<ExtArgs>>): Prisma__HeaderImageClient<$Result.GetResult<Prisma.$HeaderImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeaderImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderImageCountArgs} args - Arguments to filter HeaderImages to count.
     * @example
     * // Count the number of HeaderImages
     * const count = await prisma.headerImage.count({
     *   where: {
     *     // ... the filter for the HeaderImages we want to count
     *   }
     * })
    **/
    count<T extends HeaderImageCountArgs>(
      args?: Subset<T, HeaderImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeaderImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeaderImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeaderImageAggregateArgs>(args: Subset<T, HeaderImageAggregateArgs>): Prisma.PrismaPromise<GetHeaderImageAggregateType<T>>

    /**
     * Group by HeaderImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeaderImageGroupByArgs} args - Group by arguments.
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
      T extends HeaderImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeaderImageGroupByArgs['orderBy'] }
        : { orderBy?: HeaderImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeaderImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeaderImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeaderImage model
   */
  readonly fields: HeaderImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeaderImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeaderImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    header<T extends HeaderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeaderDefaultArgs<ExtArgs>>): Prisma__HeaderClient<$Result.GetResult<Prisma.$HeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HeaderImage model
   */ 
  interface HeaderImageFieldRefs {
    readonly id: FieldRef<"HeaderImage", 'String'>
    readonly path: FieldRef<"HeaderImage", 'String'>
    readonly headerId: FieldRef<"HeaderImage", 'String'>
    readonly createdAt: FieldRef<"HeaderImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeaderImage findUnique
   */
  export type HeaderImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * Filter, which HeaderImage to fetch.
     */
    where: HeaderImageWhereUniqueInput
  }

  /**
   * HeaderImage findUniqueOrThrow
   */
  export type HeaderImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * Filter, which HeaderImage to fetch.
     */
    where: HeaderImageWhereUniqueInput
  }

  /**
   * HeaderImage findFirst
   */
  export type HeaderImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * Filter, which HeaderImage to fetch.
     */
    where?: HeaderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeaderImages to fetch.
     */
    orderBy?: HeaderImageOrderByWithRelationInput | HeaderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeaderImages.
     */
    cursor?: HeaderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeaderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeaderImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeaderImages.
     */
    distinct?: HeaderImageScalarFieldEnum | HeaderImageScalarFieldEnum[]
  }

  /**
   * HeaderImage findFirstOrThrow
   */
  export type HeaderImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * Filter, which HeaderImage to fetch.
     */
    where?: HeaderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeaderImages to fetch.
     */
    orderBy?: HeaderImageOrderByWithRelationInput | HeaderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeaderImages.
     */
    cursor?: HeaderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeaderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeaderImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeaderImages.
     */
    distinct?: HeaderImageScalarFieldEnum | HeaderImageScalarFieldEnum[]
  }

  /**
   * HeaderImage findMany
   */
  export type HeaderImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * Filter, which HeaderImages to fetch.
     */
    where?: HeaderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeaderImages to fetch.
     */
    orderBy?: HeaderImageOrderByWithRelationInput | HeaderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeaderImages.
     */
    cursor?: HeaderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeaderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeaderImages.
     */
    skip?: number
    distinct?: HeaderImageScalarFieldEnum | HeaderImageScalarFieldEnum[]
  }

  /**
   * HeaderImage create
   */
  export type HeaderImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * The data needed to create a HeaderImage.
     */
    data: XOR<HeaderImageCreateInput, HeaderImageUncheckedCreateInput>
  }

  /**
   * HeaderImage createMany
   */
  export type HeaderImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeaderImages.
     */
    data: HeaderImageCreateManyInput | HeaderImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeaderImage createManyAndReturn
   */
  export type HeaderImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * The data used to create many HeaderImages.
     */
    data: HeaderImageCreateManyInput | HeaderImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeaderImage update
   */
  export type HeaderImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * The data needed to update a HeaderImage.
     */
    data: XOR<HeaderImageUpdateInput, HeaderImageUncheckedUpdateInput>
    /**
     * Choose, which HeaderImage to update.
     */
    where: HeaderImageWhereUniqueInput
  }

  /**
   * HeaderImage updateMany
   */
  export type HeaderImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeaderImages.
     */
    data: XOR<HeaderImageUpdateManyMutationInput, HeaderImageUncheckedUpdateManyInput>
    /**
     * Filter which HeaderImages to update
     */
    where?: HeaderImageWhereInput
    /**
     * Limit how many HeaderImages to update.
     */
    limit?: number
  }

  /**
   * HeaderImage updateManyAndReturn
   */
  export type HeaderImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * The data used to update HeaderImages.
     */
    data: XOR<HeaderImageUpdateManyMutationInput, HeaderImageUncheckedUpdateManyInput>
    /**
     * Filter which HeaderImages to update
     */
    where?: HeaderImageWhereInput
    /**
     * Limit how many HeaderImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeaderImage upsert
   */
  export type HeaderImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * The filter to search for the HeaderImage to update in case it exists.
     */
    where: HeaderImageWhereUniqueInput
    /**
     * In case the HeaderImage found by the `where` argument doesn't exist, create a new HeaderImage with this data.
     */
    create: XOR<HeaderImageCreateInput, HeaderImageUncheckedCreateInput>
    /**
     * In case the HeaderImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeaderImageUpdateInput, HeaderImageUncheckedUpdateInput>
  }

  /**
   * HeaderImage delete
   */
  export type HeaderImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
    /**
     * Filter which HeaderImage to delete.
     */
    where: HeaderImageWhereUniqueInput
  }

  /**
   * HeaderImage deleteMany
   */
  export type HeaderImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeaderImages to delete
     */
    where?: HeaderImageWhereInput
    /**
     * Limit how many HeaderImages to delete.
     */
    limit?: number
  }

  /**
   * HeaderImage without action
   */
  export type HeaderImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeaderImage
     */
    select?: HeaderImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeaderImage
     */
    omit?: HeaderImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeaderImageInclude<ExtArgs> | null
  }


  /**
   * Model ProjectCategory
   */

  export type AggregateProjectCategory = {
    _count: ProjectCategoryCountAggregateOutputType | null
    _min: ProjectCategoryMinAggregateOutputType | null
    _max: ProjectCategoryMaxAggregateOutputType | null
  }

  export type ProjectCategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ProjectCategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ProjectCategoryCountAggregateOutputType = {
    id: number
    title: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ProjectCategoryMinAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
  }

  export type ProjectCategoryMaxAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
  }

  export type ProjectCategoryCountAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCategory to aggregate.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectCategories
    **/
    _count?: true | ProjectCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCategoryMaxAggregateInputType
  }

  export type GetProjectCategoryAggregateType<T extends ProjectCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectCategory[P]>
      : GetScalarType<T[P], AggregateProjectCategory[P]>
  }




  export type ProjectCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCategoryWhereInput
    orderBy?: ProjectCategoryOrderByWithAggregationInput | ProjectCategoryOrderByWithAggregationInput[]
    by: ProjectCategoryScalarFieldEnum[] | ProjectCategoryScalarFieldEnum
    having?: ProjectCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCategoryCountAggregateInputType | true
    _min?: ProjectCategoryMinAggregateInputType
    _max?: ProjectCategoryMaxAggregateInputType
  }

  export type ProjectCategoryGroupByOutputType = {
    id: string
    title: string
    isActive: boolean
    createdAt: Date
    _count: ProjectCategoryCountAggregateOutputType | null
    _min: ProjectCategoryMinAggregateOutputType | null
    _max: ProjectCategoryMaxAggregateOutputType | null
  }

  type GetProjectCategoryGroupByPayload<T extends ProjectCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    Project?: boolean | ProjectCategory$ProjectArgs<ExtArgs>
    _count?: boolean | ProjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCategory"]>

  export type ProjectCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["projectCategory"]>

  export type ProjectCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["projectCategory"]>

  export type ProjectCategorySelectScalar = {
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ProjectCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isActive" | "createdAt", ExtArgs["result"]["projectCategory"]>
  export type ProjectCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | ProjectCategory$ProjectArgs<ExtArgs>
    _count?: boolean | ProjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectCategory"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["projectCategory"]>
    composites: {}
  }

  type ProjectCategoryGetPayload<S extends boolean | null | undefined | ProjectCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProjectCategoryPayload, S>

  type ProjectCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCategoryCountAggregateInputType | true
    }

  export interface ProjectCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectCategory'], meta: { name: 'ProjectCategory' } }
    /**
     * Find zero or one ProjectCategory that matches the filter.
     * @param {ProjectCategoryFindUniqueArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectCategoryFindUniqueArgs>(args: SelectSubset<T, ProjectCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindFirstArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectCategoryFindFirstArgs>(args?: SelectSubset<T, ProjectCategoryFindFirstArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindFirstOrThrowArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectCategories
     * const projectCategories = await prisma.projectCategory.findMany()
     * 
     * // Get first 10 ProjectCategories
     * const projectCategories = await prisma.projectCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectCategoryWithIdOnly = await prisma.projectCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectCategoryFindManyArgs>(args?: SelectSubset<T, ProjectCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectCategory.
     * @param {ProjectCategoryCreateArgs} args - Arguments to create a ProjectCategory.
     * @example
     * // Create one ProjectCategory
     * const ProjectCategory = await prisma.projectCategory.create({
     *   data: {
     *     // ... data to create a ProjectCategory
     *   }
     * })
     * 
     */
    create<T extends ProjectCategoryCreateArgs>(args: SelectSubset<T, ProjectCategoryCreateArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectCategories.
     * @param {ProjectCategoryCreateManyArgs} args - Arguments to create many ProjectCategories.
     * @example
     * // Create many ProjectCategories
     * const projectCategory = await prisma.projectCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCategoryCreateManyArgs>(args?: SelectSubset<T, ProjectCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectCategories and returns the data saved in the database.
     * @param {ProjectCategoryCreateManyAndReturnArgs} args - Arguments to create many ProjectCategories.
     * @example
     * // Create many ProjectCategories
     * const projectCategory = await prisma.projectCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectCategories and only return the `id`
     * const projectCategoryWithIdOnly = await prisma.projectCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectCategory.
     * @param {ProjectCategoryDeleteArgs} args - Arguments to delete one ProjectCategory.
     * @example
     * // Delete one ProjectCategory
     * const ProjectCategory = await prisma.projectCategory.delete({
     *   where: {
     *     // ... filter to delete one ProjectCategory
     *   }
     * })
     * 
     */
    delete<T extends ProjectCategoryDeleteArgs>(args: SelectSubset<T, ProjectCategoryDeleteArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectCategory.
     * @param {ProjectCategoryUpdateArgs} args - Arguments to update one ProjectCategory.
     * @example
     * // Update one ProjectCategory
     * const projectCategory = await prisma.projectCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectCategoryUpdateArgs>(args: SelectSubset<T, ProjectCategoryUpdateArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectCategories.
     * @param {ProjectCategoryDeleteManyArgs} args - Arguments to filter ProjectCategories to delete.
     * @example
     * // Delete a few ProjectCategories
     * const { count } = await prisma.projectCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectCategoryDeleteManyArgs>(args?: SelectSubset<T, ProjectCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectCategories
     * const projectCategory = await prisma.projectCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectCategoryUpdateManyArgs>(args: SelectSubset<T, ProjectCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCategories and returns the data updated in the database.
     * @param {ProjectCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProjectCategories.
     * @example
     * // Update many ProjectCategories
     * const projectCategory = await prisma.projectCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectCategories and only return the `id`
     * const projectCategoryWithIdOnly = await prisma.projectCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectCategory.
     * @param {ProjectCategoryUpsertArgs} args - Arguments to update or create a ProjectCategory.
     * @example
     * // Update or create a ProjectCategory
     * const projectCategory = await prisma.projectCategory.upsert({
     *   create: {
     *     // ... data to create a ProjectCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProjectCategoryUpsertArgs>(args: SelectSubset<T, ProjectCategoryUpsertArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryCountArgs} args - Arguments to filter ProjectCategories to count.
     * @example
     * // Count the number of ProjectCategories
     * const count = await prisma.projectCategory.count({
     *   where: {
     *     // ... the filter for the ProjectCategories we want to count
     *   }
     * })
    **/
    count<T extends ProjectCategoryCountArgs>(
      args?: Subset<T, ProjectCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectCategoryAggregateArgs>(args: Subset<T, ProjectCategoryAggregateArgs>): Prisma.PrismaPromise<GetProjectCategoryAggregateType<T>>

    /**
     * Group by ProjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProjectCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectCategory model
   */
  readonly fields: ProjectCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends ProjectCategory$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, ProjectCategory$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProjectCategory model
   */ 
  interface ProjectCategoryFieldRefs {
    readonly id: FieldRef<"ProjectCategory", 'String'>
    readonly title: FieldRef<"ProjectCategory", 'String'>
    readonly isActive: FieldRef<"ProjectCategory", 'Boolean'>
    readonly createdAt: FieldRef<"ProjectCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectCategory findUnique
   */
  export type ProjectCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory findUniqueOrThrow
   */
  export type ProjectCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory findFirst
   */
  export type ProjectCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCategories.
     */
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory findFirstOrThrow
   */
  export type ProjectCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCategories.
     */
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory findMany
   */
  export type ProjectCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategories to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory create
   */
  export type ProjectCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectCategory.
     */
    data: XOR<ProjectCategoryCreateInput, ProjectCategoryUncheckedCreateInput>
  }

  /**
   * ProjectCategory createMany
   */
  export type ProjectCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectCategories.
     */
    data: ProjectCategoryCreateManyInput | ProjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCategory createManyAndReturn
   */
  export type ProjectCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectCategories.
     */
    data: ProjectCategoryCreateManyInput | ProjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCategory update
   */
  export type ProjectCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectCategory.
     */
    data: XOR<ProjectCategoryUpdateInput, ProjectCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProjectCategory to update.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory updateMany
   */
  export type ProjectCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectCategories.
     */
    data: XOR<ProjectCategoryUpdateManyMutationInput, ProjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCategories to update
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to update.
     */
    limit?: number
  }

  /**
   * ProjectCategory updateManyAndReturn
   */
  export type ProjectCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProjectCategories.
     */
    data: XOR<ProjectCategoryUpdateManyMutationInput, ProjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCategories to update
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to update.
     */
    limit?: number
  }

  /**
   * ProjectCategory upsert
   */
  export type ProjectCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectCategory to update in case it exists.
     */
    where: ProjectCategoryWhereUniqueInput
    /**
     * In case the ProjectCategory found by the `where` argument doesn't exist, create a new ProjectCategory with this data.
     */
    create: XOR<ProjectCategoryCreateInput, ProjectCategoryUncheckedCreateInput>
    /**
     * In case the ProjectCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCategoryUpdateInput, ProjectCategoryUncheckedUpdateInput>
  }

  /**
   * ProjectCategory delete
   */
  export type ProjectCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProjectCategory to delete.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory deleteMany
   */
  export type ProjectCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCategories to delete
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to delete.
     */
    limit?: number
  }

  /**
   * ProjectCategory.Project
   */
  export type ProjectCategory$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * ProjectCategory without action
   */
  export type ProjectCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    link: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    link: string | null
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
    ProjectImage?: boolean | Project$ProjectImageArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "link" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
    ProjectImage?: boolean | Project$ProjectImageArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      category: Prisma.$ProjectCategoryPayload<ExtArgs>
      ProjectImage: Prisma.$ProjectImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      link: string | null
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ProjectCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectCategoryDefaultArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProjectImage<T extends Project$ProjectImageArgs<ExtArgs> = {}>(args?: Subset<T, Project$ProjectImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly link: FieldRef<"Project", 'String'>
    readonly categoryId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.ProjectImage
   */
  export type Project$ProjectImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    where?: ProjectImageWhereInput
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    cursor?: ProjectImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectImage
   */

  export type AggregateProjectImage = {
    _count: ProjectImageCountAggregateOutputType | null
    _min: ProjectImageMinAggregateOutputType | null
    _max: ProjectImageMaxAggregateOutputType | null
  }

  export type ProjectImageMinAggregateOutputType = {
    id: string | null
    path: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProjectImageMaxAggregateOutputType = {
    id: string | null
    path: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProjectImageCountAggregateOutputType = {
    id: number
    path: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type ProjectImageMinAggregateInputType = {
    id?: true
    path?: true
    projectId?: true
    createdAt?: true
  }

  export type ProjectImageMaxAggregateInputType = {
    id?: true
    path?: true
    projectId?: true
    createdAt?: true
  }

  export type ProjectImageCountAggregateInputType = {
    id?: true
    path?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectImage to aggregate.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectImages
    **/
    _count?: true | ProjectImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectImageMaxAggregateInputType
  }

  export type GetProjectImageAggregateType<T extends ProjectImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectImage[P]>
      : GetScalarType<T[P], AggregateProjectImage[P]>
  }




  export type ProjectImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectImageWhereInput
    orderBy?: ProjectImageOrderByWithAggregationInput | ProjectImageOrderByWithAggregationInput[]
    by: ProjectImageScalarFieldEnum[] | ProjectImageScalarFieldEnum
    having?: ProjectImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectImageCountAggregateInputType | true
    _min?: ProjectImageMinAggregateInputType
    _max?: ProjectImageMaxAggregateInputType
  }

  export type ProjectImageGroupByOutputType = {
    id: string
    path: string
    projectId: string
    createdAt: Date
    _count: ProjectImageCountAggregateOutputType | null
    _min: ProjectImageMinAggregateOutputType | null
    _max: ProjectImageMaxAggregateOutputType | null
  }

  type GetProjectImageGroupByPayload<T extends ProjectImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectImageGroupByOutputType[P]>
        }
      >
    >


  export type ProjectImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectImage"]>

  export type ProjectImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectImage"]>

  export type ProjectImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectImage"]>

  export type ProjectImageSelectScalar = {
    id?: boolean
    path?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type ProjectImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "projectId" | "createdAt", ExtArgs["result"]["projectImage"]>
  export type ProjectImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectImage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      projectId: string
      createdAt: Date
    }, ExtArgs["result"]["projectImage"]>
    composites: {}
  }

  type ProjectImageGetPayload<S extends boolean | null | undefined | ProjectImageDefaultArgs> = $Result.GetResult<Prisma.$ProjectImagePayload, S>

  type ProjectImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectImageCountAggregateInputType | true
    }

  export interface ProjectImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectImage'], meta: { name: 'ProjectImage' } }
    /**
     * Find zero or one ProjectImage that matches the filter.
     * @param {ProjectImageFindUniqueArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectImageFindUniqueArgs>(args: SelectSubset<T, ProjectImageFindUniqueArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectImageFindUniqueOrThrowArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageFindFirstArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectImageFindFirstArgs>(args?: SelectSubset<T, ProjectImageFindFirstArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageFindFirstOrThrowArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectImages
     * const projectImages = await prisma.projectImage.findMany()
     * 
     * // Get first 10 ProjectImages
     * const projectImages = await prisma.projectImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectImageWithIdOnly = await prisma.projectImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectImageFindManyArgs>(args?: SelectSubset<T, ProjectImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectImage.
     * @param {ProjectImageCreateArgs} args - Arguments to create a ProjectImage.
     * @example
     * // Create one ProjectImage
     * const ProjectImage = await prisma.projectImage.create({
     *   data: {
     *     // ... data to create a ProjectImage
     *   }
     * })
     * 
     */
    create<T extends ProjectImageCreateArgs>(args: SelectSubset<T, ProjectImageCreateArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectImages.
     * @param {ProjectImageCreateManyArgs} args - Arguments to create many ProjectImages.
     * @example
     * // Create many ProjectImages
     * const projectImage = await prisma.projectImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectImageCreateManyArgs>(args?: SelectSubset<T, ProjectImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectImages and returns the data saved in the database.
     * @param {ProjectImageCreateManyAndReturnArgs} args - Arguments to create many ProjectImages.
     * @example
     * // Create many ProjectImages
     * const projectImage = await prisma.projectImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectImages and only return the `id`
     * const projectImageWithIdOnly = await prisma.projectImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectImage.
     * @param {ProjectImageDeleteArgs} args - Arguments to delete one ProjectImage.
     * @example
     * // Delete one ProjectImage
     * const ProjectImage = await prisma.projectImage.delete({
     *   where: {
     *     // ... filter to delete one ProjectImage
     *   }
     * })
     * 
     */
    delete<T extends ProjectImageDeleteArgs>(args: SelectSubset<T, ProjectImageDeleteArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectImage.
     * @param {ProjectImageUpdateArgs} args - Arguments to update one ProjectImage.
     * @example
     * // Update one ProjectImage
     * const projectImage = await prisma.projectImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectImageUpdateArgs>(args: SelectSubset<T, ProjectImageUpdateArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectImages.
     * @param {ProjectImageDeleteManyArgs} args - Arguments to filter ProjectImages to delete.
     * @example
     * // Delete a few ProjectImages
     * const { count } = await prisma.projectImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectImageDeleteManyArgs>(args?: SelectSubset<T, ProjectImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectImages
     * const projectImage = await prisma.projectImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectImageUpdateManyArgs>(args: SelectSubset<T, ProjectImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectImages and returns the data updated in the database.
     * @param {ProjectImageUpdateManyAndReturnArgs} args - Arguments to update many ProjectImages.
     * @example
     * // Update many ProjectImages
     * const projectImage = await prisma.projectImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectImages and only return the `id`
     * const projectImageWithIdOnly = await prisma.projectImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectImage.
     * @param {ProjectImageUpsertArgs} args - Arguments to update or create a ProjectImage.
     * @example
     * // Update or create a ProjectImage
     * const projectImage = await prisma.projectImage.upsert({
     *   create: {
     *     // ... data to create a ProjectImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectImage we want to update
     *   }
     * })
     */
    upsert<T extends ProjectImageUpsertArgs>(args: SelectSubset<T, ProjectImageUpsertArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageCountArgs} args - Arguments to filter ProjectImages to count.
     * @example
     * // Count the number of ProjectImages
     * const count = await prisma.projectImage.count({
     *   where: {
     *     // ... the filter for the ProjectImages we want to count
     *   }
     * })
    **/
    count<T extends ProjectImageCountArgs>(
      args?: Subset<T, ProjectImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectImageAggregateArgs>(args: Subset<T, ProjectImageAggregateArgs>): Prisma.PrismaPromise<GetProjectImageAggregateType<T>>

    /**
     * Group by ProjectImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageGroupByArgs} args - Group by arguments.
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
      T extends ProjectImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectImageGroupByArgs['orderBy'] }
        : { orderBy?: ProjectImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectImage model
   */
  readonly fields: ProjectImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectImage model
   */ 
  interface ProjectImageFieldRefs {
    readonly id: FieldRef<"ProjectImage", 'String'>
    readonly path: FieldRef<"ProjectImage", 'String'>
    readonly projectId: FieldRef<"ProjectImage", 'String'>
    readonly createdAt: FieldRef<"ProjectImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectImage findUnique
   */
  export type ProjectImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage findUniqueOrThrow
   */
  export type ProjectImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage findFirst
   */
  export type ProjectImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectImages.
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectImages.
     */
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * ProjectImage findFirstOrThrow
   */
  export type ProjectImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectImages.
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectImages.
     */
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * ProjectImage findMany
   */
  export type ProjectImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImages to fetch.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectImages.
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * ProjectImage create
   */
  export type ProjectImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectImage.
     */
    data: XOR<ProjectImageCreateInput, ProjectImageUncheckedCreateInput>
  }

  /**
   * ProjectImage createMany
   */
  export type ProjectImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectImages.
     */
    data: ProjectImageCreateManyInput | ProjectImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectImage createManyAndReturn
   */
  export type ProjectImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectImages.
     */
    data: ProjectImageCreateManyInput | ProjectImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectImage update
   */
  export type ProjectImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectImage.
     */
    data: XOR<ProjectImageUpdateInput, ProjectImageUncheckedUpdateInput>
    /**
     * Choose, which ProjectImage to update.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage updateMany
   */
  export type ProjectImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectImages.
     */
    data: XOR<ProjectImageUpdateManyMutationInput, ProjectImageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectImages to update
     */
    where?: ProjectImageWhereInput
    /**
     * Limit how many ProjectImages to update.
     */
    limit?: number
  }

  /**
   * ProjectImage updateManyAndReturn
   */
  export type ProjectImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * The data used to update ProjectImages.
     */
    data: XOR<ProjectImageUpdateManyMutationInput, ProjectImageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectImages to update
     */
    where?: ProjectImageWhereInput
    /**
     * Limit how many ProjectImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectImage upsert
   */
  export type ProjectImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectImage to update in case it exists.
     */
    where: ProjectImageWhereUniqueInput
    /**
     * In case the ProjectImage found by the `where` argument doesn't exist, create a new ProjectImage with this data.
     */
    create: XOR<ProjectImageCreateInput, ProjectImageUncheckedCreateInput>
    /**
     * In case the ProjectImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectImageUpdateInput, ProjectImageUncheckedUpdateInput>
  }

  /**
   * ProjectImage delete
   */
  export type ProjectImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter which ProjectImage to delete.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage deleteMany
   */
  export type ProjectImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectImages to delete
     */
    where?: ProjectImageWhereInput
    /**
     * Limit how many ProjectImages to delete.
     */
    limit?: number
  }

  /**
   * ProjectImage without action
   */
  export type ProjectImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectImage
     */
    omit?: ProjectImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
  }


  /**
   * Model About
   */

  export type AggregateAbout = {
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  export type AboutMinAggregateOutputType = {
    id: string | null
    studio: string | null
    year: string | null
    description: string | null
    mission: string | null
    vision: string | null
    quote: string | null
    quoteAuthor: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutMaxAggregateOutputType = {
    id: string | null
    studio: string | null
    year: string | null
    description: string | null
    mission: string | null
    vision: string | null
    quote: string | null
    quoteAuthor: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutCountAggregateOutputType = {
    id: number
    studio: number
    year: number
    description: number
    mission: number
    vision: number
    quote: number
    quoteAuthor: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutMinAggregateInputType = {
    id?: true
    studio?: true
    year?: true
    description?: true
    mission?: true
    vision?: true
    quote?: true
    quoteAuthor?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutMaxAggregateInputType = {
    id?: true
    studio?: true
    year?: true
    description?: true
    mission?: true
    vision?: true
    quote?: true
    quoteAuthor?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutCountAggregateInputType = {
    id?: true
    studio?: true
    year?: true
    description?: true
    mission?: true
    vision?: true
    quote?: true
    quoteAuthor?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which About to aggregate.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abouts
    **/
    _count?: true | AboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutMaxAggregateInputType
  }

  export type GetAboutAggregateType<T extends AboutAggregateArgs> = {
        [P in keyof T & keyof AggregateAbout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbout[P]>
      : GetScalarType<T[P], AggregateAbout[P]>
  }




  export type AboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutWhereInput
    orderBy?: AboutOrderByWithAggregationInput | AboutOrderByWithAggregationInput[]
    by: AboutScalarFieldEnum[] | AboutScalarFieldEnum
    having?: AboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutCountAggregateInputType | true
    _min?: AboutMinAggregateInputType
    _max?: AboutMaxAggregateInputType
  }

  export type AboutGroupByOutputType = {
    id: string
    studio: string
    year: string
    description: string
    mission: string
    vision: string
    quote: string
    quoteAuthor: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  type GetAboutGroupByPayload<T extends AboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGroupByOutputType[P]>
        }
      >
    >


  export type AboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studio?: boolean
    year?: boolean
    description?: boolean
    mission?: boolean
    vision?: boolean
    quote?: boolean
    quoteAuthor?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Expertise?: boolean | About$ExpertiseArgs<ExtArgs>
    _count?: boolean | AboutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["about"]>

  export type AboutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studio?: boolean
    year?: boolean
    description?: boolean
    mission?: boolean
    vision?: boolean
    quote?: boolean
    quoteAuthor?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["about"]>

  export type AboutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studio?: boolean
    year?: boolean
    description?: boolean
    mission?: boolean
    vision?: boolean
    quote?: boolean
    quoteAuthor?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["about"]>

  export type AboutSelectScalar = {
    id?: boolean
    studio?: boolean
    year?: boolean
    description?: boolean
    mission?: boolean
    vision?: boolean
    quote?: boolean
    quoteAuthor?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studio" | "year" | "description" | "mission" | "vision" | "quote" | "quoteAuthor" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["about"]>
  export type AboutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expertise?: boolean | About$ExpertiseArgs<ExtArgs>
    _count?: boolean | AboutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AboutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AboutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "About"
    objects: {
      Expertise: Prisma.$ExpertisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studio: string
      year: string
      description: string
      mission: string
      vision: string
      quote: string
      quoteAuthor: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["about"]>
    composites: {}
  }

  type AboutGetPayload<S extends boolean | null | undefined | AboutDefaultArgs> = $Result.GetResult<Prisma.$AboutPayload, S>

  type AboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutCountAggregateInputType | true
    }

  export interface AboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['About'], meta: { name: 'About' } }
    /**
     * Find zero or one About that matches the filter.
     * @param {AboutFindUniqueArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutFindUniqueArgs>(args: SelectSubset<T, AboutFindUniqueArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one About that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutFindUniqueOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first About that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindFirstArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutFindFirstArgs>(args?: SelectSubset<T, AboutFindFirstArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first About that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindFirstOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouts
     * const abouts = await prisma.about.findMany()
     * 
     * // Get first 10 Abouts
     * const abouts = await prisma.about.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutWithIdOnly = await prisma.about.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutFindManyArgs>(args?: SelectSubset<T, AboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a About.
     * @param {AboutCreateArgs} args - Arguments to create a About.
     * @example
     * // Create one About
     * const About = await prisma.about.create({
     *   data: {
     *     // ... data to create a About
     *   }
     * })
     * 
     */
    create<T extends AboutCreateArgs>(args: SelectSubset<T, AboutCreateArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abouts.
     * @param {AboutCreateManyArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const about = await prisma.about.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutCreateManyArgs>(args?: SelectSubset<T, AboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abouts and returns the data saved in the database.
     * @param {AboutCreateManyAndReturnArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const about = await prisma.about.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abouts and only return the `id`
     * const aboutWithIdOnly = await prisma.about.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a About.
     * @param {AboutDeleteArgs} args - Arguments to delete one About.
     * @example
     * // Delete one About
     * const About = await prisma.about.delete({
     *   where: {
     *     // ... filter to delete one About
     *   }
     * })
     * 
     */
    delete<T extends AboutDeleteArgs>(args: SelectSubset<T, AboutDeleteArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one About.
     * @param {AboutUpdateArgs} args - Arguments to update one About.
     * @example
     * // Update one About
     * const about = await prisma.about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutUpdateArgs>(args: SelectSubset<T, AboutUpdateArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abouts.
     * @param {AboutDeleteManyArgs} args - Arguments to filter Abouts to delete.
     * @example
     * // Delete a few Abouts
     * const { count } = await prisma.about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutDeleteManyArgs>(args?: SelectSubset<T, AboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutUpdateManyArgs>(args: SelectSubset<T, AboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts and returns the data updated in the database.
     * @param {AboutUpdateManyAndReturnArgs} args - Arguments to update many Abouts.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abouts and only return the `id`
     * const aboutWithIdOnly = await prisma.about.updateManyAndReturn({
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
    updateManyAndReturn<T extends AboutUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one About.
     * @param {AboutUpsertArgs} args - Arguments to update or create a About.
     * @example
     * // Update or create a About
     * const about = await prisma.about.upsert({
     *   create: {
     *     // ... data to create a About
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the About we want to update
     *   }
     * })
     */
    upsert<T extends AboutUpsertArgs>(args: SelectSubset<T, AboutUpsertArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCountArgs} args - Arguments to filter Abouts to count.
     * @example
     * // Count the number of Abouts
     * const count = await prisma.about.count({
     *   where: {
     *     // ... the filter for the Abouts we want to count
     *   }
     * })
    **/
    count<T extends AboutCountArgs>(
      args?: Subset<T, AboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutAggregateArgs>(args: Subset<T, AboutAggregateArgs>): Prisma.PrismaPromise<GetAboutAggregateType<T>>

    /**
     * Group by About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGroupByArgs} args - Group by arguments.
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
      T extends AboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutGroupByArgs['orderBy'] }
        : { orderBy?: AboutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the About model
   */
  readonly fields: AboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for About.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Expertise<T extends About$ExpertiseArgs<ExtArgs> = {}>(args?: Subset<T, About$ExpertiseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the About model
   */ 
  interface AboutFieldRefs {
    readonly id: FieldRef<"About", 'String'>
    readonly studio: FieldRef<"About", 'String'>
    readonly year: FieldRef<"About", 'String'>
    readonly description: FieldRef<"About", 'String'>
    readonly mission: FieldRef<"About", 'String'>
    readonly vision: FieldRef<"About", 'String'>
    readonly quote: FieldRef<"About", 'String'>
    readonly quoteAuthor: FieldRef<"About", 'String'>
    readonly image: FieldRef<"About", 'String'>
    readonly createdAt: FieldRef<"About", 'DateTime'>
    readonly updatedAt: FieldRef<"About", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * About findUnique
   */
  export type AboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About findUniqueOrThrow
   */
  export type AboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About findFirst
   */
  export type AboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About findFirstOrThrow
   */
  export type AboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About findMany
   */
  export type AboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter, which Abouts to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About create
   */
  export type AboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * The data needed to create a About.
     */
    data: XOR<AboutCreateInput, AboutUncheckedCreateInput>
  }

  /**
   * About createMany
   */
  export type AboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * About createManyAndReturn
   */
  export type AboutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * About update
   */
  export type AboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * The data needed to update a About.
     */
    data: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
    /**
     * Choose, which About to update.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About updateMany
   */
  export type AboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to update.
     */
    limit?: number
  }

  /**
   * About updateManyAndReturn
   */
  export type AboutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to update.
     */
    limit?: number
  }

  /**
   * About upsert
   */
  export type AboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * The filter to search for the About to update in case it exists.
     */
    where: AboutWhereUniqueInput
    /**
     * In case the About found by the `where` argument doesn't exist, create a new About with this data.
     */
    create: XOR<AboutCreateInput, AboutUncheckedCreateInput>
    /**
     * In case the About was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
  }

  /**
   * About delete
   */
  export type AboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
    /**
     * Filter which About to delete.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About deleteMany
   */
  export type AboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abouts to delete
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to delete.
     */
    limit?: number
  }

  /**
   * About.Expertise
   */
  export type About$ExpertiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    where?: ExpertiseWhereInput
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    cursor?: ExpertiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * About without action
   */
  export type AboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutInclude<ExtArgs> | null
  }


  /**
   * Model Expertise
   */

  export type AggregateExpertise = {
    _count: ExpertiseCountAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  export type ExpertiseMinAggregateOutputType = {
    id: string | null
    path: string | null
    aboutId: string | null
    createdAt: Date | null
  }

  export type ExpertiseMaxAggregateOutputType = {
    id: string | null
    path: string | null
    aboutId: string | null
    createdAt: Date | null
  }

  export type ExpertiseCountAggregateOutputType = {
    id: number
    path: number
    aboutId: number
    createdAt: number
    _all: number
  }


  export type ExpertiseMinAggregateInputType = {
    id?: true
    path?: true
    aboutId?: true
    createdAt?: true
  }

  export type ExpertiseMaxAggregateInputType = {
    id?: true
    path?: true
    aboutId?: true
    createdAt?: true
  }

  export type ExpertiseCountAggregateInputType = {
    id?: true
    path?: true
    aboutId?: true
    createdAt?: true
    _all?: true
  }

  export type ExpertiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expertise to aggregate.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expertise
    **/
    _count?: true | ExpertiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertiseMaxAggregateInputType
  }

  export type GetExpertiseAggregateType<T extends ExpertiseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertise[P]>
      : GetScalarType<T[P], AggregateExpertise[P]>
  }




  export type ExpertiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseWhereInput
    orderBy?: ExpertiseOrderByWithAggregationInput | ExpertiseOrderByWithAggregationInput[]
    by: ExpertiseScalarFieldEnum[] | ExpertiseScalarFieldEnum
    having?: ExpertiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertiseCountAggregateInputType | true
    _min?: ExpertiseMinAggregateInputType
    _max?: ExpertiseMaxAggregateInputType
  }

  export type ExpertiseGroupByOutputType = {
    id: string
    path: string
    aboutId: string
    createdAt: Date
    _count: ExpertiseCountAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  type GetExpertiseGroupByPayload<T extends ExpertiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
        }
      >
    >


  export type ExpertiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    aboutId?: boolean
    createdAt?: boolean
    about?: boolean | AboutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    aboutId?: boolean
    createdAt?: boolean
    about?: boolean | AboutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    aboutId?: boolean
    createdAt?: boolean
    about?: boolean | AboutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectScalar = {
    id?: boolean
    path?: boolean
    aboutId?: boolean
    createdAt?: boolean
  }

  export type ExpertiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "aboutId" | "createdAt", ExtArgs["result"]["expertise"]>
  export type ExpertiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    about?: boolean | AboutDefaultArgs<ExtArgs>
  }
  export type ExpertiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    about?: boolean | AboutDefaultArgs<ExtArgs>
  }
  export type ExpertiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    about?: boolean | AboutDefaultArgs<ExtArgs>
  }

  export type $ExpertisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expertise"
    objects: {
      about: Prisma.$AboutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      aboutId: string
      createdAt: Date
    }, ExtArgs["result"]["expertise"]>
    composites: {}
  }

  type ExpertiseGetPayload<S extends boolean | null | undefined | ExpertiseDefaultArgs> = $Result.GetResult<Prisma.$ExpertisePayload, S>

  type ExpertiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertiseCountAggregateInputType | true
    }

  export interface ExpertiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expertise'], meta: { name: 'Expertise' } }
    /**
     * Find zero or one Expertise that matches the filter.
     * @param {ExpertiseFindUniqueArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertiseFindUniqueArgs>(args: SelectSubset<T, ExpertiseFindUniqueArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expertise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertiseFindUniqueOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertiseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindFirstArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertiseFindFirstArgs>(args?: SelectSubset<T, ExpertiseFindFirstArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindFirstOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertiseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expertise
     * const expertise = await prisma.expertise.findMany()
     * 
     * // Get first 10 Expertise
     * const expertise = await prisma.expertise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertiseWithIdOnly = await prisma.expertise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertiseFindManyArgs>(args?: SelectSubset<T, ExpertiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expertise.
     * @param {ExpertiseCreateArgs} args - Arguments to create a Expertise.
     * @example
     * // Create one Expertise
     * const Expertise = await prisma.expertise.create({
     *   data: {
     *     // ... data to create a Expertise
     *   }
     * })
     * 
     */
    create<T extends ExpertiseCreateArgs>(args: SelectSubset<T, ExpertiseCreateArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expertise.
     * @param {ExpertiseCreateManyArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertiseCreateManyArgs>(args?: SelectSubset<T, ExpertiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expertise and returns the data saved in the database.
     * @param {ExpertiseCreateManyAndReturnArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertiseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expertise.
     * @param {ExpertiseDeleteArgs} args - Arguments to delete one Expertise.
     * @example
     * // Delete one Expertise
     * const Expertise = await prisma.expertise.delete({
     *   where: {
     *     // ... filter to delete one Expertise
     *   }
     * })
     * 
     */
    delete<T extends ExpertiseDeleteArgs>(args: SelectSubset<T, ExpertiseDeleteArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expertise.
     * @param {ExpertiseUpdateArgs} args - Arguments to update one Expertise.
     * @example
     * // Update one Expertise
     * const expertise = await prisma.expertise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertiseUpdateArgs>(args: SelectSubset<T, ExpertiseUpdateArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expertise.
     * @param {ExpertiseDeleteManyArgs} args - Arguments to filter Expertise to delete.
     * @example
     * // Delete a few Expertise
     * const { count } = await prisma.expertise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertiseDeleteManyArgs>(args?: SelectSubset<T, ExpertiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertiseUpdateManyArgs>(args: SelectSubset<T, ExpertiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise and returns the data updated in the database.
     * @param {ExpertiseUpdateManyAndReturnArgs} args - Arguments to update many Expertise.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpertiseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expertise.
     * @param {ExpertiseUpsertArgs} args - Arguments to update or create a Expertise.
     * @example
     * // Update or create a Expertise
     * const expertise = await prisma.expertise.upsert({
     *   create: {
     *     // ... data to create a Expertise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expertise we want to update
     *   }
     * })
     */
    upsert<T extends ExpertiseUpsertArgs>(args: SelectSubset<T, ExpertiseUpsertArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCountArgs} args - Arguments to filter Expertise to count.
     * @example
     * // Count the number of Expertise
     * const count = await prisma.expertise.count({
     *   where: {
     *     // ... the filter for the Expertise we want to count
     *   }
     * })
    **/
    count<T extends ExpertiseCountArgs>(
      args?: Subset<T, ExpertiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertiseAggregateArgs>(args: Subset<T, ExpertiseAggregateArgs>): Prisma.PrismaPromise<GetExpertiseAggregateType<T>>

    /**
     * Group by Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseGroupByArgs} args - Group by arguments.
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
      T extends ExpertiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertiseGroupByArgs['orderBy'] }
        : { orderBy?: ExpertiseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expertise model
   */
  readonly fields: ExpertiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expertise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    about<T extends AboutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AboutDefaultArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Expertise model
   */ 
  interface ExpertiseFieldRefs {
    readonly id: FieldRef<"Expertise", 'String'>
    readonly path: FieldRef<"Expertise", 'String'>
    readonly aboutId: FieldRef<"Expertise", 'String'>
    readonly createdAt: FieldRef<"Expertise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expertise findUnique
   */
  export type ExpertiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise findUniqueOrThrow
   */
  export type ExpertiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise findFirst
   */
  export type ExpertiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise findFirstOrThrow
   */
  export type ExpertiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise findMany
   */
  export type ExpertiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise create
   */
  export type ExpertiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expertise.
     */
    data: XOR<ExpertiseCreateInput, ExpertiseUncheckedCreateInput>
  }

  /**
   * Expertise createMany
   */
  export type ExpertiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expertise.
     */
    data: ExpertiseCreateManyInput | ExpertiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expertise createManyAndReturn
   */
  export type ExpertiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * The data used to create many Expertise.
     */
    data: ExpertiseCreateManyInput | ExpertiseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expertise update
   */
  export type ExpertiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expertise.
     */
    data: XOR<ExpertiseUpdateInput, ExpertiseUncheckedUpdateInput>
    /**
     * Choose, which Expertise to update.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise updateMany
   */
  export type ExpertiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expertise.
     */
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which Expertise to update
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to update.
     */
    limit?: number
  }

  /**
   * Expertise updateManyAndReturn
   */
  export type ExpertiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * The data used to update Expertise.
     */
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which Expertise to update
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expertise upsert
   */
  export type ExpertiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expertise to update in case it exists.
     */
    where: ExpertiseWhereUniqueInput
    /**
     * In case the Expertise found by the `where` argument doesn't exist, create a new Expertise with this data.
     */
    create: XOR<ExpertiseCreateInput, ExpertiseUncheckedCreateInput>
    /**
     * In case the Expertise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertiseUpdateInput, ExpertiseUncheckedUpdateInput>
  }

  /**
   * Expertise delete
   */
  export type ExpertiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter which Expertise to delete.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise deleteMany
   */
  export type ExpertiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expertise to delete
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to delete.
     */
    limit?: number
  }

  /**
   * Expertise without action
   */
  export type ExpertiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    title: string
    description: string
    icon: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "icon" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      icon: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly icon: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: string | null
    text: string | null
    clientName: string | null
    clientPosition: string | null
    avatar: string | null
    createdAt: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: string | null
    text: string | null
    clientName: string | null
    clientPosition: string | null
    avatar: string | null
    createdAt: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    text: number
    clientName: number
    clientPosition: number
    avatar: number
    createdAt: number
    _all: number
  }


  export type TestimonialMinAggregateInputType = {
    id?: true
    text?: true
    clientName?: true
    clientPosition?: true
    avatar?: true
    createdAt?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    text?: true
    clientName?: true
    clientPosition?: true
    avatar?: true
    createdAt?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    text?: true
    clientName?: true
    clientPosition?: true
    avatar?: true
    createdAt?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: string
    text: string
    clientName: string
    clientPosition: string
    avatar: string
    createdAt: Date
    _count: TestimonialCountAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    clientName?: boolean
    clientPosition?: boolean
    avatar?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    clientName?: boolean
    clientPosition?: boolean
    avatar?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    clientName?: boolean
    clientPosition?: boolean
    avatar?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    text?: boolean
    clientName?: boolean
    clientPosition?: boolean
    avatar?: boolean
    createdAt?: boolean
  }

  export type TestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "clientName" | "clientPosition" | "avatar" | "createdAt", ExtArgs["result"]["testimonial"]>

  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      clientName: string
      clientPosition: string
      avatar: string
      createdAt: Date
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
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
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Testimonial model
   */ 
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'String'>
    readonly text: FieldRef<"Testimonial", 'String'>
    readonly clientName: FieldRef<"Testimonial", 'String'>
    readonly clientPosition: FieldRef<"Testimonial", 'String'>
    readonly avatar: FieldRef<"Testimonial", 'String'>
    readonly createdAt: FieldRef<"Testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial createManyAndReturn
   */
  export type TestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial updateManyAndReturn
   */
  export type TestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
  }


  /**
   * Model Award
   */

  export type AggregateAward = {
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  export type AwardAvgAggregateOutputType = {
    year: number | null
  }

  export type AwardSumAggregateOutputType = {
    year: number | null
  }

  export type AwardMinAggregateOutputType = {
    id: string | null
    title: string | null
    year: number | null
    organization: string | null
    createdAt: Date | null
  }

  export type AwardMaxAggregateOutputType = {
    id: string | null
    title: string | null
    year: number | null
    organization: string | null
    createdAt: Date | null
  }

  export type AwardCountAggregateOutputType = {
    id: number
    title: number
    year: number
    organization: number
    createdAt: number
    _all: number
  }


  export type AwardAvgAggregateInputType = {
    year?: true
  }

  export type AwardSumAggregateInputType = {
    year?: true
  }

  export type AwardMinAggregateInputType = {
    id?: true
    title?: true
    year?: true
    organization?: true
    createdAt?: true
  }

  export type AwardMaxAggregateInputType = {
    id?: true
    title?: true
    year?: true
    organization?: true
    createdAt?: true
  }

  export type AwardCountAggregateInputType = {
    id?: true
    title?: true
    year?: true
    organization?: true
    createdAt?: true
    _all?: true
  }

  export type AwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Award to aggregate.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Awards
    **/
    _count?: true | AwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardMaxAggregateInputType
  }

  export type GetAwardAggregateType<T extends AwardAggregateArgs> = {
        [P in keyof T & keyof AggregateAward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward[P]>
      : GetScalarType<T[P], AggregateAward[P]>
  }




  export type AwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithAggregationInput | AwardOrderByWithAggregationInput[]
    by: AwardScalarFieldEnum[] | AwardScalarFieldEnum
    having?: AwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardCountAggregateInputType | true
    _avg?: AwardAvgAggregateInputType
    _sum?: AwardSumAggregateInputType
    _min?: AwardMinAggregateInputType
    _max?: AwardMaxAggregateInputType
  }

  export type AwardGroupByOutputType = {
    id: string
    title: string
    year: number
    organization: string
    createdAt: Date
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  type GetAwardGroupByPayload<T extends AwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardGroupByOutputType[P]>
            : GetScalarType<T[P], AwardGroupByOutputType[P]>
        }
      >
    >


  export type AwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    organization?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    organization?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    organization?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectScalar = {
    id?: boolean
    title?: boolean
    year?: boolean
    organization?: boolean
    createdAt?: boolean
  }

  export type AwardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "year" | "organization" | "createdAt", ExtArgs["result"]["award"]>

  export type $AwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Award"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      year: number
      organization: string
      createdAt: Date
    }, ExtArgs["result"]["award"]>
    composites: {}
  }

  type AwardGetPayload<S extends boolean | null | undefined | AwardDefaultArgs> = $Result.GetResult<Prisma.$AwardPayload, S>

  type AwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardCountAggregateInputType | true
    }

  export interface AwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Award'], meta: { name: 'Award' } }
    /**
     * Find zero or one Award that matches the filter.
     * @param {AwardFindUniqueArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardFindUniqueArgs>(args: SelectSubset<T, AwardFindUniqueArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardFindUniqueOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardFindFirstArgs>(args?: SelectSubset<T, AwardFindFirstArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awards
     * const awards = await prisma.award.findMany()
     * 
     * // Get first 10 Awards
     * const awards = await prisma.award.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardWithIdOnly = await prisma.award.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardFindManyArgs>(args?: SelectSubset<T, AwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award.
     * @param {AwardCreateArgs} args - Arguments to create a Award.
     * @example
     * // Create one Award
     * const Award = await prisma.award.create({
     *   data: {
     *     // ... data to create a Award
     *   }
     * })
     * 
     */
    create<T extends AwardCreateArgs>(args: SelectSubset<T, AwardCreateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awards.
     * @param {AwardCreateManyArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardCreateManyArgs>(args?: SelectSubset<T, AwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Awards and returns the data saved in the database.
     * @param {AwardCreateManyAndReturnArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award.
     * @param {AwardDeleteArgs} args - Arguments to delete one Award.
     * @example
     * // Delete one Award
     * const Award = await prisma.award.delete({
     *   where: {
     *     // ... filter to delete one Award
     *   }
     * })
     * 
     */
    delete<T extends AwardDeleteArgs>(args: SelectSubset<T, AwardDeleteArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award.
     * @param {AwardUpdateArgs} args - Arguments to update one Award.
     * @example
     * // Update one Award
     * const award = await prisma.award.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardUpdateArgs>(args: SelectSubset<T, AwardUpdateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awards.
     * @param {AwardDeleteManyArgs} args - Arguments to filter Awards to delete.
     * @example
     * // Delete a few Awards
     * const { count } = await prisma.award.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardDeleteManyArgs>(args?: SelectSubset<T, AwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardUpdateManyArgs>(args: SelectSubset<T, AwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards and returns the data updated in the database.
     * @param {AwardUpdateManyAndReturnArgs} args - Arguments to update many Awards.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.updateManyAndReturn({
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
    updateManyAndReturn<T extends AwardUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award.
     * @param {AwardUpsertArgs} args - Arguments to update or create a Award.
     * @example
     * // Update or create a Award
     * const award = await prisma.award.upsert({
     *   create: {
     *     // ... data to create a Award
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award we want to update
     *   }
     * })
     */
    upsert<T extends AwardUpsertArgs>(args: SelectSubset<T, AwardUpsertArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardCountArgs} args - Arguments to filter Awards to count.
     * @example
     * // Count the number of Awards
     * const count = await prisma.award.count({
     *   where: {
     *     // ... the filter for the Awards we want to count
     *   }
     * })
    **/
    count<T extends AwardCountArgs>(
      args?: Subset<T, AwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AwardAggregateArgs>(args: Subset<T, AwardAggregateArgs>): Prisma.PrismaPromise<GetAwardAggregateType<T>>

    /**
     * Group by Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardGroupByArgs} args - Group by arguments.
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
      T extends AwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardGroupByArgs['orderBy'] }
        : { orderBy?: AwardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Award model
   */
  readonly fields: AwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Award.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Award model
   */ 
  interface AwardFieldRefs {
    readonly id: FieldRef<"Award", 'String'>
    readonly title: FieldRef<"Award", 'String'>
    readonly year: FieldRef<"Award", 'Int'>
    readonly organization: FieldRef<"Award", 'String'>
    readonly createdAt: FieldRef<"Award", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Award findUnique
   */
  export type AwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findUniqueOrThrow
   */
  export type AwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findFirst
   */
  export type AwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findFirstOrThrow
   */
  export type AwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findMany
   */
  export type AwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Awards to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award create
   */
  export type AwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data needed to create a Award.
     */
    data: XOR<AwardCreateInput, AwardUncheckedCreateInput>
  }

  /**
   * Award createMany
   */
  export type AwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award createManyAndReturn
   */
  export type AwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award update
   */
  export type AwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data needed to update a Award.
     */
    data: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
    /**
     * Choose, which Award to update.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award updateMany
   */
  export type AwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award updateManyAndReturn
   */
  export type AwardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award upsert
   */
  export type AwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The filter to search for the Award to update in case it exists.
     */
    where: AwardWhereUniqueInput
    /**
     * In case the Award found by the `where` argument doesn't exist, create a new Award with this data.
     */
    create: XOR<AwardCreateInput, AwardUncheckedCreateInput>
    /**
     * In case the Award was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
  }

  /**
   * Award delete
   */
  export type AwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter which Award to delete.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award deleteMany
   */
  export type AwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Awards to delete
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to delete.
     */
    limit?: number
  }

  /**
   * Award without action
   */
  export type AwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: string | null
    address: string | null
    email: string | null
    phone: string | null
    officeHours: string | null
    mapEmbedded: string | null
    createdAt: Date | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: string | null
    address: string | null
    email: string | null
    phone: string | null
    officeHours: string | null
    mapEmbedded: string | null
    createdAt: Date | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    address: number
    email: number
    phone: number
    officeHours: number
    mapEmbedded: number
    createdAt: number
    _all: number
  }


  export type ContactInfoMinAggregateInputType = {
    id?: true
    address?: true
    email?: true
    phone?: true
    officeHours?: true
    mapEmbedded?: true
    createdAt?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    address?: true
    email?: true
    phone?: true
    officeHours?: true
    mapEmbedded?: true
    createdAt?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    address?: true
    email?: true
    phone?: true
    officeHours?: true
    mapEmbedded?: true
    createdAt?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: string
    address: string
    email: string
    phone: string
    officeHours: string
    mapEmbedded: string
    createdAt: Date
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    officeHours?: boolean
    mapEmbedded?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    officeHours?: boolean
    mapEmbedded?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    officeHours?: boolean
    mapEmbedded?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectScalar = {
    id?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    officeHours?: boolean
    mapEmbedded?: boolean
    createdAt?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "email" | "phone" | "officeHours" | "mapEmbedded" | "createdAt", ExtArgs["result"]["contactInfo"]>

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      email: string
      phone: string
      officeHours: string
      mapEmbedded: string
      createdAt: Date
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfos and returns the data saved in the database.
     * @param {ContactInfoCreateManyAndReturnArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos and returns the data updated in the database.
     * @param {ContactInfoUpdateManyAndReturnArgs} args - Arguments to update many ContactInfos.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
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
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactInfo model
   */ 
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'String'>
    readonly address: FieldRef<"ContactInfo", 'String'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly phone: FieldRef<"ContactInfo", 'String'>
    readonly officeHours: FieldRef<"ContactInfo", 'String'>
    readonly mapEmbedded: FieldRef<"ContactInfo", 'String'>
    readonly createdAt: FieldRef<"ContactInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo createManyAndReturn
   */
  export type ContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo updateManyAndReturn
   */
  export type ContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
  }


  /**
   * Model SocialMedia
   */

  export type AggregateSocialMedia = {
    _count: SocialMediaCountAggregateOutputType | null
    _min: SocialMediaMinAggregateOutputType | null
    _max: SocialMediaMaxAggregateOutputType | null
  }

  export type SocialMediaMinAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    createdAt: Date | null
  }

  export type SocialMediaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    text: string | null
    createdAt: Date | null
  }

  export type SocialMediaCountAggregateOutputType = {
    id: number
    title: number
    text: number
    createdAt: number
    _all: number
  }


  export type SocialMediaMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
  }

  export type SocialMediaMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
  }

  export type SocialMediaCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type SocialMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMedia to aggregate.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialMedias
    **/
    _count?: true | SocialMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMediaMaxAggregateInputType
  }

  export type GetSocialMediaAggregateType<T extends SocialMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialMedia[P]>
      : GetScalarType<T[P], AggregateSocialMedia[P]>
  }




  export type SocialMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMediaWhereInput
    orderBy?: SocialMediaOrderByWithAggregationInput | SocialMediaOrderByWithAggregationInput[]
    by: SocialMediaScalarFieldEnum[] | SocialMediaScalarFieldEnum
    having?: SocialMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialMediaCountAggregateInputType | true
    _min?: SocialMediaMinAggregateInputType
    _max?: SocialMediaMaxAggregateInputType
  }

  export type SocialMediaGroupByOutputType = {
    id: string
    title: string
    text: string
    createdAt: Date
    _count: SocialMediaCountAggregateOutputType | null
    _min: SocialMediaMinAggregateOutputType | null
    _max: SocialMediaMaxAggregateOutputType | null
  }

  type GetSocialMediaGroupByPayload<T extends SocialMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialMediaGroupByOutputType[P]>
            : GetScalarType<T[P], SocialMediaGroupByOutputType[P]>
        }
      >
    >


  export type SocialMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["socialMedia"]>

  export type SocialMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["socialMedia"]>

  export type SocialMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["socialMedia"]>

  export type SocialMediaSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type SocialMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "createdAt", ExtArgs["result"]["socialMedia"]>

  export type $SocialMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialMedia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["socialMedia"]>
    composites: {}
  }

  type SocialMediaGetPayload<S extends boolean | null | undefined | SocialMediaDefaultArgs> = $Result.GetResult<Prisma.$SocialMediaPayload, S>

  type SocialMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialMediaCountAggregateInputType | true
    }

  export interface SocialMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialMedia'], meta: { name: 'SocialMedia' } }
    /**
     * Find zero or one SocialMedia that matches the filter.
     * @param {SocialMediaFindUniqueArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialMediaFindUniqueArgs>(args: SelectSubset<T, SocialMediaFindUniqueArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialMediaFindUniqueOrThrowArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaFindFirstArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialMediaFindFirstArgs>(args?: SelectSubset<T, SocialMediaFindFirstArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaFindFirstOrThrowArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialMedias
     * const socialMedias = await prisma.socialMedia.findMany()
     * 
     * // Get first 10 SocialMedias
     * const socialMedias = await prisma.socialMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialMediaWithIdOnly = await prisma.socialMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialMediaFindManyArgs>(args?: SelectSubset<T, SocialMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialMedia.
     * @param {SocialMediaCreateArgs} args - Arguments to create a SocialMedia.
     * @example
     * // Create one SocialMedia
     * const SocialMedia = await prisma.socialMedia.create({
     *   data: {
     *     // ... data to create a SocialMedia
     *   }
     * })
     * 
     */
    create<T extends SocialMediaCreateArgs>(args: SelectSubset<T, SocialMediaCreateArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialMedias.
     * @param {SocialMediaCreateManyArgs} args - Arguments to create many SocialMedias.
     * @example
     * // Create many SocialMedias
     * const socialMedia = await prisma.socialMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialMediaCreateManyArgs>(args?: SelectSubset<T, SocialMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialMedias and returns the data saved in the database.
     * @param {SocialMediaCreateManyAndReturnArgs} args - Arguments to create many SocialMedias.
     * @example
     * // Create many SocialMedias
     * const socialMedia = await prisma.socialMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialMedias and only return the `id`
     * const socialMediaWithIdOnly = await prisma.socialMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialMedia.
     * @param {SocialMediaDeleteArgs} args - Arguments to delete one SocialMedia.
     * @example
     * // Delete one SocialMedia
     * const SocialMedia = await prisma.socialMedia.delete({
     *   where: {
     *     // ... filter to delete one SocialMedia
     *   }
     * })
     * 
     */
    delete<T extends SocialMediaDeleteArgs>(args: SelectSubset<T, SocialMediaDeleteArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialMedia.
     * @param {SocialMediaUpdateArgs} args - Arguments to update one SocialMedia.
     * @example
     * // Update one SocialMedia
     * const socialMedia = await prisma.socialMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialMediaUpdateArgs>(args: SelectSubset<T, SocialMediaUpdateArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialMedias.
     * @param {SocialMediaDeleteManyArgs} args - Arguments to filter SocialMedias to delete.
     * @example
     * // Delete a few SocialMedias
     * const { count } = await prisma.socialMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialMediaDeleteManyArgs>(args?: SelectSubset<T, SocialMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialMedias
     * const socialMedia = await prisma.socialMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialMediaUpdateManyArgs>(args: SelectSubset<T, SocialMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMedias and returns the data updated in the database.
     * @param {SocialMediaUpdateManyAndReturnArgs} args - Arguments to update many SocialMedias.
     * @example
     * // Update many SocialMedias
     * const socialMedia = await prisma.socialMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialMedias and only return the `id`
     * const socialMediaWithIdOnly = await prisma.socialMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialMedia.
     * @param {SocialMediaUpsertArgs} args - Arguments to update or create a SocialMedia.
     * @example
     * // Update or create a SocialMedia
     * const socialMedia = await prisma.socialMedia.upsert({
     *   create: {
     *     // ... data to create a SocialMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialMedia we want to update
     *   }
     * })
     */
    upsert<T extends SocialMediaUpsertArgs>(args: SelectSubset<T, SocialMediaUpsertArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaCountArgs} args - Arguments to filter SocialMedias to count.
     * @example
     * // Count the number of SocialMedias
     * const count = await prisma.socialMedia.count({
     *   where: {
     *     // ... the filter for the SocialMedias we want to count
     *   }
     * })
    **/
    count<T extends SocialMediaCountArgs>(
      args?: Subset<T, SocialMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialMediaAggregateArgs>(args: Subset<T, SocialMediaAggregateArgs>): Prisma.PrismaPromise<GetSocialMediaAggregateType<T>>

    /**
     * Group by SocialMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaGroupByArgs} args - Group by arguments.
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
      T extends SocialMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialMediaGroupByArgs['orderBy'] }
        : { orderBy?: SocialMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialMedia model
   */
  readonly fields: SocialMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SocialMedia model
   */ 
  interface SocialMediaFieldRefs {
    readonly id: FieldRef<"SocialMedia", 'String'>
    readonly title: FieldRef<"SocialMedia", 'String'>
    readonly text: FieldRef<"SocialMedia", 'String'>
    readonly createdAt: FieldRef<"SocialMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialMedia findUnique
   */
  export type SocialMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where: SocialMediaWhereUniqueInput
  }

  /**
   * SocialMedia findUniqueOrThrow
   */
  export type SocialMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where: SocialMediaWhereUniqueInput
  }

  /**
   * SocialMedia findFirst
   */
  export type SocialMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMedias.
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMedias.
     */
    distinct?: SocialMediaScalarFieldEnum | SocialMediaScalarFieldEnum[]
  }

  /**
   * SocialMedia findFirstOrThrow
   */
  export type SocialMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMedias.
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMedias.
     */
    distinct?: SocialMediaScalarFieldEnum | SocialMediaScalarFieldEnum[]
  }

  /**
   * SocialMedia findMany
   */
  export type SocialMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Filter, which SocialMedias to fetch.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialMedias.
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    distinct?: SocialMediaScalarFieldEnum | SocialMediaScalarFieldEnum[]
  }

  /**
   * SocialMedia create
   */
  export type SocialMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * The data needed to create a SocialMedia.
     */
    data: XOR<SocialMediaCreateInput, SocialMediaUncheckedCreateInput>
  }

  /**
   * SocialMedia createMany
   */
  export type SocialMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialMedias.
     */
    data: SocialMediaCreateManyInput | SocialMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialMedia createManyAndReturn
   */
  export type SocialMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * The data used to create many SocialMedias.
     */
    data: SocialMediaCreateManyInput | SocialMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialMedia update
   */
  export type SocialMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * The data needed to update a SocialMedia.
     */
    data: XOR<SocialMediaUpdateInput, SocialMediaUncheckedUpdateInput>
    /**
     * Choose, which SocialMedia to update.
     */
    where: SocialMediaWhereUniqueInput
  }

  /**
   * SocialMedia updateMany
   */
  export type SocialMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialMedias.
     */
    data: XOR<SocialMediaUpdateManyMutationInput, SocialMediaUncheckedUpdateManyInput>
    /**
     * Filter which SocialMedias to update
     */
    where?: SocialMediaWhereInput
    /**
     * Limit how many SocialMedias to update.
     */
    limit?: number
  }

  /**
   * SocialMedia updateManyAndReturn
   */
  export type SocialMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * The data used to update SocialMedias.
     */
    data: XOR<SocialMediaUpdateManyMutationInput, SocialMediaUncheckedUpdateManyInput>
    /**
     * Filter which SocialMedias to update
     */
    where?: SocialMediaWhereInput
    /**
     * Limit how many SocialMedias to update.
     */
    limit?: number
  }

  /**
   * SocialMedia upsert
   */
  export type SocialMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * The filter to search for the SocialMedia to update in case it exists.
     */
    where: SocialMediaWhereUniqueInput
    /**
     * In case the SocialMedia found by the `where` argument doesn't exist, create a new SocialMedia with this data.
     */
    create: XOR<SocialMediaCreateInput, SocialMediaUncheckedCreateInput>
    /**
     * In case the SocialMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialMediaUpdateInput, SocialMediaUncheckedUpdateInput>
  }

  /**
   * SocialMedia delete
   */
  export type SocialMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Filter which SocialMedia to delete.
     */
    where: SocialMediaWhereUniqueInput
  }

  /**
   * SocialMedia deleteMany
   */
  export type SocialMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMedias to delete
     */
    where?: SocialMediaWhereInput
    /**
     * Limit how many SocialMedias to delete.
     */
    limit?: number
  }

  /**
   * SocialMedia without action
   */
  export type SocialMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
  }


  /**
   * Model FormType
   */

  export type AggregateFormType = {
    _count: FormTypeCountAggregateOutputType | null
    _min: FormTypeMinAggregateOutputType | null
    _max: FormTypeMaxAggregateOutputType | null
  }

  export type FormTypeMinAggregateOutputType = {
    id: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type FormTypeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type FormTypeCountAggregateOutputType = {
    id: number
    title: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type FormTypeMinAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
  }

  export type FormTypeMaxAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
  }

  export type FormTypeCountAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type FormTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormType to aggregate.
     */
    where?: FormTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTypes to fetch.
     */
    orderBy?: FormTypeOrderByWithRelationInput | FormTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormTypes
    **/
    _count?: true | FormTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormTypeMaxAggregateInputType
  }

  export type GetFormTypeAggregateType<T extends FormTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFormType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormType[P]>
      : GetScalarType<T[P], AggregateFormType[P]>
  }




  export type FormTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormTypeWhereInput
    orderBy?: FormTypeOrderByWithAggregationInput | FormTypeOrderByWithAggregationInput[]
    by: FormTypeScalarFieldEnum[] | FormTypeScalarFieldEnum
    having?: FormTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormTypeCountAggregateInputType | true
    _min?: FormTypeMinAggregateInputType
    _max?: FormTypeMaxAggregateInputType
  }

  export type FormTypeGroupByOutputType = {
    id: string
    title: string
    isActive: boolean
    createdAt: Date
    _count: FormTypeCountAggregateOutputType | null
    _min: FormTypeMinAggregateOutputType | null
    _max: FormTypeMaxAggregateOutputType | null
  }

  type GetFormTypeGroupByPayload<T extends FormTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormTypeGroupByOutputType[P]>
            : GetScalarType<T[P], FormTypeGroupByOutputType[P]>
        }
      >
    >


  export type FormTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    Form?: boolean | FormType$FormArgs<ExtArgs>
    _count?: boolean | FormTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formType"]>

  export type FormTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formType"]>

  export type FormTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formType"]>

  export type FormTypeSelectScalar = {
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type FormTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isActive" | "createdAt", ExtArgs["result"]["formType"]>
  export type FormTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Form?: boolean | FormType$FormArgs<ExtArgs>
    _count?: boolean | FormTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormType"
    objects: {
      Form: Prisma.$FormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["formType"]>
    composites: {}
  }

  type FormTypeGetPayload<S extends boolean | null | undefined | FormTypeDefaultArgs> = $Result.GetResult<Prisma.$FormTypePayload, S>

  type FormTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormTypeCountAggregateInputType | true
    }

  export interface FormTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormType'], meta: { name: 'FormType' } }
    /**
     * Find zero or one FormType that matches the filter.
     * @param {FormTypeFindUniqueArgs} args - Arguments to find a FormType
     * @example
     * // Get one FormType
     * const formType = await prisma.formType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormTypeFindUniqueArgs>(args: SelectSubset<T, FormTypeFindUniqueArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormTypeFindUniqueOrThrowArgs} args - Arguments to find a FormType
     * @example
     * // Get one FormType
     * const formType = await prisma.formType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, FormTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTypeFindFirstArgs} args - Arguments to find a FormType
     * @example
     * // Get one FormType
     * const formType = await prisma.formType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormTypeFindFirstArgs>(args?: SelectSubset<T, FormTypeFindFirstArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTypeFindFirstOrThrowArgs} args - Arguments to find a FormType
     * @example
     * // Get one FormType
     * const formType = await prisma.formType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, FormTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormTypes
     * const formTypes = await prisma.formType.findMany()
     * 
     * // Get first 10 FormTypes
     * const formTypes = await prisma.formType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formTypeWithIdOnly = await prisma.formType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormTypeFindManyArgs>(args?: SelectSubset<T, FormTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormType.
     * @param {FormTypeCreateArgs} args - Arguments to create a FormType.
     * @example
     * // Create one FormType
     * const FormType = await prisma.formType.create({
     *   data: {
     *     // ... data to create a FormType
     *   }
     * })
     * 
     */
    create<T extends FormTypeCreateArgs>(args: SelectSubset<T, FormTypeCreateArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormTypes.
     * @param {FormTypeCreateManyArgs} args - Arguments to create many FormTypes.
     * @example
     * // Create many FormTypes
     * const formType = await prisma.formType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormTypeCreateManyArgs>(args?: SelectSubset<T, FormTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormTypes and returns the data saved in the database.
     * @param {FormTypeCreateManyAndReturnArgs} args - Arguments to create many FormTypes.
     * @example
     * // Create many FormTypes
     * const formType = await prisma.formType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormTypes and only return the `id`
     * const formTypeWithIdOnly = await prisma.formType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, FormTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormType.
     * @param {FormTypeDeleteArgs} args - Arguments to delete one FormType.
     * @example
     * // Delete one FormType
     * const FormType = await prisma.formType.delete({
     *   where: {
     *     // ... filter to delete one FormType
     *   }
     * })
     * 
     */
    delete<T extends FormTypeDeleteArgs>(args: SelectSubset<T, FormTypeDeleteArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormType.
     * @param {FormTypeUpdateArgs} args - Arguments to update one FormType.
     * @example
     * // Update one FormType
     * const formType = await prisma.formType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormTypeUpdateArgs>(args: SelectSubset<T, FormTypeUpdateArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormTypes.
     * @param {FormTypeDeleteManyArgs} args - Arguments to filter FormTypes to delete.
     * @example
     * // Delete a few FormTypes
     * const { count } = await prisma.formType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormTypeDeleteManyArgs>(args?: SelectSubset<T, FormTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormTypes
     * const formType = await prisma.formType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormTypeUpdateManyArgs>(args: SelectSubset<T, FormTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormTypes and returns the data updated in the database.
     * @param {FormTypeUpdateManyAndReturnArgs} args - Arguments to update many FormTypes.
     * @example
     * // Update many FormTypes
     * const formType = await prisma.formType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormTypes and only return the `id`
     * const formTypeWithIdOnly = await prisma.formType.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, FormTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormType.
     * @param {FormTypeUpsertArgs} args - Arguments to update or create a FormType.
     * @example
     * // Update or create a FormType
     * const formType = await prisma.formType.upsert({
     *   create: {
     *     // ... data to create a FormType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormType we want to update
     *   }
     * })
     */
    upsert<T extends FormTypeUpsertArgs>(args: SelectSubset<T, FormTypeUpsertArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTypeCountArgs} args - Arguments to filter FormTypes to count.
     * @example
     * // Count the number of FormTypes
     * const count = await prisma.formType.count({
     *   where: {
     *     // ... the filter for the FormTypes we want to count
     *   }
     * })
    **/
    count<T extends FormTypeCountArgs>(
      args?: Subset<T, FormTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormTypeAggregateArgs>(args: Subset<T, FormTypeAggregateArgs>): Prisma.PrismaPromise<GetFormTypeAggregateType<T>>

    /**
     * Group by FormType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTypeGroupByArgs} args - Group by arguments.
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
      T extends FormTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormTypeGroupByArgs['orderBy'] }
        : { orderBy?: FormTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormType model
   */
  readonly fields: FormTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Form<T extends FormType$FormArgs<ExtArgs> = {}>(args?: Subset<T, FormType$FormArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FormType model
   */ 
  interface FormTypeFieldRefs {
    readonly id: FieldRef<"FormType", 'String'>
    readonly title: FieldRef<"FormType", 'String'>
    readonly isActive: FieldRef<"FormType", 'Boolean'>
    readonly createdAt: FieldRef<"FormType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormType findUnique
   */
  export type FormTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * Filter, which FormType to fetch.
     */
    where: FormTypeWhereUniqueInput
  }

  /**
   * FormType findUniqueOrThrow
   */
  export type FormTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * Filter, which FormType to fetch.
     */
    where: FormTypeWhereUniqueInput
  }

  /**
   * FormType findFirst
   */
  export type FormTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * Filter, which FormType to fetch.
     */
    where?: FormTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTypes to fetch.
     */
    orderBy?: FormTypeOrderByWithRelationInput | FormTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormTypes.
     */
    cursor?: FormTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormTypes.
     */
    distinct?: FormTypeScalarFieldEnum | FormTypeScalarFieldEnum[]
  }

  /**
   * FormType findFirstOrThrow
   */
  export type FormTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * Filter, which FormType to fetch.
     */
    where?: FormTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTypes to fetch.
     */
    orderBy?: FormTypeOrderByWithRelationInput | FormTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormTypes.
     */
    cursor?: FormTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormTypes.
     */
    distinct?: FormTypeScalarFieldEnum | FormTypeScalarFieldEnum[]
  }

  /**
   * FormType findMany
   */
  export type FormTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * Filter, which FormTypes to fetch.
     */
    where?: FormTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTypes to fetch.
     */
    orderBy?: FormTypeOrderByWithRelationInput | FormTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormTypes.
     */
    cursor?: FormTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTypes.
     */
    skip?: number
    distinct?: FormTypeScalarFieldEnum | FormTypeScalarFieldEnum[]
  }

  /**
   * FormType create
   */
  export type FormTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a FormType.
     */
    data: XOR<FormTypeCreateInput, FormTypeUncheckedCreateInput>
  }

  /**
   * FormType createMany
   */
  export type FormTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormTypes.
     */
    data: FormTypeCreateManyInput | FormTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormType createManyAndReturn
   */
  export type FormTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * The data used to create many FormTypes.
     */
    data: FormTypeCreateManyInput | FormTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormType update
   */
  export type FormTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a FormType.
     */
    data: XOR<FormTypeUpdateInput, FormTypeUncheckedUpdateInput>
    /**
     * Choose, which FormType to update.
     */
    where: FormTypeWhereUniqueInput
  }

  /**
   * FormType updateMany
   */
  export type FormTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormTypes.
     */
    data: XOR<FormTypeUpdateManyMutationInput, FormTypeUncheckedUpdateManyInput>
    /**
     * Filter which FormTypes to update
     */
    where?: FormTypeWhereInput
    /**
     * Limit how many FormTypes to update.
     */
    limit?: number
  }

  /**
   * FormType updateManyAndReturn
   */
  export type FormTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * The data used to update FormTypes.
     */
    data: XOR<FormTypeUpdateManyMutationInput, FormTypeUncheckedUpdateManyInput>
    /**
     * Filter which FormTypes to update
     */
    where?: FormTypeWhereInput
    /**
     * Limit how many FormTypes to update.
     */
    limit?: number
  }

  /**
   * FormType upsert
   */
  export type FormTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the FormType to update in case it exists.
     */
    where: FormTypeWhereUniqueInput
    /**
     * In case the FormType found by the `where` argument doesn't exist, create a new FormType with this data.
     */
    create: XOR<FormTypeCreateInput, FormTypeUncheckedCreateInput>
    /**
     * In case the FormType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormTypeUpdateInput, FormTypeUncheckedUpdateInput>
  }

  /**
   * FormType delete
   */
  export type FormTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
    /**
     * Filter which FormType to delete.
     */
    where: FormTypeWhereUniqueInput
  }

  /**
   * FormType deleteMany
   */
  export type FormTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormTypes to delete
     */
    where?: FormTypeWhereInput
    /**
     * Limit how many FormTypes to delete.
     */
    limit?: number
  }

  /**
   * FormType.Form
   */
  export type FormType$FormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * FormType without action
   */
  export type FormTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormType
     */
    select?: FormTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormType
     */
    omit?: FormTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTypeInclude<ExtArgs> | null
  }


  /**
   * Model FormBudget
   */

  export type AggregateFormBudget = {
    _count: FormBudgetCountAggregateOutputType | null
    _min: FormBudgetMinAggregateOutputType | null
    _max: FormBudgetMaxAggregateOutputType | null
  }

  export type FormBudgetMinAggregateOutputType = {
    id: string | null
    text: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type FormBudgetMaxAggregateOutputType = {
    id: string | null
    text: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type FormBudgetCountAggregateOutputType = {
    id: number
    text: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type FormBudgetMinAggregateInputType = {
    id?: true
    text?: true
    isActive?: true
    createdAt?: true
  }

  export type FormBudgetMaxAggregateInputType = {
    id?: true
    text?: true
    isActive?: true
    createdAt?: true
  }

  export type FormBudgetCountAggregateInputType = {
    id?: true
    text?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type FormBudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormBudget to aggregate.
     */
    where?: FormBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormBudgets to fetch.
     */
    orderBy?: FormBudgetOrderByWithRelationInput | FormBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormBudgets
    **/
    _count?: true | FormBudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormBudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormBudgetMaxAggregateInputType
  }

  export type GetFormBudgetAggregateType<T extends FormBudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateFormBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormBudget[P]>
      : GetScalarType<T[P], AggregateFormBudget[P]>
  }




  export type FormBudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormBudgetWhereInput
    orderBy?: FormBudgetOrderByWithAggregationInput | FormBudgetOrderByWithAggregationInput[]
    by: FormBudgetScalarFieldEnum[] | FormBudgetScalarFieldEnum
    having?: FormBudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormBudgetCountAggregateInputType | true
    _min?: FormBudgetMinAggregateInputType
    _max?: FormBudgetMaxAggregateInputType
  }

  export type FormBudgetGroupByOutputType = {
    id: string
    text: string
    isActive: boolean
    createdAt: Date
    _count: FormBudgetCountAggregateOutputType | null
    _min: FormBudgetMinAggregateOutputType | null
    _max: FormBudgetMaxAggregateOutputType | null
  }

  type GetFormBudgetGroupByPayload<T extends FormBudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormBudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormBudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormBudgetGroupByOutputType[P]>
            : GetScalarType<T[P], FormBudgetGroupByOutputType[P]>
        }
      >
    >


  export type FormBudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isActive?: boolean
    createdAt?: boolean
    Form?: boolean | FormBudget$FormArgs<ExtArgs>
    _count?: boolean | FormBudgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formBudget"]>

  export type FormBudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formBudget"]>

  export type FormBudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formBudget"]>

  export type FormBudgetSelectScalar = {
    id?: boolean
    text?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type FormBudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isActive" | "createdAt", ExtArgs["result"]["formBudget"]>
  export type FormBudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Form?: boolean | FormBudget$FormArgs<ExtArgs>
    _count?: boolean | FormBudgetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormBudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormBudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormBudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormBudget"
    objects: {
      Form: Prisma.$FormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["formBudget"]>
    composites: {}
  }

  type FormBudgetGetPayload<S extends boolean | null | undefined | FormBudgetDefaultArgs> = $Result.GetResult<Prisma.$FormBudgetPayload, S>

  type FormBudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormBudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormBudgetCountAggregateInputType | true
    }

  export interface FormBudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormBudget'], meta: { name: 'FormBudget' } }
    /**
     * Find zero or one FormBudget that matches the filter.
     * @param {FormBudgetFindUniqueArgs} args - Arguments to find a FormBudget
     * @example
     * // Get one FormBudget
     * const formBudget = await prisma.formBudget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormBudgetFindUniqueArgs>(args: SelectSubset<T, FormBudgetFindUniqueArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormBudget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormBudgetFindUniqueOrThrowArgs} args - Arguments to find a FormBudget
     * @example
     * // Get one FormBudget
     * const formBudget = await prisma.formBudget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormBudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, FormBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormBudget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormBudgetFindFirstArgs} args - Arguments to find a FormBudget
     * @example
     * // Get one FormBudget
     * const formBudget = await prisma.formBudget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormBudgetFindFirstArgs>(args?: SelectSubset<T, FormBudgetFindFirstArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormBudget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormBudgetFindFirstOrThrowArgs} args - Arguments to find a FormBudget
     * @example
     * // Get one FormBudget
     * const formBudget = await prisma.formBudget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormBudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, FormBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormBudgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormBudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormBudgets
     * const formBudgets = await prisma.formBudget.findMany()
     * 
     * // Get first 10 FormBudgets
     * const formBudgets = await prisma.formBudget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formBudgetWithIdOnly = await prisma.formBudget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormBudgetFindManyArgs>(args?: SelectSubset<T, FormBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormBudget.
     * @param {FormBudgetCreateArgs} args - Arguments to create a FormBudget.
     * @example
     * // Create one FormBudget
     * const FormBudget = await prisma.formBudget.create({
     *   data: {
     *     // ... data to create a FormBudget
     *   }
     * })
     * 
     */
    create<T extends FormBudgetCreateArgs>(args: SelectSubset<T, FormBudgetCreateArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormBudgets.
     * @param {FormBudgetCreateManyArgs} args - Arguments to create many FormBudgets.
     * @example
     * // Create many FormBudgets
     * const formBudget = await prisma.formBudget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormBudgetCreateManyArgs>(args?: SelectSubset<T, FormBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormBudgets and returns the data saved in the database.
     * @param {FormBudgetCreateManyAndReturnArgs} args - Arguments to create many FormBudgets.
     * @example
     * // Create many FormBudgets
     * const formBudget = await prisma.formBudget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormBudgets and only return the `id`
     * const formBudgetWithIdOnly = await prisma.formBudget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormBudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, FormBudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormBudget.
     * @param {FormBudgetDeleteArgs} args - Arguments to delete one FormBudget.
     * @example
     * // Delete one FormBudget
     * const FormBudget = await prisma.formBudget.delete({
     *   where: {
     *     // ... filter to delete one FormBudget
     *   }
     * })
     * 
     */
    delete<T extends FormBudgetDeleteArgs>(args: SelectSubset<T, FormBudgetDeleteArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormBudget.
     * @param {FormBudgetUpdateArgs} args - Arguments to update one FormBudget.
     * @example
     * // Update one FormBudget
     * const formBudget = await prisma.formBudget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormBudgetUpdateArgs>(args: SelectSubset<T, FormBudgetUpdateArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormBudgets.
     * @param {FormBudgetDeleteManyArgs} args - Arguments to filter FormBudgets to delete.
     * @example
     * // Delete a few FormBudgets
     * const { count } = await prisma.formBudget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormBudgetDeleteManyArgs>(args?: SelectSubset<T, FormBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormBudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormBudgets
     * const formBudget = await prisma.formBudget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormBudgetUpdateManyArgs>(args: SelectSubset<T, FormBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormBudgets and returns the data updated in the database.
     * @param {FormBudgetUpdateManyAndReturnArgs} args - Arguments to update many FormBudgets.
     * @example
     * // Update many FormBudgets
     * const formBudget = await prisma.formBudget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormBudgets and only return the `id`
     * const formBudgetWithIdOnly = await prisma.formBudget.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormBudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, FormBudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormBudget.
     * @param {FormBudgetUpsertArgs} args - Arguments to update or create a FormBudget.
     * @example
     * // Update or create a FormBudget
     * const formBudget = await prisma.formBudget.upsert({
     *   create: {
     *     // ... data to create a FormBudget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormBudget we want to update
     *   }
     * })
     */
    upsert<T extends FormBudgetUpsertArgs>(args: SelectSubset<T, FormBudgetUpsertArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormBudgetCountArgs} args - Arguments to filter FormBudgets to count.
     * @example
     * // Count the number of FormBudgets
     * const count = await prisma.formBudget.count({
     *   where: {
     *     // ... the filter for the FormBudgets we want to count
     *   }
     * })
    **/
    count<T extends FormBudgetCountArgs>(
      args?: Subset<T, FormBudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormBudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormBudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormBudgetAggregateArgs>(args: Subset<T, FormBudgetAggregateArgs>): Prisma.PrismaPromise<GetFormBudgetAggregateType<T>>

    /**
     * Group by FormBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormBudgetGroupByArgs} args - Group by arguments.
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
      T extends FormBudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormBudgetGroupByArgs['orderBy'] }
        : { orderBy?: FormBudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormBudget model
   */
  readonly fields: FormBudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormBudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Form<T extends FormBudget$FormArgs<ExtArgs> = {}>(args?: Subset<T, FormBudget$FormArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FormBudget model
   */ 
  interface FormBudgetFieldRefs {
    readonly id: FieldRef<"FormBudget", 'String'>
    readonly text: FieldRef<"FormBudget", 'String'>
    readonly isActive: FieldRef<"FormBudget", 'Boolean'>
    readonly createdAt: FieldRef<"FormBudget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormBudget findUnique
   */
  export type FormBudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * Filter, which FormBudget to fetch.
     */
    where: FormBudgetWhereUniqueInput
  }

  /**
   * FormBudget findUniqueOrThrow
   */
  export type FormBudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * Filter, which FormBudget to fetch.
     */
    where: FormBudgetWhereUniqueInput
  }

  /**
   * FormBudget findFirst
   */
  export type FormBudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * Filter, which FormBudget to fetch.
     */
    where?: FormBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormBudgets to fetch.
     */
    orderBy?: FormBudgetOrderByWithRelationInput | FormBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormBudgets.
     */
    cursor?: FormBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormBudgets.
     */
    distinct?: FormBudgetScalarFieldEnum | FormBudgetScalarFieldEnum[]
  }

  /**
   * FormBudget findFirstOrThrow
   */
  export type FormBudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * Filter, which FormBudget to fetch.
     */
    where?: FormBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormBudgets to fetch.
     */
    orderBy?: FormBudgetOrderByWithRelationInput | FormBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormBudgets.
     */
    cursor?: FormBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormBudgets.
     */
    distinct?: FormBudgetScalarFieldEnum | FormBudgetScalarFieldEnum[]
  }

  /**
   * FormBudget findMany
   */
  export type FormBudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * Filter, which FormBudgets to fetch.
     */
    where?: FormBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormBudgets to fetch.
     */
    orderBy?: FormBudgetOrderByWithRelationInput | FormBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormBudgets.
     */
    cursor?: FormBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormBudgets.
     */
    skip?: number
    distinct?: FormBudgetScalarFieldEnum | FormBudgetScalarFieldEnum[]
  }

  /**
   * FormBudget create
   */
  export type FormBudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a FormBudget.
     */
    data: XOR<FormBudgetCreateInput, FormBudgetUncheckedCreateInput>
  }

  /**
   * FormBudget createMany
   */
  export type FormBudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormBudgets.
     */
    data: FormBudgetCreateManyInput | FormBudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormBudget createManyAndReturn
   */
  export type FormBudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * The data used to create many FormBudgets.
     */
    data: FormBudgetCreateManyInput | FormBudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormBudget update
   */
  export type FormBudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a FormBudget.
     */
    data: XOR<FormBudgetUpdateInput, FormBudgetUncheckedUpdateInput>
    /**
     * Choose, which FormBudget to update.
     */
    where: FormBudgetWhereUniqueInput
  }

  /**
   * FormBudget updateMany
   */
  export type FormBudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormBudgets.
     */
    data: XOR<FormBudgetUpdateManyMutationInput, FormBudgetUncheckedUpdateManyInput>
    /**
     * Filter which FormBudgets to update
     */
    where?: FormBudgetWhereInput
    /**
     * Limit how many FormBudgets to update.
     */
    limit?: number
  }

  /**
   * FormBudget updateManyAndReturn
   */
  export type FormBudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * The data used to update FormBudgets.
     */
    data: XOR<FormBudgetUpdateManyMutationInput, FormBudgetUncheckedUpdateManyInput>
    /**
     * Filter which FormBudgets to update
     */
    where?: FormBudgetWhereInput
    /**
     * Limit how many FormBudgets to update.
     */
    limit?: number
  }

  /**
   * FormBudget upsert
   */
  export type FormBudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the FormBudget to update in case it exists.
     */
    where: FormBudgetWhereUniqueInput
    /**
     * In case the FormBudget found by the `where` argument doesn't exist, create a new FormBudget with this data.
     */
    create: XOR<FormBudgetCreateInput, FormBudgetUncheckedCreateInput>
    /**
     * In case the FormBudget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormBudgetUpdateInput, FormBudgetUncheckedUpdateInput>
  }

  /**
   * FormBudget delete
   */
  export type FormBudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    /**
     * Filter which FormBudget to delete.
     */
    where: FormBudgetWhereUniqueInput
  }

  /**
   * FormBudget deleteMany
   */
  export type FormBudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormBudgets to delete
     */
    where?: FormBudgetWhereInput
    /**
     * Limit how many FormBudgets to delete.
     */
    limit?: number
  }

  /**
   * FormBudget.Form
   */
  export type FormBudget$FormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * FormBudget without action
   */
  export type FormBudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
  }


  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    subject: string | null
    body: string | null
    email: string | null
    typeId: string | null
    budgetId: string | null
    createdAt: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    body: string | null
    email: string | null
    typeId: string | null
    budgetId: string | null
    createdAt: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    subject: number
    body: number
    email: number
    typeId: number
    budgetId: number
    createdAt: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    subject?: true
    body?: true
    email?: true
    typeId?: true
    budgetId?: true
    createdAt?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    subject?: true
    body?: true
    email?: true
    typeId?: true
    budgetId?: true
    createdAt?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    subject?: true
    body?: true
    email?: true
    typeId?: true
    budgetId?: true
    createdAt?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    subject: string
    body: string
    email: string
    typeId: string
    budgetId: string | null
    createdAt: Date
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    body?: boolean
    email?: boolean
    typeId?: boolean
    budgetId?: boolean
    createdAt?: boolean
    type?: boolean | FormTypeDefaultArgs<ExtArgs>
    budget?: boolean | Form$budgetArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    body?: boolean
    email?: boolean
    typeId?: boolean
    budgetId?: boolean
    createdAt?: boolean
    type?: boolean | FormTypeDefaultArgs<ExtArgs>
    budget?: boolean | Form$budgetArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    body?: boolean
    email?: boolean
    typeId?: boolean
    budgetId?: boolean
    createdAt?: boolean
    type?: boolean | FormTypeDefaultArgs<ExtArgs>
    budget?: boolean | Form$budgetArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    subject?: boolean
    body?: boolean
    email?: boolean
    typeId?: boolean
    budgetId?: boolean
    createdAt?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "body" | "email" | "typeId" | "budgetId" | "createdAt", ExtArgs["result"]["form"]>
  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | FormTypeDefaultArgs<ExtArgs>
    budget?: boolean | Form$budgetArgs<ExtArgs>
  }
  export type FormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | FormTypeDefaultArgs<ExtArgs>
    budget?: boolean | Form$budgetArgs<ExtArgs>
  }
  export type FormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | FormTypeDefaultArgs<ExtArgs>
    budget?: boolean | Form$budgetArgs<ExtArgs>
  }

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      type: Prisma.$FormTypePayload<ExtArgs>
      budget: Prisma.$FormBudgetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      body: string
      email: string
      typeId: string
      budgetId: string | null
      createdAt: Date
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormUpdateManyAndReturnArgs>(args: SelectSubset<T, FormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
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
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends FormTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormTypeDefaultArgs<ExtArgs>>): Prisma__FormTypeClient<$Result.GetResult<Prisma.$FormTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    budget<T extends Form$budgetArgs<ExtArgs> = {}>(args?: Subset<T, Form$budgetArgs<ExtArgs>>): Prisma__FormBudgetClient<$Result.GetResult<Prisma.$FormBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Form model
   */ 
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly subject: FieldRef<"Form", 'String'>
    readonly body: FieldRef<"Form", 'String'>
    readonly email: FieldRef<"Form", 'String'>
    readonly typeId: FieldRef<"Form", 'String'>
    readonly budgetId: FieldRef<"Form", 'String'>
    readonly createdAt: FieldRef<"Form", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form updateManyAndReturn
   */
  export type FormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form.budget
   */
  export type Form$budgetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormBudget
     */
    select?: FormBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormBudget
     */
    omit?: FormBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormBudgetInclude<ExtArgs> | null
    where?: FormBudgetWhereInput
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model FormSetting
   */

  export type AggregateFormSetting = {
    _count: FormSettingCountAggregateOutputType | null
    _min: FormSettingMinAggregateOutputType | null
    _max: FormSettingMaxAggregateOutputType | null
  }

  export type FormSettingMinAggregateOutputType = {
    id: string | null
    subjectLine: string | null
    confirmationMessage: string | null
    showType: boolean | null
    showBudget: boolean | null
    createdAt: Date | null
  }

  export type FormSettingMaxAggregateOutputType = {
    id: string | null
    subjectLine: string | null
    confirmationMessage: string | null
    showType: boolean | null
    showBudget: boolean | null
    createdAt: Date | null
  }

  export type FormSettingCountAggregateOutputType = {
    id: number
    subjectLine: number
    confirmationMessage: number
    showType: number
    showBudget: number
    createdAt: number
    _all: number
  }


  export type FormSettingMinAggregateInputType = {
    id?: true
    subjectLine?: true
    confirmationMessage?: true
    showType?: true
    showBudget?: true
    createdAt?: true
  }

  export type FormSettingMaxAggregateInputType = {
    id?: true
    subjectLine?: true
    confirmationMessage?: true
    showType?: true
    showBudget?: true
    createdAt?: true
  }

  export type FormSettingCountAggregateInputType = {
    id?: true
    subjectLine?: true
    confirmationMessage?: true
    showType?: true
    showBudget?: true
    createdAt?: true
    _all?: true
  }

  export type FormSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSetting to aggregate.
     */
    where?: FormSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSettings to fetch.
     */
    orderBy?: FormSettingOrderByWithRelationInput | FormSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSettings
    **/
    _count?: true | FormSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSettingMaxAggregateInputType
  }

  export type GetFormSettingAggregateType<T extends FormSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSetting[P]>
      : GetScalarType<T[P], AggregateFormSetting[P]>
  }




  export type FormSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSettingWhereInput
    orderBy?: FormSettingOrderByWithAggregationInput | FormSettingOrderByWithAggregationInput[]
    by: FormSettingScalarFieldEnum[] | FormSettingScalarFieldEnum
    having?: FormSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSettingCountAggregateInputType | true
    _min?: FormSettingMinAggregateInputType
    _max?: FormSettingMaxAggregateInputType
  }

  export type FormSettingGroupByOutputType = {
    id: string
    subjectLine: string
    confirmationMessage: string
    showType: boolean
    showBudget: boolean
    createdAt: Date
    _count: FormSettingCountAggregateOutputType | null
    _min: FormSettingMinAggregateOutputType | null
    _max: FormSettingMaxAggregateOutputType | null
  }

  type GetFormSettingGroupByPayload<T extends FormSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSettingGroupByOutputType[P]>
            : GetScalarType<T[P], FormSettingGroupByOutputType[P]>
        }
      >
    >


  export type FormSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectLine?: boolean
    confirmationMessage?: boolean
    showType?: boolean
    showBudget?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formSetting"]>

  export type FormSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectLine?: boolean
    confirmationMessage?: boolean
    showType?: boolean
    showBudget?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formSetting"]>

  export type FormSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectLine?: boolean
    confirmationMessage?: boolean
    showType?: boolean
    showBudget?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formSetting"]>

  export type FormSettingSelectScalar = {
    id?: boolean
    subjectLine?: boolean
    confirmationMessage?: boolean
    showType?: boolean
    showBudget?: boolean
    createdAt?: boolean
  }

  export type FormSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectLine" | "confirmationMessage" | "showType" | "showBudget" | "createdAt", ExtArgs["result"]["formSetting"]>

  export type $FormSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectLine: string
      confirmationMessage: string
      showType: boolean
      showBudget: boolean
      createdAt: Date
    }, ExtArgs["result"]["formSetting"]>
    composites: {}
  }

  type FormSettingGetPayload<S extends boolean | null | undefined | FormSettingDefaultArgs> = $Result.GetResult<Prisma.$FormSettingPayload, S>

  type FormSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormSettingCountAggregateInputType | true
    }

  export interface FormSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormSetting'], meta: { name: 'FormSetting' } }
    /**
     * Find zero or one FormSetting that matches the filter.
     * @param {FormSettingFindUniqueArgs} args - Arguments to find a FormSetting
     * @example
     * // Get one FormSetting
     * const formSetting = await prisma.formSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormSettingFindUniqueArgs>(args: SelectSubset<T, FormSettingFindUniqueArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormSettingFindUniqueOrThrowArgs} args - Arguments to find a FormSetting
     * @example
     * // Get one FormSetting
     * const formSetting = await prisma.formSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, FormSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSettingFindFirstArgs} args - Arguments to find a FormSetting
     * @example
     * // Get one FormSetting
     * const formSetting = await prisma.formSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormSettingFindFirstArgs>(args?: SelectSubset<T, FormSettingFindFirstArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSettingFindFirstOrThrowArgs} args - Arguments to find a FormSetting
     * @example
     * // Get one FormSetting
     * const formSetting = await prisma.formSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, FormSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSettings
     * const formSettings = await prisma.formSetting.findMany()
     * 
     * // Get first 10 FormSettings
     * const formSettings = await prisma.formSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSettingWithIdOnly = await prisma.formSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormSettingFindManyArgs>(args?: SelectSubset<T, FormSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormSetting.
     * @param {FormSettingCreateArgs} args - Arguments to create a FormSetting.
     * @example
     * // Create one FormSetting
     * const FormSetting = await prisma.formSetting.create({
     *   data: {
     *     // ... data to create a FormSetting
     *   }
     * })
     * 
     */
    create<T extends FormSettingCreateArgs>(args: SelectSubset<T, FormSettingCreateArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormSettings.
     * @param {FormSettingCreateManyArgs} args - Arguments to create many FormSettings.
     * @example
     * // Create many FormSettings
     * const formSetting = await prisma.formSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormSettingCreateManyArgs>(args?: SelectSubset<T, FormSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormSettings and returns the data saved in the database.
     * @param {FormSettingCreateManyAndReturnArgs} args - Arguments to create many FormSettings.
     * @example
     * // Create many FormSettings
     * const formSetting = await prisma.formSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormSettings and only return the `id`
     * const formSettingWithIdOnly = await prisma.formSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, FormSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormSetting.
     * @param {FormSettingDeleteArgs} args - Arguments to delete one FormSetting.
     * @example
     * // Delete one FormSetting
     * const FormSetting = await prisma.formSetting.delete({
     *   where: {
     *     // ... filter to delete one FormSetting
     *   }
     * })
     * 
     */
    delete<T extends FormSettingDeleteArgs>(args: SelectSubset<T, FormSettingDeleteArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormSetting.
     * @param {FormSettingUpdateArgs} args - Arguments to update one FormSetting.
     * @example
     * // Update one FormSetting
     * const formSetting = await prisma.formSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormSettingUpdateArgs>(args: SelectSubset<T, FormSettingUpdateArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormSettings.
     * @param {FormSettingDeleteManyArgs} args - Arguments to filter FormSettings to delete.
     * @example
     * // Delete a few FormSettings
     * const { count } = await prisma.formSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormSettingDeleteManyArgs>(args?: SelectSubset<T, FormSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSettings
     * const formSetting = await prisma.formSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormSettingUpdateManyArgs>(args: SelectSubset<T, FormSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSettings and returns the data updated in the database.
     * @param {FormSettingUpdateManyAndReturnArgs} args - Arguments to update many FormSettings.
     * @example
     * // Update many FormSettings
     * const formSetting = await prisma.formSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormSettings and only return the `id`
     * const formSettingWithIdOnly = await prisma.formSetting.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, FormSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormSetting.
     * @param {FormSettingUpsertArgs} args - Arguments to update or create a FormSetting.
     * @example
     * // Update or create a FormSetting
     * const formSetting = await prisma.formSetting.upsert({
     *   create: {
     *     // ... data to create a FormSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSetting we want to update
     *   }
     * })
     */
    upsert<T extends FormSettingUpsertArgs>(args: SelectSubset<T, FormSettingUpsertArgs<ExtArgs>>): Prisma__FormSettingClient<$Result.GetResult<Prisma.$FormSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSettingCountArgs} args - Arguments to filter FormSettings to count.
     * @example
     * // Count the number of FormSettings
     * const count = await prisma.formSetting.count({
     *   where: {
     *     // ... the filter for the FormSettings we want to count
     *   }
     * })
    **/
    count<T extends FormSettingCountArgs>(
      args?: Subset<T, FormSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormSettingAggregateArgs>(args: Subset<T, FormSettingAggregateArgs>): Prisma.PrismaPromise<GetFormSettingAggregateType<T>>

    /**
     * Group by FormSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSettingGroupByArgs} args - Group by arguments.
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
      T extends FormSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSettingGroupByArgs['orderBy'] }
        : { orderBy?: FormSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormSetting model
   */
  readonly fields: FormSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FormSetting model
   */ 
  interface FormSettingFieldRefs {
    readonly id: FieldRef<"FormSetting", 'String'>
    readonly subjectLine: FieldRef<"FormSetting", 'String'>
    readonly confirmationMessage: FieldRef<"FormSetting", 'String'>
    readonly showType: FieldRef<"FormSetting", 'Boolean'>
    readonly showBudget: FieldRef<"FormSetting", 'Boolean'>
    readonly createdAt: FieldRef<"FormSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormSetting findUnique
   */
  export type FormSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * Filter, which FormSetting to fetch.
     */
    where: FormSettingWhereUniqueInput
  }

  /**
   * FormSetting findUniqueOrThrow
   */
  export type FormSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * Filter, which FormSetting to fetch.
     */
    where: FormSettingWhereUniqueInput
  }

  /**
   * FormSetting findFirst
   */
  export type FormSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * Filter, which FormSetting to fetch.
     */
    where?: FormSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSettings to fetch.
     */
    orderBy?: FormSettingOrderByWithRelationInput | FormSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSettings.
     */
    cursor?: FormSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSettings.
     */
    distinct?: FormSettingScalarFieldEnum | FormSettingScalarFieldEnum[]
  }

  /**
   * FormSetting findFirstOrThrow
   */
  export type FormSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * Filter, which FormSetting to fetch.
     */
    where?: FormSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSettings to fetch.
     */
    orderBy?: FormSettingOrderByWithRelationInput | FormSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSettings.
     */
    cursor?: FormSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSettings.
     */
    distinct?: FormSettingScalarFieldEnum | FormSettingScalarFieldEnum[]
  }

  /**
   * FormSetting findMany
   */
  export type FormSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * Filter, which FormSettings to fetch.
     */
    where?: FormSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSettings to fetch.
     */
    orderBy?: FormSettingOrderByWithRelationInput | FormSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSettings.
     */
    cursor?: FormSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSettings.
     */
    skip?: number
    distinct?: FormSettingScalarFieldEnum | FormSettingScalarFieldEnum[]
  }

  /**
   * FormSetting create
   */
  export type FormSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a FormSetting.
     */
    data: XOR<FormSettingCreateInput, FormSettingUncheckedCreateInput>
  }

  /**
   * FormSetting createMany
   */
  export type FormSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormSettings.
     */
    data: FormSettingCreateManyInput | FormSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSetting createManyAndReturn
   */
  export type FormSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * The data used to create many FormSettings.
     */
    data: FormSettingCreateManyInput | FormSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSetting update
   */
  export type FormSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a FormSetting.
     */
    data: XOR<FormSettingUpdateInput, FormSettingUncheckedUpdateInput>
    /**
     * Choose, which FormSetting to update.
     */
    where: FormSettingWhereUniqueInput
  }

  /**
   * FormSetting updateMany
   */
  export type FormSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormSettings.
     */
    data: XOR<FormSettingUpdateManyMutationInput, FormSettingUncheckedUpdateManyInput>
    /**
     * Filter which FormSettings to update
     */
    where?: FormSettingWhereInput
    /**
     * Limit how many FormSettings to update.
     */
    limit?: number
  }

  /**
   * FormSetting updateManyAndReturn
   */
  export type FormSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * The data used to update FormSettings.
     */
    data: XOR<FormSettingUpdateManyMutationInput, FormSettingUncheckedUpdateManyInput>
    /**
     * Filter which FormSettings to update
     */
    where?: FormSettingWhereInput
    /**
     * Limit how many FormSettings to update.
     */
    limit?: number
  }

  /**
   * FormSetting upsert
   */
  export type FormSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the FormSetting to update in case it exists.
     */
    where: FormSettingWhereUniqueInput
    /**
     * In case the FormSetting found by the `where` argument doesn't exist, create a new FormSetting with this data.
     */
    create: XOR<FormSettingCreateInput, FormSettingUncheckedCreateInput>
    /**
     * In case the FormSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormSettingUpdateInput, FormSettingUncheckedUpdateInput>
  }

  /**
   * FormSetting delete
   */
  export type FormSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
    /**
     * Filter which FormSetting to delete.
     */
    where: FormSettingWhereUniqueInput
  }

  /**
   * FormSetting deleteMany
   */
  export type FormSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSettings to delete
     */
    where?: FormSettingWhereInput
    /**
     * Limit how many FormSettings to delete.
     */
    limit?: number
  }

  /**
   * FormSetting without action
   */
  export type FormSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSetting
     */
    select?: FormSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSetting
     */
    omit?: FormSettingOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HeaderScalarFieldEnum: {
    id: 'id',
    logoText: 'logoText',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    primaryButtonText: 'primaryButtonText',
    primaryButtonLink: 'primaryButtonLink',
    secondaryButtonText: 'secondaryButtonText',
    secondaryButtonLink: 'secondaryButtonLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeaderScalarFieldEnum = (typeof HeaderScalarFieldEnum)[keyof typeof HeaderScalarFieldEnum]


  export const HeaderImageScalarFieldEnum: {
    id: 'id',
    path: 'path',
    headerId: 'headerId',
    createdAt: 'createdAt'
  };

  export type HeaderImageScalarFieldEnum = (typeof HeaderImageScalarFieldEnum)[keyof typeof HeaderImageScalarFieldEnum]


  export const ProjectCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ProjectCategoryScalarFieldEnum = (typeof ProjectCategoryScalarFieldEnum)[keyof typeof ProjectCategoryScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    link: 'link',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectImageScalarFieldEnum: {
    id: 'id',
    path: 'path',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type ProjectImageScalarFieldEnum = (typeof ProjectImageScalarFieldEnum)[keyof typeof ProjectImageScalarFieldEnum]


  export const AboutScalarFieldEnum: {
    id: 'id',
    studio: 'studio',
    year: 'year',
    description: 'description',
    mission: 'mission',
    vision: 'vision',
    quote: 'quote',
    quoteAuthor: 'quoteAuthor',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutScalarFieldEnum = (typeof AboutScalarFieldEnum)[keyof typeof AboutScalarFieldEnum]


  export const ExpertiseScalarFieldEnum: {
    id: 'id',
    path: 'path',
    aboutId: 'aboutId',
    createdAt: 'createdAt'
  };

  export type ExpertiseScalarFieldEnum = (typeof ExpertiseScalarFieldEnum)[keyof typeof ExpertiseScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    text: 'text',
    clientName: 'clientName',
    clientPosition: 'clientPosition',
    avatar: 'avatar',
    createdAt: 'createdAt'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const AwardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    year: 'year',
    organization: 'organization',
    createdAt: 'createdAt'
  };

  export type AwardScalarFieldEnum = (typeof AwardScalarFieldEnum)[keyof typeof AwardScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    address: 'address',
    email: 'email',
    phone: 'phone',
    officeHours: 'officeHours',
    mapEmbedded: 'mapEmbedded',
    createdAt: 'createdAt'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const SocialMediaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type SocialMediaScalarFieldEnum = (typeof SocialMediaScalarFieldEnum)[keyof typeof SocialMediaScalarFieldEnum]


  export const FormTypeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type FormTypeScalarFieldEnum = (typeof FormTypeScalarFieldEnum)[keyof typeof FormTypeScalarFieldEnum]


  export const FormBudgetScalarFieldEnum: {
    id: 'id',
    text: 'text',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type FormBudgetScalarFieldEnum = (typeof FormBudgetScalarFieldEnum)[keyof typeof FormBudgetScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    body: 'body',
    email: 'email',
    typeId: 'typeId',
    budgetId: 'budgetId',
    createdAt: 'createdAt'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FormSettingScalarFieldEnum: {
    id: 'id',
    subjectLine: 'subjectLine',
    confirmationMessage: 'confirmationMessage',
    showType: 'showType',
    showBudget: 'showBudget',
    createdAt: 'createdAt'
  };

  export type FormSettingScalarFieldEnum = (typeof FormSettingScalarFieldEnum)[keyof typeof FormSettingScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HeaderWhereInput = {
    AND?: HeaderWhereInput | HeaderWhereInput[]
    OR?: HeaderWhereInput[]
    NOT?: HeaderWhereInput | HeaderWhereInput[]
    id?: StringFilter<"Header"> | string
    logoText?: StringFilter<"Header"> | string
    heroTitle?: StringFilter<"Header"> | string
    heroSubtitle?: StringFilter<"Header"> | string
    primaryButtonText?: StringFilter<"Header"> | string
    primaryButtonLink?: StringFilter<"Header"> | string
    secondaryButtonText?: StringFilter<"Header"> | string
    secondaryButtonLink?: StringFilter<"Header"> | string
    createdAt?: DateTimeFilter<"Header"> | Date | string
    updatedAt?: DateTimeFilter<"Header"> | Date | string
    HeaderImage?: HeaderImageListRelationFilter
  }

  export type HeaderOrderByWithRelationInput = {
    id?: SortOrder
    logoText?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryButtonText?: SortOrder
    primaryButtonLink?: SortOrder
    secondaryButtonText?: SortOrder
    secondaryButtonLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    HeaderImage?: HeaderImageOrderByRelationAggregateInput
  }

  export type HeaderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HeaderWhereInput | HeaderWhereInput[]
    OR?: HeaderWhereInput[]
    NOT?: HeaderWhereInput | HeaderWhereInput[]
    logoText?: StringFilter<"Header"> | string
    heroTitle?: StringFilter<"Header"> | string
    heroSubtitle?: StringFilter<"Header"> | string
    primaryButtonText?: StringFilter<"Header"> | string
    primaryButtonLink?: StringFilter<"Header"> | string
    secondaryButtonText?: StringFilter<"Header"> | string
    secondaryButtonLink?: StringFilter<"Header"> | string
    createdAt?: DateTimeFilter<"Header"> | Date | string
    updatedAt?: DateTimeFilter<"Header"> | Date | string
    HeaderImage?: HeaderImageListRelationFilter
  }, "id">

  export type HeaderOrderByWithAggregationInput = {
    id?: SortOrder
    logoText?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryButtonText?: SortOrder
    primaryButtonLink?: SortOrder
    secondaryButtonText?: SortOrder
    secondaryButtonLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeaderCountOrderByAggregateInput
    _max?: HeaderMaxOrderByAggregateInput
    _min?: HeaderMinOrderByAggregateInput
  }

  export type HeaderScalarWhereWithAggregatesInput = {
    AND?: HeaderScalarWhereWithAggregatesInput | HeaderScalarWhereWithAggregatesInput[]
    OR?: HeaderScalarWhereWithAggregatesInput[]
    NOT?: HeaderScalarWhereWithAggregatesInput | HeaderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Header"> | string
    logoText?: StringWithAggregatesFilter<"Header"> | string
    heroTitle?: StringWithAggregatesFilter<"Header"> | string
    heroSubtitle?: StringWithAggregatesFilter<"Header"> | string
    primaryButtonText?: StringWithAggregatesFilter<"Header"> | string
    primaryButtonLink?: StringWithAggregatesFilter<"Header"> | string
    secondaryButtonText?: StringWithAggregatesFilter<"Header"> | string
    secondaryButtonLink?: StringWithAggregatesFilter<"Header"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Header"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Header"> | Date | string
  }

  export type HeaderImageWhereInput = {
    AND?: HeaderImageWhereInput | HeaderImageWhereInput[]
    OR?: HeaderImageWhereInput[]
    NOT?: HeaderImageWhereInput | HeaderImageWhereInput[]
    id?: StringFilter<"HeaderImage"> | string
    path?: StringFilter<"HeaderImage"> | string
    headerId?: StringFilter<"HeaderImage"> | string
    createdAt?: DateTimeFilter<"HeaderImage"> | Date | string
    header?: XOR<HeaderScalarRelationFilter, HeaderWhereInput>
  }

  export type HeaderImageOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    headerId?: SortOrder
    createdAt?: SortOrder
    header?: HeaderOrderByWithRelationInput
  }

  export type HeaderImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HeaderImageWhereInput | HeaderImageWhereInput[]
    OR?: HeaderImageWhereInput[]
    NOT?: HeaderImageWhereInput | HeaderImageWhereInput[]
    path?: StringFilter<"HeaderImage"> | string
    headerId?: StringFilter<"HeaderImage"> | string
    createdAt?: DateTimeFilter<"HeaderImage"> | Date | string
    header?: XOR<HeaderScalarRelationFilter, HeaderWhereInput>
  }, "id">

  export type HeaderImageOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    headerId?: SortOrder
    createdAt?: SortOrder
    _count?: HeaderImageCountOrderByAggregateInput
    _max?: HeaderImageMaxOrderByAggregateInput
    _min?: HeaderImageMinOrderByAggregateInput
  }

  export type HeaderImageScalarWhereWithAggregatesInput = {
    AND?: HeaderImageScalarWhereWithAggregatesInput | HeaderImageScalarWhereWithAggregatesInput[]
    OR?: HeaderImageScalarWhereWithAggregatesInput[]
    NOT?: HeaderImageScalarWhereWithAggregatesInput | HeaderImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HeaderImage"> | string
    path?: StringWithAggregatesFilter<"HeaderImage"> | string
    headerId?: StringWithAggregatesFilter<"HeaderImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HeaderImage"> | Date | string
  }

  export type ProjectCategoryWhereInput = {
    AND?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    OR?: ProjectCategoryWhereInput[]
    NOT?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    id?: StringFilter<"ProjectCategory"> | string
    title?: StringFilter<"ProjectCategory"> | string
    isActive?: BoolFilter<"ProjectCategory"> | boolean
    createdAt?: DateTimeFilter<"ProjectCategory"> | Date | string
    Project?: ProjectListRelationFilter
  }

  export type ProjectCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type ProjectCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    OR?: ProjectCategoryWhereInput[]
    NOT?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    isActive?: BoolFilter<"ProjectCategory"> | boolean
    createdAt?: DateTimeFilter<"ProjectCategory"> | Date | string
    Project?: ProjectListRelationFilter
  }, "id" | "title">

  export type ProjectCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCategoryCountOrderByAggregateInput
    _max?: ProjectCategoryMaxOrderByAggregateInput
    _min?: ProjectCategoryMinOrderByAggregateInput
  }

  export type ProjectCategoryScalarWhereWithAggregatesInput = {
    AND?: ProjectCategoryScalarWhereWithAggregatesInput | ProjectCategoryScalarWhereWithAggregatesInput[]
    OR?: ProjectCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProjectCategoryScalarWhereWithAggregatesInput | ProjectCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectCategory"> | string
    title?: StringWithAggregatesFilter<"ProjectCategory"> | string
    isActive?: BoolWithAggregatesFilter<"ProjectCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProjectCategory"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    categoryId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    category?: XOR<ProjectCategoryScalarRelationFilter, ProjectCategoryWhereInput>
    ProjectImage?: ProjectImageListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: ProjectCategoryOrderByWithRelationInput
    ProjectImage?: ProjectImageOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    categoryId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    category?: XOR<ProjectCategoryScalarRelationFilter, ProjectCategoryWhereInput>
    ProjectImage?: ProjectImageListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    link?: StringNullableWithAggregatesFilter<"Project"> | string | null
    categoryId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectImageWhereInput = {
    AND?: ProjectImageWhereInput | ProjectImageWhereInput[]
    OR?: ProjectImageWhereInput[]
    NOT?: ProjectImageWhereInput | ProjectImageWhereInput[]
    id?: StringFilter<"ProjectImage"> | string
    path?: StringFilter<"ProjectImage"> | string
    projectId?: StringFilter<"ProjectImage"> | string
    createdAt?: DateTimeFilter<"ProjectImage"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectImageOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectImageWhereInput | ProjectImageWhereInput[]
    OR?: ProjectImageWhereInput[]
    NOT?: ProjectImageWhereInput | ProjectImageWhereInput[]
    path?: StringFilter<"ProjectImage"> | string
    projectId?: StringFilter<"ProjectImage"> | string
    createdAt?: DateTimeFilter<"ProjectImage"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectImageOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectImageCountOrderByAggregateInput
    _max?: ProjectImageMaxOrderByAggregateInput
    _min?: ProjectImageMinOrderByAggregateInput
  }

  export type ProjectImageScalarWhereWithAggregatesInput = {
    AND?: ProjectImageScalarWhereWithAggregatesInput | ProjectImageScalarWhereWithAggregatesInput[]
    OR?: ProjectImageScalarWhereWithAggregatesInput[]
    NOT?: ProjectImageScalarWhereWithAggregatesInput | ProjectImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectImage"> | string
    path?: StringWithAggregatesFilter<"ProjectImage"> | string
    projectId?: StringWithAggregatesFilter<"ProjectImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectImage"> | Date | string
  }

  export type AboutWhereInput = {
    AND?: AboutWhereInput | AboutWhereInput[]
    OR?: AboutWhereInput[]
    NOT?: AboutWhereInput | AboutWhereInput[]
    id?: StringFilter<"About"> | string
    studio?: StringFilter<"About"> | string
    year?: StringFilter<"About"> | string
    description?: StringFilter<"About"> | string
    mission?: StringFilter<"About"> | string
    vision?: StringFilter<"About"> | string
    quote?: StringFilter<"About"> | string
    quoteAuthor?: StringFilter<"About"> | string
    image?: StringFilter<"About"> | string
    createdAt?: DateTimeFilter<"About"> | Date | string
    updatedAt?: DateTimeFilter<"About"> | Date | string
    Expertise?: ExpertiseListRelationFilter
  }

  export type AboutOrderByWithRelationInput = {
    id?: SortOrder
    studio?: SortOrder
    year?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    quote?: SortOrder
    quoteAuthor?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Expertise?: ExpertiseOrderByRelationAggregateInput
  }

  export type AboutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutWhereInput | AboutWhereInput[]
    OR?: AboutWhereInput[]
    NOT?: AboutWhereInput | AboutWhereInput[]
    studio?: StringFilter<"About"> | string
    year?: StringFilter<"About"> | string
    description?: StringFilter<"About"> | string
    mission?: StringFilter<"About"> | string
    vision?: StringFilter<"About"> | string
    quote?: StringFilter<"About"> | string
    quoteAuthor?: StringFilter<"About"> | string
    image?: StringFilter<"About"> | string
    createdAt?: DateTimeFilter<"About"> | Date | string
    updatedAt?: DateTimeFilter<"About"> | Date | string
    Expertise?: ExpertiseListRelationFilter
  }, "id">

  export type AboutOrderByWithAggregationInput = {
    id?: SortOrder
    studio?: SortOrder
    year?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    quote?: SortOrder
    quoteAuthor?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutCountOrderByAggregateInput
    _max?: AboutMaxOrderByAggregateInput
    _min?: AboutMinOrderByAggregateInput
  }

  export type AboutScalarWhereWithAggregatesInput = {
    AND?: AboutScalarWhereWithAggregatesInput | AboutScalarWhereWithAggregatesInput[]
    OR?: AboutScalarWhereWithAggregatesInput[]
    NOT?: AboutScalarWhereWithAggregatesInput | AboutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"About"> | string
    studio?: StringWithAggregatesFilter<"About"> | string
    year?: StringWithAggregatesFilter<"About"> | string
    description?: StringWithAggregatesFilter<"About"> | string
    mission?: StringWithAggregatesFilter<"About"> | string
    vision?: StringWithAggregatesFilter<"About"> | string
    quote?: StringWithAggregatesFilter<"About"> | string
    quoteAuthor?: StringWithAggregatesFilter<"About"> | string
    image?: StringWithAggregatesFilter<"About"> | string
    createdAt?: DateTimeWithAggregatesFilter<"About"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"About"> | Date | string
  }

  export type ExpertiseWhereInput = {
    AND?: ExpertiseWhereInput | ExpertiseWhereInput[]
    OR?: ExpertiseWhereInput[]
    NOT?: ExpertiseWhereInput | ExpertiseWhereInput[]
    id?: StringFilter<"Expertise"> | string
    path?: StringFilter<"Expertise"> | string
    aboutId?: StringFilter<"Expertise"> | string
    createdAt?: DateTimeFilter<"Expertise"> | Date | string
    about?: XOR<AboutScalarRelationFilter, AboutWhereInput>
  }

  export type ExpertiseOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    aboutId?: SortOrder
    createdAt?: SortOrder
    about?: AboutOrderByWithRelationInput
  }

  export type ExpertiseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpertiseWhereInput | ExpertiseWhereInput[]
    OR?: ExpertiseWhereInput[]
    NOT?: ExpertiseWhereInput | ExpertiseWhereInput[]
    path?: StringFilter<"Expertise"> | string
    aboutId?: StringFilter<"Expertise"> | string
    createdAt?: DateTimeFilter<"Expertise"> | Date | string
    about?: XOR<AboutScalarRelationFilter, AboutWhereInput>
  }, "id">

  export type ExpertiseOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    aboutId?: SortOrder
    createdAt?: SortOrder
    _count?: ExpertiseCountOrderByAggregateInput
    _max?: ExpertiseMaxOrderByAggregateInput
    _min?: ExpertiseMinOrderByAggregateInput
  }

  export type ExpertiseScalarWhereWithAggregatesInput = {
    AND?: ExpertiseScalarWhereWithAggregatesInput | ExpertiseScalarWhereWithAggregatesInput[]
    OR?: ExpertiseScalarWhereWithAggregatesInput[]
    NOT?: ExpertiseScalarWhereWithAggregatesInput | ExpertiseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expertise"> | string
    path?: StringWithAggregatesFilter<"Expertise"> | string
    aboutId?: StringWithAggregatesFilter<"Expertise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Expertise"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    icon?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    icon?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    icon?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: StringFilter<"Testimonial"> | string
    text?: StringFilter<"Testimonial"> | string
    clientName?: StringFilter<"Testimonial"> | string
    clientPosition?: StringFilter<"Testimonial"> | string
    avatar?: StringFilter<"Testimonial"> | string
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    clientName?: SortOrder
    clientPosition?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    text?: StringFilter<"Testimonial"> | string
    clientName?: StringFilter<"Testimonial"> | string
    clientPosition?: StringFilter<"Testimonial"> | string
    avatar?: StringFilter<"Testimonial"> | string
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    clientName?: SortOrder
    clientPosition?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Testimonial"> | string
    text?: StringWithAggregatesFilter<"Testimonial"> | string
    clientName?: StringWithAggregatesFilter<"Testimonial"> | string
    clientPosition?: StringWithAggregatesFilter<"Testimonial"> | string
    avatar?: StringWithAggregatesFilter<"Testimonial"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
  }

  export type AwardWhereInput = {
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    id?: StringFilter<"Award"> | string
    title?: StringFilter<"Award"> | string
    year?: IntFilter<"Award"> | number
    organization?: StringFilter<"Award"> | string
    createdAt?: DateTimeFilter<"Award"> | Date | string
  }

  export type AwardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
  }

  export type AwardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    title?: StringFilter<"Award"> | string
    year?: IntFilter<"Award"> | number
    organization?: StringFilter<"Award"> | string
    createdAt?: DateTimeFilter<"Award"> | Date | string
  }, "id">

  export type AwardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
    _count?: AwardCountOrderByAggregateInput
    _avg?: AwardAvgOrderByAggregateInput
    _max?: AwardMaxOrderByAggregateInput
    _min?: AwardMinOrderByAggregateInput
    _sum?: AwardSumOrderByAggregateInput
  }

  export type AwardScalarWhereWithAggregatesInput = {
    AND?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    OR?: AwardScalarWhereWithAggregatesInput[]
    NOT?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Award"> | string
    title?: StringWithAggregatesFilter<"Award"> | string
    year?: IntWithAggregatesFilter<"Award"> | number
    organization?: StringWithAggregatesFilter<"Award"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Award"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: StringFilter<"ContactInfo"> | string
    address?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    officeHours?: StringFilter<"ContactInfo"> | string
    mapEmbedded?: StringFilter<"ContactInfo"> | string
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeHours?: SortOrder
    mapEmbedded?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    address?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    officeHours?: StringFilter<"ContactInfo"> | string
    mapEmbedded?: StringFilter<"ContactInfo"> | string
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }, "id">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeHours?: SortOrder
    mapEmbedded?: SortOrder
    createdAt?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInfo"> | string
    address?: StringWithAggregatesFilter<"ContactInfo"> | string
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    phone?: StringWithAggregatesFilter<"ContactInfo"> | string
    officeHours?: StringWithAggregatesFilter<"ContactInfo"> | string
    mapEmbedded?: StringWithAggregatesFilter<"ContactInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
  }

  export type SocialMediaWhereInput = {
    AND?: SocialMediaWhereInput | SocialMediaWhereInput[]
    OR?: SocialMediaWhereInput[]
    NOT?: SocialMediaWhereInput | SocialMediaWhereInput[]
    id?: StringFilter<"SocialMedia"> | string
    title?: StringFilter<"SocialMedia"> | string
    text?: StringFilter<"SocialMedia"> | string
    createdAt?: DateTimeFilter<"SocialMedia"> | Date | string
  }

  export type SocialMediaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialMediaWhereInput | SocialMediaWhereInput[]
    OR?: SocialMediaWhereInput[]
    NOT?: SocialMediaWhereInput | SocialMediaWhereInput[]
    title?: StringFilter<"SocialMedia"> | string
    text?: StringFilter<"SocialMedia"> | string
    createdAt?: DateTimeFilter<"SocialMedia"> | Date | string
  }, "id">

  export type SocialMediaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: SocialMediaCountOrderByAggregateInput
    _max?: SocialMediaMaxOrderByAggregateInput
    _min?: SocialMediaMinOrderByAggregateInput
  }

  export type SocialMediaScalarWhereWithAggregatesInput = {
    AND?: SocialMediaScalarWhereWithAggregatesInput | SocialMediaScalarWhereWithAggregatesInput[]
    OR?: SocialMediaScalarWhereWithAggregatesInput[]
    NOT?: SocialMediaScalarWhereWithAggregatesInput | SocialMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialMedia"> | string
    title?: StringWithAggregatesFilter<"SocialMedia"> | string
    text?: StringWithAggregatesFilter<"SocialMedia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialMedia"> | Date | string
  }

  export type FormTypeWhereInput = {
    AND?: FormTypeWhereInput | FormTypeWhereInput[]
    OR?: FormTypeWhereInput[]
    NOT?: FormTypeWhereInput | FormTypeWhereInput[]
    id?: StringFilter<"FormType"> | string
    title?: StringFilter<"FormType"> | string
    isActive?: BoolFilter<"FormType"> | boolean
    createdAt?: DateTimeFilter<"FormType"> | Date | string
    Form?: FormListRelationFilter
  }

  export type FormTypeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    Form?: FormOrderByRelationAggregateInput
  }

  export type FormTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormTypeWhereInput | FormTypeWhereInput[]
    OR?: FormTypeWhereInput[]
    NOT?: FormTypeWhereInput | FormTypeWhereInput[]
    title?: StringFilter<"FormType"> | string
    isActive?: BoolFilter<"FormType"> | boolean
    createdAt?: DateTimeFilter<"FormType"> | Date | string
    Form?: FormListRelationFilter
  }, "id">

  export type FormTypeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: FormTypeCountOrderByAggregateInput
    _max?: FormTypeMaxOrderByAggregateInput
    _min?: FormTypeMinOrderByAggregateInput
  }

  export type FormTypeScalarWhereWithAggregatesInput = {
    AND?: FormTypeScalarWhereWithAggregatesInput | FormTypeScalarWhereWithAggregatesInput[]
    OR?: FormTypeScalarWhereWithAggregatesInput[]
    NOT?: FormTypeScalarWhereWithAggregatesInput | FormTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormType"> | string
    title?: StringWithAggregatesFilter<"FormType"> | string
    isActive?: BoolWithAggregatesFilter<"FormType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FormType"> | Date | string
  }

  export type FormBudgetWhereInput = {
    AND?: FormBudgetWhereInput | FormBudgetWhereInput[]
    OR?: FormBudgetWhereInput[]
    NOT?: FormBudgetWhereInput | FormBudgetWhereInput[]
    id?: StringFilter<"FormBudget"> | string
    text?: StringFilter<"FormBudget"> | string
    isActive?: BoolFilter<"FormBudget"> | boolean
    createdAt?: DateTimeFilter<"FormBudget"> | Date | string
    Form?: FormListRelationFilter
  }

  export type FormBudgetOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    Form?: FormOrderByRelationAggregateInput
  }

  export type FormBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormBudgetWhereInput | FormBudgetWhereInput[]
    OR?: FormBudgetWhereInput[]
    NOT?: FormBudgetWhereInput | FormBudgetWhereInput[]
    text?: StringFilter<"FormBudget"> | string
    isActive?: BoolFilter<"FormBudget"> | boolean
    createdAt?: DateTimeFilter<"FormBudget"> | Date | string
    Form?: FormListRelationFilter
  }, "id">

  export type FormBudgetOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: FormBudgetCountOrderByAggregateInput
    _max?: FormBudgetMaxOrderByAggregateInput
    _min?: FormBudgetMinOrderByAggregateInput
  }

  export type FormBudgetScalarWhereWithAggregatesInput = {
    AND?: FormBudgetScalarWhereWithAggregatesInput | FormBudgetScalarWhereWithAggregatesInput[]
    OR?: FormBudgetScalarWhereWithAggregatesInput[]
    NOT?: FormBudgetScalarWhereWithAggregatesInput | FormBudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormBudget"> | string
    text?: StringWithAggregatesFilter<"FormBudget"> | string
    isActive?: BoolWithAggregatesFilter<"FormBudget"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FormBudget"> | Date | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    subject?: StringFilter<"Form"> | string
    body?: StringFilter<"Form"> | string
    email?: StringFilter<"Form"> | string
    typeId?: StringFilter<"Form"> | string
    budgetId?: StringNullableFilter<"Form"> | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    type?: XOR<FormTypeScalarRelationFilter, FormTypeWhereInput>
    budget?: XOR<FormBudgetNullableScalarRelationFilter, FormBudgetWhereInput> | null
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    email?: SortOrder
    typeId?: SortOrder
    budgetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    type?: FormTypeOrderByWithRelationInput
    budget?: FormBudgetOrderByWithRelationInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    subject?: StringFilter<"Form"> | string
    body?: StringFilter<"Form"> | string
    email?: StringFilter<"Form"> | string
    typeId?: StringFilter<"Form"> | string
    budgetId?: StringNullableFilter<"Form"> | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    type?: XOR<FormTypeScalarRelationFilter, FormTypeWhereInput>
    budget?: XOR<FormBudgetNullableScalarRelationFilter, FormBudgetWhereInput> | null
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    email?: SortOrder
    typeId?: SortOrder
    budgetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    subject?: StringWithAggregatesFilter<"Form"> | string
    body?: StringWithAggregatesFilter<"Form"> | string
    email?: StringWithAggregatesFilter<"Form"> | string
    typeId?: StringWithAggregatesFilter<"Form"> | string
    budgetId?: StringNullableWithAggregatesFilter<"Form"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
  }

  export type FormSettingWhereInput = {
    AND?: FormSettingWhereInput | FormSettingWhereInput[]
    OR?: FormSettingWhereInput[]
    NOT?: FormSettingWhereInput | FormSettingWhereInput[]
    id?: StringFilter<"FormSetting"> | string
    subjectLine?: StringFilter<"FormSetting"> | string
    confirmationMessage?: StringFilter<"FormSetting"> | string
    showType?: BoolFilter<"FormSetting"> | boolean
    showBudget?: BoolFilter<"FormSetting"> | boolean
    createdAt?: DateTimeFilter<"FormSetting"> | Date | string
  }

  export type FormSettingOrderByWithRelationInput = {
    id?: SortOrder
    subjectLine?: SortOrder
    confirmationMessage?: SortOrder
    showType?: SortOrder
    showBudget?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormSettingWhereInput | FormSettingWhereInput[]
    OR?: FormSettingWhereInput[]
    NOT?: FormSettingWhereInput | FormSettingWhereInput[]
    subjectLine?: StringFilter<"FormSetting"> | string
    confirmationMessage?: StringFilter<"FormSetting"> | string
    showType?: BoolFilter<"FormSetting"> | boolean
    showBudget?: BoolFilter<"FormSetting"> | boolean
    createdAt?: DateTimeFilter<"FormSetting"> | Date | string
  }, "id">

  export type FormSettingOrderByWithAggregationInput = {
    id?: SortOrder
    subjectLine?: SortOrder
    confirmationMessage?: SortOrder
    showType?: SortOrder
    showBudget?: SortOrder
    createdAt?: SortOrder
    _count?: FormSettingCountOrderByAggregateInput
    _max?: FormSettingMaxOrderByAggregateInput
    _min?: FormSettingMinOrderByAggregateInput
  }

  export type FormSettingScalarWhereWithAggregatesInput = {
    AND?: FormSettingScalarWhereWithAggregatesInput | FormSettingScalarWhereWithAggregatesInput[]
    OR?: FormSettingScalarWhereWithAggregatesInput[]
    NOT?: FormSettingScalarWhereWithAggregatesInput | FormSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormSetting"> | string
    subjectLine?: StringWithAggregatesFilter<"FormSetting"> | string
    confirmationMessage?: StringWithAggregatesFilter<"FormSetting"> | string
    showType?: BoolWithAggregatesFilter<"FormSetting"> | boolean
    showBudget?: BoolWithAggregatesFilter<"FormSetting"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FormSetting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderCreateInput = {
    id?: string
    logoText: string
    heroTitle: string
    heroSubtitle: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    HeaderImage?: HeaderImageCreateNestedManyWithoutHeaderInput
  }

  export type HeaderUncheckedCreateInput = {
    id?: string
    logoText: string
    heroTitle: string
    heroSubtitle: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    HeaderImage?: HeaderImageUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type HeaderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    primaryButtonText?: StringFieldUpdateOperationsInput | string
    primaryButtonLink?: StringFieldUpdateOperationsInput | string
    secondaryButtonText?: StringFieldUpdateOperationsInput | string
    secondaryButtonLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HeaderImage?: HeaderImageUpdateManyWithoutHeaderNestedInput
  }

  export type HeaderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    primaryButtonText?: StringFieldUpdateOperationsInput | string
    primaryButtonLink?: StringFieldUpdateOperationsInput | string
    secondaryButtonText?: StringFieldUpdateOperationsInput | string
    secondaryButtonLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HeaderImage?: HeaderImageUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type HeaderCreateManyInput = {
    id?: string
    logoText: string
    heroTitle: string
    heroSubtitle: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeaderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    primaryButtonText?: StringFieldUpdateOperationsInput | string
    primaryButtonLink?: StringFieldUpdateOperationsInput | string
    secondaryButtonText?: StringFieldUpdateOperationsInput | string
    secondaryButtonLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    primaryButtonText?: StringFieldUpdateOperationsInput | string
    primaryButtonLink?: StringFieldUpdateOperationsInput | string
    secondaryButtonText?: StringFieldUpdateOperationsInput | string
    secondaryButtonLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderImageCreateInput = {
    id?: string
    path: string
    createdAt?: Date | string
    header: HeaderCreateNestedOneWithoutHeaderImageInput
  }

  export type HeaderImageUncheckedCreateInput = {
    id?: string
    path: string
    headerId: string
    createdAt?: Date | string
  }

  export type HeaderImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    header?: HeaderUpdateOneRequiredWithoutHeaderImageNestedInput
  }

  export type HeaderImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    headerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderImageCreateManyInput = {
    id?: string
    path: string
    headerId: string
    createdAt?: Date | string
  }

  export type HeaderImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    headerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCategoryCreateInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
    Project?: ProjectCreateNestedManyWithoutCategoryInput
  }

  export type ProjectCategoryUncheckedCreateInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
    Project?: ProjectUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProjectCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateManyWithoutCategoryNestedInput
  }

  export type ProjectCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProjectCategoryCreateManyInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProjectCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ProjectCategoryCreateNestedOneWithoutProjectInput
    ProjectImage?: ProjectImageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectImage?: ProjectImageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProjectCategoryUpdateOneRequiredWithoutProjectNestedInput
    ProjectImage?: ProjectImageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectImage?: ProjectImageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageCreateInput = {
    id?: string
    path: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectImageInput
  }

  export type ProjectImageUncheckedCreateInput = {
    id?: string
    path: string
    projectId: string
    createdAt?: Date | string
  }

  export type ProjectImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectImageNestedInput
  }

  export type ProjectImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageCreateManyInput = {
    id?: string
    path: string
    projectId: string
    createdAt?: Date | string
  }

  export type ProjectImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutCreateInput = {
    id?: string
    studio: string
    year: string
    description: string
    mission: string
    vision: string
    quote: string
    quoteAuthor: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Expertise?: ExpertiseCreateNestedManyWithoutAboutInput
  }

  export type AboutUncheckedCreateInput = {
    id?: string
    studio: string
    year: string
    description: string
    mission: string
    vision: string
    quote: string
    quoteAuthor: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Expertise?: ExpertiseUncheckedCreateNestedManyWithoutAboutInput
  }

  export type AboutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    quoteAuthor?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Expertise?: ExpertiseUpdateManyWithoutAboutNestedInput
  }

  export type AboutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    quoteAuthor?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Expertise?: ExpertiseUncheckedUpdateManyWithoutAboutNestedInput
  }

  export type AboutCreateManyInput = {
    id?: string
    studio: string
    year: string
    description: string
    mission: string
    vision: string
    quote: string
    quoteAuthor: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    quoteAuthor?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    quoteAuthor?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseCreateInput = {
    id?: string
    path: string
    createdAt?: Date | string
    about: AboutCreateNestedOneWithoutExpertiseInput
  }

  export type ExpertiseUncheckedCreateInput = {
    id?: string
    path: string
    aboutId: string
    createdAt?: Date | string
  }

  export type ExpertiseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: AboutUpdateOneRequiredWithoutExpertiseNestedInput
  }

  export type ExpertiseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    aboutId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseCreateManyInput = {
    id?: string
    path: string
    aboutId: string
    createdAt?: Date | string
  }

  export type ExpertiseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    aboutId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    title: string
    description: string
    icon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    icon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyInput = {
    id?: string
    title: string
    description: string
    icon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateInput = {
    id?: string
    text: string
    clientName: string
    clientPosition: string
    avatar: string
    createdAt?: Date | string
  }

  export type TestimonialUncheckedCreateInput = {
    id?: string
    text: string
    clientName: string
    clientPosition: string
    avatar: string
    createdAt?: Date | string
  }

  export type TestimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPosition?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPosition?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateManyInput = {
    id?: string
    text: string
    clientName: string
    clientPosition: string
    avatar: string
    createdAt?: Date | string
  }

  export type TestimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPosition?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientPosition?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateInput = {
    id?: string
    title: string
    year: number
    organization: string
    createdAt?: Date | string
  }

  export type AwardUncheckedCreateInput = {
    id?: string
    title: string
    year: number
    organization: string
    createdAt?: Date | string
  }

  export type AwardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    organization?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    organization?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateManyInput = {
    id?: string
    title: string
    year: number
    organization: string
    createdAt?: Date | string
  }

  export type AwardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    organization?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    organization?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    id?: string
    address: string
    email: string
    phone: string
    officeHours: string
    mapEmbedded: string
    createdAt?: Date | string
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: string
    address: string
    email: string
    phone: string
    officeHours: string
    mapEmbedded: string
    createdAt?: Date | string
  }

  export type ContactInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    officeHours?: StringFieldUpdateOperationsInput | string
    mapEmbedded?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    officeHours?: StringFieldUpdateOperationsInput | string
    mapEmbedded?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateManyInput = {
    id?: string
    address: string
    email: string
    phone: string
    officeHours: string
    mapEmbedded: string
    createdAt?: Date | string
  }

  export type ContactInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    officeHours?: StringFieldUpdateOperationsInput | string
    mapEmbedded?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    officeHours?: StringFieldUpdateOperationsInput | string
    mapEmbedded?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMediaCreateInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string
  }

  export type SocialMediaUncheckedCreateInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string
  }

  export type SocialMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMediaCreateManyInput = {
    id?: string
    title: string
    text: string
    createdAt?: Date | string
  }

  export type SocialMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTypeCreateInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
    Form?: FormCreateNestedManyWithoutTypeInput
  }

  export type FormTypeUncheckedCreateInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
    Form?: FormUncheckedCreateNestedManyWithoutTypeInput
  }

  export type FormTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Form?: FormUpdateManyWithoutTypeNestedInput
  }

  export type FormTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Form?: FormUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type FormTypeCreateManyInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type FormTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormBudgetCreateInput = {
    id?: string
    text: string
    isActive?: boolean
    createdAt?: Date | string
    Form?: FormCreateNestedManyWithoutBudgetInput
  }

  export type FormBudgetUncheckedCreateInput = {
    id?: string
    text: string
    isActive?: boolean
    createdAt?: Date | string
    Form?: FormUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type FormBudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Form?: FormUpdateManyWithoutBudgetNestedInput
  }

  export type FormBudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Form?: FormUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type FormBudgetCreateManyInput = {
    id?: string
    text: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type FormBudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormBudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateInput = {
    id?: string
    subject: string
    body: string
    email: string
    createdAt?: Date | string
    type: FormTypeCreateNestedOneWithoutFormInput
    budget?: FormBudgetCreateNestedOneWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: string
    subject: string
    body: string
    email: string
    typeId: string
    budgetId?: string | null
    createdAt?: Date | string
  }

  export type FormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: FormTypeUpdateOneRequiredWithoutFormNestedInput
    budget?: FormBudgetUpdateOneWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    budgetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateManyInput = {
    id?: string
    subject: string
    body: string
    email: string
    typeId: string
    budgetId?: string | null
    createdAt?: Date | string
  }

  export type FormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    budgetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSettingCreateInput = {
    id?: string
    subjectLine: string
    confirmationMessage: string
    showType?: boolean
    showBudget?: boolean
    createdAt?: Date | string
  }

  export type FormSettingUncheckedCreateInput = {
    id?: string
    subjectLine: string
    confirmationMessage: string
    showType?: boolean
    showBudget?: boolean
    createdAt?: Date | string
  }

  export type FormSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectLine?: StringFieldUpdateOperationsInput | string
    confirmationMessage?: StringFieldUpdateOperationsInput | string
    showType?: BoolFieldUpdateOperationsInput | boolean
    showBudget?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectLine?: StringFieldUpdateOperationsInput | string
    confirmationMessage?: StringFieldUpdateOperationsInput | string
    showType?: BoolFieldUpdateOperationsInput | boolean
    showBudget?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSettingCreateManyInput = {
    id?: string
    subjectLine: string
    confirmationMessage: string
    showType?: boolean
    showBudget?: boolean
    createdAt?: Date | string
  }

  export type FormSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectLine?: StringFieldUpdateOperationsInput | string
    confirmationMessage?: StringFieldUpdateOperationsInput | string
    showType?: BoolFieldUpdateOperationsInput | boolean
    showBudget?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectLine?: StringFieldUpdateOperationsInput | string
    confirmationMessage?: StringFieldUpdateOperationsInput | string
    showType?: BoolFieldUpdateOperationsInput | boolean
    showBudget?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type HeaderImageListRelationFilter = {
    every?: HeaderImageWhereInput
    some?: HeaderImageWhereInput
    none?: HeaderImageWhereInput
  }

  export type HeaderImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeaderCountOrderByAggregateInput = {
    id?: SortOrder
    logoText?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryButtonText?: SortOrder
    primaryButtonLink?: SortOrder
    secondaryButtonText?: SortOrder
    secondaryButtonLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeaderMaxOrderByAggregateInput = {
    id?: SortOrder
    logoText?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryButtonText?: SortOrder
    primaryButtonLink?: SortOrder
    secondaryButtonText?: SortOrder
    secondaryButtonLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeaderMinOrderByAggregateInput = {
    id?: SortOrder
    logoText?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryButtonText?: SortOrder
    primaryButtonLink?: SortOrder
    secondaryButtonText?: SortOrder
    secondaryButtonLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeaderScalarRelationFilter = {
    is?: HeaderWhereInput
    isNot?: HeaderWhereInput
  }

  export type HeaderImageCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    headerId?: SortOrder
    createdAt?: SortOrder
  }

  export type HeaderImageMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    headerId?: SortOrder
    createdAt?: SortOrder
  }

  export type HeaderImageMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    headerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProjectCategoryScalarRelationFilter = {
    is?: ProjectCategoryWhereInput
    isNot?: ProjectCategoryWhereInput
  }

  export type ProjectImageListRelationFilter = {
    every?: ProjectImageWhereInput
    some?: ProjectImageWhereInput
    none?: ProjectImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectImageCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectImageMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectImageMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertiseListRelationFilter = {
    every?: ExpertiseWhereInput
    some?: ExpertiseWhereInput
    none?: ExpertiseWhereInput
  }

  export type ExpertiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AboutCountOrderByAggregateInput = {
    id?: SortOrder
    studio?: SortOrder
    year?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    quote?: SortOrder
    quoteAuthor?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutMaxOrderByAggregateInput = {
    id?: SortOrder
    studio?: SortOrder
    year?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    quote?: SortOrder
    quoteAuthor?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutMinOrderByAggregateInput = {
    id?: SortOrder
    studio?: SortOrder
    year?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    quote?: SortOrder
    quoteAuthor?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutScalarRelationFilter = {
    is?: AboutWhereInput
    isNot?: AboutWhereInput
  }

  export type ExpertiseCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    aboutId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertiseMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    aboutId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpertiseMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    aboutId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    clientName?: SortOrder
    clientPosition?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    clientName?: SortOrder
    clientPosition?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    clientName?: SortOrder
    clientPosition?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
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

  export type AwardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
  }

  export type AwardAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type AwardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
  }

  export type AwardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    organization?: SortOrder
    createdAt?: SortOrder
  }

  export type AwardSumOrderByAggregateInput = {
    year?: SortOrder
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

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeHours?: SortOrder
    mapEmbedded?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeHours?: SortOrder
    mapEmbedded?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officeHours?: SortOrder
    mapEmbedded?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMediaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialMediaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type FormListRelationFilter = {
    every?: FormWhereInput
    some?: FormWhereInput
    none?: FormWhereInput
  }

  export type FormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormTypeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type FormTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type FormTypeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type FormBudgetCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type FormBudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type FormBudgetMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type FormTypeScalarRelationFilter = {
    is?: FormTypeWhereInput
    isNot?: FormTypeWhereInput
  }

  export type FormBudgetNullableScalarRelationFilter = {
    is?: FormBudgetWhereInput | null
    isNot?: FormBudgetWhereInput | null
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    email?: SortOrder
    typeId?: SortOrder
    budgetId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    email?: SortOrder
    typeId?: SortOrder
    budgetId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    email?: SortOrder
    typeId?: SortOrder
    budgetId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSettingCountOrderByAggregateInput = {
    id?: SortOrder
    subjectLine?: SortOrder
    confirmationMessage?: SortOrder
    showType?: SortOrder
    showBudget?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectLine?: SortOrder
    confirmationMessage?: SortOrder
    showType?: SortOrder
    showBudget?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSettingMinOrderByAggregateInput = {
    id?: SortOrder
    subjectLine?: SortOrder
    confirmationMessage?: SortOrder
    showType?: SortOrder
    showBudget?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HeaderImageCreateNestedManyWithoutHeaderInput = {
    create?: XOR<HeaderImageCreateWithoutHeaderInput, HeaderImageUncheckedCreateWithoutHeaderInput> | HeaderImageCreateWithoutHeaderInput[] | HeaderImageUncheckedCreateWithoutHeaderInput[]
    connectOrCreate?: HeaderImageCreateOrConnectWithoutHeaderInput | HeaderImageCreateOrConnectWithoutHeaderInput[]
    createMany?: HeaderImageCreateManyHeaderInputEnvelope
    connect?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
  }

  export type HeaderImageUncheckedCreateNestedManyWithoutHeaderInput = {
    create?: XOR<HeaderImageCreateWithoutHeaderInput, HeaderImageUncheckedCreateWithoutHeaderInput> | HeaderImageCreateWithoutHeaderInput[] | HeaderImageUncheckedCreateWithoutHeaderInput[]
    connectOrCreate?: HeaderImageCreateOrConnectWithoutHeaderInput | HeaderImageCreateOrConnectWithoutHeaderInput[]
    createMany?: HeaderImageCreateManyHeaderInputEnvelope
    connect?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
  }

  export type HeaderImageUpdateManyWithoutHeaderNestedInput = {
    create?: XOR<HeaderImageCreateWithoutHeaderInput, HeaderImageUncheckedCreateWithoutHeaderInput> | HeaderImageCreateWithoutHeaderInput[] | HeaderImageUncheckedCreateWithoutHeaderInput[]
    connectOrCreate?: HeaderImageCreateOrConnectWithoutHeaderInput | HeaderImageCreateOrConnectWithoutHeaderInput[]
    upsert?: HeaderImageUpsertWithWhereUniqueWithoutHeaderInput | HeaderImageUpsertWithWhereUniqueWithoutHeaderInput[]
    createMany?: HeaderImageCreateManyHeaderInputEnvelope
    set?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    disconnect?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    delete?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    connect?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    update?: HeaderImageUpdateWithWhereUniqueWithoutHeaderInput | HeaderImageUpdateWithWhereUniqueWithoutHeaderInput[]
    updateMany?: HeaderImageUpdateManyWithWhereWithoutHeaderInput | HeaderImageUpdateManyWithWhereWithoutHeaderInput[]
    deleteMany?: HeaderImageScalarWhereInput | HeaderImageScalarWhereInput[]
  }

  export type HeaderImageUncheckedUpdateManyWithoutHeaderNestedInput = {
    create?: XOR<HeaderImageCreateWithoutHeaderInput, HeaderImageUncheckedCreateWithoutHeaderInput> | HeaderImageCreateWithoutHeaderInput[] | HeaderImageUncheckedCreateWithoutHeaderInput[]
    connectOrCreate?: HeaderImageCreateOrConnectWithoutHeaderInput | HeaderImageCreateOrConnectWithoutHeaderInput[]
    upsert?: HeaderImageUpsertWithWhereUniqueWithoutHeaderInput | HeaderImageUpsertWithWhereUniqueWithoutHeaderInput[]
    createMany?: HeaderImageCreateManyHeaderInputEnvelope
    set?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    disconnect?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    delete?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    connect?: HeaderImageWhereUniqueInput | HeaderImageWhereUniqueInput[]
    update?: HeaderImageUpdateWithWhereUniqueWithoutHeaderInput | HeaderImageUpdateWithWhereUniqueWithoutHeaderInput[]
    updateMany?: HeaderImageUpdateManyWithWhereWithoutHeaderInput | HeaderImageUpdateManyWithWhereWithoutHeaderInput[]
    deleteMany?: HeaderImageScalarWhereInput | HeaderImageScalarWhereInput[]
  }

  export type HeaderCreateNestedOneWithoutHeaderImageInput = {
    create?: XOR<HeaderCreateWithoutHeaderImageInput, HeaderUncheckedCreateWithoutHeaderImageInput>
    connectOrCreate?: HeaderCreateOrConnectWithoutHeaderImageInput
    connect?: HeaderWhereUniqueInput
  }

  export type HeaderUpdateOneRequiredWithoutHeaderImageNestedInput = {
    create?: XOR<HeaderCreateWithoutHeaderImageInput, HeaderUncheckedCreateWithoutHeaderImageInput>
    connectOrCreate?: HeaderCreateOrConnectWithoutHeaderImageInput
    upsert?: HeaderUpsertWithoutHeaderImageInput
    connect?: HeaderWhereUniqueInput
    update?: XOR<XOR<HeaderUpdateToOneWithWhereWithoutHeaderImageInput, HeaderUpdateWithoutHeaderImageInput>, HeaderUncheckedUpdateWithoutHeaderImageInput>
  }

  export type ProjectCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCategoryInput | ProjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCategoryInput | ProjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCategoryInput | ProjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput> | ProjectCreateWithoutCategoryInput[] | ProjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoryInput | ProjectCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCategoryInput | ProjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectCreateManyCategoryInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCategoryInput | ProjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCategoryInput | ProjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCategoryCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectInput
    connect?: ProjectCategoryWhereUniqueInput
  }

  export type ProjectImageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
  }

  export type ProjectImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectCategoryUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectInput
    upsert?: ProjectCategoryUpsertWithoutProjectInput
    connect?: ProjectCategoryWhereUniqueInput
    update?: XOR<XOR<ProjectCategoryUpdateToOneWithWhereWithoutProjectInput, ProjectCategoryUpdateWithoutProjectInput>, ProjectCategoryUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectImageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectImageUpsertWithWhereUniqueWithoutProjectInput | ProjectImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    set?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    disconnect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    delete?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    update?: ProjectImageUpdateWithWhereUniqueWithoutProjectInput | ProjectImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectImageUpdateManyWithWhereWithoutProjectInput | ProjectImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
  }

  export type ProjectImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectImageUpsertWithWhereUniqueWithoutProjectInput | ProjectImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    set?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    disconnect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    delete?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    update?: ProjectImageUpdateWithWhereUniqueWithoutProjectInput | ProjectImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectImageUpdateManyWithWhereWithoutProjectInput | ProjectImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectImageInput = {
    create?: XOR<ProjectCreateWithoutProjectImageInput, ProjectUncheckedCreateWithoutProjectImageInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectImageInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectImageNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectImageInput, ProjectUncheckedCreateWithoutProjectImageInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectImageInput
    upsert?: ProjectUpsertWithoutProjectImageInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectImageInput, ProjectUpdateWithoutProjectImageInput>, ProjectUncheckedUpdateWithoutProjectImageInput>
  }

  export type ExpertiseCreateNestedManyWithoutAboutInput = {
    create?: XOR<ExpertiseCreateWithoutAboutInput, ExpertiseUncheckedCreateWithoutAboutInput> | ExpertiseCreateWithoutAboutInput[] | ExpertiseUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutAboutInput | ExpertiseCreateOrConnectWithoutAboutInput[]
    createMany?: ExpertiseCreateManyAboutInputEnvelope
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
  }

  export type ExpertiseUncheckedCreateNestedManyWithoutAboutInput = {
    create?: XOR<ExpertiseCreateWithoutAboutInput, ExpertiseUncheckedCreateWithoutAboutInput> | ExpertiseCreateWithoutAboutInput[] | ExpertiseUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutAboutInput | ExpertiseCreateOrConnectWithoutAboutInput[]
    createMany?: ExpertiseCreateManyAboutInputEnvelope
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
  }

  export type ExpertiseUpdateManyWithoutAboutNestedInput = {
    create?: XOR<ExpertiseCreateWithoutAboutInput, ExpertiseUncheckedCreateWithoutAboutInput> | ExpertiseCreateWithoutAboutInput[] | ExpertiseUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutAboutInput | ExpertiseCreateOrConnectWithoutAboutInput[]
    upsert?: ExpertiseUpsertWithWhereUniqueWithoutAboutInput | ExpertiseUpsertWithWhereUniqueWithoutAboutInput[]
    createMany?: ExpertiseCreateManyAboutInputEnvelope
    set?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    disconnect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    delete?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    update?: ExpertiseUpdateWithWhereUniqueWithoutAboutInput | ExpertiseUpdateWithWhereUniqueWithoutAboutInput[]
    updateMany?: ExpertiseUpdateManyWithWhereWithoutAboutInput | ExpertiseUpdateManyWithWhereWithoutAboutInput[]
    deleteMany?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
  }

  export type ExpertiseUncheckedUpdateManyWithoutAboutNestedInput = {
    create?: XOR<ExpertiseCreateWithoutAboutInput, ExpertiseUncheckedCreateWithoutAboutInput> | ExpertiseCreateWithoutAboutInput[] | ExpertiseUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutAboutInput | ExpertiseCreateOrConnectWithoutAboutInput[]
    upsert?: ExpertiseUpsertWithWhereUniqueWithoutAboutInput | ExpertiseUpsertWithWhereUniqueWithoutAboutInput[]
    createMany?: ExpertiseCreateManyAboutInputEnvelope
    set?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    disconnect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    delete?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    update?: ExpertiseUpdateWithWhereUniqueWithoutAboutInput | ExpertiseUpdateWithWhereUniqueWithoutAboutInput[]
    updateMany?: ExpertiseUpdateManyWithWhereWithoutAboutInput | ExpertiseUpdateManyWithWhereWithoutAboutInput[]
    deleteMany?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
  }

  export type AboutCreateNestedOneWithoutExpertiseInput = {
    create?: XOR<AboutCreateWithoutExpertiseInput, AboutUncheckedCreateWithoutExpertiseInput>
    connectOrCreate?: AboutCreateOrConnectWithoutExpertiseInput
    connect?: AboutWhereUniqueInput
  }

  export type AboutUpdateOneRequiredWithoutExpertiseNestedInput = {
    create?: XOR<AboutCreateWithoutExpertiseInput, AboutUncheckedCreateWithoutExpertiseInput>
    connectOrCreate?: AboutCreateOrConnectWithoutExpertiseInput
    upsert?: AboutUpsertWithoutExpertiseInput
    connect?: AboutWhereUniqueInput
    update?: XOR<XOR<AboutUpdateToOneWithWhereWithoutExpertiseInput, AboutUpdateWithoutExpertiseInput>, AboutUncheckedUpdateWithoutExpertiseInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormCreateNestedManyWithoutTypeInput = {
    create?: XOR<FormCreateWithoutTypeInput, FormUncheckedCreateWithoutTypeInput> | FormCreateWithoutTypeInput[] | FormUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: FormCreateOrConnectWithoutTypeInput | FormCreateOrConnectWithoutTypeInput[]
    createMany?: FormCreateManyTypeInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FormUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<FormCreateWithoutTypeInput, FormUncheckedCreateWithoutTypeInput> | FormCreateWithoutTypeInput[] | FormUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: FormCreateOrConnectWithoutTypeInput | FormCreateOrConnectWithoutTypeInput[]
    createMany?: FormCreateManyTypeInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FormUpdateManyWithoutTypeNestedInput = {
    create?: XOR<FormCreateWithoutTypeInput, FormUncheckedCreateWithoutTypeInput> | FormCreateWithoutTypeInput[] | FormUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: FormCreateOrConnectWithoutTypeInput | FormCreateOrConnectWithoutTypeInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutTypeInput | FormUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: FormCreateManyTypeInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutTypeInput | FormUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: FormUpdateManyWithWhereWithoutTypeInput | FormUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<FormCreateWithoutTypeInput, FormUncheckedCreateWithoutTypeInput> | FormCreateWithoutTypeInput[] | FormUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: FormCreateOrConnectWithoutTypeInput | FormCreateOrConnectWithoutTypeInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutTypeInput | FormUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: FormCreateManyTypeInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutTypeInput | FormUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: FormUpdateManyWithWhereWithoutTypeInput | FormUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormCreateNestedManyWithoutBudgetInput = {
    create?: XOR<FormCreateWithoutBudgetInput, FormUncheckedCreateWithoutBudgetInput> | FormCreateWithoutBudgetInput[] | FormUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: FormCreateOrConnectWithoutBudgetInput | FormCreateOrConnectWithoutBudgetInput[]
    createMany?: FormCreateManyBudgetInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FormUncheckedCreateNestedManyWithoutBudgetInput = {
    create?: XOR<FormCreateWithoutBudgetInput, FormUncheckedCreateWithoutBudgetInput> | FormCreateWithoutBudgetInput[] | FormUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: FormCreateOrConnectWithoutBudgetInput | FormCreateOrConnectWithoutBudgetInput[]
    createMany?: FormCreateManyBudgetInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FormUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<FormCreateWithoutBudgetInput, FormUncheckedCreateWithoutBudgetInput> | FormCreateWithoutBudgetInput[] | FormUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: FormCreateOrConnectWithoutBudgetInput | FormCreateOrConnectWithoutBudgetInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutBudgetInput | FormUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: FormCreateManyBudgetInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutBudgetInput | FormUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: FormUpdateManyWithWhereWithoutBudgetInput | FormUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormUncheckedUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<FormCreateWithoutBudgetInput, FormUncheckedCreateWithoutBudgetInput> | FormCreateWithoutBudgetInput[] | FormUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: FormCreateOrConnectWithoutBudgetInput | FormCreateOrConnectWithoutBudgetInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutBudgetInput | FormUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: FormCreateManyBudgetInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutBudgetInput | FormUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: FormUpdateManyWithWhereWithoutBudgetInput | FormUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormTypeCreateNestedOneWithoutFormInput = {
    create?: XOR<FormTypeCreateWithoutFormInput, FormTypeUncheckedCreateWithoutFormInput>
    connectOrCreate?: FormTypeCreateOrConnectWithoutFormInput
    connect?: FormTypeWhereUniqueInput
  }

  export type FormBudgetCreateNestedOneWithoutFormInput = {
    create?: XOR<FormBudgetCreateWithoutFormInput, FormBudgetUncheckedCreateWithoutFormInput>
    connectOrCreate?: FormBudgetCreateOrConnectWithoutFormInput
    connect?: FormBudgetWhereUniqueInput
  }

  export type FormTypeUpdateOneRequiredWithoutFormNestedInput = {
    create?: XOR<FormTypeCreateWithoutFormInput, FormTypeUncheckedCreateWithoutFormInput>
    connectOrCreate?: FormTypeCreateOrConnectWithoutFormInput
    upsert?: FormTypeUpsertWithoutFormInput
    connect?: FormTypeWhereUniqueInput
    update?: XOR<XOR<FormTypeUpdateToOneWithWhereWithoutFormInput, FormTypeUpdateWithoutFormInput>, FormTypeUncheckedUpdateWithoutFormInput>
  }

  export type FormBudgetUpdateOneWithoutFormNestedInput = {
    create?: XOR<FormBudgetCreateWithoutFormInput, FormBudgetUncheckedCreateWithoutFormInput>
    connectOrCreate?: FormBudgetCreateOrConnectWithoutFormInput
    upsert?: FormBudgetUpsertWithoutFormInput
    disconnect?: FormBudgetWhereInput | boolean
    delete?: FormBudgetWhereInput | boolean
    connect?: FormBudgetWhereUniqueInput
    update?: XOR<XOR<FormBudgetUpdateToOneWithWhereWithoutFormInput, FormBudgetUpdateWithoutFormInput>, FormBudgetUncheckedUpdateWithoutFormInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type HeaderImageCreateWithoutHeaderInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type HeaderImageUncheckedCreateWithoutHeaderInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type HeaderImageCreateOrConnectWithoutHeaderInput = {
    where: HeaderImageWhereUniqueInput
    create: XOR<HeaderImageCreateWithoutHeaderInput, HeaderImageUncheckedCreateWithoutHeaderInput>
  }

  export type HeaderImageCreateManyHeaderInputEnvelope = {
    data: HeaderImageCreateManyHeaderInput | HeaderImageCreateManyHeaderInput[]
    skipDuplicates?: boolean
  }

  export type HeaderImageUpsertWithWhereUniqueWithoutHeaderInput = {
    where: HeaderImageWhereUniqueInput
    update: XOR<HeaderImageUpdateWithoutHeaderInput, HeaderImageUncheckedUpdateWithoutHeaderInput>
    create: XOR<HeaderImageCreateWithoutHeaderInput, HeaderImageUncheckedCreateWithoutHeaderInput>
  }

  export type HeaderImageUpdateWithWhereUniqueWithoutHeaderInput = {
    where: HeaderImageWhereUniqueInput
    data: XOR<HeaderImageUpdateWithoutHeaderInput, HeaderImageUncheckedUpdateWithoutHeaderInput>
  }

  export type HeaderImageUpdateManyWithWhereWithoutHeaderInput = {
    where: HeaderImageScalarWhereInput
    data: XOR<HeaderImageUpdateManyMutationInput, HeaderImageUncheckedUpdateManyWithoutHeaderInput>
  }

  export type HeaderImageScalarWhereInput = {
    AND?: HeaderImageScalarWhereInput | HeaderImageScalarWhereInput[]
    OR?: HeaderImageScalarWhereInput[]
    NOT?: HeaderImageScalarWhereInput | HeaderImageScalarWhereInput[]
    id?: StringFilter<"HeaderImage"> | string
    path?: StringFilter<"HeaderImage"> | string
    headerId?: StringFilter<"HeaderImage"> | string
    createdAt?: DateTimeFilter<"HeaderImage"> | Date | string
  }

  export type HeaderCreateWithoutHeaderImageInput = {
    id?: string
    logoText: string
    heroTitle: string
    heroSubtitle: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeaderUncheckedCreateWithoutHeaderImageInput = {
    id?: string
    logoText: string
    heroTitle: string
    heroSubtitle: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeaderCreateOrConnectWithoutHeaderImageInput = {
    where: HeaderWhereUniqueInput
    create: XOR<HeaderCreateWithoutHeaderImageInput, HeaderUncheckedCreateWithoutHeaderImageInput>
  }

  export type HeaderUpsertWithoutHeaderImageInput = {
    update: XOR<HeaderUpdateWithoutHeaderImageInput, HeaderUncheckedUpdateWithoutHeaderImageInput>
    create: XOR<HeaderCreateWithoutHeaderImageInput, HeaderUncheckedCreateWithoutHeaderImageInput>
    where?: HeaderWhereInput
  }

  export type HeaderUpdateToOneWithWhereWithoutHeaderImageInput = {
    where?: HeaderWhereInput
    data: XOR<HeaderUpdateWithoutHeaderImageInput, HeaderUncheckedUpdateWithoutHeaderImageInput>
  }

  export type HeaderUpdateWithoutHeaderImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    primaryButtonText?: StringFieldUpdateOperationsInput | string
    primaryButtonLink?: StringFieldUpdateOperationsInput | string
    secondaryButtonText?: StringFieldUpdateOperationsInput | string
    secondaryButtonLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderUncheckedUpdateWithoutHeaderImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    primaryButtonText?: StringFieldUpdateOperationsInput | string
    primaryButtonLink?: StringFieldUpdateOperationsInput | string
    secondaryButtonText?: StringFieldUpdateOperationsInput | string
    secondaryButtonLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectImage?: ProjectImageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProjectImage?: ProjectImageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCategoryInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectCreateManyCategoryInputEnvelope = {
    data: ProjectCreateManyCategoryInput | ProjectCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCategoryInput, ProjectUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProjectCreateWithoutCategoryInput, ProjectUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCategoryInput, ProjectUncheckedUpdateWithoutCategoryInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCategoryInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringNullableFilter<"Project"> | string | null
    categoryId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectCategoryCreateWithoutProjectInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProjectCategoryUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProjectCategoryCreateOrConnectWithoutProjectInput = {
    where: ProjectCategoryWhereUniqueInput
    create: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput>
  }

  export type ProjectImageCreateWithoutProjectInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type ProjectImageUncheckedCreateWithoutProjectInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type ProjectImageCreateOrConnectWithoutProjectInput = {
    where: ProjectImageWhereUniqueInput
    create: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectImageCreateManyProjectInputEnvelope = {
    data: ProjectImageCreateManyProjectInput | ProjectImageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCategoryUpsertWithoutProjectInput = {
    update: XOR<ProjectCategoryUpdateWithoutProjectInput, ProjectCategoryUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput>
    where?: ProjectCategoryWhereInput
  }

  export type ProjectCategoryUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectCategoryWhereInput
    data: XOR<ProjectCategoryUpdateWithoutProjectInput, ProjectCategoryUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCategoryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCategoryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectImageWhereUniqueInput
    update: XOR<ProjectImageUpdateWithoutProjectInput, ProjectImageUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectImageWhereUniqueInput
    data: XOR<ProjectImageUpdateWithoutProjectInput, ProjectImageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectImageUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectImageScalarWhereInput
    data: XOR<ProjectImageUpdateManyMutationInput, ProjectImageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectImageScalarWhereInput = {
    AND?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
    OR?: ProjectImageScalarWhereInput[]
    NOT?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
    id?: StringFilter<"ProjectImage"> | string
    path?: StringFilter<"ProjectImage"> | string
    projectId?: StringFilter<"ProjectImage"> | string
    createdAt?: DateTimeFilter<"ProjectImage"> | Date | string
  }

  export type ProjectCreateWithoutProjectImageInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ProjectCategoryCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectImageInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutProjectImageInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectImageInput, ProjectUncheckedCreateWithoutProjectImageInput>
  }

  export type ProjectUpsertWithoutProjectImageInput = {
    update: XOR<ProjectUpdateWithoutProjectImageInput, ProjectUncheckedUpdateWithoutProjectImageInput>
    create: XOR<ProjectCreateWithoutProjectImageInput, ProjectUncheckedCreateWithoutProjectImageInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectImageInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectImageInput, ProjectUncheckedUpdateWithoutProjectImageInput>
  }

  export type ProjectUpdateWithoutProjectImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProjectCategoryUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseCreateWithoutAboutInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type ExpertiseUncheckedCreateWithoutAboutInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type ExpertiseCreateOrConnectWithoutAboutInput = {
    where: ExpertiseWhereUniqueInput
    create: XOR<ExpertiseCreateWithoutAboutInput, ExpertiseUncheckedCreateWithoutAboutInput>
  }

  export type ExpertiseCreateManyAboutInputEnvelope = {
    data: ExpertiseCreateManyAboutInput | ExpertiseCreateManyAboutInput[]
    skipDuplicates?: boolean
  }

  export type ExpertiseUpsertWithWhereUniqueWithoutAboutInput = {
    where: ExpertiseWhereUniqueInput
    update: XOR<ExpertiseUpdateWithoutAboutInput, ExpertiseUncheckedUpdateWithoutAboutInput>
    create: XOR<ExpertiseCreateWithoutAboutInput, ExpertiseUncheckedCreateWithoutAboutInput>
  }

  export type ExpertiseUpdateWithWhereUniqueWithoutAboutInput = {
    where: ExpertiseWhereUniqueInput
    data: XOR<ExpertiseUpdateWithoutAboutInput, ExpertiseUncheckedUpdateWithoutAboutInput>
  }

  export type ExpertiseUpdateManyWithWhereWithoutAboutInput = {
    where: ExpertiseScalarWhereInput
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyWithoutAboutInput>
  }

  export type ExpertiseScalarWhereInput = {
    AND?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
    OR?: ExpertiseScalarWhereInput[]
    NOT?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
    id?: StringFilter<"Expertise"> | string
    path?: StringFilter<"Expertise"> | string
    aboutId?: StringFilter<"Expertise"> | string
    createdAt?: DateTimeFilter<"Expertise"> | Date | string
  }

  export type AboutCreateWithoutExpertiseInput = {
    id?: string
    studio: string
    year: string
    description: string
    mission: string
    vision: string
    quote: string
    quoteAuthor: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUncheckedCreateWithoutExpertiseInput = {
    id?: string
    studio: string
    year: string
    description: string
    mission: string
    vision: string
    quote: string
    quoteAuthor: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutCreateOrConnectWithoutExpertiseInput = {
    where: AboutWhereUniqueInput
    create: XOR<AboutCreateWithoutExpertiseInput, AboutUncheckedCreateWithoutExpertiseInput>
  }

  export type AboutUpsertWithoutExpertiseInput = {
    update: XOR<AboutUpdateWithoutExpertiseInput, AboutUncheckedUpdateWithoutExpertiseInput>
    create: XOR<AboutCreateWithoutExpertiseInput, AboutUncheckedCreateWithoutExpertiseInput>
    where?: AboutWhereInput
  }

  export type AboutUpdateToOneWithWhereWithoutExpertiseInput = {
    where?: AboutWhereInput
    data: XOR<AboutUpdateWithoutExpertiseInput, AboutUncheckedUpdateWithoutExpertiseInput>
  }

  export type AboutUpdateWithoutExpertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    quoteAuthor?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUncheckedUpdateWithoutExpertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    quoteAuthor?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateWithoutTypeInput = {
    id?: string
    subject: string
    body: string
    email: string
    createdAt?: Date | string
    budget?: FormBudgetCreateNestedOneWithoutFormInput
  }

  export type FormUncheckedCreateWithoutTypeInput = {
    id?: string
    subject: string
    body: string
    email: string
    budgetId?: string | null
    createdAt?: Date | string
  }

  export type FormCreateOrConnectWithoutTypeInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutTypeInput, FormUncheckedCreateWithoutTypeInput>
  }

  export type FormCreateManyTypeInputEnvelope = {
    data: FormCreateManyTypeInput | FormCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithWhereUniqueWithoutTypeInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutTypeInput, FormUncheckedUpdateWithoutTypeInput>
    create: XOR<FormCreateWithoutTypeInput, FormUncheckedCreateWithoutTypeInput>
  }

  export type FormUpdateWithWhereUniqueWithoutTypeInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutTypeInput, FormUncheckedUpdateWithoutTypeInput>
  }

  export type FormUpdateManyWithWhereWithoutTypeInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutTypeInput>
  }

  export type FormScalarWhereInput = {
    AND?: FormScalarWhereInput | FormScalarWhereInput[]
    OR?: FormScalarWhereInput[]
    NOT?: FormScalarWhereInput | FormScalarWhereInput[]
    id?: StringFilter<"Form"> | string
    subject?: StringFilter<"Form"> | string
    body?: StringFilter<"Form"> | string
    email?: StringFilter<"Form"> | string
    typeId?: StringFilter<"Form"> | string
    budgetId?: StringNullableFilter<"Form"> | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
  }

  export type FormCreateWithoutBudgetInput = {
    id?: string
    subject: string
    body: string
    email: string
    createdAt?: Date | string
    type: FormTypeCreateNestedOneWithoutFormInput
  }

  export type FormUncheckedCreateWithoutBudgetInput = {
    id?: string
    subject: string
    body: string
    email: string
    typeId: string
    createdAt?: Date | string
  }

  export type FormCreateOrConnectWithoutBudgetInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutBudgetInput, FormUncheckedCreateWithoutBudgetInput>
  }

  export type FormCreateManyBudgetInputEnvelope = {
    data: FormCreateManyBudgetInput | FormCreateManyBudgetInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithWhereUniqueWithoutBudgetInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutBudgetInput, FormUncheckedUpdateWithoutBudgetInput>
    create: XOR<FormCreateWithoutBudgetInput, FormUncheckedCreateWithoutBudgetInput>
  }

  export type FormUpdateWithWhereUniqueWithoutBudgetInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutBudgetInput, FormUncheckedUpdateWithoutBudgetInput>
  }

  export type FormUpdateManyWithWhereWithoutBudgetInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutBudgetInput>
  }

  export type FormTypeCreateWithoutFormInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type FormTypeUncheckedCreateWithoutFormInput = {
    id?: string
    title: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type FormTypeCreateOrConnectWithoutFormInput = {
    where: FormTypeWhereUniqueInput
    create: XOR<FormTypeCreateWithoutFormInput, FormTypeUncheckedCreateWithoutFormInput>
  }

  export type FormBudgetCreateWithoutFormInput = {
    id?: string
    text: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type FormBudgetUncheckedCreateWithoutFormInput = {
    id?: string
    text: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type FormBudgetCreateOrConnectWithoutFormInput = {
    where: FormBudgetWhereUniqueInput
    create: XOR<FormBudgetCreateWithoutFormInput, FormBudgetUncheckedCreateWithoutFormInput>
  }

  export type FormTypeUpsertWithoutFormInput = {
    update: XOR<FormTypeUpdateWithoutFormInput, FormTypeUncheckedUpdateWithoutFormInput>
    create: XOR<FormTypeCreateWithoutFormInput, FormTypeUncheckedCreateWithoutFormInput>
    where?: FormTypeWhereInput
  }

  export type FormTypeUpdateToOneWithWhereWithoutFormInput = {
    where?: FormTypeWhereInput
    data: XOR<FormTypeUpdateWithoutFormInput, FormTypeUncheckedUpdateWithoutFormInput>
  }

  export type FormTypeUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTypeUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormBudgetUpsertWithoutFormInput = {
    update: XOR<FormBudgetUpdateWithoutFormInput, FormBudgetUncheckedUpdateWithoutFormInput>
    create: XOR<FormBudgetCreateWithoutFormInput, FormBudgetUncheckedCreateWithoutFormInput>
    where?: FormBudgetWhereInput
  }

  export type FormBudgetUpdateToOneWithWhereWithoutFormInput = {
    where?: FormBudgetWhereInput
    data: XOR<FormBudgetUpdateWithoutFormInput, FormBudgetUncheckedUpdateWithoutFormInput>
  }

  export type FormBudgetUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormBudgetUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderImageCreateManyHeaderInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type HeaderImageUpdateWithoutHeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderImageUncheckedUpdateWithoutHeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeaderImageUncheckedUpdateManyWithoutHeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyCategoryInput = {
    id?: string
    title: string
    description: string
    link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectImage?: ProjectImageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectImage?: ProjectImageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageCreateManyProjectInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type ProjectImageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseCreateManyAboutInput = {
    id?: string
    path: string
    createdAt?: Date | string
  }

  export type ExpertiseUpdateWithoutAboutInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseUncheckedUpdateWithoutAboutInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseUncheckedUpdateManyWithoutAboutInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateManyTypeInput = {
    id?: string
    subject: string
    body: string
    email: string
    budgetId?: string | null
    createdAt?: Date | string
  }

  export type FormUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: FormBudgetUpdateOneWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    budgetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    budgetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateManyBudgetInput = {
    id?: string
    subject: string
    body: string
    email: string
    typeId: string
    createdAt?: Date | string
  }

  export type FormUpdateWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: FormTypeUpdateOneRequiredWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateManyWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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