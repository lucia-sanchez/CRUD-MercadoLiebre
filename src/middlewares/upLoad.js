const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    //El lugar donde voy a guardar el archivo
    destination: (req,file,cb)=>{
        cb(null, 'public/images/products'); 
    },
    //el nombre que le voy a dar el archivo
    filename:(req,file,cb)=>{
        console.log(file)
        const newFilename = 'image'+ Date.now()+ path.extname(file.originalname);
        cb(null, newFilename);
    }
});
//Ejecucion de multer
const upLoadImage = multer({storage})

module.exports = {
    upLoadImage
}