import { Link } from 'react-router-dom';
import Error from '../error/Error';

const Page404 = () => {
    return(
        <div style={{'fontWeight': 'bold', 'fontSize': '24px', 'lineHeight': '28px', 'textAlign': 'center'}}>
            <Error/>
            <p style={{'marginBottom': '20px'}}>This page does not exist</p>
            <Link to="/" style={{'color': '#9f0008'}}>Back to the main page</Link>
        </div>
    )
}

export default Page404;