import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from '../../utils/route';

const SingleProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id}) 
    
    useEffect(()=>{
        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.Home)
        }
    }, [isFetching, isLoading, isSuccess])

    return()
}

export default SingleProduct;