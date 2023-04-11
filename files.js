const fs = require('fs');


// reading files

// Callback functions
fs.readFile('./docs/blog1.txt', (err,data) => {
if(err) {
    console.log(err);
}
console.log(data.toString());

})

// Writing files
fs.writeFile ('./docs/blog1.txt', 'Hello, world', () => {
    console.log("File was written.....");
})



// directories

if(!fs.existsSync('./assets'))
{
    fs.mkdir('./assets', (err) => {
        if(err) console.log(err );
        console.log('folder is created')
    })    
}
else {
    fs.rmdir('./assets', (err) => {
        if(err) console.log(err );
        console.log('folder is removed')
    })    
}


//deleting files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        } 
        console.log('file deleted')
    })
}