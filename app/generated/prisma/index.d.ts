// @ts-nocheck

/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Admin
 *
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>;
/**
 * Model FoodItem
 *
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>;
/**
 * Model Order
 *
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>;
/**
 * Model OrderItem
 *
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>;
/**
 * Model FoodCredit
 *
 */
export type FoodCredit = $Result.DefaultSelection<Prisma.$FoodCreditPayload>;
/**
 * Model FoodCreditHistory
 *
 */
export type FoodCreditHistory =
    $Result.DefaultSelection<Prisma.$FoodCreditHistoryPayload>;

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
    U = "log" extends keyof ClientOptions
        ? ClientOptions["log"] extends Array<
              Prisma.LogLevel | Prisma.LogDefinition
          >
            ? Prisma.GetEvents<ClientOptions["log"]>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

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

    constructor(
        optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
    );
    $on<V extends U>(
        eventType: V,
        callback: (
            event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
        ) => void
    ): PrismaClient;

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
    $use(cb: Prisma.Middleware): void;

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

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
    $executeRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

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
    $queryRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

    $transaction<R>(
        fn: (
            prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
        ) => $Utils.JsPromise<R>,
        options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        }
    ): $Utils.JsPromise<R>;

    $extends: $Extensions.ExtendsHook<
        "extends",
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs;
            }
        >
    >;

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
     * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Admins
     * const admins = await prisma.admin.findMany()
     * ```
     */
    get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * ```
     */
    get foodItem(): Prisma.FoodItemDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Orders
     * const orders = await prisma.order.findMany()
     * ```
     */
    get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * ```
     */
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.foodCredit`: Exposes CRUD operations for the **FoodCredit** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more FoodCredits
     * const foodCredits = await prisma.foodCredit.findMany()
     * ```
     */
    get foodCredit(): Prisma.FoodCreditDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.foodCreditHistory`: Exposes CRUD operations for the **FoodCreditHistory** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more FoodCreditHistories
     * const foodCreditHistories = await prisma.foodCreditHistory.findMany()
     * ```
     */
    get foodCreditHistory(): Prisma.FoodCreditHistoryDelegate<
        ExtArgs,
        ClientOptions
    >;
}

export namespace Prisma {
    export import DMMF = runtime.DMMF;

    export type PrismaPromise<T> = $Public.PrismaPromise<T>;

    /**
     * Validator
     */
    export import validator = runtime.Public.validator;

    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
    export import PrismaClientValidationError = runtime.PrismaClientValidationError;

    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag;
    export import empty = runtime.empty;
    export import join = runtime.join;
    export import raw = runtime.raw;
    export import Sql = runtime.Sql;

    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal;

    export type DecimalJsLike = runtime.DecimalJsLike;

    /**
     * Metrics
     */
    export type Metrics = runtime.Metrics;
    export type Metric<T> = runtime.Metric<T>;
    export type MetricHistogram = runtime.MetricHistogram;
    export type MetricHistogramBucket = runtime.MetricHistogramBucket;

    /**
     * Extensions
     */
    export import Extension = $Extensions.UserArgs;
    export import getExtensionContext = runtime.Extensions.getExtensionContext;
    export import Args = $Public.Args;
    export import Payload = $Public.Payload;
    export import Result = $Public.Result;
    export import Exact = $Public.Exact;

    /**
     * Prisma Client JS version: 6.12.0
     * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
     */
    export type PrismaVersion = {
        client: string;
    };

    export const prismaVersion: PrismaVersion;

    /**
     * Utility Types
     */

    export import JsonObject = runtime.JsonObject;
    export import JsonArray = runtime.JsonArray;
    export import JsonValue = runtime.JsonValue;
    export import InputJsonObject = runtime.InputJsonObject;
    export import InputJsonArray = runtime.InputJsonArray;
    export import InputJsonValue = runtime.InputJsonValue;

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
            private DbNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never;
            private constructor();
        }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;

    type SelectAndInclude = {
        select: any;
        include: any;
    };

    type SelectAndOmit = {
        select: any;
        omit: any;
    };

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
        infer U
    >
        ? U
        : T;

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<
        T extends (...args: any) => $Utils.JsPromise<any>
    > = PromiseType<ReturnType<T>>;

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    export type Enumerable<T> = T | Array<T>;

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
    }[keyof T];

    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
    };

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & (T extends SelectAndInclude
        ? "Please either choose `select` or `include`."
        : T extends SelectAndOmit
        ? "Please either choose `select` or `omit`."
        : {});

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & K;

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object
        ? U extends object
            ? (Without<T, U> & U) | (Without<U, T> & T)
            : U
        : T;

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
        : False;

    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U>
        ? U
        : T;

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
        }[K];

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<
        __Either<O, K>
    >;

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>;
        0: EitherLoose<O, K>;
    }[strict];

    type Either<
        O extends object,
        K extends Key,
        strict extends Boolean = 1
    > = O extends unknown ? _Either<O, K, strict> : never;

    export type Union = any;

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
    } & {};

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
    ) extends (k: infer I) => void
        ? I
        : never;

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>;
            }
        >
    >;

    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O
        ? O[K]
        : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown
        ? AtStrict<O, K>
        : never;
    export type At<
        O extends object,
        K extends Key,
        strict extends Boolean = 1
    > = {
        1: AtStrict<O, K>;
        0: AtLoose<O, K>;
    }[strict];

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
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
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >;

    type _Strict<U, _U = U> = U extends unknown
        ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
        : never;

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    /**
  A [[Boolean]]
  */
    export type Boolean = True | False;

    // /**
    // 1
    // */
    export type True = 1;

    /**
  0
  */
    export type False = 0;

    export type Not<B extends Boolean> = {
        0: 1;
        1: 0;
    }[B];

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
        ? 1
        : 0;

    export type Has<U extends Union, U1 extends Union> = Not<
        Extends<Exclude<U1, U>, U1>
    >;

    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0;
            1: 1;
        };
        1: {
            0: 1;
            1: 1;
        };
    }[B1][B2];

    export type Keys<U extends Union> = U extends unknown ? keyof U : never;

    type Cast<A, B> = A extends B ? A : B;

    export const type: unique symbol;

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never;
          }
        : never;

    type FieldPaths<
        T,
        U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
    > = IsObject<T> extends True ? U : T;

    type GetHavingFields<T> = {
        [K in keyof T]: Or<
            Or<Extends<"OR", K>, Extends<"AND", K>>,
            Extends<"NOT", K>
        > extends True
            ? // infer is only needed to not hit TS limit
              // based on the brilliant idea of Pierre-Antoine Mills
              // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
              T[K] extends infer TK
                ? GetHavingFields<
                      UnEnumerate<TK> extends object
                          ? Merge<UnEnumerate<TK>>
                          : never
                  >
                : never
            : {} extends FieldPaths<T[K]>
            ? never
            : K;
    }[keyof T];

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<
        T,
        K extends Enumerable<keyof T> | keyof T
    > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
        ? never
        : T;

    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

    type FieldRefInputType<Model, FieldType> = Model extends never
        ? never
        : FieldRef<Model, FieldType>;

    export const ModelName: {
        User: "User";
        Admin: "Admin";
        FoodItem: "FoodItem";
        Order: "Order";
        OrderItem: "OrderItem";
        FoodCredit: "FoodCredit";
        FoodCreditHistory: "FoodCreditHistory";
    };

    export type ModelName = (typeof ModelName)[keyof typeof ModelName];

    export type Datasources = {
        db?: Datasource;
    };

    interface TypeMapCb<ClientOptions = {}>
        extends $Utils.Fn<
            { extArgs: $Extensions.InternalArgs },
            $Utils.Record<string, any>
        > {
        returns: Prisma.TypeMap<
            this["params"]["extArgs"],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >;
    }

    export type TypeMap<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > = {
        globalOmitOptions: {
            omit: GlobalOmitOptions;
        };
        meta: {
            modelProps:
                | "user"
                | "admin"
                | "foodItem"
                | "order"
                | "orderItem"
                | "foodCredit"
                | "foodCreditHistory";
            txIsolationLevel: Prisma.TransactionIsolationLevel;
        };
        model: {
            User: {
                payload: Prisma.$UserPayload<ExtArgs>;
                fields: Prisma.UserFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.UserFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findFirst: {
                        args: Prisma.UserFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findMany: {
                        args: Prisma.UserFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    create: {
                        args: Prisma.UserCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    createMany: {
                        args: Prisma.UserCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    delete: {
                        args: Prisma.UserDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    update: {
                        args: Prisma.UserUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    deleteMany: {
                        args: Prisma.UserDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.UserUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    upsert: {
                        args: Prisma.UserUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    aggregate: {
                        args: Prisma.UserAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateUser>;
                    };
                    groupBy: {
                        args: Prisma.UserGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<UserGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.UserCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<UserCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Admin: {
                payload: Prisma.$AdminPayload<ExtArgs>;
                fields: Prisma.AdminFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.AdminFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
                    };
                    findFirst: {
                        args: Prisma.AdminFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
                    };
                    findMany: {
                        args: Prisma.AdminFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
                    };
                    create: {
                        args: Prisma.AdminCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
                    };
                    createMany: {
                        args: Prisma.AdminCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
                    };
                    delete: {
                        args: Prisma.AdminDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
                    };
                    update: {
                        args: Prisma.AdminUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
                    };
                    deleteMany: {
                        args: Prisma.AdminDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.AdminUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
                    };
                    upsert: {
                        args: Prisma.AdminUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
                    };
                    aggregate: {
                        args: Prisma.AdminAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateAdmin>;
                    };
                    groupBy: {
                        args: Prisma.AdminGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<AdminGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.AdminCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<AdminCountAggregateOutputType>
                            | number;
                    };
                };
            };
            FoodItem: {
                payload: Prisma.$FoodItemPayload<ExtArgs>;
                fields: Prisma.FoodItemFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.FoodItemFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>;
                    };
                    findFirst: {
                        args: Prisma.FoodItemFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>;
                    };
                    findMany: {
                        args: Prisma.FoodItemFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[];
                    };
                    create: {
                        args: Prisma.FoodItemCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>;
                    };
                    createMany: {
                        args: Prisma.FoodItemCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.FoodItemCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[];
                    };
                    delete: {
                        args: Prisma.FoodItemDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>;
                    };
                    update: {
                        args: Prisma.FoodItemUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>;
                    };
                    deleteMany: {
                        args: Prisma.FoodItemDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.FoodItemUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.FoodItemUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[];
                    };
                    upsert: {
                        args: Prisma.FoodItemUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>;
                    };
                    aggregate: {
                        args: Prisma.FoodItemAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateFoodItem>;
                    };
                    groupBy: {
                        args: Prisma.FoodItemGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<FoodItemGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.FoodItemCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<FoodItemCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Order: {
                payload: Prisma.$OrderPayload<ExtArgs>;
                fields: Prisma.OrderFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
                    };
                    findFirst: {
                        args: Prisma.OrderFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
                    };
                    findMany: {
                        args: Prisma.OrderFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
                    };
                    create: {
                        args: Prisma.OrderCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
                    };
                    createMany: {
                        args: Prisma.OrderCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
                    };
                    delete: {
                        args: Prisma.OrderDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
                    };
                    update: {
                        args: Prisma.OrderUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
                    };
                    deleteMany: {
                        args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
                    };
                    upsert: {
                        args: Prisma.OrderUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
                    };
                    aggregate: {
                        args: Prisma.OrderAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateOrder>;
                    };
                    groupBy: {
                        args: Prisma.OrderGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<OrderGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.OrderCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<OrderCountAggregateOutputType>
                            | number;
                    };
                };
            };
            OrderItem: {
                payload: Prisma.$OrderItemPayload<ExtArgs>;
                fields: Prisma.OrderItemFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                    };
                    findFirst: {
                        args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                    };
                    findMany: {
                        args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                    };
                    create: {
                        args: Prisma.OrderItemCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                    };
                    createMany: {
                        args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                    };
                    delete: {
                        args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                    };
                    update: {
                        args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                    };
                    deleteMany: {
                        args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                    };
                    upsert: {
                        args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                    };
                    aggregate: {
                        args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateOrderItem>;
                    };
                    groupBy: {
                        args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<OrderItemGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.OrderItemCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<OrderItemCountAggregateOutputType>
                            | number;
                    };
                };
            };
            FoodCredit: {
                payload: Prisma.$FoodCreditPayload<ExtArgs>;
                fields: Prisma.FoodCreditFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.FoodCreditFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.FoodCreditFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>;
                    };
                    findFirst: {
                        args: Prisma.FoodCreditFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.FoodCreditFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>;
                    };
                    findMany: {
                        args: Prisma.FoodCreditFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>[];
                    };
                    create: {
                        args: Prisma.FoodCreditCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>;
                    };
                    createMany: {
                        args: Prisma.FoodCreditCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.FoodCreditCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>[];
                    };
                    delete: {
                        args: Prisma.FoodCreditDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>;
                    };
                    update: {
                        args: Prisma.FoodCreditUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>;
                    };
                    deleteMany: {
                        args: Prisma.FoodCreditDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.FoodCreditUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.FoodCreditUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>[];
                    };
                    upsert: {
                        args: Prisma.FoodCreditUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditPayload>;
                    };
                    aggregate: {
                        args: Prisma.FoodCreditAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateFoodCredit>;
                    };
                    groupBy: {
                        args: Prisma.FoodCreditGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<FoodCreditGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.FoodCreditCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<FoodCreditCountAggregateOutputType>
                            | number;
                    };
                };
            };
            FoodCreditHistory: {
                payload: Prisma.$FoodCreditHistoryPayload<ExtArgs>;
                fields: Prisma.FoodCreditHistoryFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.FoodCreditHistoryFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.FoodCreditHistoryFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>;
                    };
                    findFirst: {
                        args: Prisma.FoodCreditHistoryFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.FoodCreditHistoryFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>;
                    };
                    findMany: {
                        args: Prisma.FoodCreditHistoryFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>[];
                    };
                    create: {
                        args: Prisma.FoodCreditHistoryCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>;
                    };
                    createMany: {
                        args: Prisma.FoodCreditHistoryCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.FoodCreditHistoryCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>[];
                    };
                    delete: {
                        args: Prisma.FoodCreditHistoryDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>;
                    };
                    update: {
                        args: Prisma.FoodCreditHistoryUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>;
                    };
                    deleteMany: {
                        args: Prisma.FoodCreditHistoryDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.FoodCreditHistoryUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.FoodCreditHistoryUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>[];
                    };
                    upsert: {
                        args: Prisma.FoodCreditHistoryUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FoodCreditHistoryPayload>;
                    };
                    aggregate: {
                        args: Prisma.FoodCreditHistoryAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateFoodCreditHistory>;
                    };
                    groupBy: {
                        args: Prisma.FoodCreditHistoryGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<FoodCreditHistoryGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.FoodCreditHistoryCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<FoodCreditHistoryCountAggregateOutputType>
                            | number;
                    };
                };
            };
        };
    } & {
        other: {
            payload: any;
            operations: {
                $executeRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[]
                    ];
                    result: any;
                };
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
                $queryRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[]
                    ];
                    result: any;
                };
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
            };
        };
    };
    export const defineExtension: $Extensions.ExtendsHook<
        "define",
        Prisma.TypeMapCb,
        $Extensions.DefaultArgs
    >;
    export type DefaultPrismaClient = PrismaClient;
    export type ErrorFormat = "pretty" | "colorless" | "minimal";
    export interface PrismaClientOptions {
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasources?: Datasources;
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasourceUrl?: string;
        /**
         * @default "colorless"
         */
        errorFormat?: ErrorFormat;
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
        log?: (LogLevel | LogDefinition)[];
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        };
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
        omit?: Prisma.GlobalOmitConfig;
    }
    export type GlobalOmitConfig = {
        user?: UserOmit;
        admin?: AdminOmit;
        foodItem?: FoodItemOmit;
        order?: OrderOmit;
        orderItem?: OrderItemOmit;
        foodCredit?: FoodCreditOmit;
        foodCreditHistory?: FoodCreditHistoryOmit;
    };

    /* Types for Logging */
    export type LogLevel = "info" | "query" | "warn" | "error";
    export type LogDefinition = {
        level: LogLevel;
        emit: "stdout" | "event";
    };

    export type GetLogType<T extends LogLevel | LogDefinition> =
        T extends LogDefinition
            ? T["emit"] extends "event"
                ? T["level"]
                : never
            : never;
    export type GetEvents<T extends any> = T extends Array<
        LogLevel | LogDefinition
    >
        ?
              | GetLogType<T[0]>
              | GetLogType<T[1]>
              | GetLogType<T[2]>
              | GetLogType<T[3]>
        : never;

    export type QueryEvent = {
        timestamp: Date;
        query: string;
        params: string;
        duration: number;
        target: string;
    };

    export type LogEvent = {
        timestamp: Date;
        message: string;
        target: string;
    };
    /* End Types for Logging */

    export type PrismaAction =
        | "findUnique"
        | "findUniqueOrThrow"
        | "findMany"
        | "findFirst"
        | "findFirstOrThrow"
        | "create"
        | "createMany"
        | "createManyAndReturn"
        | "update"
        | "updateMany"
        | "updateManyAndReturn"
        | "upsert"
        | "delete"
        | "deleteMany"
        | "executeRaw"
        | "queryRaw"
        | "aggregate"
        | "count"
        | "runCommandRaw"
        | "findRaw"
        | "groupBy";

    /**
     * These options are being passed into the middleware as "params"
     */
    export type MiddlewareParams = {
        model?: ModelName;
        action: PrismaAction;
        args: any;
        dataPath: string[];
        runInTransaction: boolean;
    };

    /**
     * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
     */
    export type Middleware<T = any> = (
        params: MiddlewareParams,
        next: (params: MiddlewareParams) => $Utils.JsPromise<T>
    ) => $Utils.JsPromise<T>;

    // tested in getLogLevel.test.ts
    export function getLogLevel(
        log: Array<LogLevel | LogDefinition>
    ): LogLevel | undefined;

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<
        Prisma.DefaultPrismaClient,
        runtime.ITXClientDenyList
    >;

    export type Datasource = {
        url?: string;
    };

    /**
     * Count Types
     */

    /**
     * Count Type UserCountOutputType
     */

    export type UserCountOutputType = {
        orders: number;
        creditHistory: number;
    };

    export type UserCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        orders?: boolean | UserCountOutputTypeCountOrdersArgs;
        creditHistory?: boolean | UserCountOutputTypeCountCreditHistoryArgs;
    };

    // Custom InputTypes
    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the UserCountOutputType
         */
        select?: UserCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountOrdersArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: OrderWhereInput;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountCreditHistoryArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: FoodCreditHistoryWhereInput;
    };

    /**
     * Count Type AdminCountOutputType
     */

    export type AdminCountOutputType = {
        creditActions: number;
    };

    export type AdminCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        creditActions?: boolean | AdminCountOutputTypeCountCreditActionsArgs;
    };

    // Custom InputTypes
    /**
     * AdminCountOutputType without action
     */
    export type AdminCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the AdminCountOutputType
         */
        select?: AdminCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * AdminCountOutputType without action
     */
    export type AdminCountOutputTypeCountCreditActionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: FoodCreditHistoryWhereInput;
    };

    /**
     * Count Type FoodItemCountOutputType
     */

    export type FoodItemCountOutputType = {
        orderItems: number;
    };

    export type FoodItemCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        orderItems?: boolean | FoodItemCountOutputTypeCountOrderItemsArgs;
    };

    // Custom InputTypes
    /**
     * FoodItemCountOutputType without action
     */
    export type FoodItemCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItemCountOutputType
         */
        select?: FoodItemCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * FoodItemCountOutputType without action
     */
    export type FoodItemCountOutputTypeCountOrderItemsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: OrderItemWhereInput;
    };

    /**
     * Count Type OrderCountOutputType
     */

    export type OrderCountOutputType = {
        orderItems: number;
    };

    export type OrderCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs;
    };

    // Custom InputTypes
    /**
     * OrderCountOutputType without action
     */
    export type OrderCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderCountOutputType
         */
        select?: OrderCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * OrderCountOutputType without action
     */
    export type OrderCountOutputTypeCountOrderItemsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: OrderItemWhereInput;
    };

    /**
     * Models
     */

    /**
     * Model User
     */

    export type AggregateUser = {
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    export type UserMinAggregateOutputType = {
        id: string | null;
        name: string | null;
        email: string | null;
        password: string | null;
        createdAt: Date | null;
    };

    export type UserMaxAggregateOutputType = {
        id: string | null;
        name: string | null;
        email: string | null;
        password: string | null;
        createdAt: Date | null;
    };

    export type UserCountAggregateOutputType = {
        id: number;
        name: number;
        email: number;
        password: number;
        createdAt: number;
        _all: number;
    };

    export type UserMinAggregateInputType = {
        id?: true;
        name?: true;
        email?: true;
        password?: true;
        createdAt?: true;
    };

    export type UserMaxAggregateInputType = {
        id?: true;
        name?: true;
        email?: true;
        password?: true;
        createdAt?: true;
    };

    export type UserCountAggregateInputType = {
        id?: true;
        name?: true;
        email?: true;
        password?: true;
        createdAt?: true;
        _all?: true;
    };

    export type UserAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which User to aggregate.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Users
         **/
        _count?: true | UserCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: UserMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: UserMaxAggregateInputType;
    };

    export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateUser[P]>
            : GetScalarType<T[P], AggregateUser[P]>;
    };

    export type UserGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: UserWhereInput;
        orderBy?:
            | UserOrderByWithAggregationInput
            | UserOrderByWithAggregationInput[];
        by: UserScalarFieldEnum[] | UserScalarFieldEnum;
        having?: UserScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: UserCountAggregateInputType | true;
        _min?: UserMinAggregateInputType;
        _max?: UserMaxAggregateInputType;
    };

    export type UserGroupByOutputType = {
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    type GetUserGroupByPayload<T extends UserGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<UserGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof UserGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], UserGroupByOutputType[P]>
                        : GetScalarType<T[P], UserGroupByOutputType[P]>;
                }
            >
        >;

    export type UserSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            email?: boolean;
            password?: boolean;
            createdAt?: boolean;
            credits?: boolean | User$creditsArgs<ExtArgs>;
            orders?: boolean | User$ordersArgs<ExtArgs>;
            creditHistory?: boolean | User$creditHistoryArgs<ExtArgs>;
            _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            email?: boolean;
            password?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            email?: boolean;
            password?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectScalar = {
        id?: boolean;
        name?: boolean;
        email?: boolean;
        password?: boolean;
        createdAt?: boolean;
    };

    export type UserOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetOmit<
        "id" | "name" | "email" | "password" | "createdAt",
        ExtArgs["result"]["user"]
    >;
    export type UserInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        credits?: boolean | User$creditsArgs<ExtArgs>;
        orders?: boolean | User$ordersArgs<ExtArgs>;
        creditHistory?: boolean | User$creditHistoryArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type UserIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {};
    export type UserIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {};

    export type $UserPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        name: "User";
        objects: {
            credits: Prisma.$FoodCreditPayload<ExtArgs> | null;
            orders: Prisma.$OrderPayload<ExtArgs>[];
            creditHistory: Prisma.$FoodCreditHistoryPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                name: string;
                email: string;
                password: string;
                createdAt: Date;
            },
            ExtArgs["result"]["user"]
        >;
        composites: {};
    };

    type UserGetPayload<
        S extends boolean | null | undefined | UserDefaultArgs
    > = $Result.GetResult<Prisma.$UserPayload, S>;

    type UserCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: UserCountAggregateInputType | true;
    };

    export interface UserDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["User"];
            meta: { name: "User" };
        };
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
        findUnique<T extends UserFindUniqueArgs>(
            args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
            args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findFirst<T extends UserFindFirstArgs>(
            args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
            args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findMany<T extends UserFindManyArgs>(
            args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

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
        create<T extends UserCreateArgs>(
            args: SelectSubset<T, UserCreateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        createMany<T extends UserCreateManyArgs>(
            args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

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
        createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
            args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

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
        delete<T extends UserDeleteArgs>(
            args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        update<T extends UserUpdateArgs>(
            args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        deleteMany<T extends UserDeleteManyArgs>(
            args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

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
        updateMany<T extends UserUpdateManyArgs>(
            args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

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
        updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
            args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

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
        upsert<T extends UserUpsertArgs>(
            args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
            args?: Subset<T, UserCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], UserCountAggregateOutputType>
                : number
        >;

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
        aggregate<T extends UserAggregateArgs>(
            args: Subset<T, UserAggregateArgs>
        ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: UserGroupByArgs["orderBy"] }
                : { orderBy?: UserGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
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
                                "Field ",
                                P,
                                ` in "having" needs to be provided in "by"`
                            ];
                  }[HavingFields]
                : "take" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : "skip" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
        >(
            args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetUserGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
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
    export interface Prisma__UserClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        credits<T extends User$creditsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$creditsArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        orders<T extends User$ordersArgs<ExtArgs> = {}>(
            args?: Subset<T, User$ordersArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$OrderPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        creditHistory<T extends User$creditHistoryArgs<ExtArgs> = {}>(
            args?: Subset<T, User$creditHistoryArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the User model
     */
    interface UserFieldRefs {
        readonly id: FieldRef<"User", "String">;
        readonly name: FieldRef<"User", "String">;
        readonly email: FieldRef<"User", "String">;
        readonly password: FieldRef<"User", "String">;
        readonly createdAt: FieldRef<"User", "DateTime">;
    }

    // Custom InputTypes
    /**
     * User findUnique
     */
    export type UserFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findUniqueOrThrow
     */
    export type UserFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findFirst
     */
    export type UserFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findFirstOrThrow
     */
    export type UserFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findMany
     */
    export type UserFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which Users to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User create
     */
    export type UserCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The data needed to create a User.
         */
        data: XOR<UserCreateInput, UserUncheckedCreateInput>;
    };

    /**
     * User createMany
     */
    export type UserCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User createManyAndReturn
     */
    export type UserCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User update
     */
    export type UserUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The data needed to update a User.
         */
        data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
        /**
         * Choose, which User to update.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User updateMany
     */
    export type UserUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User updateManyAndReturn
     */
    export type UserUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User upsert
     */
    export type UserUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The filter to search for the User to update in case it exists.
         */
        where: UserWhereUniqueInput;
        /**
         * In case the User found by the `where` argument doesn't exist, create a new User with this data.
         */
        create: XOR<UserCreateInput, UserUncheckedCreateInput>;
        /**
         * In case the User was found with the provided `where` argument, update it with this data.
         */
        update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    };

    /**
     * User delete
     */
    export type UserDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter which User to delete.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User deleteMany
     */
    export type UserDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which Users to delete
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to delete.
         */
        limit?: number;
    };

    /**
     * User.credits
     */
    export type User$creditsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        where?: FoodCreditWhereInput;
    };

    /**
     * User.orders
     */
    export type User$ordersArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        where?: OrderWhereInput;
        orderBy?:
            | OrderOrderByWithRelationInput
            | OrderOrderByWithRelationInput[];
        cursor?: OrderWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
    };

    /**
     * User.creditHistory
     */
    export type User$creditHistoryArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        where?: FoodCreditHistoryWhereInput;
        orderBy?:
            | FoodCreditHistoryOrderByWithRelationInput
            | FoodCreditHistoryOrderByWithRelationInput[];
        cursor?: FoodCreditHistoryWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?:
            | FoodCreditHistoryScalarFieldEnum
            | FoodCreditHistoryScalarFieldEnum[];
    };

    /**
     * User without action
     */
    export type UserDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
    };

    /**
     * Model Admin
     */

    export type AggregateAdmin = {
        _count: AdminCountAggregateOutputType | null;
        _min: AdminMinAggregateOutputType | null;
        _max: AdminMaxAggregateOutputType | null;
    };

    export type AdminMinAggregateOutputType = {
        id: string | null;
        name: string | null;
        email: string | null;
        password: string | null;
        createdAt: Date | null;
    };

    export type AdminMaxAggregateOutputType = {
        id: string | null;
        name: string | null;
        email: string | null;
        password: string | null;
        createdAt: Date | null;
    };

    export type AdminCountAggregateOutputType = {
        id: number;
        name: number;
        email: number;
        password: number;
        createdAt: number;
        _all: number;
    };

    export type AdminMinAggregateInputType = {
        id?: true;
        name?: true;
        email?: true;
        password?: true;
        createdAt?: true;
    };

    export type AdminMaxAggregateInputType = {
        id?: true;
        name?: true;
        email?: true;
        password?: true;
        createdAt?: true;
    };

    export type AdminCountAggregateInputType = {
        id?: true;
        name?: true;
        email?: true;
        password?: true;
        createdAt?: true;
        _all?: true;
    };

    export type AdminAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which Admin to aggregate.
         */
        where?: AdminWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Admins to fetch.
         */
        orderBy?:
            | AdminOrderByWithRelationInput
            | AdminOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AdminWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Admins from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Admins.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Admins
         **/
        _count?: true | AdminCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AdminMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AdminMaxAggregateInputType;
    };

    export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAdmin[P]>
            : GetScalarType<T[P], AggregateAdmin[P]>;
    };

    export type AdminGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: AdminWhereInput;
        orderBy?:
            | AdminOrderByWithAggregationInput
            | AdminOrderByWithAggregationInput[];
        by: AdminScalarFieldEnum[] | AdminScalarFieldEnum;
        having?: AdminScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: AdminCountAggregateInputType | true;
        _min?: AdminMinAggregateInputType;
        _max?: AdminMaxAggregateInputType;
    };

    export type AdminGroupByOutputType = {
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        _count: AdminCountAggregateOutputType | null;
        _min: AdminMinAggregateOutputType | null;
        _max: AdminMaxAggregateOutputType | null;
    };

    type GetAdminGroupByPayload<T extends AdminGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<AdminGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof AdminGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], AdminGroupByOutputType[P]>
                        : GetScalarType<T[P], AdminGroupByOutputType[P]>;
                }
            >
        >;

    export type AdminSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            email?: boolean;
            password?: boolean;
            createdAt?: boolean;
            creditActions?: boolean | Admin$creditActionsArgs<ExtArgs>;
            _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["admin"]
    >;

    export type AdminSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            email?: boolean;
            password?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["admin"]
    >;

    export type AdminSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            email?: boolean;
            password?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["admin"]
    >;

    export type AdminSelectScalar = {
        id?: boolean;
        name?: boolean;
        email?: boolean;
        password?: boolean;
        createdAt?: boolean;
    };

    export type AdminOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetOmit<
        "id" | "name" | "email" | "password" | "createdAt",
        ExtArgs["result"]["admin"]
    >;
    export type AdminInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        creditActions?: boolean | Admin$creditActionsArgs<ExtArgs>;
        _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type AdminIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {};
    export type AdminIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {};

    export type $AdminPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        name: "Admin";
        objects: {
            creditActions: Prisma.$FoodCreditHistoryPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                name: string;
                email: string;
                password: string;
                createdAt: Date;
            },
            ExtArgs["result"]["admin"]
        >;
        composites: {};
    };

    type AdminGetPayload<
        S extends boolean | null | undefined | AdminDefaultArgs
    > = $Result.GetResult<Prisma.$AdminPayload, S>;

    type AdminCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = Omit<AdminFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: AdminCountAggregateInputType | true;
    };

    export interface AdminDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Admin"];
            meta: { name: "Admin" };
        };
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
        findUnique<T extends AdminFindUniqueArgs>(
            args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
            args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findFirst<T extends AdminFindFirstArgs>(
            args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
            args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
         * // Only select the `id`
         * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AdminFindManyArgs>(
            args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

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
        create<T extends AdminCreateArgs>(
            args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        createMany<T extends AdminCreateManyArgs>(
            args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

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
         * // Create many Admins and only return the `id`
         * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(
            args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

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
        delete<T extends AdminDeleteArgs>(
            args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        update<T extends AdminUpdateArgs>(
            args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        deleteMany<T extends AdminDeleteManyArgs>(
            args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

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
        updateMany<T extends AdminUpdateManyArgs>(
            args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

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
         * // Update zero or more Admins and only return the `id`
         * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
        updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(
            args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

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
        upsert<T extends AdminUpsertArgs>(
            args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
            args?: Subset<T, AdminCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], AdminCountAggregateOutputType>
                : number
        >;

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
        aggregate<T extends AdminAggregateArgs>(
            args: Subset<T, AdminAggregateArgs>
        ): Prisma.PrismaPromise<GetAdminAggregateType<T>>;

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
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AdminGroupByArgs["orderBy"] }
                : { orderBy?: AdminGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
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
                                "Field ",
                                P,
                                ` in "having" needs to be provided in "by"`
                            ];
                  }[HavingFields]
                : "take" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : "skip" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
        >(
            args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetAdminGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
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
    export interface Prisma__AdminClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        creditActions<T extends Admin$creditActionsArgs<ExtArgs> = {}>(
            args?: Subset<T, Admin$creditActionsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Admin model
     */
    interface AdminFieldRefs {
        readonly id: FieldRef<"Admin", "String">;
        readonly name: FieldRef<"Admin", "String">;
        readonly email: FieldRef<"Admin", "String">;
        readonly password: FieldRef<"Admin", "String">;
        readonly createdAt: FieldRef<"Admin", "DateTime">;
    }

    // Custom InputTypes
    /**
     * Admin findUnique
     */
    export type AdminFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * Filter, which Admin to fetch.
         */
        where: AdminWhereUniqueInput;
    };

    /**
     * Admin findUniqueOrThrow
     */
    export type AdminFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * Filter, which Admin to fetch.
         */
        where: AdminWhereUniqueInput;
    };

    /**
     * Admin findFirst
     */
    export type AdminFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * Filter, which Admin to fetch.
         */
        where?: AdminWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Admins to fetch.
         */
        orderBy?:
            | AdminOrderByWithRelationInput
            | AdminOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Admins.
         */
        cursor?: AdminWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Admins from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Admins.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Admins.
         */
        distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
    };

    /**
     * Admin findFirstOrThrow
     */
    export type AdminFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * Filter, which Admin to fetch.
         */
        where?: AdminWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Admins to fetch.
         */
        orderBy?:
            | AdminOrderByWithRelationInput
            | AdminOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Admins.
         */
        cursor?: AdminWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Admins from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Admins.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Admins.
         */
        distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
    };

    /**
     * Admin findMany
     */
    export type AdminFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * Filter, which Admins to fetch.
         */
        where?: AdminWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Admins to fetch.
         */
        orderBy?:
            | AdminOrderByWithRelationInput
            | AdminOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Admins.
         */
        cursor?: AdminWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Admins from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Admins.
         */
        skip?: number;
        distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
    };

    /**
     * Admin create
     */
    export type AdminCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * The data needed to create a Admin.
         */
        data: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
    };

    /**
     * Admin createMany
     */
    export type AdminCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to create many Admins.
         */
        data: AdminCreateManyInput | AdminCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Admin createManyAndReturn
     */
    export type AdminCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * The data used to create many Admins.
         */
        data: AdminCreateManyInput | AdminCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Admin update
     */
    export type AdminUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * The data needed to update a Admin.
         */
        data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
        /**
         * Choose, which Admin to update.
         */
        where: AdminWhereUniqueInput;
    };

    /**
     * Admin updateMany
     */
    export type AdminUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to update Admins.
         */
        data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>;
        /**
         * Filter which Admins to update
         */
        where?: AdminWhereInput;
        /**
         * Limit how many Admins to update.
         */
        limit?: number;
    };

    /**
     * Admin updateManyAndReturn
     */
    export type AdminUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * The data used to update Admins.
         */
        data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>;
        /**
         * Filter which Admins to update
         */
        where?: AdminWhereInput;
        /**
         * Limit how many Admins to update.
         */
        limit?: number;
    };

    /**
     * Admin upsert
     */
    export type AdminUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * The filter to search for the Admin to update in case it exists.
         */
        where: AdminWhereUniqueInput;
        /**
         * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
         */
        create: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
        /**
         * In case the Admin was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
    };

    /**
     * Admin delete
     */
    export type AdminDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        /**
         * Filter which Admin to delete.
         */
        where: AdminWhereUniqueInput;
    };

    /**
     * Admin deleteMany
     */
    export type AdminDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which Admins to delete
         */
        where?: AdminWhereInput;
        /**
         * Limit how many Admins to delete.
         */
        limit?: number;
    };

    /**
     * Admin.creditActions
     */
    export type Admin$creditActionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        where?: FoodCreditHistoryWhereInput;
        orderBy?:
            | FoodCreditHistoryOrderByWithRelationInput
            | FoodCreditHistoryOrderByWithRelationInput[];
        cursor?: FoodCreditHistoryWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?:
            | FoodCreditHistoryScalarFieldEnum
            | FoodCreditHistoryScalarFieldEnum[];
    };

    /**
     * Admin without action
     */
    export type AdminDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
    };

    /**
     * Model FoodItem
     */

    export type AggregateFoodItem = {
        _count: FoodItemCountAggregateOutputType | null;
        _avg: FoodItemAvgAggregateOutputType | null;
        _sum: FoodItemSumAggregateOutputType | null;
        _min: FoodItemMinAggregateOutputType | null;
        _max: FoodItemMaxAggregateOutputType | null;
    };

    export type FoodItemAvgAggregateOutputType = {
        price: number | null;
    };

    export type FoodItemSumAggregateOutputType = {
        price: number | null;
    };

    export type FoodItemMinAggregateOutputType = {
        id: string | null;
        name: string | null;
        price: number | null;
        imagePath: string | null;
        description: string | null;
        createdAt: Date | null;
    };

    export type FoodItemMaxAggregateOutputType = {
        id: string | null;
        name: string | null;
        price: number | null;
        imagePath: string | null;
        description: string | null;
        createdAt: Date | null;
    };

    export type FoodItemCountAggregateOutputType = {
        id: number;
        name: number;
        price: number;
        imagePath: number;
        description: number;
        createdAt: number;
        _all: number;
    };

    export type FoodItemAvgAggregateInputType = {
        price?: true;
    };

    export type FoodItemSumAggregateInputType = {
        price?: true;
    };

    export type FoodItemMinAggregateInputType = {
        id?: true;
        name?: true;
        price?: true;
        imagePath?: true;
        description?: true;
        createdAt?: true;
    };

    export type FoodItemMaxAggregateInputType = {
        id?: true;
        name?: true;
        price?: true;
        imagePath?: true;
        description?: true;
        createdAt?: true;
    };

    export type FoodItemCountAggregateInputType = {
        id?: true;
        name?: true;
        price?: true;
        imagePath?: true;
        description?: true;
        createdAt?: true;
        _all?: true;
    };

    export type FoodItemAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which FoodItem to aggregate.
         */
        where?: FoodItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodItems to fetch.
         */
        orderBy?:
            | FoodItemOrderByWithRelationInput
            | FoodItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: FoodItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodItems.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned FoodItems
         **/
        _count?: true | FoodItemCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: FoodItemAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: FoodItemSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: FoodItemMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: FoodItemMaxAggregateInputType;
    };

    export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateFoodItem[P]>
            : GetScalarType<T[P], AggregateFoodItem[P]>;
    };

    export type FoodItemGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: FoodItemWhereInput;
        orderBy?:
            | FoodItemOrderByWithAggregationInput
            | FoodItemOrderByWithAggregationInput[];
        by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum;
        having?: FoodItemScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: FoodItemCountAggregateInputType | true;
        _avg?: FoodItemAvgAggregateInputType;
        _sum?: FoodItemSumAggregateInputType;
        _min?: FoodItemMinAggregateInputType;
        _max?: FoodItemMaxAggregateInputType;
    };

    export type FoodItemGroupByOutputType = {
        id: string;
        name: string;
        price: number;
        imagePath: string;
        description: string | null;
        createdAt: Date;
        _count: FoodItemCountAggregateOutputType | null;
        _avg: FoodItemAvgAggregateOutputType | null;
        _sum: FoodItemSumAggregateOutputType | null;
        _min: FoodItemMinAggregateOutputType | null;
        _max: FoodItemMaxAggregateOutputType | null;
    };

    type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<FoodItemGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof FoodItemGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
                        : GetScalarType<T[P], FoodItemGroupByOutputType[P]>;
                }
            >
        >;

    export type FoodItemSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            price?: boolean;
            imagePath?: boolean;
            description?: boolean;
            createdAt?: boolean;
            orderItems?: boolean | FoodItem$orderItemsArgs<ExtArgs>;
            _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["foodItem"]
    >;

    export type FoodItemSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            price?: boolean;
            imagePath?: boolean;
            description?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["foodItem"]
    >;

    export type FoodItemSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            price?: boolean;
            imagePath?: boolean;
            description?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["foodItem"]
    >;

    export type FoodItemSelectScalar = {
        id?: boolean;
        name?: boolean;
        price?: boolean;
        imagePath?: boolean;
        description?: boolean;
        createdAt?: boolean;
    };

    export type FoodItemOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetOmit<
        "id" | "name" | "price" | "imagePath" | "description" | "createdAt",
        ExtArgs["result"]["foodItem"]
    >;
    export type FoodItemInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        orderItems?: boolean | FoodItem$orderItemsArgs<ExtArgs>;
        _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type FoodItemIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {};
    export type FoodItemIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {};

    export type $FoodItemPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        name: "FoodItem";
        objects: {
            orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                name: string;
                price: number;
                imagePath: string;
                description: string | null;
                createdAt: Date;
            },
            ExtArgs["result"]["foodItem"]
        >;
        composites: {};
    };

    type FoodItemGetPayload<
        S extends boolean | null | undefined | FoodItemDefaultArgs
    > = $Result.GetResult<Prisma.$FoodItemPayload, S>;

    type FoodItemCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = Omit<
        FoodItemFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: FoodItemCountAggregateInputType | true;
    };

    export interface FoodItemDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["FoodItem"];
            meta: { name: "FoodItem" };
        };
        /**
         * Find zero or one FoodItem that matches the filter.
         * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
         * @example
         * // Get one FoodItem
         * const foodItem = await prisma.foodItem.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends FoodItemFindUniqueArgs>(
            args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
         * @example
         * // Get one FoodItem
         * const foodItem = await prisma.foodItem.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(
            args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FoodItem that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
         * @example
         * // Get one FoodItem
         * const foodItem = await prisma.foodItem.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends FoodItemFindFirstArgs>(
            args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FoodItem that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
         * @example
         * // Get one FoodItem
         * const foodItem = await prisma.foodItem.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(
            args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more FoodItems that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all FoodItems
         * const foodItems = await prisma.foodItem.findMany()
         *
         * // Get first 10 FoodItems
         * const foodItems = await prisma.foodItem.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
         *
         */
        findMany<T extends FoodItemFindManyArgs>(
            args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a FoodItem.
         * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
         * @example
         * // Create one FoodItem
         * const FoodItem = await prisma.foodItem.create({
         *   data: {
         *     // ... data to create a FoodItem
         *   }
         * })
         *
         */
        create<T extends FoodItemCreateArgs>(
            args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many FoodItems.
         * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
         * @example
         * // Create many FoodItems
         * const foodItem = await prisma.foodItem.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends FoodItemCreateManyArgs>(
            args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many FoodItems and returns the data saved in the database.
         * @param {FoodItemCreateManyAndReturnArgs} args - Arguments to create many FoodItems.
         * @example
         * // Create many FoodItems
         * const foodItem = await prisma.foodItem.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many FoodItems and only return the `id`
         * const foodItemWithIdOnly = await prisma.foodItem.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends FoodItemCreateManyAndReturnArgs>(
            args?: SelectSubset<T, FoodItemCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a FoodItem.
         * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
         * @example
         * // Delete one FoodItem
         * const FoodItem = await prisma.foodItem.delete({
         *   where: {
         *     // ... filter to delete one FoodItem
         *   }
         * })
         *
         */
        delete<T extends FoodItemDeleteArgs>(
            args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one FoodItem.
         * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
         * @example
         * // Update one FoodItem
         * const foodItem = await prisma.foodItem.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends FoodItemUpdateArgs>(
            args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more FoodItems.
         * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
         * @example
         * // Delete a few FoodItems
         * const { count } = await prisma.foodItem.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends FoodItemDeleteManyArgs>(
            args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FoodItems.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many FoodItems
         * const foodItem = await prisma.foodItem.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends FoodItemUpdateManyArgs>(
            args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FoodItems and returns the data updated in the database.
         * @param {FoodItemUpdateManyAndReturnArgs} args - Arguments to update many FoodItems.
         * @example
         * // Update many FoodItems
         * const foodItem = await prisma.foodItem.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more FoodItems and only return the `id`
         * const foodItemWithIdOnly = await prisma.foodItem.updateManyAndReturn({
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
        updateManyAndReturn<T extends FoodItemUpdateManyAndReturnArgs>(
            args: SelectSubset<T, FoodItemUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one FoodItem.
         * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
         * @example
         * // Update or create a FoodItem
         * const foodItem = await prisma.foodItem.upsert({
         *   create: {
         *     // ... data to create a FoodItem
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the FoodItem we want to update
         *   }
         * })
         */
        upsert<T extends FoodItemUpsertArgs>(
            args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            $Result.GetResult<
                Prisma.$FoodItemPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of FoodItems.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
         * @example
         * // Count the number of FoodItems
         * const count = await prisma.foodItem.count({
         *   where: {
         *     // ... the filter for the FoodItems we want to count
         *   }
         * })
         **/
        count<T extends FoodItemCountArgs>(
            args?: Subset<T, FoodItemCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          FoodItemCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a FoodItem.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends FoodItemAggregateArgs>(
            args: Subset<T, FoodItemAggregateArgs>
        ): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>;

        /**
         * Group by FoodItem.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodItemGroupByArgs} args - Group by arguments.
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
            T extends FoodItemGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: FoodItemGroupByArgs["orderBy"] }
                : { orderBy?: FoodItemGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
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
                                "Field ",
                                P,
                                ` in "having" needs to be provided in "by"`
                            ];
                  }[HavingFields]
                : "take" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : "skip" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
        >(
            args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetFoodItemGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the FoodItem model
         */
        readonly fields: FoodItemFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for FoodItem.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__FoodItemClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        orderItems<T extends FoodItem$orderItemsArgs<ExtArgs> = {}>(
            args?: Subset<T, FoodItem$orderItemsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$OrderItemPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the FoodItem model
     */
    interface FoodItemFieldRefs {
        readonly id: FieldRef<"FoodItem", "String">;
        readonly name: FieldRef<"FoodItem", "String">;
        readonly price: FieldRef<"FoodItem", "Float">;
        readonly imagePath: FieldRef<"FoodItem", "String">;
        readonly description: FieldRef<"FoodItem", "String">;
        readonly createdAt: FieldRef<"FoodItem", "DateTime">;
    }

    // Custom InputTypes
    /**
     * FoodItem findUnique
     */
    export type FoodItemFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * Filter, which FoodItem to fetch.
         */
        where: FoodItemWhereUniqueInput;
    };

    /**
     * FoodItem findUniqueOrThrow
     */
    export type FoodItemFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * Filter, which FoodItem to fetch.
         */
        where: FoodItemWhereUniqueInput;
    };

    /**
     * FoodItem findFirst
     */
    export type FoodItemFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * Filter, which FoodItem to fetch.
         */
        where?: FoodItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodItems to fetch.
         */
        orderBy?:
            | FoodItemOrderByWithRelationInput
            | FoodItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FoodItems.
         */
        cursor?: FoodItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodItems.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FoodItems.
         */
        distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[];
    };

    /**
     * FoodItem findFirstOrThrow
     */
    export type FoodItemFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * Filter, which FoodItem to fetch.
         */
        where?: FoodItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodItems to fetch.
         */
        orderBy?:
            | FoodItemOrderByWithRelationInput
            | FoodItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FoodItems.
         */
        cursor?: FoodItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodItems.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FoodItems.
         */
        distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[];
    };

    /**
     * FoodItem findMany
     */
    export type FoodItemFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * Filter, which FoodItems to fetch.
         */
        where?: FoodItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodItems to fetch.
         */
        orderBy?:
            | FoodItemOrderByWithRelationInput
            | FoodItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing FoodItems.
         */
        cursor?: FoodItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodItems.
         */
        skip?: number;
        distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[];
    };

    /**
     * FoodItem create
     */
    export type FoodItemCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * The data needed to create a FoodItem.
         */
        data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>;
    };

    /**
     * FoodItem createMany
     */
    export type FoodItemCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to create many FoodItems.
         */
        data: FoodItemCreateManyInput | FoodItemCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * FoodItem createManyAndReturn
     */
    export type FoodItemCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * The data used to create many FoodItems.
         */
        data: FoodItemCreateManyInput | FoodItemCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * FoodItem update
     */
    export type FoodItemUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * The data needed to update a FoodItem.
         */
        data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>;
        /**
         * Choose, which FoodItem to update.
         */
        where: FoodItemWhereUniqueInput;
    };

    /**
     * FoodItem updateMany
     */
    export type FoodItemUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to update FoodItems.
         */
        data: XOR<
            FoodItemUpdateManyMutationInput,
            FoodItemUncheckedUpdateManyInput
        >;
        /**
         * Filter which FoodItems to update
         */
        where?: FoodItemWhereInput;
        /**
         * Limit how many FoodItems to update.
         */
        limit?: number;
    };

    /**
     * FoodItem updateManyAndReturn
     */
    export type FoodItemUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * The data used to update FoodItems.
         */
        data: XOR<
            FoodItemUpdateManyMutationInput,
            FoodItemUncheckedUpdateManyInput
        >;
        /**
         * Filter which FoodItems to update
         */
        where?: FoodItemWhereInput;
        /**
         * Limit how many FoodItems to update.
         */
        limit?: number;
    };

    /**
     * FoodItem upsert
     */
    export type FoodItemUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * The filter to search for the FoodItem to update in case it exists.
         */
        where: FoodItemWhereUniqueInput;
        /**
         * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
         */
        create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>;
        /**
         * In case the FoodItem was found with the provided `where` argument, update it with this data.
         */
        update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>;
    };

    /**
     * FoodItem delete
     */
    export type FoodItemDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
        /**
         * Filter which FoodItem to delete.
         */
        where: FoodItemWhereUniqueInput;
    };

    /**
     * FoodItem deleteMany
     */
    export type FoodItemDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which FoodItems to delete
         */
        where?: FoodItemWhereInput;
        /**
         * Limit how many FoodItems to delete.
         */
        limit?: number;
    };

    /**
     * FoodItem.orderItems
     */
    export type FoodItem$orderItemsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        where?: OrderItemWhereInput;
        orderBy?:
            | OrderItemOrderByWithRelationInput
            | OrderItemOrderByWithRelationInput[];
        cursor?: OrderItemWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
    };

    /**
     * FoodItem without action
     */
    export type FoodItemDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodItem
         */
        select?: FoodItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodItem
         */
        omit?: FoodItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodItemInclude<ExtArgs> | null;
    };

    /**
     * Model Order
     */

    export type AggregateOrder = {
        _count: OrderCountAggregateOutputType | null;
        _min: OrderMinAggregateOutputType | null;
        _max: OrderMaxAggregateOutputType | null;
    };

    export type OrderMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        status: string | null;
        arrivalTime: Date | null;
        estimatedReadyTime: Date | null;
        readyNotified: boolean | null;
        createdAt: Date | null;
    };

    export type OrderMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        status: string | null;
        arrivalTime: Date | null;
        estimatedReadyTime: Date | null;
        readyNotified: boolean | null;
        createdAt: Date | null;
    };

    export type OrderCountAggregateOutputType = {
        id: number;
        userId: number;
        status: number;
        arrivalTime: number;
        estimatedReadyTime: number;
        readyNotified: number;
        createdAt: number;
        _all: number;
    };

    export type OrderMinAggregateInputType = {
        id?: true;
        userId?: true;
        status?: true;
        arrivalTime?: true;
        estimatedReadyTime?: true;
        readyNotified?: true;
        createdAt?: true;
    };

    export type OrderMaxAggregateInputType = {
        id?: true;
        userId?: true;
        status?: true;
        arrivalTime?: true;
        estimatedReadyTime?: true;
        readyNotified?: true;
        createdAt?: true;
    };

    export type OrderCountAggregateInputType = {
        id?: true;
        userId?: true;
        status?: true;
        arrivalTime?: true;
        estimatedReadyTime?: true;
        readyNotified?: true;
        createdAt?: true;
        _all?: true;
    };

    export type OrderAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which Order to aggregate.
         */
        where?: OrderWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Orders to fetch.
         */
        orderBy?:
            | OrderOrderByWithRelationInput
            | OrderOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: OrderWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Orders from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Orders.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Orders
         **/
        _count?: true | OrderCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: OrderMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: OrderMaxAggregateInputType;
    };

    export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateOrder[P]>
            : GetScalarType<T[P], AggregateOrder[P]>;
    };

    export type OrderGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: OrderWhereInput;
        orderBy?:
            | OrderOrderByWithAggregationInput
            | OrderOrderByWithAggregationInput[];
        by: OrderScalarFieldEnum[] | OrderScalarFieldEnum;
        having?: OrderScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: OrderCountAggregateInputType | true;
        _min?: OrderMinAggregateInputType;
        _max?: OrderMaxAggregateInputType;
    };

    export type OrderGroupByOutputType = {
        id: string;
        userId: string;
        status: string;
        arrivalTime: Date;
        estimatedReadyTime: Date;
        readyNotified: boolean;
        createdAt: Date;
        _count: OrderCountAggregateOutputType | null;
        _min: OrderMinAggregateOutputType | null;
        _max: OrderMaxAggregateOutputType | null;
    };

    type GetOrderGroupByPayload<T extends OrderGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<OrderGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof OrderGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], OrderGroupByOutputType[P]>
                        : GetScalarType<T[P], OrderGroupByOutputType[P]>;
                }
            >
        >;

    export type OrderSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            status?: boolean;
            arrivalTime?: boolean;
            estimatedReadyTime?: boolean;
            readyNotified?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
            orderItems?: boolean | Order$orderItemsArgs<ExtArgs>;
            _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["order"]
    >;

    export type OrderSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            status?: boolean;
            arrivalTime?: boolean;
            estimatedReadyTime?: boolean;
            readyNotified?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["order"]
    >;

    export type OrderSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            status?: boolean;
            arrivalTime?: boolean;
            estimatedReadyTime?: boolean;
            readyNotified?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["order"]
    >;

    export type OrderSelectScalar = {
        id?: boolean;
        userId?: boolean;
        status?: boolean;
        arrivalTime?: boolean;
        estimatedReadyTime?: boolean;
        readyNotified?: boolean;
        createdAt?: boolean;
    };

    export type OrderOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetOmit<
        | "id"
        | "userId"
        | "status"
        | "arrivalTime"
        | "estimatedReadyTime"
        | "readyNotified"
        | "createdAt",
        ExtArgs["result"]["order"]
    >;
    export type OrderInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
        orderItems?: boolean | Order$orderItemsArgs<ExtArgs>;
        _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type OrderIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type OrderIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $OrderPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        name: "Order";
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
            orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                status: string;
                arrivalTime: Date;
                estimatedReadyTime: Date;
                readyNotified: boolean;
                createdAt: Date;
            },
            ExtArgs["result"]["order"]
        >;
        composites: {};
    };

    type OrderGetPayload<
        S extends boolean | null | undefined | OrderDefaultArgs
    > = $Result.GetResult<Prisma.$OrderPayload, S>;

    type OrderCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = Omit<OrderFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: OrderCountAggregateInputType | true;
    };

    export interface OrderDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Order"];
            meta: { name: "Order" };
        };
        /**
         * Find zero or one Order that matches the filter.
         * @param {OrderFindUniqueArgs} args - Arguments to find a Order
         * @example
         * // Get one Order
         * const order = await prisma.order.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends OrderFindUniqueArgs>(
            args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Order that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
         * @example
         * // Get one Order
         * const order = await prisma.order.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
            args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Order that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderFindFirstArgs} args - Arguments to find a Order
         * @example
         * // Get one Order
         * const order = await prisma.order.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends OrderFindFirstArgs>(
            args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Order that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
         * @example
         * // Get one Order
         * const order = await prisma.order.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
            args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Orders that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Orders
         * const orders = await prisma.order.findMany()
         *
         * // Get first 10 Orders
         * const orders = await prisma.order.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
         *
         */
        findMany<T extends OrderFindManyArgs>(
            args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Order.
         * @param {OrderCreateArgs} args - Arguments to create a Order.
         * @example
         * // Create one Order
         * const Order = await prisma.order.create({
         *   data: {
         *     // ... data to create a Order
         *   }
         * })
         *
         */
        create<T extends OrderCreateArgs>(
            args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Orders.
         * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
         * @example
         * // Create many Orders
         * const order = await prisma.order.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends OrderCreateManyArgs>(
            args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Orders and returns the data saved in the database.
         * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
         * @example
         * // Create many Orders
         * const order = await prisma.order.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Orders and only return the `id`
         * const orderWithIdOnly = await prisma.order.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(
            args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Order.
         * @param {OrderDeleteArgs} args - Arguments to delete one Order.
         * @example
         * // Delete one Order
         * const Order = await prisma.order.delete({
         *   where: {
         *     // ... filter to delete one Order
         *   }
         * })
         *
         */
        delete<T extends OrderDeleteArgs>(
            args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Order.
         * @param {OrderUpdateArgs} args - Arguments to update one Order.
         * @example
         * // Update one Order
         * const order = await prisma.order.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends OrderUpdateArgs>(
            args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Orders.
         * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
         * @example
         * // Delete a few Orders
         * const { count } = await prisma.order.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends OrderDeleteManyArgs>(
            args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Orders.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Orders
         * const order = await prisma.order.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends OrderUpdateManyArgs>(
            args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Orders and returns the data updated in the database.
         * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
         * @example
         * // Update many Orders
         * const order = await prisma.order.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Orders and only return the `id`
         * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
        updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(
            args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Order.
         * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
         * @example
         * // Update or create a Order
         * const order = await prisma.order.upsert({
         *   create: {
         *     // ... data to create a Order
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Order we want to update
         *   }
         * })
         */
        upsert<T extends OrderUpsertArgs>(
            args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
        ): Prisma__OrderClient<
            $Result.GetResult<
                Prisma.$OrderPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Orders.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderCountArgs} args - Arguments to filter Orders to count.
         * @example
         * // Count the number of Orders
         * const count = await prisma.order.count({
         *   where: {
         *     // ... the filter for the Orders we want to count
         *   }
         * })
         **/
        count<T extends OrderCountArgs>(
            args?: Subset<T, OrderCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], OrderCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Order.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends OrderAggregateArgs>(
            args: Subset<T, OrderAggregateArgs>
        ): Prisma.PrismaPromise<GetOrderAggregateType<T>>;

        /**
         * Group by Order.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderGroupByArgs} args - Group by arguments.
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
            T extends OrderGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: OrderGroupByArgs["orderBy"] }
                : { orderBy?: OrderGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
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
                                "Field ",
                                P,
                                ` in "having" needs to be provided in "by"`
                            ];
                  }[HavingFields]
                : "take" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : "skip" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
        >(
            args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetOrderGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Order model
         */
        readonly fields: OrderFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Order.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__OrderClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(
            args?: Subset<T, Order$orderItemsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$OrderItemPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Order model
     */
    interface OrderFieldRefs {
        readonly id: FieldRef<"Order", "String">;
        readonly userId: FieldRef<"Order", "String">;
        readonly status: FieldRef<"Order", "String">;
        readonly arrivalTime: FieldRef<"Order", "DateTime">;
        readonly estimatedReadyTime: FieldRef<"Order", "DateTime">;
        readonly readyNotified: FieldRef<"Order", "Boolean">;
        readonly createdAt: FieldRef<"Order", "DateTime">;
    }

    // Custom InputTypes
    /**
     * Order findUnique
     */
    export type OrderFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * Filter, which Order to fetch.
         */
        where: OrderWhereUniqueInput;
    };

    /**
     * Order findUniqueOrThrow
     */
    export type OrderFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * Filter, which Order to fetch.
         */
        where: OrderWhereUniqueInput;
    };

    /**
     * Order findFirst
     */
    export type OrderFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * Filter, which Order to fetch.
         */
        where?: OrderWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Orders to fetch.
         */
        orderBy?:
            | OrderOrderByWithRelationInput
            | OrderOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Orders.
         */
        cursor?: OrderWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Orders from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Orders.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Orders.
         */
        distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
    };

    /**
     * Order findFirstOrThrow
     */
    export type OrderFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * Filter, which Order to fetch.
         */
        where?: OrderWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Orders to fetch.
         */
        orderBy?:
            | OrderOrderByWithRelationInput
            | OrderOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Orders.
         */
        cursor?: OrderWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Orders from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Orders.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Orders.
         */
        distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
    };

    /**
     * Order findMany
     */
    export type OrderFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * Filter, which Orders to fetch.
         */
        where?: OrderWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Orders to fetch.
         */
        orderBy?:
            | OrderOrderByWithRelationInput
            | OrderOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Orders.
         */
        cursor?: OrderWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Orders from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Orders.
         */
        skip?: number;
        distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
    };

    /**
     * Order create
     */
    export type OrderCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * The data needed to create a Order.
         */
        data: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
    };

    /**
     * Order createMany
     */
    export type OrderCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to create many Orders.
         */
        data: OrderCreateManyInput | OrderCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Order createManyAndReturn
     */
    export type OrderCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * The data used to create many Orders.
         */
        data: OrderCreateManyInput | OrderCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Order update
     */
    export type OrderUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * The data needed to update a Order.
         */
        data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
        /**
         * Choose, which Order to update.
         */
        where: OrderWhereUniqueInput;
    };

    /**
     * Order updateMany
     */
    export type OrderUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to update Orders.
         */
        data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>;
        /**
         * Filter which Orders to update
         */
        where?: OrderWhereInput;
        /**
         * Limit how many Orders to update.
         */
        limit?: number;
    };

    /**
     * Order updateManyAndReturn
     */
    export type OrderUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * The data used to update Orders.
         */
        data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>;
        /**
         * Filter which Orders to update
         */
        where?: OrderWhereInput;
        /**
         * Limit how many Orders to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Order upsert
     */
    export type OrderUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * The filter to search for the Order to update in case it exists.
         */
        where: OrderWhereUniqueInput;
        /**
         * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
         */
        create: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
        /**
         * In case the Order was found with the provided `where` argument, update it with this data.
         */
        update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
    };

    /**
     * Order delete
     */
    export type OrderDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
        /**
         * Filter which Order to delete.
         */
        where: OrderWhereUniqueInput;
    };

    /**
     * Order deleteMany
     */
    export type OrderDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which Orders to delete
         */
        where?: OrderWhereInput;
        /**
         * Limit how many Orders to delete.
         */
        limit?: number;
    };

    /**
     * Order.orderItems
     */
    export type Order$orderItemsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        where?: OrderItemWhereInput;
        orderBy?:
            | OrderItemOrderByWithRelationInput
            | OrderItemOrderByWithRelationInput[];
        cursor?: OrderItemWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
    };

    /**
     * Order without action
     */
    export type OrderDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Order
         */
        select?: OrderSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Order
         */
        omit?: OrderOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderInclude<ExtArgs> | null;
    };

    /**
     * Model OrderItem
     */

    export type AggregateOrderItem = {
        _count: OrderItemCountAggregateOutputType | null;
        _avg: OrderItemAvgAggregateOutputType | null;
        _sum: OrderItemSumAggregateOutputType | null;
        _min: OrderItemMinAggregateOutputType | null;
        _max: OrderItemMaxAggregateOutputType | null;
    };

    export type OrderItemAvgAggregateOutputType = {
        quantity: number | null;
    };

    export type OrderItemSumAggregateOutputType = {
        quantity: number | null;
    };

    export type OrderItemMinAggregateOutputType = {
        id: string | null;
        orderId: string | null;
        foodItemId: string | null;
        quantity: number | null;
        customizations: string | null;
    };

    export type OrderItemMaxAggregateOutputType = {
        id: string | null;
        orderId: string | null;
        foodItemId: string | null;
        quantity: number | null;
        customizations: string | null;
    };

    export type OrderItemCountAggregateOutputType = {
        id: number;
        orderId: number;
        foodItemId: number;
        quantity: number;
        customizations: number;
        _all: number;
    };

    export type OrderItemAvgAggregateInputType = {
        quantity?: true;
    };

    export type OrderItemSumAggregateInputType = {
        quantity?: true;
    };

    export type OrderItemMinAggregateInputType = {
        id?: true;
        orderId?: true;
        foodItemId?: true;
        quantity?: true;
        customizations?: true;
    };

    export type OrderItemMaxAggregateInputType = {
        id?: true;
        orderId?: true;
        foodItemId?: true;
        quantity?: true;
        customizations?: true;
    };

    export type OrderItemCountAggregateInputType = {
        id?: true;
        orderId?: true;
        foodItemId?: true;
        quantity?: true;
        customizations?: true;
        _all?: true;
    };

    export type OrderItemAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which OrderItem to aggregate.
         */
        where?: OrderItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of OrderItems to fetch.
         */
        orderBy?:
            | OrderItemOrderByWithRelationInput
            | OrderItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: OrderItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` OrderItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` OrderItems.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned OrderItems
         **/
        _count?: true | OrderItemCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: OrderItemAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: OrderItemSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: OrderItemMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: OrderItemMaxAggregateInputType;
    };

    export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateOrderItem[P]>
            : GetScalarType<T[P], AggregateOrderItem[P]>;
    };

    export type OrderItemGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: OrderItemWhereInput;
        orderBy?:
            | OrderItemOrderByWithAggregationInput
            | OrderItemOrderByWithAggregationInput[];
        by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum;
        having?: OrderItemScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: OrderItemCountAggregateInputType | true;
        _avg?: OrderItemAvgAggregateInputType;
        _sum?: OrderItemSumAggregateInputType;
        _min?: OrderItemMinAggregateInputType;
        _max?: OrderItemMaxAggregateInputType;
    };

    export type OrderItemGroupByOutputType = {
        id: string;
        orderId: string;
        foodItemId: string;
        quantity: number;
        customizations: string | null;
        _count: OrderItemCountAggregateOutputType | null;
        _avg: OrderItemAvgAggregateOutputType | null;
        _sum: OrderItemSumAggregateOutputType | null;
        _min: OrderItemMinAggregateOutputType | null;
        _max: OrderItemMaxAggregateOutputType | null;
    };

    type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<OrderItemGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof OrderItemGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
                        : GetScalarType<T[P], OrderItemGroupByOutputType[P]>;
                }
            >
        >;

    export type OrderItemSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            orderId?: boolean;
            foodItemId?: boolean;
            quantity?: boolean;
            customizations?: boolean;
            order?: boolean | OrderDefaultArgs<ExtArgs>;
            foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["orderItem"]
    >;

    export type OrderItemSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            orderId?: boolean;
            foodItemId?: boolean;
            quantity?: boolean;
            customizations?: boolean;
            order?: boolean | OrderDefaultArgs<ExtArgs>;
            foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["orderItem"]
    >;

    export type OrderItemSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            orderId?: boolean;
            foodItemId?: boolean;
            quantity?: boolean;
            customizations?: boolean;
            order?: boolean | OrderDefaultArgs<ExtArgs>;
            foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["orderItem"]
    >;

    export type OrderItemSelectScalar = {
        id?: boolean;
        orderId?: boolean;
        foodItemId?: boolean;
        quantity?: boolean;
        customizations?: boolean;
    };

    export type OrderItemOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetOmit<
        "id" | "orderId" | "foodItemId" | "quantity" | "customizations",
        ExtArgs["result"]["orderItem"]
    >;
    export type OrderItemInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        order?: boolean | OrderDefaultArgs<ExtArgs>;
        foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>;
    };
    export type OrderItemIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        order?: boolean | OrderDefaultArgs<ExtArgs>;
        foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>;
    };
    export type OrderItemIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        order?: boolean | OrderDefaultArgs<ExtArgs>;
        foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>;
    };

    export type $OrderItemPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        name: "OrderItem";
        objects: {
            order: Prisma.$OrderPayload<ExtArgs>;
            foodItem: Prisma.$FoodItemPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                orderId: string;
                foodItemId: string;
                quantity: number;
                customizations: string | null;
            },
            ExtArgs["result"]["orderItem"]
        >;
        composites: {};
    };

    type OrderItemGetPayload<
        S extends boolean | null | undefined | OrderItemDefaultArgs
    > = $Result.GetResult<Prisma.$OrderItemPayload, S>;

    type OrderItemCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = Omit<
        OrderItemFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: OrderItemCountAggregateInputType | true;
    };

    export interface OrderItemDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["OrderItem"];
            meta: { name: "OrderItem" };
        };
        /**
         * Find zero or one OrderItem that matches the filter.
         * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
         * @example
         * // Get one OrderItem
         * const orderItem = await prisma.orderItem.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends OrderItemFindUniqueArgs>(
            args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
         * @example
         * // Get one OrderItem
         * const orderItem = await prisma.orderItem.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(
            args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first OrderItem that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
         * @example
         * // Get one OrderItem
         * const orderItem = await prisma.orderItem.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends OrderItemFindFirstArgs>(
            args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first OrderItem that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
         * @example
         * // Get one OrderItem
         * const orderItem = await prisma.orderItem.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(
            args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more OrderItems that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all OrderItems
         * const orderItems = await prisma.orderItem.findMany()
         *
         * // Get first 10 OrderItems
         * const orderItems = await prisma.orderItem.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
         *
         */
        findMany<T extends OrderItemFindManyArgs>(
            args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a OrderItem.
         * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
         * @example
         * // Create one OrderItem
         * const OrderItem = await prisma.orderItem.create({
         *   data: {
         *     // ... data to create a OrderItem
         *   }
         * })
         *
         */
        create<T extends OrderItemCreateArgs>(
            args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many OrderItems.
         * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
         * @example
         * // Create many OrderItems
         * const orderItem = await prisma.orderItem.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends OrderItemCreateManyArgs>(
            args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many OrderItems and returns the data saved in the database.
         * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
         * @example
         * // Create many OrderItems
         * const orderItem = await prisma.orderItem.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many OrderItems and only return the `id`
         * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(
            args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a OrderItem.
         * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
         * @example
         * // Delete one OrderItem
         * const OrderItem = await prisma.orderItem.delete({
         *   where: {
         *     // ... filter to delete one OrderItem
         *   }
         * })
         *
         */
        delete<T extends OrderItemDeleteArgs>(
            args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one OrderItem.
         * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
         * @example
         * // Update one OrderItem
         * const orderItem = await prisma.orderItem.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends OrderItemUpdateArgs>(
            args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more OrderItems.
         * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
         * @example
         * // Delete a few OrderItems
         * const { count } = await prisma.orderItem.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends OrderItemDeleteManyArgs>(
            args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more OrderItems.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many OrderItems
         * const orderItem = await prisma.orderItem.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends OrderItemUpdateManyArgs>(
            args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more OrderItems and returns the data updated in the database.
         * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
         * @example
         * // Update many OrderItems
         * const orderItem = await prisma.orderItem.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more OrderItems and only return the `id`
         * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
        updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(
            args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one OrderItem.
         * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
         * @example
         * // Update or create a OrderItem
         * const orderItem = await prisma.orderItem.upsert({
         *   create: {
         *     // ... data to create a OrderItem
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the OrderItem we want to update
         *   }
         * })
         */
        upsert<T extends OrderItemUpsertArgs>(
            args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>
        ): Prisma__OrderItemClient<
            $Result.GetResult<
                Prisma.$OrderItemPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of OrderItems.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
         * @example
         * // Count the number of OrderItems
         * const count = await prisma.orderItem.count({
         *   where: {
         *     // ... the filter for the OrderItems we want to count
         *   }
         * })
         **/
        count<T extends OrderItemCountArgs>(
            args?: Subset<T, OrderItemCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          OrderItemCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a OrderItem.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends OrderItemAggregateArgs>(
            args: Subset<T, OrderItemAggregateArgs>
        ): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>;

        /**
         * Group by OrderItem.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrderItemGroupByArgs} args - Group by arguments.
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
            T extends OrderItemGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: OrderItemGroupByArgs["orderBy"] }
                : { orderBy?: OrderItemGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
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
                                "Field ",
                                P,
                                ` in "having" needs to be provided in "by"`
                            ];
                  }[HavingFields]
                : "take" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : "skip" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
        >(
            args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetOrderItemGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the OrderItem model
         */
        readonly fields: OrderItemFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for OrderItem.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__OrderItemClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        order<T extends OrderDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, OrderDefaultArgs<ExtArgs>>
        ): Prisma__OrderClient<
            | $Result.GetResult<
                  Prisma.$OrderPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        foodItem<T extends FoodItemDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, FoodItemDefaultArgs<ExtArgs>>
        ): Prisma__FoodItemClient<
            | $Result.GetResult<
                  Prisma.$FoodItemPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the OrderItem model
     */
    interface OrderItemFieldRefs {
        readonly id: FieldRef<"OrderItem", "String">;
        readonly orderId: FieldRef<"OrderItem", "String">;
        readonly foodItemId: FieldRef<"OrderItem", "String">;
        readonly quantity: FieldRef<"OrderItem", "Int">;
        readonly customizations: FieldRef<"OrderItem", "String">;
    }

    // Custom InputTypes
    /**
     * OrderItem findUnique
     */
    export type OrderItemFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * Filter, which OrderItem to fetch.
         */
        where: OrderItemWhereUniqueInput;
    };

    /**
     * OrderItem findUniqueOrThrow
     */
    export type OrderItemFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * Filter, which OrderItem to fetch.
         */
        where: OrderItemWhereUniqueInput;
    };

    /**
     * OrderItem findFirst
     */
    export type OrderItemFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * Filter, which OrderItem to fetch.
         */
        where?: OrderItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of OrderItems to fetch.
         */
        orderBy?:
            | OrderItemOrderByWithRelationInput
            | OrderItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for OrderItems.
         */
        cursor?: OrderItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` OrderItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` OrderItems.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of OrderItems.
         */
        distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
    };

    /**
     * OrderItem findFirstOrThrow
     */
    export type OrderItemFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * Filter, which OrderItem to fetch.
         */
        where?: OrderItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of OrderItems to fetch.
         */
        orderBy?:
            | OrderItemOrderByWithRelationInput
            | OrderItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for OrderItems.
         */
        cursor?: OrderItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` OrderItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` OrderItems.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of OrderItems.
         */
        distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
    };

    /**
     * OrderItem findMany
     */
    export type OrderItemFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * Filter, which OrderItems to fetch.
         */
        where?: OrderItemWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of OrderItems to fetch.
         */
        orderBy?:
            | OrderItemOrderByWithRelationInput
            | OrderItemOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing OrderItems.
         */
        cursor?: OrderItemWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` OrderItems from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` OrderItems.
         */
        skip?: number;
        distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
    };

    /**
     * OrderItem create
     */
    export type OrderItemCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * The data needed to create a OrderItem.
         */
        data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>;
    };

    /**
     * OrderItem createMany
     */
    export type OrderItemCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to create many OrderItems.
         */
        data: OrderItemCreateManyInput | OrderItemCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * OrderItem createManyAndReturn
     */
    export type OrderItemCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * The data used to create many OrderItems.
         */
        data: OrderItemCreateManyInput | OrderItemCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * OrderItem update
     */
    export type OrderItemUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * The data needed to update a OrderItem.
         */
        data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>;
        /**
         * Choose, which OrderItem to update.
         */
        where: OrderItemWhereUniqueInput;
    };

    /**
     * OrderItem updateMany
     */
    export type OrderItemUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to update OrderItems.
         */
        data: XOR<
            OrderItemUpdateManyMutationInput,
            OrderItemUncheckedUpdateManyInput
        >;
        /**
         * Filter which OrderItems to update
         */
        where?: OrderItemWhereInput;
        /**
         * Limit how many OrderItems to update.
         */
        limit?: number;
    };

    /**
     * OrderItem updateManyAndReturn
     */
    export type OrderItemUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * The data used to update OrderItems.
         */
        data: XOR<
            OrderItemUpdateManyMutationInput,
            OrderItemUncheckedUpdateManyInput
        >;
        /**
         * Filter which OrderItems to update
         */
        where?: OrderItemWhereInput;
        /**
         * Limit how many OrderItems to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * OrderItem upsert
     */
    export type OrderItemUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * The filter to search for the OrderItem to update in case it exists.
         */
        where: OrderItemWhereUniqueInput;
        /**
         * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
         */
        create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>;
        /**
         * In case the OrderItem was found with the provided `where` argument, update it with this data.
         */
        update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>;
    };

    /**
     * OrderItem delete
     */
    export type OrderItemDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
        /**
         * Filter which OrderItem to delete.
         */
        where: OrderItemWhereUniqueInput;
    };

    /**
     * OrderItem deleteMany
     */
    export type OrderItemDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which OrderItems to delete
         */
        where?: OrderItemWhereInput;
        /**
         * Limit how many OrderItems to delete.
         */
        limit?: number;
    };

    /**
     * OrderItem without action
     */
    export type OrderItemDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the OrderItem
         */
        select?: OrderItemSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the OrderItem
         */
        omit?: OrderItemOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrderItemInclude<ExtArgs> | null;
    };

    /**
     * Model FoodCredit
     */

    export type AggregateFoodCredit = {
        _count: FoodCreditCountAggregateOutputType | null;
        _avg: FoodCreditAvgAggregateOutputType | null;
        _sum: FoodCreditSumAggregateOutputType | null;
        _min: FoodCreditMinAggregateOutputType | null;
        _max: FoodCreditMaxAggregateOutputType | null;
    };

    export type FoodCreditAvgAggregateOutputType = {
        balance: number | null;
    };

    export type FoodCreditSumAggregateOutputType = {
        balance: number | null;
    };

    export type FoodCreditMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        balance: number | null;
    };

    export type FoodCreditMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        balance: number | null;
    };

    export type FoodCreditCountAggregateOutputType = {
        id: number;
        userId: number;
        balance: number;
        _all: number;
    };

    export type FoodCreditAvgAggregateInputType = {
        balance?: true;
    };

    export type FoodCreditSumAggregateInputType = {
        balance?: true;
    };

    export type FoodCreditMinAggregateInputType = {
        id?: true;
        userId?: true;
        balance?: true;
    };

    export type FoodCreditMaxAggregateInputType = {
        id?: true;
        userId?: true;
        balance?: true;
    };

    export type FoodCreditCountAggregateInputType = {
        id?: true;
        userId?: true;
        balance?: true;
        _all?: true;
    };

    export type FoodCreditAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which FoodCredit to aggregate.
         */
        where?: FoodCreditWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCredits to fetch.
         */
        orderBy?:
            | FoodCreditOrderByWithRelationInput
            | FoodCreditOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: FoodCreditWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCredits from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCredits.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned FoodCredits
         **/
        _count?: true | FoodCreditCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: FoodCreditAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: FoodCreditSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: FoodCreditMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: FoodCreditMaxAggregateInputType;
    };

    export type GetFoodCreditAggregateType<T extends FoodCreditAggregateArgs> =
        {
            [P in keyof T & keyof AggregateFoodCredit]: P extends
                | "_count"
                | "count"
                ? T[P] extends true
                    ? number
                    : GetScalarType<T[P], AggregateFoodCredit[P]>
                : GetScalarType<T[P], AggregateFoodCredit[P]>;
        };

    export type FoodCreditGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: FoodCreditWhereInput;
        orderBy?:
            | FoodCreditOrderByWithAggregationInput
            | FoodCreditOrderByWithAggregationInput[];
        by: FoodCreditScalarFieldEnum[] | FoodCreditScalarFieldEnum;
        having?: FoodCreditScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: FoodCreditCountAggregateInputType | true;
        _avg?: FoodCreditAvgAggregateInputType;
        _sum?: FoodCreditSumAggregateInputType;
        _min?: FoodCreditMinAggregateInputType;
        _max?: FoodCreditMaxAggregateInputType;
    };

    export type FoodCreditGroupByOutputType = {
        id: string;
        userId: string;
        balance: number;
        _count: FoodCreditCountAggregateOutputType | null;
        _avg: FoodCreditAvgAggregateOutputType | null;
        _sum: FoodCreditSumAggregateOutputType | null;
        _min: FoodCreditMinAggregateOutputType | null;
        _max: FoodCreditMaxAggregateOutputType | null;
    };

    type GetFoodCreditGroupByPayload<T extends FoodCreditGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<FoodCreditGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof FoodCreditGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  FoodCreditGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], FoodCreditGroupByOutputType[P]>;
                }
            >
        >;

    export type FoodCreditSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            balance?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["foodCredit"]
    >;

    export type FoodCreditSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            balance?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["foodCredit"]
    >;

    export type FoodCreditSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            balance?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["foodCredit"]
    >;

    export type FoodCreditSelectScalar = {
        id?: boolean;
        userId?: boolean;
        balance?: boolean;
    };

    export type FoodCreditOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetOmit<
        "id" | "userId" | "balance",
        ExtArgs["result"]["foodCredit"]
    >;
    export type FoodCreditInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type FoodCreditIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type FoodCreditIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $FoodCreditPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        name: "FoodCredit";
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                balance: number;
            },
            ExtArgs["result"]["foodCredit"]
        >;
        composites: {};
    };

    type FoodCreditGetPayload<
        S extends boolean | null | undefined | FoodCreditDefaultArgs
    > = $Result.GetResult<Prisma.$FoodCreditPayload, S>;

    type FoodCreditCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = Omit<
        FoodCreditFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: FoodCreditCountAggregateInputType | true;
    };

    export interface FoodCreditDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["FoodCredit"];
            meta: { name: "FoodCredit" };
        };
        /**
         * Find zero or one FoodCredit that matches the filter.
         * @param {FoodCreditFindUniqueArgs} args - Arguments to find a FoodCredit
         * @example
         * // Get one FoodCredit
         * const foodCredit = await prisma.foodCredit.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends FoodCreditFindUniqueArgs>(
            args: SelectSubset<T, FoodCreditFindUniqueArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one FoodCredit that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {FoodCreditFindUniqueOrThrowArgs} args - Arguments to find a FoodCredit
         * @example
         * // Get one FoodCredit
         * const foodCredit = await prisma.foodCredit.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends FoodCreditFindUniqueOrThrowArgs>(
            args: SelectSubset<T, FoodCreditFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FoodCredit that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditFindFirstArgs} args - Arguments to find a FoodCredit
         * @example
         * // Get one FoodCredit
         * const foodCredit = await prisma.foodCredit.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends FoodCreditFindFirstArgs>(
            args?: SelectSubset<T, FoodCreditFindFirstArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FoodCredit that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditFindFirstOrThrowArgs} args - Arguments to find a FoodCredit
         * @example
         * // Get one FoodCredit
         * const foodCredit = await prisma.foodCredit.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends FoodCreditFindFirstOrThrowArgs>(
            args?: SelectSubset<T, FoodCreditFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more FoodCredits that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all FoodCredits
         * const foodCredits = await prisma.foodCredit.findMany()
         *
         * // Get first 10 FoodCredits
         * const foodCredits = await prisma.foodCredit.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const foodCreditWithIdOnly = await prisma.foodCredit.findMany({ select: { id: true } })
         *
         */
        findMany<T extends FoodCreditFindManyArgs>(
            args?: SelectSubset<T, FoodCreditFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a FoodCredit.
         * @param {FoodCreditCreateArgs} args - Arguments to create a FoodCredit.
         * @example
         * // Create one FoodCredit
         * const FoodCredit = await prisma.foodCredit.create({
         *   data: {
         *     // ... data to create a FoodCredit
         *   }
         * })
         *
         */
        create<T extends FoodCreditCreateArgs>(
            args: SelectSubset<T, FoodCreditCreateArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many FoodCredits.
         * @param {FoodCreditCreateManyArgs} args - Arguments to create many FoodCredits.
         * @example
         * // Create many FoodCredits
         * const foodCredit = await prisma.foodCredit.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends FoodCreditCreateManyArgs>(
            args?: SelectSubset<T, FoodCreditCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many FoodCredits and returns the data saved in the database.
         * @param {FoodCreditCreateManyAndReturnArgs} args - Arguments to create many FoodCredits.
         * @example
         * // Create many FoodCredits
         * const foodCredit = await prisma.foodCredit.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many FoodCredits and only return the `id`
         * const foodCreditWithIdOnly = await prisma.foodCredit.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends FoodCreditCreateManyAndReturnArgs>(
            args?: SelectSubset<T, FoodCreditCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a FoodCredit.
         * @param {FoodCreditDeleteArgs} args - Arguments to delete one FoodCredit.
         * @example
         * // Delete one FoodCredit
         * const FoodCredit = await prisma.foodCredit.delete({
         *   where: {
         *     // ... filter to delete one FoodCredit
         *   }
         * })
         *
         */
        delete<T extends FoodCreditDeleteArgs>(
            args: SelectSubset<T, FoodCreditDeleteArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one FoodCredit.
         * @param {FoodCreditUpdateArgs} args - Arguments to update one FoodCredit.
         * @example
         * // Update one FoodCredit
         * const foodCredit = await prisma.foodCredit.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends FoodCreditUpdateArgs>(
            args: SelectSubset<T, FoodCreditUpdateArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more FoodCredits.
         * @param {FoodCreditDeleteManyArgs} args - Arguments to filter FoodCredits to delete.
         * @example
         * // Delete a few FoodCredits
         * const { count } = await prisma.foodCredit.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends FoodCreditDeleteManyArgs>(
            args?: SelectSubset<T, FoodCreditDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FoodCredits.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many FoodCredits
         * const foodCredit = await prisma.foodCredit.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends FoodCreditUpdateManyArgs>(
            args: SelectSubset<T, FoodCreditUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FoodCredits and returns the data updated in the database.
         * @param {FoodCreditUpdateManyAndReturnArgs} args - Arguments to update many FoodCredits.
         * @example
         * // Update many FoodCredits
         * const foodCredit = await prisma.foodCredit.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more FoodCredits and only return the `id`
         * const foodCreditWithIdOnly = await prisma.foodCredit.updateManyAndReturn({
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
        updateManyAndReturn<T extends FoodCreditUpdateManyAndReturnArgs>(
            args: SelectSubset<T, FoodCreditUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one FoodCredit.
         * @param {FoodCreditUpsertArgs} args - Arguments to update or create a FoodCredit.
         * @example
         * // Update or create a FoodCredit
         * const foodCredit = await prisma.foodCredit.upsert({
         *   create: {
         *     // ... data to create a FoodCredit
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the FoodCredit we want to update
         *   }
         * })
         */
        upsert<T extends FoodCreditUpsertArgs>(
            args: SelectSubset<T, FoodCreditUpsertArgs<ExtArgs>>
        ): Prisma__FoodCreditClient<
            $Result.GetResult<
                Prisma.$FoodCreditPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of FoodCredits.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditCountArgs} args - Arguments to filter FoodCredits to count.
         * @example
         * // Count the number of FoodCredits
         * const count = await prisma.foodCredit.count({
         *   where: {
         *     // ... the filter for the FoodCredits we want to count
         *   }
         * })
         **/
        count<T extends FoodCreditCountArgs>(
            args?: Subset<T, FoodCreditCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          FoodCreditCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a FoodCredit.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends FoodCreditAggregateArgs>(
            args: Subset<T, FoodCreditAggregateArgs>
        ): Prisma.PrismaPromise<GetFoodCreditAggregateType<T>>;

        /**
         * Group by FoodCredit.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditGroupByArgs} args - Group by arguments.
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
            T extends FoodCreditGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: FoodCreditGroupByArgs["orderBy"] }
                : { orderBy?: FoodCreditGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
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
                                "Field ",
                                P,
                                ` in "having" needs to be provided in "by"`
                            ];
                  }[HavingFields]
                : "take" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : "skip" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
        >(
            args: SubsetIntersection<T, FoodCreditGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetFoodCreditGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the FoodCredit model
         */
        readonly fields: FoodCreditFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for FoodCredit.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__FoodCreditClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the FoodCredit model
     */
    interface FoodCreditFieldRefs {
        readonly id: FieldRef<"FoodCredit", "String">;
        readonly userId: FieldRef<"FoodCredit", "String">;
        readonly balance: FieldRef<"FoodCredit", "Int">;
    }

    // Custom InputTypes
    /**
     * FoodCredit findUnique
     */
    export type FoodCreditFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCredit to fetch.
         */
        where: FoodCreditWhereUniqueInput;
    };

    /**
     * FoodCredit findUniqueOrThrow
     */
    export type FoodCreditFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCredit to fetch.
         */
        where: FoodCreditWhereUniqueInput;
    };

    /**
     * FoodCredit findFirst
     */
    export type FoodCreditFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCredit to fetch.
         */
        where?: FoodCreditWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCredits to fetch.
         */
        orderBy?:
            | FoodCreditOrderByWithRelationInput
            | FoodCreditOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FoodCredits.
         */
        cursor?: FoodCreditWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCredits from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCredits.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FoodCredits.
         */
        distinct?: FoodCreditScalarFieldEnum | FoodCreditScalarFieldEnum[];
    };

    /**
     * FoodCredit findFirstOrThrow
     */
    export type FoodCreditFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCredit to fetch.
         */
        where?: FoodCreditWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCredits to fetch.
         */
        orderBy?:
            | FoodCreditOrderByWithRelationInput
            | FoodCreditOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FoodCredits.
         */
        cursor?: FoodCreditWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCredits from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCredits.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FoodCredits.
         */
        distinct?: FoodCreditScalarFieldEnum | FoodCreditScalarFieldEnum[];
    };

    /**
     * FoodCredit findMany
     */
    export type FoodCreditFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCredits to fetch.
         */
        where?: FoodCreditWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCredits to fetch.
         */
        orderBy?:
            | FoodCreditOrderByWithRelationInput
            | FoodCreditOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing FoodCredits.
         */
        cursor?: FoodCreditWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCredits from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCredits.
         */
        skip?: number;
        distinct?: FoodCreditScalarFieldEnum | FoodCreditScalarFieldEnum[];
    };

    /**
     * FoodCredit create
     */
    export type FoodCreditCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * The data needed to create a FoodCredit.
         */
        data: XOR<FoodCreditCreateInput, FoodCreditUncheckedCreateInput>;
    };

    /**
     * FoodCredit createMany
     */
    export type FoodCreditCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to create many FoodCredits.
         */
        data: FoodCreditCreateManyInput | FoodCreditCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * FoodCredit createManyAndReturn
     */
    export type FoodCreditCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * The data used to create many FoodCredits.
         */
        data: FoodCreditCreateManyInput | FoodCreditCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * FoodCredit update
     */
    export type FoodCreditUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * The data needed to update a FoodCredit.
         */
        data: XOR<FoodCreditUpdateInput, FoodCreditUncheckedUpdateInput>;
        /**
         * Choose, which FoodCredit to update.
         */
        where: FoodCreditWhereUniqueInput;
    };

    /**
     * FoodCredit updateMany
     */
    export type FoodCreditUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to update FoodCredits.
         */
        data: XOR<
            FoodCreditUpdateManyMutationInput,
            FoodCreditUncheckedUpdateManyInput
        >;
        /**
         * Filter which FoodCredits to update
         */
        where?: FoodCreditWhereInput;
        /**
         * Limit how many FoodCredits to update.
         */
        limit?: number;
    };

    /**
     * FoodCredit updateManyAndReturn
     */
    export type FoodCreditUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * The data used to update FoodCredits.
         */
        data: XOR<
            FoodCreditUpdateManyMutationInput,
            FoodCreditUncheckedUpdateManyInput
        >;
        /**
         * Filter which FoodCredits to update
         */
        where?: FoodCreditWhereInput;
        /**
         * Limit how many FoodCredits to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * FoodCredit upsert
     */
    export type FoodCreditUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * The filter to search for the FoodCredit to update in case it exists.
         */
        where: FoodCreditWhereUniqueInput;
        /**
         * In case the FoodCredit found by the `where` argument doesn't exist, create a new FoodCredit with this data.
         */
        create: XOR<FoodCreditCreateInput, FoodCreditUncheckedCreateInput>;
        /**
         * In case the FoodCredit was found with the provided `where` argument, update it with this data.
         */
        update: XOR<FoodCreditUpdateInput, FoodCreditUncheckedUpdateInput>;
    };

    /**
     * FoodCredit delete
     */
    export type FoodCreditDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
        /**
         * Filter which FoodCredit to delete.
         */
        where: FoodCreditWhereUniqueInput;
    };

    /**
     * FoodCredit deleteMany
     */
    export type FoodCreditDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which FoodCredits to delete
         */
        where?: FoodCreditWhereInput;
        /**
         * Limit how many FoodCredits to delete.
         */
        limit?: number;
    };

    /**
     * FoodCredit without action
     */
    export type FoodCreditDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCredit
         */
        select?: FoodCreditSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCredit
         */
        omit?: FoodCreditOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditInclude<ExtArgs> | null;
    };

    /**
     * Model FoodCreditHistory
     */

    export type AggregateFoodCreditHistory = {
        _count: FoodCreditHistoryCountAggregateOutputType | null;
        _avg: FoodCreditHistoryAvgAggregateOutputType | null;
        _sum: FoodCreditHistorySumAggregateOutputType | null;
        _min: FoodCreditHistoryMinAggregateOutputType | null;
        _max: FoodCreditHistoryMaxAggregateOutputType | null;
    };

    export type FoodCreditHistoryAvgAggregateOutputType = {
        amount: number | null;
    };

    export type FoodCreditHistorySumAggregateOutputType = {
        amount: number | null;
    };

    export type FoodCreditHistoryMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        amount: number | null;
        reason: string | null;
        adminId: string | null;
        createdAt: Date | null;
    };

    export type FoodCreditHistoryMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        amount: number | null;
        reason: string | null;
        adminId: string | null;
        createdAt: Date | null;
    };

    export type FoodCreditHistoryCountAggregateOutputType = {
        id: number;
        userId: number;
        amount: number;
        reason: number;
        adminId: number;
        createdAt: number;
        _all: number;
    };

    export type FoodCreditHistoryAvgAggregateInputType = {
        amount?: true;
    };

    export type FoodCreditHistorySumAggregateInputType = {
        amount?: true;
    };

    export type FoodCreditHistoryMinAggregateInputType = {
        id?: true;
        userId?: true;
        amount?: true;
        reason?: true;
        adminId?: true;
        createdAt?: true;
    };

    export type FoodCreditHistoryMaxAggregateInputType = {
        id?: true;
        userId?: true;
        amount?: true;
        reason?: true;
        adminId?: true;
        createdAt?: true;
    };

    export type FoodCreditHistoryCountAggregateInputType = {
        id?: true;
        userId?: true;
        amount?: true;
        reason?: true;
        adminId?: true;
        createdAt?: true;
        _all?: true;
    };

    export type FoodCreditHistoryAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which FoodCreditHistory to aggregate.
         */
        where?: FoodCreditHistoryWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCreditHistories to fetch.
         */
        orderBy?:
            | FoodCreditHistoryOrderByWithRelationInput
            | FoodCreditHistoryOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: FoodCreditHistoryWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCreditHistories from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCreditHistories.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned FoodCreditHistories
         **/
        _count?: true | FoodCreditHistoryCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: FoodCreditHistoryAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: FoodCreditHistorySumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: FoodCreditHistoryMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: FoodCreditHistoryMaxAggregateInputType;
    };

    export type GetFoodCreditHistoryAggregateType<
        T extends FoodCreditHistoryAggregateArgs
    > = {
        [P in keyof T & keyof AggregateFoodCreditHistory]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateFoodCreditHistory[P]>
            : GetScalarType<T[P], AggregateFoodCreditHistory[P]>;
    };

    export type FoodCreditHistoryGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        where?: FoodCreditHistoryWhereInput;
        orderBy?:
            | FoodCreditHistoryOrderByWithAggregationInput
            | FoodCreditHistoryOrderByWithAggregationInput[];
        by:
            | FoodCreditHistoryScalarFieldEnum[]
            | FoodCreditHistoryScalarFieldEnum;
        having?: FoodCreditHistoryScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: FoodCreditHistoryCountAggregateInputType | true;
        _avg?: FoodCreditHistoryAvgAggregateInputType;
        _sum?: FoodCreditHistorySumAggregateInputType;
        _min?: FoodCreditHistoryMinAggregateInputType;
        _max?: FoodCreditHistoryMaxAggregateInputType;
    };

    export type FoodCreditHistoryGroupByOutputType = {
        id: string;
        userId: string;
        amount: number;
        reason: string | null;
        adminId: string | null;
        createdAt: Date;
        _count: FoodCreditHistoryCountAggregateOutputType | null;
        _avg: FoodCreditHistoryAvgAggregateOutputType | null;
        _sum: FoodCreditHistorySumAggregateOutputType | null;
        _min: FoodCreditHistoryMinAggregateOutputType | null;
        _max: FoodCreditHistoryMaxAggregateOutputType | null;
    };

    type GetFoodCreditHistoryGroupByPayload<
        T extends FoodCreditHistoryGroupByArgs
    > = Prisma.PrismaPromise<
        Array<
            PickEnumerable<FoodCreditHistoryGroupByOutputType, T["by"]> & {
                [P in keyof T &
                    keyof FoodCreditHistoryGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<
                              T[P],
                              FoodCreditHistoryGroupByOutputType[P]
                          >
                    : GetScalarType<
                          T[P],
                          FoodCreditHistoryGroupByOutputType[P]
                      >;
            }
        >
    >;

    export type FoodCreditHistorySelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            amount?: boolean;
            reason?: boolean;
            adminId?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
            admin?: boolean | FoodCreditHistory$adminArgs<ExtArgs>;
        },
        ExtArgs["result"]["foodCreditHistory"]
    >;

    export type FoodCreditHistorySelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            amount?: boolean;
            reason?: boolean;
            adminId?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
            admin?: boolean | FoodCreditHistory$adminArgs<ExtArgs>;
        },
        ExtArgs["result"]["foodCreditHistory"]
    >;

    export type FoodCreditHistorySelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            amount?: boolean;
            reason?: boolean;
            adminId?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
            admin?: boolean | FoodCreditHistory$adminArgs<ExtArgs>;
        },
        ExtArgs["result"]["foodCreditHistory"]
    >;

    export type FoodCreditHistorySelectScalar = {
        id?: boolean;
        userId?: boolean;
        amount?: boolean;
        reason?: boolean;
        adminId?: boolean;
        createdAt?: boolean;
    };

    export type FoodCreditHistoryOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = $Extensions.GetOmit<
        "id" | "userId" | "amount" | "reason" | "adminId" | "createdAt",
        ExtArgs["result"]["foodCreditHistory"]
    >;
    export type FoodCreditHistoryInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
        admin?: boolean | FoodCreditHistory$adminArgs<ExtArgs>;
    };
    export type FoodCreditHistoryIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
        admin?: boolean | FoodCreditHistory$adminArgs<ExtArgs>;
    };
    export type FoodCreditHistoryIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
        admin?: boolean | FoodCreditHistory$adminArgs<ExtArgs>;
    };

    export type $FoodCreditHistoryPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        name: "FoodCreditHistory";
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
            admin: Prisma.$AdminPayload<ExtArgs> | null;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                amount: number;
                reason: string | null;
                adminId: string | null;
                createdAt: Date;
            },
            ExtArgs["result"]["foodCreditHistory"]
        >;
        composites: {};
    };

    type FoodCreditHistoryGetPayload<
        S extends boolean | null | undefined | FoodCreditHistoryDefaultArgs
    > = $Result.GetResult<Prisma.$FoodCreditHistoryPayload, S>;

    type FoodCreditHistoryCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = Omit<
        FoodCreditHistoryFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: FoodCreditHistoryCountAggregateInputType | true;
    };

    export interface FoodCreditHistoryDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["FoodCreditHistory"];
            meta: { name: "FoodCreditHistory" };
        };
        /**
         * Find zero or one FoodCreditHistory that matches the filter.
         * @param {FoodCreditHistoryFindUniqueArgs} args - Arguments to find a FoodCreditHistory
         * @example
         * // Get one FoodCreditHistory
         * const foodCreditHistory = await prisma.foodCreditHistory.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends FoodCreditHistoryFindUniqueArgs>(
            args: SelectSubset<T, FoodCreditHistoryFindUniqueArgs<ExtArgs>>
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one FoodCreditHistory that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {FoodCreditHistoryFindUniqueOrThrowArgs} args - Arguments to find a FoodCreditHistory
         * @example
         * // Get one FoodCreditHistory
         * const foodCreditHistory = await prisma.foodCreditHistory.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends FoodCreditHistoryFindUniqueOrThrowArgs>(
            args: SelectSubset<
                T,
                FoodCreditHistoryFindUniqueOrThrowArgs<ExtArgs>
            >
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FoodCreditHistory that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditHistoryFindFirstArgs} args - Arguments to find a FoodCreditHistory
         * @example
         * // Get one FoodCreditHistory
         * const foodCreditHistory = await prisma.foodCreditHistory.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends FoodCreditHistoryFindFirstArgs>(
            args?: SelectSubset<T, FoodCreditHistoryFindFirstArgs<ExtArgs>>
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FoodCreditHistory that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditHistoryFindFirstOrThrowArgs} args - Arguments to find a FoodCreditHistory
         * @example
         * // Get one FoodCreditHistory
         * const foodCreditHistory = await prisma.foodCreditHistory.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends FoodCreditHistoryFindFirstOrThrowArgs>(
            args?: SelectSubset<
                T,
                FoodCreditHistoryFindFirstOrThrowArgs<ExtArgs>
            >
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more FoodCreditHistories that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all FoodCreditHistories
         * const foodCreditHistories = await prisma.foodCreditHistory.findMany()
         *
         * // Get first 10 FoodCreditHistories
         * const foodCreditHistories = await prisma.foodCreditHistory.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const foodCreditHistoryWithIdOnly = await prisma.foodCreditHistory.findMany({ select: { id: true } })
         *
         */
        findMany<T extends FoodCreditHistoryFindManyArgs>(
            args?: SelectSubset<T, FoodCreditHistoryFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a FoodCreditHistory.
         * @param {FoodCreditHistoryCreateArgs} args - Arguments to create a FoodCreditHistory.
         * @example
         * // Create one FoodCreditHistory
         * const FoodCreditHistory = await prisma.foodCreditHistory.create({
         *   data: {
         *     // ... data to create a FoodCreditHistory
         *   }
         * })
         *
         */
        create<T extends FoodCreditHistoryCreateArgs>(
            args: SelectSubset<T, FoodCreditHistoryCreateArgs<ExtArgs>>
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many FoodCreditHistories.
         * @param {FoodCreditHistoryCreateManyArgs} args - Arguments to create many FoodCreditHistories.
         * @example
         * // Create many FoodCreditHistories
         * const foodCreditHistory = await prisma.foodCreditHistory.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends FoodCreditHistoryCreateManyArgs>(
            args?: SelectSubset<T, FoodCreditHistoryCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many FoodCreditHistories and returns the data saved in the database.
         * @param {FoodCreditHistoryCreateManyAndReturnArgs} args - Arguments to create many FoodCreditHistories.
         * @example
         * // Create many FoodCreditHistories
         * const foodCreditHistory = await prisma.foodCreditHistory.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many FoodCreditHistories and only return the `id`
         * const foodCreditHistoryWithIdOnly = await prisma.foodCreditHistory.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends FoodCreditHistoryCreateManyAndReturnArgs>(
            args?: SelectSubset<
                T,
                FoodCreditHistoryCreateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a FoodCreditHistory.
         * @param {FoodCreditHistoryDeleteArgs} args - Arguments to delete one FoodCreditHistory.
         * @example
         * // Delete one FoodCreditHistory
         * const FoodCreditHistory = await prisma.foodCreditHistory.delete({
         *   where: {
         *     // ... filter to delete one FoodCreditHistory
         *   }
         * })
         *
         */
        delete<T extends FoodCreditHistoryDeleteArgs>(
            args: SelectSubset<T, FoodCreditHistoryDeleteArgs<ExtArgs>>
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one FoodCreditHistory.
         * @param {FoodCreditHistoryUpdateArgs} args - Arguments to update one FoodCreditHistory.
         * @example
         * // Update one FoodCreditHistory
         * const foodCreditHistory = await prisma.foodCreditHistory.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends FoodCreditHistoryUpdateArgs>(
            args: SelectSubset<T, FoodCreditHistoryUpdateArgs<ExtArgs>>
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more FoodCreditHistories.
         * @param {FoodCreditHistoryDeleteManyArgs} args - Arguments to filter FoodCreditHistories to delete.
         * @example
         * // Delete a few FoodCreditHistories
         * const { count } = await prisma.foodCreditHistory.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends FoodCreditHistoryDeleteManyArgs>(
            args?: SelectSubset<T, FoodCreditHistoryDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FoodCreditHistories.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditHistoryUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many FoodCreditHistories
         * const foodCreditHistory = await prisma.foodCreditHistory.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends FoodCreditHistoryUpdateManyArgs>(
            args: SelectSubset<T, FoodCreditHistoryUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FoodCreditHistories and returns the data updated in the database.
         * @param {FoodCreditHistoryUpdateManyAndReturnArgs} args - Arguments to update many FoodCreditHistories.
         * @example
         * // Update many FoodCreditHistories
         * const foodCreditHistory = await prisma.foodCreditHistory.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more FoodCreditHistories and only return the `id`
         * const foodCreditHistoryWithIdOnly = await prisma.foodCreditHistory.updateManyAndReturn({
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
        updateManyAndReturn<T extends FoodCreditHistoryUpdateManyAndReturnArgs>(
            args: SelectSubset<
                T,
                FoodCreditHistoryUpdateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one FoodCreditHistory.
         * @param {FoodCreditHistoryUpsertArgs} args - Arguments to update or create a FoodCreditHistory.
         * @example
         * // Update or create a FoodCreditHistory
         * const foodCreditHistory = await prisma.foodCreditHistory.upsert({
         *   create: {
         *     // ... data to create a FoodCreditHistory
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the FoodCreditHistory we want to update
         *   }
         * })
         */
        upsert<T extends FoodCreditHistoryUpsertArgs>(
            args: SelectSubset<T, FoodCreditHistoryUpsertArgs<ExtArgs>>
        ): Prisma__FoodCreditHistoryClient<
            $Result.GetResult<
                Prisma.$FoodCreditHistoryPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of FoodCreditHistories.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditHistoryCountArgs} args - Arguments to filter FoodCreditHistories to count.
         * @example
         * // Count the number of FoodCreditHistories
         * const count = await prisma.foodCreditHistory.count({
         *   where: {
         *     // ... the filter for the FoodCreditHistories we want to count
         *   }
         * })
         **/
        count<T extends FoodCreditHistoryCountArgs>(
            args?: Subset<T, FoodCreditHistoryCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          FoodCreditHistoryCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a FoodCreditHistory.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends FoodCreditHistoryAggregateArgs>(
            args: Subset<T, FoodCreditHistoryAggregateArgs>
        ): Prisma.PrismaPromise<GetFoodCreditHistoryAggregateType<T>>;

        /**
         * Group by FoodCreditHistory.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FoodCreditHistoryGroupByArgs} args - Group by arguments.
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
            T extends FoodCreditHistoryGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: FoodCreditHistoryGroupByArgs["orderBy"] }
                : { orderBy?: FoodCreditHistoryGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
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
                                "Field ",
                                P,
                                ` in "having" needs to be provided in "by"`
                            ];
                  }[HavingFields]
                : "take" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : "skip" extends Keys<T>
                ? "orderBy" extends Keys<T>
                    ? ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
        >(
            args: SubsetIntersection<
                T,
                FoodCreditHistoryGroupByArgs,
                OrderByArg
            > &
                InputErrors
        ): {} extends InputErrors
            ? GetFoodCreditHistoryGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the FoodCreditHistory model
         */
        readonly fields: FoodCreditHistoryFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for FoodCreditHistory.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__FoodCreditHistoryClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {}
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        admin<T extends FoodCreditHistory$adminArgs<ExtArgs> = {}>(
            args?: Subset<T, FoodCreditHistory$adminArgs<ExtArgs>>
        ): Prisma__AdminClient<
            $Result.GetResult<
                Prisma.$AdminPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the FoodCreditHistory model
     */
    interface FoodCreditHistoryFieldRefs {
        readonly id: FieldRef<"FoodCreditHistory", "String">;
        readonly userId: FieldRef<"FoodCreditHistory", "String">;
        readonly amount: FieldRef<"FoodCreditHistory", "Int">;
        readonly reason: FieldRef<"FoodCreditHistory", "String">;
        readonly adminId: FieldRef<"FoodCreditHistory", "String">;
        readonly createdAt: FieldRef<"FoodCreditHistory", "DateTime">;
    }

    // Custom InputTypes
    /**
     * FoodCreditHistory findUnique
     */
    export type FoodCreditHistoryFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCreditHistory to fetch.
         */
        where: FoodCreditHistoryWhereUniqueInput;
    };

    /**
     * FoodCreditHistory findUniqueOrThrow
     */
    export type FoodCreditHistoryFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCreditHistory to fetch.
         */
        where: FoodCreditHistoryWhereUniqueInput;
    };

    /**
     * FoodCreditHistory findFirst
     */
    export type FoodCreditHistoryFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCreditHistory to fetch.
         */
        where?: FoodCreditHistoryWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCreditHistories to fetch.
         */
        orderBy?:
            | FoodCreditHistoryOrderByWithRelationInput
            | FoodCreditHistoryOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FoodCreditHistories.
         */
        cursor?: FoodCreditHistoryWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCreditHistories from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCreditHistories.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FoodCreditHistories.
         */
        distinct?:
            | FoodCreditHistoryScalarFieldEnum
            | FoodCreditHistoryScalarFieldEnum[];
    };

    /**
     * FoodCreditHistory findFirstOrThrow
     */
    export type FoodCreditHistoryFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCreditHistory to fetch.
         */
        where?: FoodCreditHistoryWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCreditHistories to fetch.
         */
        orderBy?:
            | FoodCreditHistoryOrderByWithRelationInput
            | FoodCreditHistoryOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FoodCreditHistories.
         */
        cursor?: FoodCreditHistoryWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCreditHistories from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCreditHistories.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FoodCreditHistories.
         */
        distinct?:
            | FoodCreditHistoryScalarFieldEnum
            | FoodCreditHistoryScalarFieldEnum[];
    };

    /**
     * FoodCreditHistory findMany
     */
    export type FoodCreditHistoryFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * Filter, which FoodCreditHistories to fetch.
         */
        where?: FoodCreditHistoryWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FoodCreditHistories to fetch.
         */
        orderBy?:
            | FoodCreditHistoryOrderByWithRelationInput
            | FoodCreditHistoryOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing FoodCreditHistories.
         */
        cursor?: FoodCreditHistoryWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FoodCreditHistories from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FoodCreditHistories.
         */
        skip?: number;
        distinct?:
            | FoodCreditHistoryScalarFieldEnum
            | FoodCreditHistoryScalarFieldEnum[];
    };

    /**
     * FoodCreditHistory create
     */
    export type FoodCreditHistoryCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * The data needed to create a FoodCreditHistory.
         */
        data: XOR<
            FoodCreditHistoryCreateInput,
            FoodCreditHistoryUncheckedCreateInput
        >;
    };

    /**
     * FoodCreditHistory createMany
     */
    export type FoodCreditHistoryCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to create many FoodCreditHistories.
         */
        data:
            | FoodCreditHistoryCreateManyInput
            | FoodCreditHistoryCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * FoodCreditHistory createManyAndReturn
     */
    export type FoodCreditHistoryCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * The data used to create many FoodCreditHistories.
         */
        data:
            | FoodCreditHistoryCreateManyInput
            | FoodCreditHistoryCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * FoodCreditHistory update
     */
    export type FoodCreditHistoryUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * The data needed to update a FoodCreditHistory.
         */
        data: XOR<
            FoodCreditHistoryUpdateInput,
            FoodCreditHistoryUncheckedUpdateInput
        >;
        /**
         * Choose, which FoodCreditHistory to update.
         */
        where: FoodCreditHistoryWhereUniqueInput;
    };

    /**
     * FoodCreditHistory updateMany
     */
    export type FoodCreditHistoryUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * The data used to update FoodCreditHistories.
         */
        data: XOR<
            FoodCreditHistoryUpdateManyMutationInput,
            FoodCreditHistoryUncheckedUpdateManyInput
        >;
        /**
         * Filter which FoodCreditHistories to update
         */
        where?: FoodCreditHistoryWhereInput;
        /**
         * Limit how many FoodCreditHistories to update.
         */
        limit?: number;
    };

    /**
     * FoodCreditHistory updateManyAndReturn
     */
    export type FoodCreditHistoryUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * The data used to update FoodCreditHistories.
         */
        data: XOR<
            FoodCreditHistoryUpdateManyMutationInput,
            FoodCreditHistoryUncheckedUpdateManyInput
        >;
        /**
         * Filter which FoodCreditHistories to update
         */
        where?: FoodCreditHistoryWhereInput;
        /**
         * Limit how many FoodCreditHistories to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * FoodCreditHistory upsert
     */
    export type FoodCreditHistoryUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * The filter to search for the FoodCreditHistory to update in case it exists.
         */
        where: FoodCreditHistoryWhereUniqueInput;
        /**
         * In case the FoodCreditHistory found by the `where` argument doesn't exist, create a new FoodCreditHistory with this data.
         */
        create: XOR<
            FoodCreditHistoryCreateInput,
            FoodCreditHistoryUncheckedCreateInput
        >;
        /**
         * In case the FoodCreditHistory was found with the provided `where` argument, update it with this data.
         */
        update: XOR<
            FoodCreditHistoryUpdateInput,
            FoodCreditHistoryUncheckedUpdateInput
        >;
    };

    /**
     * FoodCreditHistory delete
     */
    export type FoodCreditHistoryDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
        /**
         * Filter which FoodCreditHistory to delete.
         */
        where: FoodCreditHistoryWhereUniqueInput;
    };

    /**
     * FoodCreditHistory deleteMany
     */
    export type FoodCreditHistoryDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Filter which FoodCreditHistories to delete
         */
        where?: FoodCreditHistoryWhereInput;
        /**
         * Limit how many FoodCreditHistories to delete.
         */
        limit?: number;
    };

    /**
     * FoodCreditHistory.admin
     */
    export type FoodCreditHistory$adminArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the Admin
         */
        select?: AdminSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Admin
         */
        omit?: AdminOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AdminInclude<ExtArgs> | null;
        where?: AdminWhereInput;
    };

    /**
     * FoodCreditHistory without action
     */
    export type FoodCreditHistoryDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
    > = {
        /**
         * Select specific fields to fetch from the FoodCreditHistory
         */
        select?: FoodCreditHistorySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FoodCreditHistory
         */
        omit?: FoodCreditHistoryOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FoodCreditHistoryInclude<ExtArgs> | null;
    };

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: "ReadUncommitted";
        ReadCommitted: "ReadCommitted";
        RepeatableRead: "RepeatableRead";
        Serializable: "Serializable";
    };

    export type TransactionIsolationLevel =
        (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

    export const UserScalarFieldEnum: {
        id: "id";
        name: "name";
        email: "email";
        password: "password";
        createdAt: "createdAt";
    };

    export type UserScalarFieldEnum =
        (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

    export const AdminScalarFieldEnum: {
        id: "id";
        name: "name";
        email: "email";
        password: "password";
        createdAt: "createdAt";
    };

    export type AdminScalarFieldEnum =
        (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];

    export const FoodItemScalarFieldEnum: {
        id: "id";
        name: "name";
        price: "price";
        imagePath: "imagePath";
        description: "description";
        createdAt: "createdAt";
    };

    export type FoodItemScalarFieldEnum =
        (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum];

    export const OrderScalarFieldEnum: {
        id: "id";
        userId: "userId";
        status: "status";
        arrivalTime: "arrivalTime";
        estimatedReadyTime: "estimatedReadyTime";
        readyNotified: "readyNotified";
        createdAt: "createdAt";
    };

    export type OrderScalarFieldEnum =
        (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];

    export const OrderItemScalarFieldEnum: {
        id: "id";
        orderId: "orderId";
        foodItemId: "foodItemId";
        quantity: "quantity";
        customizations: "customizations";
    };

    export type OrderItemScalarFieldEnum =
        (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];

    export const FoodCreditScalarFieldEnum: {
        id: "id";
        userId: "userId";
        balance: "balance";
    };

    export type FoodCreditScalarFieldEnum =
        (typeof FoodCreditScalarFieldEnum)[keyof typeof FoodCreditScalarFieldEnum];

    export const FoodCreditHistoryScalarFieldEnum: {
        id: "id";
        userId: "userId";
        amount: "amount";
        reason: "reason";
        adminId: "adminId";
        createdAt: "createdAt";
    };

    export type FoodCreditHistoryScalarFieldEnum =
        (typeof FoodCreditHistoryScalarFieldEnum)[keyof typeof FoodCreditHistoryScalarFieldEnum];

    export const SortOrder: {
        asc: "asc";
        desc: "desc";
    };

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

    export const QueryMode: {
        default: "default";
        insensitive: "insensitive";
    };

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

    export const NullsOrder: {
        first: "first";
        last: "last";
    };

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "String"
    >;

    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "String[]"
    >;

    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "DateTime"
    >;

    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "DateTime[]"
    >;

    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Float"
    >;

    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Float[]"
    >;

    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Boolean"
    >;

    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Int"
    >;

    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Int[]"
    >;

    /**
     * Deep Input Types
     */

    export type UserWhereInput = {
        AND?: UserWhereInput | UserWhereInput[];
        OR?: UserWhereInput[];
        NOT?: UserWhereInput | UserWhereInput[];
        id?: StringFilter<"User"> | string;
        name?: StringFilter<"User"> | string;
        email?: StringFilter<"User"> | string;
        password?: StringFilter<"User"> | string;
        createdAt?: DateTimeFilter<"User"> | Date | string;
        credits?: XOR<
            FoodCreditNullableScalarRelationFilter,
            FoodCreditWhereInput
        > | null;
        orders?: OrderListRelationFilter;
        creditHistory?: FoodCreditHistoryListRelationFilter;
    };

    export type UserOrderByWithRelationInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
        credits?: FoodCreditOrderByWithRelationInput;
        orders?: OrderOrderByRelationAggregateInput;
        creditHistory?: FoodCreditHistoryOrderByRelationAggregateInput;
    };

    export type UserWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            email?: string;
            AND?: UserWhereInput | UserWhereInput[];
            OR?: UserWhereInput[];
            NOT?: UserWhereInput | UserWhereInput[];
            name?: StringFilter<"User"> | string;
            password?: StringFilter<"User"> | string;
            createdAt?: DateTimeFilter<"User"> | Date | string;
            credits?: XOR<
                FoodCreditNullableScalarRelationFilter,
                FoodCreditWhereInput
            > | null;
            orders?: OrderListRelationFilter;
            creditHistory?: FoodCreditHistoryListRelationFilter;
        },
        "id" | "email"
    >;

    export type UserOrderByWithAggregationInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
        _count?: UserCountOrderByAggregateInput;
        _max?: UserMaxOrderByAggregateInput;
        _min?: UserMinOrderByAggregateInput;
    };

    export type UserScalarWhereWithAggregatesInput = {
        AND?:
            | UserScalarWhereWithAggregatesInput
            | UserScalarWhereWithAggregatesInput[];
        OR?: UserScalarWhereWithAggregatesInput[];
        NOT?:
            | UserScalarWhereWithAggregatesInput
            | UserScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"User"> | string;
        name?: StringWithAggregatesFilter<"User"> | string;
        email?: StringWithAggregatesFilter<"User"> | string;
        password?: StringWithAggregatesFilter<"User"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    };

    export type AdminWhereInput = {
        AND?: AdminWhereInput | AdminWhereInput[];
        OR?: AdminWhereInput[];
        NOT?: AdminWhereInput | AdminWhereInput[];
        id?: StringFilter<"Admin"> | string;
        name?: StringFilter<"Admin"> | string;
        email?: StringFilter<"Admin"> | string;
        password?: StringFilter<"Admin"> | string;
        createdAt?: DateTimeFilter<"Admin"> | Date | string;
        creditActions?: FoodCreditHistoryListRelationFilter;
    };

    export type AdminOrderByWithRelationInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
        creditActions?: FoodCreditHistoryOrderByRelationAggregateInput;
    };

    export type AdminWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            email?: string;
            AND?: AdminWhereInput | AdminWhereInput[];
            OR?: AdminWhereInput[];
            NOT?: AdminWhereInput | AdminWhereInput[];
            name?: StringFilter<"Admin"> | string;
            password?: StringFilter<"Admin"> | string;
            createdAt?: DateTimeFilter<"Admin"> | Date | string;
            creditActions?: FoodCreditHistoryListRelationFilter;
        },
        "id" | "email"
    >;

    export type AdminOrderByWithAggregationInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
        _count?: AdminCountOrderByAggregateInput;
        _max?: AdminMaxOrderByAggregateInput;
        _min?: AdminMinOrderByAggregateInput;
    };

    export type AdminScalarWhereWithAggregatesInput = {
        AND?:
            | AdminScalarWhereWithAggregatesInput
            | AdminScalarWhereWithAggregatesInput[];
        OR?: AdminScalarWhereWithAggregatesInput[];
        NOT?:
            | AdminScalarWhereWithAggregatesInput
            | AdminScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Admin"> | string;
        name?: StringWithAggregatesFilter<"Admin"> | string;
        email?: StringWithAggregatesFilter<"Admin"> | string;
        password?: StringWithAggregatesFilter<"Admin"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string;
    };

    export type FoodItemWhereInput = {
        AND?: FoodItemWhereInput | FoodItemWhereInput[];
        OR?: FoodItemWhereInput[];
        NOT?: FoodItemWhereInput | FoodItemWhereInput[];
        id?: StringFilter<"FoodItem"> | string;
        name?: StringFilter<"FoodItem"> | string;
        price?: FloatFilter<"FoodItem"> | number;
        imagePath?: StringFilter<"FoodItem"> | string;
        description?: StringNullableFilter<"FoodItem"> | string | null;
        createdAt?: DateTimeFilter<"FoodItem"> | Date | string;
        orderItems?: OrderItemListRelationFilter;
    };

    export type FoodItemOrderByWithRelationInput = {
        id?: SortOrder;
        name?: SortOrder;
        price?: SortOrder;
        imagePath?: SortOrder;
        description?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        orderItems?: OrderItemOrderByRelationAggregateInput;
    };

    export type FoodItemWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: FoodItemWhereInput | FoodItemWhereInput[];
            OR?: FoodItemWhereInput[];
            NOT?: FoodItemWhereInput | FoodItemWhereInput[];
            name?: StringFilter<"FoodItem"> | string;
            price?: FloatFilter<"FoodItem"> | number;
            imagePath?: StringFilter<"FoodItem"> | string;
            description?: StringNullableFilter<"FoodItem"> | string | null;
            createdAt?: DateTimeFilter<"FoodItem"> | Date | string;
            orderItems?: OrderItemListRelationFilter;
        },
        "id"
    >;

    export type FoodItemOrderByWithAggregationInput = {
        id?: SortOrder;
        name?: SortOrder;
        price?: SortOrder;
        imagePath?: SortOrder;
        description?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        _count?: FoodItemCountOrderByAggregateInput;
        _avg?: FoodItemAvgOrderByAggregateInput;
        _max?: FoodItemMaxOrderByAggregateInput;
        _min?: FoodItemMinOrderByAggregateInput;
        _sum?: FoodItemSumOrderByAggregateInput;
    };

    export type FoodItemScalarWhereWithAggregatesInput = {
        AND?:
            | FoodItemScalarWhereWithAggregatesInput
            | FoodItemScalarWhereWithAggregatesInput[];
        OR?: FoodItemScalarWhereWithAggregatesInput[];
        NOT?:
            | FoodItemScalarWhereWithAggregatesInput
            | FoodItemScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"FoodItem"> | string;
        name?: StringWithAggregatesFilter<"FoodItem"> | string;
        price?: FloatWithAggregatesFilter<"FoodItem"> | number;
        imagePath?: StringWithAggregatesFilter<"FoodItem"> | string;
        description?:
            | StringNullableWithAggregatesFilter<"FoodItem">
            | string
            | null;
        createdAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string;
    };

    export type OrderWhereInput = {
        AND?: OrderWhereInput | OrderWhereInput[];
        OR?: OrderWhereInput[];
        NOT?: OrderWhereInput | OrderWhereInput[];
        id?: StringFilter<"Order"> | string;
        userId?: StringFilter<"Order"> | string;
        status?: StringFilter<"Order"> | string;
        arrivalTime?: DateTimeFilter<"Order"> | Date | string;
        estimatedReadyTime?: DateTimeFilter<"Order"> | Date | string;
        readyNotified?: BoolFilter<"Order"> | boolean;
        createdAt?: DateTimeFilter<"Order"> | Date | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        orderItems?: OrderItemListRelationFilter;
    };

    export type OrderOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        status?: SortOrder;
        arrivalTime?: SortOrder;
        estimatedReadyTime?: SortOrder;
        readyNotified?: SortOrder;
        createdAt?: SortOrder;
        user?: UserOrderByWithRelationInput;
        orderItems?: OrderItemOrderByRelationAggregateInput;
    };

    export type OrderWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: OrderWhereInput | OrderWhereInput[];
            OR?: OrderWhereInput[];
            NOT?: OrderWhereInput | OrderWhereInput[];
            userId?: StringFilter<"Order"> | string;
            status?: StringFilter<"Order"> | string;
            arrivalTime?: DateTimeFilter<"Order"> | Date | string;
            estimatedReadyTime?: DateTimeFilter<"Order"> | Date | string;
            readyNotified?: BoolFilter<"Order"> | boolean;
            createdAt?: DateTimeFilter<"Order"> | Date | string;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
            orderItems?: OrderItemListRelationFilter;
        },
        "id"
    >;

    export type OrderOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        status?: SortOrder;
        arrivalTime?: SortOrder;
        estimatedReadyTime?: SortOrder;
        readyNotified?: SortOrder;
        createdAt?: SortOrder;
        _count?: OrderCountOrderByAggregateInput;
        _max?: OrderMaxOrderByAggregateInput;
        _min?: OrderMinOrderByAggregateInput;
    };

    export type OrderScalarWhereWithAggregatesInput = {
        AND?:
            | OrderScalarWhereWithAggregatesInput
            | OrderScalarWhereWithAggregatesInput[];
        OR?: OrderScalarWhereWithAggregatesInput[];
        NOT?:
            | OrderScalarWhereWithAggregatesInput
            | OrderScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Order"> | string;
        userId?: StringWithAggregatesFilter<"Order"> | string;
        status?: StringWithAggregatesFilter<"Order"> | string;
        arrivalTime?: DateTimeWithAggregatesFilter<"Order"> | Date | string;
        estimatedReadyTime?:
            | DateTimeWithAggregatesFilter<"Order">
            | Date
            | string;
        readyNotified?: BoolWithAggregatesFilter<"Order"> | boolean;
        createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string;
    };

    export type OrderItemWhereInput = {
        AND?: OrderItemWhereInput | OrderItemWhereInput[];
        OR?: OrderItemWhereInput[];
        NOT?: OrderItemWhereInput | OrderItemWhereInput[];
        id?: StringFilter<"OrderItem"> | string;
        orderId?: StringFilter<"OrderItem"> | string;
        foodItemId?: StringFilter<"OrderItem"> | string;
        quantity?: IntFilter<"OrderItem"> | number;
        customizations?: StringNullableFilter<"OrderItem"> | string | null;
        order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
        foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>;
    };

    export type OrderItemOrderByWithRelationInput = {
        id?: SortOrder;
        orderId?: SortOrder;
        foodItemId?: SortOrder;
        quantity?: SortOrder;
        customizations?: SortOrderInput | SortOrder;
        order?: OrderOrderByWithRelationInput;
        foodItem?: FoodItemOrderByWithRelationInput;
    };

    export type OrderItemWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: OrderItemWhereInput | OrderItemWhereInput[];
            OR?: OrderItemWhereInput[];
            NOT?: OrderItemWhereInput | OrderItemWhereInput[];
            orderId?: StringFilter<"OrderItem"> | string;
            foodItemId?: StringFilter<"OrderItem"> | string;
            quantity?: IntFilter<"OrderItem"> | number;
            customizations?: StringNullableFilter<"OrderItem"> | string | null;
            order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
            foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>;
        },
        "id"
    >;

    export type OrderItemOrderByWithAggregationInput = {
        id?: SortOrder;
        orderId?: SortOrder;
        foodItemId?: SortOrder;
        quantity?: SortOrder;
        customizations?: SortOrderInput | SortOrder;
        _count?: OrderItemCountOrderByAggregateInput;
        _avg?: OrderItemAvgOrderByAggregateInput;
        _max?: OrderItemMaxOrderByAggregateInput;
        _min?: OrderItemMinOrderByAggregateInput;
        _sum?: OrderItemSumOrderByAggregateInput;
    };

    export type OrderItemScalarWhereWithAggregatesInput = {
        AND?:
            | OrderItemScalarWhereWithAggregatesInput
            | OrderItemScalarWhereWithAggregatesInput[];
        OR?: OrderItemScalarWhereWithAggregatesInput[];
        NOT?:
            | OrderItemScalarWhereWithAggregatesInput
            | OrderItemScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"OrderItem"> | string;
        orderId?: StringWithAggregatesFilter<"OrderItem"> | string;
        foodItemId?: StringWithAggregatesFilter<"OrderItem"> | string;
        quantity?: IntWithAggregatesFilter<"OrderItem"> | number;
        customizations?:
            | StringNullableWithAggregatesFilter<"OrderItem">
            | string
            | null;
    };

    export type FoodCreditWhereInput = {
        AND?: FoodCreditWhereInput | FoodCreditWhereInput[];
        OR?: FoodCreditWhereInput[];
        NOT?: FoodCreditWhereInput | FoodCreditWhereInput[];
        id?: StringFilter<"FoodCredit"> | string;
        userId?: StringFilter<"FoodCredit"> | string;
        balance?: IntFilter<"FoodCredit"> | number;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type FoodCreditOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        balance?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type FoodCreditWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            userId?: string;
            AND?: FoodCreditWhereInput | FoodCreditWhereInput[];
            OR?: FoodCreditWhereInput[];
            NOT?: FoodCreditWhereInput | FoodCreditWhereInput[];
            balance?: IntFilter<"FoodCredit"> | number;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        "id" | "userId"
    >;

    export type FoodCreditOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        balance?: SortOrder;
        _count?: FoodCreditCountOrderByAggregateInput;
        _avg?: FoodCreditAvgOrderByAggregateInput;
        _max?: FoodCreditMaxOrderByAggregateInput;
        _min?: FoodCreditMinOrderByAggregateInput;
        _sum?: FoodCreditSumOrderByAggregateInput;
    };

    export type FoodCreditScalarWhereWithAggregatesInput = {
        AND?:
            | FoodCreditScalarWhereWithAggregatesInput
            | FoodCreditScalarWhereWithAggregatesInput[];
        OR?: FoodCreditScalarWhereWithAggregatesInput[];
        NOT?:
            | FoodCreditScalarWhereWithAggregatesInput
            | FoodCreditScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"FoodCredit"> | string;
        userId?: StringWithAggregatesFilter<"FoodCredit"> | string;
        balance?: IntWithAggregatesFilter<"FoodCredit"> | number;
    };

    export type FoodCreditHistoryWhereInput = {
        AND?: FoodCreditHistoryWhereInput | FoodCreditHistoryWhereInput[];
        OR?: FoodCreditHistoryWhereInput[];
        NOT?: FoodCreditHistoryWhereInput | FoodCreditHistoryWhereInput[];
        id?: StringFilter<"FoodCreditHistory"> | string;
        userId?: StringFilter<"FoodCreditHistory"> | string;
        amount?: IntFilter<"FoodCreditHistory"> | number;
        reason?: StringNullableFilter<"FoodCreditHistory"> | string | null;
        adminId?: StringNullableFilter<"FoodCreditHistory"> | string | null;
        createdAt?: DateTimeFilter<"FoodCreditHistory"> | Date | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null;
    };

    export type FoodCreditHistoryOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        amount?: SortOrder;
        reason?: SortOrderInput | SortOrder;
        adminId?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        user?: UserOrderByWithRelationInput;
        admin?: AdminOrderByWithRelationInput;
    };

    export type FoodCreditHistoryWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: FoodCreditHistoryWhereInput | FoodCreditHistoryWhereInput[];
            OR?: FoodCreditHistoryWhereInput[];
            NOT?: FoodCreditHistoryWhereInput | FoodCreditHistoryWhereInput[];
            userId?: StringFilter<"FoodCreditHistory"> | string;
            amount?: IntFilter<"FoodCreditHistory"> | number;
            reason?: StringNullableFilter<"FoodCreditHistory"> | string | null;
            adminId?: StringNullableFilter<"FoodCreditHistory"> | string | null;
            createdAt?: DateTimeFilter<"FoodCreditHistory"> | Date | string;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
            admin?: XOR<
                AdminNullableScalarRelationFilter,
                AdminWhereInput
            > | null;
        },
        "id"
    >;

    export type FoodCreditHistoryOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        amount?: SortOrder;
        reason?: SortOrderInput | SortOrder;
        adminId?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        _count?: FoodCreditHistoryCountOrderByAggregateInput;
        _avg?: FoodCreditHistoryAvgOrderByAggregateInput;
        _max?: FoodCreditHistoryMaxOrderByAggregateInput;
        _min?: FoodCreditHistoryMinOrderByAggregateInput;
        _sum?: FoodCreditHistorySumOrderByAggregateInput;
    };

    export type FoodCreditHistoryScalarWhereWithAggregatesInput = {
        AND?:
            | FoodCreditHistoryScalarWhereWithAggregatesInput
            | FoodCreditHistoryScalarWhereWithAggregatesInput[];
        OR?: FoodCreditHistoryScalarWhereWithAggregatesInput[];
        NOT?:
            | FoodCreditHistoryScalarWhereWithAggregatesInput
            | FoodCreditHistoryScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"FoodCreditHistory"> | string;
        userId?: StringWithAggregatesFilter<"FoodCreditHistory"> | string;
        amount?: IntWithAggregatesFilter<"FoodCreditHistory"> | number;
        reason?:
            | StringNullableWithAggregatesFilter<"FoodCreditHistory">
            | string
            | null;
        adminId?:
            | StringNullableWithAggregatesFilter<"FoodCreditHistory">
            | string
            | null;
        createdAt?:
            | DateTimeWithAggregatesFilter<"FoodCreditHistory">
            | Date
            | string;
    };

    export type UserCreateInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        credits?: FoodCreditCreateNestedOneWithoutUserInput;
        orders?: OrderCreateNestedManyWithoutUserInput;
        creditHistory?: FoodCreditHistoryCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        credits?: FoodCreditUncheckedCreateNestedOneWithoutUserInput;
        orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
        creditHistory?: FoodCreditHistoryUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        credits?: FoodCreditUpdateOneWithoutUserNestedInput;
        orders?: OrderUpdateManyWithoutUserNestedInput;
        creditHistory?: FoodCreditHistoryUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        credits?: FoodCreditUncheckedUpdateOneWithoutUserNestedInput;
        orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
        creditHistory?: FoodCreditHistoryUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type UserCreateManyInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
    };

    export type UserUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type UserUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AdminCreateInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        creditActions?: FoodCreditHistoryCreateNestedManyWithoutAdminInput;
    };

    export type AdminUncheckedCreateInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        creditActions?: FoodCreditHistoryUncheckedCreateNestedManyWithoutAdminInput;
    };

    export type AdminUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        creditActions?: FoodCreditHistoryUpdateManyWithoutAdminNestedInput;
    };

    export type AdminUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        creditActions?: FoodCreditHistoryUncheckedUpdateManyWithoutAdminNestedInput;
    };

    export type AdminCreateManyInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
    };

    export type AdminUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AdminUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodItemCreateInput = {
        id?: string;
        name: string;
        price: number;
        imagePath: string;
        description?: string | null;
        createdAt?: Date | string;
        orderItems?: OrderItemCreateNestedManyWithoutFoodItemInput;
    };

    export type FoodItemUncheckedCreateInput = {
        id?: string;
        name: string;
        price: number;
        imagePath: string;
        description?: string | null;
        createdAt?: Date | string;
        orderItems?: OrderItemUncheckedCreateNestedManyWithoutFoodItemInput;
    };

    export type FoodItemUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        price?: FloatFieldUpdateOperationsInput | number;
        imagePath?: StringFieldUpdateOperationsInput | string;
        description?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        orderItems?: OrderItemUpdateManyWithoutFoodItemNestedInput;
    };

    export type FoodItemUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        price?: FloatFieldUpdateOperationsInput | number;
        imagePath?: StringFieldUpdateOperationsInput | string;
        description?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        orderItems?: OrderItemUncheckedUpdateManyWithoutFoodItemNestedInput;
    };

    export type FoodItemCreateManyInput = {
        id?: string;
        name: string;
        price: number;
        imagePath: string;
        description?: string | null;
        createdAt?: Date | string;
    };

    export type FoodItemUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        price?: FloatFieldUpdateOperationsInput | number;
        imagePath?: StringFieldUpdateOperationsInput | string;
        description?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodItemUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        price?: FloatFieldUpdateOperationsInput | number;
        imagePath?: StringFieldUpdateOperationsInput | string;
        description?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type OrderCreateInput = {
        id?: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutOrdersInput;
        orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
    };

    export type OrderUncheckedCreateInput = {
        id?: string;
        userId: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
        orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    };

    export type OrderUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutOrdersNestedInput;
        orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;
    };

    export type OrderUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    };

    export type OrderCreateManyInput = {
        id?: string;
        userId: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
    };

    export type OrderUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type OrderUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type OrderItemCreateInput = {
        id?: string;
        quantity: number;
        customizations?: string | null;
        order: OrderCreateNestedOneWithoutOrderItemsInput;
        foodItem: FoodItemCreateNestedOneWithoutOrderItemsInput;
    };

    export type OrderItemUncheckedCreateInput = {
        id?: string;
        orderId: string;
        foodItemId: string;
        quantity: number;
        customizations?: string | null;
    };

    export type OrderItemUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;
        foodItem?: FoodItemUpdateOneRequiredWithoutOrderItemsNestedInput;
    };

    export type OrderItemUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        orderId?: StringFieldUpdateOperationsInput | string;
        foodItemId?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type OrderItemCreateManyInput = {
        id?: string;
        orderId: string;
        foodItemId: string;
        quantity: number;
        customizations?: string | null;
    };

    export type OrderItemUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type OrderItemUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        orderId?: StringFieldUpdateOperationsInput | string;
        foodItemId?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type FoodCreditCreateInput = {
        id?: string;
        balance?: number;
        user: UserCreateNestedOneWithoutCreditsInput;
    };

    export type FoodCreditUncheckedCreateInput = {
        id?: string;
        userId: string;
        balance?: number;
    };

    export type FoodCreditUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        balance?: IntFieldUpdateOperationsInput | number;
        user?: UserUpdateOneRequiredWithoutCreditsNestedInput;
    };

    export type FoodCreditUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        balance?: IntFieldUpdateOperationsInput | number;
    };

    export type FoodCreditCreateManyInput = {
        id?: string;
        userId: string;
        balance?: number;
    };

    export type FoodCreditUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        balance?: IntFieldUpdateOperationsInput | number;
    };

    export type FoodCreditUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        balance?: IntFieldUpdateOperationsInput | number;
    };

    export type FoodCreditHistoryCreateInput = {
        id?: string;
        amount: number;
        reason?: string | null;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutCreditHistoryInput;
        admin?: AdminCreateNestedOneWithoutCreditActionsInput;
    };

    export type FoodCreditHistoryUncheckedCreateInput = {
        id?: string;
        userId: string;
        amount: number;
        reason?: string | null;
        adminId?: string | null;
        createdAt?: Date | string;
    };

    export type FoodCreditHistoryUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutCreditHistoryNestedInput;
        admin?: AdminUpdateOneWithoutCreditActionsNestedInput;
    };

    export type FoodCreditHistoryUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        adminId?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodCreditHistoryCreateManyInput = {
        id?: string;
        userId: string;
        amount: number;
        reason?: string | null;
        adminId?: string | null;
        createdAt?: Date | string;
    };

    export type FoodCreditHistoryUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodCreditHistoryUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        adminId?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type FoodCreditNullableScalarRelationFilter = {
        is?: FoodCreditWhereInput | null;
        isNot?: FoodCreditWhereInput | null;
    };

    export type OrderListRelationFilter = {
        every?: OrderWhereInput;
        some?: OrderWhereInput;
        none?: OrderWhereInput;
    };

    export type FoodCreditHistoryListRelationFilter = {
        every?: FoodCreditHistoryWhereInput;
        some?: FoodCreditHistoryWhereInput;
        none?: FoodCreditHistoryWhereInput;
    };

    export type OrderOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type FoodCreditHistoryOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type UserCountOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
    };

    export type UserMaxOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
    };

    export type UserMinOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
    };

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type AdminCountOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
    };

    export type AdminMaxOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
    };

    export type AdminMinOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        email?: SortOrder;
        password?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatFilter<$PrismaModel> | number;
    };

    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type OrderItemListRelationFilter = {
        every?: OrderItemWhereInput;
        some?: OrderItemWhereInput;
        none?: OrderItemWhereInput;
    };

    export type SortOrderInput = {
        sort: SortOrder;
        nulls?: NullsOrder;
    };

    export type OrderItemOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type FoodItemCountOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        price?: SortOrder;
        imagePath?: SortOrder;
        description?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FoodItemAvgOrderByAggregateInput = {
        price?: SortOrder;
    };

    export type FoodItemMaxOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        price?: SortOrder;
        imagePath?: SortOrder;
        description?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FoodItemMinOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        price?: SortOrder;
        imagePath?: SortOrder;
        description?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FoodItemSumOrderByAggregateInput = {
        price?: SortOrder;
    };

    export type FloatWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedFloatFilter<$PrismaModel>;
        _min?: NestedFloatFilter<$PrismaModel>;
        _max?: NestedFloatFilter<$PrismaModel>;
    };

    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?:
            | NestedStringNullableWithAggregatesFilter<$PrismaModel>
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type UserScalarRelationFilter = {
        is?: UserWhereInput;
        isNot?: UserWhereInput;
    };

    export type OrderCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        status?: SortOrder;
        arrivalTime?: SortOrder;
        estimatedReadyTime?: SortOrder;
        readyNotified?: SortOrder;
        createdAt?: SortOrder;
    };

    export type OrderMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        status?: SortOrder;
        arrivalTime?: SortOrder;
        estimatedReadyTime?: SortOrder;
        readyNotified?: SortOrder;
        createdAt?: SortOrder;
    };

    export type OrderMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        status?: SortOrder;
        arrivalTime?: SortOrder;
        estimatedReadyTime?: SortOrder;
        readyNotified?: SortOrder;
        createdAt?: SortOrder;
    };

    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type OrderScalarRelationFilter = {
        is?: OrderWhereInput;
        isNot?: OrderWhereInput;
    };

    export type FoodItemScalarRelationFilter = {
        is?: FoodItemWhereInput;
        isNot?: FoodItemWhereInput;
    };

    export type OrderItemCountOrderByAggregateInput = {
        id?: SortOrder;
        orderId?: SortOrder;
        foodItemId?: SortOrder;
        quantity?: SortOrder;
        customizations?: SortOrder;
    };

    export type OrderItemAvgOrderByAggregateInput = {
        quantity?: SortOrder;
    };

    export type OrderItemMaxOrderByAggregateInput = {
        id?: SortOrder;
        orderId?: SortOrder;
        foodItemId?: SortOrder;
        quantity?: SortOrder;
        customizations?: SortOrder;
    };

    export type OrderItemMinOrderByAggregateInput = {
        id?: SortOrder;
        orderId?: SortOrder;
        foodItemId?: SortOrder;
        quantity?: SortOrder;
        customizations?: SortOrder;
    };

    export type OrderItemSumOrderByAggregateInput = {
        quantity?: SortOrder;
    };

    export type IntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedIntFilter<$PrismaModel>;
        _min?: NestedIntFilter<$PrismaModel>;
        _max?: NestedIntFilter<$PrismaModel>;
    };

    export type FoodCreditCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        balance?: SortOrder;
    };

    export type FoodCreditAvgOrderByAggregateInput = {
        balance?: SortOrder;
    };

    export type FoodCreditMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        balance?: SortOrder;
    };

    export type FoodCreditMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        balance?: SortOrder;
    };

    export type FoodCreditSumOrderByAggregateInput = {
        balance?: SortOrder;
    };

    export type AdminNullableScalarRelationFilter = {
        is?: AdminWhereInput | null;
        isNot?: AdminWhereInput | null;
    };

    export type FoodCreditHistoryCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        amount?: SortOrder;
        reason?: SortOrder;
        adminId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FoodCreditHistoryAvgOrderByAggregateInput = {
        amount?: SortOrder;
    };

    export type FoodCreditHistoryMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        amount?: SortOrder;
        reason?: SortOrder;
        adminId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FoodCreditHistoryMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        amount?: SortOrder;
        reason?: SortOrder;
        adminId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FoodCreditHistorySumOrderByAggregateInput = {
        amount?: SortOrder;
    };

    export type FoodCreditCreateNestedOneWithoutUserInput = {
        create?: XOR<
            FoodCreditCreateWithoutUserInput,
            FoodCreditUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: FoodCreditCreateOrConnectWithoutUserInput;
        connect?: FoodCreditWhereUniqueInput;
    };

    export type OrderCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  OrderCreateWithoutUserInput,
                  OrderUncheckedCreateWithoutUserInput
              >
            | OrderCreateWithoutUserInput[]
            | OrderUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | OrderCreateOrConnectWithoutUserInput
            | OrderCreateOrConnectWithoutUserInput[];
        createMany?: OrderCreateManyUserInputEnvelope;
        connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    };

    export type FoodCreditHistoryCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutUserInput,
                  FoodCreditHistoryUncheckedCreateWithoutUserInput
              >
            | FoodCreditHistoryCreateWithoutUserInput[]
            | FoodCreditHistoryUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutUserInput
            | FoodCreditHistoryCreateOrConnectWithoutUserInput[];
        createMany?: FoodCreditHistoryCreateManyUserInputEnvelope;
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
    };

    export type FoodCreditUncheckedCreateNestedOneWithoutUserInput = {
        create?: XOR<
            FoodCreditCreateWithoutUserInput,
            FoodCreditUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: FoodCreditCreateOrConnectWithoutUserInput;
        connect?: FoodCreditWhereUniqueInput;
    };

    export type OrderUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  OrderCreateWithoutUserInput,
                  OrderUncheckedCreateWithoutUserInput
              >
            | OrderCreateWithoutUserInput[]
            | OrderUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | OrderCreateOrConnectWithoutUserInput
            | OrderCreateOrConnectWithoutUserInput[];
        createMany?: OrderCreateManyUserInputEnvelope;
        connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    };

    export type FoodCreditHistoryUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutUserInput,
                  FoodCreditHistoryUncheckedCreateWithoutUserInput
              >
            | FoodCreditHistoryCreateWithoutUserInput[]
            | FoodCreditHistoryUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutUserInput
            | FoodCreditHistoryCreateOrConnectWithoutUserInput[];
        createMany?: FoodCreditHistoryCreateManyUserInputEnvelope;
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
    };

    export type StringFieldUpdateOperationsInput = {
        set?: string;
    };

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string;
    };

    export type FoodCreditUpdateOneWithoutUserNestedInput = {
        create?: XOR<
            FoodCreditCreateWithoutUserInput,
            FoodCreditUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: FoodCreditCreateOrConnectWithoutUserInput;
        upsert?: FoodCreditUpsertWithoutUserInput;
        disconnect?: FoodCreditWhereInput | boolean;
        delete?: FoodCreditWhereInput | boolean;
        connect?: FoodCreditWhereUniqueInput;
        update?: XOR<
            XOR<
                FoodCreditUpdateToOneWithWhereWithoutUserInput,
                FoodCreditUpdateWithoutUserInput
            >,
            FoodCreditUncheckedUpdateWithoutUserInput
        >;
    };

    export type OrderUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  OrderCreateWithoutUserInput,
                  OrderUncheckedCreateWithoutUserInput
              >
            | OrderCreateWithoutUserInput[]
            | OrderUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | OrderCreateOrConnectWithoutUserInput
            | OrderCreateOrConnectWithoutUserInput[];
        upsert?:
            | OrderUpsertWithWhereUniqueWithoutUserInput
            | OrderUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: OrderCreateManyUserInputEnvelope;
        set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        update?:
            | OrderUpdateWithWhereUniqueWithoutUserInput
            | OrderUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | OrderUpdateManyWithWhereWithoutUserInput
            | OrderUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
    };

    export type FoodCreditHistoryUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutUserInput,
                  FoodCreditHistoryUncheckedCreateWithoutUserInput
              >
            | FoodCreditHistoryCreateWithoutUserInput[]
            | FoodCreditHistoryUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutUserInput
            | FoodCreditHistoryCreateOrConnectWithoutUserInput[];
        upsert?:
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutUserInput
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: FoodCreditHistoryCreateManyUserInputEnvelope;
        set?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        disconnect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        delete?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        update?:
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutUserInput
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | FoodCreditHistoryUpdateManyWithWhereWithoutUserInput
            | FoodCreditHistoryUpdateManyWithWhereWithoutUserInput[];
        deleteMany?:
            | FoodCreditHistoryScalarWhereInput
            | FoodCreditHistoryScalarWhereInput[];
    };

    export type FoodCreditUncheckedUpdateOneWithoutUserNestedInput = {
        create?: XOR<
            FoodCreditCreateWithoutUserInput,
            FoodCreditUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: FoodCreditCreateOrConnectWithoutUserInput;
        upsert?: FoodCreditUpsertWithoutUserInput;
        disconnect?: FoodCreditWhereInput | boolean;
        delete?: FoodCreditWhereInput | boolean;
        connect?: FoodCreditWhereUniqueInput;
        update?: XOR<
            XOR<
                FoodCreditUpdateToOneWithWhereWithoutUserInput,
                FoodCreditUpdateWithoutUserInput
            >,
            FoodCreditUncheckedUpdateWithoutUserInput
        >;
    };

    export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  OrderCreateWithoutUserInput,
                  OrderUncheckedCreateWithoutUserInput
              >
            | OrderCreateWithoutUserInput[]
            | OrderUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | OrderCreateOrConnectWithoutUserInput
            | OrderCreateOrConnectWithoutUserInput[];
        upsert?:
            | OrderUpsertWithWhereUniqueWithoutUserInput
            | OrderUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: OrderCreateManyUserInputEnvelope;
        set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
        update?:
            | OrderUpdateWithWhereUniqueWithoutUserInput
            | OrderUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | OrderUpdateManyWithWhereWithoutUserInput
            | OrderUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
    };

    export type FoodCreditHistoryUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutUserInput,
                  FoodCreditHistoryUncheckedCreateWithoutUserInput
              >
            | FoodCreditHistoryCreateWithoutUserInput[]
            | FoodCreditHistoryUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutUserInput
            | FoodCreditHistoryCreateOrConnectWithoutUserInput[];
        upsert?:
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutUserInput
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: FoodCreditHistoryCreateManyUserInputEnvelope;
        set?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        disconnect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        delete?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        update?:
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutUserInput
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | FoodCreditHistoryUpdateManyWithWhereWithoutUserInput
            | FoodCreditHistoryUpdateManyWithWhereWithoutUserInput[];
        deleteMany?:
            | FoodCreditHistoryScalarWhereInput
            | FoodCreditHistoryScalarWhereInput[];
    };

    export type FoodCreditHistoryCreateNestedManyWithoutAdminInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutAdminInput,
                  FoodCreditHistoryUncheckedCreateWithoutAdminInput
              >
            | FoodCreditHistoryCreateWithoutAdminInput[]
            | FoodCreditHistoryUncheckedCreateWithoutAdminInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput[];
        createMany?: FoodCreditHistoryCreateManyAdminInputEnvelope;
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
    };

    export type FoodCreditHistoryUncheckedCreateNestedManyWithoutAdminInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutAdminInput,
                  FoodCreditHistoryUncheckedCreateWithoutAdminInput
              >
            | FoodCreditHistoryCreateWithoutAdminInput[]
            | FoodCreditHistoryUncheckedCreateWithoutAdminInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput[];
        createMany?: FoodCreditHistoryCreateManyAdminInputEnvelope;
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
    };

    export type FoodCreditHistoryUpdateManyWithoutAdminNestedInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutAdminInput,
                  FoodCreditHistoryUncheckedCreateWithoutAdminInput
              >
            | FoodCreditHistoryCreateWithoutAdminInput[]
            | FoodCreditHistoryUncheckedCreateWithoutAdminInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput[];
        upsert?:
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutAdminInput
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutAdminInput[];
        createMany?: FoodCreditHistoryCreateManyAdminInputEnvelope;
        set?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        disconnect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        delete?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        update?:
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutAdminInput
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutAdminInput[];
        updateMany?:
            | FoodCreditHistoryUpdateManyWithWhereWithoutAdminInput
            | FoodCreditHistoryUpdateManyWithWhereWithoutAdminInput[];
        deleteMany?:
            | FoodCreditHistoryScalarWhereInput
            | FoodCreditHistoryScalarWhereInput[];
    };

    export type FoodCreditHistoryUncheckedUpdateManyWithoutAdminNestedInput = {
        create?:
            | XOR<
                  FoodCreditHistoryCreateWithoutAdminInput,
                  FoodCreditHistoryUncheckedCreateWithoutAdminInput
              >
            | FoodCreditHistoryCreateWithoutAdminInput[]
            | FoodCreditHistoryUncheckedCreateWithoutAdminInput[];
        connectOrCreate?:
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput
            | FoodCreditHistoryCreateOrConnectWithoutAdminInput[];
        upsert?:
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutAdminInput
            | FoodCreditHistoryUpsertWithWhereUniqueWithoutAdminInput[];
        createMany?: FoodCreditHistoryCreateManyAdminInputEnvelope;
        set?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        disconnect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        delete?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        connect?:
            | FoodCreditHistoryWhereUniqueInput
            | FoodCreditHistoryWhereUniqueInput[];
        update?:
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutAdminInput
            | FoodCreditHistoryUpdateWithWhereUniqueWithoutAdminInput[];
        updateMany?:
            | FoodCreditHistoryUpdateManyWithWhereWithoutAdminInput
            | FoodCreditHistoryUpdateManyWithWhereWithoutAdminInput[];
        deleteMany?:
            | FoodCreditHistoryScalarWhereInput
            | FoodCreditHistoryScalarWhereInput[];
    };

    export type OrderItemCreateNestedManyWithoutFoodItemInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutFoodItemInput,
                  OrderItemUncheckedCreateWithoutFoodItemInput
              >
            | OrderItemCreateWithoutFoodItemInput[]
            | OrderItemUncheckedCreateWithoutFoodItemInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutFoodItemInput
            | OrderItemCreateOrConnectWithoutFoodItemInput[];
        createMany?: OrderItemCreateManyFoodItemInputEnvelope;
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    };

    export type OrderItemUncheckedCreateNestedManyWithoutFoodItemInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutFoodItemInput,
                  OrderItemUncheckedCreateWithoutFoodItemInput
              >
            | OrderItemCreateWithoutFoodItemInput[]
            | OrderItemUncheckedCreateWithoutFoodItemInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutFoodItemInput
            | OrderItemCreateOrConnectWithoutFoodItemInput[];
        createMany?: OrderItemCreateManyFoodItemInputEnvelope;
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    };

    export type FloatFieldUpdateOperationsInput = {
        set?: number;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null;
    };

    export type OrderItemUpdateManyWithoutFoodItemNestedInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutFoodItemInput,
                  OrderItemUncheckedCreateWithoutFoodItemInput
              >
            | OrderItemCreateWithoutFoodItemInput[]
            | OrderItemUncheckedCreateWithoutFoodItemInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutFoodItemInput
            | OrderItemCreateOrConnectWithoutFoodItemInput[];
        upsert?:
            | OrderItemUpsertWithWhereUniqueWithoutFoodItemInput
            | OrderItemUpsertWithWhereUniqueWithoutFoodItemInput[];
        createMany?: OrderItemCreateManyFoodItemInputEnvelope;
        set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        update?:
            | OrderItemUpdateWithWhereUniqueWithoutFoodItemInput
            | OrderItemUpdateWithWhereUniqueWithoutFoodItemInput[];
        updateMany?:
            | OrderItemUpdateManyWithWhereWithoutFoodItemInput
            | OrderItemUpdateManyWithWhereWithoutFoodItemInput[];
        deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    };

    export type OrderItemUncheckedUpdateManyWithoutFoodItemNestedInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutFoodItemInput,
                  OrderItemUncheckedCreateWithoutFoodItemInput
              >
            | OrderItemCreateWithoutFoodItemInput[]
            | OrderItemUncheckedCreateWithoutFoodItemInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutFoodItemInput
            | OrderItemCreateOrConnectWithoutFoodItemInput[];
        upsert?:
            | OrderItemUpsertWithWhereUniqueWithoutFoodItemInput
            | OrderItemUpsertWithWhereUniqueWithoutFoodItemInput[];
        createMany?: OrderItemCreateManyFoodItemInputEnvelope;
        set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        update?:
            | OrderItemUpdateWithWhereUniqueWithoutFoodItemInput
            | OrderItemUpdateWithWhereUniqueWithoutFoodItemInput[];
        updateMany?:
            | OrderItemUpdateManyWithWhereWithoutFoodItemInput
            | OrderItemUpdateManyWithWhereWithoutFoodItemInput[];
        deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    };

    export type UserCreateNestedOneWithoutOrdersInput = {
        create?: XOR<
            UserCreateWithoutOrdersInput,
            UserUncheckedCreateWithoutOrdersInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;
        connect?: UserWhereUniqueInput;
    };

    export type OrderItemCreateNestedManyWithoutOrderInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutOrderInput,
                  OrderItemUncheckedCreateWithoutOrderInput
              >
            | OrderItemCreateWithoutOrderInput[]
            | OrderItemUncheckedCreateWithoutOrderInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutOrderInput
            | OrderItemCreateOrConnectWithoutOrderInput[];
        createMany?: OrderItemCreateManyOrderInputEnvelope;
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    };

    export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutOrderInput,
                  OrderItemUncheckedCreateWithoutOrderInput
              >
            | OrderItemCreateWithoutOrderInput[]
            | OrderItemUncheckedCreateWithoutOrderInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutOrderInput
            | OrderItemCreateOrConnectWithoutOrderInput[];
        createMany?: OrderItemCreateManyOrderInputEnvelope;
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    };

    export type BoolFieldUpdateOperationsInput = {
        set?: boolean;
    };

    export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
        create?: XOR<
            UserCreateWithoutOrdersInput,
            UserUncheckedCreateWithoutOrdersInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;
        upsert?: UserUpsertWithoutOrdersInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutOrdersInput,
                UserUpdateWithoutOrdersInput
            >,
            UserUncheckedUpdateWithoutOrdersInput
        >;
    };

    export type OrderItemUpdateManyWithoutOrderNestedInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutOrderInput,
                  OrderItemUncheckedCreateWithoutOrderInput
              >
            | OrderItemCreateWithoutOrderInput[]
            | OrderItemUncheckedCreateWithoutOrderInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutOrderInput
            | OrderItemCreateOrConnectWithoutOrderInput[];
        upsert?:
            | OrderItemUpsertWithWhereUniqueWithoutOrderInput
            | OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
        createMany?: OrderItemCreateManyOrderInputEnvelope;
        set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        update?:
            | OrderItemUpdateWithWhereUniqueWithoutOrderInput
            | OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
        updateMany?:
            | OrderItemUpdateManyWithWhereWithoutOrderInput
            | OrderItemUpdateManyWithWhereWithoutOrderInput[];
        deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    };

    export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
        create?:
            | XOR<
                  OrderItemCreateWithoutOrderInput,
                  OrderItemUncheckedCreateWithoutOrderInput
              >
            | OrderItemCreateWithoutOrderInput[]
            | OrderItemUncheckedCreateWithoutOrderInput[];
        connectOrCreate?:
            | OrderItemCreateOrConnectWithoutOrderInput
            | OrderItemCreateOrConnectWithoutOrderInput[];
        upsert?:
            | OrderItemUpsertWithWhereUniqueWithoutOrderInput
            | OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
        createMany?: OrderItemCreateManyOrderInputEnvelope;
        set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
        update?:
            | OrderItemUpdateWithWhereUniqueWithoutOrderInput
            | OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
        updateMany?:
            | OrderItemUpdateManyWithWhereWithoutOrderInput
            | OrderItemUpdateManyWithWhereWithoutOrderInput[];
        deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    };

    export type OrderCreateNestedOneWithoutOrderItemsInput = {
        create?: XOR<
            OrderCreateWithoutOrderItemsInput,
            OrderUncheckedCreateWithoutOrderItemsInput
        >;
        connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;
        connect?: OrderWhereUniqueInput;
    };

    export type FoodItemCreateNestedOneWithoutOrderItemsInput = {
        create?: XOR<
            FoodItemCreateWithoutOrderItemsInput,
            FoodItemUncheckedCreateWithoutOrderItemsInput
        >;
        connectOrCreate?: FoodItemCreateOrConnectWithoutOrderItemsInput;
        connect?: FoodItemWhereUniqueInput;
    };

    export type IntFieldUpdateOperationsInput = {
        set?: number;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
        create?: XOR<
            OrderCreateWithoutOrderItemsInput,
            OrderUncheckedCreateWithoutOrderItemsInput
        >;
        connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;
        upsert?: OrderUpsertWithoutOrderItemsInput;
        connect?: OrderWhereUniqueInput;
        update?: XOR<
            XOR<
                OrderUpdateToOneWithWhereWithoutOrderItemsInput,
                OrderUpdateWithoutOrderItemsInput
            >,
            OrderUncheckedUpdateWithoutOrderItemsInput
        >;
    };

    export type FoodItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
        create?: XOR<
            FoodItemCreateWithoutOrderItemsInput,
            FoodItemUncheckedCreateWithoutOrderItemsInput
        >;
        connectOrCreate?: FoodItemCreateOrConnectWithoutOrderItemsInput;
        upsert?: FoodItemUpsertWithoutOrderItemsInput;
        connect?: FoodItemWhereUniqueInput;
        update?: XOR<
            XOR<
                FoodItemUpdateToOneWithWhereWithoutOrderItemsInput,
                FoodItemUpdateWithoutOrderItemsInput
            >,
            FoodItemUncheckedUpdateWithoutOrderItemsInput
        >;
    };

    export type UserCreateNestedOneWithoutCreditsInput = {
        create?: XOR<
            UserCreateWithoutCreditsInput,
            UserUncheckedCreateWithoutCreditsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutCreditsInput;
        connect?: UserWhereUniqueInput;
    };

    export type UserUpdateOneRequiredWithoutCreditsNestedInput = {
        create?: XOR<
            UserCreateWithoutCreditsInput,
            UserUncheckedCreateWithoutCreditsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutCreditsInput;
        upsert?: UserUpsertWithoutCreditsInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutCreditsInput,
                UserUpdateWithoutCreditsInput
            >,
            UserUncheckedUpdateWithoutCreditsInput
        >;
    };

    export type UserCreateNestedOneWithoutCreditHistoryInput = {
        create?: XOR<
            UserCreateWithoutCreditHistoryInput,
            UserUncheckedCreateWithoutCreditHistoryInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutCreditHistoryInput;
        connect?: UserWhereUniqueInput;
    };

    export type AdminCreateNestedOneWithoutCreditActionsInput = {
        create?: XOR<
            AdminCreateWithoutCreditActionsInput,
            AdminUncheckedCreateWithoutCreditActionsInput
        >;
        connectOrCreate?: AdminCreateOrConnectWithoutCreditActionsInput;
        connect?: AdminWhereUniqueInput;
    };

    export type UserUpdateOneRequiredWithoutCreditHistoryNestedInput = {
        create?: XOR<
            UserCreateWithoutCreditHistoryInput,
            UserUncheckedCreateWithoutCreditHistoryInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutCreditHistoryInput;
        upsert?: UserUpsertWithoutCreditHistoryInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutCreditHistoryInput,
                UserUpdateWithoutCreditHistoryInput
            >,
            UserUncheckedUpdateWithoutCreditHistoryInput
        >;
    };

    export type AdminUpdateOneWithoutCreditActionsNestedInput = {
        create?: XOR<
            AdminCreateWithoutCreditActionsInput,
            AdminUncheckedCreateWithoutCreditActionsInput
        >;
        connectOrCreate?: AdminCreateOrConnectWithoutCreditActionsInput;
        upsert?: AdminUpsertWithoutCreditActionsInput;
        disconnect?: AdminWhereInput | boolean;
        delete?: AdminWhereInput | boolean;
        connect?: AdminWhereUniqueInput;
        update?: XOR<
            XOR<
                AdminUpdateToOneWithWhereWithoutCreditActionsInput,
                AdminUpdateWithoutCreditActionsInput
            >,
            AdminUncheckedUpdateWithoutCreditActionsInput
        >;
    };

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatFilter<$PrismaModel> | number;
    };

    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedFloatFilter<$PrismaModel>;
        _min?: NestedFloatFilter<$PrismaModel>;
        _max?: NestedFloatFilter<$PrismaModel>;
    };

    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?: string | StringFieldRefInput<$PrismaModel> | null;
            in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
            notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
            lt?: string | StringFieldRefInput<$PrismaModel>;
            lte?: string | StringFieldRefInput<$PrismaModel>;
            gt?: string | StringFieldRefInput<$PrismaModel>;
            gte?: string | StringFieldRefInput<$PrismaModel>;
            contains?: string | StringFieldRefInput<$PrismaModel>;
            startsWith?: string | StringFieldRefInput<$PrismaModel>;
            endsWith?: string | StringFieldRefInput<$PrismaModel>;
            not?:
                | NestedStringNullableWithAggregatesFilter<$PrismaModel>
                | string
                | null;
            _count?: NestedIntNullableFilter<$PrismaModel>;
            _min?: NestedStringNullableFilter<$PrismaModel>;
            _max?: NestedStringNullableFilter<$PrismaModel>;
        };

    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    };

    export type NestedBoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedIntFilter<$PrismaModel>;
        _min?: NestedIntFilter<$PrismaModel>;
        _max?: NestedIntFilter<$PrismaModel>;
    };

    export type FoodCreditCreateWithoutUserInput = {
        id?: string;
        balance?: number;
    };

    export type FoodCreditUncheckedCreateWithoutUserInput = {
        id?: string;
        balance?: number;
    };

    export type FoodCreditCreateOrConnectWithoutUserInput = {
        where: FoodCreditWhereUniqueInput;
        create: XOR<
            FoodCreditCreateWithoutUserInput,
            FoodCreditUncheckedCreateWithoutUserInput
        >;
    };

    export type OrderCreateWithoutUserInput = {
        id?: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
        orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
    };

    export type OrderUncheckedCreateWithoutUserInput = {
        id?: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
        orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    };

    export type OrderCreateOrConnectWithoutUserInput = {
        where: OrderWhereUniqueInput;
        create: XOR<
            OrderCreateWithoutUserInput,
            OrderUncheckedCreateWithoutUserInput
        >;
    };

    export type OrderCreateManyUserInputEnvelope = {
        data: OrderCreateManyUserInput | OrderCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type FoodCreditHistoryCreateWithoutUserInput = {
        id?: string;
        amount: number;
        reason?: string | null;
        createdAt?: Date | string;
        admin?: AdminCreateNestedOneWithoutCreditActionsInput;
    };

    export type FoodCreditHistoryUncheckedCreateWithoutUserInput = {
        id?: string;
        amount: number;
        reason?: string | null;
        adminId?: string | null;
        createdAt?: Date | string;
    };

    export type FoodCreditHistoryCreateOrConnectWithoutUserInput = {
        where: FoodCreditHistoryWhereUniqueInput;
        create: XOR<
            FoodCreditHistoryCreateWithoutUserInput,
            FoodCreditHistoryUncheckedCreateWithoutUserInput
        >;
    };

    export type FoodCreditHistoryCreateManyUserInputEnvelope = {
        data:
            | FoodCreditHistoryCreateManyUserInput
            | FoodCreditHistoryCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type FoodCreditUpsertWithoutUserInput = {
        update: XOR<
            FoodCreditUpdateWithoutUserInput,
            FoodCreditUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            FoodCreditCreateWithoutUserInput,
            FoodCreditUncheckedCreateWithoutUserInput
        >;
        where?: FoodCreditWhereInput;
    };

    export type FoodCreditUpdateToOneWithWhereWithoutUserInput = {
        where?: FoodCreditWhereInput;
        data: XOR<
            FoodCreditUpdateWithoutUserInput,
            FoodCreditUncheckedUpdateWithoutUserInput
        >;
    };

    export type FoodCreditUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        balance?: IntFieldUpdateOperationsInput | number;
    };

    export type FoodCreditUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        balance?: IntFieldUpdateOperationsInput | number;
    };

    export type OrderUpsertWithWhereUniqueWithoutUserInput = {
        where: OrderWhereUniqueInput;
        update: XOR<
            OrderUpdateWithoutUserInput,
            OrderUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            OrderCreateWithoutUserInput,
            OrderUncheckedCreateWithoutUserInput
        >;
    };

    export type OrderUpdateWithWhereUniqueWithoutUserInput = {
        where: OrderWhereUniqueInput;
        data: XOR<
            OrderUpdateWithoutUserInput,
            OrderUncheckedUpdateWithoutUserInput
        >;
    };

    export type OrderUpdateManyWithWhereWithoutUserInput = {
        where: OrderScalarWhereInput;
        data: XOR<
            OrderUpdateManyMutationInput,
            OrderUncheckedUpdateManyWithoutUserInput
        >;
    };

    export type OrderScalarWhereInput = {
        AND?: OrderScalarWhereInput | OrderScalarWhereInput[];
        OR?: OrderScalarWhereInput[];
        NOT?: OrderScalarWhereInput | OrderScalarWhereInput[];
        id?: StringFilter<"Order"> | string;
        userId?: StringFilter<"Order"> | string;
        status?: StringFilter<"Order"> | string;
        arrivalTime?: DateTimeFilter<"Order"> | Date | string;
        estimatedReadyTime?: DateTimeFilter<"Order"> | Date | string;
        readyNotified?: BoolFilter<"Order"> | boolean;
        createdAt?: DateTimeFilter<"Order"> | Date | string;
    };

    export type FoodCreditHistoryUpsertWithWhereUniqueWithoutUserInput = {
        where: FoodCreditHistoryWhereUniqueInput;
        update: XOR<
            FoodCreditHistoryUpdateWithoutUserInput,
            FoodCreditHistoryUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            FoodCreditHistoryCreateWithoutUserInput,
            FoodCreditHistoryUncheckedCreateWithoutUserInput
        >;
    };

    export type FoodCreditHistoryUpdateWithWhereUniqueWithoutUserInput = {
        where: FoodCreditHistoryWhereUniqueInput;
        data: XOR<
            FoodCreditHistoryUpdateWithoutUserInput,
            FoodCreditHistoryUncheckedUpdateWithoutUserInput
        >;
    };

    export type FoodCreditHistoryUpdateManyWithWhereWithoutUserInput = {
        where: FoodCreditHistoryScalarWhereInput;
        data: XOR<
            FoodCreditHistoryUpdateManyMutationInput,
            FoodCreditHistoryUncheckedUpdateManyWithoutUserInput
        >;
    };

    export type FoodCreditHistoryScalarWhereInput = {
        AND?:
            | FoodCreditHistoryScalarWhereInput
            | FoodCreditHistoryScalarWhereInput[];
        OR?: FoodCreditHistoryScalarWhereInput[];
        NOT?:
            | FoodCreditHistoryScalarWhereInput
            | FoodCreditHistoryScalarWhereInput[];
        id?: StringFilter<"FoodCreditHistory"> | string;
        userId?: StringFilter<"FoodCreditHistory"> | string;
        amount?: IntFilter<"FoodCreditHistory"> | number;
        reason?: StringNullableFilter<"FoodCreditHistory"> | string | null;
        adminId?: StringNullableFilter<"FoodCreditHistory"> | string | null;
        createdAt?: DateTimeFilter<"FoodCreditHistory"> | Date | string;
    };

    export type FoodCreditHistoryCreateWithoutAdminInput = {
        id?: string;
        amount: number;
        reason?: string | null;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutCreditHistoryInput;
    };

    export type FoodCreditHistoryUncheckedCreateWithoutAdminInput = {
        id?: string;
        userId: string;
        amount: number;
        reason?: string | null;
        createdAt?: Date | string;
    };

    export type FoodCreditHistoryCreateOrConnectWithoutAdminInput = {
        where: FoodCreditHistoryWhereUniqueInput;
        create: XOR<
            FoodCreditHistoryCreateWithoutAdminInput,
            FoodCreditHistoryUncheckedCreateWithoutAdminInput
        >;
    };

    export type FoodCreditHistoryCreateManyAdminInputEnvelope = {
        data:
            | FoodCreditHistoryCreateManyAdminInput
            | FoodCreditHistoryCreateManyAdminInput[];
        skipDuplicates?: boolean;
    };

    export type FoodCreditHistoryUpsertWithWhereUniqueWithoutAdminInput = {
        where: FoodCreditHistoryWhereUniqueInput;
        update: XOR<
            FoodCreditHistoryUpdateWithoutAdminInput,
            FoodCreditHistoryUncheckedUpdateWithoutAdminInput
        >;
        create: XOR<
            FoodCreditHistoryCreateWithoutAdminInput,
            FoodCreditHistoryUncheckedCreateWithoutAdminInput
        >;
    };

    export type FoodCreditHistoryUpdateWithWhereUniqueWithoutAdminInput = {
        where: FoodCreditHistoryWhereUniqueInput;
        data: XOR<
            FoodCreditHistoryUpdateWithoutAdminInput,
            FoodCreditHistoryUncheckedUpdateWithoutAdminInput
        >;
    };

    export type FoodCreditHistoryUpdateManyWithWhereWithoutAdminInput = {
        where: FoodCreditHistoryScalarWhereInput;
        data: XOR<
            FoodCreditHistoryUpdateManyMutationInput,
            FoodCreditHistoryUncheckedUpdateManyWithoutAdminInput
        >;
    };

    export type OrderItemCreateWithoutFoodItemInput = {
        id?: string;
        quantity: number;
        customizations?: string | null;
        order: OrderCreateNestedOneWithoutOrderItemsInput;
    };

    export type OrderItemUncheckedCreateWithoutFoodItemInput = {
        id?: string;
        orderId: string;
        quantity: number;
        customizations?: string | null;
    };

    export type OrderItemCreateOrConnectWithoutFoodItemInput = {
        where: OrderItemWhereUniqueInput;
        create: XOR<
            OrderItemCreateWithoutFoodItemInput,
            OrderItemUncheckedCreateWithoutFoodItemInput
        >;
    };

    export type OrderItemCreateManyFoodItemInputEnvelope = {
        data:
            | OrderItemCreateManyFoodItemInput
            | OrderItemCreateManyFoodItemInput[];
        skipDuplicates?: boolean;
    };

    export type OrderItemUpsertWithWhereUniqueWithoutFoodItemInput = {
        where: OrderItemWhereUniqueInput;
        update: XOR<
            OrderItemUpdateWithoutFoodItemInput,
            OrderItemUncheckedUpdateWithoutFoodItemInput
        >;
        create: XOR<
            OrderItemCreateWithoutFoodItemInput,
            OrderItemUncheckedCreateWithoutFoodItemInput
        >;
    };

    export type OrderItemUpdateWithWhereUniqueWithoutFoodItemInput = {
        where: OrderItemWhereUniqueInput;
        data: XOR<
            OrderItemUpdateWithoutFoodItemInput,
            OrderItemUncheckedUpdateWithoutFoodItemInput
        >;
    };

    export type OrderItemUpdateManyWithWhereWithoutFoodItemInput = {
        where: OrderItemScalarWhereInput;
        data: XOR<
            OrderItemUpdateManyMutationInput,
            OrderItemUncheckedUpdateManyWithoutFoodItemInput
        >;
    };

    export type OrderItemScalarWhereInput = {
        AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
        OR?: OrderItemScalarWhereInput[];
        NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
        id?: StringFilter<"OrderItem"> | string;
        orderId?: StringFilter<"OrderItem"> | string;
        foodItemId?: StringFilter<"OrderItem"> | string;
        quantity?: IntFilter<"OrderItem"> | number;
        customizations?: StringNullableFilter<"OrderItem"> | string | null;
    };

    export type UserCreateWithoutOrdersInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        credits?: FoodCreditCreateNestedOneWithoutUserInput;
        creditHistory?: FoodCreditHistoryCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutOrdersInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        credits?: FoodCreditUncheckedCreateNestedOneWithoutUserInput;
        creditHistory?: FoodCreditHistoryUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutOrdersInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutOrdersInput,
            UserUncheckedCreateWithoutOrdersInput
        >;
    };

    export type OrderItemCreateWithoutOrderInput = {
        id?: string;
        quantity: number;
        customizations?: string | null;
        foodItem: FoodItemCreateNestedOneWithoutOrderItemsInput;
    };

    export type OrderItemUncheckedCreateWithoutOrderInput = {
        id?: string;
        foodItemId: string;
        quantity: number;
        customizations?: string | null;
    };

    export type OrderItemCreateOrConnectWithoutOrderInput = {
        where: OrderItemWhereUniqueInput;
        create: XOR<
            OrderItemCreateWithoutOrderInput,
            OrderItemUncheckedCreateWithoutOrderInput
        >;
    };

    export type OrderItemCreateManyOrderInputEnvelope = {
        data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[];
        skipDuplicates?: boolean;
    };

    export type UserUpsertWithoutOrdersInput = {
        update: XOR<
            UserUpdateWithoutOrdersInput,
            UserUncheckedUpdateWithoutOrdersInput
        >;
        create: XOR<
            UserCreateWithoutOrdersInput,
            UserUncheckedCreateWithoutOrdersInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutOrdersInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutOrdersInput,
            UserUncheckedUpdateWithoutOrdersInput
        >;
    };

    export type UserUpdateWithoutOrdersInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        credits?: FoodCreditUpdateOneWithoutUserNestedInput;
        creditHistory?: FoodCreditHistoryUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutOrdersInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        credits?: FoodCreditUncheckedUpdateOneWithoutUserNestedInput;
        creditHistory?: FoodCreditHistoryUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
        where: OrderItemWhereUniqueInput;
        update: XOR<
            OrderItemUpdateWithoutOrderInput,
            OrderItemUncheckedUpdateWithoutOrderInput
        >;
        create: XOR<
            OrderItemCreateWithoutOrderInput,
            OrderItemUncheckedCreateWithoutOrderInput
        >;
    };

    export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
        where: OrderItemWhereUniqueInput;
        data: XOR<
            OrderItemUpdateWithoutOrderInput,
            OrderItemUncheckedUpdateWithoutOrderInput
        >;
    };

    export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
        where: OrderItemScalarWhereInput;
        data: XOR<
            OrderItemUpdateManyMutationInput,
            OrderItemUncheckedUpdateManyWithoutOrderInput
        >;
    };

    export type OrderCreateWithoutOrderItemsInput = {
        id?: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutOrdersInput;
    };

    export type OrderUncheckedCreateWithoutOrderItemsInput = {
        id?: string;
        userId: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
    };

    export type OrderCreateOrConnectWithoutOrderItemsInput = {
        where: OrderWhereUniqueInput;
        create: XOR<
            OrderCreateWithoutOrderItemsInput,
            OrderUncheckedCreateWithoutOrderItemsInput
        >;
    };

    export type FoodItemCreateWithoutOrderItemsInput = {
        id?: string;
        name: string;
        price: number;
        imagePath: string;
        description?: string | null;
        createdAt?: Date | string;
    };

    export type FoodItemUncheckedCreateWithoutOrderItemsInput = {
        id?: string;
        name: string;
        price: number;
        imagePath: string;
        description?: string | null;
        createdAt?: Date | string;
    };

    export type FoodItemCreateOrConnectWithoutOrderItemsInput = {
        where: FoodItemWhereUniqueInput;
        create: XOR<
            FoodItemCreateWithoutOrderItemsInput,
            FoodItemUncheckedCreateWithoutOrderItemsInput
        >;
    };

    export type OrderUpsertWithoutOrderItemsInput = {
        update: XOR<
            OrderUpdateWithoutOrderItemsInput,
            OrderUncheckedUpdateWithoutOrderItemsInput
        >;
        create: XOR<
            OrderCreateWithoutOrderItemsInput,
            OrderUncheckedCreateWithoutOrderItemsInput
        >;
        where?: OrderWhereInput;
    };

    export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
        where?: OrderWhereInput;
        data: XOR<
            OrderUpdateWithoutOrderItemsInput,
            OrderUncheckedUpdateWithoutOrderItemsInput
        >;
    };

    export type OrderUpdateWithoutOrderItemsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutOrdersNestedInput;
    };

    export type OrderUncheckedUpdateWithoutOrderItemsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodItemUpsertWithoutOrderItemsInput = {
        update: XOR<
            FoodItemUpdateWithoutOrderItemsInput,
            FoodItemUncheckedUpdateWithoutOrderItemsInput
        >;
        create: XOR<
            FoodItemCreateWithoutOrderItemsInput,
            FoodItemUncheckedCreateWithoutOrderItemsInput
        >;
        where?: FoodItemWhereInput;
    };

    export type FoodItemUpdateToOneWithWhereWithoutOrderItemsInput = {
        where?: FoodItemWhereInput;
        data: XOR<
            FoodItemUpdateWithoutOrderItemsInput,
            FoodItemUncheckedUpdateWithoutOrderItemsInput
        >;
    };

    export type FoodItemUpdateWithoutOrderItemsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        price?: FloatFieldUpdateOperationsInput | number;
        imagePath?: StringFieldUpdateOperationsInput | string;
        description?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodItemUncheckedUpdateWithoutOrderItemsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        price?: FloatFieldUpdateOperationsInput | number;
        imagePath?: StringFieldUpdateOperationsInput | string;
        description?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type UserCreateWithoutCreditsInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        orders?: OrderCreateNestedManyWithoutUserInput;
        creditHistory?: FoodCreditHistoryCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutCreditsInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
        creditHistory?: FoodCreditHistoryUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutCreditsInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutCreditsInput,
            UserUncheckedCreateWithoutCreditsInput
        >;
    };

    export type UserUpsertWithoutCreditsInput = {
        update: XOR<
            UserUpdateWithoutCreditsInput,
            UserUncheckedUpdateWithoutCreditsInput
        >;
        create: XOR<
            UserCreateWithoutCreditsInput,
            UserUncheckedCreateWithoutCreditsInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutCreditsInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutCreditsInput,
            UserUncheckedUpdateWithoutCreditsInput
        >;
    };

    export type UserUpdateWithoutCreditsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        orders?: OrderUpdateManyWithoutUserNestedInput;
        creditHistory?: FoodCreditHistoryUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutCreditsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
        creditHistory?: FoodCreditHistoryUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type UserCreateWithoutCreditHistoryInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        credits?: FoodCreditCreateNestedOneWithoutUserInput;
        orders?: OrderCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutCreditHistoryInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
        credits?: FoodCreditUncheckedCreateNestedOneWithoutUserInput;
        orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutCreditHistoryInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutCreditHistoryInput,
            UserUncheckedCreateWithoutCreditHistoryInput
        >;
    };

    export type AdminCreateWithoutCreditActionsInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
    };

    export type AdminUncheckedCreateWithoutCreditActionsInput = {
        id?: string;
        name: string;
        email: string;
        password: string;
        createdAt?: Date | string;
    };

    export type AdminCreateOrConnectWithoutCreditActionsInput = {
        where: AdminWhereUniqueInput;
        create: XOR<
            AdminCreateWithoutCreditActionsInput,
            AdminUncheckedCreateWithoutCreditActionsInput
        >;
    };

    export type UserUpsertWithoutCreditHistoryInput = {
        update: XOR<
            UserUpdateWithoutCreditHistoryInput,
            UserUncheckedUpdateWithoutCreditHistoryInput
        >;
        create: XOR<
            UserCreateWithoutCreditHistoryInput,
            UserUncheckedCreateWithoutCreditHistoryInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutCreditHistoryInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutCreditHistoryInput,
            UserUncheckedUpdateWithoutCreditHistoryInput
        >;
    };

    export type UserUpdateWithoutCreditHistoryInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        credits?: FoodCreditUpdateOneWithoutUserNestedInput;
        orders?: OrderUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutCreditHistoryInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        credits?: FoodCreditUncheckedUpdateOneWithoutUserNestedInput;
        orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type AdminUpsertWithoutCreditActionsInput = {
        update: XOR<
            AdminUpdateWithoutCreditActionsInput,
            AdminUncheckedUpdateWithoutCreditActionsInput
        >;
        create: XOR<
            AdminCreateWithoutCreditActionsInput,
            AdminUncheckedCreateWithoutCreditActionsInput
        >;
        where?: AdminWhereInput;
    };

    export type AdminUpdateToOneWithWhereWithoutCreditActionsInput = {
        where?: AdminWhereInput;
        data: XOR<
            AdminUpdateWithoutCreditActionsInput,
            AdminUncheckedUpdateWithoutCreditActionsInput
        >;
    };

    export type AdminUpdateWithoutCreditActionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AdminUncheckedUpdateWithoutCreditActionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type OrderCreateManyUserInput = {
        id?: string;
        status: string;
        arrivalTime: Date | string;
        estimatedReadyTime: Date | string;
        readyNotified?: boolean;
        createdAt?: Date | string;
    };

    export type FoodCreditHistoryCreateManyUserInput = {
        id?: string;
        amount: number;
        reason?: string | null;
        adminId?: string | null;
        createdAt?: Date | string;
    };

    export type OrderUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;
    };

    export type OrderUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    };

    export type OrderUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        status?: StringFieldUpdateOperationsInput | string;
        arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        estimatedReadyTime?: DateTimeFieldUpdateOperationsInput | Date | string;
        readyNotified?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodCreditHistoryUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        admin?: AdminUpdateOneWithoutCreditActionsNestedInput;
    };

    export type FoodCreditHistoryUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        adminId?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodCreditHistoryUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        adminId?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodCreditHistoryCreateManyAdminInput = {
        id?: string;
        userId: string;
        amount: number;
        reason?: string | null;
        createdAt?: Date | string;
    };

    export type FoodCreditHistoryUpdateWithoutAdminInput = {
        id?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutCreditHistoryNestedInput;
    };

    export type FoodCreditHistoryUncheckedUpdateWithoutAdminInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FoodCreditHistoryUncheckedUpdateManyWithoutAdminInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        amount?: IntFieldUpdateOperationsInput | number;
        reason?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type OrderItemCreateManyFoodItemInput = {
        id?: string;
        orderId: string;
        quantity: number;
        customizations?: string | null;
    };

    export type OrderItemUpdateWithoutFoodItemInput = {
        id?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;
    };

    export type OrderItemUncheckedUpdateWithoutFoodItemInput = {
        id?: StringFieldUpdateOperationsInput | string;
        orderId?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type OrderItemUncheckedUpdateManyWithoutFoodItemInput = {
        id?: StringFieldUpdateOperationsInput | string;
        orderId?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type OrderItemCreateManyOrderInput = {
        id?: string;
        foodItemId: string;
        quantity: number;
        customizations?: string | null;
    };

    export type OrderItemUpdateWithoutOrderInput = {
        id?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        foodItem?: FoodItemUpdateOneRequiredWithoutOrderItemsNestedInput;
    };

    export type OrderItemUncheckedUpdateWithoutOrderInput = {
        id?: StringFieldUpdateOperationsInput | string;
        foodItemId?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
        id?: StringFieldUpdateOperationsInput | string;
        foodItemId?: StringFieldUpdateOperationsInput | string;
        quantity?: IntFieldUpdateOperationsInput | number;
        customizations?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
        count: number;
    };

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;
}
