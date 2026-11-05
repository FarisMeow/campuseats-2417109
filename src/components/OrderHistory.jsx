
function OrderHistory({ orders }) {
  return (
    <section>
      <h2 className="section-title">Order History</h2>

      {orders.length === 0 ? (
        <p className="muted">No orders yet.</p>
      ) : (
        <div className="history-list">
          {orders.map((order) => (
            <div className="card" key={order.id}>
              <h3>Order #{order.id}</h3>

              <p>
                Date: {new Date(order.createdAt).toLocaleString()}
              </p>

              <p>Name: {order.name}</p>
              <p>Mahallah: {order.mahallah}</p>
              <p>Pickup: {order.pickupTime}</p>

              <h4>Items Ordered</h4>

              <ul>
                {order.lines.map((line) => (
                  <li key={line.item.id}>
                    {line.item.name} x {line.qty}
                    {' - RM '}
                    {(line.item.price * line.qty).toFixed(2)}
                  </li>
                ))}
              </ul>

              <h3>Total: RM {order.total.toFixed(2)}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default OrderHistory
