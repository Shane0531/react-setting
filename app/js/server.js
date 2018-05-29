import express from 'express'
import path from 'path'

const app = express()

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../../public'));
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(path.join(__dirname, '../../','public')));

app.get('/',function(req,res){
  res.render('index.html')
});

app.listen(8888, () => {
  console.log('Express is listening on port : ', 8888);
})