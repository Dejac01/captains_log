require('dotenv').config()
const express = require("express");
const app = express();

const Log = require('./models/log.js');
const mongoose = require('mongoose');

const methodOverride = require('method-override');



// ----------[MiddleWare]
app.set('view engine', 'jsx');
    // ---> This allows your ExpressApp to have a view on browser
app.engine('jsx', require('express-react-views').createEngine());
    // ---> This instantiates the view engine& creates an instance of the view engine created above
app.use(express.urlencoded({extended:false}));
    // --> This parses incoming requests with urlencoded payloads and is based on a middleware called body-parser.
    app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// -----> Instantiates Middleware to be executed during requestCycle.
mongoose.connect ("mongodb+srv://deja-user1:deja456@cluster0.ovscphh.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect(process.env.MONGO_URI,
 { useNewUrlParser: true, useUnifiedTopology: true });

 mongoose.set('strictQuery', true);
 mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// --------------------------------[Routes]
// ----------> [Index]
app.get('/logs', (req, res)=>{
    Log.find({}, (error, allLogs)=>{
        res.render('Index', {
            logs: allLogs
        });
    });
});

// -------------> [New]
app.get('/logs/new', (req, res) => {
    res.render('New');
});


Log.create(req.body, (error, createdLog)=>{
    res.render('Show',{Log: createdLog})
    res.redirect('/logs');
});


// ---- PUT ROUTE

app.put('/logs/:id', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
       console.log(updatedLog)
        res.redirect(`/logs/${req.params.id}`);
    });
});



// --------- Delete
app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');
});
   
    });





app.listen(3000, () => {
    console.log("listening");
  });

