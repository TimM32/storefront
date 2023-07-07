import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, getCategories } from '../../Store/Categories';
import { Box, Typography } from '@mui/material';
import electronicBackground from '../../../assets/images/electronics.jpg';
import weaponsBackground from '../../../assets/images/weapons.jpg';
import foodsBackground from '../../../assets/images/foodsBackground.jpg';
import clothingBackground from '../../../assets/images/clothing.jpg';


const Categories = () => {
    const { categories } = useSelector(getCategories);
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(selectCategory(category));
      };

      const getCategoryBackground = (categoryName) => {
        switch (categoryName) {
          case 'electronics':
            return `url(${electronicBackground})`;
          case 'food':
            return `url(${foodsBackground})`;
          case 'clothing':
            return `url(${clothingBackground})`;
          case 'weapons':
            return `url(${weaponsBackground})`;
          default:
            return 'none';
        }
      };

      return (
        <div>
          <Typography variant="h4" component="h1" align="center">
            Categories
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            {categories.map((category) => (
              <Box
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  padding: 2,
                  marginRight: 2,
                  width: '150px', 
                  backgroundImage: getCategoryBackground(category.name),
                  textAlign: 'center',
                  fontSize: '1rem',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  color: '#fff', 
                  '& .MuiTypography-root': {
                    fontWeight: 'bold', 
                    fontSize: '1.1rem', 
                  },
                }}
              >
                <Typography variant="body1">{category.displayName}</Typography>
              </Box>
            ))}
          </Box>
        </div>
      );
    }
    
    export default Categories;