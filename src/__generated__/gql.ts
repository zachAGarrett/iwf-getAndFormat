/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\nquery DetailedCompetitionResults($where: CompetitionWhere, $competitionsConnectionWhere2: AthleteCompetitionsConnectionWhere) {\n    competitions(where: $where) {\n      id\n      name\n      date\n      sports {\n        name\n      }\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            name\n          }\n        }\n      }\n      events {\n        id\n        genderClass\n        weightClass\n        attempts {\n          successful\n          weight\n          number\n          nation {\n            code\n          }\n          athlete {\n            birthday\n            name\n            verified\n            id\n            competitionsConnection(where: $competitionsConnectionWhere2) {\n              edges {\n                rank\n                group\n                bodyweight\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n": types.DetailedCompetitionResultsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\nquery DetailedCompetitionResults($where: CompetitionWhere, $competitionsConnectionWhere2: AthleteCompetitionsConnectionWhere) {\n    competitions(where: $where) {\n      id\n      name\n      date\n      sports {\n        name\n      }\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            name\n          }\n        }\n      }\n      events {\n        id\n        genderClass\n        weightClass\n        attempts {\n          successful\n          weight\n          number\n          nation {\n            code\n          }\n          athlete {\n            birthday\n            name\n            verified\n            id\n            competitionsConnection(where: $competitionsConnectionWhere2) {\n              edges {\n                rank\n                group\n                bodyweight\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n"): (typeof documents)["\n\nquery DetailedCompetitionResults($where: CompetitionWhere, $competitionsConnectionWhere2: AthleteCompetitionsConnectionWhere) {\n    competitions(where: $where) {\n      id\n      name\n      date\n      sports {\n        name\n      }\n      dataSourcesConnection {\n        edges {\n          entityId\n          node {\n            name\n          }\n        }\n      }\n      events {\n        id\n        genderClass\n        weightClass\n        attempts {\n          successful\n          weight\n          number\n          nation {\n            code\n          }\n          athlete {\n            birthday\n            name\n            verified\n            id\n            competitionsConnection(where: $competitionsConnectionWhere2) {\n              edges {\n                rank\n                group\n                bodyweight\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;