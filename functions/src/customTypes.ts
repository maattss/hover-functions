export type Challenge_Participant = {
  user_id: string;
  challenge_id: number;
  progress: number;
};
enum GeoFenceCategory {
  EDUCATION = 'EDUCATION',
  EXERCISE = 'EXERCISE',
  SOCIAL = 'SOCIAL',
  CULTURE = 'CULTURE',
}
export type ChallengeRules = {
  category?: GeoFenceCategory;
  score?: number;
  time?: number;
};