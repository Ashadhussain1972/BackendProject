import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cd(null, './public/temp');
    },
    filename: function (req, file, cb) {
        cd(null, file.originalname);
    }
});

export const upload = multer({
    storage,
})