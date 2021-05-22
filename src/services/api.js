import axios from 'axios'

const UniCurrency = () => {
    return axios.get('https://api.coingecko.com/api/v3/simple/price?ids=uniswap&vs_currencies=brl');
}

export default UniCurrency;