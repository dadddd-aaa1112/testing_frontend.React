import React from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
	const navigate = useNavigate()

	const loginHandler = () => {
		navigate('/list')
	}

	return (
		<div className="login-page">
			<div className="form">
				<form className="register-form">
					<h1>Вход</h1>

					<label class="register-form-button" for="login">
						Логин{' '}
					</label>
					<input class="register-form-button" type="text" id="login" />

					<label class="register-form-button" for="password">
						Пароль{' '}
					</label>
					<input class="register-form-button" type="password" id="password" />

					<button
						class="register-form-button"
						type="success"
						onClick={loginHandler}
					>
						Войти
					</button>
				</form>
			</div>
		</div>
	)
}

export default Auth
