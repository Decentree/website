export interface ISolution {
  position?: string;
  length?: string;
  name: string;
  imgPath: string;
  steps?: Array<{label: string; icon: string}>;
  tags?: string[];
  longDesc: string;
  images?: {title: string; label: string; src: string, link: string}[]
}
