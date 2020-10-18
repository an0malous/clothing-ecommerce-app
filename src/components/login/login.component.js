import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component.js'
import { signInWithGoogle } from '../../firebase/firebase.utils';
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
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
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        placeholder="email"
                        required 
                        
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        onChange={this.handleChange}
                        placeholder="password"
                        required 
                    />
                    <div className="buttons">

                    <CustomButton type="submit">Login</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Login with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Login;