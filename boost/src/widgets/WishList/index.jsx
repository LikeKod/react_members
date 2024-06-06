import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useWishListState } from "../../enteties/wish";
import { WishListCard } from "../../enteties/wish/ui/WishList";
import { ConvertForm } from "../../feature/ConvertForm";
import { currencyService } from "../../shared/api";
import { ModalBase } from "../../shared/ui/ModalBase";
import { useInputState } from "../../shared/util";
import { mapCurrencyRateToLabelValue } from "../CurrencyConverter/lib";

export const WishList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { error, setError, setValue, value } = useInputState();

  const { wishList, saveItem } = useWishListState();

  const { isLoading, data: currancyRate } = useQuery({
    queryKey: ["currencyRate"],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data,
  });

  const onSubmit = useCallback(
    (data) => {
      if (!value) {
        return setError(true);
      }
      saveItem({
        ...data,
        wishName: value,
      });
      return setIsOpen(false);
    },
    [saveItem, setError, value]
  );

  const onAddWhishClick = () => {
    setIsOpen(true);
  };

  const onValueChange = (e) => {
    const targetValue = e.target.value;

    if (targetValue) {
      setError(false);
    }

    return setValue(e.target.value);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Whish List</Typography>
      <Button variant="outlined" color="primary" onClick={onAddWhishClick}>
        Add whish
      </Button>
      <Box padding="16px">
        <WishListCard currancyRate={currancyRate} items={wishList} />
      </Box>
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
