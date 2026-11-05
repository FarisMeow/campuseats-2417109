import { CartContext } from './cart-context.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
 
// Owns the cart and the orders, and shares them with every component inside it.
export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('campuseats-cart', [])  // { item, qty }
  const [orders, setOrders] = useLocalStorage('campuseats-orders', [])
   function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id)
      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line)
      }
      return [...prev, { item, qty: 1 }]
    })
  }
 
  function changeQty(itemId, delta) {
    // TODO: copy your Week 3 handleChangeQty body here
    //   (map with qty + delta, then filter qty > 0)
  }
 
  function removeFromCart(itemId) {
    // TODO: copy your Week 3 handleRemove body here
  }
 
  // details = { name, mahallah, pickupTime } from CheckoutForm
  function placeOrder(details) {
    const order = {
      id: `ord-${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...details,
      lines: cart,
      total: cart.reduce((sum, line) => sum + line.item.price * line.qty, 0),
    }
    setOrders((prev) => [order, ...prev])  // newest first
    // TODO: empty the cart. Hint: setCart with an empty array
    return order
  }
 
  const count = cart.reduce((sum, line) => sum + line.qty, 0)
  // TODO: const total = ...   Hint: like count, but add line.item.price * line.qty
 
  const value = {
    cart, orders, count, total,
    addToCart, changeQty, removeFromCart, placeOrder,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}