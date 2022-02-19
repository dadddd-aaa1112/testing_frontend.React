import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
	{ to: '/list', label: 'Список пользователей' },
	{ to: '/', label: 'Авторизация' },
	{ to: '/add', label: 'Добавление пользователя' },
]

const Navigation = () => {
	const clickHandler = () => {}
	const renderLinks = () => {
		return links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink to={link.to} onClick={clickHandler}>
						{link.label}
					</NavLink>
				</li>
			)
		})
	}

	return (
		<>
			<nav>
				<ul>{renderLinks()}</ul>
			</nav>
		</>
	)
}

export default Navigation
