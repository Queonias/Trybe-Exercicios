// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
    const msg =  `A temperatura de Marte é: ${getMarsTemperature()}ºC`;
    setTimeout(() => console.log(msg), messageDelay());
}

// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo