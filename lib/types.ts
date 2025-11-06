import { StaticImageData } from "next/image";

export type TAnswer = {
  id: string;
  answer: string;
  image: TImage;
};

export type TImage = {
  default: StaticImageData;
  highlighted: StaticImageData;
};

export type TQuestion = {
  id: string;
  question: string;
  answers: TAnswer[];
};
