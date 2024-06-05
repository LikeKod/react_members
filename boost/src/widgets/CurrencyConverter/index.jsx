import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ConvertForm } from "../../feature/ConvertForm";
import { currencyService } from "../../shared/api";
import { mapCurrencyRateToLabelValue } from "./lib/mapper";

export const CurrencyConverter = () => {
  const [converterResult, setConverterResult] = useState(null);

  const { isLoading, data: currancyRate } = useQuery({
    queryKey: ["currencyRate"],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data,
  });

  const onSubmit = (data) => {
    const result = converterResult(
      data.countCurrency,
      currancyRate[data.from],
      currancyRate[data.to]
    );

    return setConverterResult(
      `${data.countCurrency} ${data.from} = ${result.toFixed(3)} ${data.to}`
    );
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Currency Converter</Typography>

      <Box sx={{ padding: "16px" }}>
        <ConvertForm
          currencyList={mapCurrencyRateToLabelValue(data)}
          onSubmit={onSubmit}
          buttonLabel='Convert'
        />
      </Box>
      <Box sx={{ padding: "16px", minHeight: '64px' }}>
        {converterResult && (
          <Typography variant="h5">{converterResult}</Typography>
        )}
      </Box>
    </Box>
  );
};
