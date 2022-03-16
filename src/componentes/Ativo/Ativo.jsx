import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import AtivoContext from "./AtivoContext";
import Tabela from "./Tabela";
import CRUD from "../CRUD";

function Ativo() {

    const [listaObjetos, setListaObjetos] = useState([]);

    const [alerta, setAlerta] = useState({ status: "", message: "" });

    //const [sequenciaCodigo, setSequenciaCodigo] = useState(0);

    const [objeto, setObjeto] = useState({ _id: 0, nome: "", distribuicao: "", tipo: "", qtd: 0, carteira: "" });

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = async e => {
        e.preventDefault();
        if (editar) {
            const result = await new CRUD().update("ativo", objeto)
            console.log(result);
        } else { // novo ativo
            const ativo = {
                nome: objeto.nome,
                distribuicao: objeto.distribuicao,
                tipo: objeto.tipo,
                qtd: objeto.qtd,
                carteira: objeto.carteira
            }
            const result = await new CRUD().create("ativo", ativo)
            console.log(result);
        }
        getAtivos()
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const acaoRemover = async objeto => {
        if (window.confirm("Remover este ativo?")) {
            const result = await new CRUD().delete("ativo", objeto._id)
            console.log(result);
            getAtivos()
        }
    }

    const getAtivos = async () => {
        const ativos = await new CRUD().read("ativo")
        console.log(ativos);
        setListaObjetos(ativos)
    }
    useEffect(() => {
        getAtivos()
    }, []);

    return (
        <AtivoContext.Provider value={
            {
                listaObjetos, acaoRemover, alerta, setAlerta, objeto, setObjeto,
                editar, setEditar, acaoCadastrar, handleChange
            }
        }>
            <Tabela />
            <Formulario />
        </AtivoContext.Provider>
    )

}

export default Ativo;