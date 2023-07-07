export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
    payload: category,
  });

  const initialState = {
    categories: [
      { id: 1, name: 'electronics', displayName: 'Electronics' },
      { id: 2, name: 'food', displayName: 'Food' },
      { id: 3, name: 'clothing', displayName: 'Clothing' },
      { id: 4, name: 'weapons', displayName: 'Weapons' },
    ],
    activeCategory: null,
  };