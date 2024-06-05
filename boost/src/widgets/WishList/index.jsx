import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ConvertForm } from "../../feature/ConvertForm";
import { currencyService } from "../../shared/api";
import { ModalBase } from "../../shared/ui/ModalBase";
import { useInputState } from "../../shared/util";
import { mapCurrencyRateToLabelValue } from "../CurrencyConverter/lib";

export const WishList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { error, setError, setValue, value } = useInputState();

  const { isLoading, data: currancyRate } = useQuery({
    queryKey: ["currencyRate"],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data,
  });

  const onSubmit = (data) => {
    if (!value) {
      return setError(true);
    }

    const result = converterResult(
      data.countCurrency,
      currancyRate[data.from],
      currancyRate[data.to]
    );
  };

  const onAddWhishClick = () => {
    setIsOpen(true);
  };

  const onValueChange = (e) => {

    const targetValue = e.target.value

    if(targetValue) {
      setError(false)
    }

    return setValue(e.target.value)
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Whish List</Typography>
      <Button variant="outlined" color="primary" onClick={onAddWhishClick}>
        Add whish
      </Button>
      <ModalBase
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="describe you wish"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding={2}
          gap={2}
        >
          <TextField
            label="Name wish"
            value={value}
            autoComplete="off"
            onChange={onValueChange}
            type="text"
            sx={{ width: "200px" }}
            error={error}
            helperText={error ? "obligatory field" : ""}
          />
          <ConvertForm
            onSubmit={onSubmit}
            currencyList={mapCurrencyRateToLabelValue(currancyRate)}
            buttonLabel="Save"
          />
        </Box>
      </ModalBase>
    </Box>
  );
};
