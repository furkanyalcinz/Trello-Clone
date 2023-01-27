import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginPageToggle, loggedin } from '../redux/login';
import {LoginController} from "../bussiness/LoginService";
const Login = (props) => {
	const isOpen = props.isOpen;
	const [enteredMail, setEnteredMail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [formIsValid, setFormIsValid] = useState(false);
	const [isFalse, setIsFalse] = useState(true);
	useEffect(() => {
		// checking form validity
		const identifier = setTimeout(() => {
			setFormIsValid(enteredMail.includes('@') && enteredPassword.trim().length > 5);
		}, 500);
		return () => {
			clearTimeout(identifier);
		};
	}, [enteredMail, enteredPassword]);

	const emailChangeHandler = (event) => {
		setEnteredMail(event.target.value);
	};
	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};
	const loginHadler = () => {
		const ifFalse = LoginController(enteredMail, enteredPassword)
		if(!ifFalse){
			setIsFalse(false);
		}
		if(ifFalse){
			setIsFalse(true);
			dispatch(loggedin());
			dispatch(loginPageToggle());
		}
		  
	};
  const dispatch = useDispatch();

	return (
		<div>
			<Modal isOpen={isOpen}>
				<ModalHeader>Kullanıcı Girişi</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="eMail">Email</Label>
							<Input
								id="eMail"
								name="email"
								placeholder="Email adresinizi yazın."
								type="email"
								onChange={emailChangeHandler}
							></Input>
							<Label for="password"> Şifre</Label>
							<Input
								id="password"
								name='password'
								placeholder="Şifrenizi yazın"
								type="password"
								onChange={passwordChangeHandler}
							></Input>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					{!isFalse && <p style={{ color: 'red' }}>Kullanıcı adı veya şifre yanlış.</p>}
					{formIsValid && (
						<Button onClick={loginHadler} color="primary">
							Giriş
						</Button>
					)}
					{!formIsValid && (
						<Button disabled color="primary">
							Giriş
						</Button>
					)}
					<Button color="secondary" onClick={()=>{
						setIsFalse(true);
						dispatch(loginPageToggle())}}>
						Çıkış
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default Login;
