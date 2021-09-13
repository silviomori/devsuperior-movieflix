const tokenKey = 'authData';

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_int: number;
  scope: string;
  userFirstName: string;
  userId: number;
};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem(tokenKey, JSON.stringify(obj));
};

export const removeAuthData = () => {
  localStorage.removeItem(tokenKey);
};
