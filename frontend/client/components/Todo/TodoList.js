import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import { Button, Row, Col } from 'reactstrap';
import AddTodoPage from './AddTodoPage';
const DUMMY_TODO_LIST = [
	{
		id: '1',
		title: 'Test',
		description: 'Test123 123 dfetdscnsjfdlflsdf wedfwdngfksd nfsdf swde wfedwsdlsdgkf.',
		expireDate: '22/01/2023',
		taskStatu: '1',
	},
	{
		id: '2',
		title: 'Test',
		description: 'Test123 123 dfetdscnsjfdlflsdf wedfwdngfksd nfsdf swde wfedwsdlsdgkf.',
		expireDate: '22/01/2023',
		taskStatu: '2',
	},
	{
		id: '3',
		title: 'Test',
		description: 'Test123 123 dfetdscnsjfdlflsdf wedfwdngfksd nfsdf swde wfedwsdlsdgkf.',
		expireDate: '22/01/2023',
		taskStatu: '3',
	},
];

const TodoList = () => {
	const [addTodoToggle, setAddTodoToggle] = useState(false);
	const [cards, setCards] = useState(DUMMY_TODO_LIST);
    const [filter, setFilter] = useState(1)
	const initialCards = [];
	cards.map((card) => {
		if (card.taskStatu === '1') {
			initialCards.push(card);
		}
	});
	const [filteredCards, setFilteredCards] = useState(initialCards);
    const [effectTeticker, setEffectTeticker] = useState(false)
    useEffect(()=>{
        const filteredCardss = [];
		cards.map((card) => {
			if (card.taskStatu === filter) {
				filteredCardss.push(card);
			}
		});
		setFilteredCards(filteredCardss);
    }, [filter, effectTeticker])

	// function getCards(taskStatu) {
	// 	const filteredCardss = [];
	// 	cards.map((card) => {
	// 		if (card.taskStatu === taskStatu) {
	// 			filteredCardss.push(card);
	// 		}
	// 	});
	// 	setFilteredCards(filteredCardss);
	// }
	// Update card status

	function UpdateStatus(id, status) {
		const index = cards.findIndex((card) => card.id == id);
		const newCards = cards;
        const updatedCard = newCards[index]
        delete newCards[index]
        updatedCard.taskStatu = status
        newCards[index] = updatedCard
		setCards(newCards);
        setEffectTeticker(!effectTeticker)
	}
    function AddTodo(todo) {
        DUMMY_TODO_LIST.push(todo)
        setEffectTeticker(!effectTeticker)
    }

	return (
		<>
			<div style={{  alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
				<Button
					onClick={() => {
						setAddTodoToggle(!addTodoToggle);
					}}
					style={{
						marginRight:10,
						marginTop: 20,
						width: '7rem',
						backgroundColor: 'rgb(242, 222, 186)',
						color: 'rgb(130, 0, 0)',
					}}
				>
					Görev ekle
				</Button>
				<Button
					onClick={() => {
                        
                        setFilter('1')
						
					}}
					style={{ marginRight: 10, width: '7rem', marginTop: 20, backgroundColor: 'rgb(31, 138, 112)' }}
				>
					Yapılacaklar
				</Button>
				<Button
					onClick={() => {
                        
						setFilter('2')
						
					}}
					style={{ marginRight: 10, width: '7rem', marginTop: 20, backgroundColor: 'rgb(191, 219, 56)' }}
				>
					Sürüyor
				</Button>
				<Button
					onClick={() => {
                        
						setFilter('3')
						
					}}
					style={{ width: '7rem', marginTop: 20, backgroundColor: 'rgb(252, 115, 0)' }}
				>
					Yapıldı
				</Button>
                
			</div>
			<Row
				xs={1}
				sm={2}
				md={3}
				lg={4}
				xxl={5}
				style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: 10 }}
			>
				{filteredCards.length > 0 &&
					filteredCards.map((card, index) => {
						return (
							<Col id={index} key={index} style={{ marginTop: 30 }}>
								<TodoCard key={card.id} todo={card} update={UpdateStatus} />
							</Col>
						);
					})}
			</Row>
			<AddTodoPage
				isOpen={addTodoToggle}
				close={() => {
					setAddTodoToggle();
				}}
                addTodo = {AddTodo}
			/>
		</>
	);
};

export default TodoList;
