import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { MenuNoLoggedUser } from "../Header/ChakraMenu/MenuNoLoggedUser";
import { EmptyCartModal } from "./Modals/EmptyCart";
import { NoEmptyCartModal } from "./Modals/NoEmptyCart";
import { NoLoggedUserCart } from "./Modals/NoLoggedUserCart";

type IProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  img_url: string;
  quantity: number;
};

interface IModalCart {
  isOpen: boolean;
  onClose: () => void;
  cart: IProduct[];
}

export const ModalCart = ({ isOpen, onClose, cart }: IModalCart) => {
  const { accessToken } = useAuth();
  console.log(accessToken);
  return !accessToken ? (
    <NoLoggedUserCart isOpen={isOpen} onClose={onClose} />
  ) : cart.length > 0 ? (
    <NoEmptyCartModal isOpen={isOpen} onClose={onClose} cart={cart} />
  ) : (
    <EmptyCartModal isOpen={isOpen} onClose={onClose} />
  );
};
