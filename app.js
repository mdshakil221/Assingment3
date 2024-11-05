const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());
app.use('/blog', blogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
});