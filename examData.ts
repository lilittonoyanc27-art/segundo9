import {
  QuestionItem,
  SectionTheory,
  SECTIONS_THEORY_PART1,
  QUESTIONS_PART1,
} from './examTopics.ts';
import {
  SECTIONS_THEORY_PART2,
  QUESTIONS_PART2,
  CHEATSHEET_DATA,
  EXAM_READING_TEXT,
} from './examTopics2.ts';

export type { QuestionItem, SectionTheory };

export const ALL_QUESTIONS: QuestionItem[] = [
  ...QUESTIONS_PART1,
  ...QUESTIONS_PART2,
];

export const ALL_THEORY_SECTIONS: SectionTheory[] = [
  ...SECTIONS_THEORY_PART1,
  ...SECTIONS_THEORY_PART2,
];

export { CHEATSHEET_DATA, EXAM_READING_TEXT };

export interface SectionMeta {
  id: number;
  numberLabel: string;
  titleEs: string;
  titleHy: string;
  questionCount: number;
  questionIds: number[];
}

export const SECTIONS_META: SectionMeta[] = [
  {
    id: 1,
    numberLabel: "1",
    titleEs: "Funciones del lenguaje",
    titleHy: "Լեզվի գործառույթները",
    questionCount: 6,
    questionIds: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 2,
    numberLabel: "2",
    titleEs: "Modalidades oracionales",
    titleHy: "Նախադասությունների տեսակները",
    questionCount: 8,
    questionIds: [7, 8, 9, 10, 11, 12, 13, 14]
  },
  {
    id: 3,
    numberLabel: "3",
    titleEs: "Elementos de la comunicación",
    titleHy: "Հաղորդակցության տարրերը",
    questionCount: 10,
    questionIds: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  },
  {
    id: 4,
    numberLabel: "4",
    titleEs: "Categorías gramaticales",
    titleHy: "Քերականական խմբեր",
    questionCount: 7,
    questionIds: [25, 26, 27, 28, 29, 30, 31]
  },
  {
    id: 5,
    numberLabel: "5",
    titleEs: "Sustantivos",
    titleHy: "Գոյականներ",
    questionCount: 6,
    questionIds: [32, 33, 34, 35, 36, 37]
  },
  {
    id: 6,
    numberLabel: "6",
    titleEs: "Adjetivos",
    titleHy: "Ածականներ",
    questionCount: 4,
    questionIds: [38, 39, 40, 41]
  },
  {
    id: 7,
    numberLabel: "7",
    titleEs: "Verbos",
    titleHy: "Բայեր",
    questionCount: 4,
    questionIds: [42, 43, 44, 45]
  },
  {
    id: 8,
    numberLabel: "8",
    titleEs: "Adverbios",
    titleHy: "Մակբայներ",
    questionCount: 5,
    questionIds: [46, 47, 48, 49, 50]
  },
  {
    id: 9,
    numberLabel: "9",
    titleEs: "Determinantes y Pronombres",
    titleHy: "Որոշիչներ և դերանուններ",
    questionCount: 5,
    questionIds: [51, 52, 53, 54, 55]
  },
  {
    id: 10,
    numberLabel: "10",
    titleEs: "Nexos",
    titleHy: "Կապակցիչներ",
    questionCount: 5,
    questionIds: [56, 57, 58, 59, 60]
  },
  {
    id: 11,
    numberLabel: "11",
    titleEs: "Tipos de texto",
    titleHy: "Տեքստի տեսակները",
    questionCount: 6,
    questionIds: [61, 62, 63, 64, 65, 66]
  },
  {
    id: 12,
    numberLabel: "12",
    titleEs: "Propiedades del texto",
    titleHy: "Տեքստի հատկությունները",
    questionCount: 3,
    questionIds: [67, 68, 69]
  },
  {
    id: 13,
    numberLabel: "13",
    titleEs: "La lengua como sistema",
    titleHy: "Լեզուն որպես համակարգ",
    questionCount: 6,
    questionIds: [70, 71, 72, 73, 74, 75]
  },
  {
    id: 14,
    numberLabel: "14",
    titleEs: "Sinónimos y Antónimos",
    titleHy: "Հոմանիշներ և հականիշներ",
    questionCount: 5,
    questionIds: [76, 77, 78, 79, 80]
  },
  {
    id: 15,
    numberLabel: "15",
    titleEs: "Polisemia",
    titleHy: "Բազմիմաստություն",
    questionCount: 2,
    questionIds: [81, 82]
  },
  {
    id: 16,
    numberLabel: "16",
    titleEs: "Campo semántico",
    titleHy: "Իմաստային դաշտ",
    questionCount: 2,
    questionIds: [83, 84]
  },
  {
    id: 17,
    numberLabel: "17",
    titleEs: "Familia léxica",
    titleHy: "Բառային ընտանիք",
    questionCount: 2,
    questionIds: [85, 86]
  },
  {
    id: 18,
    numberLabel: "18",
    titleEs: "Sentido literal y figurado",
    titleHy: "Ուղիղ և փոխաբերական իմաստ",
    questionCount: 4,
    questionIds: [87, 88, 89, 90]
  },
  {
    id: 19,
    numberLabel: "📝",
    titleEs: "Gran texto de examen",
    titleHy: "Մեծ քննական տեքստ",
    questionCount: 15,
    questionIds: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]
  },
  {
    id: 20,
    numberLabel: "🔥",
    titleEs: "Parte difícil — Como en examen",
    titleHy: "Բարդ մաս — Ինչպես քննությանը",
    questionCount: 5,
    questionIds: [106, 107, 108, 109, 110]
  }
];
