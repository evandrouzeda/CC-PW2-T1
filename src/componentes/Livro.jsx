import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import LivroContext from "./LivroContext";
import Tabela from "./Tabela";

function Livro() {

    const [listaObjetos, setListaObjetos] = useState(
        localStorage.getItem('LIVROSPWA-AULA/listaobjetos')
        ? JSON.parse(localStorage.getItem('LIVROSPWA-AULA/listaobjetos')) : []);

    const [alerta, setAlerta] = useState( { status: "", message: "" });

    const [sequenciaCodigo, setSequenciaCodigo] = useState(0);

    const [objeto, setObjeto] = useState({id: 0, nome: "", autor: "", ano:""});

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = e => {
        e.preventDefault();
        if (editar) {
            // encontrar o id do objeto a ser editado
            const index = listaObjetos.findIndex(p => p.id === objeto.id);
            // remover o objeto do state para ser editado
            const listaObjetosTemp = listaObjetos.splice(0, index).concat(listaObjetos.splice(index + 1));
            // colocamos de volta no state o objeto 
            const newlistaObjetos = [...listaObjetosTemp, objeto].sort((a, b) => a.id - b.id);
            setListaObjetos(newlistaObjetos);
            setAlerta({ status: "success", message: "Livro editado com sucesso" });
        } else { // novo livro
            if (objeto.id === 0) {
                var idautal = localStorage.getItem('LIVROSPWA-AULA/sequenciaid');
                if (idautal === null){
                    idautal = 0;
                }
                var novoid = Number(idautal) + 1;
                objeto.id = novoid;
                //setSequenciaCodigo(novoid);
                localStorage.setItem('LIVROSPWA-AULA/sequenciaid', novoid);
                setListaObjetos([...listaObjetos, objeto]);
                setAlerta({ status: "success", message: "Livro criado com sucesso" });
            }
        }
    };  
	
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }	

    const acaoRemover = objeto => {
        if (window.confirm("Remover este livro?")){
            const listaObjetosTemp = 
            listaObjetos.filter(p => p.id !== objeto.id);
            setListaObjetos(listaObjetosTemp);
            setAlerta({ status: "success", message: "Livro removido com sucesso!" })     
        }
    }

    useEffect( () => {
        localStorage.setItem('LIVROSPWA-AULA/listaobjetos', JSON.stringify(listaObjetos));
    },[listaObjetos]);

    return (
        <LivroContext.Provider value={
            { listaObjetos, acaoRemover, alerta, setAlerta, objeto, setObjeto, 
                editar, setEditar, acaoCadastrar, handleChange}
        }>
            <Tabela />
            <Formulario/>
        </LivroContext.Provider>
    )

}

export default Livro;