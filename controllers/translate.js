const router = require('express').Router();
const { translate } = require('@vitalets/google-translate-api');
router.post('/', async (req, res) => {
    if (!req.body || !req.body.text) {
        return res.status(400).json({ error: 'Invalid request body. Please provide text to translate.' });
    }

    translate(req.body.text, { to: 'fr' }).then((response) => {
        return res.json({ translation: response.text });
    }).catch((err) => {
        return res.status(500).json({ error: err.message });
    })

})

module.exports = router