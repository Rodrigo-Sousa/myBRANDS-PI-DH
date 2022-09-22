const { check, validationResult} = require ("express-validator");

let checkoutValidate = [
    check('PrimeiroNome')
        .notEmpty(),

    check('UltimoNome')
        .notEmpty(),

    check('Usuario')
        .notEmpty().isLength({min: 5, max: 12}),

    check('Email')
        .notEmpty().isEmail(),

    check('Endereco')
        .notEmpty(),

    check('Numero')
        .notEmpty().isNumeric(),

    check('Cidade')
        .notEmpty(),

    check('Estado')
        .notEmpty(),

    check('Cep')
        .notEmpty().isNumeric(),

    check('NomeCartao')
        .notEmpty(),

    check('numCartao')
        .notEmpty().isNumeric(),

    check('dataVenc')
        .notEmpty().isNumeric(),

    check('CVV')
        .notEmpty().isNumeric(),

];

let checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports= {checkoutValidate , checkRules};