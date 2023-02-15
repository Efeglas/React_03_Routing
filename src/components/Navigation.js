import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () =>{
    return (
    <header className={style.header}>
        <nav>
            <ul className={style.list}>
                <li><Link to='/'>Home</ Link></li>
                <li><Link to='/products'>Products</ Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navigation;