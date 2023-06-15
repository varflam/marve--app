import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Error from '../error/Error';

const Page404 = () => {
    return(
        <div style={{'fontWeight': 'bold', 'fontSize': '24px', 'lineHeight': '28px', 'textAlign': 'center'}}>
            <Helmet>
                <meta
                name="description"
                content="Page is not found"
                />
                <title>Error 404</title>
            </Helmet>
            <Error/>
            <p style={{'marginBottom': '20px'}}>This page does not exist</p>
            <Link to="/marve--app/" style={{'color': '#9f0008'}}>Back to the main page</Link>
        </div>
    )
}

export default Page404;