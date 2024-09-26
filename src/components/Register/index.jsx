
import { useState, useContext } from 'react'

import UserContext from '../../contexts/users/UserContext'

export default function Register() {

    const userCtx = useContext(UserContext)

    const {
        registerUser
    } = userCtx

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })


    const handleChange = (event) => {

        event.preventDefault()

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        registerUser(data)
    }

    return (
        <>

            <div>
                <div>
                    <h2>
                        Crear cuenta
                    </h2>
                </div>

                <div>
                    <div>
                        <form onSubmit={(e) => { sendData(e) }}>
                            <div>
                                <label htmlFor="email">
                                    Nombre de usuario
                                </label>
                                <div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit">
                                    Registrarme
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

