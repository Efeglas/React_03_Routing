import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }
    
    return (
        <p>Home page!</p>       
    );
}

//? <a href='/products'>Products</a>

export default Home;