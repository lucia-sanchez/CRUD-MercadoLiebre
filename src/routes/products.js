// ************ Require's ************
const express = require('express');
const router = express.Router();

const {upLoadImage} = require('../middlewares/upLoad')

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
//Entre la ruta y la accion del controlador pongo la variable creada para la ejecucion + single(porque es una sola)+el "name" del input del formulario
router.post('/create', upLoadImage.single('image'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
