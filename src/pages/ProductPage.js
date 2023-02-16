import { useParams } from "react-router-dom";

const ProductPage = () => {

    const params = useParams();
    
    return (
        <p>Prod x! {params.prodId}</p>
    );
}

export default ProductPage;