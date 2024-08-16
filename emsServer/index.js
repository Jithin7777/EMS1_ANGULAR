const jsonServer = require('json-server');
const cors = require('cors');

const emsServer = jsonServer.create();
const middleware = jsonServer.defaults();
const router = jsonServer.router('data.json');

emsServer.use(cors());
emsServer.use(middleware);
emsServer.use(router);

const PORT = 8000;
emsServer.listen(PORT, () => {
    console.log(`EMS SERVER STARTED AT PORT ${PORT}`);
});
