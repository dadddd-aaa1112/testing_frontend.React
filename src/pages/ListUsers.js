import React, { useState, useEffect, createRef } from 'react'
import './ListUser.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const ListUsers = () => {
	const [users, setUsers] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		const baseUrl = 'https://jsonplaceholder.typicode.com/users'
		axios.get(baseUrl).then((resp) => {
			const allUsers = resp.data
			setUsers(allUsers)
		})
	}, [setUsers])

	const searchUser = () => {
		const searchData = inputRef.current.value
		const res = users.filter((user) =>
			user.name.toLowerCase().includes(searchData.toLowerCase())
		)
		setUsers(res)
	}

	const inputRef = createRef()

	return (
		<div>
			<h1>Список всех пользователей</h1>
			<button onClick={() => navigate('/add')}>Добавить пользователя</button>
			<input
				type="text"
				onChange={() => searchUser()}
				ref={inputRef}
				placeholder="Поиск..."
			/>
			<table>
				<thead>
					<tr>
						<th>ФИО</th>
						<th>email</th>
						<th>Редактировать</th>
						<th>Удалить</th>
					</tr>
				</thead>

				<tbody>
					<div className="listUser">
						<tr>
							{users.map((user) => (
								<>
									<Link key={user.id} to={`/edit/${user.id}`}>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>
											<button>Редактировать</button>
										</td>
									</Link>
									<td>
										<button onClick={() => navigate(`/edit/${user.id}/delete`)}>
											Удалить
										</button>
									</td>
								</>
							))}
						</tr>
					</div>
				</tbody>
			</table>

			<button>Назад</button>
			<button>Вперед</button>
		</div>
	)
}

export default ListUsers
