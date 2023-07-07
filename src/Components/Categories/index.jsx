import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, getCategories } from '../../Store/Categories';
import { Box, Typography } from '@mui/material';


const Categories = () => {
    const { categories } = useSelector(getCategories);
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(selectCategory(category));
      };

      const getCategoryBackground = (categoryName) => {
        switch (categoryName) {
          case 'electronics':
            return `url(${electronicsBackground})`;
          case 'food':
            return `url(${foodBackground})`;
          case 'clothing':
            return `url(${clothingBackground})`;
          case 'weapons':
            return `url(${weaponsBackground})`;
          default:
            return 'none';
        }
      };