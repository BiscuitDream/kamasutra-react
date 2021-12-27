export type FieldValidatorType = (value: string) => string | undefined;

export const required: FieldValidatorType = (value) => {
  if (!value) {
    return 'Поле обязательно';
  }
  return undefined;
};

export const maxLength = (max: number): FieldValidatorType => (value) => {
  if (value && value.length > max) {
    return `Должно быть меньше ${max} символов`;
  }
};
