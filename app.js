const express=require('express');
const app=express();
const path=require('path');
const bodyParser = require('body-parser')
const methodOverride=require('method-override')
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride('_method'))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    console.log(data)
    res.status(200).render('home',{data});
});
app.get('/add',(req,res)=>{
    res.status(200).render('add');
});
app.post('/',(req,res)=>{
    let {username}=req.body;
    id=uuidv4();
    data.push({id,username});
    res.redirect('/');
});
app.get('/:id',(req,res)=>{
    let id=(req.params.id);
    console.log(id);
    let uniqueData = data.find(item => item.id === id);
    console.log(uniqueData);
    res.status(200).render('one',{uniqueData});
});
app.get('/edit/:id',(req,res)=>{
    let id=(req.params.id);
    let uniqueData=data.find(item => item.id===id);
    res.status(200).render('edit',{uniqueData});
})
app.patch('/:id',(req,res)=>{
    let id=(req.params.id);
    let {username}=req.body;
    data=data.filter(item => item.id!=id);
    data.push({id,username});
    let uniqueData={id,username};
    let url='http://127.0.0.1:80/'+id.toString();
    res.redirect(url);
})
app.delete('/:id',(req,res)=>{
    let id =(req.params.id);
    data=data.filter(item=>item.id !== id);
    res.redirect('/');
})
app.listen(80,()=>{
    console.log('Server Started Sir\nHope you enjoy it.');
})


let data=[
    {
        id:uuidv4(),
        username:'chandra'
    },{
        id:uuidv4(),
        username:'pawan'
    }
]
