import axios from 'axios';

const apiStation = axios.create({
    baseURL: `https://apiprevmet3.inmet.gov.br/estacao/proxima`
});

const apiClimate = axios.create({
    baseURL: `https://apiprevmet3.inmet.gov.br/previsao`
});

export {
    apiStation,
    apiClimate
};