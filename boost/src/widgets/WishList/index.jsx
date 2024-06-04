import { Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { currencyService } from "../../shared/api";

export const WishList = () => {
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
  };

  const onAddWhishClick = () => {

  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">
            Whish List
        </Typography>
        <Button variant="outlined" color="primary" onClick={onAddWhishClick}>Add whish</Button>
    </Box>
  )
};
