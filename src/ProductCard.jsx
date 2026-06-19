import { useState } from "react";
import "./App.css";


const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "💻"
  },
  {
    id: 2,
    name: "Mobile Phone",
    price: 20000,
    image: "📱"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "🎧"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5000,
    image: "⌚"
  }
];



function ProductCard({product, addToCart}){

return(

<div className="card">

<h2>{product.image}</h2>

<h3>{product.name}</h3>

<p>₹{product.price}</p>

<button onClick={()=>addToCart(product)}>
Add To Cart
</button>

</div>

)

}



function App(){

const [cart,setCart]=useState([]);

const [search,setSearch]=useState("");



function addToCart(product){

const exist = cart.find(
(item)=>item.id===product.id
);


if(exist){

setCart(
cart.map(item=>
item.id===product.id
?
{...item, quantity:item.quantity+1}
:
item
)
)

}

else{

setCart([
...cart,
{...product, quantity:1}
])

}

}




function removeItem(id){

setCart(
cart.filter(item=>item.id!==id)
)

}




function increase(id){

setCart(
cart.map(item=>

item.id===id
?
{...item,quantity:item.quantity+1}
:
item

)
)

}



function decrease(id){

setCart(

cart.map(item=>

item.id===id && item.quantity>1
?
{...item,quantity:item.quantity-1}
:
item

)

)

}




const total = cart.reduce(
(sum,item)=>
sum + item.price * item.quantity,
0
);



const filteredProducts =
products.filter(product=>

product.name
.toLowerCase()
.includes(search.toLowerCase())

);



return(

<div>


<h1>ShopEasy 🛒</h1>


<input

type="text"

placeholder="Search Product"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>



<h2>Products</h2>


<div className="products">


{
filteredProducts.map(product=>

<ProductCard

key={product.id}

product={product}

addToCart={addToCart}

/>

)

}


</div>




<h2>Cart</h2>


{

cart.length===0 ?

<p>Cart is Empty</p>


:

cart.map(item=>(

<div className="cart">

<h3>
{item.name}
</h3>

<p>
₹{item.price}
</p>


<button onClick={()=>decrease(item.id)}>
-
</button>


<span>
 {item.quantity}
</span>


<button onClick={()=>increase(item.id)}>
+
</button>


<button onClick={()=>removeItem(item.id)}>
Remove
</button>


</div>


))

}




<h2>
Total Amount: ₹{total}
</h2>


</div>

)

}


export default App;