import React, { useState, useEffect, createRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ItemUser.css'
import axios from 'axios'

const ItemUser = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [user, setUser] = useState(null)

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${id}`
		axios.get(url).then((resp) => {
			const userId = resp.data
			console.log(userId)
			setUser(userId)
		})
	}, [id])

	const cancelReturnAllUser = () => {
		navigate('/list')
	}

	const applyReturnAllUser = () => {
		const inputNameValue = nameInput.current.value
		const inputEmailValue = emailInput.current.value

		const url = `https://jsonplaceholder.typicode.com/users/${id}`

		axios
			.put(url, {
				name: inputNameValue,
				email: inputEmailValue,
			})
			.then((response) => {
				console.log('Change saved...', response.data)
				navigate('/list')
			})
			.catch((e) => {
				console.log('Error... ')
			})
	}

	const nameInput = createRef()
	const emailInput = createRef()

	return (
		<>
			<h1>Редактирование пользователя</h1>
			<div className="itemUser">
				{user && (
					<>
						<input type="text" defaultValue={user.name} ref={nameInput} />
						<input type="text" defaultValue={user.email} ref={emailInput} />
					</>
				)}
				<button onClick={cancelReturnAllUser}>Отмена</button>
				<button onClick={applyReturnAllUser}>Сохранить</button>
			</div>
		</>
	)
}

export default ItemUser
