export const Select_Category = 'Select_Category'

export const selectCategory = (category) => ({
    type: Select_Category,
    payload: category,
  });

  const initialState = {
    categories: [
      { id: 1, name: 'electronics', displayName: 'Electronics' },
      { id: 2, name: 'foods', displayName: 'Foods' },
      { id: 3, name: 'clothing', displayName: 'Clothing' },
      { id: 4, name: 'weapons', displayName: 'Weapons' },
    ],
    activeCategory: null,
  };

  export const getCategories = (state) => state.categories;
export const getActiveCategory = (state) => state.activeCategory;

const categoriesReducer = (state = initialState, action) => {
  console.log('Action:', action);
  switch (action.type) {
    case Select_Category:
      console.log('Selected Category:', action.payload);
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;