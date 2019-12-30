const axios = require("axios");

const servers = [
    {
        name: "Server 1",
        url: "http://localhost:4001",
        developer: {
            name: process.env.DELELOPER_NAME,
            telephone: process.env.DELELOPER_CELLPHONE_NUMBER
        }
    },
    {
        name: "Server 2",
        url: "http://localhost:4002",
        developer: {
            name: process.env.DELELOPER_NAME,
            telephone: process.env.DELELOPER_CELLPHONE_NUMBER
        }
    }
];

setInterval(() => {
    for (const server of servers) {
        axios({
            url: server.url,
            method: "get"
        }).then((response) => {
            console.log(`${server.name} is online`);
        }).catch(() => {
            console.warn(`${server.name} is offline`)
        });
    }

    console.log("Verificação concluida")
}, 1000)


