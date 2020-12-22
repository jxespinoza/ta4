const {Router}=require('express');
const {getElectrodomestico, getCocina, getFridge } = require('../controllers/Controlador');
const router = Router();


router.route('/electrodomestico')
    .get(getElectrodomestico)
    

router.route('/cocina')
    .get(getCocina);

router.route('/refrigeradora')
    .get(getFridge);

module.exports = router



