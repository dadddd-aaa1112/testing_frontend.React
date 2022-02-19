import React, { useState, useEffect, createRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './DeleteUser.css'

const DeleteUser = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [userRem, setUserRem] = useState(null)

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${id}`
		axios.get(url).then((resp) => {
			const userId = resp.data
			console.log(userId)
			setUserRem(userId)
		})
	}, [id])

	const cancelReturnAllUser = () => {
		navigate('/list')
	}

	const removeReturnAllUser = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((response) => {
				console.log(response)
				navigate('/list')
			})
	}

	return (
		<>
			<h1>Удаление пользователя {id}</h1>
			{userRem && (
				<>
					<p>{userRem.name}</p>
					<p>{userRem.email}</p>
					<button onClick={cancelReturnAllUser}>Отмена</button>
					<button onClick={() => removeReturnAllUser(userRem.id)}>
						Удалить
					</button>
				</>
			)}
		</>
	)
}

export default DeleteUser
