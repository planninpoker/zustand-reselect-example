export type BearStatus = 'sleeping' | 'eating' | 'fishing' | 'hunting';

export type Bear = {
  id: string;
  name: string;
  status: BearStatus;
};

export type BearState = {
  bears: Record<string, Bear>;
  getBears: () => Bear[];
  getBear: (id: string) => Bear | undefined;
  addBear: (bear: Bear) => void;
};
