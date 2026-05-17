const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/util/text/lowercase', (req, res) => {
    const { input } = req.body;

    if (typeof input !== 'string') {
        return res.status(400).json({ error: "O campo 'input' deve ser uma string." });
    }

    res.json({
        action: "lowercase",
        input: input,
        output: input.toLowerCase()
    });
});

app.post('/util/text/uppercase', (req, res) => {
    const { input } = req.body;

    if (typeof input !== 'string') {
        return res.status(400).json({ error: "O campo 'input' deve ser uma string." });
    }

    res.json({
        action: "uppercase",
        input: input,
        output: input.toUpperCase()
    });
});

app.get('/util/number/minimum', (req, res) => {
    const queryInput = req.query.input;

    if (!queryInput) {
        return res.status(400).json({ error: "O parâmetro de consulta 'input' é obrigatório." });
    }

    const arrayInput = queryInput.split(',');
    const numeros = arrayInput.map(Number);
    const menorNumero = Math.min(...numeros);

    res.json({
        action: "minimum",
        input: arrayInput,
        output: menorNumero
    });
});

app.get('/util/number/maximum', (req, res) => {
    const queryInput = req.query.input;

    if (!queryInput) {
        return res.status(400).json({ error: "O parâmetro de consulta 'input' é obrigatório." });
    }

    const arrayInput = queryInput.split(',');
    const numeros = arrayInput.map(Number);
    const maiorNumero = Math.max(...numeros);

    res.json({
        action: "maximum",
        input: arrayInput,
        output: maiorNumero
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
