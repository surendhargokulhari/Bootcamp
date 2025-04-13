const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); 
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});


const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});


app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send(`
    <h2>Image Upload Form</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <label>Select image:</label><br>
      <input type="file" name="image" accept="image/*"><br><br>
      <button type="submit">Upload</button>
    </form>
  `);
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('<h3 style="color:red;">Upload failed: No file uploaded or invalid file type.</h3><a href="/">Try again</a>');
  }

  const { originalname, filename, path: filepath, mimetype, size } = req.file;

  res.send(`
    <h2>Upload Successful!</h2>
    <p><strong>File Name:</strong> ${originalname}</p>
    <p><strong>Stored As:</strong> ${filename}</p>
    <p><strong>Type:</strong> ${mimetype}</p>
    <p><strong>Size:</strong> ${(size / 1024).toFixed(2)} KB</p>
    <p><strong>Preview:</strong></p>
    <img src="/uploads/${filename}" style="max-width:300px;" />
    <br><br>
    <a href="/">Upload another</a>
  `);
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message === 'Only image files are allowed!') {
    res.status(400).send(`<h3 style="color:red;">Upload Error: ${err.message}</h3><a href="/">Go back</a>`);
  } else {
    res.status(500).send(`<h3>Server Error</h3><p>${err.message}</p>`);
  }
});


app.listen(PORT, () => {
  console.log(`🚀 File upload server running at http://localhost:${PORT}`);
});
