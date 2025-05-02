import { createContext , useState } from "react";
export const OffSetContext = createContext()

export const OffSetProvider = ({children})=>{
    const [offSet, setOffSet] = useState(0);
    return(
        <OffSetContext.Provider value={{offSet,setOffSet}}>
            {children}
        </OffSetContext.Provider>
    )
}