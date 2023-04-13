const express = require('express');
 // express app

 const app = express();

 // Listen for request

 app.listen(3001);

 app.get('/', (req,res) => {
//  res.send('<p>home page</p>');

res.sendFile('./views/index.html', { root: __dirname})
 // Routing and html
 });

 app.get('/about', (req,res) => {
    // res.send('<p>about page</p>');
    // Routing and html
    res.sendFile('./views/about.html', { root: __dirname})
});

app.get('/about-us', (req,res) => {
    // res.send('<p>about page</p>');
    // Routing and html
    res.redirect('/about');
    res.sendFile('./views/about.html', { root: __dirname})
});

// 404 page
app.use((req,res) => {
    res.sendFile('./views/404.html', { root: __dirname})
})

