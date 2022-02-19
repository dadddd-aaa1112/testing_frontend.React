import React, { createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AddUser.css'
const Adduser = () => {
	const navigate = useNavigate()

	const addUser = () => {
		const addData = {
			id: new Date().toString(),
			name: addName.current.value,
			email: addSelect.current.value,
		}
		axios
			.post(`https://jsonplaceholder.typicode.com/users/`, {
				addData,
			})
			.then((res) => {
				console.log(res)
			})
		navigate('/list')
	}

	const addName = createRef()
	const addSelect = createRef()

	return (
		<>
			<h1>Добавление пользователя</h1>
			<div className="addUserForm">
				<div className="input-field">
					ФИО
					<input type="text" ref={addName} />
					<label className="input-field">
						Выберите ваш город
						<select className="input-field" ref={addSelect}>
							<option value="1">Краснодар</option>
							<option value="2">Москва</option>
							<option value="3">Санкт-Петербург</option>
						</select>
					</label>
				</div>
				<button className="input-field" onClick={addUser}>
					Добавить пользователя
				</button>
			</div>
		</>
	)
}

export default Adduser
