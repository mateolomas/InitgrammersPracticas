
import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResLista, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);


    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResLista>('/users', {params: {page: paginaRef.current}});
        if(resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
            
        }
        else {
            alert("No hay mas usuarios");
        }

    

}

const paginaAnterior = () => {
    if(paginaRef.current > 1) {
        paginaRef.current--;
        cargarUsuarios();
    };
}
const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
}

return {
    usuarios,
    paginaAnterior,
    paginaSiguiente
    
}
}