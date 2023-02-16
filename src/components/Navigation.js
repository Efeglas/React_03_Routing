import { Link, NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () =>{
    return (
    <header className={style.header}>
        <nav>
            <ul className={style.list}>
                <li><NavLink to='/' className={({isActive}) => {return isActive ? style.active : ""}} end>Home</ NavLink></li>
                <li><NavLink to='/products' className={({isActive}) => {return isActive ? style.active : ""}}>Products</ NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navigation;