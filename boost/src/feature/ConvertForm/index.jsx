import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { CurrencySelector } from "./CurrencySelector";

export const ConvertForm = ({ currencyList, onSubmit, buttonLabel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        alignItems="center"
        sx={{ width: "200px" }}
      >
        <TextField
          {...register("countCurrency", { required: true })}
          label="sum"
          type="number"
          sx={{ width: "100%" }}
          error={errors["countCurrency"]}
          helperText={errors["countCurrency"] ? "obligatory field" : ""}
        />
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

        <Button type="submit" variant="outlined">
          {buttonLabel}
        </Button>
      </Box>
    </form>
  );
};
