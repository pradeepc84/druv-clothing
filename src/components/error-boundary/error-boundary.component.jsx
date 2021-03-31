import React from 'react';
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './error-boundary.styles';
class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state ={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return{hasError:true}
    }

    componentDidCatch(error,Info){
            console.log(error);
    }

    render(){
        if(this.state.hasError){
        return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl={`https://i.imgur.com/yW2W9SC.png`}/>
                    <ErrorImageText>
                        Sorry For Inconvience
                    </ErrorImageText>
            </ErrorImageOverlay>
        )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;