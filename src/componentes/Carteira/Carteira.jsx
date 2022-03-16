import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import CarteiraContext from "./CarteiraContext";
import Tabela from "./Tabela";
import CRUD from "../CRUD";

function Carteira() {

    const [listaObjetos, setListaObjetos] = useState([]);

    const [alerta, setAlerta] = useState({ status: "", message: "" });


    const [objeto, setObjeto] = useState({ _id: 0, nome: "" });

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = async e => {
        e.preventDefault();
        if (editar) {
            const result = await new CRUD().update("carteira", objeto)
            console.log(result);
        } else { // novo ativo
            const carteira = {
                nome: objeto.nome,
            }
            const result = await new CRUD().create("carteira", carteira)
            console.log(result);
        }
        getCarteiras()
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const acaoRemover = async objeto => {
        if (window.confirm("Remover este carteira?")) {
            const result = await new CRUD().delete("carteira", objeto._id)
            console.log(result);
            getCarteiras()
        }
    }

    const getCarteiras = async () => {
        const ativos = await new CRUD().read("carteira")
        console.log(ativos);
        setListaObjetos(ativos)
    }

    useEffect(() => {
        getCarteiras()
    }, []);

    return (
        <CarteiraContext.Provider value={
            {
                listaObjetos, acaoRemover, alerta, setAlerta, objeto, setObjeto,
                editar, setEditar, acaoCadastrar, handleChange
            }
        }>
            <Tabela />
            <Formulario />
        </CarteiraContext.Provider>
    )

}

export default Carteira;