import React, { useState } from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap";

const AddTodoPage = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredExpireDate, setEnteredExpireDate] = useState("");
    const [enteredTaskStatu, setEnteredTaskStatu] = useState("1");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredExpireDate(event.target.value);
    };
    const addTodo = () => {

        const todo = {
            id:Math.random(),
            title:enteredTitle,
            description: enteredDescription,
            expireDate:enteredExpireDate,
            taskStatu :enteredTaskStatu
            
        };
        props.addTodo(todo);
        setEnteredTitle("")
        setEnteredDescription("")
        setEnteredExpireDate("")
        setEnteredTaskStatu("1")
        props.close();
    }
    
    return(
        <>
        <Modal  isOpen={props.isOpen}>
            <ModalHeader>Görev Ekle</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="title">Başlık</Label>
                        <Input id="title" name="title" placeholder="Başlığı giriniz" type="text" onChange={titleChangeHandler}/>

                        <Label for="description">Açıklama</Label>
                        <Input id="description" name="description" placeholder="Açıklmayı giriniz." type="textarea" onChange={descriptionChangeHandler}/>

                        <Label for="expireDate">Bitiş Tarihi</Label>
                        <Input id="expireDate" name="expireDate" placeholder="Bitiş tarihini seçiniz." type="date" onChange={dateChangeHandler}/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={addTodo}>Ekle</Button>
                <Button onClick={props.close}>Vazgeç</Button>
            </ModalFooter>
        </Modal>
        </>
    );
};

export default AddTodoPage;