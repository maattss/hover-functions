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

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  float8: any;
  interval: any;
  json: any;
  timestamp: any;
  timestamptz: any;
};

export type Achievement = {
  __typename?: 'achievement';
  achievementTypeByAchievementType: Achievement_Type;
  achievement_type: Achievement_Type_Enum;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  feed?: Maybe<Feed>;
  id: Scalars['Int'];
  level: Scalars['Int'];
  name: Scalars['String'];
  rule: Scalars['json'];
  user_achievements: Array<User_Achievement>;
  user_achievements_aggregate: User_Achievement_Aggregate;
};


export type AchievementRuleArgs = {
  path?: Maybe<Scalars['String']>;
};


export type AchievementUser_AchievementsArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


export type AchievementUser_Achievements_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};

export type Achievement_Aggregate = {
  __typename?: 'achievement_aggregate';
  aggregate?: Maybe<Achievement_Aggregate_Fields>;
  nodes: Array<Achievement>;
};

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


export type Achievement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Achievement_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Achievement_Arr_Rel_Insert_Input = {
  data: Array<Achievement_Insert_Input>;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};

export type Achievement_Avg_Fields = {
  __typename?: 'achievement_avg_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type Achievement_Avg_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Achievement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Achievement_Bool_Exp>>>;
  _not?: Maybe<Achievement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Achievement_Bool_Exp>>>;
  achievementTypeByAchievementType?: Maybe<Achievement_Type_Bool_Exp>;
  achievement_type?: Maybe<Achievement_Type_Enum_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  feed?: Maybe<Feed_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  rule?: Maybe<Json_Comparison_Exp>;
  user_achievements?: Maybe<User_Achievement_Bool_Exp>;
};

export enum Achievement_Constraint {
  AcheivementPkey = 'Acheivement_pkey'
}

export type Achievement_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
};

export type Achievement_Insert_Input = {
  achievementTypeByAchievementType?: Maybe<Achievement_Type_Obj_Rel_Insert_Input>;
  achievement_type?: Maybe<Achievement_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  feed?: Maybe<Feed_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['json']>;
  user_achievements?: Maybe<User_Achievement_Arr_Rel_Insert_Input>;
};

export type Achievement_Max_Fields = {
  __typename?: 'achievement_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Achievement_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Achievement_Min_Fields = {
  __typename?: 'achievement_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Achievement_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Achievement_Mutation_Response = {
  __typename?: 'achievement_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Achievement>;
};

export type Achievement_Obj_Rel_Insert_Input = {
  data: Achievement_Insert_Input;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};

export type Achievement_On_Conflict = {
  constraint: Achievement_Constraint;
  update_columns: Array<Achievement_Update_Column>;
  where?: Maybe<Achievement_Bool_Exp>;
};

export type Achievement_Order_By = {
  achievementTypeByAchievementType?: Maybe<Achievement_Type_Order_By>;
  achievement_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  feed?: Maybe<Feed_Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rule?: Maybe<Order_By>;
  user_achievements_aggregate?: Maybe<User_Achievement_Aggregate_Order_By>;
};

export type Achievement_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Achievement_Select_Column {
  AchievementType = 'achievement_type',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Level = 'level',
  Name = 'name',
  Rule = 'rule'
}

export type Achievement_Set_Input = {
  achievement_type?: Maybe<Achievement_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['json']>;
};

export type Achievement_Stddev_Fields = {
  __typename?: 'achievement_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type Achievement_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Achievement_Stddev_Pop_Fields = {
  __typename?: 'achievement_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type Achievement_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Achievement_Stddev_Samp_Fields = {
  __typename?: 'achievement_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type Achievement_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Achievement_Sum_Fields = {
  __typename?: 'achievement_sum_fields';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
};

export type Achievement_Sum_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Achievement_Type = {
  __typename?: 'achievement_type';
  achievements: Array<Achievement>;
  achievements_aggregate: Achievement_Aggregate;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type Achievement_TypeAchievementsArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Achievement_TypeAchievements_AggregateArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};

export type Achievement_Type_Aggregate = {
  __typename?: 'achievement_type_aggregate';
  aggregate?: Maybe<Achievement_Type_Aggregate_Fields>;
  nodes: Array<Achievement_Type>;
};

export type Achievement_Type_Aggregate_Fields = {
  __typename?: 'achievement_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Achievement_Type_Max_Fields>;
  min?: Maybe<Achievement_Type_Min_Fields>;
};


export type Achievement_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Achievement_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Achievement_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Achievement_Type_Max_Order_By>;
  min?: Maybe<Achievement_Type_Min_Order_By>;
};

export type Achievement_Type_Arr_Rel_Insert_Input = {
  data: Array<Achievement_Type_Insert_Input>;
  on_conflict?: Maybe<Achievement_Type_On_Conflict>;
};

export type Achievement_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Achievement_Type_Bool_Exp>>>;
  _not?: Maybe<Achievement_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Achievement_Type_Bool_Exp>>>;
  achievements?: Maybe<Achievement_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Achievement_Type_Constraint {
  AchievementTypePkey = 'achievement_type_pkey'
}

export enum Achievement_Type_Enum {
  FirstActivity = 'FIRST_ACTIVITY',
  Score = 'SCORE',
  ScoreInCategory = 'SCORE_IN_CATEGORY'
}

export type Achievement_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Achievement_Type_Enum>;
  _in?: Maybe<Array<Achievement_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Achievement_Type_Enum>;
  _nin?: Maybe<Array<Achievement_Type_Enum>>;
};

export type Achievement_Type_Insert_Input = {
  achievements?: Maybe<Achievement_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Achievement_Type_Max_Fields = {
  __typename?: 'achievement_type_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Achievement_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Achievement_Type_Min_Fields = {
  __typename?: 'achievement_type_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Achievement_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Achievement_Type_Mutation_Response = {
  __typename?: 'achievement_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Achievement_Type>;
};

export type Achievement_Type_Obj_Rel_Insert_Input = {
  data: Achievement_Type_Insert_Input;
  on_conflict?: Maybe<Achievement_Type_On_Conflict>;
};

export type Achievement_Type_On_Conflict = {
  constraint: Achievement_Type_Constraint;
  update_columns: Array<Achievement_Type_Update_Column>;
  where?: Maybe<Achievement_Type_Bool_Exp>;
};

export type Achievement_Type_Order_By = {
  achievements_aggregate?: Maybe<Achievement_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Achievement_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

export enum Achievement_Type_Select_Column {
  Description = 'description',
  Name = 'name'
}

export type Achievement_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum Achievement_Type_Update_Column {
  Description = 'description',
  Name = 'name'
}

export enum Achievement_Update_Column {
  AchievementType = 'achievement_type',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Level = 'level',
  Name = 'name',
  Rule = 'rule'
}

export type Achievement_Var_Pop_Fields = {
  __typename?: 'achievement_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type Achievement_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Achievement_Var_Samp_Fields = {
  __typename?: 'achievement_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type Achievement_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Achievement_Variance_Fields = {
  __typename?: 'achievement_variance_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

export type Achievement_Variance_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

export type Activities = {
  __typename?: 'activities';
  activity_id: Scalars['Int'];
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration: Scalars['interval'];
  feed?: Maybe<Feed>;
  feeds: Array<Feed>;
  feeds_aggregate: Feed_Aggregate;
  geofence: Geofences;
  geofence_id: Scalars['Int'];
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  stopped_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user: Users;
  user_id: Scalars['String'];
};


export type ActivitiesFeedsArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type ActivitiesFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};

export type Activities_Aggregate = {
  __typename?: 'activities_aggregate';
  aggregate?: Maybe<Activities_Aggregate_Fields>;
  nodes: Array<Activities>;
};

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


export type Activities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Activities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Activities_Arr_Rel_Insert_Input = {
  data: Array<Activities_Insert_Input>;
  on_conflict?: Maybe<Activities_On_Conflict>;
};

export type Activities_Avg_Fields = {
  __typename?: 'activities_avg_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Activities_Avg_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Activities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  _not?: Maybe<Activities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Activities_Bool_Exp>>>;
  activity_id?: Maybe<Int_Comparison_Exp>;
  caption?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  duration?: Maybe<Interval_Comparison_Exp>;
  feed?: Maybe<Feed_Bool_Exp>;
  feeds?: Maybe<Feed_Bool_Exp>;
  geofence?: Maybe<Geofences_Bool_Exp>;
  geofence_id?: Maybe<Int_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  started_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

export enum Activities_Constraint {
  ActivityPkey = 'Activity_pkey',
  ActivitiesActivityIdUserIdKey = 'activities_activity_id_user_id_key',
  ActivitiesStartedAtUserIdKey = 'activities_started_at_user_id_key'
}

export type Activities_Inc_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  geofence_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Activities_Insert_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['interval']>;
  feed?: Maybe<Feed_Obj_Rel_Insert_Input>;
  feeds?: Maybe<Feed_Arr_Rel_Insert_Input>;
  geofence?: Maybe<Geofences_Obj_Rel_Insert_Input>;
  geofence_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type Activities_Max_Fields = {
  __typename?: 'activities_max_fields';
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geofence_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Activities_Max_Order_By = {
  activity_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geofence_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Activities_Min_Order_By = {
  activity_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Activities_Mutation_Response = {
  __typename?: 'activities_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Activities>;
};

export type Activities_Obj_Rel_Insert_Input = {
  data: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};

export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns: Array<Activities_Update_Column>;
  where?: Maybe<Activities_Bool_Exp>;
};

export type Activities_Order_By = {
  activity_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  feed?: Maybe<Feed_Order_By>;
  feeds_aggregate?: Maybe<Feed_Aggregate_Order_By>;
  geofence?: Maybe<Geofences_Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  started_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Activities_Pk_Columns_Input = {
  activity_id: Scalars['Int'];
};

export enum Activities_Select_Column {
  ActivityId = 'activity_id',
  Caption = 'caption',
  CreatedAt = 'created_at',
  Duration = 'duration',
  GeofenceId = 'geofence_id',
  Score = 'score',
  StartedAt = 'started_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Activities_Set_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['interval']>;
  geofence_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Activities_Stddev_Fields = {
  __typename?: 'activities_stddev_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Activities_Stddev_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Activities_Stddev_Pop_Fields = {
  __typename?: 'activities_stddev_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Activities_Stddev_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Activities_Stddev_Samp_Fields = {
  __typename?: 'activities_stddev_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Activities_Stddev_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Activities_Sum_Fields = {
  __typename?: 'activities_sum_fields';
  activity_id?: Maybe<Scalars['Int']>;
  geofence_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Activities_Sum_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export enum Activities_Update_Column {
  ActivityId = 'activity_id',
  Caption = 'caption',
  CreatedAt = 'created_at',
  Duration = 'duration',
  GeofenceId = 'geofence_id',
  Score = 'score',
  StartedAt = 'started_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Activities_Var_Pop_Fields = {
  __typename?: 'activities_var_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Activities_Var_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Activities_Var_Samp_Fields = {
  __typename?: 'activities_var_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Activities_Var_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Activities_Variance_Fields = {
  __typename?: 'activities_variance_fields';
  activity_id?: Maybe<Scalars['Float']>;
  geofence_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Activities_Variance_Order_By = {
  activity_id?: Maybe<Order_By>;
  geofence_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};


export type Categories = {
  __typename?: 'categories';
  description: Scalars['String'];
  name: Scalars['String'];
  points_per_minute: Scalars['Int'];
};

export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Categories_Aggregate_Order_By = {
  avg?: Maybe<Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Categories_Max_Order_By>;
  min?: Maybe<Categories_Min_Order_By>;
  stddev?: Maybe<Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Categories_Sum_Order_By>;
  var_pop?: Maybe<Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Categories_Var_Samp_Order_By>;
  variance?: Maybe<Categories_Variance_Order_By>;
};

export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  points_per_minute?: Maybe<Scalars['Float']>;
};

export type Categories_Avg_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  points_per_minute?: Maybe<Int_Comparison_Exp>;
};

export enum Categories_Constraint {
  CategoryNameKey = 'Category_name_key',
  CategoriesPkey = 'categories_pkey'
}

export type Categories_Inc_Input = {
  points_per_minute?: Maybe<Scalars['Int']>;
};

export type Categories_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points_per_minute?: Maybe<Scalars['Int']>;
};

export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points_per_minute?: Maybe<Scalars['Int']>;
};

export type Categories_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points_per_minute?: Maybe<Scalars['Int']>;
};

export type Categories_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Categories>;
};

export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

export type Categories_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Pk_Columns_Input = {
  name: Scalars['String'];
};

export enum Categories_Select_Column {
  Description = 'description',
  Name = 'name',
  PointsPerMinute = 'points_per_minute'
}

export type Categories_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points_per_minute?: Maybe<Scalars['Int']>;
};

export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  points_per_minute?: Maybe<Scalars['Float']>;
};

export type Categories_Stddev_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  points_per_minute?: Maybe<Scalars['Float']>;
};

export type Categories_Stddev_Pop_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  points_per_minute?: Maybe<Scalars['Float']>;
};

export type Categories_Stddev_Samp_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  points_per_minute?: Maybe<Scalars['Int']>;
};

export type Categories_Sum_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export enum Categories_Update_Column {
  Description = 'description',
  Name = 'name',
  PointsPerMinute = 'points_per_minute'
}

export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  points_per_minute?: Maybe<Scalars['Float']>;
};

export type Categories_Var_Pop_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  points_per_minute?: Maybe<Scalars['Float']>;
};

export type Categories_Var_Samp_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  points_per_minute?: Maybe<Scalars['Float']>;
};

export type Categories_Variance_Order_By = {
  points_per_minute?: Maybe<Order_By>;
};

export type Challenge = {
  __typename?: 'challenge';
  challengeTypeByChallengeType: Challenge_Type;
  challenge_participants: Array<Challenge_Participant>;
  challenge_participants_aggregate: Challenge_Participant_Aggregate;
  challenge_state: Challenge_State;
  challenge_type: Challenge_Type_Enum;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  created_by_user: Users;
  end_date: Scalars['date'];
  feed?: Maybe<Feed>;
  id: Scalars['Int'];
  rules: Scalars['json'];
  start_date: Scalars['date'];
  state: Challenge_State_Enum;
  winner?: Maybe<Users>;
  winner_id?: Maybe<Scalars['String']>;
};


export type ChallengeChallenge_ParticipantsArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type ChallengeChallenge_Participants_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type ChallengeRulesArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Challenge_Aggregate = {
  __typename?: 'challenge_aggregate';
  aggregate?: Maybe<Challenge_Aggregate_Fields>;
  nodes: Array<Challenge>;
};

export type Challenge_Aggregate_Fields = {
  __typename?: 'challenge_aggregate_fields';
  avg?: Maybe<Challenge_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Max_Fields>;
  min?: Maybe<Challenge_Min_Fields>;
  stddev?: Maybe<Challenge_Stddev_Fields>;
  stddev_pop?: Maybe<Challenge_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Challenge_Stddev_Samp_Fields>;
  sum?: Maybe<Challenge_Sum_Fields>;
  var_pop?: Maybe<Challenge_Var_Pop_Fields>;
  var_samp?: Maybe<Challenge_Var_Samp_Fields>;
  variance?: Maybe<Challenge_Variance_Fields>;
};


export type Challenge_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Aggregate_Order_By = {
  avg?: Maybe<Challenge_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Max_Order_By>;
  min?: Maybe<Challenge_Min_Order_By>;
  stddev?: Maybe<Challenge_Stddev_Order_By>;
  stddev_pop?: Maybe<Challenge_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Challenge_Stddev_Samp_Order_By>;
  sum?: Maybe<Challenge_Sum_Order_By>;
  var_pop?: Maybe<Challenge_Var_Pop_Order_By>;
  var_samp?: Maybe<Challenge_Var_Samp_Order_By>;
  variance?: Maybe<Challenge_Variance_Order_By>;
};

export type Challenge_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Insert_Input>;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};

export type Challenge_Avg_Fields = {
  __typename?: 'challenge_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Challenge_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Challenge_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  _not?: Maybe<Challenge_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  challengeTypeByChallengeType?: Maybe<Challenge_Type_Bool_Exp>;
  challenge_participants?: Maybe<Challenge_Participant_Bool_Exp>;
  challenge_state?: Maybe<Challenge_State_Bool_Exp>;
  challenge_type?: Maybe<Challenge_Type_Enum_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  created_by_user?: Maybe<Users_Bool_Exp>;
  end_date?: Maybe<Date_Comparison_Exp>;
  feed?: Maybe<Feed_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rules?: Maybe<Json_Comparison_Exp>;
  start_date?: Maybe<Date_Comparison_Exp>;
  state?: Maybe<Challenge_State_Enum_Comparison_Exp>;
  winner?: Maybe<Users_Bool_Exp>;
  winner_id?: Maybe<String_Comparison_Exp>;
};

export enum Challenge_Constraint {
  ChallengeIdWinnerIdKey = 'challenge_id_winner_id_key',
  UserChallengePkey = 'user_challenge_pkey'
}

export type Challenge_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Challenge_Insert_Input = {
  challengeTypeByChallengeType?: Maybe<Challenge_Type_Obj_Rel_Insert_Input>;
  challenge_participants?: Maybe<Challenge_Participant_Arr_Rel_Insert_Input>;
  challenge_state?: Maybe<Challenge_State_Obj_Rel_Insert_Input>;
  challenge_type?: Maybe<Challenge_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  created_by_user?: Maybe<Users_Obj_Rel_Insert_Input>;
  end_date?: Maybe<Scalars['date']>;
  feed?: Maybe<Feed_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  rules?: Maybe<Scalars['json']>;
  start_date?: Maybe<Scalars['date']>;
  state?: Maybe<Challenge_State_Enum>;
  winner?: Maybe<Users_Obj_Rel_Insert_Input>;
  winner_id?: Maybe<Scalars['String']>;
};

export type Challenge_Max_Fields = {
  __typename?: 'challenge_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  winner_id?: Maybe<Scalars['String']>;
};

export type Challenge_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  winner_id?: Maybe<Order_By>;
};

export type Challenge_Min_Fields = {
  __typename?: 'challenge_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  winner_id?: Maybe<Scalars['String']>;
};

export type Challenge_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  winner_id?: Maybe<Order_By>;
};

export type Challenge_Mutation_Response = {
  __typename?: 'challenge_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge>;
};

export type Challenge_Obj_Rel_Insert_Input = {
  data: Challenge_Insert_Input;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};

export type Challenge_On_Conflict = {
  constraint: Challenge_Constraint;
  update_columns: Array<Challenge_Update_Column>;
  where?: Maybe<Challenge_Bool_Exp>;
};

export type Challenge_Order_By = {
  challengeTypeByChallengeType?: Maybe<Challenge_Type_Order_By>;
  challenge_participants_aggregate?: Maybe<Challenge_Participant_Aggregate_Order_By>;
  challenge_state?: Maybe<Challenge_State_Order_By>;
  challenge_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  created_by_user?: Maybe<Users_Order_By>;
  end_date?: Maybe<Order_By>;
  feed?: Maybe<Feed_Order_By>;
  id?: Maybe<Order_By>;
  rules?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  winner?: Maybe<Users_Order_By>;
  winner_id?: Maybe<Order_By>;
};

export type Challenge_Participant = {
  __typename?: 'challenge_participant';
  challenge: Challenge;
  challenge_id: Scalars['Int'];
  challenge_participant_state: Challenge_Participant_State;
  progress?: Maybe<Scalars['float8']>;
  state: Challenge_Participant_State_Enum;
  user: Users;
  user_id: Scalars['String'];
};

export type Challenge_Participant_Aggregate = {
  __typename?: 'challenge_participant_aggregate';
  aggregate?: Maybe<Challenge_Participant_Aggregate_Fields>;
  nodes: Array<Challenge_Participant>;
};

export type Challenge_Participant_Aggregate_Fields = {
  __typename?: 'challenge_participant_aggregate_fields';
  avg?: Maybe<Challenge_Participant_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Participant_Max_Fields>;
  min?: Maybe<Challenge_Participant_Min_Fields>;
  stddev?: Maybe<Challenge_Participant_Stddev_Fields>;
  stddev_pop?: Maybe<Challenge_Participant_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Challenge_Participant_Stddev_Samp_Fields>;
  sum?: Maybe<Challenge_Participant_Sum_Fields>;
  var_pop?: Maybe<Challenge_Participant_Var_Pop_Fields>;
  var_samp?: Maybe<Challenge_Participant_Var_Samp_Fields>;
  variance?: Maybe<Challenge_Participant_Variance_Fields>;
};


export type Challenge_Participant_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Participant_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Participant_Aggregate_Order_By = {
  avg?: Maybe<Challenge_Participant_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Participant_Max_Order_By>;
  min?: Maybe<Challenge_Participant_Min_Order_By>;
  stddev?: Maybe<Challenge_Participant_Stddev_Order_By>;
  stddev_pop?: Maybe<Challenge_Participant_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Challenge_Participant_Stddev_Samp_Order_By>;
  sum?: Maybe<Challenge_Participant_Sum_Order_By>;
  var_pop?: Maybe<Challenge_Participant_Var_Pop_Order_By>;
  var_samp?: Maybe<Challenge_Participant_Var_Samp_Order_By>;
  variance?: Maybe<Challenge_Participant_Variance_Order_By>;
};

export type Challenge_Participant_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Participant_Insert_Input>;
  on_conflict?: Maybe<Challenge_Participant_On_Conflict>;
};

export type Challenge_Participant_Avg_Fields = {
  __typename?: 'challenge_participant_avg_fields';
  challenge_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

export type Challenge_Participant_Avg_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export type Challenge_Participant_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Participant_Bool_Exp>>>;
  _not?: Maybe<Challenge_Participant_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Participant_Bool_Exp>>>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challenge_id?: Maybe<Int_Comparison_Exp>;
  challenge_participant_state?: Maybe<Challenge_Participant_State_Bool_Exp>;
  progress?: Maybe<Float8_Comparison_Exp>;
  state?: Maybe<Challenge_Participant_State_Enum_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

export enum Challenge_Participant_Constraint {
  ChallengeParticipantsPkey = 'challenge_participants_pkey'
}

export type Challenge_Participant_Inc_Input = {
  challenge_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
};

export type Challenge_Participant_Insert_Input = {
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challenge_id?: Maybe<Scalars['Int']>;
  challenge_participant_state?: Maybe<Challenge_Participant_State_Obj_Rel_Insert_Input>;
  progress?: Maybe<Scalars['float8']>;
  state?: Maybe<Challenge_Participant_State_Enum>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type Challenge_Participant_Max_Fields = {
  __typename?: 'challenge_participant_max_fields';
  challenge_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Challenge_Participant_Max_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Challenge_Participant_Min_Fields = {
  __typename?: 'challenge_participant_min_fields';
  challenge_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Challenge_Participant_Min_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Challenge_Participant_Mutation_Response = {
  __typename?: 'challenge_participant_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge_Participant>;
};

export type Challenge_Participant_Obj_Rel_Insert_Input = {
  data: Challenge_Participant_Insert_Input;
  on_conflict?: Maybe<Challenge_Participant_On_Conflict>;
};

export type Challenge_Participant_On_Conflict = {
  constraint: Challenge_Participant_Constraint;
  update_columns: Array<Challenge_Participant_Update_Column>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};

export type Challenge_Participant_Order_By = {
  challenge?: Maybe<Challenge_Order_By>;
  challenge_id?: Maybe<Order_By>;
  challenge_participant_state?: Maybe<Challenge_Participant_State_Order_By>;
  progress?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Challenge_Participant_Pk_Columns_Input = {
  challenge_id: Scalars['Int'];
  user_id: Scalars['String'];
};

export enum Challenge_Participant_Select_Column {
  ChallengeId = 'challenge_id',
  Progress = 'progress',
  State = 'state',
  UserId = 'user_id'
}

export type Challenge_Participant_Set_Input = {
  challenge_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
  state?: Maybe<Challenge_Participant_State_Enum>;
  user_id?: Maybe<Scalars['String']>;
};

export type Challenge_Participant_State = {
  __typename?: 'challenge_participant_state';
  challenge_participants: Array<Challenge_Participant>;
  challenge_participants_aggregate: Challenge_Participant_Aggregate;
  state: Scalars['String'];
};


export type Challenge_Participant_StateChallenge_ParticipantsArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type Challenge_Participant_StateChallenge_Participants_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};

export type Challenge_Participant_State_Aggregate = {
  __typename?: 'challenge_participant_state_aggregate';
  aggregate?: Maybe<Challenge_Participant_State_Aggregate_Fields>;
  nodes: Array<Challenge_Participant_State>;
};

export type Challenge_Participant_State_Aggregate_Fields = {
  __typename?: 'challenge_participant_state_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Participant_State_Max_Fields>;
  min?: Maybe<Challenge_Participant_State_Min_Fields>;
};


export type Challenge_Participant_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Participant_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Participant_State_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Participant_State_Max_Order_By>;
  min?: Maybe<Challenge_Participant_State_Min_Order_By>;
};

export type Challenge_Participant_State_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Participant_State_Insert_Input>;
  on_conflict?: Maybe<Challenge_Participant_State_On_Conflict>;
};

export type Challenge_Participant_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Participant_State_Bool_Exp>>>;
  _not?: Maybe<Challenge_Participant_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Participant_State_Bool_Exp>>>;
  challenge_participants?: Maybe<Challenge_Participant_Bool_Exp>;
  state?: Maybe<String_Comparison_Exp>;
};

export enum Challenge_Participant_State_Constraint {
  ChallengeParticipantStatePkey = 'challenge_participant_state_pkey'
}

export enum Challenge_Participant_State_Enum {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type Challenge_Participant_State_Enum_Comparison_Exp = {
  _eq?: Maybe<Challenge_Participant_State_Enum>;
  _in?: Maybe<Array<Challenge_Participant_State_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Challenge_Participant_State_Enum>;
  _nin?: Maybe<Array<Challenge_Participant_State_Enum>>;
};

export type Challenge_Participant_State_Insert_Input = {
  challenge_participants?: Maybe<Challenge_Participant_Arr_Rel_Insert_Input>;
  state?: Maybe<Scalars['String']>;
};

export type Challenge_Participant_State_Max_Fields = {
  __typename?: 'challenge_participant_state_max_fields';
  state?: Maybe<Scalars['String']>;
};

export type Challenge_Participant_State_Max_Order_By = {
  state?: Maybe<Order_By>;
};

export type Challenge_Participant_State_Min_Fields = {
  __typename?: 'challenge_participant_state_min_fields';
  state?: Maybe<Scalars['String']>;
};

export type Challenge_Participant_State_Min_Order_By = {
  state?: Maybe<Order_By>;
};

export type Challenge_Participant_State_Mutation_Response = {
  __typename?: 'challenge_participant_state_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge_Participant_State>;
};

export type Challenge_Participant_State_Obj_Rel_Insert_Input = {
  data: Challenge_Participant_State_Insert_Input;
  on_conflict?: Maybe<Challenge_Participant_State_On_Conflict>;
};

export type Challenge_Participant_State_On_Conflict = {
  constraint: Challenge_Participant_State_Constraint;
  update_columns: Array<Challenge_Participant_State_Update_Column>;
  where?: Maybe<Challenge_Participant_State_Bool_Exp>;
};

export type Challenge_Participant_State_Order_By = {
  challenge_participants_aggregate?: Maybe<Challenge_Participant_Aggregate_Order_By>;
  state?: Maybe<Order_By>;
};

export type Challenge_Participant_State_Pk_Columns_Input = {
  state: Scalars['String'];
};

export enum Challenge_Participant_State_Select_Column {
  State = 'state'
}

export type Challenge_Participant_State_Set_Input = {
  state?: Maybe<Scalars['String']>;
};

export enum Challenge_Participant_State_Update_Column {
  State = 'state'
}

export type Challenge_Participant_Stddev_Fields = {
  __typename?: 'challenge_participant_stddev_fields';
  challenge_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

export type Challenge_Participant_Stddev_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export type Challenge_Participant_Stddev_Pop_Fields = {
  __typename?: 'challenge_participant_stddev_pop_fields';
  challenge_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

export type Challenge_Participant_Stddev_Pop_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export type Challenge_Participant_Stddev_Samp_Fields = {
  __typename?: 'challenge_participant_stddev_samp_fields';
  challenge_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

export type Challenge_Participant_Stddev_Samp_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export type Challenge_Participant_Sum_Fields = {
  __typename?: 'challenge_participant_sum_fields';
  challenge_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
};

export type Challenge_Participant_Sum_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export enum Challenge_Participant_Update_Column {
  ChallengeId = 'challenge_id',
  Progress = 'progress',
  State = 'state',
  UserId = 'user_id'
}

export type Challenge_Participant_Var_Pop_Fields = {
  __typename?: 'challenge_participant_var_pop_fields';
  challenge_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

export type Challenge_Participant_Var_Pop_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export type Challenge_Participant_Var_Samp_Fields = {
  __typename?: 'challenge_participant_var_samp_fields';
  challenge_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

export type Challenge_Participant_Var_Samp_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export type Challenge_Participant_Variance_Fields = {
  __typename?: 'challenge_participant_variance_fields';
  challenge_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

export type Challenge_Participant_Variance_Order_By = {
  challenge_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

export type Challenge_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Challenge_Select_Column {
  ChallengeType = 'challenge_type',
  CreatedAt = 'created_at',
  CreatedBy = 'created_by',
  EndDate = 'end_date',
  Id = 'id',
  Rules = 'rules',
  StartDate = 'start_date',
  State = 'state',
  WinnerId = 'winner_id'
}

export type Challenge_Set_Input = {
  challenge_type?: Maybe<Challenge_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  rules?: Maybe<Scalars['json']>;
  start_date?: Maybe<Scalars['date']>;
  state?: Maybe<Challenge_State_Enum>;
  winner_id?: Maybe<Scalars['String']>;
};

export type Challenge_State = {
  __typename?: 'challenge_state';
  challenges: Array<Challenge>;
  challenges_aggregate: Challenge_Aggregate;
  state: Scalars['String'];
};


export type Challenge_StateChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Challenge_StateChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};

export type Challenge_State_Aggregate = {
  __typename?: 'challenge_state_aggregate';
  aggregate?: Maybe<Challenge_State_Aggregate_Fields>;
  nodes: Array<Challenge_State>;
};

export type Challenge_State_Aggregate_Fields = {
  __typename?: 'challenge_state_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_State_Max_Fields>;
  min?: Maybe<Challenge_State_Min_Fields>;
};


export type Challenge_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_State_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_State_Max_Order_By>;
  min?: Maybe<Challenge_State_Min_Order_By>;
};

export type Challenge_State_Arr_Rel_Insert_Input = {
  data: Array<Challenge_State_Insert_Input>;
  on_conflict?: Maybe<Challenge_State_On_Conflict>;
};

export type Challenge_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_State_Bool_Exp>>>;
  _not?: Maybe<Challenge_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_State_Bool_Exp>>>;
  challenges?: Maybe<Challenge_Bool_Exp>;
  state?: Maybe<String_Comparison_Exp>;
};

export enum Challenge_State_Constraint {
  ChallengeStatePkey = 'challenge_state_pkey'
}

export enum Challenge_State_Enum {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Finished = 'FINISHED'
}

export type Challenge_State_Enum_Comparison_Exp = {
  _eq?: Maybe<Challenge_State_Enum>;
  _in?: Maybe<Array<Challenge_State_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Challenge_State_Enum>;
  _nin?: Maybe<Array<Challenge_State_Enum>>;
};

export type Challenge_State_Insert_Input = {
  challenges?: Maybe<Challenge_Arr_Rel_Insert_Input>;
  state?: Maybe<Scalars['String']>;
};

export type Challenge_State_Max_Fields = {
  __typename?: 'challenge_state_max_fields';
  state?: Maybe<Scalars['String']>;
};

export type Challenge_State_Max_Order_By = {
  state?: Maybe<Order_By>;
};

export type Challenge_State_Min_Fields = {
  __typename?: 'challenge_state_min_fields';
  state?: Maybe<Scalars['String']>;
};

export type Challenge_State_Min_Order_By = {
  state?: Maybe<Order_By>;
};

export type Challenge_State_Mutation_Response = {
  __typename?: 'challenge_state_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge_State>;
};

export type Challenge_State_Obj_Rel_Insert_Input = {
  data: Challenge_State_Insert_Input;
  on_conflict?: Maybe<Challenge_State_On_Conflict>;
};

export type Challenge_State_On_Conflict = {
  constraint: Challenge_State_Constraint;
  update_columns: Array<Challenge_State_Update_Column>;
  where?: Maybe<Challenge_State_Bool_Exp>;
};

export type Challenge_State_Order_By = {
  challenges_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
  state?: Maybe<Order_By>;
};

export type Challenge_State_Pk_Columns_Input = {
  state: Scalars['String'];
};

export enum Challenge_State_Select_Column {
  State = 'state'
}

export type Challenge_State_Set_Input = {
  state?: Maybe<Scalars['String']>;
};

export enum Challenge_State_Update_Column {
  State = 'state'
}

export type Challenge_Stddev_Fields = {
  __typename?: 'challenge_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Challenge_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Challenge_Stddev_Pop_Fields = {
  __typename?: 'challenge_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Challenge_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Challenge_Stddev_Samp_Fields = {
  __typename?: 'challenge_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Challenge_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Challenge_Sum_Fields = {
  __typename?: 'challenge_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Challenge_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export type Challenge_Type = {
  __typename?: 'challenge_type';
  challenges: Array<Challenge>;
  challenges_aggregate: Challenge_Aggregate;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type Challenge_TypeChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Challenge_TypeChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};

export type Challenge_Type_Aggregate = {
  __typename?: 'challenge_type_aggregate';
  aggregate?: Maybe<Challenge_Type_Aggregate_Fields>;
  nodes: Array<Challenge_Type>;
};

export type Challenge_Type_Aggregate_Fields = {
  __typename?: 'challenge_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Type_Max_Fields>;
  min?: Maybe<Challenge_Type_Min_Fields>;
};


export type Challenge_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Type_Max_Order_By>;
  min?: Maybe<Challenge_Type_Min_Order_By>;
};

export type Challenge_Type_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Type_Insert_Input>;
  on_conflict?: Maybe<Challenge_Type_On_Conflict>;
};

export type Challenge_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Type_Bool_Exp>>>;
  _not?: Maybe<Challenge_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Type_Bool_Exp>>>;
  challenges?: Maybe<Challenge_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Challenge_Type_Constraint {
  ChallengeTypeDescriptionKey = 'challenge_type_description_key',
  ChallengeTypePkey = 'challenge_type_pkey'
}

export enum Challenge_Type_Enum {
  Score = 'SCORE',
  ScoreCategory = 'SCORE_CATEGORY',
  Time = 'TIME',
  TimeCategory = 'TIME_CATEGORY'
}

export type Challenge_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Challenge_Type_Enum>;
  _in?: Maybe<Array<Challenge_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Challenge_Type_Enum>;
  _nin?: Maybe<Array<Challenge_Type_Enum>>;
};

export type Challenge_Type_Insert_Input = {
  challenges?: Maybe<Challenge_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Challenge_Type_Max_Fields = {
  __typename?: 'challenge_type_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Challenge_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Challenge_Type_Min_Fields = {
  __typename?: 'challenge_type_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Challenge_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Challenge_Type_Mutation_Response = {
  __typename?: 'challenge_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge_Type>;
};

export type Challenge_Type_Obj_Rel_Insert_Input = {
  data: Challenge_Type_Insert_Input;
  on_conflict?: Maybe<Challenge_Type_On_Conflict>;
};

export type Challenge_Type_On_Conflict = {
  constraint: Challenge_Type_Constraint;
  update_columns: Array<Challenge_Type_Update_Column>;
  where?: Maybe<Challenge_Type_Bool_Exp>;
};

export type Challenge_Type_Order_By = {
  challenges_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Challenge_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

export enum Challenge_Type_Select_Column {
  Description = 'description',
  Name = 'name'
}

export type Challenge_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum Challenge_Type_Update_Column {
  Description = 'description',
  Name = 'name'
}

export enum Challenge_Update_Column {
  ChallengeType = 'challenge_type',
  CreatedAt = 'created_at',
  CreatedBy = 'created_by',
  EndDate = 'end_date',
  Id = 'id',
  Rules = 'rules',
  StartDate = 'start_date',
  State = 'state',
  WinnerId = 'winner_id'
}

export type Challenge_Var_Pop_Fields = {
  __typename?: 'challenge_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Challenge_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Challenge_Var_Samp_Fields = {
  __typename?: 'challenge_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Challenge_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Challenge_Variance_Fields = {
  __typename?: 'challenge_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Challenge_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Comments = {
  __typename?: 'comments';
  activity: Activities;
  activity_id: Scalars['Int'];
  comment_id: Scalars['Int'];
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user: Users;
  user_id: Scalars['String'];
};

export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

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


export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

export type Comments_Avg_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

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

export enum Comments_Constraint {
  CommentsPkey = 'Comments_pkey'
}

export type Comments_Inc_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
};

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

export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Comments_Max_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Comments_Min_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Comments>;
};

export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

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

export type Comments_Pk_Columns_Input = {
  comment_id: Scalars['Int'];
};

export enum Comments_Select_Column {
  ActivityId = 'activity_id',
  CommentId = 'comment_id',
  Content = 'content',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Comments_Set_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

export type Comments_Stddev_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

export type Comments_Stddev_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

export type Comments_Stddev_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  activity_id?: Maybe<Scalars['Int']>;
  comment_id?: Maybe<Scalars['Int']>;
};

export type Comments_Sum_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

export enum Comments_Update_Column {
  ActivityId = 'activity_id',
  CommentId = 'comment_id',
  Content = 'content',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

export type Comments_Var_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

export type Comments_Var_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};

export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  activity_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
};

export type Comments_Variance_Order_By = {
  activity_id?: Maybe<Order_By>;
  comment_id?: Maybe<Order_By>;
};


export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

export type Feed = {
  __typename?: 'feed';
  achievement_id?: Maybe<Scalars['Int']>;
  activity?: Maybe<Activities>;
  activityByActivityIdCreatedAtUserId?: Maybe<Activities>;
  activity_id?: Maybe<Scalars['Int']>;
  challenge?: Maybe<Challenge>;
  challenge_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedTypeByFeedType: Feed_Type;
  feed_type: Feed_Type_Enum;
  id: Scalars['Int'];
  user?: Maybe<Users>;
  user_achievement?: Maybe<User_Achievement>;
  user_id?: Maybe<Scalars['String']>;
};

export type Feed_Aggregate = {
  __typename?: 'feed_aggregate';
  aggregate?: Maybe<Feed_Aggregate_Fields>;
  nodes: Array<Feed>;
};

export type Feed_Aggregate_Fields = {
  __typename?: 'feed_aggregate_fields';
  avg?: Maybe<Feed_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Feed_Max_Fields>;
  min?: Maybe<Feed_Min_Fields>;
  stddev?: Maybe<Feed_Stddev_Fields>;
  stddev_pop?: Maybe<Feed_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feed_Stddev_Samp_Fields>;
  sum?: Maybe<Feed_Sum_Fields>;
  var_pop?: Maybe<Feed_Var_Pop_Fields>;
  var_samp?: Maybe<Feed_Var_Samp_Fields>;
  variance?: Maybe<Feed_Variance_Fields>;
};


export type Feed_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Feed_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Feed_Aggregate_Order_By = {
  avg?: Maybe<Feed_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Feed_Max_Order_By>;
  min?: Maybe<Feed_Min_Order_By>;
  stddev?: Maybe<Feed_Stddev_Order_By>;
  stddev_pop?: Maybe<Feed_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Feed_Stddev_Samp_Order_By>;
  sum?: Maybe<Feed_Sum_Order_By>;
  var_pop?: Maybe<Feed_Var_Pop_Order_By>;
  var_samp?: Maybe<Feed_Var_Samp_Order_By>;
  variance?: Maybe<Feed_Variance_Order_By>;
};

export type Feed_Arr_Rel_Insert_Input = {
  data: Array<Feed_Insert_Input>;
  on_conflict?: Maybe<Feed_On_Conflict>;
};

export type Feed_Avg_Fields = {
  __typename?: 'feed_avg_fields';
  achievement_id?: Maybe<Scalars['Float']>;
  activity_id?: Maybe<Scalars['Float']>;
  challenge_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Feed_Avg_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Feed_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feed_Bool_Exp>>>;
  _not?: Maybe<Feed_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feed_Bool_Exp>>>;
  achievement_id?: Maybe<Int_Comparison_Exp>;
  activity?: Maybe<Activities_Bool_Exp>;
  activityByActivityIdCreatedAtUserId?: Maybe<Activities_Bool_Exp>;
  activity_id?: Maybe<Int_Comparison_Exp>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challenge_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedTypeByFeedType?: Maybe<Feed_Type_Bool_Exp>;
  feed_type?: Maybe<Feed_Type_Enum_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_achievement?: Maybe<User_Achievement_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

export enum Feed_Constraint {
  FeedAchievementIdUserIdKey = 'feed_achievement_id_user_id_key',
  FeedActivityIdUserIdKey = 'feed_activity_id_user_id_key',
  FeedChallengeIdUserIdKey = 'feed_challenge_id_user_id_key',
  FeedPkey = 'feed_pkey'
}

export type Feed_Inc_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
  activity_id?: Maybe<Scalars['Int']>;
  challenge_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Feed_Insert_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
  activity?: Maybe<Activities_Obj_Rel_Insert_Input>;
  activityByActivityIdCreatedAtUserId?: Maybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: Maybe<Scalars['Int']>;
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challenge_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedTypeByFeedType?: Maybe<Feed_Type_Obj_Rel_Insert_Input>;
  feed_type?: Maybe<Feed_Type_Enum>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_achievement?: Maybe<User_Achievement_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type Feed_Max_Fields = {
  __typename?: 'feed_max_fields';
  achievement_id?: Maybe<Scalars['Int']>;
  activity_id?: Maybe<Scalars['Int']>;
  challenge_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Feed_Max_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Feed_Min_Fields = {
  __typename?: 'feed_min_fields';
  achievement_id?: Maybe<Scalars['Int']>;
  activity_id?: Maybe<Scalars['Int']>;
  challenge_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Feed_Min_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Feed_Mutation_Response = {
  __typename?: 'feed_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Feed>;
};

export type Feed_Obj_Rel_Insert_Input = {
  data: Feed_Insert_Input;
  on_conflict?: Maybe<Feed_On_Conflict>;
};

export type Feed_On_Conflict = {
  constraint: Feed_Constraint;
  update_columns: Array<Feed_Update_Column>;
  where?: Maybe<Feed_Bool_Exp>;
};

export type Feed_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity?: Maybe<Activities_Order_By>;
  activityByActivityIdCreatedAtUserId?: Maybe<Activities_Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge?: Maybe<Challenge_Order_By>;
  challenge_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  feedTypeByFeedType?: Maybe<Feed_Type_Order_By>;
  feed_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_achievement?: Maybe<User_Achievement_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Feed_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Feed_Select_Column {
  AchievementId = 'achievement_id',
  ActivityId = 'activity_id',
  ChallengeId = 'challenge_id',
  CreatedAt = 'created_at',
  FeedType = 'feed_type',
  Id = 'id',
  UserId = 'user_id'
}

export type Feed_Set_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
  activity_id?: Maybe<Scalars['Int']>;
  challenge_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feed_type?: Maybe<Feed_Type_Enum>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Feed_Stddev_Fields = {
  __typename?: 'feed_stddev_fields';
  achievement_id?: Maybe<Scalars['Float']>;
  activity_id?: Maybe<Scalars['Float']>;
  challenge_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Feed_Stddev_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Feed_Stddev_Pop_Fields = {
  __typename?: 'feed_stddev_pop_fields';
  achievement_id?: Maybe<Scalars['Float']>;
  activity_id?: Maybe<Scalars['Float']>;
  challenge_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Feed_Stddev_Pop_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Feed_Stddev_Samp_Fields = {
  __typename?: 'feed_stddev_samp_fields';
  achievement_id?: Maybe<Scalars['Float']>;
  activity_id?: Maybe<Scalars['Float']>;
  challenge_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Feed_Stddev_Samp_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Feed_Sum_Fields = {
  __typename?: 'feed_sum_fields';
  achievement_id?: Maybe<Scalars['Int']>;
  activity_id?: Maybe<Scalars['Int']>;
  challenge_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Feed_Sum_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Feed_Type = {
  __typename?: 'feed_type';
  feeds: Array<Feed>;
  feeds_aggregate: Feed_Aggregate;
  name: Scalars['String'];
};


export type Feed_TypeFeedsArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type Feed_TypeFeeds_AggregateArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};

export type Feed_Type_Aggregate = {
  __typename?: 'feed_type_aggregate';
  aggregate?: Maybe<Feed_Type_Aggregate_Fields>;
  nodes: Array<Feed_Type>;
};

export type Feed_Type_Aggregate_Fields = {
  __typename?: 'feed_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Feed_Type_Max_Fields>;
  min?: Maybe<Feed_Type_Min_Fields>;
};


export type Feed_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Feed_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Feed_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Feed_Type_Max_Order_By>;
  min?: Maybe<Feed_Type_Min_Order_By>;
};

export type Feed_Type_Arr_Rel_Insert_Input = {
  data: Array<Feed_Type_Insert_Input>;
  on_conflict?: Maybe<Feed_Type_On_Conflict>;
};

export type Feed_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feed_Type_Bool_Exp>>>;
  _not?: Maybe<Feed_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feed_Type_Bool_Exp>>>;
  feeds?: Maybe<Feed_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Feed_Type_Constraint {
  FeedTypePkey = 'feed_type_pkey'
}

export enum Feed_Type_Enum {
  Achievement = 'ACHIEVEMENT',
  Activity = 'ACTIVITY',
  Challenge = 'CHALLENGE'
}

export type Feed_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Feed_Type_Enum>;
  _in?: Maybe<Array<Feed_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Feed_Type_Enum>;
  _nin?: Maybe<Array<Feed_Type_Enum>>;
};

export type Feed_Type_Insert_Input = {
  feeds?: Maybe<Feed_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

export type Feed_Type_Max_Fields = {
  __typename?: 'feed_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

export type Feed_Type_Max_Order_By = {
  name?: Maybe<Order_By>;
};

export type Feed_Type_Min_Fields = {
  __typename?: 'feed_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

export type Feed_Type_Min_Order_By = {
  name?: Maybe<Order_By>;
};

export type Feed_Type_Mutation_Response = {
  __typename?: 'feed_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Feed_Type>;
};

export type Feed_Type_Obj_Rel_Insert_Input = {
  data: Feed_Type_Insert_Input;
  on_conflict?: Maybe<Feed_Type_On_Conflict>;
};

export type Feed_Type_On_Conflict = {
  constraint: Feed_Type_Constraint;
  update_columns: Array<Feed_Type_Update_Column>;
  where?: Maybe<Feed_Type_Bool_Exp>;
};

export type Feed_Type_Order_By = {
  feeds_aggregate?: Maybe<Feed_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

export type Feed_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

export enum Feed_Type_Select_Column {
  Name = 'name'
}

export type Feed_Type_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

export enum Feed_Type_Update_Column {
  Name = 'name'
}

export enum Feed_Update_Column {
  AchievementId = 'achievement_id',
  ActivityId = 'activity_id',
  ChallengeId = 'challenge_id',
  CreatedAt = 'created_at',
  FeedType = 'feed_type',
  Id = 'id',
  UserId = 'user_id'
}

export type Feed_Var_Pop_Fields = {
  __typename?: 'feed_var_pop_fields';
  achievement_id?: Maybe<Scalars['Float']>;
  activity_id?: Maybe<Scalars['Float']>;
  challenge_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Feed_Var_Pop_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Feed_Var_Samp_Fields = {
  __typename?: 'feed_var_samp_fields';
  achievement_id?: Maybe<Scalars['Float']>;
  activity_id?: Maybe<Scalars['Float']>;
  challenge_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Feed_Var_Samp_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Feed_Variance_Fields = {
  __typename?: 'feed_variance_fields';
  achievement_id?: Maybe<Scalars['Float']>;
  activity_id?: Maybe<Scalars['Float']>;
  challenge_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Feed_Variance_Order_By = {
  achievement_id?: Maybe<Order_By>;
  activity_id?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};


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

export type Followings = {
  __typename?: 'followings';
  created_at?: Maybe<Scalars['timestamptz']>;
  follower: Users;
  following_id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user: Users;
  user_id: Scalars['String'];
};

export type Followings_Aggregate = {
  __typename?: 'followings_aggregate';
  aggregate?: Maybe<Followings_Aggregate_Fields>;
  nodes: Array<Followings>;
};

export type Followings_Aggregate_Fields = {
  __typename?: 'followings_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Followings_Max_Fields>;
  min?: Maybe<Followings_Min_Fields>;
};


export type Followings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Followings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Followings_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Followings_Max_Order_By>;
  min?: Maybe<Followings_Min_Order_By>;
};

export type Followings_Arr_Rel_Insert_Input = {
  data: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

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

export enum Followings_Constraint {
  FollowingsPkey = 'Followings_pkey'
}

export type Followings_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  follower?: Maybe<Users_Obj_Rel_Insert_Input>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type Followings_Max_Fields = {
  __typename?: 'followings_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Followings_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Followings_Min_Fields = {
  __typename?: 'followings_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Followings_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Followings_Mutation_Response = {
  __typename?: 'followings_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Followings>;
};

export type Followings_Obj_Rel_Insert_Input = {
  data: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

export type Followings_On_Conflict = {
  constraint: Followings_Constraint;
  update_columns: Array<Followings_Update_Column>;
  where?: Maybe<Followings_Bool_Exp>;
};

export type Followings_Order_By = {
  created_at?: Maybe<Order_By>;
  follower?: Maybe<Users_Order_By>;
  following_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Followings_Pk_Columns_Input = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};

export enum Followings_Select_Column {
  CreatedAt = 'created_at',
  FollowingId = 'following_id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Followings_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export enum Followings_Update_Column {
  CreatedAt = 'created_at',
  FollowingId = 'following_id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Friends_Tracking = {
  __typename?: 'friends_tracking';
  geofence_id: Scalars['Int'];
  id: Scalars['Int'];
  linking_word: Scalars['String'];
  user_join?: Maybe<Scalars['String']>;
  user_start: Scalars['String'];
};

export type Friends_Tracking_Aggregate = {
  __typename?: 'friends_tracking_aggregate';
  aggregate?: Maybe<Friends_Tracking_Aggregate_Fields>;
  nodes: Array<Friends_Tracking>;
};

export type Friends_Tracking_Aggregate_Fields = {
  __typename?: 'friends_tracking_aggregate_fields';
  avg?: Maybe<Friends_Tracking_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Friends_Tracking_Max_Fields>;
  min?: Maybe<Friends_Tracking_Min_Fields>;
  stddev?: Maybe<Friends_Tracking_Stddev_Fields>;
  stddev_pop?: Maybe<Friends_Tracking_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Friends_Tracking_Stddev_Samp_Fields>;
  sum?: Maybe<Friends_Tracking_Sum_Fields>;
  var_pop?: Maybe<Friends_Tracking_Var_Pop_Fields>;
  var_samp?: Maybe<Friends_Tracking_Var_Samp_Fields>;
  variance?: Maybe<Friends_Tracking_Variance_Fields>;
};


export type Friends_Tracking_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Friends_Tracking_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Friends_Tracking_Aggregate_Order_By = {
  avg?: Maybe<Friends_Tracking_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Friends_Tracking_Max_Order_By>;
  min?: Maybe<Friends_Tracking_Min_Order_By>;
  stddev?: Maybe<Friends_Tracking_Stddev_Order_By>;
  stddev_pop?: Maybe<Friends_Tracking_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Friends_Tracking_Stddev_Samp_Order_By>;
  sum?: Maybe<Friends_Tracking_Sum_Order_By>;
  var_pop?: Maybe<Friends_Tracking_Var_Pop_Order_By>;
  var_samp?: Maybe<Friends_Tracking_Var_Samp_Order_By>;
  variance?: Maybe<Friends_Tracking_Variance_Order_By>;
};

export type Friends_Tracking_Arr_Rel_Insert_Input = {
  data: Array<Friends_Tracking_Insert_Input>;
  on_conflict?: Maybe<Friends_Tracking_On_Conflict>;
};

export type Friends_Tracking_Avg_Fields = {
  __typename?: 'friends_tracking_avg_fields';
  geofence_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Friends_Tracking_Avg_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Friends_Tracking_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Friends_Tracking_Bool_Exp>>>;
  _not?: Maybe<Friends_Tracking_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Friends_Tracking_Bool_Exp>>>;
  geofence_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  linking_word?: Maybe<String_Comparison_Exp>;
  user_join?: Maybe<String_Comparison_Exp>;
  user_start?: Maybe<String_Comparison_Exp>;
};

export enum Friends_Tracking_Constraint {
  FriendsTrackingPkey = 'friends_tracking_pkey'
}

export type Friends_Tracking_Inc_Input = {
  geofence_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Friends_Tracking_Insert_Input = {
  geofence_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  linking_word?: Maybe<Scalars['String']>;
  user_join?: Maybe<Scalars['String']>;
  user_start?: Maybe<Scalars['String']>;
};

export type Friends_Tracking_Max_Fields = {
  __typename?: 'friends_tracking_max_fields';
  geofence_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  linking_word?: Maybe<Scalars['String']>;
  user_join?: Maybe<Scalars['String']>;
  user_start?: Maybe<Scalars['String']>;
};

export type Friends_Tracking_Max_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  linking_word?: Maybe<Order_By>;
  user_join?: Maybe<Order_By>;
  user_start?: Maybe<Order_By>;
};

export type Friends_Tracking_Min_Fields = {
  __typename?: 'friends_tracking_min_fields';
  geofence_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  linking_word?: Maybe<Scalars['String']>;
  user_join?: Maybe<Scalars['String']>;
  user_start?: Maybe<Scalars['String']>;
};

export type Friends_Tracking_Min_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  linking_word?: Maybe<Order_By>;
  user_join?: Maybe<Order_By>;
  user_start?: Maybe<Order_By>;
};

export type Friends_Tracking_Mutation_Response = {
  __typename?: 'friends_tracking_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Friends_Tracking>;
};

export type Friends_Tracking_Obj_Rel_Insert_Input = {
  data: Friends_Tracking_Insert_Input;
  on_conflict?: Maybe<Friends_Tracking_On_Conflict>;
};

export type Friends_Tracking_On_Conflict = {
  constraint: Friends_Tracking_Constraint;
  update_columns: Array<Friends_Tracking_Update_Column>;
  where?: Maybe<Friends_Tracking_Bool_Exp>;
};

export type Friends_Tracking_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  linking_word?: Maybe<Order_By>;
  user_join?: Maybe<Order_By>;
  user_start?: Maybe<Order_By>;
};

export type Friends_Tracking_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Friends_Tracking_Select_Column {
  GeofenceId = 'geofence_id',
  Id = 'id',
  LinkingWord = 'linking_word',
  UserJoin = 'user_join',
  UserStart = 'user_start'
}

export type Friends_Tracking_Set_Input = {
  geofence_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  linking_word?: Maybe<Scalars['String']>;
  user_join?: Maybe<Scalars['String']>;
  user_start?: Maybe<Scalars['String']>;
};

export type Friends_Tracking_Stddev_Fields = {
  __typename?: 'friends_tracking_stddev_fields';
  geofence_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Friends_Tracking_Stddev_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Friends_Tracking_Stddev_Pop_Fields = {
  __typename?: 'friends_tracking_stddev_pop_fields';
  geofence_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Friends_Tracking_Stddev_Pop_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Friends_Tracking_Stddev_Samp_Fields = {
  __typename?: 'friends_tracking_stddev_samp_fields';
  geofence_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Friends_Tracking_Stddev_Samp_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Friends_Tracking_Sum_Fields = {
  __typename?: 'friends_tracking_sum_fields';
  geofence_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Friends_Tracking_Sum_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Friends_Tracking_Update_Column {
  GeofenceId = 'geofence_id',
  Id = 'id',
  LinkingWord = 'linking_word',
  UserJoin = 'user_join',
  UserStart = 'user_start'
}

export type Friends_Tracking_Var_Pop_Fields = {
  __typename?: 'friends_tracking_var_pop_fields';
  geofence_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Friends_Tracking_Var_Pop_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Friends_Tracking_Var_Samp_Fields = {
  __typename?: 'friends_tracking_var_samp_fields';
  geofence_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Friends_Tracking_Var_Samp_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Friends_Tracking_Variance_Fields = {
  __typename?: 'friends_tracking_variance_fields';
  geofence_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Friends_Tracking_Variance_Order_By = {
  geofence_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geofence_Variants = {
  __typename?: 'geofence_variants';
  description?: Maybe<Scalars['String']>;
  geofences: Array<Geofences>;
  geofences_aggregate: Geofences_Aggregate;
  name: Scalars['String'];
};


export type Geofence_VariantsGeofencesArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


export type Geofence_VariantsGeofences_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};

export type Geofence_Variants_Aggregate = {
  __typename?: 'geofence_variants_aggregate';
  aggregate?: Maybe<Geofence_Variants_Aggregate_Fields>;
  nodes: Array<Geofence_Variants>;
};

export type Geofence_Variants_Aggregate_Fields = {
  __typename?: 'geofence_variants_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Geofence_Variants_Max_Fields>;
  min?: Maybe<Geofence_Variants_Min_Fields>;
};


export type Geofence_Variants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geofence_Variants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geofence_Variants_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Geofence_Variants_Max_Order_By>;
  min?: Maybe<Geofence_Variants_Min_Order_By>;
};

export type Geofence_Variants_Arr_Rel_Insert_Input = {
  data: Array<Geofence_Variants_Insert_Input>;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};

export type Geofence_Variants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Geofence_Variants_Bool_Exp>>>;
  _not?: Maybe<Geofence_Variants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Geofence_Variants_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  geofences?: Maybe<Geofences_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Geofence_Variants_Constraint {
  GeoFenceCategoriesPkey = 'geo_fence_categories_pkey'
}

export enum Geofence_Variants_Enum {
  Circle = 'CIRCLE',
  Polygon = 'POLYGON'
}

export type Geofence_Variants_Enum_Comparison_Exp = {
  _eq?: Maybe<Geofence_Variants_Enum>;
  _in?: Maybe<Array<Geofence_Variants_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Geofence_Variants_Enum>;
  _nin?: Maybe<Array<Geofence_Variants_Enum>>;
};

export type Geofence_Variants_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  geofences?: Maybe<Geofences_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

export type Geofence_Variants_Max_Fields = {
  __typename?: 'geofence_variants_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Geofence_Variants_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geofence_Variants_Min_Fields = {
  __typename?: 'geofence_variants_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Geofence_Variants_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geofence_Variants_Mutation_Response = {
  __typename?: 'geofence_variants_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geofence_Variants>;
};

export type Geofence_Variants_Obj_Rel_Insert_Input = {
  data: Geofence_Variants_Insert_Input;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};

export type Geofence_Variants_On_Conflict = {
  constraint: Geofence_Variants_Constraint;
  update_columns: Array<Geofence_Variants_Update_Column>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};

export type Geofence_Variants_Order_By = {
  description?: Maybe<Order_By>;
  geofences_aggregate?: Maybe<Geofences_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

export type Geofence_Variants_Pk_Columns_Input = {
  name: Scalars['String'];
};

export enum Geofence_Variants_Select_Column {
  Description = 'description',
  Name = 'name'
}

export type Geofence_Variants_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum Geofence_Variants_Update_Column {
  Description = 'description',
  Name = 'name'
}

export type Geofences = {
  __typename?: 'geofences';
  activities: Array<Activities>;
  activities_aggregate: Activities_Aggregate;
  category: Scalars['String'];
  coordinates?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  geofenceByCategory: Categories;
  geofence_variant: Geofence_Variants;
  id: Scalars['Int'];
  latitude: Scalars['float8'];
  longitude: Scalars['float8'];
  name: Scalars['String'];
  radius: Scalars['float8'];
  updated_at: Scalars['timestamptz'];
  variant: Geofence_Variants_Enum;
};


export type GeofencesActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type GeofencesActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};

export type Geofences_Aggregate = {
  __typename?: 'geofences_aggregate';
  aggregate?: Maybe<Geofences_Aggregate_Fields>;
  nodes: Array<Geofences>;
};

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


export type Geofences_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geofences_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Geofences_Arr_Rel_Insert_Input = {
  data: Array<Geofences_Insert_Input>;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};

export type Geofences_Avg_Fields = {
  __typename?: 'geofences_avg_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

export type Geofences_Avg_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

export type Geofences_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Geofences_Bool_Exp>>>;
  _not?: Maybe<Geofences_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Geofences_Bool_Exp>>>;
  activities?: Maybe<Activities_Bool_Exp>;
  category?: Maybe<String_Comparison_Exp>;
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

export enum Geofences_Constraint {
  GeofencesCoordinatesKey = 'geofences_coordinates_key',
  GeofencesLatitudeLongitudeKey = 'geofences_latitude_longitude_key',
  GeofencesNameKey = 'geofences_name_key',
  GeofencesPkey = 'geofences_pkey'
}

export type Geofences_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  radius?: Maybe<Scalars['float8']>;
};

export type Geofences_Insert_Input = {
  activities?: Maybe<Activities_Arr_Rel_Insert_Input>;
  category?: Maybe<Scalars['String']>;
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

export type Geofences_Max_Fields = {
  __typename?: 'geofences_max_fields';
  category?: Maybe<Scalars['String']>;
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

export type Geofences_Max_Order_By = {
  category?: Maybe<Order_By>;
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

export type Geofences_Min_Fields = {
  __typename?: 'geofences_min_fields';
  category?: Maybe<Scalars['String']>;
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

export type Geofences_Min_Order_By = {
  category?: Maybe<Order_By>;
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

export type Geofences_Mutation_Response = {
  __typename?: 'geofences_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geofences>;
};

export type Geofences_Obj_Rel_Insert_Input = {
  data: Geofences_Insert_Input;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};

export type Geofences_On_Conflict = {
  constraint: Geofences_Constraint;
  update_columns: Array<Geofences_Update_Column>;
  where?: Maybe<Geofences_Bool_Exp>;
};

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

export type Geofences_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Geofences_Select_Column {
  Category = 'category',
  Coordinates = 'coordinates',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Name = 'name',
  Radius = 'radius',
  UpdatedAt = 'updated_at',
  Variant = 'variant'
}

export type Geofences_Set_Input = {
  category?: Maybe<Scalars['String']>;
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

export type Geofences_Stddev_Fields = {
  __typename?: 'geofences_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

export type Geofences_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

export type Geofences_Stddev_Pop_Fields = {
  __typename?: 'geofences_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

export type Geofences_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

export type Geofences_Stddev_Samp_Fields = {
  __typename?: 'geofences_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

export type Geofences_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

export type Geofences_Sum_Fields = {
  __typename?: 'geofences_sum_fields';
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  radius?: Maybe<Scalars['float8']>;
};

export type Geofences_Sum_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

export enum Geofences_Update_Column {
  Category = 'category',
  Coordinates = 'coordinates',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Name = 'name',
  Radius = 'radius',
  UpdatedAt = 'updated_at',
  Variant = 'variant'
}

export type Geofences_Var_Pop_Fields = {
  __typename?: 'geofences_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

export type Geofences_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

export type Geofences_Var_Samp_Fields = {
  __typename?: 'geofences_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

export type Geofences_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

export type Geofences_Variance_Fields = {
  __typename?: 'geofences_variance_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};

export type Geofences_Variance_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  radius?: Maybe<Order_By>;
};

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


export type Interval_Comparison_Exp = {
  _eq?: Maybe<Scalars['interval']>;
  _gt?: Maybe<Scalars['interval']>;
  _gte?: Maybe<Scalars['interval']>;
  _in?: Maybe<Array<Scalars['interval']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['interval']>;
  _lte?: Maybe<Scalars['interval']>;
  _neq?: Maybe<Scalars['interval']>;
  _nin?: Maybe<Array<Scalars['interval']>>;
};


export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

export type Likes = {
  __typename?: 'likes';
  activity: Activities;
  activity_id: Scalars['Int'];
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user: Users;
  user_id: Scalars['String'];
};

export type Likes_Aggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

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


export type Likes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Likes_Arr_Rel_Insert_Input = {
  data: Array<Likes_Insert_Input>;
  on_conflict?: Maybe<Likes_On_Conflict>;
};

export type Likes_Avg_Fields = {
  __typename?: 'likes_avg_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

export type Likes_Avg_Order_By = {
  activity_id?: Maybe<Order_By>;
};

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

export enum Likes_Constraint {
  LikesPkey = 'Likes_pkey',
  LikesUserIdActivityIdKey = 'Likes_user_id_activity_id_key'
}

export type Likes_Inc_Input = {
  activity_id?: Maybe<Scalars['Int']>;
};

export type Likes_Insert_Input = {
  activity?: Maybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type Likes_Max_Fields = {
  __typename?: 'likes_max_fields';
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Likes_Max_Order_By = {
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Likes_Min_Fields = {
  __typename?: 'likes_min_fields';
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Likes_Min_Order_By = {
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Likes_Mutation_Response = {
  __typename?: 'likes_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Likes>;
};

export type Likes_Obj_Rel_Insert_Input = {
  data: Likes_Insert_Input;
  on_conflict?: Maybe<Likes_On_Conflict>;
};

export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns: Array<Likes_Update_Column>;
  where?: Maybe<Likes_Bool_Exp>;
};

export type Likes_Order_By = {
  activity?: Maybe<Activities_Order_By>;
  activity_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Likes_Pk_Columns_Input = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};

export enum Likes_Select_Column {
  ActivityId = 'activity_id',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Likes_Set_Input = {
  activity_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Likes_Stddev_Fields = {
  __typename?: 'likes_stddev_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

export type Likes_Stddev_Order_By = {
  activity_id?: Maybe<Order_By>;
};

export type Likes_Stddev_Pop_Fields = {
  __typename?: 'likes_stddev_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

export type Likes_Stddev_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
};

export type Likes_Stddev_Samp_Fields = {
  __typename?: 'likes_stddev_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

export type Likes_Stddev_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
};

export type Likes_Sum_Fields = {
  __typename?: 'likes_sum_fields';
  activity_id?: Maybe<Scalars['Int']>;
};

export type Likes_Sum_Order_By = {
  activity_id?: Maybe<Order_By>;
};

export enum Likes_Update_Column {
  ActivityId = 'activity_id',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Likes_Var_Pop_Fields = {
  __typename?: 'likes_var_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

export type Likes_Var_Pop_Order_By = {
  activity_id?: Maybe<Order_By>;
};

export type Likes_Var_Samp_Fields = {
  __typename?: 'likes_var_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

export type Likes_Var_Samp_Order_By = {
  activity_id?: Maybe<Order_By>;
};

export type Likes_Variance_Fields = {
  __typename?: 'likes_variance_fields';
  activity_id?: Maybe<Scalars['Float']>;
};

export type Likes_Variance_Order_By = {
  activity_id?: Maybe<Order_By>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  delete_achievement?: Maybe<Achievement_Mutation_Response>;
  delete_achievement_by_pk?: Maybe<Achievement>;
  delete_achievement_type?: Maybe<Achievement_Type_Mutation_Response>;
  delete_achievement_type_by_pk?: Maybe<Achievement_Type>;
  delete_activities?: Maybe<Activities_Mutation_Response>;
  delete_activities_by_pk?: Maybe<Activities>;
  delete_categories?: Maybe<Categories_Mutation_Response>;
  delete_categories_by_pk?: Maybe<Categories>;
  delete_challenge?: Maybe<Challenge_Mutation_Response>;
  delete_challenge_by_pk?: Maybe<Challenge>;
  delete_challenge_participant?: Maybe<Challenge_Participant_Mutation_Response>;
  delete_challenge_participant_by_pk?: Maybe<Challenge_Participant>;
  delete_challenge_participant_state?: Maybe<Challenge_Participant_State_Mutation_Response>;
  delete_challenge_participant_state_by_pk?: Maybe<Challenge_Participant_State>;
  delete_challenge_state?: Maybe<Challenge_State_Mutation_Response>;
  delete_challenge_state_by_pk?: Maybe<Challenge_State>;
  delete_challenge_type?: Maybe<Challenge_Type_Mutation_Response>;
  delete_challenge_type_by_pk?: Maybe<Challenge_Type>;
  delete_comment?: Maybe<Comments>;
  delete_comments?: Maybe<Comments_Mutation_Response>;
  delete_feed?: Maybe<Feed_Mutation_Response>;
  delete_feed_by_pk?: Maybe<Feed>;
  delete_feed_type?: Maybe<Feed_Type_Mutation_Response>;
  delete_feed_type_by_pk?: Maybe<Feed_Type>;
  delete_followings?: Maybe<Followings_Mutation_Response>;
  delete_followings_by_pk?: Maybe<Followings>;
  delete_friends_tracking?: Maybe<Friends_Tracking_Mutation_Response>;
  delete_friends_tracking_by_pk?: Maybe<Friends_Tracking>;
  delete_geofence_variants?: Maybe<Geofence_Variants_Mutation_Response>;
  delete_geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  delete_geofences?: Maybe<Geofences_Mutation_Response>;
  delete_geofences_by_pk?: Maybe<Geofences>;
  delete_likes?: Maybe<Likes_Mutation_Response>;
  delete_likes_by_pk?: Maybe<Likes>;
  delete_user?: Maybe<Users>;
  delete_user_achievement?: Maybe<User_Achievement_Mutation_Response>;
  delete_user_achievement_by_pk?: Maybe<User_Achievement>;
  delete_users?: Maybe<Users_Mutation_Response>;
  insert_achievement?: Maybe<Achievement_Mutation_Response>;
  insert_achievement_one?: Maybe<Achievement>;
  insert_achievement_type?: Maybe<Achievement_Type_Mutation_Response>;
  insert_achievement_type_one?: Maybe<Achievement_Type>;
  insert_activities?: Maybe<Activities_Mutation_Response>;
  insert_activities_one?: Maybe<Activities>;
  insert_categories?: Maybe<Categories_Mutation_Response>;
  insert_categories_one?: Maybe<Categories>;
  insert_challenge?: Maybe<Challenge_Mutation_Response>;
  insert_challenge_one?: Maybe<Challenge>;
  insert_challenge_participant?: Maybe<Challenge_Participant_Mutation_Response>;
  insert_challenge_participant_one?: Maybe<Challenge_Participant>;
  insert_challenge_participant_state?: Maybe<Challenge_Participant_State_Mutation_Response>;
  insert_challenge_participant_state_one?: Maybe<Challenge_Participant_State>;
  insert_challenge_state?: Maybe<Challenge_State_Mutation_Response>;
  insert_challenge_state_one?: Maybe<Challenge_State>;
  insert_challenge_type?: Maybe<Challenge_Type_Mutation_Response>;
  insert_challenge_type_one?: Maybe<Challenge_Type>;
  insert_comment?: Maybe<Comments>;
  insert_comments?: Maybe<Comments_Mutation_Response>;
  insert_feed?: Maybe<Feed_Mutation_Response>;
  insert_feed_one?: Maybe<Feed>;
  insert_feed_type?: Maybe<Feed_Type_Mutation_Response>;
  insert_feed_type_one?: Maybe<Feed_Type>;
  insert_followings?: Maybe<Followings_Mutation_Response>;
  insert_followings_one?: Maybe<Followings>;
  insert_friends_tracking?: Maybe<Friends_Tracking_Mutation_Response>;
  insert_friends_tracking_one?: Maybe<Friends_Tracking>;
  insert_geofence_variants?: Maybe<Geofence_Variants_Mutation_Response>;
  insert_geofence_variants_one?: Maybe<Geofence_Variants>;
  insert_geofences?: Maybe<Geofences_Mutation_Response>;
  insert_geofences_one?: Maybe<Geofences>;
  insert_likes?: Maybe<Likes_Mutation_Response>;
  insert_likes_one?: Maybe<Likes>;
  insert_user?: Maybe<Users>;
  insert_user_achievement?: Maybe<User_Achievement_Mutation_Response>;
  insert_user_achievement_one?: Maybe<User_Achievement>;
  insert_users?: Maybe<Users_Mutation_Response>;
  update_achievement?: Maybe<Achievement_Mutation_Response>;
  update_achievement_by_pk?: Maybe<Achievement>;
  update_achievement_type?: Maybe<Achievement_Type_Mutation_Response>;
  update_achievement_type_by_pk?: Maybe<Achievement_Type>;
  update_activities?: Maybe<Activities_Mutation_Response>;
  update_activities_by_pk?: Maybe<Activities>;
  update_categories?: Maybe<Categories_Mutation_Response>;
  update_categories_by_pk?: Maybe<Categories>;
  update_challenge?: Maybe<Challenge_Mutation_Response>;
  update_challenge_by_pk?: Maybe<Challenge>;
  update_challenge_participant?: Maybe<Challenge_Participant_Mutation_Response>;
  update_challenge_participant_by_pk?: Maybe<Challenge_Participant>;
  update_challenge_participant_state?: Maybe<Challenge_Participant_State_Mutation_Response>;
  update_challenge_participant_state_by_pk?: Maybe<Challenge_Participant_State>;
  update_challenge_state?: Maybe<Challenge_State_Mutation_Response>;
  update_challenge_state_by_pk?: Maybe<Challenge_State>;
  update_challenge_type?: Maybe<Challenge_Type_Mutation_Response>;
  update_challenge_type_by_pk?: Maybe<Challenge_Type>;
  update_comment?: Maybe<Comments>;
  update_comments?: Maybe<Comments_Mutation_Response>;
  update_feed?: Maybe<Feed_Mutation_Response>;
  update_feed_by_pk?: Maybe<Feed>;
  update_feed_type?: Maybe<Feed_Type_Mutation_Response>;
  update_feed_type_by_pk?: Maybe<Feed_Type>;
  update_followings?: Maybe<Followings_Mutation_Response>;
  update_followings_by_pk?: Maybe<Followings>;
  update_friends_tracking?: Maybe<Friends_Tracking_Mutation_Response>;
  update_friends_tracking_by_pk?: Maybe<Friends_Tracking>;
  update_geofence_variants?: Maybe<Geofence_Variants_Mutation_Response>;
  update_geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  update_geofences?: Maybe<Geofences_Mutation_Response>;
  update_geofences_by_pk?: Maybe<Geofences>;
  update_likes?: Maybe<Likes_Mutation_Response>;
  update_likes_by_pk?: Maybe<Likes>;
  update_user?: Maybe<Users>;
  update_user_achievement?: Maybe<User_Achievement_Mutation_Response>;
  update_user_achievement_by_pk?: Maybe<User_Achievement>;
  update_users?: Maybe<Users_Mutation_Response>;
};


export type Mutation_RootDelete_AchievementArgs = {
  where: Achievement_Bool_Exp;
};


export type Mutation_RootDelete_Achievement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Achievement_TypeArgs = {
  where: Achievement_Type_Bool_Exp;
};


export type Mutation_RootDelete_Achievement_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Mutation_RootDelete_ActivitiesArgs = {
  where: Activities_Bool_Exp;
};


export type Mutation_RootDelete_Activities_By_PkArgs = {
  activity_id: Scalars['Int'];
};


export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


export type Mutation_RootDelete_Categories_By_PkArgs = {
  name: Scalars['String'];
};


export type Mutation_RootDelete_ChallengeArgs = {
  where: Challenge_Bool_Exp;
};


export type Mutation_RootDelete_Challenge_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Challenge_ParticipantArgs = {
  where: Challenge_Participant_Bool_Exp;
};


export type Mutation_RootDelete_Challenge_Participant_By_PkArgs = {
  challenge_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Mutation_RootDelete_Challenge_Participant_StateArgs = {
  where: Challenge_Participant_State_Bool_Exp;
};


export type Mutation_RootDelete_Challenge_Participant_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Mutation_RootDelete_Challenge_StateArgs = {
  where: Challenge_State_Bool_Exp;
};


export type Mutation_RootDelete_Challenge_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Mutation_RootDelete_Challenge_TypeArgs = {
  where: Challenge_Type_Bool_Exp;
};


export type Mutation_RootDelete_Challenge_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Mutation_RootDelete_CommentArgs = {
  comment_id: Scalars['Int'];
};


export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


export type Mutation_RootDelete_FeedArgs = {
  where: Feed_Bool_Exp;
};


export type Mutation_RootDelete_Feed_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Feed_TypeArgs = {
  where: Feed_Type_Bool_Exp;
};


export type Mutation_RootDelete_Feed_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Mutation_RootDelete_FollowingsArgs = {
  where: Followings_Bool_Exp;
};


export type Mutation_RootDelete_Followings_By_PkArgs = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Mutation_RootDelete_Friends_TrackingArgs = {
  where: Friends_Tracking_Bool_Exp;
};


export type Mutation_RootDelete_Friends_Tracking_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Geofence_VariantsArgs = {
  where: Geofence_Variants_Bool_Exp;
};


export type Mutation_RootDelete_Geofence_Variants_By_PkArgs = {
  name: Scalars['String'];
};


export type Mutation_RootDelete_GeofencesArgs = {
  where: Geofences_Bool_Exp;
};


export type Mutation_RootDelete_Geofences_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


export type Mutation_RootDelete_Likes_By_PkArgs = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Mutation_RootDelete_UserArgs = {
  id: Scalars['String'];
};


export type Mutation_RootDelete_User_AchievementArgs = {
  where: User_Achievement_Bool_Exp;
};


export type Mutation_RootDelete_User_Achievement_By_PkArgs = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type Mutation_RootInsert_AchievementArgs = {
  objects: Array<Achievement_Insert_Input>;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};


export type Mutation_RootInsert_Achievement_OneArgs = {
  object: Achievement_Insert_Input;
  on_conflict?: Maybe<Achievement_On_Conflict>;
};


export type Mutation_RootInsert_Achievement_TypeArgs = {
  objects: Array<Achievement_Type_Insert_Input>;
  on_conflict?: Maybe<Achievement_Type_On_Conflict>;
};


export type Mutation_RootInsert_Achievement_Type_OneArgs = {
  object: Achievement_Type_Insert_Input;
  on_conflict?: Maybe<Achievement_Type_On_Conflict>;
};


export type Mutation_RootInsert_ActivitiesArgs = {
  objects: Array<Activities_Insert_Input>;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


export type Mutation_RootInsert_Activities_OneArgs = {
  object: Activities_Insert_Input;
  on_conflict?: Maybe<Activities_On_Conflict>;
};


export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


export type Mutation_RootInsert_ChallengeArgs = {
  objects: Array<Challenge_Insert_Input>;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_OneArgs = {
  object: Challenge_Insert_Input;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_ParticipantArgs = {
  objects: Array<Challenge_Participant_Insert_Input>;
  on_conflict?: Maybe<Challenge_Participant_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_Participant_OneArgs = {
  object: Challenge_Participant_Insert_Input;
  on_conflict?: Maybe<Challenge_Participant_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_Participant_StateArgs = {
  objects: Array<Challenge_Participant_State_Insert_Input>;
  on_conflict?: Maybe<Challenge_Participant_State_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_Participant_State_OneArgs = {
  object: Challenge_Participant_State_Insert_Input;
  on_conflict?: Maybe<Challenge_Participant_State_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_StateArgs = {
  objects: Array<Challenge_State_Insert_Input>;
  on_conflict?: Maybe<Challenge_State_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_State_OneArgs = {
  object: Challenge_State_Insert_Input;
  on_conflict?: Maybe<Challenge_State_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_TypeArgs = {
  objects: Array<Challenge_Type_Insert_Input>;
  on_conflict?: Maybe<Challenge_Type_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_Type_OneArgs = {
  object: Challenge_Type_Insert_Input;
  on_conflict?: Maybe<Challenge_Type_On_Conflict>;
};


export type Mutation_RootInsert_CommentArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


export type Mutation_RootInsert_FeedArgs = {
  objects: Array<Feed_Insert_Input>;
  on_conflict?: Maybe<Feed_On_Conflict>;
};


export type Mutation_RootInsert_Feed_OneArgs = {
  object: Feed_Insert_Input;
  on_conflict?: Maybe<Feed_On_Conflict>;
};


export type Mutation_RootInsert_Feed_TypeArgs = {
  objects: Array<Feed_Type_Insert_Input>;
  on_conflict?: Maybe<Feed_Type_On_Conflict>;
};


export type Mutation_RootInsert_Feed_Type_OneArgs = {
  object: Feed_Type_Insert_Input;
  on_conflict?: Maybe<Feed_Type_On_Conflict>;
};


export type Mutation_RootInsert_FollowingsArgs = {
  objects: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


export type Mutation_RootInsert_Followings_OneArgs = {
  object: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


export type Mutation_RootInsert_Friends_TrackingArgs = {
  objects: Array<Friends_Tracking_Insert_Input>;
  on_conflict?: Maybe<Friends_Tracking_On_Conflict>;
};


export type Mutation_RootInsert_Friends_Tracking_OneArgs = {
  object: Friends_Tracking_Insert_Input;
  on_conflict?: Maybe<Friends_Tracking_On_Conflict>;
};


export type Mutation_RootInsert_Geofence_VariantsArgs = {
  objects: Array<Geofence_Variants_Insert_Input>;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};


export type Mutation_RootInsert_Geofence_Variants_OneArgs = {
  object: Geofence_Variants_Insert_Input;
  on_conflict?: Maybe<Geofence_Variants_On_Conflict>;
};


export type Mutation_RootInsert_GeofencesArgs = {
  objects: Array<Geofences_Insert_Input>;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};


export type Mutation_RootInsert_Geofences_OneArgs = {
  object: Geofences_Insert_Input;
  on_conflict?: Maybe<Geofences_On_Conflict>;
};


export type Mutation_RootInsert_LikesArgs = {
  objects: Array<Likes_Insert_Input>;
  on_conflict?: Maybe<Likes_On_Conflict>;
};


export type Mutation_RootInsert_Likes_OneArgs = {
  object: Likes_Insert_Input;
  on_conflict?: Maybe<Likes_On_Conflict>;
};


export type Mutation_RootInsert_UserArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootInsert_User_AchievementArgs = {
  objects: Array<User_Achievement_Insert_Input>;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};


export type Mutation_RootInsert_User_Achievement_OneArgs = {
  object: User_Achievement_Insert_Input;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};


export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootUpdate_AchievementArgs = {
  _inc?: Maybe<Achievement_Inc_Input>;
  _set?: Maybe<Achievement_Set_Input>;
  where: Achievement_Bool_Exp;
};


export type Mutation_RootUpdate_Achievement_By_PkArgs = {
  _inc?: Maybe<Achievement_Inc_Input>;
  _set?: Maybe<Achievement_Set_Input>;
  pk_columns: Achievement_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Achievement_TypeArgs = {
  _set?: Maybe<Achievement_Type_Set_Input>;
  where: Achievement_Type_Bool_Exp;
};


export type Mutation_RootUpdate_Achievement_Type_By_PkArgs = {
  _set?: Maybe<Achievement_Type_Set_Input>;
  pk_columns: Achievement_Type_Pk_Columns_Input;
};


export type Mutation_RootUpdate_ActivitiesArgs = {
  _inc?: Maybe<Activities_Inc_Input>;
  _set?: Maybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};


export type Mutation_RootUpdate_Activities_By_PkArgs = {
  _inc?: Maybe<Activities_Inc_Input>;
  _set?: Maybe<Activities_Set_Input>;
  pk_columns: Activities_Pk_Columns_Input;
};


export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


export type Mutation_RootUpdate_ChallengeArgs = {
  _inc?: Maybe<Challenge_Inc_Input>;
  _set?: Maybe<Challenge_Set_Input>;
  where: Challenge_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_By_PkArgs = {
  _inc?: Maybe<Challenge_Inc_Input>;
  _set?: Maybe<Challenge_Set_Input>;
  pk_columns: Challenge_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Challenge_ParticipantArgs = {
  _inc?: Maybe<Challenge_Participant_Inc_Input>;
  _set?: Maybe<Challenge_Participant_Set_Input>;
  where: Challenge_Participant_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_Participant_By_PkArgs = {
  _inc?: Maybe<Challenge_Participant_Inc_Input>;
  _set?: Maybe<Challenge_Participant_Set_Input>;
  pk_columns: Challenge_Participant_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Challenge_Participant_StateArgs = {
  _set?: Maybe<Challenge_Participant_State_Set_Input>;
  where: Challenge_Participant_State_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_Participant_State_By_PkArgs = {
  _set?: Maybe<Challenge_Participant_State_Set_Input>;
  pk_columns: Challenge_Participant_State_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Challenge_StateArgs = {
  _set?: Maybe<Challenge_State_Set_Input>;
  where: Challenge_State_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_State_By_PkArgs = {
  _set?: Maybe<Challenge_State_Set_Input>;
  pk_columns: Challenge_State_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Challenge_TypeArgs = {
  _set?: Maybe<Challenge_Type_Set_Input>;
  where: Challenge_Type_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_Type_By_PkArgs = {
  _set?: Maybe<Challenge_Type_Set_Input>;
  pk_columns: Challenge_Type_Pk_Columns_Input;
};


export type Mutation_RootUpdate_CommentArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: Maybe<Comments_Inc_Input>;
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


export type Mutation_RootUpdate_FeedArgs = {
  _inc?: Maybe<Feed_Inc_Input>;
  _set?: Maybe<Feed_Set_Input>;
  where: Feed_Bool_Exp;
};


export type Mutation_RootUpdate_Feed_By_PkArgs = {
  _inc?: Maybe<Feed_Inc_Input>;
  _set?: Maybe<Feed_Set_Input>;
  pk_columns: Feed_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Feed_TypeArgs = {
  _set?: Maybe<Feed_Type_Set_Input>;
  where: Feed_Type_Bool_Exp;
};


export type Mutation_RootUpdate_Feed_Type_By_PkArgs = {
  _set?: Maybe<Feed_Type_Set_Input>;
  pk_columns: Feed_Type_Pk_Columns_Input;
};


export type Mutation_RootUpdate_FollowingsArgs = {
  _set?: Maybe<Followings_Set_Input>;
  where: Followings_Bool_Exp;
};


export type Mutation_RootUpdate_Followings_By_PkArgs = {
  _set?: Maybe<Followings_Set_Input>;
  pk_columns: Followings_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Friends_TrackingArgs = {
  _inc?: Maybe<Friends_Tracking_Inc_Input>;
  _set?: Maybe<Friends_Tracking_Set_Input>;
  where: Friends_Tracking_Bool_Exp;
};


export type Mutation_RootUpdate_Friends_Tracking_By_PkArgs = {
  _inc?: Maybe<Friends_Tracking_Inc_Input>;
  _set?: Maybe<Friends_Tracking_Set_Input>;
  pk_columns: Friends_Tracking_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geofence_VariantsArgs = {
  _set?: Maybe<Geofence_Variants_Set_Input>;
  where: Geofence_Variants_Bool_Exp;
};


export type Mutation_RootUpdate_Geofence_Variants_By_PkArgs = {
  _set?: Maybe<Geofence_Variants_Set_Input>;
  pk_columns: Geofence_Variants_Pk_Columns_Input;
};


export type Mutation_RootUpdate_GeofencesArgs = {
  _inc?: Maybe<Geofences_Inc_Input>;
  _set?: Maybe<Geofences_Set_Input>;
  where: Geofences_Bool_Exp;
};


export type Mutation_RootUpdate_Geofences_By_PkArgs = {
  _inc?: Maybe<Geofences_Inc_Input>;
  _set?: Maybe<Geofences_Set_Input>;
  pk_columns: Geofences_Pk_Columns_Input;
};


export type Mutation_RootUpdate_LikesArgs = {
  _inc?: Maybe<Likes_Inc_Input>;
  _set?: Maybe<Likes_Set_Input>;
  where: Likes_Bool_Exp;
};


export type Mutation_RootUpdate_Likes_By_PkArgs = {
  _inc?: Maybe<Likes_Inc_Input>;
  _set?: Maybe<Likes_Set_Input>;
  pk_columns: Likes_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


export type Mutation_RootUpdate_User_AchievementArgs = {
  _inc?: Maybe<User_Achievement_Inc_Input>;
  _set?: Maybe<User_Achievement_Set_Input>;
  where: User_Achievement_Bool_Exp;
};


export type Mutation_RootUpdate_User_Achievement_By_PkArgs = {
  _inc?: Maybe<User_Achievement_Inc_Input>;
  _set?: Maybe<User_Achievement_Set_Input>;
  pk_columns: User_Achievement_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  achievement: Array<Achievement>;
  achievement_aggregate: Achievement_Aggregate;
  achievement_by_pk?: Maybe<Achievement>;
  achievement_type: Array<Achievement_Type>;
  achievement_type_aggregate: Achievement_Type_Aggregate;
  achievement_type_by_pk?: Maybe<Achievement_Type>;
  activities: Array<Activities>;
  activities_aggregate: Activities_Aggregate;
  activities_by_pk?: Maybe<Activities>;
  categories: Array<Categories>;
  categories_aggregate: Categories_Aggregate;
  categories_by_pk?: Maybe<Categories>;
  challenge: Array<Challenge>;
  challenge_aggregate: Challenge_Aggregate;
  challenge_by_pk?: Maybe<Challenge>;
  challenge_participant: Array<Challenge_Participant>;
  challenge_participant_aggregate: Challenge_Participant_Aggregate;
  challenge_participant_by_pk?: Maybe<Challenge_Participant>;
  challenge_participant_state: Array<Challenge_Participant_State>;
  challenge_participant_state_aggregate: Challenge_Participant_State_Aggregate;
  challenge_participant_state_by_pk?: Maybe<Challenge_Participant_State>;
  challenge_state: Array<Challenge_State>;
  challenge_state_aggregate: Challenge_State_Aggregate;
  challenge_state_by_pk?: Maybe<Challenge_State>;
  challenge_type: Array<Challenge_Type>;
  challenge_type_aggregate: Challenge_Type_Aggregate;
  challenge_type_by_pk?: Maybe<Challenge_Type>;
  comment?: Maybe<Comments>;
  comments: Array<Comments>;
  comments_aggregate: Comments_Aggregate;
  feed: Array<Feed>;
  feed_aggregate: Feed_Aggregate;
  feed_by_pk?: Maybe<Feed>;
  feed_type: Array<Feed_Type>;
  feed_type_aggregate: Feed_Type_Aggregate;
  feed_type_by_pk?: Maybe<Feed_Type>;
  followings: Array<Followings>;
  followings_aggregate: Followings_Aggregate;
  followings_by_pk?: Maybe<Followings>;
  friends_tracking: Array<Friends_Tracking>;
  friends_tracking_aggregate: Friends_Tracking_Aggregate;
  friends_tracking_by_pk?: Maybe<Friends_Tracking>;
  geofence_variants: Array<Geofence_Variants>;
  geofence_variants_aggregate: Geofence_Variants_Aggregate;
  geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  geofences: Array<Geofences>;
  geofences_aggregate: Geofences_Aggregate;
  geofences_by_pk?: Maybe<Geofences>;
  likes: Array<Likes>;
  likes_aggregate: Likes_Aggregate;
  likes_by_pk?: Maybe<Likes>;
  unachievedachievements: Array<Achievement>;
  unachievedachievements_aggregate: Achievement_Aggregate;
  user?: Maybe<Users>;
  user_achievement: Array<User_Achievement>;
  user_achievement_aggregate: User_Achievement_Aggregate;
  user_achievement_by_pk?: Maybe<User_Achievement>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
};


export type Query_RootAchievementArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Query_RootAchievement_AggregateArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Query_RootAchievement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAchievement_TypeArgs = {
  distinct_on?: Maybe<Array<Achievement_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Type_Order_By>>;
  where?: Maybe<Achievement_Type_Bool_Exp>;
};


export type Query_RootAchievement_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Achievement_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Type_Order_By>>;
  where?: Maybe<Achievement_Type_Bool_Exp>;
};


export type Query_RootAchievement_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_By_PkArgs = {
  activity_id: Scalars['Int'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootChallengeArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Query_RootChallenge_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Query_RootChallenge_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootChallenge_ParticipantArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type Query_RootChallenge_Participant_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type Query_RootChallenge_Participant_By_PkArgs = {
  challenge_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Query_RootChallenge_Participant_StateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_State_Order_By>>;
  where?: Maybe<Challenge_Participant_State_Bool_Exp>;
};


export type Query_RootChallenge_Participant_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_State_Order_By>>;
  where?: Maybe<Challenge_Participant_State_Bool_Exp>;
};


export type Query_RootChallenge_Participant_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Query_RootChallenge_StateArgs = {
  distinct_on?: Maybe<Array<Challenge_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_State_Order_By>>;
  where?: Maybe<Challenge_State_Bool_Exp>;
};


export type Query_RootChallenge_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_State_Order_By>>;
  where?: Maybe<Challenge_State_Bool_Exp>;
};


export type Query_RootChallenge_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Query_RootChallenge_TypeArgs = {
  distinct_on?: Maybe<Array<Challenge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Type_Order_By>>;
  where?: Maybe<Challenge_Type_Bool_Exp>;
};


export type Query_RootChallenge_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Type_Order_By>>;
  where?: Maybe<Challenge_Type_Bool_Exp>;
};


export type Query_RootChallenge_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootCommentArgs = {
  comment_id: Scalars['Int'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootFeedArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type Query_RootFeed_AggregateArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type Query_RootFeed_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFeed_TypeArgs = {
  distinct_on?: Maybe<Array<Feed_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Type_Order_By>>;
  where?: Maybe<Feed_Type_Bool_Exp>;
};


export type Query_RootFeed_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Feed_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Type_Order_By>>;
  where?: Maybe<Feed_Type_Bool_Exp>;
};


export type Query_RootFeed_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type Query_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type Query_RootFollowings_By_PkArgs = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootFriends_TrackingArgs = {
  distinct_on?: Maybe<Array<Friends_Tracking_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Friends_Tracking_Order_By>>;
  where?: Maybe<Friends_Tracking_Bool_Exp>;
};


export type Query_RootFriends_Tracking_AggregateArgs = {
  distinct_on?: Maybe<Array<Friends_Tracking_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Friends_Tracking_Order_By>>;
  where?: Maybe<Friends_Tracking_Bool_Exp>;
};


export type Query_RootFriends_Tracking_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGeofence_VariantsArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


export type Query_RootGeofence_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


export type Query_RootGeofence_Variants_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootGeofencesArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


export type Query_RootGeofences_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


export type Query_RootGeofences_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_By_PkArgs = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Query_RootUnachievedachievementsArgs = {
  args: Unachievedachievements_Args;
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Query_RootUnachievedachievements_AggregateArgs = {
  args: Unachievedachievements_Args;
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Query_RootUserArgs = {
  id: Scalars['String'];
};


export type Query_RootUser_AchievementArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


export type Query_RootUser_Achievement_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


export type Query_RootUser_Achievement_By_PkArgs = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  achievement: Array<Achievement>;
  achievement_aggregate: Achievement_Aggregate;
  achievement_by_pk?: Maybe<Achievement>;
  achievement_type: Array<Achievement_Type>;
  achievement_type_aggregate: Achievement_Type_Aggregate;
  achievement_type_by_pk?: Maybe<Achievement_Type>;
  activities: Array<Activities>;
  activities_aggregate: Activities_Aggregate;
  activities_by_pk?: Maybe<Activities>;
  categories: Array<Categories>;
  categories_aggregate: Categories_Aggregate;
  categories_by_pk?: Maybe<Categories>;
  challenge: Array<Challenge>;
  challenge_aggregate: Challenge_Aggregate;
  challenge_by_pk?: Maybe<Challenge>;
  challenge_participant: Array<Challenge_Participant>;
  challenge_participant_aggregate: Challenge_Participant_Aggregate;
  challenge_participant_by_pk?: Maybe<Challenge_Participant>;
  challenge_participant_state: Array<Challenge_Participant_State>;
  challenge_participant_state_aggregate: Challenge_Participant_State_Aggregate;
  challenge_participant_state_by_pk?: Maybe<Challenge_Participant_State>;
  challenge_state: Array<Challenge_State>;
  challenge_state_aggregate: Challenge_State_Aggregate;
  challenge_state_by_pk?: Maybe<Challenge_State>;
  challenge_type: Array<Challenge_Type>;
  challenge_type_aggregate: Challenge_Type_Aggregate;
  challenge_type_by_pk?: Maybe<Challenge_Type>;
  comment?: Maybe<Comments>;
  comments: Array<Comments>;
  comments_aggregate: Comments_Aggregate;
  feed: Array<Feed>;
  feed_aggregate: Feed_Aggregate;
  feed_by_pk?: Maybe<Feed>;
  feed_type: Array<Feed_Type>;
  feed_type_aggregate: Feed_Type_Aggregate;
  feed_type_by_pk?: Maybe<Feed_Type>;
  followings: Array<Followings>;
  followings_aggregate: Followings_Aggregate;
  followings_by_pk?: Maybe<Followings>;
  friends_tracking: Array<Friends_Tracking>;
  friends_tracking_aggregate: Friends_Tracking_Aggregate;
  friends_tracking_by_pk?: Maybe<Friends_Tracking>;
  geofence_variants: Array<Geofence_Variants>;
  geofence_variants_aggregate: Geofence_Variants_Aggregate;
  geofence_variants_by_pk?: Maybe<Geofence_Variants>;
  geofences: Array<Geofences>;
  geofences_aggregate: Geofences_Aggregate;
  geofences_by_pk?: Maybe<Geofences>;
  likes: Array<Likes>;
  likes_aggregate: Likes_Aggregate;
  likes_by_pk?: Maybe<Likes>;
  unachievedachievements: Array<Achievement>;
  unachievedachievements_aggregate: Achievement_Aggregate;
  user?: Maybe<Users>;
  user_achievement: Array<User_Achievement>;
  user_achievement_aggregate: User_Achievement_Aggregate;
  user_achievement_by_pk?: Maybe<User_Achievement>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
};


export type Subscription_RootAchievementArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Subscription_RootAchievement_AggregateArgs = {
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Subscription_RootAchievement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAchievement_TypeArgs = {
  distinct_on?: Maybe<Array<Achievement_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Type_Order_By>>;
  where?: Maybe<Achievement_Type_Bool_Exp>;
};


export type Subscription_RootAchievement_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Achievement_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Type_Order_By>>;
  where?: Maybe<Achievement_Type_Bool_Exp>;
};


export type Subscription_RootAchievement_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_By_PkArgs = {
  activity_id: Scalars['Int'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootChallengeArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Subscription_RootChallenge_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Subscription_RootChallenge_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootChallenge_ParticipantArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type Subscription_RootChallenge_Participant_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type Subscription_RootChallenge_Participant_By_PkArgs = {
  challenge_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Subscription_RootChallenge_Participant_StateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_State_Order_By>>;
  where?: Maybe<Challenge_Participant_State_Bool_Exp>;
};


export type Subscription_RootChallenge_Participant_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_State_Order_By>>;
  where?: Maybe<Challenge_Participant_State_Bool_Exp>;
};


export type Subscription_RootChallenge_Participant_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Subscription_RootChallenge_StateArgs = {
  distinct_on?: Maybe<Array<Challenge_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_State_Order_By>>;
  where?: Maybe<Challenge_State_Bool_Exp>;
};


export type Subscription_RootChallenge_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_State_Order_By>>;
  where?: Maybe<Challenge_State_Bool_Exp>;
};


export type Subscription_RootChallenge_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Subscription_RootChallenge_TypeArgs = {
  distinct_on?: Maybe<Array<Challenge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Type_Order_By>>;
  where?: Maybe<Challenge_Type_Bool_Exp>;
};


export type Subscription_RootChallenge_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Type_Order_By>>;
  where?: Maybe<Challenge_Type_Bool_Exp>;
};


export type Subscription_RootChallenge_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootCommentArgs = {
  comment_id: Scalars['Int'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootFeedArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type Subscription_RootFeed_AggregateArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type Subscription_RootFeed_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFeed_TypeArgs = {
  distinct_on?: Maybe<Array<Feed_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Type_Order_By>>;
  where?: Maybe<Feed_Type_Bool_Exp>;
};


export type Subscription_RootFeed_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Feed_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Type_Order_By>>;
  where?: Maybe<Feed_Type_Bool_Exp>;
};


export type Subscription_RootFeed_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type Subscription_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type Subscription_RootFollowings_By_PkArgs = {
  following_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootFriends_TrackingArgs = {
  distinct_on?: Maybe<Array<Friends_Tracking_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Friends_Tracking_Order_By>>;
  where?: Maybe<Friends_Tracking_Bool_Exp>;
};


export type Subscription_RootFriends_Tracking_AggregateArgs = {
  distinct_on?: Maybe<Array<Friends_Tracking_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Friends_Tracking_Order_By>>;
  where?: Maybe<Friends_Tracking_Bool_Exp>;
};


export type Subscription_RootFriends_Tracking_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGeofence_VariantsArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


export type Subscription_RootGeofence_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofence_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofence_Variants_Order_By>>;
  where?: Maybe<Geofence_Variants_Bool_Exp>;
};


export type Subscription_RootGeofence_Variants_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootGeofencesArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


export type Subscription_RootGeofences_AggregateArgs = {
  distinct_on?: Maybe<Array<Geofences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geofences_Order_By>>;
  where?: Maybe<Geofences_Bool_Exp>;
};


export type Subscription_RootGeofences_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_By_PkArgs = {
  activity_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Subscription_RootUnachievedachievementsArgs = {
  args: Unachievedachievements_Args;
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Subscription_RootUnachievedachievements_AggregateArgs = {
  args: Unachievedachievements_Args;
  distinct_on?: Maybe<Array<Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Achievement_Order_By>>;
  where?: Maybe<Achievement_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUser_AchievementArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


export type Subscription_RootUser_Achievement_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


export type Subscription_RootUser_Achievement_By_PkArgs = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


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

export type Unachievedachievements_Args = {
  uid?: Maybe<Scalars['String']>;
};

export type User_Achievement = {
  __typename?: 'user_achievement';
  achievement: Achievement;
  achievement_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  user: Users;
  user_id: Scalars['String'];
};

export type User_Achievement_Aggregate = {
  __typename?: 'user_achievement_aggregate';
  aggregate?: Maybe<User_Achievement_Aggregate_Fields>;
  nodes: Array<User_Achievement>;
};

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


export type User_Achievement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Achievement_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type User_Achievement_Arr_Rel_Insert_Input = {
  data: Array<User_Achievement_Insert_Input>;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};

export type User_Achievement_Avg_Fields = {
  __typename?: 'user_achievement_avg_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

export type User_Achievement_Avg_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export type User_Achievement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Achievement_Bool_Exp>>>;
  _not?: Maybe<User_Achievement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Achievement_Bool_Exp>>>;
  achievement?: Maybe<Achievement_Bool_Exp>;
  achievement_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

export enum User_Achievement_Constraint {
  UserAchievementPkey = 'user_achievement_pkey'
}

export type User_Achievement_Inc_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
};

export type User_Achievement_Insert_Input = {
  achievement?: Maybe<Achievement_Obj_Rel_Insert_Input>;
  achievement_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

export type User_Achievement_Max_Fields = {
  __typename?: 'user_achievement_max_fields';
  achievement_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type User_Achievement_Max_Order_By = {
  achievement_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Achievement_Min_Fields = {
  __typename?: 'user_achievement_min_fields';
  achievement_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type User_Achievement_Min_Order_By = {
  achievement_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Achievement_Mutation_Response = {
  __typename?: 'user_achievement_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User_Achievement>;
};

export type User_Achievement_Obj_Rel_Insert_Input = {
  data: User_Achievement_Insert_Input;
  on_conflict?: Maybe<User_Achievement_On_Conflict>;
};

export type User_Achievement_On_Conflict = {
  constraint: User_Achievement_Constraint;
  update_columns: Array<User_Achievement_Update_Column>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};

export type User_Achievement_Order_By = {
  achievement?: Maybe<Achievement_Order_By>;
  achievement_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Achievement_Pk_Columns_Input = {
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
};

export enum User_Achievement_Select_Column {
  AchievementId = 'achievement_id',
  CreatedAt = 'created_at',
  UserId = 'user_id'
}

export type User_Achievement_Set_Input = {
  achievement_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

export type User_Achievement_Stddev_Fields = {
  __typename?: 'user_achievement_stddev_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

export type User_Achievement_Stddev_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export type User_Achievement_Stddev_Pop_Fields = {
  __typename?: 'user_achievement_stddev_pop_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

export type User_Achievement_Stddev_Pop_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export type User_Achievement_Stddev_Samp_Fields = {
  __typename?: 'user_achievement_stddev_samp_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

export type User_Achievement_Stddev_Samp_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export type User_Achievement_Sum_Fields = {
  __typename?: 'user_achievement_sum_fields';
  achievement_id?: Maybe<Scalars['Int']>;
};

export type User_Achievement_Sum_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export enum User_Achievement_Update_Column {
  AchievementId = 'achievement_id',
  CreatedAt = 'created_at',
  UserId = 'user_id'
}

export type User_Achievement_Var_Pop_Fields = {
  __typename?: 'user_achievement_var_pop_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

export type User_Achievement_Var_Pop_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export type User_Achievement_Var_Samp_Fields = {
  __typename?: 'user_achievement_var_samp_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

export type User_Achievement_Var_Samp_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export type User_Achievement_Variance_Fields = {
  __typename?: 'user_achievement_variance_fields';
  achievement_id?: Maybe<Scalars['Float']>;
};

export type User_Achievement_Variance_Order_By = {
  achievement_id?: Maybe<Order_By>;
};

export type Users = {
  __typename?: 'users';
  activities: Array<Activities>;
  activities_aggregate: Activities_Aggregate;
  bio?: Maybe<Scalars['String']>;
  challenge_participants: Array<Challenge_Participant>;
  challenge_participants_aggregate: Challenge_Participant_Aggregate;
  challenges_won: Array<Challenge>;
  challenges_won_aggregate: Challenge_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  followers: Array<Followings>;
  followers_aggregate: Followings_Aggregate;
  following: Array<Followings>;
  following_aggregate: Followings_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  totalScore?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_achievement: Array<User_Achievement>;
  user_achievement_aggregate: User_Achievement_Aggregate;
};


export type UsersActivitiesArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type UsersActivities_AggregateArgs = {
  distinct_on?: Maybe<Array<Activities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Activities_Order_By>>;
  where?: Maybe<Activities_Bool_Exp>;
};


export type UsersChallenge_ParticipantsArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type UsersChallenge_Participants_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Participant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Participant_Order_By>>;
  where?: Maybe<Challenge_Participant_Bool_Exp>;
};


export type UsersChallenges_WonArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type UsersChallenges_Won_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type UsersFollowersArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type UsersFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type UsersFollowingArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type UsersFollowing_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


export type UsersUser_AchievementArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};


export type UsersUser_Achievement_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Achievement_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Achievement_Order_By>>;
  where?: Maybe<User_Achievement_Bool_Exp>;
};

export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  activities?: Maybe<Activities_Bool_Exp>;
  bio?: Maybe<String_Comparison_Exp>;
  challenge_participants?: Maybe<Challenge_Participant_Bool_Exp>;
  challenges_won?: Maybe<Challenge_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  followers?: Maybe<Followings_Bool_Exp>;
  following?: Maybe<Followings_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_achievement?: Maybe<User_Achievement_Bool_Exp>;
};

export enum Users_Constraint {
  UsersEmailKey = 'Users_email_key',
  UsersIdKey = 'Users_id_key',
  UsersPkey = 'Users_pkey'
}

export type Users_Insert_Input = {
  activities?: Maybe<Activities_Arr_Rel_Insert_Input>;
  bio?: Maybe<Scalars['String']>;
  challenge_participants?: Maybe<Challenge_Participant_Arr_Rel_Insert_Input>;
  challenges_won?: Maybe<Challenge_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  followers?: Maybe<Followings_Arr_Rel_Insert_Input>;
  following?: Maybe<Followings_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_achievement?: Maybe<User_Achievement_Arr_Rel_Insert_Input>;
};

export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Order_By = {
  bio?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Min_Order_By = {
  bio?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
  activities_aggregate?: Maybe<Activities_Aggregate_Order_By>;
  bio?: Maybe<Order_By>;
  challenge_participants_aggregate?: Maybe<Challenge_Participant_Aggregate_Order_By>;
  challenges_won_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  followers_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  following_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_achievement_aggregate?: Maybe<User_Achievement_Aggregate_Order_By>;
};

export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Users_Select_Column {
  Bio = 'bio',
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Picture = 'picture',
  UpdatedAt = 'updated_at'
}

export type Users_Set_Input = {
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Users_Update_Column {
  Bio = 'bio',
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Picture = 'picture',
  UpdatedAt = 'updated_at'
}

export const ChallengeFragmentFragmentDoc = gql`
    fragment challengeFragment on challenge {
  id
  challenge_type
  created_at
  start_date
  end_date
  state
  rules
  created_by_user {
    id
    name
    picture
  }
}
    `;
export const ParticipantFragmentFragmentDoc = gql`
    fragment participantFragment on challenge_participant {
  state
  progress
  challenge {
    ...challengeFragment
  }
}
    ${ChallengeFragmentFragmentDoc}`;
export const BasicParticipantFragmentFragmentDoc = gql`
    fragment basicParticipantFragment on challenge_participant {
  user_id
  state
  progress
}
    `;
export const BasicActivityFragmentFragmentDoc = gql`
    fragment basicActivityFragment on activities {
  activity_id
  duration
  score
  started_at
  geofence {
    category
  }
}
    `;
export const ParticipantActivityFragmentFragmentDoc = gql`
    fragment participantActivityFragment on challenge_participant {
  ...basicParticipantFragment
  user {
    activities {
      ...basicActivityFragment
    }
  }
}
    ${BasicParticipantFragmentFragmentDoc}
${BasicActivityFragmentFragmentDoc}`;
export const CreateUserDocument = gql`
    mutation CreateUser($id: String!, $email: String, $name: String, $picture: String) {
  insert_users(
    objects: [{id: $id, email: $email, name: $name, picture: $picture}]
  ) {
    affected_rows
  }
}
    `;
export const DeleteAchievementDocument = gql`
    mutation DeleteAchievement($achievement_id: Int!, $user_id: String!) {
  delete_user_achievement_by_pk(
    achievement_id: $achievement_id
    user_id: $user_id
  ) {
    achievement_id
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
export const GetUserAndExistingAchievementsDocument = gql`
    query GetUserAndExistingAchievements($user_id: String!) {
  user(id: $user_id) {
    id
    totalScore
    activity_count: activities_aggregate {
      aggregate {
        count(columns: activity_id)
      }
    }
    education_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EDUCATION"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    culture_score: activities_aggregate(
      where: {geofence: {category: {_eq: "CULTURE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    social_score: activities_aggregate(
      where: {geofence: {category: {_eq: "SOCIAL"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    exercise_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EXERCISE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    user_achievement {
      achievement {
        id
        name
        description
        achievement_type
        rule
        created_at
      }
    }
  }
}
    `;
export const ExpireChallengesDocument = gql`
    mutation ExpireChallenges($date: date!) {
  update_challenge(
    where: {end_date: {_lt: $date}, state: {_eq: ACTIVE}}
    _set: {state: CLOSED}
  ) {
    affected_rows
  }
}
    `;
export const GetActivitiesAndChallengesDocument = gql`
    query GetActivitiesAndChallenges($id: String) {
  activities(where: {user_id: {_eq: $id}}) {
    ...basicActivityFragment
  }
  challenge_participant(where: {user_id: {_eq: $id}, state: {_neq: DECLINED}}) {
    ...participantFragment
  }
}
    ${BasicActivityFragmentFragmentDoc}
${ParticipantFragmentFragmentDoc}`;
export const GetChallengeParticipantsAndActivitiesDocument = gql`
    query GetChallengeParticipantsAndActivities($challenge_id: Int!) {
  challenge_by_pk(id: $challenge_id) {
    ...challengeFragment
    challenge_participants {
      ...participantActivityFragment
    }
  }
}
    ${ChallengeFragmentFragmentDoc}
${ParticipantActivityFragmentFragmentDoc}`;
export const GetChallengesParticipantsDocument = gql`
    query GetChallengesParticipants($challenge_id: Int!) {
  challenge_by_pk(id: $challenge_id) {
    ...challengeFragment
    challenge_participants {
      ...basicParticipantFragment
    }
  }
}
    ${ChallengeFragmentFragmentDoc}
${BasicParticipantFragmentFragmentDoc}`;
export const InsertAchievementsDocument = gql`
    mutation InsertAchievements($feed_achievements: [feed_insert_input!]!) {
  insert_feed(objects: $feed_achievements) {
    affected_rows
  }
}
    `;
export const GetUserAndUnachievedAchievementsDocument = gql`
    query GetUserAndUnachievedAchievements($user_id: String!) {
  unachievedachievements(args: {uid: $user_id}) {
    id
    name
    description
    created_at
    achievement_type
    rule
  }
  user(id: $user_id) {
    id
    totalScore
    activity_count: activities_aggregate {
      aggregate {
        count(columns: activity_id)
      }
    }
    education_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EDUCATION"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    culture_score: activities_aggregate(
      where: {geofence: {category: {_eq: "CULTURE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    social_score: activities_aggregate(
      where: {geofence: {category: {_eq: "SOCIAL"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    exercise_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EXERCISE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
  }
}
    `;
export const UpdateChallengeWinnerDocument = gql`
    mutation UpdateChallengeWinner($challenge_id: Int!, $winner_id: String!) {
  update_challenge_by_pk(
    pk_columns: {id: $challenge_id}
    _set: {winner_id: $winner_id, state: FINISHED}
  ) {
    state
  }
  insert_feed_one(
    object: {feed_type: CHALLENGE, challenge_id: $challenge_id, user_id: $winner_id}
    on_conflict: {constraint: feed_challenge_id_user_id_key, update_columns: user_id}
  ) {
    challenge_id
    user_id
  }
}
    `;
export const UpdateChallengeParticipationProgressDocument = gql`
    mutation UpdateChallengeParticipationProgress($challenge_id: Int!, $user_id: String!, $progress: float8!) {
  update_challenge_participant(
    where: {challenge_id: {_eq: $challenge_id}, user_id: {_eq: $user_id}}
    _set: {progress: $progress}
  ) {
    affected_rows
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateUser(variables: CreateUserMutationVariables): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(print(CreateUserDocument), variables));
    },
    DeleteAchievement(variables: DeleteAchievementMutationVariables): Promise<DeleteAchievementMutation> {
      return withWrapper(() => client.request<DeleteAchievementMutation>(print(DeleteAchievementDocument), variables));
    },
    DeleteUser(variables: DeleteUserMutationVariables): Promise<DeleteUserMutation> {
      return withWrapper(() => client.request<DeleteUserMutation>(print(DeleteUserDocument), variables));
    },
    GetUserAndExistingAchievements(variables: GetUserAndExistingAchievementsQueryVariables): Promise<GetUserAndExistingAchievementsQuery> {
      return withWrapper(() => client.request<GetUserAndExistingAchievementsQuery>(print(GetUserAndExistingAchievementsDocument), variables));
    },
    ExpireChallenges(variables: ExpireChallengesMutationVariables): Promise<ExpireChallengesMutation> {
      return withWrapper(() => client.request<ExpireChallengesMutation>(print(ExpireChallengesDocument), variables));
    },
    GetActivitiesAndChallenges(variables?: GetActivitiesAndChallengesQueryVariables): Promise<GetActivitiesAndChallengesQuery> {
      return withWrapper(() => client.request<GetActivitiesAndChallengesQuery>(print(GetActivitiesAndChallengesDocument), variables));
    },
    GetChallengeParticipantsAndActivities(variables: GetChallengeParticipantsAndActivitiesQueryVariables): Promise<GetChallengeParticipantsAndActivitiesQuery> {
      return withWrapper(() => client.request<GetChallengeParticipantsAndActivitiesQuery>(print(GetChallengeParticipantsAndActivitiesDocument), variables));
    },
    GetChallengesParticipants(variables: GetChallengesParticipantsQueryVariables): Promise<GetChallengesParticipantsQuery> {
      return withWrapper(() => client.request<GetChallengesParticipantsQuery>(print(GetChallengesParticipantsDocument), variables));
    },
    InsertAchievements(variables: InsertAchievementsMutationVariables): Promise<InsertAchievementsMutation> {
      return withWrapper(() => client.request<InsertAchievementsMutation>(print(InsertAchievementsDocument), variables));
    },
    GetUserAndUnachievedAchievements(variables: GetUserAndUnachievedAchievementsQueryVariables): Promise<GetUserAndUnachievedAchievementsQuery> {
      return withWrapper(() => client.request<GetUserAndUnachievedAchievementsQuery>(print(GetUserAndUnachievedAchievementsDocument), variables));
    },
    UpdateChallengeWinner(variables: UpdateChallengeWinnerMutationVariables): Promise<UpdateChallengeWinnerMutation> {
      return withWrapper(() => client.request<UpdateChallengeWinnerMutation>(print(UpdateChallengeWinnerDocument), variables));
    },
    UpdateChallengeParticipationProgress(variables: UpdateChallengeParticipationProgressMutationVariables): Promise<UpdateChallengeParticipationProgressMutation> {
      return withWrapper(() => client.request<UpdateChallengeParticipationProgressMutation>(print(UpdateChallengeParticipationProgressDocument), variables));
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
  achievement: ResolverTypeWrapper<Achievement>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  achievement_aggregate: ResolverTypeWrapper<Achievement_Aggregate>;
  achievement_aggregate_fields: ResolverTypeWrapper<Achievement_Aggregate_Fields>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
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
  achievement_type: ResolverTypeWrapper<Achievement_Type>;
  achievement_type_aggregate: ResolverTypeWrapper<Achievement_Type_Aggregate>;
  achievement_type_aggregate_fields: ResolverTypeWrapper<Achievement_Type_Aggregate_Fields>;
  achievement_type_aggregate_order_by: Achievement_Type_Aggregate_Order_By;
  achievement_type_arr_rel_insert_input: Achievement_Type_Arr_Rel_Insert_Input;
  achievement_type_bool_exp: Achievement_Type_Bool_Exp;
  achievement_type_constraint: Achievement_Type_Constraint;
  achievement_type_enum: Achievement_Type_Enum;
  achievement_type_enum_comparison_exp: Achievement_Type_Enum_Comparison_Exp;
  achievement_type_insert_input: Achievement_Type_Insert_Input;
  achievement_type_max_fields: ResolverTypeWrapper<Achievement_Type_Max_Fields>;
  achievement_type_max_order_by: Achievement_Type_Max_Order_By;
  achievement_type_min_fields: ResolverTypeWrapper<Achievement_Type_Min_Fields>;
  achievement_type_min_order_by: Achievement_Type_Min_Order_By;
  achievement_type_mutation_response: ResolverTypeWrapper<Achievement_Type_Mutation_Response>;
  achievement_type_obj_rel_insert_input: Achievement_Type_Obj_Rel_Insert_Input;
  achievement_type_on_conflict: Achievement_Type_On_Conflict;
  achievement_type_order_by: Achievement_Type_Order_By;
  achievement_type_pk_columns_input: Achievement_Type_Pk_Columns_Input;
  achievement_type_select_column: Achievement_Type_Select_Column;
  achievement_type_set_input: Achievement_Type_Set_Input;
  achievement_type_update_column: Achievement_Type_Update_Column;
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
  bigint: ResolverTypeWrapper<Scalars['bigint']>;
  categories: ResolverTypeWrapper<Categories>;
  categories_aggregate: ResolverTypeWrapper<Categories_Aggregate>;
  categories_aggregate_fields: ResolverTypeWrapper<Categories_Aggregate_Fields>;
  categories_aggregate_order_by: Categories_Aggregate_Order_By;
  categories_arr_rel_insert_input: Categories_Arr_Rel_Insert_Input;
  categories_avg_fields: ResolverTypeWrapper<Categories_Avg_Fields>;
  categories_avg_order_by: Categories_Avg_Order_By;
  categories_bool_exp: Categories_Bool_Exp;
  categories_constraint: Categories_Constraint;
  categories_inc_input: Categories_Inc_Input;
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
  categories_stddev_fields: ResolverTypeWrapper<Categories_Stddev_Fields>;
  categories_stddev_order_by: Categories_Stddev_Order_By;
  categories_stddev_pop_fields: ResolverTypeWrapper<Categories_Stddev_Pop_Fields>;
  categories_stddev_pop_order_by: Categories_Stddev_Pop_Order_By;
  categories_stddev_samp_fields: ResolverTypeWrapper<Categories_Stddev_Samp_Fields>;
  categories_stddev_samp_order_by: Categories_Stddev_Samp_Order_By;
  categories_sum_fields: ResolverTypeWrapper<Categories_Sum_Fields>;
  categories_sum_order_by: Categories_Sum_Order_By;
  categories_update_column: Categories_Update_Column;
  categories_var_pop_fields: ResolverTypeWrapper<Categories_Var_Pop_Fields>;
  categories_var_pop_order_by: Categories_Var_Pop_Order_By;
  categories_var_samp_fields: ResolverTypeWrapper<Categories_Var_Samp_Fields>;
  categories_var_samp_order_by: Categories_Var_Samp_Order_By;
  categories_variance_fields: ResolverTypeWrapper<Categories_Variance_Fields>;
  categories_variance_order_by: Categories_Variance_Order_By;
  challenge: ResolverTypeWrapper<Challenge>;
  challenge_aggregate: ResolverTypeWrapper<Challenge_Aggregate>;
  challenge_aggregate_fields: ResolverTypeWrapper<Challenge_Aggregate_Fields>;
  challenge_aggregate_order_by: Challenge_Aggregate_Order_By;
  challenge_arr_rel_insert_input: Challenge_Arr_Rel_Insert_Input;
  challenge_avg_fields: ResolverTypeWrapper<Challenge_Avg_Fields>;
  challenge_avg_order_by: Challenge_Avg_Order_By;
  challenge_bool_exp: Challenge_Bool_Exp;
  challenge_constraint: Challenge_Constraint;
  challenge_inc_input: Challenge_Inc_Input;
  challenge_insert_input: Challenge_Insert_Input;
  challenge_max_fields: ResolverTypeWrapper<Challenge_Max_Fields>;
  challenge_max_order_by: Challenge_Max_Order_By;
  challenge_min_fields: ResolverTypeWrapper<Challenge_Min_Fields>;
  challenge_min_order_by: Challenge_Min_Order_By;
  challenge_mutation_response: ResolverTypeWrapper<Challenge_Mutation_Response>;
  challenge_obj_rel_insert_input: Challenge_Obj_Rel_Insert_Input;
  challenge_on_conflict: Challenge_On_Conflict;
  challenge_order_by: Challenge_Order_By;
  challenge_participant: ResolverTypeWrapper<Challenge_Participant>;
  challenge_participant_aggregate: ResolverTypeWrapper<Challenge_Participant_Aggregate>;
  challenge_participant_aggregate_fields: ResolverTypeWrapper<Challenge_Participant_Aggregate_Fields>;
  challenge_participant_aggregate_order_by: Challenge_Participant_Aggregate_Order_By;
  challenge_participant_arr_rel_insert_input: Challenge_Participant_Arr_Rel_Insert_Input;
  challenge_participant_avg_fields: ResolverTypeWrapper<Challenge_Participant_Avg_Fields>;
  challenge_participant_avg_order_by: Challenge_Participant_Avg_Order_By;
  challenge_participant_bool_exp: Challenge_Participant_Bool_Exp;
  challenge_participant_constraint: Challenge_Participant_Constraint;
  challenge_participant_inc_input: Challenge_Participant_Inc_Input;
  challenge_participant_insert_input: Challenge_Participant_Insert_Input;
  challenge_participant_max_fields: ResolverTypeWrapper<Challenge_Participant_Max_Fields>;
  challenge_participant_max_order_by: Challenge_Participant_Max_Order_By;
  challenge_participant_min_fields: ResolverTypeWrapper<Challenge_Participant_Min_Fields>;
  challenge_participant_min_order_by: Challenge_Participant_Min_Order_By;
  challenge_participant_mutation_response: ResolverTypeWrapper<Challenge_Participant_Mutation_Response>;
  challenge_participant_obj_rel_insert_input: Challenge_Participant_Obj_Rel_Insert_Input;
  challenge_participant_on_conflict: Challenge_Participant_On_Conflict;
  challenge_participant_order_by: Challenge_Participant_Order_By;
  challenge_participant_pk_columns_input: Challenge_Participant_Pk_Columns_Input;
  challenge_participant_select_column: Challenge_Participant_Select_Column;
  challenge_participant_set_input: Challenge_Participant_Set_Input;
  challenge_participant_state: ResolverTypeWrapper<Challenge_Participant_State>;
  challenge_participant_state_aggregate: ResolverTypeWrapper<Challenge_Participant_State_Aggregate>;
  challenge_participant_state_aggregate_fields: ResolverTypeWrapper<Challenge_Participant_State_Aggregate_Fields>;
  challenge_participant_state_aggregate_order_by: Challenge_Participant_State_Aggregate_Order_By;
  challenge_participant_state_arr_rel_insert_input: Challenge_Participant_State_Arr_Rel_Insert_Input;
  challenge_participant_state_bool_exp: Challenge_Participant_State_Bool_Exp;
  challenge_participant_state_constraint: Challenge_Participant_State_Constraint;
  challenge_participant_state_enum: Challenge_Participant_State_Enum;
  challenge_participant_state_enum_comparison_exp: Challenge_Participant_State_Enum_Comparison_Exp;
  challenge_participant_state_insert_input: Challenge_Participant_State_Insert_Input;
  challenge_participant_state_max_fields: ResolverTypeWrapper<Challenge_Participant_State_Max_Fields>;
  challenge_participant_state_max_order_by: Challenge_Participant_State_Max_Order_By;
  challenge_participant_state_min_fields: ResolverTypeWrapper<Challenge_Participant_State_Min_Fields>;
  challenge_participant_state_min_order_by: Challenge_Participant_State_Min_Order_By;
  challenge_participant_state_mutation_response: ResolverTypeWrapper<Challenge_Participant_State_Mutation_Response>;
  challenge_participant_state_obj_rel_insert_input: Challenge_Participant_State_Obj_Rel_Insert_Input;
  challenge_participant_state_on_conflict: Challenge_Participant_State_On_Conflict;
  challenge_participant_state_order_by: Challenge_Participant_State_Order_By;
  challenge_participant_state_pk_columns_input: Challenge_Participant_State_Pk_Columns_Input;
  challenge_participant_state_select_column: Challenge_Participant_State_Select_Column;
  challenge_participant_state_set_input: Challenge_Participant_State_Set_Input;
  challenge_participant_state_update_column: Challenge_Participant_State_Update_Column;
  challenge_participant_stddev_fields: ResolverTypeWrapper<Challenge_Participant_Stddev_Fields>;
  challenge_participant_stddev_order_by: Challenge_Participant_Stddev_Order_By;
  challenge_participant_stddev_pop_fields: ResolverTypeWrapper<Challenge_Participant_Stddev_Pop_Fields>;
  challenge_participant_stddev_pop_order_by: Challenge_Participant_Stddev_Pop_Order_By;
  challenge_participant_stddev_samp_fields: ResolverTypeWrapper<Challenge_Participant_Stddev_Samp_Fields>;
  challenge_participant_stddev_samp_order_by: Challenge_Participant_Stddev_Samp_Order_By;
  challenge_participant_sum_fields: ResolverTypeWrapper<Challenge_Participant_Sum_Fields>;
  challenge_participant_sum_order_by: Challenge_Participant_Sum_Order_By;
  challenge_participant_update_column: Challenge_Participant_Update_Column;
  challenge_participant_var_pop_fields: ResolverTypeWrapper<Challenge_Participant_Var_Pop_Fields>;
  challenge_participant_var_pop_order_by: Challenge_Participant_Var_Pop_Order_By;
  challenge_participant_var_samp_fields: ResolverTypeWrapper<Challenge_Participant_Var_Samp_Fields>;
  challenge_participant_var_samp_order_by: Challenge_Participant_Var_Samp_Order_By;
  challenge_participant_variance_fields: ResolverTypeWrapper<Challenge_Participant_Variance_Fields>;
  challenge_participant_variance_order_by: Challenge_Participant_Variance_Order_By;
  challenge_pk_columns_input: Challenge_Pk_Columns_Input;
  challenge_select_column: Challenge_Select_Column;
  challenge_set_input: Challenge_Set_Input;
  challenge_state: ResolverTypeWrapper<Challenge_State>;
  challenge_state_aggregate: ResolverTypeWrapper<Challenge_State_Aggregate>;
  challenge_state_aggregate_fields: ResolverTypeWrapper<Challenge_State_Aggregate_Fields>;
  challenge_state_aggregate_order_by: Challenge_State_Aggregate_Order_By;
  challenge_state_arr_rel_insert_input: Challenge_State_Arr_Rel_Insert_Input;
  challenge_state_bool_exp: Challenge_State_Bool_Exp;
  challenge_state_constraint: Challenge_State_Constraint;
  challenge_state_enum: Challenge_State_Enum;
  challenge_state_enum_comparison_exp: Challenge_State_Enum_Comparison_Exp;
  challenge_state_insert_input: Challenge_State_Insert_Input;
  challenge_state_max_fields: ResolverTypeWrapper<Challenge_State_Max_Fields>;
  challenge_state_max_order_by: Challenge_State_Max_Order_By;
  challenge_state_min_fields: ResolverTypeWrapper<Challenge_State_Min_Fields>;
  challenge_state_min_order_by: Challenge_State_Min_Order_By;
  challenge_state_mutation_response: ResolverTypeWrapper<Challenge_State_Mutation_Response>;
  challenge_state_obj_rel_insert_input: Challenge_State_Obj_Rel_Insert_Input;
  challenge_state_on_conflict: Challenge_State_On_Conflict;
  challenge_state_order_by: Challenge_State_Order_By;
  challenge_state_pk_columns_input: Challenge_State_Pk_Columns_Input;
  challenge_state_select_column: Challenge_State_Select_Column;
  challenge_state_set_input: Challenge_State_Set_Input;
  challenge_state_update_column: Challenge_State_Update_Column;
  challenge_stddev_fields: ResolverTypeWrapper<Challenge_Stddev_Fields>;
  challenge_stddev_order_by: Challenge_Stddev_Order_By;
  challenge_stddev_pop_fields: ResolverTypeWrapper<Challenge_Stddev_Pop_Fields>;
  challenge_stddev_pop_order_by: Challenge_Stddev_Pop_Order_By;
  challenge_stddev_samp_fields: ResolverTypeWrapper<Challenge_Stddev_Samp_Fields>;
  challenge_stddev_samp_order_by: Challenge_Stddev_Samp_Order_By;
  challenge_sum_fields: ResolverTypeWrapper<Challenge_Sum_Fields>;
  challenge_sum_order_by: Challenge_Sum_Order_By;
  challenge_type: ResolverTypeWrapper<Challenge_Type>;
  challenge_type_aggregate: ResolverTypeWrapper<Challenge_Type_Aggregate>;
  challenge_type_aggregate_fields: ResolverTypeWrapper<Challenge_Type_Aggregate_Fields>;
  challenge_type_aggregate_order_by: Challenge_Type_Aggregate_Order_By;
  challenge_type_arr_rel_insert_input: Challenge_Type_Arr_Rel_Insert_Input;
  challenge_type_bool_exp: Challenge_Type_Bool_Exp;
  challenge_type_constraint: Challenge_Type_Constraint;
  challenge_type_enum: Challenge_Type_Enum;
  challenge_type_enum_comparison_exp: Challenge_Type_Enum_Comparison_Exp;
  challenge_type_insert_input: Challenge_Type_Insert_Input;
  challenge_type_max_fields: ResolverTypeWrapper<Challenge_Type_Max_Fields>;
  challenge_type_max_order_by: Challenge_Type_Max_Order_By;
  challenge_type_min_fields: ResolverTypeWrapper<Challenge_Type_Min_Fields>;
  challenge_type_min_order_by: Challenge_Type_Min_Order_By;
  challenge_type_mutation_response: ResolverTypeWrapper<Challenge_Type_Mutation_Response>;
  challenge_type_obj_rel_insert_input: Challenge_Type_Obj_Rel_Insert_Input;
  challenge_type_on_conflict: Challenge_Type_On_Conflict;
  challenge_type_order_by: Challenge_Type_Order_By;
  challenge_type_pk_columns_input: Challenge_Type_Pk_Columns_Input;
  challenge_type_select_column: Challenge_Type_Select_Column;
  challenge_type_set_input: Challenge_Type_Set_Input;
  challenge_type_update_column: Challenge_Type_Update_Column;
  challenge_update_column: Challenge_Update_Column;
  challenge_var_pop_fields: ResolverTypeWrapper<Challenge_Var_Pop_Fields>;
  challenge_var_pop_order_by: Challenge_Var_Pop_Order_By;
  challenge_var_samp_fields: ResolverTypeWrapper<Challenge_Var_Samp_Fields>;
  challenge_var_samp_order_by: Challenge_Var_Samp_Order_By;
  challenge_variance_fields: ResolverTypeWrapper<Challenge_Variance_Fields>;
  challenge_variance_order_by: Challenge_Variance_Order_By;
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
  date: ResolverTypeWrapper<Scalars['date']>;
  date_comparison_exp: Date_Comparison_Exp;
  feed: ResolverTypeWrapper<Feed>;
  feed_aggregate: ResolverTypeWrapper<Feed_Aggregate>;
  feed_aggregate_fields: ResolverTypeWrapper<Feed_Aggregate_Fields>;
  feed_aggregate_order_by: Feed_Aggregate_Order_By;
  feed_arr_rel_insert_input: Feed_Arr_Rel_Insert_Input;
  feed_avg_fields: ResolverTypeWrapper<Feed_Avg_Fields>;
  feed_avg_order_by: Feed_Avg_Order_By;
  feed_bool_exp: Feed_Bool_Exp;
  feed_constraint: Feed_Constraint;
  feed_inc_input: Feed_Inc_Input;
  feed_insert_input: Feed_Insert_Input;
  feed_max_fields: ResolverTypeWrapper<Feed_Max_Fields>;
  feed_max_order_by: Feed_Max_Order_By;
  feed_min_fields: ResolverTypeWrapper<Feed_Min_Fields>;
  feed_min_order_by: Feed_Min_Order_By;
  feed_mutation_response: ResolverTypeWrapper<Feed_Mutation_Response>;
  feed_obj_rel_insert_input: Feed_Obj_Rel_Insert_Input;
  feed_on_conflict: Feed_On_Conflict;
  feed_order_by: Feed_Order_By;
  feed_pk_columns_input: Feed_Pk_Columns_Input;
  feed_select_column: Feed_Select_Column;
  feed_set_input: Feed_Set_Input;
  feed_stddev_fields: ResolverTypeWrapper<Feed_Stddev_Fields>;
  feed_stddev_order_by: Feed_Stddev_Order_By;
  feed_stddev_pop_fields: ResolverTypeWrapper<Feed_Stddev_Pop_Fields>;
  feed_stddev_pop_order_by: Feed_Stddev_Pop_Order_By;
  feed_stddev_samp_fields: ResolverTypeWrapper<Feed_Stddev_Samp_Fields>;
  feed_stddev_samp_order_by: Feed_Stddev_Samp_Order_By;
  feed_sum_fields: ResolverTypeWrapper<Feed_Sum_Fields>;
  feed_sum_order_by: Feed_Sum_Order_By;
  feed_type: ResolverTypeWrapper<Feed_Type>;
  feed_type_aggregate: ResolverTypeWrapper<Feed_Type_Aggregate>;
  feed_type_aggregate_fields: ResolverTypeWrapper<Feed_Type_Aggregate_Fields>;
  feed_type_aggregate_order_by: Feed_Type_Aggregate_Order_By;
  feed_type_arr_rel_insert_input: Feed_Type_Arr_Rel_Insert_Input;
  feed_type_bool_exp: Feed_Type_Bool_Exp;
  feed_type_constraint: Feed_Type_Constraint;
  feed_type_enum: Feed_Type_Enum;
  feed_type_enum_comparison_exp: Feed_Type_Enum_Comparison_Exp;
  feed_type_insert_input: Feed_Type_Insert_Input;
  feed_type_max_fields: ResolverTypeWrapper<Feed_Type_Max_Fields>;
  feed_type_max_order_by: Feed_Type_Max_Order_By;
  feed_type_min_fields: ResolverTypeWrapper<Feed_Type_Min_Fields>;
  feed_type_min_order_by: Feed_Type_Min_Order_By;
  feed_type_mutation_response: ResolverTypeWrapper<Feed_Type_Mutation_Response>;
  feed_type_obj_rel_insert_input: Feed_Type_Obj_Rel_Insert_Input;
  feed_type_on_conflict: Feed_Type_On_Conflict;
  feed_type_order_by: Feed_Type_Order_By;
  feed_type_pk_columns_input: Feed_Type_Pk_Columns_Input;
  feed_type_select_column: Feed_Type_Select_Column;
  feed_type_set_input: Feed_Type_Set_Input;
  feed_type_update_column: Feed_Type_Update_Column;
  feed_update_column: Feed_Update_Column;
  feed_var_pop_fields: ResolverTypeWrapper<Feed_Var_Pop_Fields>;
  feed_var_pop_order_by: Feed_Var_Pop_Order_By;
  feed_var_samp_fields: ResolverTypeWrapper<Feed_Var_Samp_Fields>;
  feed_var_samp_order_by: Feed_Var_Samp_Order_By;
  feed_variance_fields: ResolverTypeWrapper<Feed_Variance_Fields>;
  feed_variance_order_by: Feed_Variance_Order_By;
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
  friends_tracking: ResolverTypeWrapper<Friends_Tracking>;
  friends_tracking_aggregate: ResolverTypeWrapper<Friends_Tracking_Aggregate>;
  friends_tracking_aggregate_fields: ResolverTypeWrapper<Friends_Tracking_Aggregate_Fields>;
  friends_tracking_aggregate_order_by: Friends_Tracking_Aggregate_Order_By;
  friends_tracking_arr_rel_insert_input: Friends_Tracking_Arr_Rel_Insert_Input;
  friends_tracking_avg_fields: ResolverTypeWrapper<Friends_Tracking_Avg_Fields>;
  friends_tracking_avg_order_by: Friends_Tracking_Avg_Order_By;
  friends_tracking_bool_exp: Friends_Tracking_Bool_Exp;
  friends_tracking_constraint: Friends_Tracking_Constraint;
  friends_tracking_inc_input: Friends_Tracking_Inc_Input;
  friends_tracking_insert_input: Friends_Tracking_Insert_Input;
  friends_tracking_max_fields: ResolverTypeWrapper<Friends_Tracking_Max_Fields>;
  friends_tracking_max_order_by: Friends_Tracking_Max_Order_By;
  friends_tracking_min_fields: ResolverTypeWrapper<Friends_Tracking_Min_Fields>;
  friends_tracking_min_order_by: Friends_Tracking_Min_Order_By;
  friends_tracking_mutation_response: ResolverTypeWrapper<Friends_Tracking_Mutation_Response>;
  friends_tracking_obj_rel_insert_input: Friends_Tracking_Obj_Rel_Insert_Input;
  friends_tracking_on_conflict: Friends_Tracking_On_Conflict;
  friends_tracking_order_by: Friends_Tracking_Order_By;
  friends_tracking_pk_columns_input: Friends_Tracking_Pk_Columns_Input;
  friends_tracking_select_column: Friends_Tracking_Select_Column;
  friends_tracking_set_input: Friends_Tracking_Set_Input;
  friends_tracking_stddev_fields: ResolverTypeWrapper<Friends_Tracking_Stddev_Fields>;
  friends_tracking_stddev_order_by: Friends_Tracking_Stddev_Order_By;
  friends_tracking_stddev_pop_fields: ResolverTypeWrapper<Friends_Tracking_Stddev_Pop_Fields>;
  friends_tracking_stddev_pop_order_by: Friends_Tracking_Stddev_Pop_Order_By;
  friends_tracking_stddev_samp_fields: ResolverTypeWrapper<Friends_Tracking_Stddev_Samp_Fields>;
  friends_tracking_stddev_samp_order_by: Friends_Tracking_Stddev_Samp_Order_By;
  friends_tracking_sum_fields: ResolverTypeWrapper<Friends_Tracking_Sum_Fields>;
  friends_tracking_sum_order_by: Friends_Tracking_Sum_Order_By;
  friends_tracking_update_column: Friends_Tracking_Update_Column;
  friends_tracking_var_pop_fields: ResolverTypeWrapper<Friends_Tracking_Var_Pop_Fields>;
  friends_tracking_var_pop_order_by: Friends_Tracking_Var_Pop_Order_By;
  friends_tracking_var_samp_fields: ResolverTypeWrapper<Friends_Tracking_Var_Samp_Fields>;
  friends_tracking_var_samp_order_by: Friends_Tracking_Var_Samp_Order_By;
  friends_tracking_variance_fields: ResolverTypeWrapper<Friends_Tracking_Variance_Fields>;
  friends_tracking_variance_order_by: Friends_Tracking_Variance_Order_By;
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
  Int_comparison_exp: Int_Comparison_Exp;
  interval: ResolverTypeWrapper<Scalars['interval']>;
  interval_comparison_exp: Interval_Comparison_Exp;
  json: ResolverTypeWrapper<Scalars['json']>;
  json_comparison_exp: Json_Comparison_Exp;
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
  String_comparison_exp: String_Comparison_Exp;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamp: ResolverTypeWrapper<Scalars['timestamp']>;
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  unachievedachievements_args: Unachievedachievements_Args;
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
  achievement: Achievement;
  String: Scalars['String'];
  Int: Scalars['Int'];
  achievement_aggregate: Achievement_Aggregate;
  achievement_aggregate_fields: Achievement_Aggregate_Fields;
  Boolean: Scalars['Boolean'];
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
  achievement_type: Achievement_Type;
  achievement_type_aggregate: Achievement_Type_Aggregate;
  achievement_type_aggregate_fields: Achievement_Type_Aggregate_Fields;
  achievement_type_aggregate_order_by: Achievement_Type_Aggregate_Order_By;
  achievement_type_arr_rel_insert_input: Achievement_Type_Arr_Rel_Insert_Input;
  achievement_type_bool_exp: Achievement_Type_Bool_Exp;
  achievement_type_enum_comparison_exp: Achievement_Type_Enum_Comparison_Exp;
  achievement_type_insert_input: Achievement_Type_Insert_Input;
  achievement_type_max_fields: Achievement_Type_Max_Fields;
  achievement_type_max_order_by: Achievement_Type_Max_Order_By;
  achievement_type_min_fields: Achievement_Type_Min_Fields;
  achievement_type_min_order_by: Achievement_Type_Min_Order_By;
  achievement_type_mutation_response: Achievement_Type_Mutation_Response;
  achievement_type_obj_rel_insert_input: Achievement_Type_Obj_Rel_Insert_Input;
  achievement_type_on_conflict: Achievement_Type_On_Conflict;
  achievement_type_order_by: Achievement_Type_Order_By;
  achievement_type_pk_columns_input: Achievement_Type_Pk_Columns_Input;
  achievement_type_set_input: Achievement_Type_Set_Input;
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
  bigint: Scalars['bigint'];
  categories: Categories;
  categories_aggregate: Categories_Aggregate;
  categories_aggregate_fields: Categories_Aggregate_Fields;
  categories_aggregate_order_by: Categories_Aggregate_Order_By;
  categories_arr_rel_insert_input: Categories_Arr_Rel_Insert_Input;
  categories_avg_fields: Categories_Avg_Fields;
  categories_avg_order_by: Categories_Avg_Order_By;
  categories_bool_exp: Categories_Bool_Exp;
  categories_inc_input: Categories_Inc_Input;
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
  categories_stddev_fields: Categories_Stddev_Fields;
  categories_stddev_order_by: Categories_Stddev_Order_By;
  categories_stddev_pop_fields: Categories_Stddev_Pop_Fields;
  categories_stddev_pop_order_by: Categories_Stddev_Pop_Order_By;
  categories_stddev_samp_fields: Categories_Stddev_Samp_Fields;
  categories_stddev_samp_order_by: Categories_Stddev_Samp_Order_By;
  categories_sum_fields: Categories_Sum_Fields;
  categories_sum_order_by: Categories_Sum_Order_By;
  categories_var_pop_fields: Categories_Var_Pop_Fields;
  categories_var_pop_order_by: Categories_Var_Pop_Order_By;
  categories_var_samp_fields: Categories_Var_Samp_Fields;
  categories_var_samp_order_by: Categories_Var_Samp_Order_By;
  categories_variance_fields: Categories_Variance_Fields;
  categories_variance_order_by: Categories_Variance_Order_By;
  challenge: Challenge;
  challenge_aggregate: Challenge_Aggregate;
  challenge_aggregate_fields: Challenge_Aggregate_Fields;
  challenge_aggregate_order_by: Challenge_Aggregate_Order_By;
  challenge_arr_rel_insert_input: Challenge_Arr_Rel_Insert_Input;
  challenge_avg_fields: Challenge_Avg_Fields;
  challenge_avg_order_by: Challenge_Avg_Order_By;
  challenge_bool_exp: Challenge_Bool_Exp;
  challenge_inc_input: Challenge_Inc_Input;
  challenge_insert_input: Challenge_Insert_Input;
  challenge_max_fields: Challenge_Max_Fields;
  challenge_max_order_by: Challenge_Max_Order_By;
  challenge_min_fields: Challenge_Min_Fields;
  challenge_min_order_by: Challenge_Min_Order_By;
  challenge_mutation_response: Challenge_Mutation_Response;
  challenge_obj_rel_insert_input: Challenge_Obj_Rel_Insert_Input;
  challenge_on_conflict: Challenge_On_Conflict;
  challenge_order_by: Challenge_Order_By;
  challenge_participant: Challenge_Participant;
  challenge_participant_aggregate: Challenge_Participant_Aggregate;
  challenge_participant_aggregate_fields: Challenge_Participant_Aggregate_Fields;
  challenge_participant_aggregate_order_by: Challenge_Participant_Aggregate_Order_By;
  challenge_participant_arr_rel_insert_input: Challenge_Participant_Arr_Rel_Insert_Input;
  challenge_participant_avg_fields: Challenge_Participant_Avg_Fields;
  challenge_participant_avg_order_by: Challenge_Participant_Avg_Order_By;
  challenge_participant_bool_exp: Challenge_Participant_Bool_Exp;
  challenge_participant_inc_input: Challenge_Participant_Inc_Input;
  challenge_participant_insert_input: Challenge_Participant_Insert_Input;
  challenge_participant_max_fields: Challenge_Participant_Max_Fields;
  challenge_participant_max_order_by: Challenge_Participant_Max_Order_By;
  challenge_participant_min_fields: Challenge_Participant_Min_Fields;
  challenge_participant_min_order_by: Challenge_Participant_Min_Order_By;
  challenge_participant_mutation_response: Challenge_Participant_Mutation_Response;
  challenge_participant_obj_rel_insert_input: Challenge_Participant_Obj_Rel_Insert_Input;
  challenge_participant_on_conflict: Challenge_Participant_On_Conflict;
  challenge_participant_order_by: Challenge_Participant_Order_By;
  challenge_participant_pk_columns_input: Challenge_Participant_Pk_Columns_Input;
  challenge_participant_set_input: Challenge_Participant_Set_Input;
  challenge_participant_state: Challenge_Participant_State;
  challenge_participant_state_aggregate: Challenge_Participant_State_Aggregate;
  challenge_participant_state_aggregate_fields: Challenge_Participant_State_Aggregate_Fields;
  challenge_participant_state_aggregate_order_by: Challenge_Participant_State_Aggregate_Order_By;
  challenge_participant_state_arr_rel_insert_input: Challenge_Participant_State_Arr_Rel_Insert_Input;
  challenge_participant_state_bool_exp: Challenge_Participant_State_Bool_Exp;
  challenge_participant_state_enum_comparison_exp: Challenge_Participant_State_Enum_Comparison_Exp;
  challenge_participant_state_insert_input: Challenge_Participant_State_Insert_Input;
  challenge_participant_state_max_fields: Challenge_Participant_State_Max_Fields;
  challenge_participant_state_max_order_by: Challenge_Participant_State_Max_Order_By;
  challenge_participant_state_min_fields: Challenge_Participant_State_Min_Fields;
  challenge_participant_state_min_order_by: Challenge_Participant_State_Min_Order_By;
  challenge_participant_state_mutation_response: Challenge_Participant_State_Mutation_Response;
  challenge_participant_state_obj_rel_insert_input: Challenge_Participant_State_Obj_Rel_Insert_Input;
  challenge_participant_state_on_conflict: Challenge_Participant_State_On_Conflict;
  challenge_participant_state_order_by: Challenge_Participant_State_Order_By;
  challenge_participant_state_pk_columns_input: Challenge_Participant_State_Pk_Columns_Input;
  challenge_participant_state_set_input: Challenge_Participant_State_Set_Input;
  challenge_participant_stddev_fields: Challenge_Participant_Stddev_Fields;
  challenge_participant_stddev_order_by: Challenge_Participant_Stddev_Order_By;
  challenge_participant_stddev_pop_fields: Challenge_Participant_Stddev_Pop_Fields;
  challenge_participant_stddev_pop_order_by: Challenge_Participant_Stddev_Pop_Order_By;
  challenge_participant_stddev_samp_fields: Challenge_Participant_Stddev_Samp_Fields;
  challenge_participant_stddev_samp_order_by: Challenge_Participant_Stddev_Samp_Order_By;
  challenge_participant_sum_fields: Challenge_Participant_Sum_Fields;
  challenge_participant_sum_order_by: Challenge_Participant_Sum_Order_By;
  challenge_participant_var_pop_fields: Challenge_Participant_Var_Pop_Fields;
  challenge_participant_var_pop_order_by: Challenge_Participant_Var_Pop_Order_By;
  challenge_participant_var_samp_fields: Challenge_Participant_Var_Samp_Fields;
  challenge_participant_var_samp_order_by: Challenge_Participant_Var_Samp_Order_By;
  challenge_participant_variance_fields: Challenge_Participant_Variance_Fields;
  challenge_participant_variance_order_by: Challenge_Participant_Variance_Order_By;
  challenge_pk_columns_input: Challenge_Pk_Columns_Input;
  challenge_set_input: Challenge_Set_Input;
  challenge_state: Challenge_State;
  challenge_state_aggregate: Challenge_State_Aggregate;
  challenge_state_aggregate_fields: Challenge_State_Aggregate_Fields;
  challenge_state_aggregate_order_by: Challenge_State_Aggregate_Order_By;
  challenge_state_arr_rel_insert_input: Challenge_State_Arr_Rel_Insert_Input;
  challenge_state_bool_exp: Challenge_State_Bool_Exp;
  challenge_state_enum_comparison_exp: Challenge_State_Enum_Comparison_Exp;
  challenge_state_insert_input: Challenge_State_Insert_Input;
  challenge_state_max_fields: Challenge_State_Max_Fields;
  challenge_state_max_order_by: Challenge_State_Max_Order_By;
  challenge_state_min_fields: Challenge_State_Min_Fields;
  challenge_state_min_order_by: Challenge_State_Min_Order_By;
  challenge_state_mutation_response: Challenge_State_Mutation_Response;
  challenge_state_obj_rel_insert_input: Challenge_State_Obj_Rel_Insert_Input;
  challenge_state_on_conflict: Challenge_State_On_Conflict;
  challenge_state_order_by: Challenge_State_Order_By;
  challenge_state_pk_columns_input: Challenge_State_Pk_Columns_Input;
  challenge_state_set_input: Challenge_State_Set_Input;
  challenge_stddev_fields: Challenge_Stddev_Fields;
  challenge_stddev_order_by: Challenge_Stddev_Order_By;
  challenge_stddev_pop_fields: Challenge_Stddev_Pop_Fields;
  challenge_stddev_pop_order_by: Challenge_Stddev_Pop_Order_By;
  challenge_stddev_samp_fields: Challenge_Stddev_Samp_Fields;
  challenge_stddev_samp_order_by: Challenge_Stddev_Samp_Order_By;
  challenge_sum_fields: Challenge_Sum_Fields;
  challenge_sum_order_by: Challenge_Sum_Order_By;
  challenge_type: Challenge_Type;
  challenge_type_aggregate: Challenge_Type_Aggregate;
  challenge_type_aggregate_fields: Challenge_Type_Aggregate_Fields;
  challenge_type_aggregate_order_by: Challenge_Type_Aggregate_Order_By;
  challenge_type_arr_rel_insert_input: Challenge_Type_Arr_Rel_Insert_Input;
  challenge_type_bool_exp: Challenge_Type_Bool_Exp;
  challenge_type_enum_comparison_exp: Challenge_Type_Enum_Comparison_Exp;
  challenge_type_insert_input: Challenge_Type_Insert_Input;
  challenge_type_max_fields: Challenge_Type_Max_Fields;
  challenge_type_max_order_by: Challenge_Type_Max_Order_By;
  challenge_type_min_fields: Challenge_Type_Min_Fields;
  challenge_type_min_order_by: Challenge_Type_Min_Order_By;
  challenge_type_mutation_response: Challenge_Type_Mutation_Response;
  challenge_type_obj_rel_insert_input: Challenge_Type_Obj_Rel_Insert_Input;
  challenge_type_on_conflict: Challenge_Type_On_Conflict;
  challenge_type_order_by: Challenge_Type_Order_By;
  challenge_type_pk_columns_input: Challenge_Type_Pk_Columns_Input;
  challenge_type_set_input: Challenge_Type_Set_Input;
  challenge_var_pop_fields: Challenge_Var_Pop_Fields;
  challenge_var_pop_order_by: Challenge_Var_Pop_Order_By;
  challenge_var_samp_fields: Challenge_Var_Samp_Fields;
  challenge_var_samp_order_by: Challenge_Var_Samp_Order_By;
  challenge_variance_fields: Challenge_Variance_Fields;
  challenge_variance_order_by: Challenge_Variance_Order_By;
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
  date: Scalars['date'];
  date_comparison_exp: Date_Comparison_Exp;
  feed: Feed;
  feed_aggregate: Feed_Aggregate;
  feed_aggregate_fields: Feed_Aggregate_Fields;
  feed_aggregate_order_by: Feed_Aggregate_Order_By;
  feed_arr_rel_insert_input: Feed_Arr_Rel_Insert_Input;
  feed_avg_fields: Feed_Avg_Fields;
  feed_avg_order_by: Feed_Avg_Order_By;
  feed_bool_exp: Feed_Bool_Exp;
  feed_inc_input: Feed_Inc_Input;
  feed_insert_input: Feed_Insert_Input;
  feed_max_fields: Feed_Max_Fields;
  feed_max_order_by: Feed_Max_Order_By;
  feed_min_fields: Feed_Min_Fields;
  feed_min_order_by: Feed_Min_Order_By;
  feed_mutation_response: Feed_Mutation_Response;
  feed_obj_rel_insert_input: Feed_Obj_Rel_Insert_Input;
  feed_on_conflict: Feed_On_Conflict;
  feed_order_by: Feed_Order_By;
  feed_pk_columns_input: Feed_Pk_Columns_Input;
  feed_set_input: Feed_Set_Input;
  feed_stddev_fields: Feed_Stddev_Fields;
  feed_stddev_order_by: Feed_Stddev_Order_By;
  feed_stddev_pop_fields: Feed_Stddev_Pop_Fields;
  feed_stddev_pop_order_by: Feed_Stddev_Pop_Order_By;
  feed_stddev_samp_fields: Feed_Stddev_Samp_Fields;
  feed_stddev_samp_order_by: Feed_Stddev_Samp_Order_By;
  feed_sum_fields: Feed_Sum_Fields;
  feed_sum_order_by: Feed_Sum_Order_By;
  feed_type: Feed_Type;
  feed_type_aggregate: Feed_Type_Aggregate;
  feed_type_aggregate_fields: Feed_Type_Aggregate_Fields;
  feed_type_aggregate_order_by: Feed_Type_Aggregate_Order_By;
  feed_type_arr_rel_insert_input: Feed_Type_Arr_Rel_Insert_Input;
  feed_type_bool_exp: Feed_Type_Bool_Exp;
  feed_type_enum_comparison_exp: Feed_Type_Enum_Comparison_Exp;
  feed_type_insert_input: Feed_Type_Insert_Input;
  feed_type_max_fields: Feed_Type_Max_Fields;
  feed_type_max_order_by: Feed_Type_Max_Order_By;
  feed_type_min_fields: Feed_Type_Min_Fields;
  feed_type_min_order_by: Feed_Type_Min_Order_By;
  feed_type_mutation_response: Feed_Type_Mutation_Response;
  feed_type_obj_rel_insert_input: Feed_Type_Obj_Rel_Insert_Input;
  feed_type_on_conflict: Feed_Type_On_Conflict;
  feed_type_order_by: Feed_Type_Order_By;
  feed_type_pk_columns_input: Feed_Type_Pk_Columns_Input;
  feed_type_set_input: Feed_Type_Set_Input;
  feed_var_pop_fields: Feed_Var_Pop_Fields;
  feed_var_pop_order_by: Feed_Var_Pop_Order_By;
  feed_var_samp_fields: Feed_Var_Samp_Fields;
  feed_var_samp_order_by: Feed_Var_Samp_Order_By;
  feed_variance_fields: Feed_Variance_Fields;
  feed_variance_order_by: Feed_Variance_Order_By;
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
  friends_tracking: Friends_Tracking;
  friends_tracking_aggregate: Friends_Tracking_Aggregate;
  friends_tracking_aggregate_fields: Friends_Tracking_Aggregate_Fields;
  friends_tracking_aggregate_order_by: Friends_Tracking_Aggregate_Order_By;
  friends_tracking_arr_rel_insert_input: Friends_Tracking_Arr_Rel_Insert_Input;
  friends_tracking_avg_fields: Friends_Tracking_Avg_Fields;
  friends_tracking_avg_order_by: Friends_Tracking_Avg_Order_By;
  friends_tracking_bool_exp: Friends_Tracking_Bool_Exp;
  friends_tracking_inc_input: Friends_Tracking_Inc_Input;
  friends_tracking_insert_input: Friends_Tracking_Insert_Input;
  friends_tracking_max_fields: Friends_Tracking_Max_Fields;
  friends_tracking_max_order_by: Friends_Tracking_Max_Order_By;
  friends_tracking_min_fields: Friends_Tracking_Min_Fields;
  friends_tracking_min_order_by: Friends_Tracking_Min_Order_By;
  friends_tracking_mutation_response: Friends_Tracking_Mutation_Response;
  friends_tracking_obj_rel_insert_input: Friends_Tracking_Obj_Rel_Insert_Input;
  friends_tracking_on_conflict: Friends_Tracking_On_Conflict;
  friends_tracking_order_by: Friends_Tracking_Order_By;
  friends_tracking_pk_columns_input: Friends_Tracking_Pk_Columns_Input;
  friends_tracking_set_input: Friends_Tracking_Set_Input;
  friends_tracking_stddev_fields: Friends_Tracking_Stddev_Fields;
  friends_tracking_stddev_order_by: Friends_Tracking_Stddev_Order_By;
  friends_tracking_stddev_pop_fields: Friends_Tracking_Stddev_Pop_Fields;
  friends_tracking_stddev_pop_order_by: Friends_Tracking_Stddev_Pop_Order_By;
  friends_tracking_stddev_samp_fields: Friends_Tracking_Stddev_Samp_Fields;
  friends_tracking_stddev_samp_order_by: Friends_Tracking_Stddev_Samp_Order_By;
  friends_tracking_sum_fields: Friends_Tracking_Sum_Fields;
  friends_tracking_sum_order_by: Friends_Tracking_Sum_Order_By;
  friends_tracking_var_pop_fields: Friends_Tracking_Var_Pop_Fields;
  friends_tracking_var_pop_order_by: Friends_Tracking_Var_Pop_Order_By;
  friends_tracking_var_samp_fields: Friends_Tracking_Var_Samp_Fields;
  friends_tracking_var_samp_order_by: Friends_Tracking_Var_Samp_Order_By;
  friends_tracking_variance_fields: Friends_Tracking_Variance_Fields;
  friends_tracking_variance_order_by: Friends_Tracking_Variance_Order_By;
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
  Int_comparison_exp: Int_Comparison_Exp;
  interval: Scalars['interval'];
  interval_comparison_exp: Interval_Comparison_Exp;
  json: Scalars['json'];
  json_comparison_exp: Json_Comparison_Exp;
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
  String_comparison_exp: String_Comparison_Exp;
  subscription_root: {};
  timestamp: Scalars['timestamp'];
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  unachievedachievements_args: Unachievedachievements_Args;
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
  achievementTypeByAchievementType?: Resolver<ResolversTypes['achievement_type'], ParentType, ContextType>;
  achievement_type?: Resolver<ResolversTypes['achievement_type_enum'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feed?: Resolver<Maybe<ResolversTypes['feed']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rule?: Resolver<ResolversTypes['json'], ParentType, ContextType, RequireFields<AchievementRuleArgs, never>>;
  user_achievements?: Resolver<Array<ResolversTypes['user_achievement']>, ParentType, ContextType, RequireFields<AchievementUser_AchievementsArgs, never>>;
  user_achievements_aggregate?: Resolver<ResolversTypes['user_achievement_aggregate'], ParentType, ContextType, RequireFields<AchievementUser_Achievements_AggregateArgs, never>>;
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
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_max_fields'] = ResolversParentTypes['achievement_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_min_fields'] = ResolversParentTypes['achievement_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_stddev_pop_fields'] = ResolversParentTypes['achievement_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_stddev_samp_fields'] = ResolversParentTypes['achievement_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_sum_fields'] = ResolversParentTypes['achievement_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_type'] = ResolversParentTypes['achievement_type']> = {
  achievements?: Resolver<Array<ResolversTypes['achievement']>, ParentType, ContextType, RequireFields<Achievement_TypeAchievementsArgs, never>>;
  achievements_aggregate?: Resolver<ResolversTypes['achievement_aggregate'], ParentType, ContextType, RequireFields<Achievement_TypeAchievements_AggregateArgs, never>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Type_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_type_aggregate'] = ResolversParentTypes['achievement_type_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['achievement_type_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['achievement_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Type_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_type_aggregate_fields'] = ResolversParentTypes['achievement_type_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Achievement_Type_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['achievement_type_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['achievement_type_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Type_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_type_max_fields'] = ResolversParentTypes['achievement_type_max_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Type_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_type_min_fields'] = ResolversParentTypes['achievement_type_min_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Type_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_type_mutation_response'] = ResolversParentTypes['achievement_type_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['achievement_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_var_pop_fields'] = ResolversParentTypes['achievement_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_var_samp_fields'] = ResolversParentTypes['achievement_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Achievement_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['achievement_variance_fields'] = ResolversParentTypes['achievement_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities'] = ResolversParentTypes['activities']> = {
  activity_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['interval'], ParentType, ContextType>;
  feed?: Resolver<Maybe<ResolversTypes['feed']>, ParentType, ContextType>;
  feeds?: Resolver<Array<ResolversTypes['feed']>, ParentType, ContextType, RequireFields<ActivitiesFeedsArgs, never>>;
  feeds_aggregate?: Resolver<ResolversTypes['feed_aggregate'], ParentType, ContextType, RequireFields<ActivitiesFeeds_AggregateArgs, never>>;
  geofence?: Resolver<ResolversTypes['geofences'], ParentType, ContextType>;
  geofence_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  stopped_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
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
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_max_fields'] = ResolversParentTypes['activities_max_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_min_fields'] = ResolversParentTypes['activities_min_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
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
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_stddev_pop_fields'] = ResolversParentTypes['activities_stddev_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_stddev_samp_fields'] = ResolversParentTypes['activities_stddev_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_sum_fields'] = ResolversParentTypes['activities_sum_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_var_pop_fields'] = ResolversParentTypes['activities_var_pop_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_var_samp_fields'] = ResolversParentTypes['activities_var_samp_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Activities_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['activities_variance_fields'] = ResolversParentTypes['activities_variance_fields']> = {
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bigint'], any> {
  name: 'bigint';
}

export type CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories'] = ResolversParentTypes['categories']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points_per_minute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_aggregate'] = ResolversParentTypes['categories_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['categories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_aggregate_fields'] = ResolversParentTypes['categories_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['categories_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Categories_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['categories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['categories_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['categories_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['categories_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['categories_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['categories_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['categories_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['categories_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['categories_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_avg_fields'] = ResolversParentTypes['categories_avg_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_max_fields'] = ResolversParentTypes['categories_max_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  points_per_minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_min_fields'] = ResolversParentTypes['categories_min_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  points_per_minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_mutation_response'] = ResolversParentTypes['categories_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_stddev_fields'] = ResolversParentTypes['categories_stddev_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_stddev_pop_fields'] = ResolversParentTypes['categories_stddev_pop_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_stddev_samp_fields'] = ResolversParentTypes['categories_stddev_samp_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_sum_fields'] = ResolversParentTypes['categories_sum_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_var_pop_fields'] = ResolversParentTypes['categories_var_pop_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_var_samp_fields'] = ResolversParentTypes['categories_var_samp_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories_variance_fields'] = ResolversParentTypes['categories_variance_fields']> = {
  points_per_minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge'] = ResolversParentTypes['challenge']> = {
  challengeTypeByChallengeType?: Resolver<ResolversTypes['challenge_type'], ParentType, ContextType>;
  challenge_participants?: Resolver<Array<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<ChallengeChallenge_ParticipantsArgs, never>>;
  challenge_participants_aggregate?: Resolver<ResolversTypes['challenge_participant_aggregate'], ParentType, ContextType, RequireFields<ChallengeChallenge_Participants_AggregateArgs, never>>;
  challenge_state?: Resolver<ResolversTypes['challenge_state'], ParentType, ContextType>;
  challenge_type?: Resolver<ResolversTypes['challenge_type_enum'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_by_user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  end_date?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  feed?: Resolver<Maybe<ResolversTypes['feed']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rules?: Resolver<ResolversTypes['json'], ParentType, ContextType, RequireFields<ChallengeRulesArgs, never>>;
  start_date?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['challenge_state_enum'], ParentType, ContextType>;
  winner?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  winner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_aggregate'] = ResolversParentTypes['challenge_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['challenge_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['challenge']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_aggregate_fields'] = ResolversParentTypes['challenge_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['challenge_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Challenge_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['challenge_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['challenge_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['challenge_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['challenge_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['challenge_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['challenge_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['challenge_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['challenge_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['challenge_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_avg_fields'] = ResolversParentTypes['challenge_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_max_fields'] = ResolversParentTypes['challenge_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  created_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  winner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_min_fields'] = ResolversParentTypes['challenge_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  created_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  winner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_mutation_response'] = ResolversParentTypes['challenge_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['challenge']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant'] = ResolversParentTypes['challenge_participant']> = {
  challenge?: Resolver<ResolversTypes['challenge'], ParentType, ContextType>;
  challenge_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  challenge_participant_state?: Resolver<ResolversTypes['challenge_participant_state'], ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['challenge_participant_state_enum'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_aggregate'] = ResolversParentTypes['challenge_participant_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['challenge_participant_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['challenge_participant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_aggregate_fields'] = ResolversParentTypes['challenge_participant_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['challenge_participant_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Challenge_Participant_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['challenge_participant_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['challenge_participant_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['challenge_participant_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['challenge_participant_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['challenge_participant_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['challenge_participant_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['challenge_participant_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['challenge_participant_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['challenge_participant_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_avg_fields'] = ResolversParentTypes['challenge_participant_avg_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_max_fields'] = ResolversParentTypes['challenge_participant_max_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_min_fields'] = ResolversParentTypes['challenge_participant_min_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_mutation_response'] = ResolversParentTypes['challenge_participant_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['challenge_participant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_state'] = ResolversParentTypes['challenge_participant_state']> = {
  challenge_participants?: Resolver<Array<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<Challenge_Participant_StateChallenge_ParticipantsArgs, never>>;
  challenge_participants_aggregate?: Resolver<ResolversTypes['challenge_participant_aggregate'], ParentType, ContextType, RequireFields<Challenge_Participant_StateChallenge_Participants_AggregateArgs, never>>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_State_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_state_aggregate'] = ResolversParentTypes['challenge_participant_state_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['challenge_participant_state_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['challenge_participant_state']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_State_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_state_aggregate_fields'] = ResolversParentTypes['challenge_participant_state_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Challenge_Participant_State_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['challenge_participant_state_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['challenge_participant_state_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_State_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_state_max_fields'] = ResolversParentTypes['challenge_participant_state_max_fields']> = {
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_State_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_state_min_fields'] = ResolversParentTypes['challenge_participant_state_min_fields']> = {
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_State_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_state_mutation_response'] = ResolversParentTypes['challenge_participant_state_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['challenge_participant_state']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_stddev_fields'] = ResolversParentTypes['challenge_participant_stddev_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_stddev_pop_fields'] = ResolversParentTypes['challenge_participant_stddev_pop_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_stddev_samp_fields'] = ResolversParentTypes['challenge_participant_stddev_samp_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_sum_fields'] = ResolversParentTypes['challenge_participant_sum_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_var_pop_fields'] = ResolversParentTypes['challenge_participant_var_pop_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_var_samp_fields'] = ResolversParentTypes['challenge_participant_var_samp_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Participant_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_participant_variance_fields'] = ResolversParentTypes['challenge_participant_variance_fields']> = {
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_state'] = ResolversParentTypes['challenge_state']> = {
  challenges?: Resolver<Array<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<Challenge_StateChallengesArgs, never>>;
  challenges_aggregate?: Resolver<ResolversTypes['challenge_aggregate'], ParentType, ContextType, RequireFields<Challenge_StateChallenges_AggregateArgs, never>>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_State_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_state_aggregate'] = ResolversParentTypes['challenge_state_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['challenge_state_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['challenge_state']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_State_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_state_aggregate_fields'] = ResolversParentTypes['challenge_state_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Challenge_State_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['challenge_state_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['challenge_state_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_State_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_state_max_fields'] = ResolversParentTypes['challenge_state_max_fields']> = {
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_State_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_state_min_fields'] = ResolversParentTypes['challenge_state_min_fields']> = {
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_State_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_state_mutation_response'] = ResolversParentTypes['challenge_state_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['challenge_state']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_stddev_fields'] = ResolversParentTypes['challenge_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_stddev_pop_fields'] = ResolversParentTypes['challenge_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_stddev_samp_fields'] = ResolversParentTypes['challenge_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_sum_fields'] = ResolversParentTypes['challenge_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_type'] = ResolversParentTypes['challenge_type']> = {
  challenges?: Resolver<Array<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<Challenge_TypeChallengesArgs, never>>;
  challenges_aggregate?: Resolver<ResolversTypes['challenge_aggregate'], ParentType, ContextType, RequireFields<Challenge_TypeChallenges_AggregateArgs, never>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Type_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_type_aggregate'] = ResolversParentTypes['challenge_type_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['challenge_type_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['challenge_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Type_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_type_aggregate_fields'] = ResolversParentTypes['challenge_type_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Challenge_Type_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['challenge_type_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['challenge_type_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Type_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_type_max_fields'] = ResolversParentTypes['challenge_type_max_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Type_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_type_min_fields'] = ResolversParentTypes['challenge_type_min_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Type_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_type_mutation_response'] = ResolversParentTypes['challenge_type_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['challenge_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_var_pop_fields'] = ResolversParentTypes['challenge_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_var_samp_fields'] = ResolversParentTypes['challenge_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Challenge_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['challenge_variance_fields'] = ResolversParentTypes['challenge_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export type FeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed'] = ResolversParentTypes['feed']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType>;
  activityByActivityIdCreatedAtUserId?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  challenge?: Resolver<Maybe<ResolversTypes['challenge']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  feedTypeByFeedType?: Resolver<ResolversTypes['feed_type'], ParentType, ContextType>;
  feed_type?: Resolver<ResolversTypes['feed_type_enum'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType>;
  user_achievement?: Resolver<Maybe<ResolversTypes['user_achievement']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_aggregate'] = ResolversParentTypes['feed_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['feed_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['feed']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_aggregate_fields'] = ResolversParentTypes['feed_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['feed_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Feed_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['feed_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['feed_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['feed_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['feed_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['feed_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['feed_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['feed_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['feed_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['feed_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_avg_fields'] = ResolversParentTypes['feed_avg_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_max_fields'] = ResolversParentTypes['feed_max_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_min_fields'] = ResolversParentTypes['feed_min_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_mutation_response'] = ResolversParentTypes['feed_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['feed']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_stddev_fields'] = ResolversParentTypes['feed_stddev_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_stddev_pop_fields'] = ResolversParentTypes['feed_stddev_pop_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_stddev_samp_fields'] = ResolversParentTypes['feed_stddev_samp_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_sum_fields'] = ResolversParentTypes['feed_sum_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_type'] = ResolversParentTypes['feed_type']> = {
  feeds?: Resolver<Array<ResolversTypes['feed']>, ParentType, ContextType, RequireFields<Feed_TypeFeedsArgs, never>>;
  feeds_aggregate?: Resolver<ResolversTypes['feed_aggregate'], ParentType, ContextType, RequireFields<Feed_TypeFeeds_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Type_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_type_aggregate'] = ResolversParentTypes['feed_type_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['feed_type_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['feed_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Type_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_type_aggregate_fields'] = ResolversParentTypes['feed_type_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Feed_Type_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['feed_type_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['feed_type_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Type_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_type_max_fields'] = ResolversParentTypes['feed_type_max_fields']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Type_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_type_min_fields'] = ResolversParentTypes['feed_type_min_fields']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Type_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_type_mutation_response'] = ResolversParentTypes['feed_type_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['feed_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_var_pop_fields'] = ResolversParentTypes['feed_var_pop_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_var_samp_fields'] = ResolversParentTypes['feed_var_samp_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Feed_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['feed_variance_fields'] = ResolversParentTypes['feed_variance_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challenge_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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

export type Friends_TrackingResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking'] = ResolversParentTypes['friends_tracking']> = {
  geofence_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  linking_word?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_join?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_start?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_aggregate'] = ResolversParentTypes['friends_tracking_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['friends_tracking_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['friends_tracking']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_aggregate_fields'] = ResolversParentTypes['friends_tracking_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['friends_tracking_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Friends_Tracking_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['friends_tracking_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['friends_tracking_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['friends_tracking_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['friends_tracking_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['friends_tracking_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['friends_tracking_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['friends_tracking_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['friends_tracking_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['friends_tracking_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_avg_fields'] = ResolversParentTypes['friends_tracking_avg_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_max_fields'] = ResolversParentTypes['friends_tracking_max_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linking_word?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_join?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_min_fields'] = ResolversParentTypes['friends_tracking_min_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linking_word?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_join?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_mutation_response'] = ResolversParentTypes['friends_tracking_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['friends_tracking']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_stddev_fields'] = ResolversParentTypes['friends_tracking_stddev_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_stddev_pop_fields'] = ResolversParentTypes['friends_tracking_stddev_pop_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_stddev_samp_fields'] = ResolversParentTypes['friends_tracking_stddev_samp_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_sum_fields'] = ResolversParentTypes['friends_tracking_sum_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_var_pop_fields'] = ResolversParentTypes['friends_tracking_var_pop_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_var_samp_fields'] = ResolversParentTypes['friends_tracking_var_samp_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Friends_Tracking_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['friends_tracking_variance_fields'] = ResolversParentTypes['friends_tracking_variance_fields']> = {
  geofence_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export interface IntervalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['interval'], any> {
  name: 'interval';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['json'], any> {
  name: 'json';
}

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
  delete_achievement_type?: Resolver<Maybe<ResolversTypes['achievement_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Achievement_TypeArgs, 'where'>>;
  delete_achievement_type_by_pk?: Resolver<Maybe<ResolversTypes['achievement_type']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Achievement_Type_By_PkArgs, 'name'>>;
  delete_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ActivitiesArgs, 'where'>>;
  delete_activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Activities_By_PkArgs, 'activity_id'>>;
  delete_categories?: Resolver<Maybe<ResolversTypes['categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CategoriesArgs, 'where'>>;
  delete_categories_by_pk?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Categories_By_PkArgs, 'name'>>;
  delete_challenge?: Resolver<Maybe<ResolversTypes['challenge_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ChallengeArgs, 'where'>>;
  delete_challenge_by_pk?: Resolver<Maybe<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_By_PkArgs, 'id'>>;
  delete_challenge_participant?: Resolver<Maybe<ResolversTypes['challenge_participant_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_ParticipantArgs, 'where'>>;
  delete_challenge_participant_by_pk?: Resolver<Maybe<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_Participant_By_PkArgs, 'challenge_id' | 'user_id'>>;
  delete_challenge_participant_state?: Resolver<Maybe<ResolversTypes['challenge_participant_state_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_Participant_StateArgs, 'where'>>;
  delete_challenge_participant_state_by_pk?: Resolver<Maybe<ResolversTypes['challenge_participant_state']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_Participant_State_By_PkArgs, 'state'>>;
  delete_challenge_state?: Resolver<Maybe<ResolversTypes['challenge_state_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_StateArgs, 'where'>>;
  delete_challenge_state_by_pk?: Resolver<Maybe<ResolversTypes['challenge_state']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_State_By_PkArgs, 'state'>>;
  delete_challenge_type?: Resolver<Maybe<ResolversTypes['challenge_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_TypeArgs, 'where'>>;
  delete_challenge_type_by_pk?: Resolver<Maybe<ResolversTypes['challenge_type']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Challenge_Type_By_PkArgs, 'name'>>;
  delete_comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CommentArgs, 'comment_id'>>;
  delete_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CommentsArgs, 'where'>>;
  delete_feed?: Resolver<Maybe<ResolversTypes['feed_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_FeedArgs, 'where'>>;
  delete_feed_by_pk?: Resolver<Maybe<ResolversTypes['feed']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Feed_By_PkArgs, 'id'>>;
  delete_feed_type?: Resolver<Maybe<ResolversTypes['feed_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Feed_TypeArgs, 'where'>>;
  delete_feed_type_by_pk?: Resolver<Maybe<ResolversTypes['feed_type']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Feed_Type_By_PkArgs, 'name'>>;
  delete_followings?: Resolver<Maybe<ResolversTypes['followings_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_FollowingsArgs, 'where'>>;
  delete_followings_by_pk?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Followings_By_PkArgs, 'following_id' | 'user_id'>>;
  delete_friends_tracking?: Resolver<Maybe<ResolversTypes['friends_tracking_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Friends_TrackingArgs, 'where'>>;
  delete_friends_tracking_by_pk?: Resolver<Maybe<ResolversTypes['friends_tracking']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Friends_Tracking_By_PkArgs, 'id'>>;
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
  insert_achievement_type?: Resolver<Maybe<ResolversTypes['achievement_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Achievement_TypeArgs, 'objects'>>;
  insert_achievement_type_one?: Resolver<Maybe<ResolversTypes['achievement_type']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Achievement_Type_OneArgs, 'object'>>;
  insert_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ActivitiesArgs, 'objects'>>;
  insert_activities_one?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Activities_OneArgs, 'object'>>;
  insert_categories?: Resolver<Maybe<ResolversTypes['categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CategoriesArgs, 'objects'>>;
  insert_categories_one?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Categories_OneArgs, 'object'>>;
  insert_challenge?: Resolver<Maybe<ResolversTypes['challenge_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ChallengeArgs, 'objects'>>;
  insert_challenge_one?: Resolver<Maybe<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_OneArgs, 'object'>>;
  insert_challenge_participant?: Resolver<Maybe<ResolversTypes['challenge_participant_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_ParticipantArgs, 'objects'>>;
  insert_challenge_participant_one?: Resolver<Maybe<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_Participant_OneArgs, 'object'>>;
  insert_challenge_participant_state?: Resolver<Maybe<ResolversTypes['challenge_participant_state_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_Participant_StateArgs, 'objects'>>;
  insert_challenge_participant_state_one?: Resolver<Maybe<ResolversTypes['challenge_participant_state']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_Participant_State_OneArgs, 'object'>>;
  insert_challenge_state?: Resolver<Maybe<ResolversTypes['challenge_state_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_StateArgs, 'objects'>>;
  insert_challenge_state_one?: Resolver<Maybe<ResolversTypes['challenge_state']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_State_OneArgs, 'object'>>;
  insert_challenge_type?: Resolver<Maybe<ResolversTypes['challenge_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_TypeArgs, 'objects'>>;
  insert_challenge_type_one?: Resolver<Maybe<ResolversTypes['challenge_type']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Challenge_Type_OneArgs, 'object'>>;
  insert_comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CommentArgs, 'object'>>;
  insert_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CommentsArgs, 'objects'>>;
  insert_feed?: Resolver<Maybe<ResolversTypes['feed_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_FeedArgs, 'objects'>>;
  insert_feed_one?: Resolver<Maybe<ResolversTypes['feed']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Feed_OneArgs, 'object'>>;
  insert_feed_type?: Resolver<Maybe<ResolversTypes['feed_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Feed_TypeArgs, 'objects'>>;
  insert_feed_type_one?: Resolver<Maybe<ResolversTypes['feed_type']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Feed_Type_OneArgs, 'object'>>;
  insert_followings?: Resolver<Maybe<ResolversTypes['followings_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_FollowingsArgs, 'objects'>>;
  insert_followings_one?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Followings_OneArgs, 'object'>>;
  insert_friends_tracking?: Resolver<Maybe<ResolversTypes['friends_tracking_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Friends_TrackingArgs, 'objects'>>;
  insert_friends_tracking_one?: Resolver<Maybe<ResolversTypes['friends_tracking']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Friends_Tracking_OneArgs, 'object'>>;
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
  update_achievement_type?: Resolver<Maybe<ResolversTypes['achievement_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Achievement_TypeArgs, 'where'>>;
  update_achievement_type_by_pk?: Resolver<Maybe<ResolversTypes['achievement_type']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Achievement_Type_By_PkArgs, 'pk_columns'>>;
  update_activities?: Resolver<Maybe<ResolversTypes['activities_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ActivitiesArgs, 'where'>>;
  update_activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Activities_By_PkArgs, 'pk_columns'>>;
  update_categories?: Resolver<Maybe<ResolversTypes['categories_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CategoriesArgs, 'where'>>;
  update_categories_by_pk?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Categories_By_PkArgs, 'pk_columns'>>;
  update_challenge?: Resolver<Maybe<ResolversTypes['challenge_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ChallengeArgs, 'where'>>;
  update_challenge_by_pk?: Resolver<Maybe<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_By_PkArgs, 'pk_columns'>>;
  update_challenge_participant?: Resolver<Maybe<ResolversTypes['challenge_participant_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_ParticipantArgs, 'where'>>;
  update_challenge_participant_by_pk?: Resolver<Maybe<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_Participant_By_PkArgs, 'pk_columns'>>;
  update_challenge_participant_state?: Resolver<Maybe<ResolversTypes['challenge_participant_state_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_Participant_StateArgs, 'where'>>;
  update_challenge_participant_state_by_pk?: Resolver<Maybe<ResolversTypes['challenge_participant_state']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_Participant_State_By_PkArgs, 'pk_columns'>>;
  update_challenge_state?: Resolver<Maybe<ResolversTypes['challenge_state_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_StateArgs, 'where'>>;
  update_challenge_state_by_pk?: Resolver<Maybe<ResolversTypes['challenge_state']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_State_By_PkArgs, 'pk_columns'>>;
  update_challenge_type?: Resolver<Maybe<ResolversTypes['challenge_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_TypeArgs, 'where'>>;
  update_challenge_type_by_pk?: Resolver<Maybe<ResolversTypes['challenge_type']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Challenge_Type_By_PkArgs, 'pk_columns'>>;
  update_comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CommentArgs, 'pk_columns'>>;
  update_comments?: Resolver<Maybe<ResolversTypes['comments_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CommentsArgs, 'where'>>;
  update_feed?: Resolver<Maybe<ResolversTypes['feed_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_FeedArgs, 'where'>>;
  update_feed_by_pk?: Resolver<Maybe<ResolversTypes['feed']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Feed_By_PkArgs, 'pk_columns'>>;
  update_feed_type?: Resolver<Maybe<ResolversTypes['feed_type_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Feed_TypeArgs, 'where'>>;
  update_feed_type_by_pk?: Resolver<Maybe<ResolversTypes['feed_type']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Feed_Type_By_PkArgs, 'pk_columns'>>;
  update_followings?: Resolver<Maybe<ResolversTypes['followings_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_FollowingsArgs, 'where'>>;
  update_followings_by_pk?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Followings_By_PkArgs, 'pk_columns'>>;
  update_friends_tracking?: Resolver<Maybe<ResolversTypes['friends_tracking_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Friends_TrackingArgs, 'where'>>;
  update_friends_tracking_by_pk?: Resolver<Maybe<ResolversTypes['friends_tracking']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Friends_Tracking_By_PkArgs, 'pk_columns'>>;
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
  achievement_type?: Resolver<Array<ResolversTypes['achievement_type']>, ParentType, ContextType, RequireFields<Query_RootAchievement_TypeArgs, never>>;
  achievement_type_aggregate?: Resolver<ResolversTypes['achievement_type_aggregate'], ParentType, ContextType, RequireFields<Query_RootAchievement_Type_AggregateArgs, never>>;
  achievement_type_by_pk?: Resolver<Maybe<ResolversTypes['achievement_type']>, ParentType, ContextType, RequireFields<Query_RootAchievement_Type_By_PkArgs, 'name'>>;
  activities?: Resolver<Array<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Query_RootActivitiesArgs, never>>;
  activities_aggregate?: Resolver<ResolversTypes['activities_aggregate'], ParentType, ContextType, RequireFields<Query_RootActivities_AggregateArgs, never>>;
  activities_by_pk?: Resolver<Maybe<ResolversTypes['activities']>, ParentType, ContextType, RequireFields<Query_RootActivities_By_PkArgs, 'activity_id'>>;
  categories?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Query_RootCategoriesArgs, never>>;
  categories_aggregate?: Resolver<ResolversTypes['categories_aggregate'], ParentType, ContextType, RequireFields<Query_RootCategories_AggregateArgs, never>>;
  categories_by_pk?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Query_RootCategories_By_PkArgs, 'name'>>;
  challenge?: Resolver<Array<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<Query_RootChallengeArgs, never>>;
  challenge_aggregate?: Resolver<ResolversTypes['challenge_aggregate'], ParentType, ContextType, RequireFields<Query_RootChallenge_AggregateArgs, never>>;
  challenge_by_pk?: Resolver<Maybe<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<Query_RootChallenge_By_PkArgs, 'id'>>;
  challenge_participant?: Resolver<Array<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<Query_RootChallenge_ParticipantArgs, never>>;
  challenge_participant_aggregate?: Resolver<ResolversTypes['challenge_participant_aggregate'], ParentType, ContextType, RequireFields<Query_RootChallenge_Participant_AggregateArgs, never>>;
  challenge_participant_by_pk?: Resolver<Maybe<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<Query_RootChallenge_Participant_By_PkArgs, 'challenge_id' | 'user_id'>>;
  challenge_participant_state?: Resolver<Array<ResolversTypes['challenge_participant_state']>, ParentType, ContextType, RequireFields<Query_RootChallenge_Participant_StateArgs, never>>;
  challenge_participant_state_aggregate?: Resolver<ResolversTypes['challenge_participant_state_aggregate'], ParentType, ContextType, RequireFields<Query_RootChallenge_Participant_State_AggregateArgs, never>>;
  challenge_participant_state_by_pk?: Resolver<Maybe<ResolversTypes['challenge_participant_state']>, ParentType, ContextType, RequireFields<Query_RootChallenge_Participant_State_By_PkArgs, 'state'>>;
  challenge_state?: Resolver<Array<ResolversTypes['challenge_state']>, ParentType, ContextType, RequireFields<Query_RootChallenge_StateArgs, never>>;
  challenge_state_aggregate?: Resolver<ResolversTypes['challenge_state_aggregate'], ParentType, ContextType, RequireFields<Query_RootChallenge_State_AggregateArgs, never>>;
  challenge_state_by_pk?: Resolver<Maybe<ResolversTypes['challenge_state']>, ParentType, ContextType, RequireFields<Query_RootChallenge_State_By_PkArgs, 'state'>>;
  challenge_type?: Resolver<Array<ResolversTypes['challenge_type']>, ParentType, ContextType, RequireFields<Query_RootChallenge_TypeArgs, never>>;
  challenge_type_aggregate?: Resolver<ResolversTypes['challenge_type_aggregate'], ParentType, ContextType, RequireFields<Query_RootChallenge_Type_AggregateArgs, never>>;
  challenge_type_by_pk?: Resolver<Maybe<ResolversTypes['challenge_type']>, ParentType, ContextType, RequireFields<Query_RootChallenge_Type_By_PkArgs, 'name'>>;
  comment?: Resolver<Maybe<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Query_RootCommentArgs, 'comment_id'>>;
  comments?: Resolver<Array<ResolversTypes['comments']>, ParentType, ContextType, RequireFields<Query_RootCommentsArgs, never>>;
  comments_aggregate?: Resolver<ResolversTypes['comments_aggregate'], ParentType, ContextType, RequireFields<Query_RootComments_AggregateArgs, never>>;
  feed?: Resolver<Array<ResolversTypes['feed']>, ParentType, ContextType, RequireFields<Query_RootFeedArgs, never>>;
  feed_aggregate?: Resolver<ResolversTypes['feed_aggregate'], ParentType, ContextType, RequireFields<Query_RootFeed_AggregateArgs, never>>;
  feed_by_pk?: Resolver<Maybe<ResolversTypes['feed']>, ParentType, ContextType, RequireFields<Query_RootFeed_By_PkArgs, 'id'>>;
  feed_type?: Resolver<Array<ResolversTypes['feed_type']>, ParentType, ContextType, RequireFields<Query_RootFeed_TypeArgs, never>>;
  feed_type_aggregate?: Resolver<ResolversTypes['feed_type_aggregate'], ParentType, ContextType, RequireFields<Query_RootFeed_Type_AggregateArgs, never>>;
  feed_type_by_pk?: Resolver<Maybe<ResolversTypes['feed_type']>, ParentType, ContextType, RequireFields<Query_RootFeed_Type_By_PkArgs, 'name'>>;
  followings?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Query_RootFollowingsArgs, never>>;
  followings_aggregate?: Resolver<ResolversTypes['followings_aggregate'], ParentType, ContextType, RequireFields<Query_RootFollowings_AggregateArgs, never>>;
  followings_by_pk?: Resolver<Maybe<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<Query_RootFollowings_By_PkArgs, 'following_id' | 'user_id'>>;
  friends_tracking?: Resolver<Array<ResolversTypes['friends_tracking']>, ParentType, ContextType, RequireFields<Query_RootFriends_TrackingArgs, never>>;
  friends_tracking_aggregate?: Resolver<ResolversTypes['friends_tracking_aggregate'], ParentType, ContextType, RequireFields<Query_RootFriends_Tracking_AggregateArgs, never>>;
  friends_tracking_by_pk?: Resolver<Maybe<ResolversTypes['friends_tracking']>, ParentType, ContextType, RequireFields<Query_RootFriends_Tracking_By_PkArgs, 'id'>>;
  geofence_variants?: Resolver<Array<ResolversTypes['geofence_variants']>, ParentType, ContextType, RequireFields<Query_RootGeofence_VariantsArgs, never>>;
  geofence_variants_aggregate?: Resolver<ResolversTypes['geofence_variants_aggregate'], ParentType, ContextType, RequireFields<Query_RootGeofence_Variants_AggregateArgs, never>>;
  geofence_variants_by_pk?: Resolver<Maybe<ResolversTypes['geofence_variants']>, ParentType, ContextType, RequireFields<Query_RootGeofence_Variants_By_PkArgs, 'name'>>;
  geofences?: Resolver<Array<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Query_RootGeofencesArgs, never>>;
  geofences_aggregate?: Resolver<ResolversTypes['geofences_aggregate'], ParentType, ContextType, RequireFields<Query_RootGeofences_AggregateArgs, never>>;
  geofences_by_pk?: Resolver<Maybe<ResolversTypes['geofences']>, ParentType, ContextType, RequireFields<Query_RootGeofences_By_PkArgs, 'id'>>;
  likes?: Resolver<Array<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<Query_RootLikesArgs, never>>;
  likes_aggregate?: Resolver<ResolversTypes['likes_aggregate'], ParentType, ContextType, RequireFields<Query_RootLikes_AggregateArgs, never>>;
  likes_by_pk?: Resolver<Maybe<ResolversTypes['likes']>, ParentType, ContextType, RequireFields<Query_RootLikes_By_PkArgs, 'activity_id' | 'user_id'>>;
  unachievedachievements?: Resolver<Array<ResolversTypes['achievement']>, ParentType, ContextType, RequireFields<Query_RootUnachievedachievementsArgs, 'args'>>;
  unachievedachievements_aggregate?: Resolver<ResolversTypes['achievement_aggregate'], ParentType, ContextType, RequireFields<Query_RootUnachievedachievements_AggregateArgs, 'args'>>;
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
  achievement_type?: SubscriptionResolver<Array<ResolversTypes['achievement_type']>, "achievement_type", ParentType, ContextType, RequireFields<Subscription_RootAchievement_TypeArgs, never>>;
  achievement_type_aggregate?: SubscriptionResolver<ResolversTypes['achievement_type_aggregate'], "achievement_type_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAchievement_Type_AggregateArgs, never>>;
  achievement_type_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['achievement_type']>, "achievement_type_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAchievement_Type_By_PkArgs, 'name'>>;
  activities?: SubscriptionResolver<Array<ResolversTypes['activities']>, "activities", ParentType, ContextType, RequireFields<Subscription_RootActivitiesArgs, never>>;
  activities_aggregate?: SubscriptionResolver<ResolversTypes['activities_aggregate'], "activities_aggregate", ParentType, ContextType, RequireFields<Subscription_RootActivities_AggregateArgs, never>>;
  activities_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['activities']>, "activities_by_pk", ParentType, ContextType, RequireFields<Subscription_RootActivities_By_PkArgs, 'activity_id'>>;
  categories?: SubscriptionResolver<Array<ResolversTypes['categories']>, "categories", ParentType, ContextType, RequireFields<Subscription_RootCategoriesArgs, never>>;
  categories_aggregate?: SubscriptionResolver<ResolversTypes['categories_aggregate'], "categories_aggregate", ParentType, ContextType, RequireFields<Subscription_RootCategories_AggregateArgs, never>>;
  categories_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['categories']>, "categories_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCategories_By_PkArgs, 'name'>>;
  challenge?: SubscriptionResolver<Array<ResolversTypes['challenge']>, "challenge", ParentType, ContextType, RequireFields<Subscription_RootChallengeArgs, never>>;
  challenge_aggregate?: SubscriptionResolver<ResolversTypes['challenge_aggregate'], "challenge_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChallenge_AggregateArgs, never>>;
  challenge_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['challenge']>, "challenge_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChallenge_By_PkArgs, 'id'>>;
  challenge_participant?: SubscriptionResolver<Array<ResolversTypes['challenge_participant']>, "challenge_participant", ParentType, ContextType, RequireFields<Subscription_RootChallenge_ParticipantArgs, never>>;
  challenge_participant_aggregate?: SubscriptionResolver<ResolversTypes['challenge_participant_aggregate'], "challenge_participant_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChallenge_Participant_AggregateArgs, never>>;
  challenge_participant_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['challenge_participant']>, "challenge_participant_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChallenge_Participant_By_PkArgs, 'challenge_id' | 'user_id'>>;
  challenge_participant_state?: SubscriptionResolver<Array<ResolversTypes['challenge_participant_state']>, "challenge_participant_state", ParentType, ContextType, RequireFields<Subscription_RootChallenge_Participant_StateArgs, never>>;
  challenge_participant_state_aggregate?: SubscriptionResolver<ResolversTypes['challenge_participant_state_aggregate'], "challenge_participant_state_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChallenge_Participant_State_AggregateArgs, never>>;
  challenge_participant_state_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['challenge_participant_state']>, "challenge_participant_state_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChallenge_Participant_State_By_PkArgs, 'state'>>;
  challenge_state?: SubscriptionResolver<Array<ResolversTypes['challenge_state']>, "challenge_state", ParentType, ContextType, RequireFields<Subscription_RootChallenge_StateArgs, never>>;
  challenge_state_aggregate?: SubscriptionResolver<ResolversTypes['challenge_state_aggregate'], "challenge_state_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChallenge_State_AggregateArgs, never>>;
  challenge_state_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['challenge_state']>, "challenge_state_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChallenge_State_By_PkArgs, 'state'>>;
  challenge_type?: SubscriptionResolver<Array<ResolversTypes['challenge_type']>, "challenge_type", ParentType, ContextType, RequireFields<Subscription_RootChallenge_TypeArgs, never>>;
  challenge_type_aggregate?: SubscriptionResolver<ResolversTypes['challenge_type_aggregate'], "challenge_type_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChallenge_Type_AggregateArgs, never>>;
  challenge_type_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['challenge_type']>, "challenge_type_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChallenge_Type_By_PkArgs, 'name'>>;
  comment?: SubscriptionResolver<Maybe<ResolversTypes['comments']>, "comment", ParentType, ContextType, RequireFields<Subscription_RootCommentArgs, 'comment_id'>>;
  comments?: SubscriptionResolver<Array<ResolversTypes['comments']>, "comments", ParentType, ContextType, RequireFields<Subscription_RootCommentsArgs, never>>;
  comments_aggregate?: SubscriptionResolver<ResolversTypes['comments_aggregate'], "comments_aggregate", ParentType, ContextType, RequireFields<Subscription_RootComments_AggregateArgs, never>>;
  feed?: SubscriptionResolver<Array<ResolversTypes['feed']>, "feed", ParentType, ContextType, RequireFields<Subscription_RootFeedArgs, never>>;
  feed_aggregate?: SubscriptionResolver<ResolversTypes['feed_aggregate'], "feed_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFeed_AggregateArgs, never>>;
  feed_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['feed']>, "feed_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFeed_By_PkArgs, 'id'>>;
  feed_type?: SubscriptionResolver<Array<ResolversTypes['feed_type']>, "feed_type", ParentType, ContextType, RequireFields<Subscription_RootFeed_TypeArgs, never>>;
  feed_type_aggregate?: SubscriptionResolver<ResolversTypes['feed_type_aggregate'], "feed_type_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFeed_Type_AggregateArgs, never>>;
  feed_type_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['feed_type']>, "feed_type_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFeed_Type_By_PkArgs, 'name'>>;
  followings?: SubscriptionResolver<Array<ResolversTypes['followings']>, "followings", ParentType, ContextType, RequireFields<Subscription_RootFollowingsArgs, never>>;
  followings_aggregate?: SubscriptionResolver<ResolversTypes['followings_aggregate'], "followings_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFollowings_AggregateArgs, never>>;
  followings_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['followings']>, "followings_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFollowings_By_PkArgs, 'following_id' | 'user_id'>>;
  friends_tracking?: SubscriptionResolver<Array<ResolversTypes['friends_tracking']>, "friends_tracking", ParentType, ContextType, RequireFields<Subscription_RootFriends_TrackingArgs, never>>;
  friends_tracking_aggregate?: SubscriptionResolver<ResolversTypes['friends_tracking_aggregate'], "friends_tracking_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFriends_Tracking_AggregateArgs, never>>;
  friends_tracking_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['friends_tracking']>, "friends_tracking_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFriends_Tracking_By_PkArgs, 'id'>>;
  geofence_variants?: SubscriptionResolver<Array<ResolversTypes['geofence_variants']>, "geofence_variants", ParentType, ContextType, RequireFields<Subscription_RootGeofence_VariantsArgs, never>>;
  geofence_variants_aggregate?: SubscriptionResolver<ResolversTypes['geofence_variants_aggregate'], "geofence_variants_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGeofence_Variants_AggregateArgs, never>>;
  geofence_variants_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['geofence_variants']>, "geofence_variants_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGeofence_Variants_By_PkArgs, 'name'>>;
  geofences?: SubscriptionResolver<Array<ResolversTypes['geofences']>, "geofences", ParentType, ContextType, RequireFields<Subscription_RootGeofencesArgs, never>>;
  geofences_aggregate?: SubscriptionResolver<ResolversTypes['geofences_aggregate'], "geofences_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGeofences_AggregateArgs, never>>;
  geofences_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['geofences']>, "geofences_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGeofences_By_PkArgs, 'id'>>;
  likes?: SubscriptionResolver<Array<ResolversTypes['likes']>, "likes", ParentType, ContextType, RequireFields<Subscription_RootLikesArgs, never>>;
  likes_aggregate?: SubscriptionResolver<ResolversTypes['likes_aggregate'], "likes_aggregate", ParentType, ContextType, RequireFields<Subscription_RootLikes_AggregateArgs, never>>;
  likes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['likes']>, "likes_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLikes_By_PkArgs, 'activity_id' | 'user_id'>>;
  unachievedachievements?: SubscriptionResolver<Array<ResolversTypes['achievement']>, "unachievedachievements", ParentType, ContextType, RequireFields<Subscription_RootUnachievedachievementsArgs, 'args'>>;
  unachievedachievements_aggregate?: SubscriptionResolver<ResolversTypes['achievement_aggregate'], "unachievedachievements_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUnachievedachievements_AggregateArgs, 'args'>>;
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
  achievement?: Resolver<ResolversTypes['achievement'], ParentType, ContextType>;
  achievement_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
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
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Achievement_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_achievement_min_fields'] = ResolversParentTypes['user_achievement_min_fields']> = {
  achievement_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
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
  challenge_participants?: Resolver<Array<ResolversTypes['challenge_participant']>, ParentType, ContextType, RequireFields<UsersChallenge_ParticipantsArgs, never>>;
  challenge_participants_aggregate?: Resolver<ResolversTypes['challenge_participant_aggregate'], ParentType, ContextType, RequireFields<UsersChallenge_Participants_AggregateArgs, never>>;
  challenges_won?: Resolver<Array<ResolversTypes['challenge']>, ParentType, ContextType, RequireFields<UsersChallenges_WonArgs, never>>;
  challenges_won_aggregate?: Resolver<ResolversTypes['challenge_aggregate'], ParentType, ContextType, RequireFields<UsersChallenges_Won_AggregateArgs, never>>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<UsersFollowersArgs, never>>;
  followers_aggregate?: Resolver<ResolversTypes['followings_aggregate'], ParentType, ContextType, RequireFields<UsersFollowers_AggregateArgs, never>>;
  following?: Resolver<Array<ResolversTypes['followings']>, ParentType, ContextType, RequireFields<UsersFollowingArgs, never>>;
  following_aggregate?: Resolver<ResolversTypes['followings_aggregate'], ParentType, ContextType, RequireFields<UsersFollowing_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalScore?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
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
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  achievement_type?: Achievement_TypeResolvers<ContextType>;
  achievement_type_aggregate?: Achievement_Type_AggregateResolvers<ContextType>;
  achievement_type_aggregate_fields?: Achievement_Type_Aggregate_FieldsResolvers<ContextType>;
  achievement_type_max_fields?: Achievement_Type_Max_FieldsResolvers<ContextType>;
  achievement_type_min_fields?: Achievement_Type_Min_FieldsResolvers<ContextType>;
  achievement_type_mutation_response?: Achievement_Type_Mutation_ResponseResolvers<ContextType>;
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
  bigint?: GraphQLScalarType;
  categories?: CategoriesResolvers<ContextType>;
  categories_aggregate?: Categories_AggregateResolvers<ContextType>;
  categories_aggregate_fields?: Categories_Aggregate_FieldsResolvers<ContextType>;
  categories_avg_fields?: Categories_Avg_FieldsResolvers<ContextType>;
  categories_max_fields?: Categories_Max_FieldsResolvers<ContextType>;
  categories_min_fields?: Categories_Min_FieldsResolvers<ContextType>;
  categories_mutation_response?: Categories_Mutation_ResponseResolvers<ContextType>;
  categories_stddev_fields?: Categories_Stddev_FieldsResolvers<ContextType>;
  categories_stddev_pop_fields?: Categories_Stddev_Pop_FieldsResolvers<ContextType>;
  categories_stddev_samp_fields?: Categories_Stddev_Samp_FieldsResolvers<ContextType>;
  categories_sum_fields?: Categories_Sum_FieldsResolvers<ContextType>;
  categories_var_pop_fields?: Categories_Var_Pop_FieldsResolvers<ContextType>;
  categories_var_samp_fields?: Categories_Var_Samp_FieldsResolvers<ContextType>;
  categories_variance_fields?: Categories_Variance_FieldsResolvers<ContextType>;
  challenge?: ChallengeResolvers<ContextType>;
  challenge_aggregate?: Challenge_AggregateResolvers<ContextType>;
  challenge_aggregate_fields?: Challenge_Aggregate_FieldsResolvers<ContextType>;
  challenge_avg_fields?: Challenge_Avg_FieldsResolvers<ContextType>;
  challenge_max_fields?: Challenge_Max_FieldsResolvers<ContextType>;
  challenge_min_fields?: Challenge_Min_FieldsResolvers<ContextType>;
  challenge_mutation_response?: Challenge_Mutation_ResponseResolvers<ContextType>;
  challenge_participant?: Challenge_ParticipantResolvers<ContextType>;
  challenge_participant_aggregate?: Challenge_Participant_AggregateResolvers<ContextType>;
  challenge_participant_aggregate_fields?: Challenge_Participant_Aggregate_FieldsResolvers<ContextType>;
  challenge_participant_avg_fields?: Challenge_Participant_Avg_FieldsResolvers<ContextType>;
  challenge_participant_max_fields?: Challenge_Participant_Max_FieldsResolvers<ContextType>;
  challenge_participant_min_fields?: Challenge_Participant_Min_FieldsResolvers<ContextType>;
  challenge_participant_mutation_response?: Challenge_Participant_Mutation_ResponseResolvers<ContextType>;
  challenge_participant_state?: Challenge_Participant_StateResolvers<ContextType>;
  challenge_participant_state_aggregate?: Challenge_Participant_State_AggregateResolvers<ContextType>;
  challenge_participant_state_aggregate_fields?: Challenge_Participant_State_Aggregate_FieldsResolvers<ContextType>;
  challenge_participant_state_max_fields?: Challenge_Participant_State_Max_FieldsResolvers<ContextType>;
  challenge_participant_state_min_fields?: Challenge_Participant_State_Min_FieldsResolvers<ContextType>;
  challenge_participant_state_mutation_response?: Challenge_Participant_State_Mutation_ResponseResolvers<ContextType>;
  challenge_participant_stddev_fields?: Challenge_Participant_Stddev_FieldsResolvers<ContextType>;
  challenge_participant_stddev_pop_fields?: Challenge_Participant_Stddev_Pop_FieldsResolvers<ContextType>;
  challenge_participant_stddev_samp_fields?: Challenge_Participant_Stddev_Samp_FieldsResolvers<ContextType>;
  challenge_participant_sum_fields?: Challenge_Participant_Sum_FieldsResolvers<ContextType>;
  challenge_participant_var_pop_fields?: Challenge_Participant_Var_Pop_FieldsResolvers<ContextType>;
  challenge_participant_var_samp_fields?: Challenge_Participant_Var_Samp_FieldsResolvers<ContextType>;
  challenge_participant_variance_fields?: Challenge_Participant_Variance_FieldsResolvers<ContextType>;
  challenge_state?: Challenge_StateResolvers<ContextType>;
  challenge_state_aggregate?: Challenge_State_AggregateResolvers<ContextType>;
  challenge_state_aggregate_fields?: Challenge_State_Aggregate_FieldsResolvers<ContextType>;
  challenge_state_max_fields?: Challenge_State_Max_FieldsResolvers<ContextType>;
  challenge_state_min_fields?: Challenge_State_Min_FieldsResolvers<ContextType>;
  challenge_state_mutation_response?: Challenge_State_Mutation_ResponseResolvers<ContextType>;
  challenge_stddev_fields?: Challenge_Stddev_FieldsResolvers<ContextType>;
  challenge_stddev_pop_fields?: Challenge_Stddev_Pop_FieldsResolvers<ContextType>;
  challenge_stddev_samp_fields?: Challenge_Stddev_Samp_FieldsResolvers<ContextType>;
  challenge_sum_fields?: Challenge_Sum_FieldsResolvers<ContextType>;
  challenge_type?: Challenge_TypeResolvers<ContextType>;
  challenge_type_aggregate?: Challenge_Type_AggregateResolvers<ContextType>;
  challenge_type_aggregate_fields?: Challenge_Type_Aggregate_FieldsResolvers<ContextType>;
  challenge_type_max_fields?: Challenge_Type_Max_FieldsResolvers<ContextType>;
  challenge_type_min_fields?: Challenge_Type_Min_FieldsResolvers<ContextType>;
  challenge_type_mutation_response?: Challenge_Type_Mutation_ResponseResolvers<ContextType>;
  challenge_var_pop_fields?: Challenge_Var_Pop_FieldsResolvers<ContextType>;
  challenge_var_samp_fields?: Challenge_Var_Samp_FieldsResolvers<ContextType>;
  challenge_variance_fields?: Challenge_Variance_FieldsResolvers<ContextType>;
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
  date?: GraphQLScalarType;
  feed?: FeedResolvers<ContextType>;
  feed_aggregate?: Feed_AggregateResolvers<ContextType>;
  feed_aggregate_fields?: Feed_Aggregate_FieldsResolvers<ContextType>;
  feed_avg_fields?: Feed_Avg_FieldsResolvers<ContextType>;
  feed_max_fields?: Feed_Max_FieldsResolvers<ContextType>;
  feed_min_fields?: Feed_Min_FieldsResolvers<ContextType>;
  feed_mutation_response?: Feed_Mutation_ResponseResolvers<ContextType>;
  feed_stddev_fields?: Feed_Stddev_FieldsResolvers<ContextType>;
  feed_stddev_pop_fields?: Feed_Stddev_Pop_FieldsResolvers<ContextType>;
  feed_stddev_samp_fields?: Feed_Stddev_Samp_FieldsResolvers<ContextType>;
  feed_sum_fields?: Feed_Sum_FieldsResolvers<ContextType>;
  feed_type?: Feed_TypeResolvers<ContextType>;
  feed_type_aggregate?: Feed_Type_AggregateResolvers<ContextType>;
  feed_type_aggregate_fields?: Feed_Type_Aggregate_FieldsResolvers<ContextType>;
  feed_type_max_fields?: Feed_Type_Max_FieldsResolvers<ContextType>;
  feed_type_min_fields?: Feed_Type_Min_FieldsResolvers<ContextType>;
  feed_type_mutation_response?: Feed_Type_Mutation_ResponseResolvers<ContextType>;
  feed_var_pop_fields?: Feed_Var_Pop_FieldsResolvers<ContextType>;
  feed_var_samp_fields?: Feed_Var_Samp_FieldsResolvers<ContextType>;
  feed_variance_fields?: Feed_Variance_FieldsResolvers<ContextType>;
  float8?: GraphQLScalarType;
  followings?: FollowingsResolvers<ContextType>;
  followings_aggregate?: Followings_AggregateResolvers<ContextType>;
  followings_aggregate_fields?: Followings_Aggregate_FieldsResolvers<ContextType>;
  followings_max_fields?: Followings_Max_FieldsResolvers<ContextType>;
  followings_min_fields?: Followings_Min_FieldsResolvers<ContextType>;
  followings_mutation_response?: Followings_Mutation_ResponseResolvers<ContextType>;
  friends_tracking?: Friends_TrackingResolvers<ContextType>;
  friends_tracking_aggregate?: Friends_Tracking_AggregateResolvers<ContextType>;
  friends_tracking_aggregate_fields?: Friends_Tracking_Aggregate_FieldsResolvers<ContextType>;
  friends_tracking_avg_fields?: Friends_Tracking_Avg_FieldsResolvers<ContextType>;
  friends_tracking_max_fields?: Friends_Tracking_Max_FieldsResolvers<ContextType>;
  friends_tracking_min_fields?: Friends_Tracking_Min_FieldsResolvers<ContextType>;
  friends_tracking_mutation_response?: Friends_Tracking_Mutation_ResponseResolvers<ContextType>;
  friends_tracking_stddev_fields?: Friends_Tracking_Stddev_FieldsResolvers<ContextType>;
  friends_tracking_stddev_pop_fields?: Friends_Tracking_Stddev_Pop_FieldsResolvers<ContextType>;
  friends_tracking_stddev_samp_fields?: Friends_Tracking_Stddev_Samp_FieldsResolvers<ContextType>;
  friends_tracking_sum_fields?: Friends_Tracking_Sum_FieldsResolvers<ContextType>;
  friends_tracking_var_pop_fields?: Friends_Tracking_Var_Pop_FieldsResolvers<ContextType>;
  friends_tracking_var_samp_fields?: Friends_Tracking_Var_Samp_FieldsResolvers<ContextType>;
  friends_tracking_variance_fields?: Friends_Tracking_Variance_FieldsResolvers<ContextType>;
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
  interval?: GraphQLScalarType;
  json?: GraphQLScalarType;
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

export const ChallengeFragment = gql`
    fragment challengeFragment on challenge {
  id
  challenge_type
  created_at
  start_date
  end_date
  state
  rules
  created_by_user {
    id
    name
    picture
  }
}
    `;
export const ParticipantFragment = gql`
    fragment participantFragment on challenge_participant {
  state
  progress
  challenge {
    ...challengeFragment
  }
}
    ${ChallengeFragment}`;
export const BasicParticipantFragment = gql`
    fragment basicParticipantFragment on challenge_participant {
  user_id
  state
  progress
}
    `;
export const BasicActivityFragment = gql`
    fragment basicActivityFragment on activities {
  activity_id
  duration
  score
  started_at
  geofence {
    category
  }
}
    `;
export const ParticipantActivityFragment = gql`
    fragment participantActivityFragment on challenge_participant {
  ...basicParticipantFragment
  user {
    activities {
      ...basicActivityFragment
    }
  }
}
    ${BasicParticipantFragment}
${BasicActivityFragment}`;
export const CreateUser = gql`
    mutation CreateUser($id: String!, $email: String, $name: String, $picture: String) {
  insert_users(
    objects: [{id: $id, email: $email, name: $name, picture: $picture}]
  ) {
    affected_rows
  }
}
    `;
export const DeleteAchievement = gql`
    mutation DeleteAchievement($achievement_id: Int!, $user_id: String!) {
  delete_user_achievement_by_pk(
    achievement_id: $achievement_id
    user_id: $user_id
  ) {
    achievement_id
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
export const GetUserAndExistingAchievements = gql`
    query GetUserAndExistingAchievements($user_id: String!) {
  user(id: $user_id) {
    id
    totalScore
    activity_count: activities_aggregate {
      aggregate {
        count(columns: activity_id)
      }
    }
    education_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EDUCATION"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    culture_score: activities_aggregate(
      where: {geofence: {category: {_eq: "CULTURE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    social_score: activities_aggregate(
      where: {geofence: {category: {_eq: "SOCIAL"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    exercise_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EXERCISE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    user_achievement {
      achievement {
        id
        name
        description
        achievement_type
        rule
        created_at
      }
    }
  }
}
    `;
export const ExpireChallenges = gql`
    mutation ExpireChallenges($date: date!) {
  update_challenge(
    where: {end_date: {_lt: $date}, state: {_eq: ACTIVE}}
    _set: {state: CLOSED}
  ) {
    affected_rows
  }
}
    `;
export const GetActivitiesAndChallenges = gql`
    query GetActivitiesAndChallenges($id: String) {
  activities(where: {user_id: {_eq: $id}}) {
    ...basicActivityFragment
  }
  challenge_participant(where: {user_id: {_eq: $id}, state: {_neq: DECLINED}}) {
    ...participantFragment
  }
}
    ${BasicActivityFragment}
${ParticipantFragment}`;
export const GetChallengeParticipantsAndActivities = gql`
    query GetChallengeParticipantsAndActivities($challenge_id: Int!) {
  challenge_by_pk(id: $challenge_id) {
    ...challengeFragment
    challenge_participants {
      ...participantActivityFragment
    }
  }
}
    ${ChallengeFragment}
${ParticipantActivityFragment}`;
export const GetChallengesParticipants = gql`
    query GetChallengesParticipants($challenge_id: Int!) {
  challenge_by_pk(id: $challenge_id) {
    ...challengeFragment
    challenge_participants {
      ...basicParticipantFragment
    }
  }
}
    ${ChallengeFragment}
${BasicParticipantFragment}`;
export const InsertAchievements = gql`
    mutation InsertAchievements($feed_achievements: [feed_insert_input!]!) {
  insert_feed(objects: $feed_achievements) {
    affected_rows
  }
}
    `;
export const GetUserAndUnachievedAchievements = gql`
    query GetUserAndUnachievedAchievements($user_id: String!) {
  unachievedachievements(args: {uid: $user_id}) {
    id
    name
    description
    created_at
    achievement_type
    rule
  }
  user(id: $user_id) {
    id
    totalScore
    activity_count: activities_aggregate {
      aggregate {
        count(columns: activity_id)
      }
    }
    education_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EDUCATION"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    culture_score: activities_aggregate(
      where: {geofence: {category: {_eq: "CULTURE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    social_score: activities_aggregate(
      where: {geofence: {category: {_eq: "SOCIAL"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
    exercise_score: activities_aggregate(
      where: {geofence: {category: {_eq: "EXERCISE"}}}
    ) {
      aggregate {
        sum {
          score
        }
      }
    }
  }
}
    `;
export const UpdateChallengeWinner = gql`
    mutation UpdateChallengeWinner($challenge_id: Int!, $winner_id: String!) {
  update_challenge_by_pk(
    pk_columns: {id: $challenge_id}
    _set: {winner_id: $winner_id, state: FINISHED}
  ) {
    state
  }
  insert_feed_one(
    object: {feed_type: CHALLENGE, challenge_id: $challenge_id, user_id: $winner_id}
    on_conflict: {constraint: feed_challenge_id_user_id_key, update_columns: user_id}
  ) {
    challenge_id
    user_id
  }
}
    `;
export const UpdateChallengeParticipationProgress = gql`
    mutation UpdateChallengeParticipationProgress($challenge_id: Int!, $user_id: String!, $progress: float8!) {
  update_challenge_participant(
    where: {challenge_id: {_eq: $challenge_id}, user_id: {_eq: $user_id}}
    _set: {progress: $progress}
  ) {
    affected_rows
  }
}
    `;
export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteAchievementMutationVariables = Exact<{
  achievement_id: Scalars['Int'];
  user_id: Scalars['String'];
}>;


export type DeleteAchievementMutation = (
  { __typename?: 'mutation_root' }
  & { delete_user_achievement_by_pk?: Maybe<(
    { __typename?: 'user_achievement' }
    & Pick<User_Achievement, 'achievement_id'>
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

export type GetUserAndExistingAchievementsQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserAndExistingAchievementsQuery = (
  { __typename?: 'query_root' }
  & { user?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'totalScore'>
    & { activity_count: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & Pick<Activities_Aggregate_Fields, 'count'>
      )> }
    ), education_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ), culture_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ), social_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ), exercise_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ), user_achievement: Array<(
      { __typename?: 'user_achievement' }
      & { achievement: (
        { __typename?: 'achievement' }
        & Pick<Achievement, 'id' | 'name' | 'description' | 'achievement_type' | 'rule' | 'created_at'>
      ) }
    )> }
  )> }
);

export type ExpireChallengesMutationVariables = Exact<{
  date: Scalars['date'];
}>;


export type ExpireChallengesMutation = (
  { __typename?: 'mutation_root' }
  & { update_challenge?: Maybe<(
    { __typename?: 'challenge_mutation_response' }
    & Pick<Challenge_Mutation_Response, 'affected_rows'>
  )> }
);

export type BasicActivityFragmentFragment = (
  { __typename?: 'activities' }
  & Pick<Activities, 'activity_id' | 'duration' | 'score' | 'started_at'>
  & { geofence: (
    { __typename?: 'geofences' }
    & Pick<Geofences, 'category'>
  ) }
);

export type ChallengeFragmentFragment = (
  { __typename?: 'challenge' }
  & Pick<Challenge, 'id' | 'challenge_type' | 'created_at' | 'start_date' | 'end_date' | 'state' | 'rules'>
  & { created_by_user: (
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'picture'>
  ) }
);

export type ParticipantFragmentFragment = (
  { __typename?: 'challenge_participant' }
  & Pick<Challenge_Participant, 'state' | 'progress'>
  & { challenge: (
    { __typename?: 'challenge' }
    & ChallengeFragmentFragment
  ) }
);

export type BasicParticipantFragmentFragment = (
  { __typename?: 'challenge_participant' }
  & Pick<Challenge_Participant, 'user_id' | 'state' | 'progress'>
);

export type ParticipantActivityFragmentFragment = (
  { __typename?: 'challenge_participant' }
  & { user: (
    { __typename?: 'users' }
    & { activities: Array<(
      { __typename?: 'activities' }
      & BasicActivityFragmentFragment
    )> }
  ) }
  & BasicParticipantFragmentFragment
);

export type GetActivitiesAndChallengesQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type GetActivitiesAndChallengesQuery = (
  { __typename?: 'query_root' }
  & { activities: Array<(
    { __typename?: 'activities' }
    & BasicActivityFragmentFragment
  )>, challenge_participant: Array<(
    { __typename?: 'challenge_participant' }
    & ParticipantFragmentFragment
  )> }
);

export type GetChallengeParticipantsAndActivitiesQueryVariables = Exact<{
  challenge_id: Scalars['Int'];
}>;


export type GetChallengeParticipantsAndActivitiesQuery = (
  { __typename?: 'query_root' }
  & { challenge_by_pk?: Maybe<(
    { __typename?: 'challenge' }
    & { challenge_participants: Array<(
      { __typename?: 'challenge_participant' }
      & ParticipantActivityFragmentFragment
    )> }
    & ChallengeFragmentFragment
  )> }
);

export type GetChallengesParticipantsQueryVariables = Exact<{
  challenge_id: Scalars['Int'];
}>;


export type GetChallengesParticipantsQuery = (
  { __typename?: 'query_root' }
  & { challenge_by_pk?: Maybe<(
    { __typename?: 'challenge' }
    & { challenge_participants: Array<(
      { __typename?: 'challenge_participant' }
      & BasicParticipantFragmentFragment
    )> }
    & ChallengeFragmentFragment
  )> }
);

export type InsertAchievementsMutationVariables = Exact<{
  feed_achievements: Array<Feed_Insert_Input> | Feed_Insert_Input;
}>;


export type InsertAchievementsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_feed?: Maybe<(
    { __typename?: 'feed_mutation_response' }
    & Pick<Feed_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetUserAndUnachievedAchievementsQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserAndUnachievedAchievementsQuery = (
  { __typename?: 'query_root' }
  & { unachievedachievements: Array<(
    { __typename?: 'achievement' }
    & Pick<Achievement, 'id' | 'name' | 'description' | 'created_at' | 'achievement_type' | 'rule'>
  )>, user?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'totalScore'>
    & { activity_count: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & Pick<Activities_Aggregate_Fields, 'count'>
      )> }
    ), education_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ), culture_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ), social_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ), exercise_score: (
      { __typename?: 'activities_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'activities_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'activities_sum_fields' }
          & Pick<Activities_Sum_Fields, 'score'>
        )> }
      )> }
    ) }
  )> }
);

export type UpdateChallengeWinnerMutationVariables = Exact<{
  challenge_id: Scalars['Int'];
  winner_id: Scalars['String'];
}>;


export type UpdateChallengeWinnerMutation = (
  { __typename?: 'mutation_root' }
  & { update_challenge_by_pk?: Maybe<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'state'>
  )>, insert_feed_one?: Maybe<(
    { __typename?: 'feed' }
    & Pick<Feed, 'challenge_id' | 'user_id'>
  )> }
);

export type UpdateChallengeParticipationProgressMutationVariables = Exact<{
  challenge_id: Scalars['Int'];
  user_id: Scalars['String'];
  progress: Scalars['float8'];
}>;


export type UpdateChallengeParticipationProgressMutation = (
  { __typename?: 'mutation_root' }
  & { update_challenge_participant?: Maybe<(
    { __typename?: 'challenge_participant_mutation_response' }
    & Pick<Challenge_Participant_Mutation_Response, 'affected_rows'>
  )> }
);
