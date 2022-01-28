interface IProductToHome {
  id: string;
  name: string;
  category: string;
  price: string;
  img_url: string;
}

interface IProductToCart extends IProductToHome {
  quantity: string;
}

interface IUser {
  email: string;
  name: string;
  cart: IProductToCart[];
  id: string;
}

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface SignInFormData {
  email: string;
  password: string;
}

export type {
  SignUpFormData,
  SignInFormData,
  IUser,
  IProductToHome,
  IProductToCart,
};
