// Function to add an item to the shopping cart in localStorage
const addToDB = (price) => {
    // Declare a variable to store the shopping cart data
    let shoppingCart;

    // Retrieve the shopping cart data from localStorage
    const storedCart = localStorage.getItem("shopping-cart");

    // Check if there is already a shopping cart in localStorage
    if (storedCart) {
        // If yes, parse the stored JSON data and assign it to the shoppingCart variable
        shoppingCart = JSON.parse(storedCart);
    } else {
        // If no shopping cart exists, create an empty object
        shoppingCart = {};
    }

    // Check if the item with the given price already exists in the shopping cart
    const quantity = shoppingCart[price];
    if (quantity) {
        // If the item exists, increase its quantity by 1
        console.log("Item already exists");
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[price] = newQuantity;
    } else {
        // If the item does not exist, add it to the shopping cart with a quantity of 1
        shoppingCart[price] = 1;
        console.log("New item added");
    }

    // Update the shopping cart data in localStorage
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// Export the addToDB function for external use
export { addToDB };



// const addToDB = price => {
//     const quantity = localStorage.getItem (price);
//     if (quantity){
//         console.log ("It's already exist");
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem (price, newQuantity);
//     } else {
//         console.log ("New item added")
//         localStorage.setItem (price, 1);
//     }
// }