import { Component } from "react";
import Error from "../error/Error";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error) {
            return <Error/>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;