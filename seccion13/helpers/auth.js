import { hash,compare } from 'bcryptjs';


export const hashedPassword = async (password) => {
  return await hash(password, 12);
}

export const comparePassword = async (password, hashedPassword) => {
  return await compare(password, hashedPassword);
}