express = require('express'); // create express app
app = express();
const morgan = require('morgan'); //show as when someone connect our server and show the statur exmp: GET / 200 1.034 ms - 27
const mongoose = require('mongoose');
const checkAuth = require('./api/middlewares/checkAuth');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@yoniproject.h4csp.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true

});

mongoose.connection.on('connected', () =>{
    console.log('MongoDB Connected!');

});

const articlesRoutes = require('./api/routes/articles');
const categoryRoutes = require('./api/routes/categories');
const usersRoutes = require('./api/routes/users');

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'))//were the folder with static

app.use(express.json()); //get the post data that we send and turn it to json

app.use(express.urlencoded({
    extended : false
}))//we can send data from x-www-urlencoded and show it on our screen 


app.use((req,res ,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});

    }
    next();
}); 



// app.use((req,res,next) =>{
//     req.on('data', (chank)=>{
//         console.log(chank.toString());
//     });
//     req.on('end' , ()=>{
//         next();
//     })
// })

//Routes
app.use('/articles',articlesRoutes);
app.use('/categories', checkAuth ,categoryRoutes);
app.use('/users',usersRoutes);

// app.get( '/' , (req, res) => {
//     res.status(200).json({
//         message: 'Hello World12'
//     })

// }); // when we send Get -> '/' on url we response with answer Hellow World

// app.post( '/articles' , (req, res) => {
//     res.status(200).json({
//         body: req.body

//     })// get the data from express.json and show ad on the screen

// }); // when we send Post -> '/articles' on url we response with answer 


app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status =404;
    next(error);

    
});

app.use((error,req,res,next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    })

})


module.exports = app;