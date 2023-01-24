import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {signupPageToggle} from "../redux/signup";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SignIn = (props) => {

	const [enteredMail, setEnteredMail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredFullname, setEnteredFullname] = useState('');
	const [formIsValid, setFormIsValid] = useState(false);

	//checking form validity
	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(
				enteredMail.includes('@') && enteredPassword.trim().length > 5 && enteredFullname.trim().length > 2
			);
		}, 500);
		return () => {
			clearTimeout(identifier);
		};
	}, [enteredMail, enteredPassword, enteredFullname]);

	const emailChangeHandler = (event) => {
		setEnteredMail(event.target.value);
	};
	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};
	const fullnameChangeHandler = (event) => {
		setEnteredFullname(event.target.value);
	};
	const addUserHandler = () => {
		props.closePage();
		props.addUser({
			id: 'e' + Math.random(),
			fullname: enteredFullname,
			email: enteredMail,
			password: enteredPassword,
		});
	};
    const dispatch = useDispatch();

	return (
		<>
			<Modal isOpen={props.isOpen}>
				<ModalHeader>Kayıt Ol</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="fullname">Adınız</Label>
							<Input
								id="fullname"
								name="fullname"
								placeholder="Adınızı giriniz"
								type="text"
								onChange={fullnameChangeHandler}
							/>
							<Label for="email">Email</Label>
							<Input
								id="email"
								name="email"
								placeholder="Email adresinizi yazın."
								type="email"
								onChange={emailChangeHandler}
							></Input>
							<Label for="password"> Şifre</Label>
							<Input
								id="password"
								placeholder="Şifrenizi yazın"
								type="password"
								onChange={passwordChangeHandler}
							></Input>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					{formIsValid && (
						<Button color="primary" onClick={addUserHandler}>
							Kayıt Ol
						</Button>
					)}
					{!formIsValid && (
						<Button disabled color="primary">
							Kayıt Ol
						</Button>
					)}
					<Button onClick={()=>dispatch(signupPageToggle())}>Çıkış</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default SignIn;
