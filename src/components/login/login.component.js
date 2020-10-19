import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component.js'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
    

    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email: '', password: ''})
        
        } catch (error){
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="login">
                <h2>I already have an account</h2>
                <span>Log in with your email and password</span>

                <form onSubmit={this.handleOnsubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        required 
                        
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        onChange={this.handleChange}
                        required 
                    />
                    <div className="buttons">

                    <CustomButton onClick={this.handleSubmit} type="submit">Login</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Login with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Login;