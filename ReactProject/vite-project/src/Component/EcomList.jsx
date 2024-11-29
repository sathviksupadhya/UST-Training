import { useState } from "react";

function EcomList() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [message, setMessage] = useState("");

  const allProducts = [
    {
      prodId: 501,
      prodName: "Laptop",
      prodCost: 40000,
      prodImage: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9yfGVufDB8fDB8fHww",
    },
    {
      prodId: 502,
      prodName: "Mobile",
      prodCost: 30000,
      prodImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
    },
    {
      prodId: 503,
      prodName: "Tablet",
      prodCost: 20000,
      prodImage: "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
    },
    {
      prodId: 504,
      prodName: "Watch",
      prodCost: 30000,
      prodImage: "https://media.istockphoto.com/id/1189984324/photo/smart-watch-for-branding-and-mock-up-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=obd89zfN8JUq7fiQdLoI7KCl-_N3CwpvLur3D5s-zZs=",
    },
    {
      prodId: 505,
      prodName: "Desktop",
      prodCost: 25000,
      prodImage: "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  function addToCart(prodId) {
    let fetchedProduct = allProducts.find((eachProduct) => eachProduct.prodId === prodId);
    setCart([...cart, fetchedProduct]);
  }

  function deleteCartItem(index) {
    let filteredCart = [...cart];
    filteredCart.splice(index, 1);
    setCart(filteredCart);
  }

  function addToWishlist(prodId) {
    let fetchedProduct = allProducts.find((eachProduct) => eachProduct.prodId === prodId);
    if (!wishlist.some(item => item.prodId === fetchedProduct.prodId)) {
      setWishlist([...wishlist, fetchedProduct]);
      setMessage("");
    } else {
      setMessage("Item is already present in the wishlist!");
    }
  }

  function deleteWishlistItem(prodId) {
    const filteredWishlist = wishlist.filter(item => item.prodId !== prodId);
    setWishlist(filteredWishlist);
    setMessage("");
  }

  function addWishlistItemToCart(prodId) {
    let fetchedProduct = wishlist.find(item => item.prodId === prodId);
    if (fetchedProduct) {
      addToCart(fetchedProduct.prodId);
    }
  }

  let mappedCart = cart.map((eachCartItem, index) => (
    <tr key={eachCartItem.prodId}>
      <td>{eachCartItem.prodName}</td>
      <td>Rs.{eachCartItem.prodCost}</td>
      <td>
        <button style={trashButtonStyle} onClick={() => deleteCartItem(index)}>
          🗑️
        </button>
      </td>
    </tr>
  ));

  let mappedWishlist = wishlist.map((eachWishlistItem) => (
    <tr key={eachWishlistItem.prodId}>
      <td style={{ display: "flex", alignItems: "center" }}>
        <img src={eachWishlistItem.prodImage} alt={eachWishlistItem.prodName} style={largeImageStyle} />
        <span style={{ marginLeft: "10px" }}>{eachWishlistItem.prodName}</span>
      </td>
      <td>
        <button style={addToCartButtonStyle} onClick={() => addWishlistItemToCart(eachWishlistItem.prodId)}>
          Add to Cart
        </button>
        <button style={trashButtonStyle} onClick={() => deleteWishlistItem(eachWishlistItem.prodId)}>
          🗑️
        </button>
      </td>
    </tr>
  ));

  let mappedAllProducts = allProducts.map((eachProduct) => (
    <div style={cardStyle} key={eachProduct.prodId}>
      <img src={eachProduct.prodImage} alt={eachProduct.prodName} style={imageStyle} />
      <h5>{eachProduct.prodName}</h5>
      <p>Price: Rs.{eachProduct.prodCost}</p>
      <div style={buttonContainerStyle}>
        <button style={addToCartButtonStyle} onClick={() => addToCart(eachProduct.prodId)}>
          Add to Cart
        </button>
        <button style={addToWishlistButtonStyle} onClick={() => addToWishlist(eachProduct.prodId)}>
          Wishlist
        </button>
      </div>
    </div>
  ));

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h3>LIST OF GADGETS</h3>
        <div style={productsStyle}>{mappedAllProducts}</div>
      </div>
      <div style={sidebarStyle}>
        <h6 style={cartHeaderStyle}>CART ITEMS</h6>
        {cart.length === 0 ? (
          "CART IS EMPTY!"
        ) : (
          <div>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>COST</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{mappedCart}</tbody>
            </table>
            <div>
              <p>Total Items: {cart.length}</p>
              <p>
                Total Cost: Rs.
                {cart.reduce((sum, eachCartItem) => sum + eachCartItem.prodCost, 0)}
              </p>
            </div>
          </div>
        )}

        <h6 style={wishlistHeaderStyle}>WISHLIST ITEMS</h6>
        {message && <p style={messageStyle}>{message}</p>}
        {wishlist.length === 0 ? (
          "WISHLIST IS EMPTY!"
        ) : (
          <div style={wishlistStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{mappedWishlist}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// Inline styles
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
};

const headerStyle = {
  flex: 3,
};

const sidebarStyle = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const productsStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px",
  margin: "10px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
};

const largeImageStyle = {
  width: "50px",  // Increased size for better visibility
  height: "50px",
  borderRadius: "50%",
};

const addToCartButtonStyle = {
  backgroundColor: "yellow",
  color: "black",
  border: "none",
  borderRadius: "5px",
  padding: "5px 8px",  // Reduced size
  margin: "5px",
  cursor: "pointer",
};

const addToWishlistButtonStyle = {
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "5px 8px",  // Reduced size
  margin: "5px",
  cursor: "pointer",
};

const trashButtonStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "5px 8px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  marginTop: "10px",
  borderCollapse: "collapse",
};

const cartHeaderStyle = {
  color: "blue",
  fontWeight: "bold",
  marginTop: "20px",
};

const wishlistHeaderStyle = {
  color: "purple",
  fontWeight: "bold",
  marginTop: "20px",
};

const messageStyle = {
  color: "red",
};

const wishlistStyle = {
  marginTop: "10px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

export default EcomList;
