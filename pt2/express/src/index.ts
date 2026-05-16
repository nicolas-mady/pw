import express from 'express';
import path from 'path';
// import morgan from 'morgan';

import validateEnv from './utils/validateEnv.ts';
import logger from './middlewares/logger.ts';
import router from './router/router.ts';

const app = express();
const env = validateEnv();
const port = env.PORT;
const publicPath = path.join(process.cwd(), 'public');

// app.use(morgan('combined'));
app.use(logger(env.LOGGER_TYPE, env.LOGGER_OUTPUT));

app.use(router);

router.use("/img", express.static(path.join(publicPath, 'img')));

router.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, (): void => {
    console.log(`Example app listening at http://localhost:${port}`);
});
