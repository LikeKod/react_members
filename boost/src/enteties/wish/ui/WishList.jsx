import { Box } from "@mui/material";
import { CurrencyConverter } from "../../../widgets/CurrencyConverter";
import { WishCard } from "./WishCard";

export const WishListCard = ({ currancyRate, items }) => {
  return (
    <Box display="flex" justifyContent='flex-start' flexWrap='wrap' gap={2}>
      {items &&
        items.map((item, index) => {
          const result = CurrencyConverter(
            item.countCurrency,
            currancyRate[item.from],
            currancyRate[item.to]
          );
          return (
            <WishCard
              key={`${index}-${item.from}-${item.countCurrency}`}
              title={title.wishName}
              initialPrice={`${item.countCurrency} ${item.from}`}
              priceInfo={`${item.countCurrency} ${item.from} = ${result.toFixed(
                3
              )} ${item.to}`}
            />
          );
        })}
    </Box>
  );
};
