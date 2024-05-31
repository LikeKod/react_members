import { MenuItem } from "@mui/base"
import { TextField } from "@mui/material"
import { Box } from "@mui/system"

// {
//     currencyRate: Array<string>
//     label: string
//     onChange: () => void
// }

export const CurrencyRateSelector = ({currencyRate, onChange, label}) => {

    const onHandleChange = (event) => {
        return onChange(event.target.value)
    }


    return (
        <Box component='form' autoComplete="off">
            <TextField
            color="secondary"
          id="outlined-select-currency"
          select
          label={label}
          defaultValue="EUR"
          onChange={onHandleChange}
        >
          {currencyRate.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
    )
}