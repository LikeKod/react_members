import { Environments } from '../util';

const createCurrencyService = () => {

    return {
        getCurrency() {
            return fetch(`https://api.exchangeratesapi.io/latest${Environments}`)
            .then(response => response.json())
        }
    }
};

export const currencyService = createCurrencyService();