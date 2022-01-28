import React, { useEffect } from "react";

import { useAuth } from "../../../contexts/AuthContext";
import { EmptyCartModal } from "../Modals/EmptyCart";
import { NoEmptyCartModal } from "../Modals/NoEmptyCart";
import { NoLoggedUserCart } from "../Modals/NoLoggedUserCart";
import { IProductToCart as IProduct } from "../../../Types";

interface IModalCart {
  isOpen: boolean;
  onClose: () => void;
  cart: IProduct[];
}

export const ModalCart = ({ isOpen, onClose, cart }: IModalCart) => {
  const { accessToken, user } = useAuth();

  return !accessToken ? (
    <NoLoggedUserCart isOpen={isOpen} onClose={onClose} />
  ) : cart.length > 0 ? (
    <NoEmptyCartModal isOpen={isOpen} onClose={onClose} cart={cart} />
  ) : (
    <EmptyCartModal isOpen={isOpen} onClose={onClose} />
  );
};
