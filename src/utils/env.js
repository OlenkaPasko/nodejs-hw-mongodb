import 'dotenv/config';

export const env = (name, defaultValue) => {
  const value = process.env[name]; //чи є така зміна в оточення?
  if (value) return value; //якщо є повертаємо value
  if (defaultValue) return defaultValue; //якщо немає повертаємо значення за замовчуванням
  throw new Error(`Missing: process.env['${name}'].`); //в іншому випадку викидаємо помилку
};
