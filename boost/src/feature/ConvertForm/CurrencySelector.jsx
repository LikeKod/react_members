import { MenuItem } from "@mui/base";
import { TextField } from "@mui/material";

// {
//     currencyRate: Array<string>
//     label: string
//     onChange: () => void
// }

export const CurrencySelector = ({ currencyList, label, register }) => {
  return (
    <TextField
      {...register}
      id={id}
      select
      label={label}
      sx={{ width: "150px" }}
      required
      defaultValue={currencyList[0].value}
    >
      {currencyList.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
