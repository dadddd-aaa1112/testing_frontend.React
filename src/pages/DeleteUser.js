import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Typography, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
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
			<Typography variant="h5" sx={{ my: 3 }}>
				Удаление пользователя
			</Typography>
			{userRem && (
				<>
					<Typography variant="h8" sx={{ ml: 1 }}>
						{userRem.name}
					</Typography>
					<Typography variant="h8" sx={{ ml: 1 }}>
						{userRem.email}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						onClick={cancelReturnAllUser}
						size="small"
						sx={{ ml: 2 }}
					>
						Отмена
					</Button>
					<Button
						variant="outlined"
						size="small"
						sx={{ ml: 2 }}
						startIcon={<DeleteIcon />}
						onClick={() => removeReturnAllUser(userRem.id)}
					>
						Удалить
					</Button>
				</>
			)}
		</>
	)
}

export default DeleteUser
