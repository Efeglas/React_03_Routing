import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import {Fragment} from 'react';

const Root = () => {
    return (
        <Fragment>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default Root;