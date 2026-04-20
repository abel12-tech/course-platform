export interface AuthState {
  name: string;
  role: string;
  isLoggedIn: boolean;

  setName: (name: string) => void;
  setRole: (role: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}
