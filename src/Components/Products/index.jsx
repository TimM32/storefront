import { useSelector } from "react-redux";
import { getActiveCategory } from "../../Store/Categories";
import { getProductsFromCategory } from "../../Store/Products";

const Products = () => {
    const activeCategory = useSelector(getActiveCategory);
    const { products } = useSelector((state) => getProductsFromCategory(state, activeCategory));
    
    return (
        //need to customize the frontend to make it look nice, might ask a student for some advice or TA (not my strong suit)
    );
}

export default Products;