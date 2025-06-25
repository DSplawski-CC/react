import type { LoginDto } from './LoginView.tsx';


interface Token {
  access: string;
}



export async function signIn(loginDto: LoginDto) {
  const result = await fetch(`${import.meta.env.VITE_API_URL}/auth/login/`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginDto),
  });

  return result.json() as Token;
}

export async function refreshToken() {
  const result = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh/`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginDto),
  });

  return result.json() as Token;
}