const initialState = {
    products: [
        {id:1, category: 'weapons', name: 'Mace', description: 'Crystal base, leather handled', price: 999.99},
        {id:2, category: 'weapons', name: 'Greatsword', description: 'Two Handed sword, platinum', price: 799.99},
        {id:3, category: 'foods', name: 'Steak', description: '12oz T-Bone', price: 69.99},
        {id:4, category: 'foods', name: 'Banana', description: 'Dozen Bananas', price: 12.99},
        {id:5, category: 'foods', name: 'Bread', description: 'Loaf of sourdough', price: 3.99},
        {id:6, category: 'electronics', name: 'Ipad', description: 'Touchscreen tablet', price: 59.99},
        {id:7, category: 'electronics', name: 'TV', description: '60 inch HD TV', price: 599.99},
        {id:8, category: 'clothing', name: 'Shorts', description: 'Cargo shorts', price: 29.99},
        {id:9, category: 'clothing', name: 'T-Shirt', description: 'Casual short sleeve shirt', price: 13.99},
        {id:10, category: 'clothing', name: 'Coat', description: 'Long fully button down fancy coat', price: 49.99},
    ],
};

export const getProductsFromCategory = (state, category) => {
    if(category) {
        return state.products.filter((product) => product.category === category.name);
    }
    return state.products;
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productReducer;