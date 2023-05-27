import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";


//Agregar producto al carrito
export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });


//Eliminar del carrito de compras
//recibe el id del producto a eliminar, en caso de all ser verdadero remover todo el carrito, caso contrario eliminar un solo producto
export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

//Limpiar carrito de compras
export const clearCart = () => ({ type: CLEAR_CART });
