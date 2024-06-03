import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CurrencySelector } from "./CurrencySelector";

export const ConvertForm = ({ currencyList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("countCurrency")} label="sum" type="number" />
      <CurrencySelector
        register={{ ...register("from") }}
        label="From"
        currencyList={currencyList}
      />
      <CurrencySelector
        register={{ ...register("to") }}
        label="To"
        currencyList={currencyList}
      />

      <Button type="submit">Convert</Button>
    </form>
  );
};
