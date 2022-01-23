import { dataAttr } from "@chakra-ui/utils";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { api } from "../services/api";

type AuthProviderProps = {
  children: ReactNode;
};

interface ISignInData {
  email: string;
  password: string;
}

interface IUser {
  name: string;
  email: string;
  id: string;
}

interface IAuthState {
  user: IUser;
  accessToken: string;
}

interface AuthContextProviderProps {
  user: IUser;
  accessToken: string;
  signIn: ({ email, password }: ISignInData) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProviderProps>(
  {} as AuthContextProviderProps,
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem("@Hamburgueria2:user");
    const token = localStorage.getItem("@Hamburgueria2:token");

    if (user && token) {
      return { user: JSON.parse(user), accessToken: token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }: ISignInData) => {
    const response = await api.post("/signin", { email, password });

    const { user, accessToken } = response.data;

    localStorage.setItem("@Hamburgueria2:user", JSON.stringify(user));
    localStorage.setItem("@Hamburgueria2:token", accessToken);

    setData({ user, accessToken });
  }, []);

  const signOut = () => {
    localStorage.removeItem("@Hamburgueria2:user");
    localStorage.removeItem("@Hamburgueria2:token");
    setData({} as IAuthState);
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        accessToken: data.accessToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
