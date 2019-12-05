import { v4 } from 'uuid';
import { redis } from '../../redis';

export const createConfirmationUrl = async (userId: number) => {
  const token = v4();
  await redis.set(token, userId, 'ex', 60 * 60 * 24); // 1 day expiration

  return `http://localhost:3000/user/confirm/${token}`;
};

// Ex: https://www.youtube.com/watch?v=OP39UioapL8&list=PLN3n1USn4xlma1bBu3Tloe4NyYn9Ko8Gs&index=6
