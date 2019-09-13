export class Candidate {
  id: number;
  name: string;
  description: string;
  avatar: string;

  summary: string;
  skills: Array<number>;
  experience: Array<Experience>;
  education: Array<Education>;

  questionanswer: Array<QuestionAnswer>;

  extroversion: number;
  agreeableness: number;
  openness: number;
  conscientiousness: number;
  neuroticism: number;
  videointerview: Array<VideoInterview>;
};

export interface Experience {
  role: string;
  company: string;
  datefrom: string;
  dateto: string;
  memo: string;
};

export interface Education {
  school: string;
  degree: string;
  yearfrom: number;
  yearto: number;
};

export interface QuestionAnswer {
  question: string;
  answer: string;
};

export interface VideoInterview {
  question: string;
  video: string;
};

export interface ScoreCard {
  leadership: number;
  culturefit: number;
  agility: number;
  naturalconfidence: number;
  xfactor: number;
  comment: string;
};
