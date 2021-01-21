/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  timestamp: any;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "achievement" */
export type Achievement = {
  __typename?: 'achievement';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "achievement" */
export type Achievement_Aggregate = {
  __typename?: 'achievement_aggregate';
  aggregate?: Maybe<Achievement_Aggregate_Fields>;
  nodes: Array<Achievement>;
};

/** aggregate fields of "achievement" */
export type Achievement_Aggregate_Fields = {
  __typename?: 'achievement_aggregate_fields';
  avg?: Maybe<Achievement_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Achievement_Max_Fields>;
  min?: Maybe<Achievement_Min_Fields>;
  stddev?: Maybe<Achievement_Stddev_Fields>;
  stddev_pop?: Maybe<Achievement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Achievement_Stddev_Samp_Fields>;
  sum?: Maybe<Achievement_Sum_Fields>;
  var_pop?: Maybe<Achievement_Var_Pop_Fields>;
  var_samp?: Maybe<Achievement_Var_Samp_Fields>;
  variance?: Maybe<Achievement_Variance_Fields>;
};


/** aggregate fields of "achievement" */
export type Achievement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Achievement_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "achievement" */
export type Achievement_Aggregate_Order_By = {
  avg?: Maybe<Achievement_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Achievement_Max_Order_By>;
  min?: Maybe<Achievement_Min_Order_By>;
  stddev?: Maybe<Achievement_Stddev_Order_By>;
  stddev_pop?: Maybe<Achievement_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Achievement_Stddev_Samp_Order_By>;
  sum?: Maybe<Achievement_Sum_Order_By>;
  var_pop?: Maybe<Achievement_Var_Pop_Order_By>;
  var_samp?: Maybe<Achievement_Var_Samp_Order_By>;
  variance?: Maybe<Achievement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "achievement" */
export type Achievement_Arr_Rel_Insert_Input = {
  data: Array<Achievement_Insert_Input>;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};

/** aggregate avg on columns */
export type Achievement_Avg_Fields = {
  __typename?: 'achievement_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "achievement" */
export type Achievement_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "achievement". All fields are combined with a logical 'AND'. */
export type Achievement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Achievement_Bool_Exp>>>;
  _not?: Maybe<Achievement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Achievement_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "achievement" */
export enum Achievement_Constraint {
  /** unique or primary key constraint */
  AcheivementNameKey = 'Acheivement_name_key',
  /** unique or primary key constraint */
  AcheivementPkey = 'Acheivement_pkey'
}

/** input type for incrementing integer column in table "achievement" */
export type Achievement_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "achievement" */
export type Achievement_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Achievement_Max_Fields = {
  __typename?: 'achievement_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "achievement" */
export type Achievement_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Achievement_Min_Fields = {
  __typename?: 'achievement_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "achievement" */
export type Achievement_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "achievement" */
export type Achievement_Mutation_Response = {
  __typename?: 'achievement_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Achievement>;
};

/** input type for inserting object relation for remote table "achievement" */
export type Achievement_Obj_Rel_Insert_Input = {
  data: Achievement_Insert_Input;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};

/** on conflict condition type for table "achievement" */
export type Achievement_On_Conflict = {
  constraint: Achievement_Constraint;
  update_columns: Array<Achievement_Update_Column>;
  where?: Maybe<Achievement_Bool_Exp>;
};

/** ordering options when selecting data from "achievement" */
export type Achievement_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "achievement" */
export type Achievement_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "achievement" */
export enum Achievement_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "achievement" */
export type Achievement_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Achievement_Stddev_Fields = {
  __typename?: 'achievement_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "achievement" */
export type Achievement_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Achievement_Stddev_Pop_Fields = {
  __typename?: 'achievement_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "achievement" */
export type Achievement_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Achievement_Stddev_Samp_Fields = {
  __typename?: 'achievement_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "achievement" */
export type Achievement_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Achievement_Sum_Fields = {
  __typename?: 'achievement_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "achievement" */
export type Achievement_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "achievement" */
export enum Achievement_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Achievement_Var_Pop_Fields = {
  __typename?: 'achievement_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "achievement" */
export type Achievement_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Achievement_Var_Samp_Fields = {
  __typename?: 'achievement_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "achievement" */
export type Achievement_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Achievement_Variance_Fields = {
  __typename?: 'achievement_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "achievement" */
export type Achievement_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "activities" */
export type Activities = {
  __typename?: 'activities';
  activity_id: Scalars['Int'];
  caption?: Maybe<Scalars['String']>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  geofence: Geofences;
  geofence_id: Scalars['Int'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregated array relationship */
  likes_aggregate: Likes_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};


/** columns and relationships of "activities" */
export type ActivitiesCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};

/** aggregated selection of "activities" */
export type Activities_Aggregate = {
  __typename?: 'activities_aggregate';
  aggregate?: Maybe<Activities_Aggregate_Fields>;
  nodes: Array<Activities>;
};

/** aggregate fields of "activities" */
export type Activities_Aggregate_Fields = {
  __typename?: 'activities_aggregate_fields';
  avg?: Maybe<Activities_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Activities_Max_Fields>;
  min?: Maybe<Activities_Min_Fields>;
  stddev?: Maybe<Activities_Stddev_Fields>;
  stddev_pop?: Maybe<Activities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Activities_Stddev_Samp_Fields>;
  sum?: Maybe<Activities_Sum_Fields>;
  var_pop?: Maybe<Activities_Var_Pop_Fields>;
  var_samp?: Maybe<Activities_Var_Samp_Fields>;
  variance?: Maybe<Activities_Variance_Fields>;
};


/** aggregate fields of "activities" */
export type Activities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities" */
export type Activities_Aggregate_Order_By = {
  avg?: Maybe<Activities_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Activities_Max_Order_By>;
  min?: Maybe<Activities_Min_Order_By>;
  stddev?: Maybe<Activities_Stddev_Order_By>;
  stddev_pop?: Maybe<Activities_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Activities_Stddev_Samp_Order_By>;
  sum?: Maybe<Activities_Sum_Order_By>;
  var_pop?: Maybe<Activities_Var_Pop_Order_By>;
  var_samp?: Maybe<Activities_Var_Samp_Order_By>;
  variance?: Maybe<Activities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "activities" */
export type Activities_Arr_Rel_Insert_Input = {
  data: Array<Activities_Insert_Input>;
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** aggregate avg on columns */
export type Activities_Avg_Fields = {
  __typename?: 'activities_avg_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "activities" */
export type Activities_Avg_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  _not?: Maybe<Activities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  activity_id?: Maybe<Int_Comparison_Exp>;
  caption?: Maybe<String_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  geofence?: Maybe<Geofences_Bool_Exp>;
  geofence_id?: Maybe<Int_Comparison_Exp>;
  likes?: Maybe<Likes_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities" */
export enum Activities_Constraint {
  /** unique or primary key constraint */
  ActivityPkey = 'Activity_pkey'
}

/** input type for incrementing integer column in table "activities" */
export type Activities_Inc_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  geofence_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geofence?: Maybe<Geofences_Obj_Rel_Insert_Input>;
  geofence_id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Likes_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Activities_Max_Fields = {
  __typename?: 'activities_max_fields';
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geofence_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  activity_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geofence_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  activity_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "activities" */
export type Activities_Mutation_Response = {
  __typename?: 'activities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Activities>;
};

/** input type for inserting object relation for remote table "activities" */
export type Activities_Obj_Rel_Insert_Input = {
  data: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};

/** on conflict condition type for table "activities" */
export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns: Array<Activities_Update_Column>;
  where?: Maybe<Activities_Bool_Exp>;
};

/** ordering options when selecting data from "activities" */
export type Activities_Order_By = {
  activity_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  geofence?: Maybe<Geofences_Order_By>;
  geofence_id?: Maybe<Order_By>;
  likes_aggregate?: Maybe<Likes_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "activities" */
export type Activities_Pk_Columns_Input = {
  activity_id: Scalars['Int'];
};

/** select columns of table "activities" */
export enum Activities_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GeofenceId = 'geofence_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "activities" */
export type Activities_Set_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geofence_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Activities_Stddev_Fields = {
  __typename?: 'activities_stddev_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "activities" */
export type Activities_Stddev_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Activities_Stddev_Pop_Fields = {
  __typename?: 'activities_stddev_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "activities" */
export type Activities_Stddev_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Activities_Stddev_Samp_Fields = {
  __typename?: 'activities_stddev_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "activities" */
export type Activities_Stddev_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Activities_Sum_Fields = {
  __typename?: 'activities_sum_fields';
  activity_id?: Maybe<Scalars['Int']>;
  geofence_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "activities" */
export type Activities_Sum_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** update columns of table "activities" */
export enum Activities_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GeofenceId = 'geofence_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Activities_Var_Pop_Fields = {
  __typename?: 'activities_var_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "activities" */
export type Activities_Var_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Activities_Var_Samp_Fields = {
  __typename?: 'activities_var_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "activities" */
export type Activities_Var_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Activities_Variance_Fields = {
  __typename?: 'activities_variance_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "activities" */
export type Activities_Variance_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Categories_Max_Order_By>;
  min?: Maybe<Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoryNameKey = 'Category_name_key',
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

export enum Categories_Enum {
  /** The culture category */
  Culture = 'CULTURE',
  /** The education category */
  Education = 'EDUCATION',
  /** The exercise category */
  Exercise = 'EXERCISE',
  /** The social category */
  Social = 'SOCIAL'
}

/** expression to compare columns of type categories_enum. All fields are combined with logical 'AND'. */
export type Categories_Enum_Comparison_Exp = {
  _eq?: Maybe<Categories_Enum>;
  _in?: Maybe<Array<Categories_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Categories_Enum>;
  _nin?: Maybe<Array<Categories_Enum>>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "categories" */
export type Categories_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** An object relationship */
  activity: Activities;
  activity_id: Scalars['Int'];
  comment_id: Scalars['Int'];
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<Comments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
  stddev?: Maybe<Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Comments_Sum_Fields>;
  var_pop?: Maybe<Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Comments_Var_Samp_Fields>;
  variance?: Maybe<Comments_Variance_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: Maybe<Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comments_Max_Order_By>;
  min?: Maybe<Comments_Min_Order_By>;
  stddev?: Maybe<Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Comments_Sum_Order_By>;
  var_pop?: Maybe<Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Comments_Var_Samp_Order_By>;
  variance?: Maybe<Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  activity?: Maybe<Activities_Bool_Exp>;
  activity_id?: Maybe<Int_Comparison_Exp>;
  comment_id?: Maybe<Int_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'Comments_pkey'
}

/** input type for incrementing integer column in table "comments" */
export type Comments_Inc_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  activity?: Maybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  activity?: Maybe<Activities_Order_By>;
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
  comment_id: Scalars['Int'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "followings" */
export type Followings = {
  __typename?: 'followings';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  follower: Users;
  following_id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "followings" */
export type Followings_Aggregate = {
  __typename?: 'followings_aggregate';
  aggregate?: Maybe<Followings_Aggregate_Fields>;
  nodes: Array<Followings>;
};

/** aggregate fields of "followings" */
export type Followings_Aggregate_Fields = {
  __typename?: 'followings_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Followings_Max_Fields>;
  min?: Maybe<Followings_Min_Fields>;
};


/** aggregate fields of "followings" */
export type Followings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Followings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "followings" */
export type Followings_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Followings_Max_Order_By>;
  min?: Maybe<Followings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "followings" */
export type Followings_Arr_Rel_Insert_Input = {
  data: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "followings". All fields are combined with a logical 'AND'. */
export type Followings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Followings_Bool_Exp>>>;
  _not?: Maybe<Followings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Followings_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  follower?: Maybe<Users_Bool_Exp>;
  following_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "followings" */
export enum Followings_Constraint {
  /** unique or primary key constraint */
  FollowingsPkey = 'Followings_pkey'
}

/** input type for inserting data into table "followings" */
export type Followings_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  follower?: Maybe<Users_Obj_Rel_Insert_Input>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Followings_Max_Fields = {
  __typename?: 'followings_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "followings" */
export type Followings_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Followings_Min_Fields = {
  __typename?: 'followings_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "followings" */
export type Followings_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "followings" */
export type Followings_Mutation_Response = {
  __typename?: 'followings_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Followings>;
};

/** input type for inserting object relation for remote table "followings" */
export type Followings_Obj_Rel_Insert_Input = {
  data: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

/** on conflict condition type for table "followings" */
export type Followings_On_Conflict = {
  constraint: Followings_Constraint;
  update_columns: Array<Followings_Update_Column>;
  where?: Maybe<Followings_Bool_Exp>;
};

/** ordering options when selecting data from "followings" */
export type Followings_Order_By = {
  created_at?: Maybe<Order_By>;
  follower?: Maybe<Users_Order_By>;
  following_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "followings" */
export type Followings_Pk_Columns_Input = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "followings" */
export enum Followings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowingId = 'following_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "followings" */
export type Followings_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "followings" */
export enum Followings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowingId = 'following_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "geofence_variants" */
export type Geofence_Variants = {
  __typename?: 'geofence_variants';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  geofences: Array<Geofences>;
  /** An aggregated array relationship */
  geofences_aggregate: Geofences_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "geofence_variants" */
export type Geofence_VariantsGeofencesArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


/** columns and relationships of "geofence_variants" */
export type Geofence_VariantsGeofences_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};

/** aggregated selection of "geofence_variants" */
export type Geofence_Variants_Aggregate = {
  __typename?: 'geofence_variants_aggregate';
  aggregate?: Maybe<Geofence_Variants_Aggregate_Fields>;
  nodes: Array<Geofence_Variants>;
};

/** aggregate fields of "geofence_variants" */
export type Geofence_Variants_Aggregate_Fields = {
  __typename?: 'geofence_variants_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Geofence_Variants_Max_Fields>;
  min?: Maybe<Geofence_Variants_Min_Fields>;
};


/** aggregate fields of "geofence_variants" */
export type Geofence_Variants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geofence_Variants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "geofence_variants" */
export type Geofence_Variants_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Geofence_Variants_Max_Order_By>;
  min?: Maybe<Geofence_Variants_Min_Order_By>;
};

/** input type for inserting array relation for remote table "geofence_variants" */
export type Geofence_Variants_Arr_Rel_Insert_Input = {
  data: Array<Geofence_Variants_Insert_Input>;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};

/** Boolean expression to filter rows from the table "geofence_variants". All fields are combined with a logical 'AND'. */
export type Geofence_Variants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Geofence_Variants_Bool_Exp>>>;
  _not?: Maybe<Geofence_Variants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Geofence_Variants_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  geofences?: Maybe<Geofences_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "geofence_variants" */
export enum Geofence_Variants_Constraint {
  /** unique or primary key constraint */
  GeoFenceCategoriesPkey = 'geo_fence_categories_pkey'
}

export enum Geofence_Variants_Enum {
  /** Circle geofence */
  Circle = 'CIRCLE',
  /** Polygon geofence */
  Polygon = 'POLYGON'
}

/** expression to compare columns of type geofence_variants_enum. All fields are combined with logical 'AND'. */
export type Geofence_Variants_Enum_Comparison_Exp = {
  _eq?: Maybe<Geofence_Variants_Enum>;
  _in?: Maybe<Array<Geofence_Variants_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Geofence_Variants_Enum>;
  _nin?: Maybe<Array<Geofence_Variants_Enum>>;
};

/** input type for inserting data into table "geofence_variants" */
export type Geofence_Variants_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  geofences?: Maybe<Geofences_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Geofence_Variants_Max_Fields = {
  __typename?: 'geofence_variants_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "geofence_variants" */
export type Geofence_Variants_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Geofence_Variants_Min_Fields = {
  __typename?: 'geofence_variants_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "geofence_variants" */
export type Geofence_Variants_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "geofence_variants" */
export type Geofence_Variants_Mutation_Response = {
  __typename?: 'geofence_variants_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Geofence_Variants>;
};

/** input type for inserting object relation for remote table "geofence_variants" */
export type Geofence_Variants_Obj_Rel_Insert_Input = {
  data: Geofence_Variants_Insert_Input;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};

/** on conflict condition type for table "geofence_variants" */
export type Geofence_Variants_On_Conflict = {
  constraint: Geofence_Variants_Constraint;
  update_columns: Array<Geofence_Variants_Update_Column>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};

/** ordering options when selecting data from "geofence_variants" */
export type Geofence_Variants_Order_By = {
  description?: Maybe<Order_By>;
  geofences_aggregate?: Maybe<Geofences_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "geofence_variants" */
export type Geofence_Variants_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "geofence_variants" */
export enum Geofence_Variants_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "geofence_variants" */
export type Geofence_Variants_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "geofence_variants" */
export enum Geofence_Variants_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "geofences" */
export type Geofences = {
  __typename?: 'geofences';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregated array relationship */
  activities_aggregate: Activities_Aggregate;
  category: Categories_Enum;
  /** Only for polygons */
  coordinates?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  geofenceByCategory: Categories;
  /** An object relationship */
  geofence_variant: Geofence_Variants;
  id: Scalars['Int'];
  latitude: Scalars['float8'];
  longitude: Scalars['float8'];
  name: Scalars['String'];
  radius: Scalars['float8'];
  updated_at: Scalars['timestamptz'];
  variant: Geofence_Variants_Enum;
};


/** columns and relationships of "geofences" */
export type GeofencesActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** columns and relationships of "geofences" */
export type GeofencesActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};

/** aggregated selection of "geofences" */
export type Geofences_Aggregate = {
  __typename?: 'geofences_aggregate';
  aggregate?: Maybe<Geofences_Aggregate_Fields>;
  nodes: Array<Geofences>;
};

/** aggregate fields of "geofences" */
export type Geofences_Aggregate_Fields = {
  __typename?: 'geofences_aggregate_fields';
  avg?: Maybe<Geofences_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Geofences_Max_Fields>;
  min?: Maybe<Geofences_Min_Fields>;
  stddev?: Maybe<Geofences_Stddev_Fields>;
  stddev_pop?: Maybe<Geofences_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geofences_Stddev_Samp_Fields>;
  sum?: Maybe<Geofences_Sum_Fields>;
  var_pop?: Maybe<Geofences_Var_Pop_Fields>;
  var_samp?: Maybe<Geofences_Var_Samp_Fields>;
  variance?: Maybe<Geofences_Variance_Fields>;
};


/** aggregate fields of "geofences" */
export type Geofences_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geofences_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "geofences" */
export type Geofences_Aggregate_Order_By = {
  avg?: Maybe<Geofences_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geofences_Max_Order_By>;
  min?: Maybe<Geofences_Min_Order_By>;
  stddev?: Maybe<Geofences_Stddev_Order_By>;
  stddev_pop?: Maybe<Geofences_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geofences_Stddev_Samp_Order_By>;
  sum?: Maybe<Geofences_Sum_Order_By>;
  var_pop?: Maybe<Geofences_Var_Pop_Order_By>;
  var_samp?: Maybe<Geofences_Var_Samp_Order_By>;
  variance?: Maybe<Geofences_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "geofences" */
export type Geofences_Arr_Rel_Insert_Input = {
  data: Array<Geofences_Insert_Input>;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};

/** aggregate avg on columns */
export type Geofences_Avg_Fields = {
  __typename?: 'geofences_avg_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "geofences" */
export type Geofences_Avg_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "geofences". All fields are combined with a logical 'AND'. */
export type Geofences_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Geofences_Bool_Exp>>>;
  _not?: Maybe<Geofences_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Geofences_Bool_Exp>>>;
  activities?: Maybe<Activities_Bool_Exp>;
  category?: Maybe<Categories_Enum_Comparison_Exp>;
  coordinates?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  geofenceByCategory?: Maybe<Categories_Bool_Exp>;
  geofence_variant?: Maybe<Geofence_Variants_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  radius?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  variant?: Maybe<Geofence_Variants_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "geofences" */
export enum Geofences_Constraint {
  /** unique or primary key constraint */
  GeofencesPkey = 'geofences_pkey'
}

/** input type for incrementing integer column in table "geofences" */
export type Geofences_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  radius?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "geofences" */
export type Geofences_Insert_Input = {
  activities?: Maybe<Activities_Arr_Rel_Insert_Input>;
  category?: Maybe<Categories_Enum>;
  coordinates?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  geofenceByCategory?: Maybe<Categories_Obj_Rel_Insert_Input>;
  geofence_variant?: Maybe<Geofence_Variants_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant?: Maybe<Geofence_Variants_Enum>;
};

/** aggregate max on columns */
export type Geofences_Max_Fields = {
  __typename?: 'geofences_max_fields';
  coordinates?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "geofences" */
export type Geofences_Max_Order_By = {
  coordinates?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Geofences_Min_Fields = {
  __typename?: 'geofences_min_fields';
  coordinates?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "geofences" */
export type Geofences_Min_Order_By = {
  coordinates?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "geofences" */
export type Geofences_Mutation_Response = {
  __typename?: 'geofences_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Geofences>;
};

/** input type for inserting object relation for remote table "geofences" */
export type Geofences_Obj_Rel_Insert_Input = {
  data: Geofences_Insert_Input;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};

/** on conflict condition type for table "geofences" */
export type Geofences_On_Conflict = {
  constraint: Geofences_Constraint;
  update_columns: Array<Geofences_Update_Column>;
  where?: Maybe<Geofences_Bool_Exp>;
};

/** ordering options when selecting data from "geofences" */
export type Geofences_Order_By = {
  activities_aggregate?: Maybe<Activities_Aggregate_Order_By>;
  category?: Maybe<Order_By>;
  coordinates?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  geofenceByCategory?: Maybe<Categories_Order_By>;
  geofence_variant?: Maybe<Geofence_Variants_Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variant?: Maybe<Order_By>;
};

/** primary key columns input for table: "geofences" */
export type Geofences_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "geofences" */
export enum Geofences_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Coordinates = 'coordinates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  Radius = 'radius',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Variant = 'variant'
}

/** input type for updating data in table "geofences" */
export type Geofences_Set_Input = {
  category?: Maybe<Categories_Enum>;
  coordinates?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant?: Maybe<Geofence_Variants_Enum>;
};

/** aggregate stddev on columns */
export type Geofences_Stddev_Fields = {
  __typename?: 'geofences_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "geofences" */
export type Geofences_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Geofences_Stddev_Pop_Fields = {
  __typename?: 'geofences_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "geofences" */
export type Geofences_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Geofences_Stddev_Samp_Fields = {
  __typename?: 'geofences_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "geofences" */
export type Geofences_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Geofences_Sum_Fields = {
  __typename?: 'geofences_sum_fields';
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  radius?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "geofences" */
export type Geofences_Sum_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** update columns of table "geofences" */
export enum Geofences_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Coordinates = 'coordinates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  Radius = 'radius',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Variant = 'variant'
}

/** aggregate var_pop on columns */
export type Geofences_Var_Pop_Fields = {
  __typename?: 'geofences_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "geofences" */
export type Geofences_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Geofences_Var_Samp_Fields = {
  __typename?: 'geofences_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "geofences" */
export type Geofences_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Geofences_Variance_Fields = {
  __typename?: 'geofences_variance_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "geofences" */
export type Geofences_Variance_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

/** columns and relationships of "likes" */
export type Likes = {
  __typename?: 'likes';
  /** An object relationship */
  activity: Activities;
  activity_id: Scalars['Int'];
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "likes" */
export type Likes_Aggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

/** aggregate fields of "likes" */
export type Likes_Aggregate_Fields = {
  __typename?: 'likes_aggregate_fields';
  avg?: Maybe<Likes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Likes_Max_Fields>;
  min?: Maybe<Likes_Min_Fields>;
  stddev?: Maybe<Likes_Stddev_Fields>;
  stddev_pop?: Maybe<Likes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Likes_Stddev_Samp_Fields>;
  sum?: Maybe<Likes_Sum_Fields>;
  var_pop?: Maybe<Likes_Var_Pop_Fields>;
  var_samp?: Maybe<Likes_Var_Samp_Fields>;
  variance?: Maybe<Likes_Variance_Fields>;
};


/** aggregate fields of "likes" */
export type Likes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  avg?: Maybe<Likes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Likes_Max_Order_By>;
  min?: Maybe<Likes_Min_Order_By>;
  stddev?: Maybe<Likes_Stddev_Order_By>;
  stddev_pop?: Maybe<Likes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Likes_Stddev_Samp_Order_By>;
  sum?: Maybe<Likes_Sum_Order_By>;
  var_pop?: Maybe<Likes_Var_Pop_Order_By>;
  var_samp?: Maybe<Likes_Var_Samp_Order_By>;
  variance?: Maybe<Likes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "likes" */
export type Likes_Arr_Rel_Insert_Input = {
  data: Array<Likes_Insert_Input>;
  on_conflict?: Maybe<Likes_On_Conflict>;
};

/** aggregate avg on columns */
export type Likes_Avg_Fields = {
  __typename?: 'likes_avg_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "likes" */
export type Likes_Avg_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Likes_Bool_Exp>>>;
  _not?: Maybe<Likes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Likes_Bool_Exp>>>;
  activity?: Maybe<Activities_Bool_Exp>;
  activity_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "likes" */
export enum Likes_Constraint {
  /** unique or primary key constraint */
  LikesPkey = 'Likes_pkey',
  /** unique or primary key constraint */
  LikesUserIdActivityIdKey = 'Likes_user_id_activity_id_key'
}

/** input type for incrementing integer column in table "likes" */
export type Likes_Inc_Input = {
  activity_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "likes" */
export type Likes_Insert_Input = {
  activity?: Maybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Likes_Max_Fields = {
  __typename?: 'likes_max_fields';
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Likes_Min_Fields = {
  __typename?: 'likes_min_fields';
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "likes" */
export type Likes_Mutation_Response = {
  __typename?: 'likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Likes>;
};

/** input type for inserting object relation for remote table "likes" */
export type Likes_Obj_Rel_Insert_Input = {
  data: Likes_Insert_Input;
  on_conflict?: Maybe<Likes_On_Conflict>;
};

/** on conflict condition type for table "likes" */
export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns: Array<Likes_Update_Column>;
  where?: Maybe<Likes_Bool_Exp>;
};

/** ordering options when selecting data from "likes" */
export type Likes_Order_By = {
  activity?: Maybe<Activities_Order_By>;
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "likes" */
export type Likes_Pk_Columns_Input = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "likes" */
export type Likes_Set_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Likes_Stddev_Fields = {
  __typename?: 'likes_stddev_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "likes" */
export type Likes_Stddev_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Likes_Stddev_Pop_Fields = {
  __typename?: 'likes_stddev_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "likes" */
export type Likes_Stddev_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Likes_Stddev_Samp_Fields = {
  __typename?: 'likes_stddev_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "likes" */
export type Likes_Stddev_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Likes_Sum_Fields = {
  __typename?: 'likes_sum_fields';
  activity_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "likes" */
export type Likes_Sum_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** update columns of table "likes" */
export enum Likes_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Likes_Var_Pop_Fields = {
  __typename?: 'likes_var_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "likes" */
export type Likes_Var_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Likes_Var_Samp_Fields = {
  __typename?: 'likes_var_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "likes" */
export type Likes_Var_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Likes_Variance_Fields = {
  __typename?: 'likes_variance_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "likes" */
export type Likes_Variance_Order_By = {
  activity_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "achievement" */
  delete_achievement?: Maybe<Achievement_Mutation_Response>;
  /** delete single row from the table: "achievement" */
  delete_achievement_by_pk?: Maybe<Achievement>;
  /** delete data from the table: "activities" */
  delete_activities?: Maybe<Activities_Mutation_Response>;
  /** delete single row from the table: "activities" */
  delete_activities_by_pk?: Maybe<Activities>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete single row from the table: "comments" */
  delete_comment?: Maybe<Comments>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete data from the table: "followings" */
  delete_followings?: Maybe<Followings_Mutation_Response>;
  /** delete single row from the table: "followings" */
  delete_followings_by_pk?: Maybe<Followings>;
  /** delete data from the table: "geofence_variants" */
  delete_geofence_variants?: Maybe<Geofence_Variants_Mutation_Response>;
  /** delete single row from the table: "geofence_variants" */
  delete_geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  /** delete data from the table: "geofences" */
  delete_geofences?: Maybe<Geofences_Mutation_Response>;
  /** delete single row from the table: "geofences" */
  delete_geofences_by_pk?: Maybe<Geofences>;
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<Likes_Mutation_Response>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete single row from the table: "users" */
  delete_user?: Maybe<Users>;
  /** delete data from the table: "user_achievement" */
  delete_user_achievement?: Maybe<User_Achievement_Mutation_Response>;
  /** delete single row from the table: "user_achievement" */
  delete_user_achievement_by_pk?: Maybe<User_Achievement>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "achievement" */
  insert_achievement?: Maybe<Achievement_Mutation_Response>;
  /** insert a single row into the table: "achievement" */
  insert_achievement_one?: Maybe<Achievement>;
  /** insert data into the table: "activities" */
  insert_activities?: Maybe<Activities_Mutation_Response>;
  /** insert a single row into the table: "activities" */
  insert_activities_one?: Maybe<Activities>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert a single row into the table: "comments" */
  insert_comment?: Maybe<Comments>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert data into the table: "followings" */
  insert_followings?: Maybe<Followings_Mutation_Response>;
  /** insert a single row into the table: "followings" */
  insert_followings_one?: Maybe<Followings>;
  /** insert data into the table: "geofence_variants" */
  insert_geofence_variants?: Maybe<Geofence_Variants_Mutation_Response>;
  /** insert a single row into the table: "geofence_variants" */
  insert_geofence_variants_one?: Maybe<Geofence_Variants>;
  /** insert data into the table: "geofences" */
  insert_geofences?: Maybe<Geofences_Mutation_Response>;
  /** insert a single row into the table: "geofences" */
  insert_geofences_one?: Maybe<Geofences>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<Likes_Mutation_Response>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert a single row into the table: "users" */
  insert_user?: Maybe<Users>;
  /** insert data into the table: "user_achievement" */
  insert_user_achievement?: Maybe<User_Achievement_Mutation_Response>;
  /** insert a single row into the table: "user_achievement" */
  insert_user_achievement_one?: Maybe<User_Achievement>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "achievement" */
  update_achievement?: Maybe<Achievement_Mutation_Response>;
  /** update single row of the table: "achievement" */
  update_achievement_by_pk?: Maybe<Achievement>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update single row of the table: "comments" */
  update_comment?: Maybe<Comments>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update data of the table: "followings" */
  update_followings?: Maybe<Followings_Mutation_Response>;
  /** update single row of the table: "followings" */
  update_followings_by_pk?: Maybe<Followings>;
  /** update data of the table: "geofence_variants" */
  update_geofence_variants?: Maybe<Geofence_Variants_Mutation_Response>;
  /** update single row of the table: "geofence_variants" */
  update_geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  /** update data of the table: "geofences" */
  update_geofences?: Maybe<Geofences_Mutation_Response>;
  /** update single row of the table: "geofences" */
  update_geofences_by_pk?: Maybe<Geofences>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<Likes_Mutation_Response>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update single row of the table: "users" */
  update_user?: Maybe<Users>;
  /** update data of the table: "user_achievement" */
  update_user_achievement?: Maybe<User_Achievement_Mutation_Response>;
  /** update single row of the table: "user_achievement" */
  update_user_achievement_by_pk?: Maybe<User_Achievement>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_AchievementArgs = {
  where: Achievement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Achievement_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ActivitiesArgs = {
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activities_By_PkArgs = {
  activity_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  comment_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FollowingsArgs = {
  where: Followings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Followings_By_PkArgs = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Geofence_VariantsArgs = {
  where: Geofence_Variants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Geofence_Variants_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_GeofencesArgs = {
  where: Geofences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Geofences_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Likes_By_PkArgs = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_AchievementArgs = {
  where: User_Achievement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Achievement_By_PkArgs = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_AchievementArgs = {
  objects: Array<Achievement_Insert_Input>;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Achievement_OneArgs = {
  object: Achievement_Insert_Input;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ActivitiesArgs = {
  objects: Array<Activities_Insert_Input>;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_OneArgs = {
  object: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowingsArgs = {
  objects: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Followings_OneArgs = {
  object: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Geofence_VariantsArgs = {
  objects: Array<Geofence_Variants_Insert_Input>;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Geofence_Variants_OneArgs = {
  object: Geofence_Variants_Insert_Input;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GeofencesArgs = {
  objects: Array<Geofences_Insert_Input>;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Geofences_OneArgs = {
  object: Geofences_Insert_Input;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LikesArgs = {
  objects: Array<Likes_Insert_Input>;
  on_conflict?: Maybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Likes_OneArgs = {
  object: Likes_Insert_Input;
  on_conflict?: Maybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_AchievementArgs = {
  objects: Array<User_Achievement_Insert_Input>;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Achievement_OneArgs = {
  object: User_Achievement_Insert_Input;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AchievementArgs = {
  _inc?: Maybe<Achievement_Inc_Input>;
  _set?: Maybe<Achievement_Set_Input>;
  where: Achievement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Achievement_By_PkArgs = {
  _inc?: Maybe<Achievement_Inc_Input>;
  _set?: Maybe<Achievement_Set_Input>;
  pk_columns: Achievement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ActivitiesArgs = {
  _inc?: Maybe<Activities_Inc_Input>;
  _set?: Maybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_By_PkArgs = {
  _inc?: Maybe<Activities_Inc_Input>;
  _set?: Maybe<Activities_Set_Input>;
  pk_columns: Activities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FollowingsArgs = {
  _set?: Maybe<Followings_Set_Input>;
  where: Followings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Followings_By_PkArgs = {
  _set?: Maybe<Followings_Set_Input>;
  pk_columns: Followings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Geofence_VariantsArgs = {
  _set?: Maybe<Geofence_Variants_Set_Input>;
  where: Geofence_Variants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Geofence_Variants_By_PkArgs = {
  _set?: Maybe<Geofence_Variants_Set_Input>;
  pk_columns: Geofence_Variants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GeofencesArgs = {
  _inc?: Maybe<Geofences_Inc_Input>;
  _set?: Maybe<Geofences_Set_Input>;
  where: Geofences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Geofences_By_PkArgs = {
  _inc?: Maybe<Geofences_Inc_Input>;
  _set?: Maybe<Geofences_Set_Input>;
  pk_columns: Geofences_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LikesArgs = {
  _inc?: Maybe<Likes_Inc_Input>;
  _set?: Maybe<Likes_Set_Input>;
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_By_PkArgs = {
  _inc?: Maybe<Likes_Inc_Input>;
  _set?: Maybe<Likes_Set_Input>;
  pk_columns: Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_AchievementArgs = {
  _inc?: Maybe<User_Achievement_Inc_Input>;
  _set?: Maybe<User_Achievement_Set_Input>;
  where: User_Achievement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Achievement_By_PkArgs = {
  _inc?: Maybe<User_Achievement_Inc_Input>;
  _set?: Maybe<User_Achievement_Set_Input>;
  pk_columns: User_Achievement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "achievement" */
  achievement: Array<Achievement>;
  /** fetch aggregated fields from the table: "achievement" */
  achievement_aggregate: Achievement_Aggregate;
  /** fetch data from the table: "achievement" using primary key columns */
  achievement_by_pk?: Maybe<Achievement>;
  /** fetch data from the table: "activities" */
  activities: Array<Activities>;
  /** fetch aggregated fields from the table: "activities" */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "comments" using primary key columns */
  comment?: Maybe<Comments>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: Followings_Aggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "geofence_variants" */
  geofence_variants: Array<Geofence_Variants>;
  /** fetch aggregated fields from the table: "geofence_variants" */
  geofence_variants_aggregate: Geofence_Variants_Aggregate;
  /** fetch data from the table: "geofence_variants" using primary key columns */
  geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  /** fetch data from the table: "geofences" */
  geofences: Array<Geofences>;
  /** fetch aggregated fields from the table: "geofences" */
  geofences_aggregate: Geofences_Aggregate;
  /** fetch data from the table: "geofences" using primary key columns */
  geofences_by_pk?: Maybe<Geofences>;
  /** fetch data from the table: "likes" */
  likes: Array<Likes>;
  /** fetch aggregated fields from the table: "likes" */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_achievement" */
  user_achievement: Array<User_Achievement>;
  /** fetch aggregated fields from the table: "user_achievement" */
  user_achievement_aggregate: User_Achievement_Aggregate;
  /** fetch data from the table: "user_achievement" using primary key columns */
  user_achievement_by_pk?: Maybe<User_Achievement>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


/** query root */
export type Query_RootAchievementArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


/** query root */
export type Query_RootAchievement_AggregateArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


/** query root */
export type Query_RootAchievement_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** query root */
export type Query_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** query root */
export type Query_RootActivities_By_PkArgs = {
  activity_id: Scalars['Int'];
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootCommentArgs = {
  comment_id: Scalars['Int'];
};


/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** query root */
export type Query_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** query root */
export type Query_RootFollowings_By_PkArgs = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootGeofence_VariantsArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


/** query root */
export type Query_RootGeofence_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


/** query root */
export type Query_RootGeofence_Variants_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootGeofencesArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


/** query root */
export type Query_RootGeofences_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


/** query root */
export type Query_RootGeofences_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** query root */
export type Query_RootLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** query root */
export type Query_RootLikes_By_PkArgs = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUser_AchievementArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Achievement_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Achievement_By_PkArgs = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "achievement" */
  achievement: Array<Achievement>;
  /** fetch aggregated fields from the table: "achievement" */
  achievement_aggregate: Achievement_Aggregate;
  /** fetch data from the table: "achievement" using primary key columns */
  achievement_by_pk?: Maybe<Achievement>;
  /** fetch data from the table: "activities" */
  activities: Array<Activities>;
  /** fetch aggregated fields from the table: "activities" */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "comments" using primary key columns */
  comment?: Maybe<Comments>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: Followings_Aggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "geofence_variants" */
  geofence_variants: Array<Geofence_Variants>;
  /** fetch aggregated fields from the table: "geofence_variants" */
  geofence_variants_aggregate: Geofence_Variants_Aggregate;
  /** fetch data from the table: "geofence_variants" using primary key columns */
  geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  /** fetch data from the table: "geofences" */
  geofences: Array<Geofences>;
  /** fetch aggregated fields from the table: "geofences" */
  geofences_aggregate: Geofences_Aggregate;
  /** fetch data from the table: "geofences" using primary key columns */
  geofences_by_pk?: Maybe<Geofences>;
  /** fetch data from the table: "likes" */
  likes: Array<Likes>;
  /** fetch aggregated fields from the table: "likes" */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_achievement" */
  user_achievement: Array<User_Achievement>;
  /** fetch aggregated fields from the table: "user_achievement" */
  user_achievement_aggregate: User_Achievement_Aggregate;
  /** fetch data from the table: "user_achievement" using primary key columns */
  user_achievement_by_pk?: Maybe<User_Achievement>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


/** subscription root */
export type Subscription_RootAchievementArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAchievement_AggregateArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAchievement_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActivities_By_PkArgs = {
  activity_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootCommentArgs = {
  comment_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowings_By_PkArgs = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGeofence_VariantsArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGeofence_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGeofence_Variants_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGeofencesArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGeofences_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGeofences_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLikes_By_PkArgs = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUser_AchievementArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Achievement_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Achievement_By_PkArgs = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_achievement" */
export type User_Achievement = {
  __typename?: 'user_achievement';
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** aggregated selection of "user_achievement" */
export type User_Achievement_Aggregate = {
  __typename?: 'user_achievement_aggregate';
  aggregate?: Maybe<User_Achievement_Aggregate_Fields>;
  nodes: Array<User_Achievement>;
};

/** aggregate fields of "user_achievement" */
export type User_Achievement_Aggregate_Fields = {
  __typename?: 'user_achievement_aggregate_fields';
  avg?: Maybe<User_Achievement_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Achievement_Max_Fields>;
  min?: Maybe<User_Achievement_Min_Fields>;
  stddev?: Maybe<User_Achievement_Stddev_Fields>;
  stddev_pop?: Maybe<User_Achievement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Achievement_Stddev_Samp_Fields>;
  sum?: Maybe<User_Achievement_Sum_Fields>;
  var_pop?: Maybe<User_Achievement_Var_Pop_Fields>;
  var_samp?: Maybe<User_Achievement_Var_Samp_Fields>;
  variance?: Maybe<User_Achievement_Variance_Fields>;
};


/** aggregate fields of "user_achievement" */
export type User_Achievement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Achievement_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_achievement" */
export type User_Achievement_Aggregate_Order_By = {
  avg?: Maybe<User_Achievement_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Achievement_Max_Order_By>;
  min?: Maybe<User_Achievement_Min_Order_By>;
  stddev?: Maybe<User_Achievement_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Achievement_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Achievement_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Achievement_Sum_Order_By>;
  var_pop?: Maybe<User_Achievement_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Achievement_Var_Samp_Order_By>;
  variance?: Maybe<User_Achievement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_achievement" */
export type User_Achievement_Arr_Rel_Insert_Input = {
  data: Array<User_Achievement_Insert_Input>;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Achievement_Avg_Fields = {
  __typename?: 'user_achievement_avg_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_achievement" */
export type User_Achievement_Avg_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_achievement". All fields are combined with a logical 'AND'. */
export type User_Achievement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Achievement_Bool_Exp>>>;
  _not?: Maybe<User_Achievement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Achievement_Bool_Exp>>>;
  achievement_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_achievement" */
export enum User_Achievement_Constraint {
  /** unique or primary key constraint */
  UserAchievmentPkey = 'user_achievment_pkey'
}

/** input type for incrementing integer column in table "user_achievement" */
export type User_Achievement_Inc_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_achievement" */
export type User_Achievement_Insert_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Achievement_Max_Fields = {
  __typename?: 'user_achievement_max_fields';
  achievement_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_achievement" */
export type User_Achievement_Max_Order_By = {
  achievement_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Achievement_Min_Fields = {
  __typename?: 'user_achievement_min_fields';
  achievement_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_achievement" */
export type User_Achievement_Min_Order_By = {
  achievement_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_achievement" */
export type User_Achievement_Mutation_Response = {
  __typename?: 'user_achievement_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Achievement>;
};

/** input type for inserting object relation for remote table "user_achievement" */
export type User_Achievement_Obj_Rel_Insert_Input = {
  data: User_Achievement_Insert_Input;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};

/** on conflict condition type for table "user_achievement" */
export type User_Achievement_On_Conflict = {
  constraint: User_Achievement_Constraint;
  update_columns: Array<User_Achievement_Update_Column>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};

/** ordering options when selecting data from "user_achievement" */
export type User_Achievement_Order_By = {
  achievement_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_achievement" */
export type User_Achievement_Pk_Columns_Input = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "user_achievement" */
export enum User_Achievement_Select_Column {
  /** column name */
  AchievementId = 'achievement_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_achievement" */
export type User_Achievement_Set_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Achievement_Stddev_Fields = {
  __typename?: 'user_achievement_stddev_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_achievement" */
export type User_Achievement_Stddev_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Achievement_Stddev_Pop_Fields = {
  __typename?: 'user_achievement_stddev_pop_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_achievement" */
export type User_Achievement_Stddev_Pop_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Achievement_Stddev_Samp_Fields = {
  __typename?: 'user_achievement_stddev_samp_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_achievement" */
export type User_Achievement_Stddev_Samp_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Achievement_Sum_Fields = {
  __typename?: 'user_achievement_sum_fields';
  achievement_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_achievement" */
export type User_Achievement_Sum_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** update columns of table "user_achievement" */
export enum User_Achievement_Update_Column {
  /** column name */
  AchievementId = 'achievement_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Achievement_Var_Pop_Fields = {
  __typename?: 'user_achievement_var_pop_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_achievement" */
export type User_Achievement_Var_Pop_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Achievement_Var_Samp_Fields = {
  __typename?: 'user_achievement_var_samp_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_achievement" */
export type User_Achievement_Var_Samp_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Achievement_Variance_Fields = {
  __typename?: 'user_achievement_variance_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_achievement" */
export type User_Achievement_Variance_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregated array relationship */
  activities_aggregate: Activities_Aggregate;
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  /** An array relationship */
  followers: Array<Followings>;
  /** An aggregated array relationship */
  followers_aggregate: Followings_Aggregate;
  /** An array relationship */
  following: Array<Followings>;
  /** An aggregated array relationship */
  following_aggregate: Followings_Aggregate;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  user_achievement: Array<User_Achievement>;
  /** An aggregated array relationship */
  user_achievement_aggregate: User_Achievement_Aggregate;
};


/** columns and relationships of "users" */
export type UsersActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowersArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowingArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowing_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_AchievementArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Achievement_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  activities?: Maybe<Activities_Bool_Exp>;
  bio?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  followers?: Maybe<Followings_Bool_Exp>;
  following?: Maybe<Followings_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_achievement?: Maybe<User_Achievement_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'Users_email_key',
  /** unique or primary key constraint */
  UsersIdKey = 'Users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'Users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  activities?: Maybe<Activities_Arr_Rel_Insert_Input>;
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  followers?: Maybe<Followings_Arr_Rel_Insert_Input>;
  following?: Maybe<Followings_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_achievement?: Maybe<User_Achievement_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  bio?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  bio?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  activities_aggregate?: Maybe<Activities_Aggregate_Order_By>;
  bio?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  followers_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  following_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_achievement_aggregate?: Maybe<User_Achievement_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}


export const GetUserAndAchievementsDocument = gql`
    query GetUserAndAchievements($user_id: String!) {
  achievement {
    id
  }
  user_achievement(where: {user_id: {_eq: $user_id}}) {
    achievement_id
  }
  activities(where: {user_id: {_eq: $user_id}}) {
    activity_id
    geofence {
      id
      category
    }
  }
}
    `;
export const AddAchievementDocument = gql`
    mutation AddAchievement($objects: [user_achievement_insert_input!]!) {
  insert_user_achievement(objects: $objects) {
    affected_rows
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($id: String!, $email: String) {
  insert_users(objects: [{id: $id, email: $email}]) {
    affected_rows
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  delete_users(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUserAndAchievements(variables: GetUserAndAchievementsQueryVariables, requestHeaders?: Headers): Promise<GetUserAndAchievementsQuery> {
      return withWrapper(() => client.request<GetUserAndAchievementsQuery>(print(GetUserAndAchievementsDocument), variables));
    },
    AddAchievement(variables: AddAchievementMutationVariables, requestHeaders?: Headers): Promise<AddAchievementMutation> {
      return withWrapper(() => client.request<AddAchievementMutation>(print(AddAchievementDocument), variables));
    },
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: Headers): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(print(CreateUserDocument), variables));
    },
    DeleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Headers): Promise<DeleteUserMutation> {
      return withWrapper(() => client.request<DeleteUserMutation>(print(DeleteUserDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  achievement: ResolverTypeWrapper<Achievement>;
  achievement_aggregate: ResolverTypeWrapper<Achievement_Aggregate>;
  achievement_aggregate_fields: ResolverTypeWrapper<Achievement_Aggregate_Fields>;
  achievement_aggregate_order_by: Achievement_Aggregate_Order_By;
  achievement_arr_rel_insert_input: Achievement_Arr_Rel_Insert_Input;
  achievement_avg_fields: ResolverTypeWrapper<Achievement_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  achievement_avg_order_by: Achievement_Avg_Order_By;
  achievement_bool_exp: Achievement_Bool_Exp;
  achievement_constraint: Achievement_Constraint;
  achievement_inc_input: Achievement_Inc_Input;
  achievement_insert_input: Achievement_Insert_Input;
  achievement_max_fields: ResolverTypeWrapper<Achievement_Max_Fields>;
  achievement_max_order_by: Achievement_Max_Order_By;
  achievement_min_fields: ResolverTypeWrapper<Achievement_Min_Fields>;
  achievement_min_order_by: Achievement_Min_Order_By;
  achievement_mutation_response: ResolverTypeWrapper<Achievement_Mutation_Response>;
  achievement_obj_rel_insert_input: Achievement_Obj_Rel_Insert_Input;
  achievement_on_conflict: Achievement_On_Conflict;
  achievement_order_by: Achievement_Order_By;
  achievement_pk_columns_input: Achievement_Pk_Columns_Input;
  achievement_select_column: Achievement_Select_Column;
  achievement_set_input: Achievement_Set_Input;
  achievement_stddev_fields: ResolverTypeWrapper<Achievement_Stddev_Fields>;
  achievement_stddev_order_by: Achievement_Stddev_Order_By;
  achievement_stddev_pop_fields: ResolverTypeWrapper<Achievement_Stddev_Pop_Fields>;
  achievement_stddev_pop_order_by: Achievement_Stddev_Pop_Order_By;
  achievement_stddev_samp_fields: ResolverTypeWrapper<Achievement_Stddev_Samp_Fields>;
  achievement_stddev_samp_order_by: Achievement_Stddev_Samp_Order_By;
  achievement_sum_fields: ResolverTypeWrapper<Achievement_Sum_Fields>;
  achievement_sum_order_by: Achievement_Sum_Order_By;
  achievement_update_column: Achievement_Update_Column;
  achievement_var_pop_fields: ResolverTypeWrapper<Achievement_Var_Pop_Fields>;
  achievement_var_pop_order_by: Achievement_Var_Pop_Order_By;
  achievement_var_samp_fields: ResolverTypeWrapper<Achievement_Var_Samp_Fields>;
  achievement_var_samp_order_by: Achievement_Var_Samp_Order_By;
  achievement_variance_fields: ResolverTypeWrapper<Achievement_Variance_Fields>;
  achievement_variance_order_by: Achievement_Variance_Order_By;
  activities: ResolverTypeWrapper<Activities>;
  activities_aggregate: ResolverTypeWrapper<Activities_Aggregate>;
  activities_aggregate_fields: ResolverTypeWrapper<Activities_Aggregate_Fields>;
  activities_aggregate_order_by: Activities_Aggregate_Order_By;
  activities_arr_rel_insert_input: Activities_Arr_Rel_Insert_Input;
  activities_avg_fields: ResolverTypeWrapper<Activities_Avg_Fields>;
  activities_avg_order_by: Activities_Avg_Order_By;
  activities_bool_exp: Activities_Bool_Exp;
  activities_constraint: Activities_Constraint;
  activities_inc_input: Activities_Inc_Input;
  activities_insert_input: Activities_Insert_Input;
  activities_max_fields: ResolverTypeWrapper<Activities_Max_Fields>;
  activities_max_order_by: Activities_Max_Order_By;
  activities_min_fields: ResolverTypeWrapper<Activities_Min_Fields>;
  activities_min_order_by: Activities_Min_Order_By;
  activities_mutation_response: ResolverTypeWrapper<Activities_Mutation_Response>;
  activities_obj_rel_insert_input: Activities_Obj_Rel_Insert_Input;
  activities_on_conflict: Activities_On_Conflict;
  activities_order_by: Activities_Order_By;
  activities_pk_columns_input: Activities_Pk_Columns_Input;
  activities_select_column: Activities_Select_Column;
  activities_set_input: Activities_Set_Input;
  activities_stddev_fields: ResolverTypeWrapper<Activities_Stddev_Fields>;
  activities_stddev_order_by: Activities_Stddev_Order_By;
  activities_stddev_pop_fields: ResolverTypeWrapper<Activities_Stddev_Pop_Fields>;
  activities_stddev_pop_order_by: Activities_Stddev_Pop_Order_By;
  activities_stddev_samp_fields: ResolverTypeWrapper<Activities_Stddev_Samp_Fields>;
  activities_stddev_samp_order_by: Activities_Stddev_Samp_Order_By;
  activities_sum_fields: ResolverTypeWrapper<Activities_Sum_Fields>;
  activities_sum_order_by: Activities_Sum_Order_By;
  activities_update_column: Activities_Update_Column;
  activities_var_pop_fields: ResolverTypeWrapper<Activities_Var_Pop_Fields>;
  activities_var_pop_order_by: Activities_Var_Pop_Order_By;
  activities_var_samp_fields: ResolverTypeWrapper<Activities_Var_Samp_Fields>;
  activities_var_samp_order_by: Activities_Var_Samp_Order_By;
  activities_variance_fields: ResolverTypeWrapper<Activities_Variance_Fields>;
  activities_variance_order_by: Activities_Variance_Order_By;
  categories: ResolverTypeWrapper<Categories>;
  categories_aggregate: ResolverTypeWrapper<Categories_Aggregate>;
  categories_aggregate_fields: ResolverTypeWrapper<Categories_Aggregate_Fields>;
  categories_aggregate_order_by: Categories_Aggregate_Order_By;
  categories_arr_rel_insert_input: Categories_Arr_Rel_Insert_Input;
  categories_bool_exp: Categories_Bool_Exp;
  categories_constraint: Categories_Constraint;
  categories_enum: Categories_Enum;
  categories_enum_comparison_exp: Categories_Enum_Comparison_Exp;
  categories_insert_input: Categories_Insert_Input;
  categories_max_fields: ResolverTypeWrapper<Categories_Max_Fields>;
  categories_max_order_by: Categories_Max_Order_By;
  categories_min_fields: ResolverTypeWrapper<Categories_Min_Fields>;
  categories_min_order_by: Categories_Min_Order_By;
  categories_mutation_response: ResolverTypeWrapper<Categories_Mutation_Response>;
  categories_obj_rel_insert_input: Categories_Obj_Rel_Insert_Input;
  categories_on_conflict: Categories_On_Conflict;
  categories_order_by: Categories_Order_By;
  categories_pk_columns_input: Categories_Pk_Columns_Input;
  categories_select_column: Categories_Select_Column;
  categories_set_input: Categories_Set_Input;
  categories_update_column: Categories_Update_Column;
  comments: ResolverTypeWrapper<Comments>;
  comments_aggregate: ResolverTypeWrapper<Comments_Aggregate>;
  comments_aggregate_fields: ResolverTypeWrapper<Comments_Aggregate_Fields>;
  comments_aggregate_order_by: Comments_Aggregate_Order_By;
  comments_arr_rel_insert_input: Comments_Arr_Rel_Insert_Input;
  comments_avg_fields: ResolverTypeWrapper<Comments_Avg_Fields>;
  comments_avg_order_by: Comments_Avg_Order_By;
  comments_bool_exp: Comments_Bool_Exp;
  comments_constraint: Comments_Constraint;
  comments_inc_input: Comments_Inc_Input;
  comments_insert_input: Comments_Insert_Input;
  comments_max_fields: ResolverTypeWrapper<Comments_Max_Fields>;
  comments_max_order_by: Comments_Max_Order_By;
  comments_min_fields: ResolverTypeWrapper<Comments_Min_Fields>;
  comments_min_order_by: Comments_Min_Order_By;
  comments_mutation_response: ResolverTypeWrapper<Comments_Mutation_Response>;
  comments_obj_rel_insert_input: Comments_Obj_Rel_Insert_Input;
  comments_on_conflict: Comments_On_Conflict;
  comments_order_by: Comments_Order_By;
  comments_pk_columns_input: Comments_Pk_Columns_Input;
  comments_select_column: Comments_Select_Column;
  comments_set_input: Comments_Set_Input;
  comments_stddev_fields: ResolverTypeWrapper<Comments_Stddev_Fields>;
  comments_stddev_order_by: Comments_Stddev_Order_By;
  comments_stddev_pop_fields: ResolverTypeWrapper<Comments_Stddev_Pop_Fields>;
  comments_stddev_pop_order_by: Comments_Stddev_Pop_Order_By;
  comments_stddev_samp_fields: ResolverTypeWrapper<Comments_Stddev_Samp_Fields>;
  comments_stddev_samp_order_by: Comments_Stddev_Samp_Order_By;
  comments_sum_fields: ResolverTypeWrapper<Comments_Sum_Fields>;
  comments_sum_order_by: Comments_Sum_Order_By;
  comments_update_column: Comments_Update_Column;
  comments_var_pop_fields: ResolverTypeWrapper<Comments_Var_Pop_Fields>;
  comments_var_pop_order_by: Comments_Var_Pop_Order_By;
  comments_var_samp_fields: ResolverTypeWrapper<Comments_Var_Samp_Fields>;
  comments_var_samp_order_by: Comments_Var_Samp_Order_By;
  comments_variance_fields: ResolverTypeWrapper<Comments_Variance_Fields>;
  comments_variance_order_by: Comments_Variance_Order_By;
  float8: ResolverTypeWrapper<Scalars['float8']>;
  float8_comparison_exp: Float8_Comparison_Exp;
  followings: ResolverTypeWrapper<Followings>;
  followings_aggregate: ResolverTypeWrapper<Followings_Aggregate>;
  followings_aggregate_fields: ResolverTypeWrapper<Followings_Aggregate_Fields>;
  followings_aggregate_order_by: Followings_Aggregate_Order_By;
  followings_arr_rel_insert_input: Followings_Arr_Rel_Insert_Input;
  followings_bool_exp: Followings_Bool_Exp;
  followings_constraint: Followings_Constraint;
  followings_insert_input: Followings_Insert_Input;
  followings_max_fields: ResolverTypeWrapper<Followings_Max_Fields>;
  followings_max_order_by: Followings_Max_Order_By;
  followings_min_fields: ResolverTypeWrapper<Followings_Min_Fields>;
  followings_min_order_by: Followings_Min_Order_By;
  followings_mutation_response: ResolverTypeWrapper<Followings_Mutation_Response>;
  followings_obj_rel_insert_input: Followings_Obj_Rel_Insert_Input;
  followings_on_conflict: Followings_On_Conflict;
  followings_order_by: Followings_Order_By;
  followings_pk_columns_input: Followings_Pk_Columns_Input;
  followings_select_column: Followings_Select_Column;
  followings_set_input: Followings_Set_Input;
  followings_update_column: Followings_Update_Column;
  geofence_variants: ResolverTypeWrapper<Geofence_Variants>;
  geofence_variants_aggregate: ResolverTypeWrapper<Geofence_Variants_Aggregate>;
  geofence_variants_aggregate_fields: ResolverTypeWrapper<Geofence_Variants_Aggregate_Fields>;
  geofence_variants_aggregate_order_by: Geofence_Variants_Aggregate_Order_By;
  geofence_variants_arr_rel_insert_input: Geofence_Variants_Arr_Rel_Insert_Input;
  geofence_variants_bool_exp: Geofence_Variants_Bool_Exp;
  geofence_variants_constraint: Geofence_Variants_Constraint;
  geofence_variants_enum: Geofence_Variants_Enum;
  geofence_variants_enum_comparison_exp: Geofence_Variants_Enum_Comparison_Exp;
  geofence_variants_insert_input: Geofence_Variants_Insert_Input;
  geofence_variants_max_fields: ResolverTypeWrapper<Geofence_Variants_Max_Fields>;
  geofence_variants_max_order_by: Geofence_Variants_Max_Order_By;
  geofence_variants_min_fields: ResolverTypeWrapper<Geofence_Variants_Min_Fields>;
  geofence_variants_min_order_by: Geofence_Variants_Min_Order_By;
  geofence_variants_mutation_response: ResolverTypeWrapper<Geofence_Variants_Mutation_Response>;
  geofence_variants_obj_rel_insert_input: Geofence_Variants_Obj_Rel_Insert_Input;
  geofence_variants_on_conflict: Geofence_Variants_On_Conflict;
  geofence_variants_order_by: Geofence_Variants_Order_By;
  geofence_variants_pk_columns_input: Geofence_Variants_Pk_Columns_Input;
  geofence_variants_select_column: Geofence_Variants_Select_Column;
  geofence_variants_set_input: Geofence_Variants_Set_Input;
  geofence_variants_update_column: Geofence_Variants_Update_Column;
  geofences: ResolverTypeWrapper<Geofences>;
  geofences_aggregate: ResolverTypeWrapper<Geofences_Aggregate>;
  geofences_aggregate_fields: ResolverTypeWrapper<Geofences_Aggregate_Fields>;
  geofences_aggregate_order_by: Geofences_Aggregate_Order_By;
  geofences_arr_rel_insert_input: Geofences_Arr_Rel_Insert_Input;
  geofences_avg_fields: ResolverTypeWrapper<Geofences_Avg_Fields>;
  geofences_avg_order_by: Geofences_Avg_Order_By;
  geofences_bool_exp: Geofences_Bool_Exp;
  geofences_constraint: Geofences_Constraint;
  geofences_inc_input: Geofences_Inc_Input;
  geofences_insert_input: Geofences_Insert_Input;
  geofences_max_fields: ResolverTypeWrapper<Geofences_Max_Fields>;
  geofences_max_order_by: Geofences_Max_Order_By;
  geofences_min_fields: ResolverTypeWrapper<Geofences_Min_Fields>;
  geofences_min_order_by: Geofences_Min_Order_By;
  geofences_mutation_response: ResolverTypeWrapper<Geofences_Mutation_Response>;
  geofences_obj_rel_insert_input: Geofences_Obj_Rel_Insert_Input;
  geofences_on_conflict: Geofences_On_Conflict;
  geofences_order_by: Geofences_Order_By;
  geofences_pk_columns_input: Geofences_Pk_Columns_Input;
  geofences_select_column: Geofences_Select_Column;
  geofences_set_input: Geofences_Set_Input;
  geofences_stddev_fields: ResolverTypeWrapper<Geofences_Stddev_Fields>;
  geofences_stddev_order_by: Geofences_Stddev_Order_By;
  geofences_stddev_pop_fields: ResolverTypeWrapper<Geofences_Stddev_Pop_Fields>;
  geofences_stddev_pop_order_by: Geofences_Stddev_Pop_Order_By;
  geofences_stddev_samp_fields: ResolverTypeWrapper<Geofences_Stddev_Samp_Fields>;
  geofences_stddev_samp_order_by: Geofences_Stddev_Samp_Order_By;
  geofences_sum_fields: ResolverTypeWrapper<Geofences_Sum_Fields>;
  geofences_sum_order_by: Geofences_Sum_Order_By;
  geofences_update_column: Geofences_Update_Column;
  geofences_var_pop_fields: ResolverTypeWrapper<Geofences_Var_Pop_Fields>;
  geofences_var_pop_order_by: Geofences_Var_Pop_Order_By;
  geofences_var_samp_fields: ResolverTypeWrapper<Geofences_Var_Samp_Fields>;
  geofences_var_samp_order_by: Geofences_Var_Samp_Order_By;
  geofences_variance_fields: ResolverTypeWrapper<Geofences_Variance_Fields>;
  geofences_variance_order_by: Geofences_Variance_Order_By;
  likes: ResolverTypeWrapper<Likes>;
  likes_aggregate: ResolverTypeWrapper<Likes_Aggregate>;
  likes_aggregate_fields: ResolverTypeWrapper<Likes_Aggregate_Fields>;
  likes_aggregate_order_by: Likes_Aggregate_Order_By;
  likes_arr_rel_insert_input: Likes_Arr_Rel_Insert_Input;
  likes_avg_fields: ResolverTypeWrapper<Likes_Avg_Fields>;
  likes_avg_order_by: Likes_Avg_Order_By;
  likes_bool_exp: Likes_Bool_Exp;
  likes_constraint: Likes_Constraint;
  likes_inc_input: Likes_Inc_Input;
  likes_insert_input: Likes_Insert_Input;
  likes_max_fields: ResolverTypeWrapper<Likes_Max_Fields>;
  likes_max_order_by: Likes_Max_Order_By;
  likes_min_fields: ResolverTypeWrapper<Likes_Min_Fields>;
  likes_min_order_by: Likes_Min_Order_By;
  likes_mutation_response: ResolverTypeWrapper<Likes_Mutation_Response>;
  likes_obj_rel_insert_input: Likes_Obj_Rel_Insert_Input;
  likes_on_conflict: Likes_On_Conflict;
  likes_order_by: Likes_Order_By;
  likes_pk_columns_input: Likes_Pk_Columns_Input;
  likes_select_column: Likes_Select_Column;
  likes_set_input: Likes_Set_Input;
  likes_stddev_fields: ResolverTypeWrapper<Likes_Stddev_Fields>;
  likes_stddev_order_by: Likes_Stddev_Order_By;
  likes_stddev_pop_fields: ResolverTypeWrapper<Likes_Stddev_Pop_Fields>;
  likes_stddev_pop_order_by: Likes_Stddev_Pop_Order_By;
  likes_stddev_samp_fields: ResolverTypeWrapper<Likes_Stddev_Samp_Fields>;
  likes_stddev_samp_order_by: Likes_Stddev_Samp_Order_By;
  likes_sum_fields: ResolverTypeWrapper<Likes_Sum_Fields>;
  likes_sum_order_by: Likes_Sum_Order_By;
  likes_update_column: Likes_Update_Column;
  likes_var_pop_fields: ResolverTypeWrapper<Likes_Var_Pop_Fields>;
  likes_var_pop_order_by: Likes_Var_Pop_Order_By;
  likes_var_samp_fields: ResolverTypeWrapper<Likes_Var_Samp_Fields>;
  likes_var_samp_order_by: Likes_Var_Samp_Order_By;
  likes_variance_fields: ResolverTypeWrapper<Likes_Variance_Fields>;
  likes_variance_order_by: Likes_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamp: ResolverTypeWrapper<Scalars['timestamp']>;
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user_achievement: ResolverTypeWrapper<User_Achievement>;
  user_achievement_aggregate: ResolverTypeWrapper<User_Achievement_Aggregate>;
  user_achievement_aggregate_fields: ResolverTypeWrapper<User_Achievement_Aggregate_Fields>;
  user_achievement_aggregate_order_by: User_Achievement_Aggregate_Order_By;
  user_achievement_arr_rel_insert_input: User_Achievement_Arr_Rel_Insert_Input;
  user_achievement_avg_fields: ResolverTypeWrapper<User_Achievement_Avg_Fields>;
  user_achievement_avg_order_by: User_Achievement_Avg_Order_By;
  user_achievement_bool_exp: User_Achievement_Bool_Exp;
  user_achievement_constraint: User_Achievement_Constraint;
  user_achievement_inc_input: User_Achievement_Inc_Input;
  user_achievement_insert_input: User_Achievement_Insert_Input;
  user_achievement_max_fields: ResolverTypeWrapper<User_Achievement_Max_Fields>;
  user_achievement_max_order_by: User_Achievement_Max_Order_By;
  user_achievement_min_fields: ResolverTypeWrapper<User_Achievement_Min_Fields>;
  user_achievement_min_order_by: User_Achievement_Min_Order_By;
  user_achievement_mutation_response: ResolverTypeWrapper<User_Achievement_Mutation_Response>;
  user_achievement_obj_rel_insert_input: User_Achievement_Obj_Rel_Insert_Input;
  user_achievement_on_conflict: User_Achievement_On_Conflict;
  user_achievement_order_by: User_Achievement_Order_By;
  user_achievement_pk_columns_input: User_Achievement_Pk_Columns_Input;
  user_achievement_select_column: User_Achievement_Select_Column;
  user_achievement_set_input: User_Achievement_Set_Input;
  user_achievement_stddev_fields: ResolverTypeWrapper<User_Achievement_Stddev_Fields>;
  user_achievement_stddev_order_by: User_Achievement_Stddev_Order_By;
  user_achievement_stddev_pop_fields: ResolverTypeWrapper<User_Achievement_Stddev_Pop_Fields>;
  user_achievement_stddev_pop_order_by: User_Achievement_Stddev_Pop_Order_By;
  user_achievement_stddev_samp_fields: ResolverTypeWrapper<User_Achievement_Stddev_Samp_Fields>;
  user_achievement_stddev_samp_order_by: User_Achievement_Stddev_Samp_Order_By;
  user_achievement_sum_fields: ResolverTypeWrapper<User_Achievement_Sum_Fields>;
  user_achievement_sum_order_by: User_Achievement_Sum_Order_By;
  user_achievement_update_column: User_Achievement_Update_Column;
  user_achievement_var_pop_fields: ResolverTypeWrapper<User_Achievement_Var_Pop_Fields>;
  user_achievement_var_pop_order_by: User_Achievement_Var_Pop_Order_By;
  user_achievement_var_samp_fields: ResolverTypeWrapper<User_Achievement_Var_Samp_Fields>;
  user_achievement_var_samp_order_by: User_Achievement_Var_Samp_Order_By;
  user_achievement_variance_fields: ResolverTypeWrapper<User_Achievement_Variance_Fields>;
  user_achievement_variance_order_by: User_Achievement_Variance_Order_By;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars['String'];
  achievement: Achievement;
  achievement_aggregate: Achievement_Aggregate;
  achievement_aggregate_fields: Achievement_Aggregate_Fields;
  achievement_aggregate_order_by: Achievement_Aggregate_Order_By;
  achievement_arr_rel_insert_input: Achievement_Arr_Rel_Insert_Input;
  achievement_avg_fields: Achievement_Avg_Fields;
  Float: Scalars['Float'];
  achievement_avg_order_by: Achievement_Avg_Order_By;
  achievement_bool_exp: Achievement_Bool_Exp;
  achievement_inc_input: Achievement_Inc_Input;
  achievement_insert_input: Achievement_Insert_Input;
  achievement_max_fields: Achievement_Max_Fields;
  achievement_max_order_by: Achievement_Max_Order_By;
  achievement_min_fields: Achievement_Min_Fields;
  achievement_min_order_by: Achievement_Min_Order_By;
  achievement_mutation_response: Achievement_Mutation_Response;
  achievement_obj_rel_insert_input: Achievement_Obj_Rel_Insert_Input;
  achievement_on_conflict: Achievement_On_Conflict;
  achievement_order_by: Achievement_Order_By;
  achievement_pk_columns_input: Achievement_Pk_Columns_Input;
  achievement_set_input: Achievement_Set_Input;
  achievement_stddev_fields: Achievement_Stddev_Fields;
  achievement_stddev_order_by: Achievement_Stddev_Order_By;
  achievement_stddev_pop_fields: Achievement_Stddev_Pop_Fields;
  achievement_stddev_pop_order_by: Achievement_Stddev_Pop_Order_By;
  achievement_stddev_samp_fields: Achievement_Stddev_Samp_Fields;
  achievement_stddev_samp_order_by: Achievement_Stddev_Samp_Order_By;
  achievement_sum_fields: Achievement_Sum_Fields;
  achievement_sum_order_by: Achievement_Sum_Order_By;
  achievement_var_pop_fields: Achievement_Var_Pop_Fields;
  achievement_var_pop_order_by: Achievement_Var_Pop_Order_By;
  achievement_var_samp_fields: Achievement_Var_Samp_Fields;
  achievement_var_samp_order_by: Achievement_Var_Samp_Order_By;
  achievement_variance_fields: Achievement_Variance_Fields;
  achievement_variance_order_by: Achievement_Variance_Order_By;
  activities: Activities;
  activities_aggregate: Activities_Aggregate;
  activities_aggregate_fields: Activities_Aggregate_Fields;
  activities_aggregate_order_by: Activities_Aggregate_Order_By;
  activities_arr_rel_insert_input: Activities_Arr_Rel_Insert_Input;
  activities_avg_fields: Activities_Avg_Fields;
  activities_avg_order_by: Activities_Avg_Order_By;
  activities_bool_exp: Activities_Bool_Exp;
  activities_inc_input: Activities_Inc_Input;
  activities_insert_input: Activities_Insert_Input;
  activities_max_fields: Activities_Max_Fields;
  activities_max_order_by: Activities_Max_Order_By;
  activities_min_fields: Activities_Min_Fields;
  activities_min_order_by: Activities_Min_Order_By;
  activities_mutation_response: Activities_Mutation_Response;
  activities_obj_rel_insert_input: Activities_Obj_Rel_Insert_Input;
  activities_on_conflict: Activities_On_Conflict;
  activities_order_by: Activities_Order_By;
  activities_pk_columns_input: Activities_Pk_Columns_Input;
  activities_set_input: Activities_Set_Input;
  activities_stddev_fields: Activities_Stddev_Fields;
  activities_stddev_order_by: Activities_Stddev_Order_By;
  activities_stddev_pop_fields: Activities_Stddev_Pop_Fields;
  activities_stddev_pop_order_by: Activities_Stddev_Pop_Order_By;
  activities_stddev_samp_fields: Activities_Stddev_Samp_Fields;
  activities_stddev_samp_order_by: Activities_Stddev_Samp_Order_By;
  activities_sum_fields: Activities_Sum_Fields;
  activities_sum_order_by: Activities_Sum_Order_By;
  activities_var_pop_fields: Activities_Var_Pop_Fields;
  activities_var_pop_order_by: Activities_Var_Pop_Order_By;
  activities_var_samp_fields: Activities_Var_Samp_Fields;
  activities_var_samp_order_by: Activities_Var_Samp_Order_By;
  activities_variance_fields: Activities_Variance_Fields;
  activities_variance_order_by: Activities_Variance_Order_By;
  categories: Categories;
  categories_aggregate: Categories_Aggregate;
  categories_aggregate_fields: Categories_Aggregate_Fields;
  categories_aggregate_order_by: Categories_Aggregate_Order_By;
  categories_arr_rel_insert_input: Categories_Arr_Rel_Insert_Input;
  categories_bool_exp: Categories_Bool_Exp;
  categories_enum_comparison_exp: Categories_Enum_Comparison_Exp;
  categories_insert_input: Categories_Insert_Input;
  categories_max_fields: Categories_Max_Fields;
  categories_max_order_by: Categories_Max_Order_By;
  categories_min_fields: Categories_Min_Fields;
  categories_min_order_by: Categories_Min_Order_By;
  categories_mutation_response: Categories_Mutation_Response;
  categories_obj_rel_insert_input: Categories_Obj_Rel_Insert_Input;
  categories_on_conflict: Categories_On_Conflict;
  categories_order_by: Categories_Order_By;
  categories_pk_columns_input: Categories_Pk_Columns_Input;
  categories_set_input: Categories_Set_Input;
  comments: Comments;
  comments_aggregate: Comments_Aggregate;
  comments_aggregate_fields: Comments_Aggregate_Fields;
  comments_aggregate_order_by: Comments_Aggregate_Order_By;
  comments_arr_rel_insert_input: Comments_Arr_Rel_Insert_Input;
  comments_avg_fields: Comments_Avg_Fields;
  comments_avg_order_by: Comments_Avg_Order_By;
  comments_bool_exp: Comments_Bool_Exp;
  comments_inc_input: Comments_Inc_Input;
  comments_insert_input: Comments_Insert_Input;
  comments_max_fields: Comments_Max_Fields;
  comments_max_order_by: Comments_Max_Order_By;
  comments_min_fields: Comments_Min_Fields;
  comments_min_order_by: Comments_Min_Order_By;
  comments_mutation_response: Comments_Mutation_Response;
  comments_obj_rel_insert_input: Comments_Obj_Rel_Insert_Input;
  comments_on_conflict: Comments_On_Conflict;
  comments_order_by: Comments_Order_By;
  comments_pk_columns_input: Comments_Pk_Columns_Input;
  comments_set_input: Comments_Set_Input;
  comments_stddev_fields: Comments_Stddev_Fields;
  comments_stddev_order_by: Comments_Stddev_Order_By;
  comments_stddev_pop_fields: Comments_Stddev_Pop_Fields;
  comments_stddev_pop_order_by: Comments_Stddev_Pop_Order_By;
  comments_stddev_samp_fields: Comments_Stddev_Samp_Fields;
  comments_stddev_samp_order_by: Comments_Stddev_Samp_Order_By;
  comments_sum_fields: Comments_Sum_Fields;
  comments_sum_order_by: Comments_Sum_Order_By;
  comments_var_pop_fields: Comments_Var_Pop_Fields;
  comments_var_pop_order_by: Comments_Var_Pop_Order_By;
  comments_var_samp_fields: Comments_Var_Samp_Fields;
  comments_var_samp_order_by: Comments_Var_Samp_Order_By;
  comments_variance_fields: Comments_Variance_Fields;
  comments_variance_order_by: Comments_Variance_Order_By;
  float8: Scalars['float8'];
  float8_comparison_exp: Float8_Comparison_Exp;
  followings: Followings;
  followings_aggregate: Followings_Aggregate;
  followings_aggregate_fields: Followings_Aggregate_Fields;
  followings_aggregate_order_by: Followings_Aggregate_Order_By;
  followings_arr_rel_insert_input: Followings_Arr_Rel_Insert_Input;
  followings_bool_exp: Followings_Bool_Exp;
  followings_insert_input: Followings_Insert_Input;
  followings_max_fields: Followings_Max_Fields;
  followings_max_order_by: Followings_Max_Order_By;
  followings_min_fields: Followings_Min_Fields;
  followings_min_order_by: Followings_Min_Order_By;
  followings_mutation_response: Followings_Mutation_Response;
  followings_obj_rel_insert_input: Followings_Obj_Rel_Insert_Input;
  followings_on_conflict: Followings_On_Conflict;
  followings_order_by: Followings_Order_By;
  followings_pk_columns_input: Followings_Pk_Columns_Input;
  followings_set_input: Followings_Set_Input;
  geofence_variants: Geofence_Variants;
  geofence_variants_aggregate: Geofence_Variants_Aggregate;
  geofence_variants_aggregate_fields: Geofence_Variants_Aggregate_Fields;
  geofence_variants_aggregate_order_by: Geofence_Variants_Aggregate_Order_By;
  geofence_variants_arr_rel_insert_input: Geofence_Variants_Arr_Rel_Insert_Input;
  geofence_variants_bool_exp: Geofence_Variants_Bool_Exp;
  geofence_variants_enum_comparison_exp: Geofence_Variants_Enum_Comparison_Exp;
  geofence_variants_insert_input: Geofence_Variants_Insert_Input;
  geofence_variants_max_fields: Geofence_Variants_Max_Fields;
  geofence_variants_max_order_by: Geofence_Variants_Max_Order_By;
  geofence_variants_min_fields: Geofence_Variants_Min_Fields;
  geofence_variants_min_order_by: Geofence_Variants_Min_Order_By;
  geofence_variants_mutation_response: Geofence_Variants_Mutation_Response;
  geofence_variants_obj_rel_insert_input: Geofence_Variants_Obj_Rel_Insert_Input;
  geofence_variants_on_conflict: Geofence_Variants_On_Conflict;
  geofence_variants_order_by: Geofence_Variants_Order_By;
  geofence_variants_pk_columns_input: Geofence_Variants_Pk_Columns_Input;
  geofence_variants_set_input: Geofence_Variants_Set_Input;
  geofences: Geofences;
  geofences_aggregate: Geofences_Aggregate;
  geofences_aggregate_fields: Geofences_Aggregate_Fields;
  geofences_aggregate_order_by: Geofences_Aggregate_Order_By;
  geofences_arr_rel_insert_input: Geofences_Arr_Rel_Insert_Input;
  geofences_avg_fields: Geofences_Avg_Fields;
  geofences_avg_order_by: Geofences_Avg_Order_By;
  geofences_bool_exp: Geofences_Bool_Exp;
  geofences_inc_input: Geofences_Inc_Input;
  geofences_insert_input: Geofences_Insert_Input;
  geofences_max_fields: Geofences_Max_Fields;
  geofences_max_order_by: Geofences_Max_Order_By;
  geofences_min_fields: Geofences_Min_Fields;
  geofences_min_order_by: Geofences_Min_Order_By;
  geofences_mutation_response: Geofences_Mutation_Response;
  geofences_obj_rel_insert_input: Geofences_Obj_Rel_Insert_Input;
  geofences_on_conflict: Geofences_On_Conflict;
  geofences_order_by: Geofences_Order_By;
  geofences_pk_columns_input: Geofences_Pk_Columns_Input;
  geofences_set_input: Geofences_Set_Input;
  geofences_stddev_fields: Geofences_Stddev_Fields;
  geofences_stddev_order_by: Geofences_Stddev_Order_By;
  geofences_stddev_pop_fields: Geofences_Stddev_Pop_Fields;
  geofences_stddev_pop_order_by: Geofences_Stddev_Pop_Order_By;
  geofences_stddev_samp_fields: Geofences_Stddev_Samp_Fields;
  geofences_stddev_samp_order_by: Geofences_Stddev_Samp_Order_By;
  geofences_sum_fields: Geofences_Sum_Fields;
  geofences_sum_order_by: Geofences_Sum_Order_By;
  geofences_var_pop_fields: Geofences_Var_Pop_Fields;
  geofences_var_pop_order_by: Geofences_Var_Pop_Order_By;
  geofences_var_samp_fields: Geofences_Var_Samp_Fields;
  geofences_var_samp_order_by: Geofences_Var_Samp_Order_By;
  geofences_variance_fields: Geofences_Variance_Fields;
  geofences_variance_order_by: Geofences_Variance_Order_By;
  likes: Likes;
  likes_aggregate: Likes_Aggregate;
  likes_aggregate_fields: Likes_Aggregate_Fields;
  likes_aggregate_order_by: Likes_Aggregate_Order_By;
  likes_arr_rel_insert_input: Likes_Arr_Rel_Insert_Input;
  likes_avg_fields: Likes_Avg_Fields;
  likes_avg_order_by: Likes_Avg_Order_By;
  likes_bool_exp: Likes_Bool_Exp;
  likes_inc_input: Likes_Inc_Input;
  likes_insert_input: Likes_Insert_Input;
  likes_max_fields: Likes_Max_Fields;
  likes_max_order_by: Likes_Max_Order_By;
  likes_min_fields: Likes_Min_Fields;
  likes_min_order_by: Likes_Min_Order_By;
  likes_mutation_response: Likes_Mutation_Response;
  likes_obj_rel_insert_input: Likes_Obj_Rel_Insert_Input;
  likes_on_conflict: Likes_On_Conflict;
  likes_order_by: Likes_Order_By;
  likes_pk_columns_input: Likes_Pk_Columns_Input;
  likes_set_input: Likes_Set_Input;
  likes_stddev_fields: Likes_Stddev_Fields;
  likes_stddev_order_by: Likes_Stddev_Order_By;
  likes_stddev_pop_fields: Likes_Stddev_Pop_Fields;
  likes_stddev_pop_order_by: Likes_Stddev_Pop_Order_By;
  likes_stddev_samp_fields: Likes_Stddev_Samp_Fields;
  likes_stddev_samp_order_by: Likes_Stddev_Samp_Order_By;
  likes_sum_fields: Likes_Sum_Fields;
  likes_sum_order_by: Likes_Sum_Order_By;
  likes_var_pop_fields: Likes_Var_Pop_Fields;
  likes_var_pop_order_by: Likes_Var_Pop_Order_By;
  likes_var_samp_fields: Likes_Var_Samp_Fields;
  likes_var_samp_order_by: Likes_Var_Samp_Order_By;
  likes_variance_fields: Likes_Variance_Fields;
  likes_variance_order_by: Likes_Variance_Order_By;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  timestamp: Scalars['timestamp'];
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user_achievement: User_Achievement;
  user_achievement_aggregate: User_Achievement_Aggregate;
  user_achievement_aggregate_fields: User_Achievement_Aggregate_Fields;
  user_achievement_aggregate_order_by: User_Achievement_Aggregate_Order_By;
  user_achievement_arr_rel_insert_input: User_Achievement_Arr_Rel_Insert_Input;
  user_achievement_avg_fields: User_Achievement_Avg_Fields;
  user_achievement_avg_order_by: User_Achievement_Avg_Order_By;
  user_achievement_bool_exp: User_Achievement_Bool_Exp;
  user_achievement_inc_input: User_Achievement_Inc_Input;
  user_achievement_insert_input: User_Achievement_Insert_Input;
  user_achievement_max_fields: User_Achievement_Max_Fields;
  user_achievement_max_order_by: User_Achievement_Max_Order_By;
  user_achievement_min_fields: User_Achievement_Min_Fields;
  user_achievement_min_order_by: User_Achievement_Min_Order_By;
  user_achievement_mutation_response: User_Achievement_Mutation_Response;
  user_achievement_obj_rel_insert_input: User_Achievement_Obj_Rel_Insert_Input;
  user_achievement_on_conflict: User_Achievement_On_Conflict;
  user_achievement_order_by: User_Achievement_Order_By;
  user_achievement_pk_columns_input: User_Achievement_Pk_Columns_Input;
  user_achievement_set_input: User_Achievement_Set_Input;
  user_achievement_stddev_fields: User_Achievement_Stddev_Fields;
  user_achievement_stddev_order_by: User_Achievement_Stddev_Order_By;
  user_achievement_stddev_pop_fields: User_Achievement_Stddev_Pop_Fields;
  user_achievement_stddev_pop_order_by: User_Achievement_Stddev_Pop_Order_By;
  user_achievement_stddev_samp_fields: User_Achievement_Stddev_Samp_Fields;
  user_achievement_stddev_samp_order_by: User_Achievement_Stddev_Samp_Order_By;
  user_achievement_sum_fields: User_Achievement_Sum_Fields;
  user_achievement_sum_order_by: User_Achievement_Sum_Order_By;
  user_achievement_var_pop_fields: User_Achievement_Var_Pop_Fields;
  user_achievement_var_pop_order_by: User_Achievement_Var_Pop_Order_By;
  user_achievement_var_samp_fields: User_Achievement_Var_Samp_Fields;
  user_achievement_var_samp_order_by: User_Achievement_Var_Samp_Order_By;
  user_achievement_variance_fields: User_Achievement_Variance_Fields;
  user_achievement_variance_order_by: User_Achievement_Variance_Order_By;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: Users_Min_Fields;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
};

export type AchievementResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement'] = ResolversParentTypes['achievement']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_aggregate'] = ResolversParentTypes['achievement_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['achievement_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['achievement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_aggregate_fields'] = ResolversParentTypes['achievement_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['achievement_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Achievement_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['achievement_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['achievement_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['achievement_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['achievement_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['achievement_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['achievement_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['achievement_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['achievement_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['achievement_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_avg_fields'] = ResolversParentTypes['achievement_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_max_fields'] = ResolversParentTypes['achievement_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_min_fields'] = ResolversParentTypes['achievement_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_mutation_response'] = ResolversParentTypes['achievement_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['achievement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_stddev_fields'] = ResolversParentTypes['achievement_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_stddev_pop_fields'] = ResolversParentTypes['achievement_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_stddev_samp_fields'] = ResolversParentTypes['achievement_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_sum_fields'] = ResolversParentTypes['achievement_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_var_pop_fields'] = ResolversParentTypes['achievement_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_var_samp_fields'] = ResolversParentTypes['achievement_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_variance_fields'] = ResolversParentTypes['achievement_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities'] = ResolversParentTypes['activities']> = {
  activity_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<ActivitiesCommentsArgs, never>>;
  comments_aggregate?: Resolver<ResolversTypes['comments_aggregate'], ParentType, ContextType, RequireFields<ActivitiesComments_AggregateArgs, never>>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  geofence?: Resolver<ResolversTypes['geofences'], ParentType, ContextType>;
  geofence_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  likes?: Resolver<Array<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<ActivitiesLikesArgs, never>>;
  likes_aggregate?: Resolver<ResolversTypes['likes_aggregate'], ParentType, ContextType, RequireFields<ActivitiesLikes_AggregateArgs, never>>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_aggregate'] = ResolversParentTypes['activities_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['activities_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_aggregate_fields'] = ResolversParentTypes['activities_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['activities_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Activities_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['activities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['activities_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['activities_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['activities_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['activities_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['activities_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['activities_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['activities_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['activities_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_avg_fields'] = ResolversParentTypes['activities_avg_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_max_fields'] = ResolversParentTypes['activities_max_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_min_fields'] = ResolversParentTypes['activities_min_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_mutation_response'] = ResolversParentTypes['activities_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_stddev_fields'] = ResolversParentTypes['activities_stddev_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_stddev_pop_fields'] = ResolversParentTypes['activities_stddev_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_stddev_samp_fields'] = ResolversParentTypes['activities_stddev_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_sum_fields'] = ResolversParentTypes['activities_sum_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_var_pop_fields'] = ResolversParentTypes['activities_var_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_var_samp_fields'] = ResolversParentTypes['activities_var_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_variance_fields'] = ResolversParentTypes['activities_variance_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories'] = ResolversParentTypes['categories']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_aggregate'] = ResolversParentTypes['categories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['categories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_aggregate_fields'] = ResolversParentTypes['categories_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Categories_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['categories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['categories_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_max_fields'] = ResolversParentTypes['categories_max_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_min_fields'] = ResolversParentTypes['categories_min_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_mutation_response'] = ResolversParentTypes['categories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments'] = ResolversParentTypes['comments']> = {
  activity?: Resolver<ResolversTypes['activities'], ParentType, ContextType>;
  activity_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_aggregate'] = ResolversParentTypes['comments_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['comments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_aggregate_fields'] = ResolversParentTypes['comments_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['comments_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Comments_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['comments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['comments_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['comments_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['comments_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['comments_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['comments_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['comments_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['comments_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['comments_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_avg_fields'] = ResolversParentTypes['comments_avg_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_max_fields'] = ResolversParentTypes['comments_max_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_min_fields'] = ResolversParentTypes['comments_min_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_mutation_response'] = ResolversParentTypes['comments_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_stddev_fields'] = ResolversParentTypes['comments_stddev_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_stddev_pop_fields'] = ResolversParentTypes['comments_stddev_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_stddev_samp_fields'] = ResolversParentTypes['comments_stddev_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_sum_fields'] = ResolversParentTypes['comments_sum_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_var_pop_fields'] = ResolversParentTypes['comments_var_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_var_samp_fields'] = ResolversParentTypes['comments_var_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Comments_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['comments_variance_fields'] = ResolversParentTypes['comments_variance_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Float8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['float8'], any> {
  name: 'float8';
}

export type FollowingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['followings'] = ResolversParentTypes['followings']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  follower?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  following_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Followings_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['followings_aggregate'] = ResolversParentTypes['followings_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['followings_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Followings_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['followings_aggregate_fields'] = ResolversParentTypes['followings_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Followings_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['followings_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['followings_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Followings_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['followings_max_fields'] = ResolversParentTypes['followings_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  following_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Followings_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['followings_min_fields'] = ResolversParentTypes['followings_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  following_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Followings_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['followings_mutation_response'] = ResolversParentTypes['followings_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofence_VariantsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofence_variants'] = ResolversParentTypes['geofence_variants']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geofences?: Resolver<Array<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Geofence_VariantsGeofencesArgs, never>>;
  geofences_aggregate?: Resolver<ResolversTypes['geofences_aggregate'], ParentType, ContextType, RequireFields<Geofence_VariantsGeofences_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofence_Variants_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofence_variants_aggregate'] = ResolversParentTypes['geofence_variants_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['geofence_variants_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['geofence_variants']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofence_Variants_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofence_variants_aggregate_fields'] = ResolversParentTypes['geofence_variants_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Geofence_Variants_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['geofence_variants_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['geofence_variants_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofence_Variants_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofence_variants_max_fields'] = ResolversParentTypes['geofence_variants_max_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofence_Variants_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofence_variants_min_fields'] = ResolversParentTypes['geofence_variants_min_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofence_Variants_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofence_variants_mutation_response'] = ResolversParentTypes['geofence_variants_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['geofence_variants']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeofencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences'] = ResolversParentTypes['geofences']> = {
  activities?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<GeofencesActivitiesArgs, never>>;
  activities_aggregate?: Resolver<ResolversTypes['activities_aggregate'], ParentType, ContextType, RequireFields<GeofencesActivities_AggregateArgs, never>>;
  category?: Resolver<ResolversTypes['categories_enum'], ParentType, ContextType>;
  coordinates?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geofenceByCategory?: Resolver<ResolversTypes['categories'], ParentType, ContextType>;
  geofence_variant?: Resolver<ResolversTypes['geofence_variants'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  radius?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  variant?: Resolver<ResolversTypes['geofence_variants_enum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_aggregate'] = ResolversParentTypes['geofences_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['geofences_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['geofences']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_aggregate_fields'] = ResolversParentTypes['geofences_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['geofences_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Geofences_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['geofences_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['geofences_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['geofences_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['geofences_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['geofences_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['geofences_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['geofences_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['geofences_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['geofences_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_avg_fields'] = ResolversParentTypes['geofences_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_max_fields'] = ResolversParentTypes['geofences_max_fields']> = {
  coordinates?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_min_fields'] = ResolversParentTypes['geofences_min_fields']> = {
  coordinates?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_mutation_response'] = ResolversParentTypes['geofences_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['geofences']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_stddev_fields'] = ResolversParentTypes['geofences_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_stddev_pop_fields'] = ResolversParentTypes['geofences_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_stddev_samp_fields'] = ResolversParentTypes['geofences_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_sum_fields'] = ResolversParentTypes['geofences_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_var_pop_fields'] = ResolversParentTypes['geofences_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_var_samp_fields'] = ResolversParentTypes['geofences_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Geofences_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['geofences_variance_fields'] = ResolversParentTypes['geofences_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikesResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes'] = ResolversParentTypes['likes']> = {
  activity?: Resolver<ResolversTypes['activities'], ParentType, ContextType>;
  activity_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_aggregate'] = ResolversParentTypes['likes_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['likes_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['likes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_aggregate_fields'] = ResolversParentTypes['likes_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['likes_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Likes_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['likes_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['likes_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['likes_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['likes_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['likes_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['likes_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['likes_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['likes_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['likes_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_avg_fields'] = ResolversParentTypes['likes_avg_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_max_fields'] = ResolversParentTypes['likes_max_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_min_fields'] = ResolversParentTypes['likes_min_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_mutation_response'] = ResolversParentTypes['likes_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['likes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_stddev_fields'] = ResolversParentTypes['likes_stddev_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_stddev_pop_fields'] = ResolversParentTypes['likes_stddev_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_stddev_samp_fields'] = ResolversParentTypes['likes_stddev_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_sum_fields'] = ResolversParentTypes['likes_sum_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_var_pop_fields'] = ResolversParentTypes['likes_var_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_var_samp_fields'] = ResolversParentTypes['likes_var_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Likes_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['likes_variance_fields'] = ResolversParentTypes['likes_variance_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_achievement?: Resolver<Maybe<ResolversTypes['achievement_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AchievementArgs, 'where'>>;
  delete_achievement_by_pk?: Resolver<Maybe<ResolversTypes['achievement']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Achievement_By_PkArgs, 'id'>>;
  delete_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ActivitiesArgs, 'where'>>;
  delete_activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activities_By_PkArgs, 'activity_id'>>;
  delete_categories?: Resolver<Maybe<ResolversTypes['categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CategoriesArgs, 'where'>>;
  delete_categories_by_pk?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Categories_By_PkArgs, 'name'>>;
  delete_comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CommentArgs, 'comment_id'>>;
  delete_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CommentsArgs, 'where'>>;
  delete_followings?: Resolver<Maybe<ResolversTypes['followings_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_FollowingsArgs, 'where'>>;
  delete_followings_by_pk?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Followings_By_PkArgs, 'following_id' | 'user_id'>>;
  delete_geofence_variants?: Resolver<Maybe<ResolversTypes['geofence_variants_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Geofence_VariantsArgs, 'where'>>;
  delete_geofence_variants_by_pk?: Resolver<Maybe<ResolversTypes['geofence_variants']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Geofence_Variants_By_PkArgs, 'name'>>;
  delete_geofences?: Resolver<Maybe<ResolversTypes['geofences_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_GeofencesArgs, 'where'>>;
  delete_geofences_by_pk?: Resolver<Maybe<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Geofences_By_PkArgs, 'id'>>;
  delete_likes?: Resolver<Maybe<ResolversTypes['likes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_LikesArgs, 'where'>>;
  delete_likes_by_pk?: Resolver<Maybe<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Likes_By_PkArgs, 'activity_id' | 'user_id'>>;
  delete_user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UserArgs, 'id'>>;
  delete_user_achievement?: Resolver<Maybe<ResolversTypes['user_achievement_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_AchievementArgs, 'where'>>;
  delete_user_achievement_by_pk?: Resolver<Maybe<ResolversTypes['user_achievement']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Achievement_By_PkArgs, 'achievement_id' | 'user_id'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  insert_achievement?: Resolver<Maybe<ResolversTypes['achievement_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AchievementArgs, 'objects'>>;
  insert_achievement_one?: Resolver<Maybe<ResolversTypes['achievement']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Achievement_OneArgs, 'object'>>;
  insert_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ActivitiesArgs, 'objects'>>;
  insert_activities_one?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Activities_OneArgs, 'object'>>;
  insert_categories?: Resolver<Maybe<ResolversTypes['categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CategoriesArgs, 'objects'>>;
  insert_categories_one?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Categories_OneArgs, 'object'>>;
  insert_comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CommentArgs, 'object'>>;
  insert_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CommentsArgs, 'objects'>>;
  insert_followings?: Resolver<Maybe<ResolversTypes['followings_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_FollowingsArgs, 'objects'>>;
  insert_followings_one?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Followings_OneArgs, 'object'>>;
  insert_geofence_variants?: Resolver<Maybe<ResolversTypes['geofence_variants_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Geofence_VariantsArgs, 'objects'>>;
  insert_geofence_variants_one?: Resolver<Maybe<ResolversTypes['geofence_variants']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Geofence_Variants_OneArgs, 'object'>>;
  insert_geofences?: Resolver<Maybe<ResolversTypes['geofences_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_GeofencesArgs, 'objects'>>;
  insert_geofences_one?: Resolver<Maybe<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Geofences_OneArgs, 'object'>>;
  insert_likes?: Resolver<Maybe<ResolversTypes['likes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_LikesArgs, 'objects'>>;
  insert_likes_one?: Resolver<Maybe<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Likes_OneArgs, 'object'>>;
  insert_user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UserArgs, 'object'>>;
  insert_user_achievement?: Resolver<Maybe<ResolversTypes['user_achievement_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_AchievementArgs, 'objects'>>;
  insert_user_achievement_one?: Resolver<Maybe<ResolversTypes['user_achievement']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Achievement_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  update_achievement?: Resolver<Maybe<ResolversTypes['achievement_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AchievementArgs, 'where'>>;
  update_achievement_by_pk?: Resolver<Maybe<ResolversTypes['achievement']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Achievement_By_PkArgs, 'pk_columns'>>;
  update_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ActivitiesArgs, 'where'>>;
  update_activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Activities_By_PkArgs, 'pk_columns'>>;
  update_categories?: Resolver<Maybe<ResolversTypes['categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CategoriesArgs, 'where'>>;
  update_categories_by_pk?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Categories_By_PkArgs, 'pk_columns'>>;
  update_comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CommentArgs, 'pk_columns'>>;
  update_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CommentsArgs, 'where'>>;
  update_followings?: Resolver<Maybe<ResolversTypes['followings_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_FollowingsArgs, 'where'>>;
  update_followings_by_pk?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Followings_By_PkArgs, 'pk_columns'>>;
  update_geofence_variants?: Resolver<Maybe<ResolversTypes['geofence_variants_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Geofence_VariantsArgs, 'where'>>;
  update_geofence_variants_by_pk?: Resolver<Maybe<ResolversTypes['geofence_variants']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Geofence_Variants_By_PkArgs, 'pk_columns'>>;
  update_geofences?: Resolver<Maybe<ResolversTypes['geofences_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_GeofencesArgs, 'where'>>;
  update_geofences_by_pk?: Resolver<Maybe<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Geofences_By_PkArgs, 'pk_columns'>>;
  update_likes?: Resolver<Maybe<ResolversTypes['likes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_LikesArgs, 'where'>>;
  update_likes_by_pk?: Resolver<Maybe<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Likes_By_PkArgs, 'pk_columns'>>;
  update_user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UserArgs, 'pk_columns'>>;
  update_user_achievement?: Resolver<Maybe<ResolversTypes['user_achievement_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_AchievementArgs, 'where'>>;
  update_user_achievement_by_pk?: Resolver<Maybe<ResolversTypes['user_achievement']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Achievement_By_PkArgs, 'pk_columns'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  achievement?: Resolver<Array<ResolversTypes['achievement']>, ParentType, ContextType, RequireFields<Query_RootAchievementArgs, never>>;
  achievement_aggregate?: Resolver<ResolversTypes['achievement_aggregate'], ParentType, ContextType, RequireFields<Query_RootAchievement_AggregateArgs, never>>;
  achievement_by_pk?: Resolver<Maybe<ResolversTypes['achievement']>, ParentType, ContextType, RequireFields<Query_RootAchievement_By_PkArgs, 'id'>>;
  activities?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Query_RootActivitiesArgs, never>>;
  activities_aggregate?: Resolver<ResolversTypes['activities_aggregate'], ParentType, ContextType, RequireFields<Query_RootActivities_AggregateArgs, never>>;
  activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Query_RootActivities_By_PkArgs, 'activity_id'>>;
  categories?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Query_RootCategoriesArgs, never>>;
  categories_aggregate?: Resolver<ResolversTypes['categories_aggregate'], ParentType, ContextType, RequireFields<Query_RootCategories_AggregateArgs, never>>;
  categories_by_pk?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Query_RootCategories_By_PkArgs, 'name'>>;
  comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Query_RootCommentArgs, 'comment_id'>>;
  comments?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Query_RootCommentsArgs, never>>;
  comments_aggregate?: Resolver<ResolversTypes['comments_aggregate'], ParentType, ContextType, RequireFields<Query_RootComments_AggregateArgs, never>>;
  followings?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Query_RootFollowingsArgs, never>>;
  followings_aggregate?: Resolver<ResolversTypes['followings_aggregate'], ParentType, ContextType, RequireFields<Query_RootFollowings_AggregateArgs, never>>;
  followings_by_pk?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Query_RootFollowings_By_PkArgs, 'following_id' | 'user_id'>>;
  geofence_variants?: Resolver<Array<ResolversTypes['geofence_variants']>, ParentType, ContextType, RequireFields<Query_RootGeofence_VariantsArgs, never>>;
  geofence_variants_aggregate?: Resolver<ResolversTypes['geofence_variants_aggregate'], ParentType, ContextType, RequireFields<Query_RootGeofence_Variants_AggregateArgs, never>>;
  geofence_variants_by_pk?: Resolver<Maybe<ResolversTypes['geofence_variants']>, ParentType, ContextType, RequireFields<Query_RootGeofence_Variants_By_PkArgs, 'name'>>;
  geofences?: Resolver<Array<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Query_RootGeofencesArgs, never>>;
  geofences_aggregate?: Resolver<ResolversTypes['geofences_aggregate'], ParentType, ContextType, RequireFields<Query_RootGeofences_AggregateArgs, never>>;
  geofences_by_pk?: Resolver<Maybe<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Query_RootGeofences_By_PkArgs, 'id'>>;
  likes?: Resolver<Array<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<Query_RootLikesArgs, never>>;
  likes_aggregate?: Resolver<ResolversTypes['likes_aggregate'], ParentType, ContextType, RequireFields<Query_RootLikes_AggregateArgs, never>>;
  likes_by_pk?: Resolver<Maybe<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<Query_RootLikes_By_PkArgs, 'activity_id' | 'user_id'>>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUserArgs, 'id'>>;
  user_achievement?: Resolver<Array<ResolversTypes['user_achievement']>, ParentType, ContextType, RequireFields<Query_RootUser_AchievementArgs, never>>;
  user_achievement_aggregate?: Resolver<ResolversTypes['user_achievement_aggregate'], ParentType, ContextType, RequireFields<Query_RootUser_Achievement_AggregateArgs, never>>;
  user_achievement_by_pk?: Resolver<Maybe<ResolversTypes['user_achievement']>, ParentType, ContextType, RequireFields<Query_RootUser_Achievement_By_PkArgs, 'achievement_id' | 'user_id'>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsersArgs, never>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<Query_RootUsers_AggregateArgs, never>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  achievement?: SubscriptionResolver<Array<ResolversTypes['achievement']>, "achievement", ParentType, ContextType, RequireFields<Subscription_RootAchievementArgs, never>>;
  achievement_aggregate?: SubscriptionResolver<ResolversTypes['achievement_aggregate'], "achievement_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAchievement_AggregateArgs, never>>;
  achievement_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['achievement']>, "achievement_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAchievement_By_PkArgs, 'id'>>;
  activities?: SubscriptionResolver<Array<ResolversTypes['activities']>, "activities", ParentType, ContextType, RequireFields<Subscription_RootActivitiesArgs, never>>;
  activities_aggregate?: SubscriptionResolver<ResolversTypes['activities_aggregate'], "activities_aggregate", ParentType, ContextType, RequireFields<Subscription_RootActivities_AggregateArgs, never>>;
  activities_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['activities']>, "activities_by_pk", ParentType, ContextType, RequireFields<Subscription_RootActivities_By_PkArgs, 'activity_id'>>;
  categories?: SubscriptionResolver<Array<ResolversTypes['categories']>, "categories", ParentType, ContextType, RequireFields<Subscription_RootCategoriesArgs, never>>;
  categories_aggregate?: SubscriptionResolver<ResolversTypes['categories_aggregate'], "categories_aggregate", ParentType, ContextType, RequireFields<Subscription_RootCategories_AggregateArgs, never>>;
  categories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['categories']>, "categories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCategories_By_PkArgs, 'name'>>;
  comment?: SubscriptionResolver<Maybe<ResolversTypes['comments']>, "comment", ParentType, ContextType, RequireFields<Subscription_RootCommentArgs, 'comment_id'>>;
  comments?: SubscriptionResolver<Array<ResolversTypes['comments']>, "comments", ParentType, ContextType, RequireFields<Subscription_RootCommentsArgs, never>>;
  comments_aggregate?: SubscriptionResolver<ResolversTypes['comments_aggregate'], "comments_aggregate", ParentType, ContextType, RequireFields<Subscription_RootComments_AggregateArgs, never>>;
  followings?: SubscriptionResolver<Array<ResolversTypes['followings']>, "followings", ParentType, ContextType, RequireFields<Subscription_RootFollowingsArgs, never>>;
  followings_aggregate?: SubscriptionResolver<ResolversTypes['followings_aggregate'], "followings_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFollowings_AggregateArgs, never>>;
  followings_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['followings']>, "followings_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFollowings_By_PkArgs, 'following_id' | 'user_id'>>;
  geofence_variants?: SubscriptionResolver<Array<ResolversTypes['geofence_variants']>, "geofence_variants", ParentType, ContextType, RequireFields<Subscription_RootGeofence_VariantsArgs, never>>;
  geofence_variants_aggregate?: SubscriptionResolver<ResolversTypes['geofence_variants_aggregate'], "geofence_variants_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGeofence_Variants_AggregateArgs, never>>;
  geofence_variants_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['geofence_variants']>, "geofence_variants_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGeofence_Variants_By_PkArgs, 'name'>>;
  geofences?: SubscriptionResolver<Array<ResolversTypes['geofences']>, "geofences", ParentType, ContextType, RequireFields<Subscription_RootGeofencesArgs, never>>;
  geofences_aggregate?: SubscriptionResolver<ResolversTypes['geofences_aggregate'], "geofences_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGeofences_AggregateArgs, never>>;
  geofences_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['geofences']>, "geofences_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGeofences_By_PkArgs, 'id'>>;
  likes?: SubscriptionResolver<Array<ResolversTypes['likes']>, "likes", ParentType, ContextType, RequireFields<Subscription_RootLikesArgs, never>>;
  likes_aggregate?: SubscriptionResolver<ResolversTypes['likes_aggregate'], "likes_aggregate", ParentType, ContextType, RequireFields<Subscription_RootLikes_AggregateArgs, never>>;
  likes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['likes']>, "likes_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLikes_By_PkArgs, 'activity_id' | 'user_id'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "user", ParentType, ContextType, RequireFields<Subscription_RootUserArgs, 'id'>>;
  user_achievement?: SubscriptionResolver<Array<ResolversTypes['user_achievement']>, "user_achievement", ParentType, ContextType, RequireFields<Subscription_RootUser_AchievementArgs, never>>;
  user_achievement_aggregate?: SubscriptionResolver<ResolversTypes['user_achievement_aggregate'], "user_achievement_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUser_Achievement_AggregateArgs, never>>;
  user_achievement_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user_achievement']>, "user_achievement_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_Achievement_By_PkArgs, 'achievement_id' | 'user_id'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, RequireFields<Subscription_RootUsersArgs, never>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUsers_AggregateArgs, never>>;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamp'], any> {
  name: 'timestamp';
}

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type User_AchievementResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement'] = ResolversParentTypes['user_achievement']> = {
  achievement_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_aggregate'] = ResolversParentTypes['user_achievement_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_achievement_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_achievement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_aggregate_fields'] = ResolversParentTypes['user_achievement_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_achievement_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<User_Achievement_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['user_achievement_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_achievement_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['user_achievement_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_achievement_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_achievement_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['user_achievement_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['user_achievement_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['user_achievement_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['user_achievement_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_avg_fields'] = ResolversParentTypes['user_achievement_avg_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_max_fields'] = ResolversParentTypes['user_achievement_max_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_min_fields'] = ResolversParentTypes['user_achievement_min_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_mutation_response'] = ResolversParentTypes['user_achievement_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_achievement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_stddev_fields'] = ResolversParentTypes['user_achievement_stddev_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_stddev_pop_fields'] = ResolversParentTypes['user_achievement_stddev_pop_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_stddev_samp_fields'] = ResolversParentTypes['user_achievement_stddev_samp_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_sum_fields'] = ResolversParentTypes['user_achievement_sum_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_var_pop_fields'] = ResolversParentTypes['user_achievement_var_pop_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_var_samp_fields'] = ResolversParentTypes['user_achievement_var_samp_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_variance_fields'] = ResolversParentTypes['user_achievement_variance_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  activities?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<UsersActivitiesArgs, never>>;
  activities_aggregate?: Resolver<ResolversTypes['activities_aggregate'], ParentType, ContextType, RequireFields<UsersActivities_AggregateArgs, never>>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<UsersFollowersArgs, never>>;
  followers_aggregate?: Resolver<ResolversTypes['followings_aggregate'], ParentType, ContextType, RequireFields<UsersFollowers_AggregateArgs, never>>;
  following?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<UsersFollowingArgs, never>>;
  following_aggregate?: Resolver<ResolversTypes['followings_aggregate'], ParentType, ContextType, RequireFields<UsersFollowing_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_achievement?: Resolver<Array<ResolversTypes['user_achievement']>, ParentType, ContextType, RequireFields<UsersUser_AchievementArgs, never>>;
  user_achievement_aggregate?: Resolver<ResolversTypes['user_achievement_aggregate'], ParentType, ContextType, RequireFields<UsersUser_Achievement_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Users_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  achievement?: AchievementResolvers<ContextType>;
  achievement_aggregate?: Achievement_AggregateResolvers<ContextType>;
  achievement_aggregate_fields?: Achievement_Aggregate_FieldsResolvers<ContextType>;
  achievement_avg_fields?: Achievement_Avg_FieldsResolvers<ContextType>;
  achievement_max_fields?: Achievement_Max_FieldsResolvers<ContextType>;
  achievement_min_fields?: Achievement_Min_FieldsResolvers<ContextType>;
  achievement_mutation_response?: Achievement_Mutation_ResponseResolvers<ContextType>;
  achievement_stddev_fields?: Achievement_Stddev_FieldsResolvers<ContextType>;
  achievement_stddev_pop_fields?: Achievement_Stddev_Pop_FieldsResolvers<ContextType>;
  achievement_stddev_samp_fields?: Achievement_Stddev_Samp_FieldsResolvers<ContextType>;
  achievement_sum_fields?: Achievement_Sum_FieldsResolvers<ContextType>;
  achievement_var_pop_fields?: Achievement_Var_Pop_FieldsResolvers<ContextType>;
  achievement_var_samp_fields?: Achievement_Var_Samp_FieldsResolvers<ContextType>;
  achievement_variance_fields?: Achievement_Variance_FieldsResolvers<ContextType>;
  activities?: ActivitiesResolvers<ContextType>;
  activities_aggregate?: Activities_AggregateResolvers<ContextType>;
  activities_aggregate_fields?: Activities_Aggregate_FieldsResolvers<ContextType>;
  activities_avg_fields?: Activities_Avg_FieldsResolvers<ContextType>;
  activities_max_fields?: Activities_Max_FieldsResolvers<ContextType>;
  activities_min_fields?: Activities_Min_FieldsResolvers<ContextType>;
  activities_mutation_response?: Activities_Mutation_ResponseResolvers<ContextType>;
  activities_stddev_fields?: Activities_Stddev_FieldsResolvers<ContextType>;
  activities_stddev_pop_fields?: Activities_Stddev_Pop_FieldsResolvers<ContextType>;
  activities_stddev_samp_fields?: Activities_Stddev_Samp_FieldsResolvers<ContextType>;
  activities_sum_fields?: Activities_Sum_FieldsResolvers<ContextType>;
  activities_var_pop_fields?: Activities_Var_Pop_FieldsResolvers<ContextType>;
  activities_var_samp_fields?: Activities_Var_Samp_FieldsResolvers<ContextType>;
  activities_variance_fields?: Activities_Variance_FieldsResolvers<ContextType>;
  categories?: CategoriesResolvers<ContextType>;
  categories_aggregate?: Categories_AggregateResolvers<ContextType>;
  categories_aggregate_fields?: Categories_Aggregate_FieldsResolvers<ContextType>;
  categories_max_fields?: Categories_Max_FieldsResolvers<ContextType>;
  categories_min_fields?: Categories_Min_FieldsResolvers<ContextType>;
  categories_mutation_response?: Categories_Mutation_ResponseResolvers<ContextType>;
  comments?: CommentsResolvers<ContextType>;
  comments_aggregate?: Comments_AggregateResolvers<ContextType>;
  comments_aggregate_fields?: Comments_Aggregate_FieldsResolvers<ContextType>;
  comments_avg_fields?: Comments_Avg_FieldsResolvers<ContextType>;
  comments_max_fields?: Comments_Max_FieldsResolvers<ContextType>;
  comments_min_fields?: Comments_Min_FieldsResolvers<ContextType>;
  comments_mutation_response?: Comments_Mutation_ResponseResolvers<ContextType>;
  comments_stddev_fields?: Comments_Stddev_FieldsResolvers<ContextType>;
  comments_stddev_pop_fields?: Comments_Stddev_Pop_FieldsResolvers<ContextType>;
  comments_stddev_samp_fields?: Comments_Stddev_Samp_FieldsResolvers<ContextType>;
  comments_sum_fields?: Comments_Sum_FieldsResolvers<ContextType>;
  comments_var_pop_fields?: Comments_Var_Pop_FieldsResolvers<ContextType>;
  comments_var_samp_fields?: Comments_Var_Samp_FieldsResolvers<ContextType>;
  comments_variance_fields?: Comments_Variance_FieldsResolvers<ContextType>;
  float8?: GraphQLScalarType;
  followings?: FollowingsResolvers<ContextType>;
  followings_aggregate?: Followings_AggregateResolvers<ContextType>;
  followings_aggregate_fields?: Followings_Aggregate_FieldsResolvers<ContextType>;
  followings_max_fields?: Followings_Max_FieldsResolvers<ContextType>;
  followings_min_fields?: Followings_Min_FieldsResolvers<ContextType>;
  followings_mutation_response?: Followings_Mutation_ResponseResolvers<ContextType>;
  geofence_variants?: Geofence_VariantsResolvers<ContextType>;
  geofence_variants_aggregate?: Geofence_Variants_AggregateResolvers<ContextType>;
  geofence_variants_aggregate_fields?: Geofence_Variants_Aggregate_FieldsResolvers<ContextType>;
  geofence_variants_max_fields?: Geofence_Variants_Max_FieldsResolvers<ContextType>;
  geofence_variants_min_fields?: Geofence_Variants_Min_FieldsResolvers<ContextType>;
  geofence_variants_mutation_response?: Geofence_Variants_Mutation_ResponseResolvers<ContextType>;
  geofences?: GeofencesResolvers<ContextType>;
  geofences_aggregate?: Geofences_AggregateResolvers<ContextType>;
  geofences_aggregate_fields?: Geofences_Aggregate_FieldsResolvers<ContextType>;
  geofences_avg_fields?: Geofences_Avg_FieldsResolvers<ContextType>;
  geofences_max_fields?: Geofences_Max_FieldsResolvers<ContextType>;
  geofences_min_fields?: Geofences_Min_FieldsResolvers<ContextType>;
  geofences_mutation_response?: Geofences_Mutation_ResponseResolvers<ContextType>;
  geofences_stddev_fields?: Geofences_Stddev_FieldsResolvers<ContextType>;
  geofences_stddev_pop_fields?: Geofences_Stddev_Pop_FieldsResolvers<ContextType>;
  geofences_stddev_samp_fields?: Geofences_Stddev_Samp_FieldsResolvers<ContextType>;
  geofences_sum_fields?: Geofences_Sum_FieldsResolvers<ContextType>;
  geofences_var_pop_fields?: Geofences_Var_Pop_FieldsResolvers<ContextType>;
  geofences_var_samp_fields?: Geofences_Var_Samp_FieldsResolvers<ContextType>;
  geofences_variance_fields?: Geofences_Variance_FieldsResolvers<ContextType>;
  likes?: LikesResolvers<ContextType>;
  likes_aggregate?: Likes_AggregateResolvers<ContextType>;
  likes_aggregate_fields?: Likes_Aggregate_FieldsResolvers<ContextType>;
  likes_avg_fields?: Likes_Avg_FieldsResolvers<ContextType>;
  likes_max_fields?: Likes_Max_FieldsResolvers<ContextType>;
  likes_min_fields?: Likes_Min_FieldsResolvers<ContextType>;
  likes_mutation_response?: Likes_Mutation_ResponseResolvers<ContextType>;
  likes_stddev_fields?: Likes_Stddev_FieldsResolvers<ContextType>;
  likes_stddev_pop_fields?: Likes_Stddev_Pop_FieldsResolvers<ContextType>;
  likes_stddev_samp_fields?: Likes_Stddev_Samp_FieldsResolvers<ContextType>;
  likes_sum_fields?: Likes_Sum_FieldsResolvers<ContextType>;
  likes_var_pop_fields?: Likes_Var_Pop_FieldsResolvers<ContextType>;
  likes_var_samp_fields?: Likes_Var_Samp_FieldsResolvers<ContextType>;
  likes_variance_fields?: Likes_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamp?: GraphQLScalarType;
  timestamptz?: GraphQLScalarType;
  user_achievement?: User_AchievementResolvers<ContextType>;
  user_achievement_aggregate?: User_Achievement_AggregateResolvers<ContextType>;
  user_achievement_aggregate_fields?: User_Achievement_Aggregate_FieldsResolvers<ContextType>;
  user_achievement_avg_fields?: User_Achievement_Avg_FieldsResolvers<ContextType>;
  user_achievement_max_fields?: User_Achievement_Max_FieldsResolvers<ContextType>;
  user_achievement_min_fields?: User_Achievement_Min_FieldsResolvers<ContextType>;
  user_achievement_mutation_response?: User_Achievement_Mutation_ResponseResolvers<ContextType>;
  user_achievement_stddev_fields?: User_Achievement_Stddev_FieldsResolvers<ContextType>;
  user_achievement_stddev_pop_fields?: User_Achievement_Stddev_Pop_FieldsResolvers<ContextType>;
  user_achievement_stddev_samp_fields?: User_Achievement_Stddev_Samp_FieldsResolvers<ContextType>;
  user_achievement_sum_fields?: User_Achievement_Sum_FieldsResolvers<ContextType>;
  user_achievement_var_pop_fields?: User_Achievement_Var_Pop_FieldsResolvers<ContextType>;
  user_achievement_var_samp_fields?: User_Achievement_Var_Samp_FieldsResolvers<ContextType>;
  user_achievement_variance_fields?: User_Achievement_Variance_FieldsResolvers<ContextType>;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const GetUserAndAchievements = gql`
    query GetUserAndAchievements($user_id: String!) {
  achievement {
    id
  }
  user_achievement(where: {user_id: {_eq: $user_id}}) {
    achievement_id
  }
  activities(where: {user_id: {_eq: $user_id}}) {
    activity_id
    geofence {
      id
      category
    }
  }
}
    `;
export const AddAchievement = gql`
    mutation AddAchievement($objects: [user_achievement_insert_input!]!) {
  insert_user_achievement(objects: $objects) {
    affected_rows
  }
}
    `;
export const CreateUser = gql`
    mutation CreateUser($id: String!, $email: String) {
  insert_users(objects: [{id: $id, email: $email}]) {
    affected_rows
  }
}
    `;
export const DeleteUser = gql`
    mutation DeleteUser($id: String!) {
  delete_users(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type GetUserAndAchievementsQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserAndAchievementsQuery = (
  { __typename?: 'query_root' }
  & { achievement: Array<(
    { __typename?: 'achievement' }
    & Pick<Achievement, 'id'>
  )>, user_achievement: Array<(
    { __typename?: 'user_achievement' }
    & Pick<User_Achievement, 'achievement_id'>
  )>, activities: Array<(
    { __typename?: 'activities' }
    & Pick<Activities, 'activity_id'>
    & { geofence: (
      { __typename?: 'geofences' }
      & Pick<Geofences, 'id' | 'category'>
    ) }
  )> }
);

export type AddAchievementMutationVariables = Exact<{
  objects: Array<User_Achievement_Insert_Input> | User_Achievement_Insert_Input;
}>;


export type AddAchievementMutation = (
  { __typename?: 'mutation_root' }
  & { insert_user_achievement?: Maybe<(
    { __typename?: 'user_achievement_mutation_response' }
    & Pick<User_Achievement_Mutation_Response, 'affected_rows'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  email?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'mutation_root' }
  & { delete_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);
