import { cookies } from 'next/headers';
import { jwtVerify, JWTPayload } from 'jose';

const SECRET_KEY = process.env.JWT_SECRET;

interface AppJwtPayload extends JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('jwt-token');

  if (!token || !SECRET_KEY) return null;

  try {
    const secret = new TextEncoder().encode(SECRET_KEY);
    const { payload } = await jwtVerify(token.value, secret);
    return payload as unknown as AppJwtPayload;
  } catch (error) {
    return null;
  }
}