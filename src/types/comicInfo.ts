export type ComicInfo = {
  synopsis: string;
  chapters: Chapter[];
  creator: Creator;
};

export type Chapter = {
  id: number;
  title: string;
  description: string;
  numberOfPages: number;
};

export type Creator = {
  bio: string;
  portraitUrl: string;
};
