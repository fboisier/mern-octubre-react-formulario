import React, { useState } from 'react'

export const UseForm = () => {

    const initialState = {
        nombre: '',
        email: '',
        rol: ''
    }

    const [usuario, setUsuario] = useState(initialState);

    const resetearValores = () => {
        setUsuario(initialState);
    }

    const handleChange = (e) => {
        //console.log({ [e.target.name]: e.target.value });

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usuario);
        resetearValores();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={usuario.nombre} onChange={handleChange} type="text" className="form-control" id="nombre" name="nombre" />
            </div>

            <div className="mb-3">
                <label htmlFor="rol" className="form-label">Rol</label>
                <input value={usuario.rol} onChange={handleChange} type="text" className="form-control" id="rol" name="rol" />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input value={usuario.email} onChange={handleChange} type="email" className="form-control" id="email" name="email" />
            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}
