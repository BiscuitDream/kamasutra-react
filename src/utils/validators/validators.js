export const required = (value) => {
  if (!value) {
    return 'Поле обязательно';
  }
  return undefined;
};

export const maxLength = (max) => (value) => {
  if (value && value.length > max) {
    return `Должно быть меньше ${max} символов`;
  }
};
