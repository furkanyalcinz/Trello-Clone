import { Button, CardBody, Card, CardTitle, CardSubtitle, CardText, Col, Row } from 'reactstrap';
const TodoCard = (props) => {
	const todo = {
		id: props.todo.id,
		title: props.todo.title,
		description: props.todo.description,
		taskStatu: props.todo.taskStatu,
		expireDate: props.todo.expireDate,
	};

	return (
		<Card draggable="true" style={{ width: 'auto', height: '30rem', overflow: 'hidden' }}>
			<img alt="Sample" src="https://picsum.photos/300/200" />
			<CardBody>
				<CardTitle tag="h5">{todo.title}</CardTitle>
				<CardSubtitle className="mb-2 text-muted" tag="h6">
					<Row>
						<Col id={1} key={1}>
							{todo.taskStatu === '1' && <p>Yapılacak</p>}
							{todo.taskStatu === '2' && <p>Sürüyor</p>}
							{todo.taskStatu === '3' && <p>Yapıldı</p>}
						</Col>
						<Col id={2} key={2}>
							<b>{todo.expireDate}</b>
						</Col>
					</Row>
				</CardSubtitle>
				<CardText>{todo.description}</CardText>
					<div
						style={{
							alignItems: 'center',
							flex:1,
							justifyContent: 'center',
							position:"absolute",
							bottom:7
						}}
					>
						<Button
							style={{ marginRight: 3, width: 'auto', marginTop: 20 }}
							onClick={() => {
								props.update(todo.id, '1');
							}}
						>
							Yapılacak
						</Button>
						<Button
							style={{ marginRight: 3, width: 'auto', marginTop: 20 }}
							onClick={() => {
								props.update(todo.id, '2');
							}}
						>
							Sürüyor
						</Button>
						<Button
							style={{ width: 'auto', marginTop: 20 }}
							onClick={() => {
								props.update(todo.id, '3');
							}}
						>
							Yapıldı
						</Button>
					</div>
			</CardBody>
		</Card>
	);
};

export default TodoCard;
