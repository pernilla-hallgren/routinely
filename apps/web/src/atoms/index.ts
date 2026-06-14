import { atomWithStorage } from "jotai/utils";

export type RoutineStep = {
  id: string;
  emoji: string;
  title: string;
  message: string;
  points: number;
};

export type ChildProfile = {
  name: string;
  avatar: string;
};

export type RewardGoal = {
  points: number;
  reward: string;
  enabled: boolean;
};

export type WeeklyStats = {
  weekStart: string;
  totalPoints: number;
  completedDays: number;
};

// Persisted atoms — survive page refresh
export const profileAtom = atomWithStorage<ChildProfile>("routinely:profile", {
  name: "",
  avatar: "🦊",
});

export const stepsAtom = atomWithStorage<RoutineStep[]>("routinely:steps", []);

export const rewardGoalAtom = atomWithStorage<RewardGoal>("routinely:reward", {
  points: 250,
  reward: "Friday treat",
  enabled: true,
});

export const stepMinutesAtom = atomWithStorage<number>(
  "routinely:stepMinutes",
  5,
);

export const weeklyStatsAtom = atomWithStorage<WeeklyStats>("routinely:stats", {
  weekStart: new Date().toISOString(),
  totalPoints: 0,
  completedDays: 0,
});

export const languageAtom = atomWithStorage<"en" | "sv">(
  "routinely:lang",
  "en",
);
