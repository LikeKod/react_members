import React, { useState } from 'react'
import { useAuth } from '../../providers/useAuth'


import styles from './LoginForm.module.scss'

export function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [isRegister, setIsRegister] = useState(false)

	const handleChange = (e) => {
		if (e.target.name === 'email') {
			setEmail(e.target.value)
		} else if (e.target.name === 'password') {
			setPassword(e.target.value)
		}
        console.log(e.target.name)
	}

	const { authUser } = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await authUser(email, password, isRegister)
		setEmail('')
		setPassword('')
        console.log(email, password)
	}

	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<h1>Авторизация</h1>
				<form onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Введите email'
							value={email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='password'>Пароль</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Введите пароль'
							value={password}
							onChange={handleChange}
							required
						/>
					</div>
					<button type='submit' style={{ marginRight: 15 }}>
						Войти
					</button>
					<button type='submit' onClick={() => setIsRegister(true)}>
						Регистрация
					</button>
				</form>
			</div>
		</div>
	)
}
