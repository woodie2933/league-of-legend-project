export type Item = {
  name: string;
  description: string;
  image: {
    full: string;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
};
