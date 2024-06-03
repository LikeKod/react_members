import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ConvertForm } from "../../feature/ConvertForm";
import { currencyService } from "../../shared/api";
import { mapCurrencyRateToLabelValue } from "./lib/mapper";

export const CurrencyConverter = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["currencyRate"],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography variant="h2">Currency Converter</Typography>

      <Box display="flex" gap={1}>
        <ConvertForm currencyList={mapCurrencyRateToLabelValue(data)} />
      </Box>
    </Box>
  );
};
