// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({firstName, nationality}) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// Definição da função getUser
const getUser = (callback) => {
    setTimeout(() => {
        const user = {
          firstName: "Ivan",
          lastName: "Ivanovich",
          nationality: "Russian"
        };
        console.log(callback(user));
      }, delay());
    };

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.

getUser(userFullName);
getUser(userNationality);
