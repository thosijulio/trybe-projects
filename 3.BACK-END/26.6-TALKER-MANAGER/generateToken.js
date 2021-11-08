// arquivo criado com base em: https://www.ti-enxame.com/pt/javascript/crie-um-token-aleatorio-em-javascript-com-base-nos-detalhes-do-usuario/941136694/
const generateToken = () => (
    Math.random().toString(36).substring(2)
    + Math.random().toString(36).substring(2)
  ).substring(0, 16);

module.exports = generateToken;
