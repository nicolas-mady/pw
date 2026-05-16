import { Router } from 'express';
import { LoremIpsum } from 'lorem-ipsum';

const router = Router();
const lorem = new LoremIpsum();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/about', (req, res) => {
    res.send('About Page');
});

router.get(/^\/(api|rest)\/.+$/, (req, res) => {
  res.send("Envio de dados da API!");
});

router.get('/usr/:name', (req, res) => {
    res.send('Hi, ' + req.params.name + '!');
});

router.get('/search', (req, res) => {
    res.send('Search: ' + req.query.q);
});

router.get('/redirect', (req, res) => {
    res.redirect("http://expressjs.com");
});

router.get('/json', (req, res) => {
    res.json({ name: 'John', age: 30 });
});

router.get('/download', (req, res) => {
    res.download('package.json');
});

router.get('/lorem/:n', (req, res) => {
    const n = parseInt(req.params.n, 10);
    const text = lorem.generateParagraphs(n);
    res.send(text);
});

export default router;
