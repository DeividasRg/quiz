import { TAnswer, TQuestion } from "./types";
import { icons } from "./icons";

export const COOKIE_KEY = "quizInfo";

export const genericAnswers: TAnswer[] = [
  {
    id: "75b4b8e6-add6-4b47-82a5-ab5baa448f51",
    answer: "Yes",
    image: {
      default: icons.check.default,
      highlighted: icons.check.highlighted,
    },
  },
  {
    id: "295b8101-a5ca-4333-97de-5cd63cba35c4",
    answer: "I'm not sure",
    image: {
      default: icons.question.default,
      highlighted: icons.question.highlighted,
    },
  },
  {
    id: "61e72823-91f1-44ea-8f7a-cba2db23f6dd",
    answer: "No",
    image: {
      default: icons.stop.default,
      highlighted: icons.stop.highlighted,
    },
  },
];

export const questions: TQuestion[] = [
  {
    id: "1",
    question: "What is your main reason for wanting to quite drinking?",
    answers: [
      {
        id: "1.1",
        answer: "Health",
        image: {
          default: icons.heart.default,
          highlighted: icons.heart.highlighted,
        },
      },
      {
        id: "1.2",
        answer: "Relationships",
        image: {
          default: icons.handshake.default,
          highlighted: icons.handshake.highlighted,
        },
      },
      {
        id: "1.3",
        answer: "Control",
        image: {
          default: icons.gear.default,
          highlighted: icons.gear.highlighted,
        },
      },
      {
        id: "1.4",
        answer: "Money",
        image: {
          default: icons.money.default,
          highlighted: icons.money.highlighted,
        },
      },
      {
        id: "1.5",
        answer: "Performance",
        image: {
          default: icons.meter.default,
          highlighted: icons.meter.highlighted,
        },
      },
      {
        id: "1.6",
        answer: "Role model",
        image: {
          default: icons.superman.default,
          highlighted: icons.superman.highlighted,
        },
      },
    ],
  },
  {
    id: "2",
    question: "What do you think is the main reason you drink?",
    answers: [
      {
        id: "2.1",
        answer: "Stress or anxiety",
        image: {
          default: icons.thunder.default,
          highlighted: icons.thunder.highlighted,
        },
      },
      {
        id: "2.2",
        answer: "Socializing",
        image: {
          default: icons.chat.default,
          highlighted: icons.chat.highlighted,
        },
      },
      {
        id: "2.3",
        answer: "Relaxation",
        image: {
          default: icons.flower.default,
          highlighted: icons.flower.highlighted,
        },
      },
      {
        id: "2.4",
        answer: "Emotional escape",
        image: {
          default: icons.emoji.default,
          highlighted: icons.emoji.highlighted,
        },
      },
      {
        id: "2.5",
        answer: "Habit",
        image: {
          default: icons.tasker.default,
          highlighted: icons.tasker.highlighted,
        },
      },
      {
        id: "2.6",
        answer: "Confidence boost",
        image: {
          default: icons.rocket.default,
          highlighted: icons.rocket.highlighted,
        },
      },
    ],
  },
  {
    id: "3",
    question: 'Do you ever drink to feel "normal" or fit in with others?',
    answers: genericAnswers,
  },
  {
    id: "4",
    question:
      "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
    answers: genericAnswers,
  },
  {
    id: "5",
    question:
      "Do you often find yourself wanting to escape from your daily responsibilities or pressures?",
    answers: genericAnswers,
  },
  {
    id: "6",
    question:
      "Do you often seek ways to relax or unwind after a long stressful day?",
    answers: genericAnswers,
  },
];
