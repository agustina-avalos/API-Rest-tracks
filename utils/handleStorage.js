const multer = require("multer");

//multer utiliza el storage como un middleware
const storage = multer.diskStorage({
    ///me devuelve la ruta en la que guardo el archivo
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/../storage`);
      },
    //para que no se sobreescriban los nombres de los archicos iguales, asigna nombre al archivo
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename);
      },
})

const upload = multer({ storage });

module.exports = {upload}