const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://bkaes:brad@cluster0-xfrdu.mongodb.net/test?retryWrites=true&w=majority";
app.use(bodyParser.urlencoded({extended: true}))



var db

MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) =>
{
    if (err) return console.log(err)
    db=client.db('starwars_quotes')
    app.listen(4000, () => {
        console.log('listening on 4000')
    })
})


app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) =>
    {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

app.get('/', (req,res) => {
    db.collection('quotes').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('index.ejs', {quotes: results})
    })
})


app.set('view engine', 'ejs')
