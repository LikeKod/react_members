import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/route";
import Product from "./Product";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  const { list, related } = useSelector(({ products }) => products);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.Home);
    }
  }, [isFetching, isLoading, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;
  }, [data, list.length]);

  return !data ? (
    <section className="preloader">Loading</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Sale" />
    </>
  );
};

export default SingleProduct;
