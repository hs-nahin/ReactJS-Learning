// Using localStorage to store/manage cart data
const addToDB = price => {
    const quantity = localStorage.getItem (price);
    if (quantity){
        console.log ("It's already exist");
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem (price, newQuantity);
    } else {
        console.log ("New item added")
        localStorage.setItem (price, 1);
    }
}

export {addToDB};