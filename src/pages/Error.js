import {Fragment} from 'react';
import Navigation from '../components/Navigation';

const Error = () =>{
    return (
        <Fragment>
            <Navigation />
            <main>
                <p>404 Error: Page not found!</p>
            </main>
        </Fragment>
    );
}

export default Error;