import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext()

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    FeatureProducts: [],
    isSingleProductLoading: false,
    SinglePdroduct: {}
}

let API = "https://api.pujakaitem.com/api/products"

const AppProvider = ({ children }) => {
    

    const [state, dispatch] = useReducer(reducer, initialState);

    const getApi = async (URL) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(URL);
            const Data = await res.data;
            dispatch({ type: "MY_API_DATA", payload: Data })

        } catch (error) {
            dispatch({ type: "API_ERROR" })

        }

    }

    // ==================================================================================
    // API FOR SINGLE PRODUCT
    // ==================================================================================

    const singleProduct = async (URL) => {
        dispatch({type: "Single_Loading"})
        try {
            const res = await axios.get(URL);
            const Data = await res.data;
            dispatch({ type: "SINGLE_PRODUCT_API", payload: Data })

        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})

        }
    }
    useEffect(() => {
        getApi(API);
    }, [])
    return (
        <AppContext.Provider value={{ ...state, singleProduct }}>
            {children}

        </AppContext.Provider>)

}

const useAuth = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useAuth }