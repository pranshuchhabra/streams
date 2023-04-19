const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const ejs = require('ejs');
const port = process.env.PORT || 3000;


app.use(express.json());

app.set('views', path.join('views'));



app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Inside Home page 0");
    res.render('index', { title: "login" });

})


app.get('/login', (req, res) => {
    console.log("Inside Home page 0");
    res.render('index', { title: "login" });

})

// app.get('/ad', (req, res) => {
//     console.log("Inside Home page");
//     res.render('ad', { title: "admin" });

// })


app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));



app.post('/dashboard', (req, res) => {

    const userData = JSON.parse(fs.readFileSync('login-data.json'));

    const user = userData.users.find(u => u.username === req.body.username && u.password === req.body.password);

    if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
    }


    else {

        // let data;
        
        // switch (user.username) {
        //     case 'paras':
        //         data = JSON.parse(fs.readFileSync('user1.json'));
        //         data = JSON.stringify(data);
        //         console.log(data);
                
        //         break;
        //     case 'pranshu':
        //         data = JSON.parse(fs.readFileSync('user2.json'));
        //         console.log(data);
        //         break;
        //     case 'nikhil':
        //         data = JSON.parse(fs.readFileSync('user3.json'));
        //         break;
        //     default:
        //         data = [];

        // }

        // // const userFilepath = '${user.username.json'};
        // // const userTableData = JSON.parse(fs.readFileSync(userFilepath));





        res.render('dashboard');   //,{data:data}
    }


});


// app.get('/data',(req,res)=>{

//     fs.readFile('/user1.json','utf8', (err, data) => {
//         var mydata = data;
//         console.log(mydata);
//         res.status(200).send(mydata)    
//     })

// }
// )





app.listen(3000, () => {
    console.log('Server listening on port 3000');
});