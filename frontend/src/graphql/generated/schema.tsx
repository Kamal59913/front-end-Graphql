import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  EmailAddress: { input: any; output: any; }
};

export type AddUsersTypeInput = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  message?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<LoggedInUserType>;
};

export type Error = {
  __typename?: 'Error';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type LoggedInUserType = {
  __typename?: 'LoggedInUserType';
  email: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type LoginUserType = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type MeQueryTypes = {
  __typename?: 'MeQueryTypes';
  errors?: Maybe<Array<Maybe<Error>>>;
  user?: Maybe<User>;
};

export type ReponseType = {
  __typename?: 'ReponseType';
  errors?: Maybe<Array<Maybe<Error>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type UpdateUserTypeInput = {
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'mutation';
  addUser?: Maybe<ReponseType>;
  login?: Maybe<AuthPayload>;
  updateUser?: Maybe<ReponseType>;
};


export type MutationAddUserArgs = {
  input?: InputMaybe<AddUsersTypeInput>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginUserType>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserTypeInput>;
};

export type Query = {
  __typename?: 'query';
  ME?: Maybe<MeQueryTypes>;
  getusersList?: Maybe<ReponseType>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'query', ME?: { __typename?: 'MeQueryTypes', user?: { __typename?: 'User', username: string, email: string } | null, errors?: Array<{ __typename?: 'Error', message?: string | null, code?: string | null } | null> | null } | null };


export const MeDocument = gql`
    query ME {
  ME {
    user {
      username
      email
    }
    errors {
      message
      code
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;