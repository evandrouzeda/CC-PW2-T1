import { useState } from "react";
import LivroContext from "./LivroContext";
import Tabela from "./Tabela";
import Alert from "./Alert";

function Livro() {

    const [listaObjetos, setListaObjetos] = useState([
        { id: 1, titulo: "React", autor: "Jorge", ano: 2021 },
        { id: 2, titulo: "Java", autor: "Jorge", ano: 2021 },
        { id: 3, titulo: "PHP", autor: "Jorge", ano: 2021 }]);

    const [status, setStatus] = useState([{status: "", msg: ""}])

    const acaoRemover = objeto => {
        if (window.confirm("Remover este livro?")){
            const listaObjetosTemp = listaObjetos.filter(p => p.id !== objeto.id);
            console.log(listaObjetosTemp);
            setStatus({status: "success", msg: "removido com sucesso"})
            setListaObjetos(listaObjetosTemp);
        }
    }



    return (
        <LivroContext.Provider value={
            { listaObjetos, acaoRemover }
        }>
            <Alert status={status} />
            <Tabela />
        </LivroContext.Provider>
    )

}

export default Livro;