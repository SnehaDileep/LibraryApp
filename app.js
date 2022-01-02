const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');//edited here 2

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",//edited here 6
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",//edited here 6
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//edited here 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express(); //edited here 1


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(cors()); //edited here 7
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





//  app.listen(3000,()=>{ //edited here
//      console.log("Server Ready on 3000");
// });

// edited here 5
 const PORT = process.env.PORT || 3000;
 app.listen(port,()=>console.log(`SEVER RUNNING ON ${PORT}`));