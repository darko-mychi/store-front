export interface Bind {
  value: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export interface Value {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
  bind: Bind;
};
