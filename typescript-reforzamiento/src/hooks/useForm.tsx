import { useState } from "react";

export const useForm = <T extends Object >(formulario: T) => {
  

    const [state, setState] = useState(formulario);

    const onChange = (value: string, campo: keyof T) => {
        setState({
            ...formulario,
            [campo]: value //computar ese valor
        })

    }

    return {
        ...state,
        formulario: state,
        onChange,
    }



}

