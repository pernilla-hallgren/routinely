import type { RoutineStep, ChildProfile, RewardGoal } from "../atoms";

export const avatarChoices = [
  "🦊",
  "🐻",
  "🐰",
  "🐼",
  "🦁",
  "🐸",
  "🐙",
  "🦄",
  "🐯",
  "🐨",
  "🐵",
  "🐧",
];

export const emojiChoices = [
  "🛏️",
  "🦷",
  "👕",
  "🥣",
  "🎒",
  "🚿",
  "🧦",
  "👟",
  "🧴",
  "🍎",
  "📚",
  "🪥",
  "🧼",
  "☀️",
  "💊",
  "🐶",
];

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const defaultProfile: ChildProfile = {
  name: "",
  avatar: "🦊",
};

export const defaultRewardGoal: RewardGoal = {
  points: 250,
  reward: "Friday treat",
  enabled: true,
};

export const defaultSteps: RoutineStep[] = [
  {
    id: "1",
    emoji: "🛏️",
    title: "Make your bed",
    message: "Great start! A tidy bed means a tidy day.",
    points: 10,
  },
  {
    id: "2",
    emoji: "🦷",
    title: "Brush your teeth",
    message: "Sparkly teeth! Keep that smile shining.",
    points: 10,
  },
  {
    id: "3",
    emoji: "👕",
    title: "Get dressed",
    message: "Looking awesome! You're ready to go.",
    points: 10,
  },
  {
    id: "4",
    emoji: "🥣",
    title: "Eat breakfast",
    message: "Yum! Fuel up for a super day.",
    points: 15,
  },
  {
    id: "5",
    emoji: "🎒",
    title: "Pack your bag",
    message: "All set! You remembered everything.",
    points: 15,
  },
];
