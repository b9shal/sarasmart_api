const multer = require("multer");

const fileExtTypes = ["jpg", "png", "jpeg"];

function fileName(req, file, cb) {
  const datetimestamp = Date.now();
  cb(
    null,
    file.fieldname +
      "-" +
      datetimestamp +
      "." +
      file.originalname.split(".")[file.originalname.split(".").length - 1]
  );
}

const storage = multer.diskStorage({
  destination: "./public/uploads/productImages",
  filename: fileName,
});

const fileUpload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(req, file, cb);
  },
}).array("productImage");

function checkFileType(req, file, cb) {
  let isAnImage = false;

  fileExtTypes.forEach((ext) => {
    if (`image/${ext}` === file.mimetype) isAnImage = true;
  });

  if (isAnImage) {
    console.log("is an image");
    return cb(null, true);
  }

  return cb("Only images are accepted");
}

module.exports = fileUpload;
