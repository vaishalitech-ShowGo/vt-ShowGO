import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
     const [cartState, setCartState] = useState({
          quantity: 1,
          selectedTicket: {
               name: "EARLY BIRD",
               price: 1000
          },
          otherCharges: 75.0
     });

     const updateSelectedTicket = (ticket) => {
          setCartState(prev => ({
               ...prev,
               selectedTicket: ticket
          }));
     };

     const increment = () => {
          setCartState(prev => ({
               ...prev,
               quantity: prev.quantity + 1
          }));
     };

     const decrement = () =>{
          if (cartState.quantity > 1) {
               setCartState(prev => ({
                    ...prev,
                    quantity: prev.quantity - 1
               }));
          }
     }

     return (
          <CartContext.Provider value = {{
               ...cartState,
               increment,
               decrement,
               updateSelectedTicket
          }}>
               {children}
          </CartContext.Provider>
     );
};

export const useCart = () =>{
     const context = useContext(CartContext);
     if (!context) {
          throw new Error("useCart must be used within a CartProvider");
     }
     return context;
}
