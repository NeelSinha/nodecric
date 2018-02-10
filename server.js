var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var mysql          =         require('mysql');
var Sync           =         require('sync');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
con.query("use auc");
app.get('/',function(req,res){
  res.sendfile("index.html");
});app.get('/style.css',function(req,res){
  res.sendfile("style.css");
});
app.post('/login',function(req,res){
  var team= req.body.team;
  var q = "select distinct First_Name , Surname , Specialism , Country  , Sold_Price from Auc where " + team + " = 'Sold'" ;
  con.query( q , function(err, rows, fields) { res.send(rows) ; }) ;

});

Sync(app.post('/option',function(req,res){
  var opt =  req.body.opt;
  var s = ' '
  var q = "select distinct First_Name , Surname  from Auc where CSK  = 'Sold' AND Specialism = '" +opt + "'" ;

  con.query( q , function(err, rows, fields) {
    var f = JSON.parse(JSON.stringify(rows));
    s = s + '<tr> <th> CSK : </th> <td>' ;
    for(i = 0 ; f[i] ; i++)
    {
      s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
    }
    s = s+'</td></tr>';
    console.log(s); }) ;

    var q = "select distinct First_Name , Surname  from Auc where RCB  = 'Sold' AND Specialism = '" +opt + "'" ;

    con.query( q , function(err, rows, fields) {
      var f = JSON.parse(JSON.stringify(rows));
      s = s + '<tr> <th> RCB : </th> <td>' ;
      for(i = 0 ; f[i] ; i++)
      {
        s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
      }
      s = s+'</td></tr>';
      console.log(s); }) ;
      var q = "select distinct First_Name , Surname  from Auc where RR  = 'Sold' AND Specialism = '" +opt + "'" ;

      con.query( q , function(err, rows, fields) {
        var f = JSON.parse(JSON.stringify(rows));
        s = s + '<tr> <th> RR : </th> <td>' ;
        for(i = 0 ; f[i] ; i++)
        {
          s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
        }
        s = s+'</td></tr>';
        console.log(s); }) ;
        var q = "select distinct First_Name , Surname  from Auc where DD  = 'Sold' AND Specialism = '" +opt + "'" ;

        con.query( q , function(err, rows, fields) {
          var f = JSON.parse(JSON.stringify(rows));
          s = s + '<tr> <th> DD : </th> <td>' ;
          for(i = 0 ; f[i] ; i++)
          {
            s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
          }
          s = s+'</td></tr>';
          console.log(s); }) ;
          var q = "select distinct First_Name , Surname  from Auc where SRH  = 'Sold' AND Specialism = '" +opt + "'" ;

          con.query( q , function(err, rows, fields) {
            var f = JSON.parse(JSON.stringify(rows));
            s = s + '<tr> <th> SRH : </th> <td>' ;
            for(i = 0 ; f[i] ; i++)
            {
              s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
            }
            s = s+'</td></tr>';
            console.log(s); }) ;
            var q = "select distinct First_Name , Surname  from Auc where MI  = 'Sold' AND Specialism = '" +opt + "'" ;

            con.query( q , function(err, rows, fields) {
              var f = JSON.parse(JSON.stringify(rows));
              s = s + '<tr> <th> MI : </th> <td>' ;
              for(i = 0 ; f[i] ; i++)
              {
                s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
              }
              s = s+'</td></tr>';
              console.log(s); }) ;
              var q = "select distinct First_Name , Surname  from Auc where KXIP  = 'Sold' AND Specialism = '" +opt + "'" ;

              con.query( q , function(err, rows, fields) {
                var f = JSON.parse(JSON.stringify(rows));
                s = s + '<tr> <th> KXIP : </th> <td>' ;
                for(i = 0 ; f[i] ; i++)
                {
                  s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
                }
                s = s+'</td></tr>';
                console.log(s); }) ;
    var q = "select distinct First_Name , Surname  from Auc where KKR  = 'Sold' AND Specialism = '" +opt + "'" ;

    con.query( q , function(err, rows, fields) {
      var f = JSON.parse(JSON.stringify(rows));
      s = s + '<tr> <th> KKR : </th> <td>';
      for(i = 0 ; f[i] ; i++)
      {
        s = s + JSON.stringify(f[i].First_Name).replace(/^\"+|\"+$/g, '') + " " + JSON.stringify(f[i].Surname).replace(/^\"+|\"+$/g, '') + " , " ;
      }
      s = s+'</td></tr>';
      console.log(s);
      res.send(s) ; }) ;

}));
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
