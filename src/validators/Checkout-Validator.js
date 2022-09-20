const { check } = require ("express-validator");

let checkoutValidate = [
    check('Primeiro-Nome')
        .notEmpty(),

    check('Ultimo-Nome')
        .notEmpty(),

    check('Usuario')
        .notEmpty().isLength({min: 5, max: 12}),

    check('Email')
        .notEmpty().isEmail(),

    check('Endereco')
        .notEmpty().isText(),

    check('Numero')
        .notEmpty().isNumeric(),

    check('Cidade')
        .notEmpty(),

    check('Estado')
        .notEmpty(),

    check('Cep')
        .notEmpty().isNumeric().isAlphanumeric('.'),

    check('Nome-Cartao')
        .notEmpty().isNumeric(),

    check('num-Cartao')
        .notEmpty().isNumeric().isCreditCard(),

    check('data-venc')
        .notEmpty().isNumeric(),

    check('CVV')
        .notEmpty().isNumeric(),

]