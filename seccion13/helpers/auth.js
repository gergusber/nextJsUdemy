import { hash } from 'bcryptjs';


export const hashPassword = async (password) => {
  return await hash(password, 12);
}