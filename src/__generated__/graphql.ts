/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any; }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
};

/** Represents an athlete in the sports competition. */
export type Athlete = {
  __typename?: 'Athlete';
  /** The list of attempts made by the athlete in various events. */
  attempts: Array<Attempt>;
  attemptsAggregate?: Maybe<AthleteAttemptAttemptsAggregationSelection>;
  attemptsConnection: AthleteAttemptsConnection;
  /** The birthday of the athlete. */
  birthday: Scalars['Date']['output'];
  /** The list of competitions in which the athlete participated. */
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<AthleteCompetitionCompetitionsAggregationSelection>;
  competitionsConnection: AthleteCompetitionsConnection;
  /** The timestamp when the athlete's profile was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The list of data sources associated with the athlete. */
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<AthleteDataSourceDataSourcesAggregationSelection>;
  dataSourcesConnection: AthleteDataSourcesConnection;
  /** The list of events in which the athlete participated. */
  events: Array<Event>;
  eventsAggregate?: Maybe<AthleteEventEventsAggregationSelection>;
  eventsConnection: AthleteEventsConnection;
  /** The unique identifier of the athlete. */
  id: Scalars['ID']['output'];
  /** The full name of the athlete. Recorded as parsed. */
  name: Scalars['String']['output'];
  /** The list of nations represented by the athlete. */
  nations: Array<Nation>;
  nationsAggregate?: Maybe<AthleteNationNationsAggregationSelection>;
  nationsConnection: AthleteNationsConnection;
  /** The timestamp when the athlete's profile was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates whether the athlete's profile is verified. */
  verified: Scalars['Boolean']['output'];
};


/** Represents an athlete in the sports competition. */
export type AthleteAttemptsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AttemptOptions>;
  where?: InputMaybe<AttemptWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteAttemptsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AttemptWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteAttemptsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteAttemptsConnectionSort>>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteCompetitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteCompetitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteCompetitionsConnectionSort>>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteDataSourcesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DataSourceOptions>;
  where?: InputMaybe<DataSourceWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteDataSourcesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DataSourceWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteDataSourcesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteDataSourcesConnectionSort>>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteEventsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteEventsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteEventsConnectionSort>>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteNationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteNationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NationWhere>;
};


/** Represents an athlete in the sports competition. */
export type AthleteNationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteNationsConnectionSort>>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteAggregateSelection = {
  __typename?: 'AthleteAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteAttemptAttemptsAggregationSelection = {
  __typename?: 'AthleteAttemptAttemptsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteAttemptAttemptsNodeAggregateSelection>;
};

export type AthleteAttemptAttemptsNodeAggregateSelection = {
  __typename?: 'AthleteAttemptAttemptsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dateTime: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  number: IntAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  weight: FloatAggregateSelectionNonNullable;
};

export type AthleteAttemptsAggregateInput = {
  AND?: InputMaybe<Array<AthleteAttemptsAggregateInput>>;
  NOT?: InputMaybe<AthleteAttemptsAggregateInput>;
  OR?: InputMaybe<Array<AthleteAttemptsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteAttemptsNodeAggregationWhereInput>;
};

export type AthleteAttemptsConnectFieldInput = {
  connect?: InputMaybe<Array<AttemptConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AttemptConnectWhere>;
};

export type AthleteAttemptsConnectOrCreateFieldInput = {
  onCreate: AthleteAttemptsConnectOrCreateFieldInputOnCreate;
  where: AttemptConnectOrCreateWhere;
};

export type AthleteAttemptsConnectOrCreateFieldInputOnCreate = {
  node: AttemptOnCreateInput;
};

export type AthleteAttemptsConnection = {
  __typename?: 'AthleteAttemptsConnection';
  edges: Array<AthleteAttemptsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteAttemptsConnectionSort = {
  node?: InputMaybe<AttemptSort>;
};

export type AthleteAttemptsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteAttemptsConnectionWhere>>;
  NOT?: InputMaybe<AthleteAttemptsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteAttemptsConnectionWhere>>;
  node?: InputMaybe<AttemptWhere>;
};

export type AthleteAttemptsCreateFieldInput = {
  node: AttemptCreateInput;
};

export type AthleteAttemptsDeleteFieldInput = {
  delete?: InputMaybe<AttemptDeleteInput>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};

export type AthleteAttemptsDisconnectFieldInput = {
  disconnect?: InputMaybe<AttemptDisconnectInput>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};

export type AthleteAttemptsFieldInput = {
  connect?: InputMaybe<Array<AthleteAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteAttemptsCreateFieldInput>>;
};

export type AthleteAttemptsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteAttemptsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteAttemptsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteAttemptsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  number_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  weight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type AthleteAttemptsRelationship = {
  __typename?: 'AthleteAttemptsRelationship';
  cursor: Scalars['String']['output'];
  node: Attempt;
};

export type AthleteAttemptsUpdateConnectionInput = {
  node?: InputMaybe<AttemptUpdateInput>;
};

export type AthleteAttemptsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteAttemptsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteAttemptsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteAttemptsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteAttemptsUpdateConnectionInput>;
  where?: InputMaybe<AthleteAttemptsConnectionWhere>;
};

export type AthleteCompetitionCompetitionsAggregationSelection = {
  __typename?: 'AthleteCompetitionCompetitionsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<AthleteCompetitionCompetitionsEdgeAggregateSelection>;
  node?: Maybe<AthleteCompetitionCompetitionsNodeAggregateSelection>;
};

export type AthleteCompetitionCompetitionsEdgeAggregateSelection = {
  __typename?: 'AthleteCompetitionCompetitionsEdgeAggregateSelection';
  bodyweight: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  group: StringAggregateSelectionNonNullable;
  rank: IntAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: 'AthleteCompetitionCompetitionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteCompetitionsAggregateInput = {
  AND?: InputMaybe<Array<AthleteCompetitionsAggregateInput>>;
  NOT?: InputMaybe<AthleteCompetitionsAggregateInput>;
  OR?: InputMaybe<Array<AthleteCompetitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<AthleteCompetitionsEdgeAggregationWhereInput>;
  node?: InputMaybe<AthleteCompetitionsNodeAggregationWhereInput>;
};

export type AthleteCompetitionsConnectFieldInput = {
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  edge: AthleteDidCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type AthleteCompetitionsConnectOrCreateFieldInput = {
  onCreate: AthleteCompetitionsConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type AthleteCompetitionsConnectOrCreateFieldInputOnCreate = {
  edge: AthleteDidCreateInput;
  node: CompetitionOnCreateInput;
};

export type AthleteCompetitionsConnection = {
  __typename?: 'AthleteCompetitionsConnection';
  edges: Array<AthleteCompetitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteCompetitionsConnectionSort = {
  edge?: InputMaybe<AthleteDidSort>;
  node?: InputMaybe<CompetitionSort>;
};

export type AthleteCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteCompetitionsConnectionWhere>>;
  edge?: InputMaybe<AthleteDidWhere>;
  node?: InputMaybe<CompetitionWhere>;
};

export type AthleteCompetitionsCreateFieldInput = {
  edge: AthleteDidCreateInput;
  node: CompetitionCreateInput;
};

export type AthleteCompetitionsDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};

export type AthleteCompetitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};

export type AthleteCompetitionsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteCompetitionsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteCompetitionsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteCompetitionsEdgeAggregationWhereInput>>;
  bodyweight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  group_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  group_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  rank_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteCompetitionsFieldInput = {
  connect?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
};

export type AthleteCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteCompetitionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteCompetitionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteCompetitionsRelationship = AthleteDid & {
  __typename?: 'AthleteCompetitionsRelationship';
  /** The bodyweight of the athlete when participating in the event. */
  bodyweight: Scalars['Float']['output'];
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The group the athlete was placed in for the event. */
  group: Scalars['String']['output'];
  node: Competition;
  /** The ranking of the athlete at the conclusion of the event. */
  rank?: Maybe<Scalars['Int']['output']>;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AthleteCompetitionsUpdateConnectionInput = {
  edge?: InputMaybe<AthleteDidUpdateInput>;
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type AthleteCompetitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteCompetitionsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteCompetitionsUpdateConnectionInput>;
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
};

export type AthleteConnectInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsConnectFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsConnectFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
};

export type AthleteConnectOrCreateInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsConnectOrCreateFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsConnectOrCreateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesConnectOrCreateFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsConnectOrCreateFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
};

export type AthleteConnectOrCreateWhere = {
  node: AthleteUniqueWhere;
};

export type AthleteConnectWhere = {
  node: AthleteWhere;
};

export type AthleteCreateInput = {
  attempts?: InputMaybe<AthleteAttemptsFieldInput>;
  birthday: Scalars['Date']['input'];
  competitions?: InputMaybe<AthleteCompetitionsFieldInput>;
  dataSources?: InputMaybe<AthleteDataSourcesFieldInput>;
  events?: InputMaybe<AthleteEventsFieldInput>;
  name: Scalars['String']['input'];
  nations?: InputMaybe<AthleteNationsFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type AthleteDataSourceDataSourcesAggregationSelection = {
  __typename?: 'AthleteDataSourceDataSourcesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<AthleteDataSourceDataSourcesEdgeAggregateSelection>;
  node?: Maybe<AthleteDataSourceDataSourcesNodeAggregateSelection>;
};

export type AthleteDataSourceDataSourcesEdgeAggregateSelection = {
  __typename?: 'AthleteDataSourceDataSourcesEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  entityId: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: 'AthleteDataSourceDataSourcesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteDataSourcesAggregateInput = {
  AND?: InputMaybe<Array<AthleteDataSourcesAggregateInput>>;
  NOT?: InputMaybe<AthleteDataSourcesAggregateInput>;
  OR?: InputMaybe<Array<AthleteDataSourcesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<AthleteDataSourcesEdgeAggregationWhereInput>;
  node?: InputMaybe<AthleteDataSourcesNodeAggregationWhereInput>;
};

export type AthleteDataSourcesConnectFieldInput = {
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  edge: DataSourceEdgeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DataSourceConnectWhere>;
};

export type AthleteDataSourcesConnectOrCreateFieldInput = {
  onCreate: AthleteDataSourcesConnectOrCreateFieldInputOnCreate;
  where: DataSourceConnectOrCreateWhere;
};

export type AthleteDataSourcesConnectOrCreateFieldInputOnCreate = {
  edge: DataSourceEdgeCreateInput;
  node: DataSourceOnCreateInput;
};

export type AthleteDataSourcesConnection = {
  __typename?: 'AthleteDataSourcesConnection';
  edges: Array<AthleteDataSourcesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteDataSourcesConnectionSort = {
  edge?: InputMaybe<DataSourceEdgeSort>;
  node?: InputMaybe<DataSourceSort>;
};

export type AthleteDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<AthleteDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  OR?: InputMaybe<Array<AthleteDataSourcesConnectionWhere>>;
  edge?: InputMaybe<DataSourceEdgeWhere>;
  node?: InputMaybe<DataSourceWhere>;
};

export type AthleteDataSourcesCreateFieldInput = {
  edge: DataSourceEdgeCreateInput;
  node: DataSourceCreateInput;
};

export type AthleteDataSourcesDeleteFieldInput = {
  delete?: InputMaybe<DataSourceDeleteInput>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};

export type AthleteDataSourcesDisconnectFieldInput = {
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};

export type AthleteDataSourcesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteDataSourcesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteDataSourcesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteDataSourcesEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  entityId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteDataSourcesFieldInput = {
  connect?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
};

export type AthleteDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteDataSourcesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteDataSourcesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteDataSourcesRelationship = DataSourceEdge & {
  __typename?: 'AthleteDataSourcesRelationship';
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The unique identifier of the entity associated with the data source. */
  entityId: Scalars['String']['output'];
  node: DataSource;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AthleteDataSourcesUpdateConnectionInput = {
  edge?: InputMaybe<DataSourceEdgeUpdateInput>;
  node?: InputMaybe<DataSourceUpdateInput>;
};

export type AthleteDataSourcesUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteDataSourcesDisconnectFieldInput>>;
  update?: InputMaybe<AthleteDataSourcesUpdateConnectionInput>;
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
};

export type AthleteDeleteInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsDeleteFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsDeleteFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesDeleteFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsDeleteFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsDeleteFieldInput>>;
};

export type AthleteDid = {
  /** The bodyweight of the athlete when participating in the event. */
  bodyweight: Scalars['Float']['output'];
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The group the athlete was placed in for the event. */
  group: Scalars['String']['output'];
  /** The ranking of the athlete at the conclusion of the event. */
  rank?: Maybe<Scalars['Int']['output']>;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AthleteDidCreateInput = {
  bodyweight: Scalars['Float']['input'];
  group: Scalars['String']['input'];
  rank?: InputMaybe<Scalars['Int']['input']>;
};

export type AthleteDidSort = {
  bodyweight?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  group?: InputMaybe<SortDirection>;
  rank?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type AthleteDidUpdateInput = {
  bodyweight?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_ADD?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  rank_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  rank_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
};

export type AthleteDidWhere = {
  AND?: InputMaybe<Array<AthleteDidWhere>>;
  NOT?: InputMaybe<AthleteDidWhere>;
  OR?: InputMaybe<Array<AthleteDidWhere>>;
  bodyweight?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  bodyweight_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  group_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  group_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  group_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  group_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  rank_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rank_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteDisconnectInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsDisconnectFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesDisconnectFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsDisconnectFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsDisconnectFieldInput>>;
};

export type AthleteEdge = {
  __typename?: 'AthleteEdge';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type AthleteEventEventsAggregationSelection = {
  __typename?: 'AthleteEventEventsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<AthleteEventEventsEdgeAggregateSelection>;
  node?: Maybe<AthleteEventEventsNodeAggregateSelection>;
};

export type AthleteEventEventsEdgeAggregateSelection = {
  __typename?: 'AthleteEventEventsEdgeAggregateSelection';
  bodyweight: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  group: StringAggregateSelectionNonNullable;
  rank: IntAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteEventEventsNodeAggregateSelection = {
  __typename?: 'AthleteEventEventsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  genderClass: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  weightClass: StringAggregateSelectionNonNullable;
};

export type AthleteEventsAggregateInput = {
  AND?: InputMaybe<Array<AthleteEventsAggregateInput>>;
  NOT?: InputMaybe<AthleteEventsAggregateInput>;
  OR?: InputMaybe<Array<AthleteEventsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<AthleteEventsEdgeAggregationWhereInput>;
  node?: InputMaybe<AthleteEventsNodeAggregationWhereInput>;
};

export type AthleteEventsConnectFieldInput = {
  connect?: InputMaybe<Array<EventConnectInput>>;
  edge: AthleteDidCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type AthleteEventsConnectOrCreateFieldInput = {
  onCreate: AthleteEventsConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type AthleteEventsConnectOrCreateFieldInputOnCreate = {
  edge: AthleteDidCreateInput;
  node: EventOnCreateInput;
};

export type AthleteEventsConnection = {
  __typename?: 'AthleteEventsConnection';
  edges: Array<AthleteEventsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteEventsConnectionSort = {
  edge?: InputMaybe<AthleteDidSort>;
  node?: InputMaybe<EventSort>;
};

export type AthleteEventsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteEventsConnectionWhere>>;
  NOT?: InputMaybe<AthleteEventsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteEventsConnectionWhere>>;
  edge?: InputMaybe<AthleteDidWhere>;
  node?: InputMaybe<EventWhere>;
};

export type AthleteEventsCreateFieldInput = {
  edge: AthleteDidCreateInput;
  node: EventCreateInput;
};

export type AthleteEventsDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};

export type AthleteEventsDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};

export type AthleteEventsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteEventsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteEventsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteEventsEdgeAggregationWhereInput>>;
  bodyweight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  group_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  group_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  rank_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteEventsFieldInput = {
  connect?: InputMaybe<Array<AthleteEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteEventsCreateFieldInput>>;
};

export type AthleteEventsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteEventsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteEventsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteEventsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  genderClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  genderClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  weightClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  weightClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AthleteEventsRelationship = AthleteDid & {
  __typename?: 'AthleteEventsRelationship';
  /** The bodyweight of the athlete when participating in the event. */
  bodyweight: Scalars['Float']['output'];
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The group the athlete was placed in for the event. */
  group: Scalars['String']['output'];
  node: Event;
  /** The ranking of the athlete at the conclusion of the event. */
  rank?: Maybe<Scalars['Int']['output']>;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AthleteEventsUpdateConnectionInput = {
  edge?: InputMaybe<AthleteDidUpdateInput>;
  node?: InputMaybe<EventUpdateInput>;
};

export type AthleteEventsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteEventsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteEventsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteEventsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteEventsUpdateConnectionInput>;
  where?: InputMaybe<AthleteEventsConnectionWhere>;
};

export type AthleteNationNationsAggregationSelection = {
  __typename?: 'AthleteNationNationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteNationNationsNodeAggregateSelection>;
};

export type AthleteNationNationsNodeAggregateSelection = {
  __typename?: 'AthleteNationNationsNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteNationsAggregateInput = {
  AND?: InputMaybe<Array<AthleteNationsAggregateInput>>;
  NOT?: InputMaybe<AthleteNationsAggregateInput>;
  OR?: InputMaybe<Array<AthleteNationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteNationsNodeAggregationWhereInput>;
};

export type AthleteNationsConnectFieldInput = {
  connect?: InputMaybe<Array<NationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NationConnectWhere>;
};

export type AthleteNationsConnectOrCreateFieldInput = {
  onCreate: AthleteNationsConnectOrCreateFieldInputOnCreate;
  where: NationConnectOrCreateWhere;
};

export type AthleteNationsConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type AthleteNationsConnection = {
  __typename?: 'AthleteNationsConnection';
  edges: Array<AthleteNationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteNationsConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type AthleteNationsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteNationsConnectionWhere>>;
  NOT?: InputMaybe<AthleteNationsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteNationsConnectionWhere>>;
  node?: InputMaybe<NationWhere>;
};

export type AthleteNationsCreateFieldInput = {
  node: NationCreateInput;
};

export type AthleteNationsDeleteFieldInput = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteNationsDisconnectFieldInput = {
  disconnect?: InputMaybe<NationDisconnectInput>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteNationsFieldInput = {
  connect?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
};

export type AthleteNationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteNationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteNationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteNationsNodeAggregationWhereInput>>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AthleteNationsRelationship = {
  __typename?: 'AthleteNationsRelationship';
  cursor: Scalars['String']['output'];
  node: Nation;
};

export type AthleteNationsUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type AthleteNationsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteNationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteNationsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteNationsUpdateConnectionInput>;
  where?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type AthleteOnCreateInput = {
  birthday: Scalars['Date']['input'];
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type AthleteOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more AthleteSort objects to sort Athletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AthleteSort>>;
};

export type AthleteRelationInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsCreateFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsCreateFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
};

/** Fields to sort Athletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one AthleteSort object. */
export type AthleteSort = {
  birthday?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type AthleteUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AthleteUpdateInput = {
  attempts?: InputMaybe<Array<AthleteAttemptsUpdateFieldInput>>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  competitions?: InputMaybe<Array<AthleteCompetitionsUpdateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesUpdateFieldInput>>;
  events?: InputMaybe<Array<AthleteEventsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nations?: InputMaybe<Array<AthleteNationsUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AthleteWhere = {
  AND?: InputMaybe<Array<AthleteWhere>>;
  NOT?: InputMaybe<AthleteWhere>;
  OR?: InputMaybe<Array<AthleteWhere>>;
  attemptsAggregate?: InputMaybe<AthleteAttemptsAggregateInput>;
  /** Return Athletes where all of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_ALL?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where none of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_NONE?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where one of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_SINGLE?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where some of the related AthleteAttemptsConnections match this filter */
  attemptsConnection_SOME?: InputMaybe<AthleteAttemptsConnectionWhere>;
  /** Return Athletes where all of the related Attempts match this filter */
  attempts_ALL?: InputMaybe<AttemptWhere>;
  /** Return Athletes where none of the related Attempts match this filter */
  attempts_NONE?: InputMaybe<AttemptWhere>;
  /** Return Athletes where one of the related Attempts match this filter */
  attempts_SINGLE?: InputMaybe<AttemptWhere>;
  /** Return Athletes where some of the related Attempts match this filter */
  attempts_SOME?: InputMaybe<AttemptWhere>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  birthday_GT?: InputMaybe<Scalars['Date']['input']>;
  birthday_GTE?: InputMaybe<Scalars['Date']['input']>;
  birthday_IN?: InputMaybe<Array<Scalars['Date']['input']>>;
  birthday_LT?: InputMaybe<Scalars['Date']['input']>;
  birthday_LTE?: InputMaybe<Scalars['Date']['input']>;
  competitionsAggregate?: InputMaybe<AthleteCompetitionsAggregateInput>;
  /** Return Athletes where all of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where none of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where one of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where some of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dataSourcesAggregate?: InputMaybe<AthleteDataSourcesAggregateInput>;
  /** Return Athletes where all of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where none of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where one of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where some of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  eventsAggregate?: InputMaybe<AthleteEventsAggregateInput>;
  /** Return Athletes where all of the related AthleteEventsConnections match this filter */
  eventsConnection_ALL?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where none of the related AthleteEventsConnections match this filter */
  eventsConnection_NONE?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where one of the related AthleteEventsConnections match this filter */
  eventsConnection_SINGLE?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where some of the related AthleteEventsConnections match this filter */
  eventsConnection_SOME?: InputMaybe<AthleteEventsConnectionWhere>;
  /** Return Athletes where all of the related Events match this filter */
  events_ALL?: InputMaybe<EventWhere>;
  /** Return Athletes where none of the related Events match this filter */
  events_NONE?: InputMaybe<EventWhere>;
  /** Return Athletes where one of the related Events match this filter */
  events_SINGLE?: InputMaybe<EventWhere>;
  /** Return Athletes where some of the related Events match this filter */
  events_SOME?: InputMaybe<EventWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nationsAggregate?: InputMaybe<AthleteNationsAggregateInput>;
  /** Return Athletes where all of the related AthleteNationsConnections match this filter */
  nationsConnection_ALL?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where none of the related AthleteNationsConnections match this filter */
  nationsConnection_NONE?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where one of the related AthleteNationsConnections match this filter */
  nationsConnection_SINGLE?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where some of the related AthleteNationsConnections match this filter */
  nationsConnection_SOME?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where all of the related Nations match this filter */
  nations_ALL?: InputMaybe<NationWhere>;
  /** Return Athletes where none of the related Nations match this filter */
  nations_NONE?: InputMaybe<NationWhere>;
  /** Return Athletes where one of the related Nations match this filter */
  nations_SINGLE?: InputMaybe<NationWhere>;
  /** Return Athletes where some of the related Nations match this filter */
  nations_SOME?: InputMaybe<NationWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AthletesConnection = {
  __typename?: 'AthletesConnection';
  edges: Array<AthleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Represents an attempt made by an athlete in an event. */
export type Attempt = {
  __typename?: 'Attempt';
  /** The athlete who made the attempt. */
  athlete: Athlete;
  athleteAggregate?: Maybe<AttemptAthleteAthleteAggregationSelection>;
  athleteConnection: AttemptAthleteConnection;
  /** The timestamp when the attempt was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The date and time of the attempt. */
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  /** The event in which the attempt was made. */
  event: Event;
  eventAggregate?: Maybe<AttemptEventEventAggregationSelection>;
  eventConnection: AttemptEventConnection;
  /** The unique identifier of the attempt. */
  id: Scalars['ID']['output'];
  /** The nation associated with the attempt. */
  nation: Nation;
  nationAggregate?: Maybe<AttemptNationNationAggregationSelection>;
  nationConnection: AttemptNationConnection;
  /** The number of the attempt by the athlete in the event. */
  number: Scalars['Int']['output'];
  /** Indicates whether the attempt was successful. */
  successful: Scalars['Boolean']['output'];
  /** The timestamp when the attempt was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates whether the attempt is verified. */
  verified: Scalars['Boolean']['output'];
  /** The weight lifted or achieved in the attempt. */
  weight: Scalars['Float']['output'];
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptAthleteArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptAthleteAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptAthleteConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AttemptAthleteConnectionSort>>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptEventArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptEventAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AttemptEventConnectionSort>>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptNationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptNationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NationWhere>;
};


/** Represents an attempt made by an athlete in an event. */
export type AttemptNationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AttemptNationConnectionSort>>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptAggregateSelection = {
  __typename?: 'AttemptAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  dateTime: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  number: IntAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  weight: FloatAggregateSelectionNonNullable;
};

export type AttemptAthleteAggregateInput = {
  AND?: InputMaybe<Array<AttemptAthleteAggregateInput>>;
  NOT?: InputMaybe<AttemptAthleteAggregateInput>;
  OR?: InputMaybe<Array<AttemptAthleteAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AttemptAthleteNodeAggregationWhereInput>;
};

export type AttemptAthleteAthleteAggregationSelection = {
  __typename?: 'AttemptAthleteAthleteAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AttemptAthleteAthleteNodeAggregateSelection>;
};

export type AttemptAthleteAthleteNodeAggregateSelection = {
  __typename?: 'AttemptAthleteAthleteNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AttemptAthleteConnectFieldInput = {
  connect?: InputMaybe<AthleteConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type AttemptAthleteConnectOrCreateFieldInput = {
  onCreate: AttemptAthleteConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type AttemptAthleteConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type AttemptAthleteConnection = {
  __typename?: 'AttemptAthleteConnection';
  edges: Array<AttemptAthleteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AttemptAthleteConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type AttemptAthleteConnectionWhere = {
  AND?: InputMaybe<Array<AttemptAthleteConnectionWhere>>;
  NOT?: InputMaybe<AttemptAthleteConnectionWhere>;
  OR?: InputMaybe<Array<AttemptAthleteConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type AttemptAthleteCreateFieldInput = {
  node: AthleteCreateInput;
};

export type AttemptAthleteDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};

export type AttemptAthleteDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};

export type AttemptAthleteFieldInput = {
  connect?: InputMaybe<AttemptAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptAthleteCreateFieldInput>;
};

export type AttemptAthleteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AttemptAthleteNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AttemptAthleteNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AttemptAthleteNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AttemptAthleteRelationship = {
  __typename?: 'AttemptAthleteRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type AttemptAthleteUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type AttemptAthleteUpdateFieldInput = {
  connect?: InputMaybe<AttemptAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptAthleteCreateFieldInput>;
  delete?: InputMaybe<AttemptAthleteDeleteFieldInput>;
  disconnect?: InputMaybe<AttemptAthleteDisconnectFieldInput>;
  update?: InputMaybe<AttemptAthleteUpdateConnectionInput>;
  where?: InputMaybe<AttemptAthleteConnectionWhere>;
};

export type AttemptConnectInput = {
  athlete?: InputMaybe<AttemptAthleteConnectFieldInput>;
  event?: InputMaybe<AttemptEventConnectFieldInput>;
  nation?: InputMaybe<AttemptNationConnectFieldInput>;
};

export type AttemptConnectOrCreateInput = {
  athlete?: InputMaybe<AttemptAthleteConnectOrCreateFieldInput>;
  event?: InputMaybe<AttemptEventConnectOrCreateFieldInput>;
  nation?: InputMaybe<AttemptNationConnectOrCreateFieldInput>;
};

export type AttemptConnectOrCreateWhere = {
  node: AttemptUniqueWhere;
};

export type AttemptConnectWhere = {
  node: AttemptWhere;
};

export type AttemptCreateInput = {
  athlete?: InputMaybe<AttemptAthleteFieldInput>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<AttemptEventFieldInput>;
  nation?: InputMaybe<AttemptNationFieldInput>;
  number: Scalars['Int']['input'];
  successful: Scalars['Boolean']['input'];
  verified?: Scalars['Boolean']['input'];
  weight: Scalars['Float']['input'];
};

export type AttemptDeleteInput = {
  athlete?: InputMaybe<AttemptAthleteDeleteFieldInput>;
  event?: InputMaybe<AttemptEventDeleteFieldInput>;
  nation?: InputMaybe<AttemptNationDeleteFieldInput>;
};

export type AttemptDisconnectInput = {
  athlete?: InputMaybe<AttemptAthleteDisconnectFieldInput>;
  event?: InputMaybe<AttemptEventDisconnectFieldInput>;
  nation?: InputMaybe<AttemptNationDisconnectFieldInput>;
};

export type AttemptEdge = {
  __typename?: 'AttemptEdge';
  cursor: Scalars['String']['output'];
  node: Attempt;
};

export type AttemptEventAggregateInput = {
  AND?: InputMaybe<Array<AttemptEventAggregateInput>>;
  NOT?: InputMaybe<AttemptEventAggregateInput>;
  OR?: InputMaybe<Array<AttemptEventAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AttemptEventNodeAggregationWhereInput>;
};

export type AttemptEventConnectFieldInput = {
  connect?: InputMaybe<EventConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type AttemptEventConnectOrCreateFieldInput = {
  onCreate: AttemptEventConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type AttemptEventConnectOrCreateFieldInputOnCreate = {
  node: EventOnCreateInput;
};

export type AttemptEventConnection = {
  __typename?: 'AttemptEventConnection';
  edges: Array<AttemptEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AttemptEventConnectionSort = {
  node?: InputMaybe<EventSort>;
};

export type AttemptEventConnectionWhere = {
  AND?: InputMaybe<Array<AttemptEventConnectionWhere>>;
  NOT?: InputMaybe<AttemptEventConnectionWhere>;
  OR?: InputMaybe<Array<AttemptEventConnectionWhere>>;
  node?: InputMaybe<EventWhere>;
};

export type AttemptEventCreateFieldInput = {
  node: EventCreateInput;
};

export type AttemptEventDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};

export type AttemptEventDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};

export type AttemptEventEventAggregationSelection = {
  __typename?: 'AttemptEventEventAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AttemptEventEventNodeAggregateSelection>;
};

export type AttemptEventEventNodeAggregateSelection = {
  __typename?: 'AttemptEventEventNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  genderClass: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  weightClass: StringAggregateSelectionNonNullable;
};

export type AttemptEventFieldInput = {
  connect?: InputMaybe<AttemptEventConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptEventConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptEventCreateFieldInput>;
};

export type AttemptEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AttemptEventNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AttemptEventNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AttemptEventNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  genderClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  genderClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  weightClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  weightClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AttemptEventRelationship = {
  __typename?: 'AttemptEventRelationship';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type AttemptEventUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
};

export type AttemptEventUpdateFieldInput = {
  connect?: InputMaybe<AttemptEventConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptEventConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptEventCreateFieldInput>;
  delete?: InputMaybe<AttemptEventDeleteFieldInput>;
  disconnect?: InputMaybe<AttemptEventDisconnectFieldInput>;
  update?: InputMaybe<AttemptEventUpdateConnectionInput>;
  where?: InputMaybe<AttemptEventConnectionWhere>;
};

export type AttemptNationAggregateInput = {
  AND?: InputMaybe<Array<AttemptNationAggregateInput>>;
  NOT?: InputMaybe<AttemptNationAggregateInput>;
  OR?: InputMaybe<Array<AttemptNationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AttemptNationNodeAggregationWhereInput>;
};

export type AttemptNationConnectFieldInput = {
  connect?: InputMaybe<NationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NationConnectWhere>;
};

export type AttemptNationConnectOrCreateFieldInput = {
  onCreate: AttemptNationConnectOrCreateFieldInputOnCreate;
  where: NationConnectOrCreateWhere;
};

export type AttemptNationConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type AttemptNationConnection = {
  __typename?: 'AttemptNationConnection';
  edges: Array<AttemptNationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AttemptNationConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type AttemptNationConnectionWhere = {
  AND?: InputMaybe<Array<AttemptNationConnectionWhere>>;
  NOT?: InputMaybe<AttemptNationConnectionWhere>;
  OR?: InputMaybe<Array<AttemptNationConnectionWhere>>;
  node?: InputMaybe<NationWhere>;
};

export type AttemptNationCreateFieldInput = {
  node: NationCreateInput;
};

export type AttemptNationDeleteFieldInput = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptNationDisconnectFieldInput = {
  disconnect?: InputMaybe<NationDisconnectInput>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptNationFieldInput = {
  connect?: InputMaybe<AttemptNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptNationConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptNationCreateFieldInput>;
};

export type AttemptNationNationAggregationSelection = {
  __typename?: 'AttemptNationNationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AttemptNationNationNodeAggregateSelection>;
};

export type AttemptNationNationNodeAggregateSelection = {
  __typename?: 'AttemptNationNationNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AttemptNationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AttemptNationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AttemptNationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AttemptNationNodeAggregationWhereInput>>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AttemptNationRelationship = {
  __typename?: 'AttemptNationRelationship';
  cursor: Scalars['String']['output'];
  node: Nation;
};

export type AttemptNationUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type AttemptNationUpdateFieldInput = {
  connect?: InputMaybe<AttemptNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<AttemptNationConnectOrCreateFieldInput>;
  create?: InputMaybe<AttemptNationCreateFieldInput>;
  delete?: InputMaybe<AttemptNationDeleteFieldInput>;
  disconnect?: InputMaybe<AttemptNationDisconnectFieldInput>;
  update?: InputMaybe<AttemptNationUpdateConnectionInput>;
  where?: InputMaybe<AttemptNationConnectionWhere>;
};

export type AttemptOnCreateInput = {
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  number: Scalars['Int']['input'];
  successful: Scalars['Boolean']['input'];
  verified?: Scalars['Boolean']['input'];
  weight: Scalars['Float']['input'];
};

export type AttemptOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more AttemptSort objects to sort Attempts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AttemptSort>>;
};

export type AttemptRelationInput = {
  athlete?: InputMaybe<AttemptAthleteCreateFieldInput>;
  event?: InputMaybe<AttemptEventCreateFieldInput>;
  nation?: InputMaybe<AttemptNationCreateFieldInput>;
};

/** Fields to sort Attempts by. The order in which sorts are applied is not guaranteed when specifying many fields in one AttemptSort object. */
export type AttemptSort = {
  createdAt?: InputMaybe<SortDirection>;
  dateTime?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  number?: InputMaybe<SortDirection>;
  successful?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  weight?: InputMaybe<SortDirection>;
};

export type AttemptUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AttemptUpdateInput = {
  athlete?: InputMaybe<AttemptAthleteUpdateFieldInput>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<AttemptEventUpdateFieldInput>;
  nation?: InputMaybe<AttemptNationUpdateFieldInput>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  number_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  successful?: InputMaybe<Scalars['Boolean']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weight_ADD?: InputMaybe<Scalars['Float']['input']>;
  weight_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  weight_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  weight_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
};

export type AttemptWhere = {
  AND?: InputMaybe<Array<AttemptWhere>>;
  NOT?: InputMaybe<AttemptWhere>;
  OR?: InputMaybe<Array<AttemptWhere>>;
  athlete?: InputMaybe<AthleteWhere>;
  athleteAggregate?: InputMaybe<AttemptAthleteAggregateInput>;
  athleteConnection?: InputMaybe<AttemptAthleteConnectionWhere>;
  athleteConnection_NOT?: InputMaybe<AttemptAthleteConnectionWhere>;
  athlete_NOT?: InputMaybe<AthleteWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  dateTime_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<EventWhere>;
  eventAggregate?: InputMaybe<AttemptEventAggregateInput>;
  eventConnection?: InputMaybe<AttemptEventConnectionWhere>;
  eventConnection_NOT?: InputMaybe<AttemptEventConnectionWhere>;
  event_NOT?: InputMaybe<EventWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  nation?: InputMaybe<NationWhere>;
  nationAggregate?: InputMaybe<AttemptNationAggregateInput>;
  nationConnection?: InputMaybe<AttemptNationConnectionWhere>;
  nationConnection_NOT?: InputMaybe<AttemptNationConnectionWhere>;
  nation_NOT?: InputMaybe<NationWhere>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_GT?: InputMaybe<Scalars['Int']['input']>;
  number_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  number_LT?: InputMaybe<Scalars['Int']['input']>;
  number_LTE?: InputMaybe<Scalars['Int']['input']>;
  successful?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weight_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  weight_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type AttemptsConnection = {
  __typename?: 'AttemptsConnection';
  edges: Array<AttemptEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Represents a sports competition. */
export type Competition = {
  __typename?: 'Competition';
  /** The list of athletes who participated in this competition. */
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<CompetitionAthleteAthletesAggregationSelection>;
  athletesConnection: CompetitionAthletesConnection;
  /** The timestamp when the competition was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The list of data sources associated with this competition. */
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<CompetitionDataSourceDataSourcesAggregationSelection>;
  dataSourcesConnection: CompetitionDataSourcesConnection;
  /** The date of the competition. */
  date: Scalars['Date']['output'];
  /** The list of events in this competition. */
  events: Array<Event>;
  eventsAggregate?: Maybe<CompetitionEventEventsAggregationSelection>;
  eventsConnection: CompetitionEventsConnection;
  /** The unique identifier of the competition. */
  id: Scalars['ID']['output'];
  /** The name of the competition. */
  name: Scalars['String']['output'];
  /** The nation hosting the competition. */
  nation: Nation;
  nationAggregate?: Maybe<CompetitionNationNationAggregationSelection>;
  nationConnection: CompetitionNationConnection;
  /** Indicates whether data for this competition has been scraped. */
  scraped: Scalars['Boolean']['output'];
  /** The list of sports associated with this competition. */
  sports: Array<Sport>;
  sportsAggregate?: Maybe<CompetitionSportSportsAggregationSelection>;
  sportsConnection: CompetitionSportsConnection;
  /** The timestamp when the competition was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates whether the competition is verified. */
  verified: Scalars['Boolean']['output'];
};


/** Represents a sports competition. */
export type CompetitionAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a sports competition. */
export type CompetitionAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a sports competition. */
export type CompetitionAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionAthletesConnectionSort>>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};


/** Represents a sports competition. */
export type CompetitionDataSourcesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DataSourceOptions>;
  where?: InputMaybe<DataSourceWhere>;
};


/** Represents a sports competition. */
export type CompetitionDataSourcesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DataSourceWhere>;
};


/** Represents a sports competition. */
export type CompetitionDataSourcesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionDataSourcesConnectionSort>>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};


/** Represents a sports competition. */
export type CompetitionEventsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


/** Represents a sports competition. */
export type CompetitionEventsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


/** Represents a sports competition. */
export type CompetitionEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionEventsConnectionSort>>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};


/** Represents a sports competition. */
export type CompetitionNationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


/** Represents a sports competition. */
export type CompetitionNationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NationWhere>;
};


/** Represents a sports competition. */
export type CompetitionNationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionNationConnectionSort>>;
  where?: InputMaybe<CompetitionNationConnectionWhere>;
};


/** Represents a sports competition. */
export type CompetitionSportsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SportOptions>;
  where?: InputMaybe<SportWhere>;
};


/** Represents a sports competition. */
export type CompetitionSportsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SportWhere>;
};


/** Represents a sports competition. */
export type CompetitionSportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompetitionSportsConnectionSort>>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionAggregateSelection = {
  __typename?: 'CompetitionAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionAthleteAthletesAggregationSelection = {
  __typename?: 'CompetitionAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<CompetitionAthleteAthletesEdgeAggregateSelection>;
  node?: Maybe<CompetitionAthleteAthletesNodeAggregateSelection>;
};

export type CompetitionAthleteAthletesEdgeAggregateSelection = {
  __typename?: 'CompetitionAthleteAthletesEdgeAggregateSelection';
  bodyweight: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  group: StringAggregateSelectionNonNullable;
  rank: IntAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionAthleteAthletesNodeAggregateSelection = {
  __typename?: 'CompetitionAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionAthletesAggregateInput = {
  AND?: InputMaybe<Array<CompetitionAthletesAggregateInput>>;
  NOT?: InputMaybe<CompetitionAthletesAggregateInput>;
  OR?: InputMaybe<Array<CompetitionAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<CompetitionAthletesEdgeAggregationWhereInput>;
  node?: InputMaybe<CompetitionAthletesNodeAggregationWhereInput>;
};

export type CompetitionAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  edge: AthleteDidCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type CompetitionAthletesConnectOrCreateFieldInput = {
  onCreate: CompetitionAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type CompetitionAthletesConnectOrCreateFieldInputOnCreate = {
  edge: AthleteDidCreateInput;
  node: AthleteOnCreateInput;
};

export type CompetitionAthletesConnection = {
  __typename?: 'CompetitionAthletesConnection';
  edges: Array<CompetitionAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionAthletesConnectionSort = {
  edge?: InputMaybe<AthleteDidSort>;
  node?: InputMaybe<AthleteSort>;
};

export type CompetitionAthletesConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionAthletesConnectionWhere>>;
  NOT?: InputMaybe<CompetitionAthletesConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionAthletesConnectionWhere>>;
  edge?: InputMaybe<AthleteDidWhere>;
  node?: InputMaybe<AthleteWhere>;
};

export type CompetitionAthletesCreateFieldInput = {
  edge: AthleteDidCreateInput;
  node: AthleteCreateInput;
};

export type CompetitionAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};

export type CompetitionAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};

export type CompetitionAthletesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionAthletesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionAthletesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionAthletesEdgeAggregationWhereInput>>;
  bodyweight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  group_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  group_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  rank_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionAthletesFieldInput = {
  connect?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
};

export type CompetitionAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionAthletesRelationship = AthleteDid & {
  __typename?: 'CompetitionAthletesRelationship';
  /** The bodyweight of the athlete when participating in the event. */
  bodyweight: Scalars['Float']['output'];
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The group the athlete was placed in for the event. */
  group: Scalars['String']['output'];
  node: Athlete;
  /** The ranking of the athlete at the conclusion of the event. */
  rank?: Maybe<Scalars['Int']['output']>;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompetitionAthletesUpdateConnectionInput = {
  edge?: InputMaybe<AthleteDidUpdateInput>;
  node?: InputMaybe<AthleteUpdateInput>;
};

export type CompetitionAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionAthletesDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionAthletesUpdateConnectionInput>;
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
};

export type CompetitionConnectInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  nation?: InputMaybe<CompetitionNationConnectFieldInput>;
  sports?: InputMaybe<Array<CompetitionSportsConnectFieldInput>>;
};

export type CompetitionConnectOrCreateInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesConnectOrCreateFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesConnectOrCreateFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsConnectOrCreateFieldInput>>;
  nation?: InputMaybe<CompetitionNationConnectOrCreateFieldInput>;
  sports?: InputMaybe<Array<CompetitionSportsConnectOrCreateFieldInput>>;
};

export type CompetitionConnectOrCreateWhere = {
  node: CompetitionUniqueWhere;
};

export type CompetitionConnectWhere = {
  node: CompetitionWhere;
};

export type CompetitionCreateInput = {
  athletes?: InputMaybe<CompetitionAthletesFieldInput>;
  dataSources?: InputMaybe<CompetitionDataSourcesFieldInput>;
  date: Scalars['Date']['input'];
  events?: InputMaybe<CompetitionEventsFieldInput>;
  name: Scalars['String']['input'];
  nation?: InputMaybe<CompetitionNationFieldInput>;
  scraped?: Scalars['Boolean']['input'];
  sports?: InputMaybe<CompetitionSportsFieldInput>;
  verified?: Scalars['Boolean']['input'];
};

export type CompetitionDataSourceDataSourcesAggregationSelection = {
  __typename?: 'CompetitionDataSourceDataSourcesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<CompetitionDataSourceDataSourcesEdgeAggregateSelection>;
  node?: Maybe<CompetitionDataSourceDataSourcesNodeAggregateSelection>;
};

export type CompetitionDataSourceDataSourcesEdgeAggregateSelection = {
  __typename?: 'CompetitionDataSourceDataSourcesEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  entityId: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: 'CompetitionDataSourceDataSourcesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionDataSourcesAggregateInput = {
  AND?: InputMaybe<Array<CompetitionDataSourcesAggregateInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesAggregateInput>;
  OR?: InputMaybe<Array<CompetitionDataSourcesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<CompetitionDataSourcesEdgeAggregationWhereInput>;
  node?: InputMaybe<CompetitionDataSourcesNodeAggregationWhereInput>;
};

export type CompetitionDataSourcesConnectFieldInput = {
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  edge: DataSourceEdgeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DataSourceConnectWhere>;
};

export type CompetitionDataSourcesConnectOrCreateFieldInput = {
  onCreate: CompetitionDataSourcesConnectOrCreateFieldInputOnCreate;
  where: DataSourceConnectOrCreateWhere;
};

export type CompetitionDataSourcesConnectOrCreateFieldInputOnCreate = {
  edge: DataSourceEdgeCreateInput;
  node: DataSourceOnCreateInput;
};

export type CompetitionDataSourcesConnection = {
  __typename?: 'CompetitionDataSourcesConnection';
  edges: Array<CompetitionDataSourcesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionDataSourcesConnectionSort = {
  edge?: InputMaybe<DataSourceEdgeSort>;
  node?: InputMaybe<DataSourceSort>;
};

export type CompetitionDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionDataSourcesConnectionWhere>>;
  edge?: InputMaybe<DataSourceEdgeWhere>;
  node?: InputMaybe<DataSourceWhere>;
};

export type CompetitionDataSourcesCreateFieldInput = {
  edge: DataSourceEdgeCreateInput;
  node: DataSourceCreateInput;
};

export type CompetitionDataSourcesDeleteFieldInput = {
  delete?: InputMaybe<DataSourceDeleteInput>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};

export type CompetitionDataSourcesDisconnectFieldInput = {
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};

export type CompetitionDataSourcesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionDataSourcesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionDataSourcesEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  entityId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionDataSourcesFieldInput = {
  connect?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
};

export type CompetitionDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionDataSourcesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionDataSourcesRelationship = DataSourceEdge & {
  __typename?: 'CompetitionDataSourcesRelationship';
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The unique identifier of the entity associated with the data source. */
  entityId: Scalars['String']['output'];
  node: DataSource;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompetitionDataSourcesUpdateConnectionInput = {
  edge?: InputMaybe<DataSourceEdgeUpdateInput>;
  node?: InputMaybe<DataSourceUpdateInput>;
};

export type CompetitionDataSourcesUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionDataSourcesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionDataSourcesDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionDataSourcesUpdateConnectionInput>;
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
};

export type CompetitionDeleteInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesDeleteFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesDeleteFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsDeleteFieldInput>>;
  nation?: InputMaybe<CompetitionNationDeleteFieldInput>;
  sports?: InputMaybe<Array<CompetitionSportsDeleteFieldInput>>;
};

export type CompetitionDisconnectInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesDisconnectFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesDisconnectFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsDisconnectFieldInput>>;
  nation?: InputMaybe<CompetitionNationDisconnectFieldInput>;
  sports?: InputMaybe<Array<CompetitionSportsDisconnectFieldInput>>;
};

export type CompetitionEdge = {
  __typename?: 'CompetitionEdge';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type CompetitionEventEventsAggregationSelection = {
  __typename?: 'CompetitionEventEventsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompetitionEventEventsNodeAggregateSelection>;
};

export type CompetitionEventEventsNodeAggregateSelection = {
  __typename?: 'CompetitionEventEventsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  genderClass: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  weightClass: StringAggregateSelectionNonNullable;
};

export type CompetitionEventsAggregateInput = {
  AND?: InputMaybe<Array<CompetitionEventsAggregateInput>>;
  NOT?: InputMaybe<CompetitionEventsAggregateInput>;
  OR?: InputMaybe<Array<CompetitionEventsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompetitionEventsNodeAggregationWhereInput>;
};

export type CompetitionEventsConnectFieldInput = {
  connect?: InputMaybe<Array<EventConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type CompetitionEventsConnectOrCreateFieldInput = {
  onCreate: CompetitionEventsConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type CompetitionEventsConnectOrCreateFieldInputOnCreate = {
  node: EventOnCreateInput;
};

export type CompetitionEventsConnection = {
  __typename?: 'CompetitionEventsConnection';
  edges: Array<CompetitionEventsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionEventsConnectionSort = {
  node?: InputMaybe<EventSort>;
};

export type CompetitionEventsConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionEventsConnectionWhere>>;
  NOT?: InputMaybe<CompetitionEventsConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionEventsConnectionWhere>>;
  node?: InputMaybe<EventWhere>;
};

export type CompetitionEventsCreateFieldInput = {
  node: EventCreateInput;
};

export type CompetitionEventsDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};

export type CompetitionEventsDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};

export type CompetitionEventsFieldInput = {
  connect?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
};

export type CompetitionEventsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionEventsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionEventsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionEventsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  genderClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  genderClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  genderClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  genderClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  weightClass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  weightClass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  weightClass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  weightClass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CompetitionEventsRelationship = {
  __typename?: 'CompetitionEventsRelationship';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type CompetitionEventsUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
};

export type CompetitionEventsUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionEventsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionEventsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionEventsDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionEventsUpdateConnectionInput>;
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
};

export type CompetitionInNation = {
  /** The city where the competition took place. */
  city?: Maybe<Scalars['String']['output']>;
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompetitionInNationCreateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
};

export type CompetitionInNationSort = {
  city?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type CompetitionInNationUpdateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
};

export type CompetitionInNationWhere = {
  AND?: InputMaybe<Array<CompetitionInNationWhere>>;
  NOT?: InputMaybe<CompetitionInNationWhere>;
  OR?: InputMaybe<Array<CompetitionInNationWhere>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  city_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  city_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionNationAggregateInput = {
  AND?: InputMaybe<Array<CompetitionNationAggregateInput>>;
  NOT?: InputMaybe<CompetitionNationAggregateInput>;
  OR?: InputMaybe<Array<CompetitionNationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<CompetitionNationEdgeAggregationWhereInput>;
  node?: InputMaybe<CompetitionNationNodeAggregationWhereInput>;
};

export type CompetitionNationConnectFieldInput = {
  connect?: InputMaybe<NationConnectInput>;
  edge?: InputMaybe<CompetitionInNationCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NationConnectWhere>;
};

export type CompetitionNationConnectOrCreateFieldInput = {
  onCreate: CompetitionNationConnectOrCreateFieldInputOnCreate;
  where: NationConnectOrCreateWhere;
};

export type CompetitionNationConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<CompetitionInNationCreateInput>;
  node: NationOnCreateInput;
};

export type CompetitionNationConnection = {
  __typename?: 'CompetitionNationConnection';
  edges: Array<CompetitionNationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionNationConnectionSort = {
  edge?: InputMaybe<CompetitionInNationSort>;
  node?: InputMaybe<NationSort>;
};

export type CompetitionNationConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionNationConnectionWhere>>;
  NOT?: InputMaybe<CompetitionNationConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionNationConnectionWhere>>;
  edge?: InputMaybe<CompetitionInNationWhere>;
  node?: InputMaybe<NationWhere>;
};

export type CompetitionNationCreateFieldInput = {
  edge?: InputMaybe<CompetitionInNationCreateInput>;
  node: NationCreateInput;
};

export type CompetitionNationDeleteFieldInput = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<CompetitionNationConnectionWhere>;
};

export type CompetitionNationDisconnectFieldInput = {
  disconnect?: InputMaybe<NationDisconnectInput>;
  where?: InputMaybe<CompetitionNationConnectionWhere>;
};

export type CompetitionNationEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionNationEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionNationEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionNationEdgeAggregationWhereInput>>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionNationFieldInput = {
  connect?: InputMaybe<CompetitionNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<CompetitionNationConnectOrCreateFieldInput>;
  create?: InputMaybe<CompetitionNationCreateFieldInput>;
};

export type CompetitionNationNationAggregationSelection = {
  __typename?: 'CompetitionNationNationAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<CompetitionNationNationEdgeAggregateSelection>;
  node?: Maybe<CompetitionNationNationNodeAggregateSelection>;
};

export type CompetitionNationNationEdgeAggregateSelection = {
  __typename?: 'CompetitionNationNationEdgeAggregateSelection';
  city: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionNationNationNodeAggregateSelection = {
  __typename?: 'CompetitionNationNationNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionNationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionNationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionNationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionNationNodeAggregationWhereInput>>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionNationRelationship = CompetitionInNation & {
  __typename?: 'CompetitionNationRelationship';
  /** The city where the competition took place. */
  city?: Maybe<Scalars['String']['output']>;
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Nation;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompetitionNationUpdateConnectionInput = {
  edge?: InputMaybe<CompetitionInNationUpdateInput>;
  node?: InputMaybe<NationUpdateInput>;
};

export type CompetitionNationUpdateFieldInput = {
  connect?: InputMaybe<CompetitionNationConnectFieldInput>;
  connectOrCreate?: InputMaybe<CompetitionNationConnectOrCreateFieldInput>;
  create?: InputMaybe<CompetitionNationCreateFieldInput>;
  delete?: InputMaybe<CompetitionNationDeleteFieldInput>;
  disconnect?: InputMaybe<CompetitionNationDisconnectFieldInput>;
  update?: InputMaybe<CompetitionNationUpdateConnectionInput>;
  where?: InputMaybe<CompetitionNationConnectionWhere>;
};

export type CompetitionOnCreateInput = {
  date: Scalars['Date']['input'];
  name: Scalars['String']['input'];
  scraped?: Scalars['Boolean']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type CompetitionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CompetitionSort objects to sort Competitions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CompetitionSort>>;
};

export type CompetitionRelationInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
  events?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
  nation?: InputMaybe<CompetitionNationCreateFieldInput>;
  sports?: InputMaybe<Array<CompetitionSportsCreateFieldInput>>;
};

/** Fields to sort Competitions by. The order in which sorts are applied is not guaranteed when specifying many fields in one CompetitionSort object. */
export type CompetitionSort = {
  createdAt?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  scraped?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type CompetitionSportSportsAggregationSelection = {
  __typename?: 'CompetitionSportSportsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompetitionSportSportsNodeAggregateSelection>;
};

export type CompetitionSportSportsNodeAggregateSelection = {
  __typename?: 'CompetitionSportSportsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionSportsAggregateInput = {
  AND?: InputMaybe<Array<CompetitionSportsAggregateInput>>;
  NOT?: InputMaybe<CompetitionSportsAggregateInput>;
  OR?: InputMaybe<Array<CompetitionSportsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompetitionSportsNodeAggregationWhereInput>;
};

export type CompetitionSportsConnectFieldInput = {
  connect?: InputMaybe<Array<SportConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SportConnectWhere>;
};

export type CompetitionSportsConnectOrCreateFieldInput = {
  onCreate: CompetitionSportsConnectOrCreateFieldInputOnCreate;
  where: SportConnectOrCreateWhere;
};

export type CompetitionSportsConnectOrCreateFieldInputOnCreate = {
  node: SportOnCreateInput;
};

export type CompetitionSportsConnection = {
  __typename?: 'CompetitionSportsConnection';
  edges: Array<CompetitionSportsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompetitionSportsConnectionSort = {
  node?: InputMaybe<SportSort>;
};

export type CompetitionSportsConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionSportsConnectionWhere>>;
  NOT?: InputMaybe<CompetitionSportsConnectionWhere>;
  OR?: InputMaybe<Array<CompetitionSportsConnectionWhere>>;
  node?: InputMaybe<SportWhere>;
};

export type CompetitionSportsCreateFieldInput = {
  node: SportCreateInput;
};

export type CompetitionSportsDeleteFieldInput = {
  delete?: InputMaybe<SportDeleteInput>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionSportsDisconnectFieldInput = {
  disconnect?: InputMaybe<SportDisconnectInput>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionSportsFieldInput = {
  connect?: InputMaybe<Array<CompetitionSportsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionSportsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionSportsCreateFieldInput>>;
};

export type CompetitionSportsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionSportsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionSportsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompetitionSportsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompetitionSportsRelationship = {
  __typename?: 'CompetitionSportsRelationship';
  cursor: Scalars['String']['output'];
  node: Sport;
};

export type CompetitionSportsUpdateConnectionInput = {
  node?: InputMaybe<SportUpdateInput>;
};

export type CompetitionSportsUpdateFieldInput = {
  connect?: InputMaybe<Array<CompetitionSportsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionSportsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompetitionSportsCreateFieldInput>>;
  delete?: InputMaybe<Array<CompetitionSportsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionSportsDisconnectFieldInput>>;
  update?: InputMaybe<CompetitionSportsUpdateConnectionInput>;
  where?: InputMaybe<CompetitionSportsConnectionWhere>;
};

export type CompetitionUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CompetitionUpdateInput = {
  athletes?: InputMaybe<Array<CompetitionAthletesUpdateFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesUpdateFieldInput>>;
  date?: InputMaybe<Scalars['Date']['input']>;
  events?: InputMaybe<Array<CompetitionEventsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nation?: InputMaybe<CompetitionNationUpdateFieldInput>;
  scraped?: InputMaybe<Scalars['Boolean']['input']>;
  sports?: InputMaybe<Array<CompetitionSportsUpdateFieldInput>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompetitionWhere = {
  AND?: InputMaybe<Array<CompetitionWhere>>;
  NOT?: InputMaybe<CompetitionWhere>;
  OR?: InputMaybe<Array<CompetitionWhere>>;
  athletesAggregate?: InputMaybe<CompetitionAthletesAggregateInput>;
  /** Return Competitions where all of the related CompetitionAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where none of the related CompetitionAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where one of the related CompetitionAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where some of the related CompetitionAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Competitions where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Competitions where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Competitions where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dataSourcesAggregate?: InputMaybe<CompetitionDataSourcesAggregateInput>;
  /** Return Competitions where all of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where none of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where one of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where some of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_GT?: InputMaybe<Scalars['Date']['input']>;
  date_GTE?: InputMaybe<Scalars['Date']['input']>;
  date_IN?: InputMaybe<Array<Scalars['Date']['input']>>;
  date_LT?: InputMaybe<Scalars['Date']['input']>;
  date_LTE?: InputMaybe<Scalars['Date']['input']>;
  eventsAggregate?: InputMaybe<CompetitionEventsAggregateInput>;
  /** Return Competitions where all of the related CompetitionEventsConnections match this filter */
  eventsConnection_ALL?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where none of the related CompetitionEventsConnections match this filter */
  eventsConnection_NONE?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where one of the related CompetitionEventsConnections match this filter */
  eventsConnection_SINGLE?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where some of the related CompetitionEventsConnections match this filter */
  eventsConnection_SOME?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where all of the related Events match this filter */
  events_ALL?: InputMaybe<EventWhere>;
  /** Return Competitions where none of the related Events match this filter */
  events_NONE?: InputMaybe<EventWhere>;
  /** Return Competitions where one of the related Events match this filter */
  events_SINGLE?: InputMaybe<EventWhere>;
  /** Return Competitions where some of the related Events match this filter */
  events_SOME?: InputMaybe<EventWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nation?: InputMaybe<NationWhere>;
  nationAggregate?: InputMaybe<CompetitionNationAggregateInput>;
  nationConnection?: InputMaybe<CompetitionNationConnectionWhere>;
  nationConnection_NOT?: InputMaybe<CompetitionNationConnectionWhere>;
  nation_NOT?: InputMaybe<NationWhere>;
  scraped?: InputMaybe<Scalars['Boolean']['input']>;
  sportsAggregate?: InputMaybe<CompetitionSportsAggregateInput>;
  /** Return Competitions where all of the related CompetitionSportsConnections match this filter */
  sportsConnection_ALL?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where none of the related CompetitionSportsConnections match this filter */
  sportsConnection_NONE?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where one of the related CompetitionSportsConnections match this filter */
  sportsConnection_SINGLE?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where some of the related CompetitionSportsConnections match this filter */
  sportsConnection_SOME?: InputMaybe<CompetitionSportsConnectionWhere>;
  /** Return Competitions where all of the related Sports match this filter */
  sports_ALL?: InputMaybe<SportWhere>;
  /** Return Competitions where none of the related Sports match this filter */
  sports_NONE?: InputMaybe<SportWhere>;
  /** Return Competitions where one of the related Sports match this filter */
  sports_SINGLE?: InputMaybe<SportWhere>;
  /** Return Competitions where some of the related Sports match this filter */
  sports_SOME?: InputMaybe<SportWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompetitionsConnection = {
  __typename?: 'CompetitionsConnection';
  edges: Array<CompetitionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateAthletesMutationResponse = {
  __typename?: 'CreateAthletesMutationResponse';
  athletes: Array<Athlete>;
  info: CreateInfo;
};

export type CreateAttemptsMutationResponse = {
  __typename?: 'CreateAttemptsMutationResponse';
  attempts: Array<Attempt>;
  info: CreateInfo;
};

export type CreateCompetitionsMutationResponse = {
  __typename?: 'CreateCompetitionsMutationResponse';
  competitions: Array<Competition>;
  info: CreateInfo;
};

export type CreateDataSourcesMutationResponse = {
  __typename?: 'CreateDataSourcesMutationResponse';
  dataSources: Array<DataSource>;
  info: CreateInfo;
};

export type CreateEventsMutationResponse = {
  __typename?: 'CreateEventsMutationResponse';
  events: Array<Event>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateNationsMutationResponse = {
  __typename?: 'CreateNationsMutationResponse';
  info: CreateInfo;
  nations: Array<Nation>;
};

export type CreateSportsMutationResponse = {
  __typename?: 'CreateSportsMutationResponse';
  info: CreateInfo;
  sports: Array<Sport>;
};

/** Represents a data source for sports-related information. */
export type DataSource = {
  __typename?: 'DataSource';
  /** The list of athletes associated with this data source. */
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<DataSourceAthleteAthletesAggregationSelection>;
  athletesConnection: DataSourceAthletesConnection;
  /** The list of competitions associated with this data source. */
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<DataSourceCompetitionCompetitionsAggregationSelection>;
  competitionsConnection: DataSourceCompetitionsConnection;
  /** The timestamp when the data source's profile was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the data source. */
  id: Scalars['ID']['output'];
  /** The name of the data source. */
  name: Scalars['String']['output'];
  /** The timestamp when the data source's profile was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates whether the data source's profile is verified. */
  verified: Scalars['Boolean']['output'];
};


/** Represents a data source for sports-related information. */
export type DataSourceAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a data source for sports-related information. */
export type DataSourceAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a data source for sports-related information. */
export type DataSourceAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DataSourceAthletesConnectionSort>>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};


/** Represents a data source for sports-related information. */
export type DataSourceCompetitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a data source for sports-related information. */
export type DataSourceCompetitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a data source for sports-related information. */
export type DataSourceCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DataSourceCompetitionsConnectionSort>>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceAggregateSelection = {
  __typename?: 'DataSourceAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceAthleteAthletesAggregationSelection = {
  __typename?: 'DataSourceAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<DataSourceAthleteAthletesEdgeAggregateSelection>;
  node?: Maybe<DataSourceAthleteAthletesNodeAggregateSelection>;
};

export type DataSourceAthleteAthletesEdgeAggregateSelection = {
  __typename?: 'DataSourceAthleteAthletesEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  entityId: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceAthleteAthletesNodeAggregateSelection = {
  __typename?: 'DataSourceAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceAthletesAggregateInput = {
  AND?: InputMaybe<Array<DataSourceAthletesAggregateInput>>;
  NOT?: InputMaybe<DataSourceAthletesAggregateInput>;
  OR?: InputMaybe<Array<DataSourceAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<DataSourceAthletesEdgeAggregationWhereInput>;
  node?: InputMaybe<DataSourceAthletesNodeAggregationWhereInput>;
};

export type DataSourceAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  edge: DataSourceEdgeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type DataSourceAthletesConnectOrCreateFieldInput = {
  onCreate: DataSourceAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type DataSourceAthletesConnectOrCreateFieldInputOnCreate = {
  edge: DataSourceEdgeCreateInput;
  node: AthleteOnCreateInput;
};

export type DataSourceAthletesConnection = {
  __typename?: 'DataSourceAthletesConnection';
  edges: Array<DataSourceAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DataSourceAthletesConnectionSort = {
  edge?: InputMaybe<DataSourceEdgeSort>;
  node?: InputMaybe<AthleteSort>;
};

export type DataSourceAthletesConnectionWhere = {
  AND?: InputMaybe<Array<DataSourceAthletesConnectionWhere>>;
  NOT?: InputMaybe<DataSourceAthletesConnectionWhere>;
  OR?: InputMaybe<Array<DataSourceAthletesConnectionWhere>>;
  edge?: InputMaybe<DataSourceEdgeWhere>;
  node?: InputMaybe<AthleteWhere>;
};

export type DataSourceAthletesCreateFieldInput = {
  edge: DataSourceEdgeCreateInput;
  node: AthleteCreateInput;
};

export type DataSourceAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};

export type DataSourceAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};

export type DataSourceAthletesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceAthletesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceAthletesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<DataSourceAthletesEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  entityId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DataSourceAthletesFieldInput = {
  connect?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
};

export type DataSourceAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DataSourceAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DataSourceAthletesRelationship = DataSourceEdge & {
  __typename?: 'DataSourceAthletesRelationship';
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The unique identifier of the entity associated with the data source. */
  entityId: Scalars['String']['output'];
  node: Athlete;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DataSourceAthletesUpdateConnectionInput = {
  edge?: InputMaybe<DataSourceEdgeUpdateInput>;
  node?: InputMaybe<AthleteUpdateInput>;
};

export type DataSourceAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<DataSourceAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataSourceAthletesDisconnectFieldInput>>;
  update?: InputMaybe<DataSourceAthletesUpdateConnectionInput>;
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
};

export type DataSourceCompetitionCompetitionsAggregationSelection = {
  __typename?: 'DataSourceCompetitionCompetitionsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<DataSourceCompetitionCompetitionsEdgeAggregateSelection>;
  node?: Maybe<DataSourceCompetitionCompetitionsNodeAggregateSelection>;
};

export type DataSourceCompetitionCompetitionsEdgeAggregateSelection = {
  __typename?: 'DataSourceCompetitionCompetitionsEdgeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  entityId: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: 'DataSourceCompetitionCompetitionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceCompetitionsAggregateInput = {
  AND?: InputMaybe<Array<DataSourceCompetitionsAggregateInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsAggregateInput>;
  OR?: InputMaybe<Array<DataSourceCompetitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<DataSourceCompetitionsEdgeAggregationWhereInput>;
  node?: InputMaybe<DataSourceCompetitionsNodeAggregationWhereInput>;
};

export type DataSourceCompetitionsConnectFieldInput = {
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  edge: DataSourceEdgeCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type DataSourceCompetitionsConnectOrCreateFieldInput = {
  onCreate: DataSourceCompetitionsConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type DataSourceCompetitionsConnectOrCreateFieldInputOnCreate = {
  edge: DataSourceEdgeCreateInput;
  node: CompetitionOnCreateInput;
};

export type DataSourceCompetitionsConnection = {
  __typename?: 'DataSourceCompetitionsConnection';
  edges: Array<DataSourceCompetitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DataSourceCompetitionsConnectionSort = {
  edge?: InputMaybe<DataSourceEdgeSort>;
  node?: InputMaybe<CompetitionSort>;
};

export type DataSourceCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<DataSourceCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  OR?: InputMaybe<Array<DataSourceCompetitionsConnectionWhere>>;
  edge?: InputMaybe<DataSourceEdgeWhere>;
  node?: InputMaybe<CompetitionWhere>;
};

export type DataSourceCompetitionsCreateFieldInput = {
  edge: DataSourceEdgeCreateInput;
  node: CompetitionCreateInput;
};

export type DataSourceCompetitionsDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceCompetitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceCompetitionsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceCompetitionsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<DataSourceCompetitionsEdgeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  entityId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  entityId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  entityId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  entityId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DataSourceCompetitionsFieldInput = {
  connect?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
};

export type DataSourceCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DataSourceCompetitionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DataSourceCompetitionsRelationship = DataSourceEdge & {
  __typename?: 'DataSourceCompetitionsRelationship';
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The unique identifier of the entity associated with the data source. */
  entityId: Scalars['String']['output'];
  node: Competition;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DataSourceCompetitionsUpdateConnectionInput = {
  edge?: InputMaybe<DataSourceEdgeUpdateInput>;
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type DataSourceCompetitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataSourceCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<DataSourceCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataSourceCompetitionsDisconnectFieldInput>>;
  update?: InputMaybe<DataSourceCompetitionsUpdateConnectionInput>;
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
};

export type DataSourceConnectInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
};

export type DataSourceConnectOrCreateInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesConnectOrCreateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsConnectOrCreateFieldInput>>;
};

export type DataSourceConnectOrCreateWhere = {
  node: DataSourceUniqueWhere;
};

export type DataSourceConnectWhere = {
  node: DataSourceWhere;
};

export type DataSourceCreateInput = {
  athletes?: InputMaybe<DataSourceAthletesFieldInput>;
  competitions?: InputMaybe<DataSourceCompetitionsFieldInput>;
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type DataSourceDeleteInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesDeleteFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsDeleteFieldInput>>;
};

export type DataSourceDisconnectInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsDisconnectFieldInput>>;
};

export type DataSourceEdge = {
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity associated with the data source. */
  entityId: Scalars['String']['output'];
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DataSourceEdgeCreateInput = {
  entityId: Scalars['String']['input'];
};

export type DataSourceEdgeSort = {
  createdAt?: InputMaybe<SortDirection>;
  entityId?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type DataSourceEdgeUpdateInput = {
  entityId?: InputMaybe<Scalars['String']['input']>;
};

export type DataSourceEdgeWhere = {
  AND?: InputMaybe<Array<DataSourceEdgeWhere>>;
  NOT?: InputMaybe<DataSourceEdgeWhere>;
  OR?: InputMaybe<Array<DataSourceEdgeWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  entityId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  entityId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  entityId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DataSourceOnCreateInput = {
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type DataSourceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DataSourceSort objects to sort DataSources by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DataSourceSort>>;
};

export type DataSourceRelationInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
};

/** Fields to sort DataSources by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataSourceSort object. */
export type DataSourceSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type DataSourceUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DataSourceUpdateInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesUpdateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataSourceWhere = {
  AND?: InputMaybe<Array<DataSourceWhere>>;
  NOT?: InputMaybe<DataSourceWhere>;
  OR?: InputMaybe<Array<DataSourceWhere>>;
  athletesAggregate?: InputMaybe<DataSourceAthletesAggregateInput>;
  /** Return DataSources where all of the related DataSourceAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where none of the related DataSourceAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where one of the related DataSourceAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where some of the related DataSourceAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return DataSources where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return DataSources where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return DataSources where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  competitionsAggregate?: InputMaybe<DataSourceCompetitionsAggregateInput>;
  /** Return DataSources where all of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where none of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where one of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where some of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataSourcesConnection = {
  __typename?: 'DataSourcesConnection';
  edges: Array<DataSourceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime']['output'];
  min: Scalars['DateTime']['output'];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

/** Represents a sports event in the competition. */
export type Event = {
  __typename?: 'Event';
  /** The list of athletes who participated in this event. */
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<EventAthleteAthletesAggregationSelection>;
  athletesConnection: EventAthletesConnection;
  /** The list of attempts made in this event. */
  attempts: Array<Attempt>;
  attemptsAggregate?: Maybe<EventAttemptAttemptsAggregationSelection>;
  attemptsConnection: EventAttemptsConnection;
  /** The class of the event. */
  class?: Maybe<EventClass_Iwf>;
  /** The competition to which this event belongs. */
  competition: Competition;
  competitionAggregate?: Maybe<EventCompetitionCompetitionAggregationSelection>;
  competitionConnection: EventCompetitionConnection;
  /** The timestamp when the event was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The date of the event. */
  date?: Maybe<Scalars['Date']['output']>;
  /** The gender class of the event */
  genderClass: Scalars['String']['output'];
  /** The unique identifier of the event. */
  id: Scalars['ID']['output'];
  /** The type of the event. */
  type: EventType_Iwf;
  /** The timestamp when the event was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates whether the event is verified. */
  verified: Scalars['Boolean']['output'];
  /** The weight class of the event */
  weightClass: Scalars['String']['output'];
};


/** Represents a sports event in the competition. */
export type EventAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a sports event in the competition. */
export type EventAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a sports event in the competition. */
export type EventAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventAthletesConnectionSort>>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};


/** Represents a sports event in the competition. */
export type EventAttemptsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AttemptOptions>;
  where?: InputMaybe<AttemptWhere>;
};


/** Represents a sports event in the competition. */
export type EventAttemptsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AttemptWhere>;
};


/** Represents a sports event in the competition. */
export type EventAttemptsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventAttemptsConnectionSort>>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};


/** Represents a sports event in the competition. */
export type EventCompetitionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a sports event in the competition. */
export type EventCompetitionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a sports event in the competition. */
export type EventCompetitionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventCompetitionConnectionSort>>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventAggregateSelection = {
  __typename?: 'EventAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  genderClass: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  weightClass: StringAggregateSelectionNonNullable;
};

export type EventAthleteAthletesAggregationSelection = {
  __typename?: 'EventAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<EventAthleteAthletesEdgeAggregateSelection>;
  node?: Maybe<EventAthleteAthletesNodeAggregateSelection>;
};

export type EventAthleteAthletesEdgeAggregateSelection = {
  __typename?: 'EventAthleteAthletesEdgeAggregateSelection';
  bodyweight: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  group: StringAggregateSelectionNonNullable;
  rank: IntAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventAthleteAthletesNodeAggregateSelection = {
  __typename?: 'EventAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventAthletesAggregateInput = {
  AND?: InputMaybe<Array<EventAthletesAggregateInput>>;
  NOT?: InputMaybe<EventAthletesAggregateInput>;
  OR?: InputMaybe<Array<EventAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<EventAthletesEdgeAggregationWhereInput>;
  node?: InputMaybe<EventAthletesNodeAggregationWhereInput>;
};

export type EventAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  edge: AthleteDidCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type EventAthletesConnectOrCreateFieldInput = {
  onCreate: EventAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type EventAthletesConnectOrCreateFieldInputOnCreate = {
  edge: AthleteDidCreateInput;
  node: AthleteOnCreateInput;
};

export type EventAthletesConnection = {
  __typename?: 'EventAthletesConnection';
  edges: Array<EventAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventAthletesConnectionSort = {
  edge?: InputMaybe<AthleteDidSort>;
  node?: InputMaybe<AthleteSort>;
};

export type EventAthletesConnectionWhere = {
  AND?: InputMaybe<Array<EventAthletesConnectionWhere>>;
  NOT?: InputMaybe<EventAthletesConnectionWhere>;
  OR?: InputMaybe<Array<EventAthletesConnectionWhere>>;
  edge?: InputMaybe<AthleteDidWhere>;
  node?: InputMaybe<AthleteWhere>;
};

export type EventAthletesCreateFieldInput = {
  edge: AthleteDidCreateInput;
  node: AthleteCreateInput;
};

export type EventAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};

export type EventAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};

export type EventAthletesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventAthletesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<EventAthletesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventAthletesEdgeAggregationWhereInput>>;
  bodyweight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  bodyweight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  group_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  group_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  group_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  group_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  rank_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  rank_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  rank_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventAthletesFieldInput = {
  connect?: InputMaybe<Array<EventAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAthletesCreateFieldInput>>;
};

export type EventAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventAthletesRelationship = AthleteDid & {
  __typename?: 'EventAthletesRelationship';
  /** The bodyweight of the athlete when participating in the event. */
  bodyweight: Scalars['Float']['output'];
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  /** The group the athlete was placed in for the event. */
  group: Scalars['String']['output'];
  node: Athlete;
  /** The ranking of the athlete at the conclusion of the event. */
  rank?: Maybe<Scalars['Int']['output']>;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EventAthletesUpdateConnectionInput = {
  edge?: InputMaybe<AthleteDidUpdateInput>;
  node?: InputMaybe<AthleteUpdateInput>;
};

export type EventAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<EventAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<EventAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EventAthletesDisconnectFieldInput>>;
  update?: InputMaybe<EventAthletesUpdateConnectionInput>;
  where?: InputMaybe<EventAthletesConnectionWhere>;
};

export type EventAttemptAttemptsAggregationSelection = {
  __typename?: 'EventAttemptAttemptsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<EventAttemptAttemptsNodeAggregateSelection>;
};

export type EventAttemptAttemptsNodeAggregateSelection = {
  __typename?: 'EventAttemptAttemptsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  dateTime: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  number: IntAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  weight: FloatAggregateSelectionNonNullable;
};

export type EventAttemptsAggregateInput = {
  AND?: InputMaybe<Array<EventAttemptsAggregateInput>>;
  NOT?: InputMaybe<EventAttemptsAggregateInput>;
  OR?: InputMaybe<Array<EventAttemptsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<EventAttemptsNodeAggregationWhereInput>;
};

export type EventAttemptsConnectFieldInput = {
  connect?: InputMaybe<Array<AttemptConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AttemptConnectWhere>;
};

export type EventAttemptsConnectOrCreateFieldInput = {
  onCreate: EventAttemptsConnectOrCreateFieldInputOnCreate;
  where: AttemptConnectOrCreateWhere;
};

export type EventAttemptsConnectOrCreateFieldInputOnCreate = {
  node: AttemptOnCreateInput;
};

export type EventAttemptsConnection = {
  __typename?: 'EventAttemptsConnection';
  edges: Array<EventAttemptsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventAttemptsConnectionSort = {
  node?: InputMaybe<AttemptSort>;
};

export type EventAttemptsConnectionWhere = {
  AND?: InputMaybe<Array<EventAttemptsConnectionWhere>>;
  NOT?: InputMaybe<EventAttemptsConnectionWhere>;
  OR?: InputMaybe<Array<EventAttemptsConnectionWhere>>;
  node?: InputMaybe<AttemptWhere>;
};

export type EventAttemptsCreateFieldInput = {
  node: AttemptCreateInput;
};

export type EventAttemptsDeleteFieldInput = {
  delete?: InputMaybe<AttemptDeleteInput>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};

export type EventAttemptsDisconnectFieldInput = {
  disconnect?: InputMaybe<AttemptDisconnectInput>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};

export type EventAttemptsFieldInput = {
  connect?: InputMaybe<Array<EventAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAttemptsCreateFieldInput>>;
};

export type EventAttemptsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventAttemptsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventAttemptsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventAttemptsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dateTime_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  number_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  number_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  number_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  number_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  weight_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  weight_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type EventAttemptsRelationship = {
  __typename?: 'EventAttemptsRelationship';
  cursor: Scalars['String']['output'];
  node: Attempt;
};

export type EventAttemptsUpdateConnectionInput = {
  node?: InputMaybe<AttemptUpdateInput>;
};

export type EventAttemptsUpdateFieldInput = {
  connect?: InputMaybe<Array<EventAttemptsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventAttemptsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventAttemptsCreateFieldInput>>;
  delete?: InputMaybe<Array<EventAttemptsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EventAttemptsDisconnectFieldInput>>;
  update?: InputMaybe<EventAttemptsUpdateConnectionInput>;
  where?: InputMaybe<EventAttemptsConnectionWhere>;
};

/** Enumeration of classes for men and women in a iwf competition. */
export enum EventClass_Iwf {
  M_55 = 'M_55',
  M_61 = 'M_61',
  M_67 = 'M_67',
  M_73 = 'M_73',
  M_81 = 'M_81',
  M_89 = 'M_89',
  M_96 = 'M_96',
  M_102 = 'M_102',
  M_109 = 'M_109',
  MP109 = 'M_P109',
  W_45 = 'W_45',
  W_49 = 'W_49',
  W_55 = 'W_55',
  W_59 = 'W_59',
  W_64 = 'W_64',
  W_71 = 'W_71',
  W_76 = 'W_76',
  W_81 = 'W_81',
  W_87 = 'W_87',
  WP87 = 'W_P87'
}

export type EventCompetitionAggregateInput = {
  AND?: InputMaybe<Array<EventCompetitionAggregateInput>>;
  NOT?: InputMaybe<EventCompetitionAggregateInput>;
  OR?: InputMaybe<Array<EventCompetitionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<EventCompetitionNodeAggregationWhereInput>;
};

export type EventCompetitionCompetitionAggregationSelection = {
  __typename?: 'EventCompetitionCompetitionAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<EventCompetitionCompetitionNodeAggregateSelection>;
};

export type EventCompetitionCompetitionNodeAggregateSelection = {
  __typename?: 'EventCompetitionCompetitionNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventCompetitionConnectFieldInput = {
  connect?: InputMaybe<CompetitionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type EventCompetitionConnectOrCreateFieldInput = {
  onCreate: EventCompetitionConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type EventCompetitionConnectOrCreateFieldInputOnCreate = {
  node: CompetitionOnCreateInput;
};

export type EventCompetitionConnection = {
  __typename?: 'EventCompetitionConnection';
  edges: Array<EventCompetitionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventCompetitionConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type EventCompetitionConnectionWhere = {
  AND?: InputMaybe<Array<EventCompetitionConnectionWhere>>;
  NOT?: InputMaybe<EventCompetitionConnectionWhere>;
  OR?: InputMaybe<Array<EventCompetitionConnectionWhere>>;
  node?: InputMaybe<CompetitionWhere>;
};

export type EventCompetitionCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type EventCompetitionDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventCompetitionDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventCompetitionFieldInput = {
  connect?: InputMaybe<EventCompetitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<EventCompetitionConnectOrCreateFieldInput>;
  create?: InputMaybe<EventCompetitionCreateFieldInput>;
};

export type EventCompetitionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventCompetitionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventCompetitionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventCompetitionNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCompetitionRelationship = {
  __typename?: 'EventCompetitionRelationship';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type EventCompetitionUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type EventCompetitionUpdateFieldInput = {
  connect?: InputMaybe<EventCompetitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<EventCompetitionConnectOrCreateFieldInput>;
  create?: InputMaybe<EventCompetitionCreateFieldInput>;
  delete?: InputMaybe<EventCompetitionDeleteFieldInput>;
  disconnect?: InputMaybe<EventCompetitionDisconnectFieldInput>;
  update?: InputMaybe<EventCompetitionUpdateConnectionInput>;
  where?: InputMaybe<EventCompetitionConnectionWhere>;
};

export type EventConnectInput = {
  athletes?: InputMaybe<Array<EventAthletesConnectFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsConnectFieldInput>>;
  competition?: InputMaybe<EventCompetitionConnectFieldInput>;
};

export type EventConnectOrCreateInput = {
  athletes?: InputMaybe<Array<EventAthletesConnectOrCreateFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsConnectOrCreateFieldInput>>;
  competition?: InputMaybe<EventCompetitionConnectOrCreateFieldInput>;
};

export type EventConnectOrCreateWhere = {
  node: EventUniqueWhere;
};

export type EventConnectWhere = {
  node: EventWhere;
};

export type EventCreateInput = {
  athletes?: InputMaybe<EventAthletesFieldInput>;
  attempts?: InputMaybe<EventAttemptsFieldInput>;
  class?: InputMaybe<EventClass_Iwf>;
  competition?: InputMaybe<EventCompetitionFieldInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  genderClass: Scalars['String']['input'];
  type: EventType_Iwf;
  verified?: Scalars['Boolean']['input'];
  weightClass: Scalars['String']['input'];
};

export type EventDeleteInput = {
  athletes?: InputMaybe<Array<EventAthletesDeleteFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsDeleteFieldInput>>;
  competition?: InputMaybe<EventCompetitionDeleteFieldInput>;
};

export type EventDisconnectInput = {
  athletes?: InputMaybe<Array<EventAthletesDisconnectFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsDisconnectFieldInput>>;
  competition?: InputMaybe<EventCompetitionDisconnectFieldInput>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventOnCreateInput = {
  class?: InputMaybe<EventClass_Iwf>;
  date?: InputMaybe<Scalars['Date']['input']>;
  genderClass: Scalars['String']['input'];
  type: EventType_Iwf;
  verified?: Scalars['Boolean']['input'];
  weightClass: Scalars['String']['input'];
};

export type EventOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more EventSort objects to sort Events by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EventSort>>;
};

export type EventRelationInput = {
  athletes?: InputMaybe<Array<EventAthletesCreateFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsCreateFieldInput>>;
  competition?: InputMaybe<EventCompetitionCreateFieldInput>;
};

/** Fields to sort Events by. The order in which sorts are applied is not guaranteed when specifying many fields in one EventSort object. */
export type EventSort = {
  class?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
  genderClass?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  weightClass?: InputMaybe<SortDirection>;
};

/** Enumeration of event types for a weightlifting competition */
export enum EventType_Iwf {
  CleanJerk = 'CleanJerk',
  Snatch = 'Snatch'
}

export type EventUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventUpdateInput = {
  athletes?: InputMaybe<Array<EventAthletesUpdateFieldInput>>;
  attempts?: InputMaybe<Array<EventAttemptsUpdateFieldInput>>;
  class?: InputMaybe<EventClass_Iwf>;
  competition?: InputMaybe<EventCompetitionUpdateFieldInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  genderClass?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EventType_Iwf>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  weightClass?: InputMaybe<Scalars['String']['input']>;
};

export type EventWhere = {
  AND?: InputMaybe<Array<EventWhere>>;
  NOT?: InputMaybe<EventWhere>;
  OR?: InputMaybe<Array<EventWhere>>;
  athletesAggregate?: InputMaybe<EventAthletesAggregateInput>;
  /** Return Events where all of the related EventAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where none of the related EventAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where one of the related EventAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where some of the related EventAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<EventAthletesConnectionWhere>;
  /** Return Events where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Events where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Events where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Events where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  attemptsAggregate?: InputMaybe<EventAttemptsAggregateInput>;
  /** Return Events where all of the related EventAttemptsConnections match this filter */
  attemptsConnection_ALL?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where none of the related EventAttemptsConnections match this filter */
  attemptsConnection_NONE?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where one of the related EventAttemptsConnections match this filter */
  attemptsConnection_SINGLE?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where some of the related EventAttemptsConnections match this filter */
  attemptsConnection_SOME?: InputMaybe<EventAttemptsConnectionWhere>;
  /** Return Events where all of the related Attempts match this filter */
  attempts_ALL?: InputMaybe<AttemptWhere>;
  /** Return Events where none of the related Attempts match this filter */
  attempts_NONE?: InputMaybe<AttemptWhere>;
  /** Return Events where one of the related Attempts match this filter */
  attempts_SINGLE?: InputMaybe<AttemptWhere>;
  /** Return Events where some of the related Attempts match this filter */
  attempts_SOME?: InputMaybe<AttemptWhere>;
  class?: InputMaybe<EventClass_Iwf>;
  class_IN?: InputMaybe<Array<InputMaybe<EventClass_Iwf>>>;
  competition?: InputMaybe<CompetitionWhere>;
  competitionAggregate?: InputMaybe<EventCompetitionAggregateInput>;
  competitionConnection?: InputMaybe<EventCompetitionConnectionWhere>;
  competitionConnection_NOT?: InputMaybe<EventCompetitionConnectionWhere>;
  competition_NOT?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  date_GT?: InputMaybe<Scalars['Date']['input']>;
  date_GTE?: InputMaybe<Scalars['Date']['input']>;
  date_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  date_LT?: InputMaybe<Scalars['Date']['input']>;
  date_LTE?: InputMaybe<Scalars['Date']['input']>;
  genderClass?: InputMaybe<Scalars['String']['input']>;
  genderClass_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  genderClass_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  genderClass_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  genderClass_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<EventType_Iwf>;
  type_IN?: InputMaybe<Array<EventType_Iwf>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  weightClass?: InputMaybe<Scalars['String']['input']>;
  weightClass_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  weightClass_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  weightClass_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  weightClass_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  sum: Scalars['Float']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: 'IntAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
  sum: Scalars['Int']['output'];
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAthletes: CreateAthletesMutationResponse;
  createAttempts: CreateAttemptsMutationResponse;
  createCompetitions: CreateCompetitionsMutationResponse;
  createDataSources: CreateDataSourcesMutationResponse;
  createEvents: CreateEventsMutationResponse;
  createNations: CreateNationsMutationResponse;
  createSports: CreateSportsMutationResponse;
  deleteAthletes: DeleteInfo;
  deleteAttempts: DeleteInfo;
  deleteCompetitions: DeleteInfo;
  deleteDataSources: DeleteInfo;
  deleteEvents: DeleteInfo;
  deleteNations: DeleteInfo;
  deleteSports: DeleteInfo;
  updateAthletes: UpdateAthletesMutationResponse;
  updateAttempts: UpdateAttemptsMutationResponse;
  updateCompetitions: UpdateCompetitionsMutationResponse;
  updateDataSources: UpdateDataSourcesMutationResponse;
  updateEvents: UpdateEventsMutationResponse;
  updateNations: UpdateNationsMutationResponse;
  updateSports: UpdateSportsMutationResponse;
};


export type MutationCreateAthletesArgs = {
  input: Array<AthleteCreateInput>;
};


export type MutationCreateAttemptsArgs = {
  input: Array<AttemptCreateInput>;
};


export type MutationCreateCompetitionsArgs = {
  input: Array<CompetitionCreateInput>;
};


export type MutationCreateDataSourcesArgs = {
  input: Array<DataSourceCreateInput>;
};


export type MutationCreateEventsArgs = {
  input: Array<EventCreateInput>;
};


export type MutationCreateNationsArgs = {
  input: Array<NationCreateInput>;
};


export type MutationCreateSportsArgs = {
  input: Array<SportCreateInput>;
};


export type MutationDeleteAthletesArgs = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<AthleteWhere>;
};


export type MutationDeleteAttemptsArgs = {
  delete?: InputMaybe<AttemptDeleteInput>;
  where?: InputMaybe<AttemptWhere>;
};


export type MutationDeleteCompetitionsArgs = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<CompetitionWhere>;
};


export type MutationDeleteDataSourcesArgs = {
  delete?: InputMaybe<DataSourceDeleteInput>;
  where?: InputMaybe<DataSourceWhere>;
};


export type MutationDeleteEventsArgs = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<EventWhere>;
};


export type MutationDeleteNationsArgs = {
  delete?: InputMaybe<NationDeleteInput>;
  where?: InputMaybe<NationWhere>;
};


export type MutationDeleteSportsArgs = {
  delete?: InputMaybe<SportDeleteInput>;
  where?: InputMaybe<SportWhere>;
};


export type MutationUpdateAthletesArgs = {
  connect?: InputMaybe<AthleteConnectInput>;
  connectOrCreate?: InputMaybe<AthleteConnectOrCreateInput>;
  create?: InputMaybe<AthleteRelationInput>;
  delete?: InputMaybe<AthleteDeleteInput>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  update?: InputMaybe<AthleteUpdateInput>;
  where?: InputMaybe<AthleteWhere>;
};


export type MutationUpdateAttemptsArgs = {
  connect?: InputMaybe<AttemptConnectInput>;
  connectOrCreate?: InputMaybe<AttemptConnectOrCreateInput>;
  create?: InputMaybe<AttemptRelationInput>;
  delete?: InputMaybe<AttemptDeleteInput>;
  disconnect?: InputMaybe<AttemptDisconnectInput>;
  update?: InputMaybe<AttemptUpdateInput>;
  where?: InputMaybe<AttemptWhere>;
};


export type MutationUpdateCompetitionsArgs = {
  connect?: InputMaybe<CompetitionConnectInput>;
  connectOrCreate?: InputMaybe<CompetitionConnectOrCreateInput>;
  create?: InputMaybe<CompetitionRelationInput>;
  delete?: InputMaybe<CompetitionDeleteInput>;
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  update?: InputMaybe<CompetitionUpdateInput>;
  where?: InputMaybe<CompetitionWhere>;
};


export type MutationUpdateDataSourcesArgs = {
  connect?: InputMaybe<DataSourceConnectInput>;
  connectOrCreate?: InputMaybe<DataSourceConnectOrCreateInput>;
  create?: InputMaybe<DataSourceRelationInput>;
  delete?: InputMaybe<DataSourceDeleteInput>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
  update?: InputMaybe<DataSourceUpdateInput>;
  where?: InputMaybe<DataSourceWhere>;
};


export type MutationUpdateEventsArgs = {
  connect?: InputMaybe<EventConnectInput>;
  connectOrCreate?: InputMaybe<EventConnectOrCreateInput>;
  create?: InputMaybe<EventRelationInput>;
  delete?: InputMaybe<EventDeleteInput>;
  disconnect?: InputMaybe<EventDisconnectInput>;
  update?: InputMaybe<EventUpdateInput>;
  where?: InputMaybe<EventWhere>;
};


export type MutationUpdateNationsArgs = {
  connect?: InputMaybe<NationConnectInput>;
  connectOrCreate?: InputMaybe<NationConnectOrCreateInput>;
  create?: InputMaybe<NationRelationInput>;
  delete?: InputMaybe<NationDeleteInput>;
  disconnect?: InputMaybe<NationDisconnectInput>;
  update?: InputMaybe<NationUpdateInput>;
  where?: InputMaybe<NationWhere>;
};


export type MutationUpdateSportsArgs = {
  connect?: InputMaybe<SportConnectInput>;
  connectOrCreate?: InputMaybe<SportConnectOrCreateInput>;
  create?: InputMaybe<SportRelationInput>;
  delete?: InputMaybe<SportDeleteInput>;
  disconnect?: InputMaybe<SportDisconnectInput>;
  update?: InputMaybe<SportUpdateInput>;
  where?: InputMaybe<SportWhere>;
};

/** Represents a nation or country. */
export type Nation = {
  __typename?: 'Nation';
  /** The list of athletes representing this nation. */
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<NationAthleteAthletesAggregationSelection>;
  athletesConnection: NationAthletesConnection;
  /** The code representing the nation (e.g., ISO code). */
  code: Scalars['String']['output'];
  /** The list of competitions associated with this nation. */
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<NationCompetitionCompetitionsAggregationSelection>;
  competitionsConnection: NationCompetitionsConnection;
  /** The timestamp when the nation's profile was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the nation. */
  id: Scalars['ID']['output'];
  /** The name of the nation. */
  name?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the nation's profile was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates whether the nation's profile is verified. */
  verified: Scalars['Boolean']['output'];
};


/** Represents a nation or country. */
export type NationAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a nation or country. */
export type NationAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a nation or country. */
export type NationAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NationAthletesConnectionSort>>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};


/** Represents a nation or country. */
export type NationCompetitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a nation or country. */
export type NationCompetitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a nation or country. */
export type NationCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NationCompetitionsConnectionSort>>;
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
};

export type NationAggregateSelection = {
  __typename?: 'NationAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type NationAthleteAthletesAggregationSelection = {
  __typename?: 'NationAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NationAthleteAthletesNodeAggregateSelection>;
};

export type NationAthleteAthletesNodeAggregateSelection = {
  __typename?: 'NationAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type NationAthletesAggregateInput = {
  AND?: InputMaybe<Array<NationAthletesAggregateInput>>;
  NOT?: InputMaybe<NationAthletesAggregateInput>;
  OR?: InputMaybe<Array<NationAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<NationAthletesNodeAggregationWhereInput>;
};

export type NationAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type NationAthletesConnectOrCreateFieldInput = {
  onCreate: NationAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type NationAthletesConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type NationAthletesConnection = {
  __typename?: 'NationAthletesConnection';
  edges: Array<NationAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NationAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type NationAthletesConnectionWhere = {
  AND?: InputMaybe<Array<NationAthletesConnectionWhere>>;
  NOT?: InputMaybe<NationAthletesConnectionWhere>;
  OR?: InputMaybe<Array<NationAthletesConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type NationAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type NationAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};

export type NationAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};

export type NationAthletesFieldInput = {
  connect?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
};

export type NationAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NationAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NationAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NationAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NationAthletesRelationship = {
  __typename?: 'NationAthletesRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type NationAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type NationAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<NationAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NationAthletesDisconnectFieldInput>>;
  update?: InputMaybe<NationAthletesUpdateConnectionInput>;
  where?: InputMaybe<NationAthletesConnectionWhere>;
};

export type NationCompetitionCompetitionsAggregationSelection = {
  __typename?: 'NationCompetitionCompetitionsAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<NationCompetitionCompetitionsEdgeAggregateSelection>;
  node?: Maybe<NationCompetitionCompetitionsNodeAggregateSelection>;
};

export type NationCompetitionCompetitionsEdgeAggregateSelection = {
  __typename?: 'NationCompetitionCompetitionsEdgeAggregateSelection';
  city: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type NationCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: 'NationCompetitionCompetitionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type NationCompetitionsAggregateInput = {
  AND?: InputMaybe<Array<NationCompetitionsAggregateInput>>;
  NOT?: InputMaybe<NationCompetitionsAggregateInput>;
  OR?: InputMaybe<Array<NationCompetitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<NationCompetitionsEdgeAggregationWhereInput>;
  node?: InputMaybe<NationCompetitionsNodeAggregationWhereInput>;
};

export type NationCompetitionsConnectFieldInput = {
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  edge?: InputMaybe<CompetitionInNationCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type NationCompetitionsConnectOrCreateFieldInput = {
  onCreate: NationCompetitionsConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type NationCompetitionsConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<CompetitionInNationCreateInput>;
  node: CompetitionOnCreateInput;
};

export type NationCompetitionsConnection = {
  __typename?: 'NationCompetitionsConnection';
  edges: Array<NationCompetitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NationCompetitionsConnectionSort = {
  edge?: InputMaybe<CompetitionInNationSort>;
  node?: InputMaybe<CompetitionSort>;
};

export type NationCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<NationCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<NationCompetitionsConnectionWhere>;
  OR?: InputMaybe<Array<NationCompetitionsConnectionWhere>>;
  edge?: InputMaybe<CompetitionInNationWhere>;
  node?: InputMaybe<CompetitionWhere>;
};

export type NationCompetitionsCreateFieldInput = {
  edge?: InputMaybe<CompetitionInNationCreateInput>;
  node: CompetitionCreateInput;
};

export type NationCompetitionsDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
};

export type NationCompetitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
};

export type NationCompetitionsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<NationCompetitionsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<NationCompetitionsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<NationCompetitionsEdgeAggregationWhereInput>>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NationCompetitionsFieldInput = {
  connect?: InputMaybe<Array<NationCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationCompetitionsCreateFieldInput>>;
};

export type NationCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NationCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NationCompetitionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NationCompetitionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NationCompetitionsRelationship = CompetitionInNation & {
  __typename?: 'NationCompetitionsRelationship';
  /** The city where the competition took place. */
  city?: Maybe<Scalars['String']['output']>;
  /** The timestamp when this relationship was created. */
  createdAt: Scalars['DateTime']['output'];
  cursor: Scalars['String']['output'];
  node: Competition;
  /** The timestamp when this relationship was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NationCompetitionsUpdateConnectionInput = {
  edge?: InputMaybe<CompetitionInNationUpdateInput>;
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type NationCompetitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<NationCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NationCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NationCompetitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<NationCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NationCompetitionsDisconnectFieldInput>>;
  update?: InputMaybe<NationCompetitionsUpdateConnectionInput>;
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
};

export type NationConnectInput = {
  athletes?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
  competitions?: InputMaybe<Array<NationCompetitionsConnectFieldInput>>;
};

export type NationConnectOrCreateInput = {
  athletes?: InputMaybe<Array<NationAthletesConnectOrCreateFieldInput>>;
  competitions?: InputMaybe<Array<NationCompetitionsConnectOrCreateFieldInput>>;
};

export type NationConnectOrCreateWhere = {
  node: NationUniqueWhere;
};

export type NationConnectWhere = {
  node: NationWhere;
};

export type NationCreateInput = {
  athletes?: InputMaybe<NationAthletesFieldInput>;
  code: Scalars['String']['input'];
  competitions?: InputMaybe<NationCompetitionsFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type NationDeleteInput = {
  athletes?: InputMaybe<Array<NationAthletesDeleteFieldInput>>;
  competitions?: InputMaybe<Array<NationCompetitionsDeleteFieldInput>>;
};

export type NationDisconnectInput = {
  athletes?: InputMaybe<Array<NationAthletesDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<NationCompetitionsDisconnectFieldInput>>;
};

export type NationEdge = {
  __typename?: 'NationEdge';
  cursor: Scalars['String']['output'];
  node: Nation;
};

export type NationOnCreateInput = {
  code: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
};

export type NationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more NationSort objects to sort Nations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<NationSort>>;
};

export type NationRelationInput = {
  athletes?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
  competitions?: InputMaybe<Array<NationCompetitionsCreateFieldInput>>;
};

/** Fields to sort Nations by. The order in which sorts are applied is not guaranteed when specifying many fields in one NationSort object. */
export type NationSort = {
  code?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type NationUniqueWhere = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NationUpdateInput = {
  athletes?: InputMaybe<Array<NationAthletesUpdateFieldInput>>;
  code?: InputMaybe<Scalars['String']['input']>;
  competitions?: InputMaybe<Array<NationCompetitionsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NationWhere = {
  AND?: InputMaybe<Array<NationWhere>>;
  NOT?: InputMaybe<NationWhere>;
  OR?: InputMaybe<Array<NationWhere>>;
  athletesAggregate?: InputMaybe<NationAthletesAggregateInput>;
  /** Return Nations where all of the related NationAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where none of the related NationAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where one of the related NationAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where some of the related NationAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Nations where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Nations where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Nations where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  code_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  code_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  code_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  competitionsAggregate?: InputMaybe<NationCompetitionsAggregateInput>;
  /** Return Nations where all of the related NationCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where none of the related NationCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where one of the related NationCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where some of the related NationCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return Nations where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return Nations where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return Nations where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NationsConnection = {
  __typename?: 'NationsConnection';
  edges: Array<NationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  athletes: Array<Athlete>;
  athletesAggregate: AthleteAggregateSelection;
  athletesConnection: AthletesConnection;
  attempts: Array<Attempt>;
  attemptsAggregate: AttemptAggregateSelection;
  attemptsConnection: AttemptsConnection;
  competitions: Array<Competition>;
  competitionsAggregate: CompetitionAggregateSelection;
  competitionsConnection: CompetitionsConnection;
  dataSources: Array<DataSource>;
  dataSourcesAggregate: DataSourceAggregateSelection;
  dataSourcesConnection: DataSourcesConnection;
  events: Array<Event>;
  eventsAggregate: EventAggregateSelection;
  eventsConnection: EventsConnection;
  nations: Array<Nation>;
  nationsAggregate: NationAggregateSelection;
  nationsConnection: NationsConnection;
  sports: Array<Sport>;
  sportsAggregate: SportAggregateSelection;
  sportsConnection: SportsConnection;
};


export type QueryAthletesArgs = {
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AthleteSort>>>;
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAttemptsArgs = {
  options?: InputMaybe<AttemptOptions>;
  where?: InputMaybe<AttemptWhere>;
};


export type QueryAttemptsAggregateArgs = {
  where?: InputMaybe<AttemptWhere>;
};


export type QueryAttemptsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AttemptSort>>>;
  where?: InputMaybe<AttemptWhere>;
};


export type QueryCompetitionsArgs = {
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


export type QueryCompetitionsAggregateArgs = {
  where?: InputMaybe<CompetitionWhere>;
};


export type QueryCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CompetitionSort>>>;
  where?: InputMaybe<CompetitionWhere>;
};


export type QueryDataSourcesArgs = {
  options?: InputMaybe<DataSourceOptions>;
  where?: InputMaybe<DataSourceWhere>;
};


export type QueryDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
};


export type QueryDataSourcesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DataSourceSort>>>;
  where?: InputMaybe<DataSourceWhere>;
};


export type QueryEventsArgs = {
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type QueryEventsAggregateArgs = {
  where?: InputMaybe<EventWhere>;
};


export type QueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<EventSort>>>;
  where?: InputMaybe<EventWhere>;
};


export type QueryNationsArgs = {
  options?: InputMaybe<NationOptions>;
  where?: InputMaybe<NationWhere>;
};


export type QueryNationsAggregateArgs = {
  where?: InputMaybe<NationWhere>;
};


export type QueryNationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<NationSort>>>;
  where?: InputMaybe<NationWhere>;
};


export type QuerySportsArgs = {
  options?: InputMaybe<SportOptions>;
  where?: InputMaybe<SportWhere>;
};


export type QuerySportsAggregateArgs = {
  where?: InputMaybe<SportWhere>;
};


export type QuerySportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SportSort>>>;
  where?: InputMaybe<SportWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

/** Represents a sports discipline or category. */
export type Sport = {
  __typename?: 'Sport';
  /** The list of athletes who participated in this sport. */
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<SportAthleteAthletesAggregationSelection>;
  athletesConnection: SportAthletesConnection;
  /** The list of competitions associated with this sport. */
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<SportCompetitionCompetitionsAggregationSelection>;
  competitionsConnection: SportCompetitionsConnection;
  /** The timestamp when the sport's profile was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the sport. */
  id: Scalars['ID']['output'];
  /** The name of the sport. */
  name: Scalars['String']['output'];
  /** The timestamp when the sport's profile was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates whether the sport's profile is verified. */
  verified: Scalars['Boolean']['output'];
};


/** Represents a sports discipline or category. */
export type SportAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a sports discipline or category. */
export type SportAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


/** Represents a sports discipline or category. */
export type SportAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SportAthletesConnectionSort>>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};


/** Represents a sports discipline or category. */
export type SportCompetitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompetitionOptions>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a sports discipline or category. */
export type SportCompetitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompetitionWhere>;
};


/** Represents a sports discipline or category. */
export type SportCompetitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SportCompetitionsConnectionSort>>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportAggregateSelection = {
  __typename?: 'SportAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SportAthleteAthletesAggregationSelection = {
  __typename?: 'SportAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SportAthleteAthletesNodeAggregateSelection>;
};

export type SportAthleteAthletesNodeAggregateSelection = {
  __typename?: 'SportAthleteAthletesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SportAthletesAggregateInput = {
  AND?: InputMaybe<Array<SportAthletesAggregateInput>>;
  NOT?: InputMaybe<SportAthletesAggregateInput>;
  OR?: InputMaybe<Array<SportAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SportAthletesNodeAggregationWhereInput>;
};

export type SportAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type SportAthletesConnectOrCreateFieldInput = {
  onCreate: SportAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type SportAthletesConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type SportAthletesConnection = {
  __typename?: 'SportAthletesConnection';
  edges: Array<SportAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SportAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type SportAthletesConnectionWhere = {
  AND?: InputMaybe<Array<SportAthletesConnectionWhere>>;
  NOT?: InputMaybe<SportAthletesConnectionWhere>;
  OR?: InputMaybe<Array<SportAthletesConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type SportAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type SportAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};

export type SportAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};

export type SportAthletesFieldInput = {
  connect?: InputMaybe<Array<SportAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportAthletesCreateFieldInput>>;
};

export type SportAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SportAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SportAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SportAthletesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SportAthletesRelationship = {
  __typename?: 'SportAthletesRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type SportAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type SportAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<SportAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<SportAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SportAthletesDisconnectFieldInput>>;
  update?: InputMaybe<SportAthletesUpdateConnectionInput>;
  where?: InputMaybe<SportAthletesConnectionWhere>;
};

export type SportCompetitionCompetitionsAggregationSelection = {
  __typename?: 'SportCompetitionCompetitionsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SportCompetitionCompetitionsNodeAggregateSelection>;
};

export type SportCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: 'SportCompetitionCompetitionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SportCompetitionsAggregateInput = {
  AND?: InputMaybe<Array<SportCompetitionsAggregateInput>>;
  NOT?: InputMaybe<SportCompetitionsAggregateInput>;
  OR?: InputMaybe<Array<SportCompetitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SportCompetitionsNodeAggregationWhereInput>;
};

export type SportCompetitionsConnectFieldInput = {
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompetitionConnectWhere>;
};

export type SportCompetitionsConnectOrCreateFieldInput = {
  onCreate: SportCompetitionsConnectOrCreateFieldInputOnCreate;
  where: CompetitionConnectOrCreateWhere;
};

export type SportCompetitionsConnectOrCreateFieldInputOnCreate = {
  node: CompetitionOnCreateInput;
};

export type SportCompetitionsConnection = {
  __typename?: 'SportCompetitionsConnection';
  edges: Array<SportCompetitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SportCompetitionsConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type SportCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<SportCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<SportCompetitionsConnectionWhere>;
  OR?: InputMaybe<Array<SportCompetitionsConnectionWhere>>;
  node?: InputMaybe<CompetitionWhere>;
};

export type SportCompetitionsCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type SportCompetitionsDeleteFieldInput = {
  delete?: InputMaybe<CompetitionDeleteInput>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportCompetitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportCompetitionsFieldInput = {
  connect?: InputMaybe<Array<SportCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportCompetitionsCreateFieldInput>>;
};

export type SportCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SportCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SportCompetitionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SportCompetitionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SportCompetitionsRelationship = {
  __typename?: 'SportCompetitionsRelationship';
  cursor: Scalars['String']['output'];
  node: Competition;
};

export type SportCompetitionsUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type SportCompetitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<SportCompetitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SportCompetitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SportCompetitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<SportCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SportCompetitionsDisconnectFieldInput>>;
  update?: InputMaybe<SportCompetitionsUpdateConnectionInput>;
  where?: InputMaybe<SportCompetitionsConnectionWhere>;
};

export type SportConnectInput = {
  athletes?: InputMaybe<Array<SportAthletesConnectFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsConnectFieldInput>>;
};

export type SportConnectOrCreateInput = {
  athletes?: InputMaybe<Array<SportAthletesConnectOrCreateFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsConnectOrCreateFieldInput>>;
};

export type SportConnectOrCreateWhere = {
  node: SportUniqueWhere;
};

export type SportConnectWhere = {
  node: SportWhere;
};

export type SportCreateInput = {
  athletes?: InputMaybe<SportAthletesFieldInput>;
  competitions?: InputMaybe<SportCompetitionsFieldInput>;
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type SportDeleteInput = {
  athletes?: InputMaybe<Array<SportAthletesDeleteFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsDeleteFieldInput>>;
};

export type SportDisconnectInput = {
  athletes?: InputMaybe<Array<SportAthletesDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsDisconnectFieldInput>>;
};

export type SportEdge = {
  __typename?: 'SportEdge';
  cursor: Scalars['String']['output'];
  node: Sport;
};

export type SportOnCreateInput = {
  name: Scalars['String']['input'];
  verified?: Scalars['Boolean']['input'];
};

export type SportOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more SportSort objects to sort Sports by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SportSort>>;
};

export type SportRelationInput = {
  athletes?: InputMaybe<Array<SportAthletesCreateFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsCreateFieldInput>>;
};

/** Fields to sort Sports by. The order in which sorts are applied is not guaranteed when specifying many fields in one SportSort object. */
export type SportSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type SportUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SportUpdateInput = {
  athletes?: InputMaybe<Array<SportAthletesUpdateFieldInput>>;
  competitions?: InputMaybe<Array<SportCompetitionsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SportWhere = {
  AND?: InputMaybe<Array<SportWhere>>;
  NOT?: InputMaybe<SportWhere>;
  OR?: InputMaybe<Array<SportWhere>>;
  athletesAggregate?: InputMaybe<SportAthletesAggregateInput>;
  /** Return Sports where all of the related SportAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where none of the related SportAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where one of the related SportAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where some of the related SportAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<SportAthletesConnectionWhere>;
  /** Return Sports where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Sports where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Sports where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Sports where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  competitionsAggregate?: InputMaybe<SportCompetitionsAggregateInput>;
  /** Return Sports where all of the related SportCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where none of the related SportCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where one of the related SportCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where some of the related SportCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<SportCompetitionsConnectionWhere>;
  /** Return Sports where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return Sports where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return Sports where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return Sports where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SportsConnection = {
  __typename?: 'SportsConnection';
  edges: Array<SportEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateAthletesMutationResponse = {
  __typename?: 'UpdateAthletesMutationResponse';
  athletes: Array<Athlete>;
  info: UpdateInfo;
};

export type UpdateAttemptsMutationResponse = {
  __typename?: 'UpdateAttemptsMutationResponse';
  attempts: Array<Attempt>;
  info: UpdateInfo;
};

export type UpdateCompetitionsMutationResponse = {
  __typename?: 'UpdateCompetitionsMutationResponse';
  competitions: Array<Competition>;
  info: UpdateInfo;
};

export type UpdateDataSourcesMutationResponse = {
  __typename?: 'UpdateDataSourcesMutationResponse';
  dataSources: Array<DataSource>;
  info: UpdateInfo;
};

export type UpdateEventsMutationResponse = {
  __typename?: 'UpdateEventsMutationResponse';
  events: Array<Event>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateNationsMutationResponse = {
  __typename?: 'UpdateNationsMutationResponse';
  info: UpdateInfo;
  nations: Array<Nation>;
};

export type UpdateSportsMutationResponse = {
  __typename?: 'UpdateSportsMutationResponse';
  info: UpdateInfo;
  sports: Array<Sport>;
};

export type DetailedCompetitionResultsQueryVariables = Exact<{
  where?: InputMaybe<CompetitionWhere>;
  competitionsConnectionWhere2?: InputMaybe<AthleteCompetitionsConnectionWhere>;
}>;


export type DetailedCompetitionResultsQuery = { __typename?: 'Query', competitions: Array<{ __typename?: 'Competition', id: string, name: string, date: any, sports: Array<{ __typename?: 'Sport', name: string }>, dataSourcesConnection: { __typename?: 'CompetitionDataSourcesConnection', edges: Array<{ __typename?: 'CompetitionDataSourcesRelationship', entityId: string, node: { __typename?: 'DataSource', name: string } }> }, events: Array<{ __typename?: 'Event', id: string, genderClass: string, weightClass: string, attempts: Array<{ __typename?: 'Attempt', successful: boolean, weight: number, number: number, nation: { __typename?: 'Nation', code: string }, athlete: { __typename?: 'Athlete', birthday: any, name: string, verified: boolean, id: string, competitionsConnection: { __typename?: 'AthleteCompetitionsConnection', edges: Array<{ __typename?: 'AthleteCompetitionsRelationship', rank?: number | null, group: string, bodyweight: number }> } } }> }> }> };


export const DetailedCompetitionResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailedCompetitionResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompetitionWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"competitionsConnectionWhere2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AthleteCompetitionsConnectionWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"competitions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"sports"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dataSourcesConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityId"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"genderClass"}},{"kind":"Field","name":{"kind":"Name","value":"weightClass"}},{"kind":"Field","name":{"kind":"Name","value":"attempts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"successful"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"nation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"athlete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"competitionsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"competitionsConnectionWhere2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"bodyweight"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<DetailedCompetitionResultsQuery, DetailedCompetitionResultsQueryVariables>;