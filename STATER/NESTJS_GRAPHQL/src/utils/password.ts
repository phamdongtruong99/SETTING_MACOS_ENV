import { hash, compare } from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, +process.env.SALT || 10);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await compare(password, hash);
};
