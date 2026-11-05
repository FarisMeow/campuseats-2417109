
function Header({
  cartCount,
  onShowMenu,
  onShowCart,
  onShowHistory
}) {
  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>

      <nav className="nav">
        <button
          type="button"
          className="link"
          onClick={onShowMenu}
        >
          Vendors
        </button>

        <button
          type="button"
          className="link cart"
          onClick={onShowCart}
        >
          Cart <span className="badge">{cartCount}</span>
        </button>

        <button
          type="button"
          className="link"
          onClick={onShowHistory}
        >
          Order History
        </button>
      </nav>
    </header>
  )
}

export default Header
