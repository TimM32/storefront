export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
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
    case SELECT_CATEGORY:
      console.log('Selected Category:', action.payload);
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;