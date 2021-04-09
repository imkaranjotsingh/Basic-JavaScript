var cart=[]; // cart items array

// All product list array
var items = [
		{
			"id": 1,
			"name": "Product 1",
			"price": 35.55,
			"quantity": 40,
			"max_quantity": 5,
			"category": "Category 1",
			"shipping_price": 5.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is a Product 1",
			"image":"3.jpg"
		},
		{
			"id": 2,
			"name": "Product 2",
			"price": 45.55,
			"quantity": 30,
			"max_quantity": 6,
			"category": "Category 1",
			"shipping_price": 5.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is a Product 2",
			"image":"4.jpg"
		},
		{
			"id": 3,
			"name": "Product 3",
			"price": 65.55,
			"quantity": 56,
			"max_quantity": 3,
			"category": "Category 2",
			"shipping_price": 5.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is a Product 1",
			"image":"image"
		},
		{
			"id": 4,
			"name": "Product 4",
			"price": 95.55,
			"quantity": 20,
			"max_quantity": 9,
			"category": "Category 3",
			"shipping_price": 7.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is a Product 4",
			"image":"image"
		},
		{
			"id": 5,
			"name": "Product 5",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Category 3",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is a Product 5",
			"image":"image"
		},
	];

var list_length = items.length;  // All product item length

// Display Product list and category dropdown	
function setProducts(category=null){
	var products = ''; 
	categories = '<option>All Category</option>';
	for(var i=0; i<list_length;i++){
		flag = false;
		if(category === null)
			flag = true;
		else
			if(category == items[i].category)
				flag = true;
		if(flag)
			products+='<tr><th>'+items[i].id+'</th><th>'+items[i].name+'</th><th>'+items[i].price+'</th><th>'+items[i].quantity+'</th><th>'+items[i].max_quantity+'</th><th>'+items[i].category+'</th><th><img src="'+items[i].image+'" alt="images_images" style="width:50px; height:50px;"></th><th><a href="view.html?id='+items[i].id+'">View</a></th><th><button onClick="addToCart(' + items[i].id +",'"+items[i].name +"',"+items[i].price+","+items[i].shipping_price+","+ 1 + ","+items[i].shipping_price+')">Add To Cart</button></th></tr>';
		if(categories.indexOf(items[i].category) == -1)
			categories+='<option value="'+items[i].category+'">'+items[i].category+'</option>';
	}
	document.getElementById('product_list').innerHTML = '';
	document.getElementById('product_list').innerHTML = products;
	if(category === null){
		document.getElementById('category').innerHTML = categories;
	}
} 

// Category selected product
function getChnagedProducts(){
	category = document.getElementById("category").options[document.getElementById("category").selectedIndex].value;
	if(category == 'All Category')
		setProducts();
	else
		setProducts(category);
}

// Add to cart 
function addToCart(id,name,price,shipping_price,qty,max_quantity){
	console.log(cart.length)
	let isAvail= false;
	if(cart.length > 0){			
		for (var i = 0; i < cart.length; i++) {
			console.log("ID: ",id,cart[i].id)
			if (cart[i].id === id) {
				let max_quantity = getItemPros(id,"max_quantity");
				if( cart[i].qty === max_quantity){
					alert("you can only select "+max_quantity+ " for this product.")
					return;
				}
				cart[i].qty += 1;
				isAvail=true;
				break;
			}
		}
	}
	console.log("isAvail: ",isAvail)
	if(isAvail===false){
		cart.push({id:id,name:name,price:price,shipping_price:shipping_price,qty:qty,max_quantity:max_quantity})
	}
	localStorage.setItem("Cart", JSON.stringify(cart));
	console.log(cart)
}

// Get any single item's any coloum value

function getItemPros(id=null, coloum=null){
	console.log(id, coloum)
	for(let i=0; i < items.length; i++){
		if(items[i].id == id){
			if (coloum!==null) {
				return items[i][coloum]
			}else{
				return items[i];
			}
		}
	}
	return false;
}

// Get all cart items
function getCartItems(){
	console.log(cart)
	let cartitems= localStorage.getItem("Cart");
	console.log(cartitems)
	if(cartitems!==null){
		return JSON.parse(cartitems);
	}else{
		return []
	}
}