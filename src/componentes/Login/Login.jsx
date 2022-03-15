import { useState } from "react";
import CRUD from "../CRUD";

function Formulario() {

    const [credential, setCredential] = useState({username: "", password: ""});
    const login = async e => {
        e.preventDefault();
        const result = await new CRUD().create("login", credential)
        console.log(result)
        if(result.token) localStorage.setItem("token", result.token)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCredential({ ...credential, [name]: value });
    }	
    return (
        <form id="formulario" onSubmit={login}>
            <div className="modal-body">

                <div className="form-group">
                    <label htmlFor="txtDistribuicao" className="form-label">
                        Usename
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        required
                        value={credential.username}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="txtQtd" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={credential.password}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-success">
                    Entrar <i className="bi bi-save"></i></button>
        </form>
    )
}

export default Formulario;