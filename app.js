var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/game', function (req, res) {

    res.sendfile('views/game.html');
});
app.use('/home', function (req, res) {
    res.sendfile('views/home.html');
});
app.use('/loading', function (req, res) {
    res.sendfile('views/loading.html');
});
app.use('/result', function (req, res) {
    res.sendfile('views/result.html');
});
// catch 404 and forward to error handler





app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.listen(4200);

console.log("server listening on 3000");

var count = 0;
var Azone0=0,Azone1=0,Azone2=0,Azone3=0,Azone4=0,Azone5=0,Azone6=0,Azone7=0,Azone8=0,Azone9=0,Azone10 = 0;
var Bzone0=0,Bzone1=0,Bzone2=0,Bzone3=0,Bzone4=0,Bzone5=0,Bzone6=0,Bzone7=0,Bzone8=0,Bzone9=0,Bzone10 = 0;
var nowtime=120;
var teamAcount=0;
var teamBcount=0;
var playerlist=[];
var playerlistA=[];
var playerlistB=[];
let nowzone=[0,0,0,0,0,0,0];
Array.prototype.remove = function () {

    var what, a = arguments, L = a.length, ax;

    while (L && this.length) {

        what = a[--L];

        while ((ax = this.indexOf(what)) !== -1) {

            this.splice(ax, 1);

        }

    }

    return this;

};
io.on('connection', function (socket) {
    count++;
    console.log('user connected:' + count);

    socket.emit('users', {number: count});
    socket.broadcast.emit('users', {number: count});
    socket.on('disconnect', function () {
        console.log('user disconnected');
        count--;
        console.log('user connected:' + count);
        socket.broadcast.emit('users', {number: count});
    });

    socket.on('zone0', function (data) {
        console.log("zone0");
        if (data=='A'){
            Azone0++;
        }
        else{
            Bzone0++;
        }
        io.sockets.emit('Apush0', Azone0.toString());
        io.sockets.emit('Bpush0', Bzone0.toString());

        if(Azone0>=Bzone0){
            io.sockets.emit('zonecolor',0,"red");
            nowzone[0]=1;

        }
        else{
            io.sockets.emit('zonecolor',0,"blue");
            nowzone[0]=2;
        }
        io.sockets.emit('nowscore',nowzone);
    });
    socket.on('zone1',function(data){
        console.log("zone1");
        if (data=='A'){
            Azone1++;
        }
        else{
            Bzone1++;
        }
        io.sockets.emit('Apush1',Azone1.toString());
        io.sockets.emit('Bpush1',Bzone1.toString());

        if(Azone1>=Bzone1){
            io.sockets.emit('zonecolor',1,"red");
            nowzone[1]=1;

        }
        else{
            io.sockets.emit('zonecolor',1,"blue");
            nowzone[1]=2;
        }
        io.sockets.emit('nowscore',nowzone);
    });
    socket.on('zone2',function(data){
        console.log("zone2");
        if (data=='A'){
            Azone2++;
        }
        else{
            Bzone2++;
        }
        io.sockets.emit('Apush2',Azone2.toString());
        io.sockets.emit('Bpush2',Bzone2.toString());

        if(Azone2>=Bzone2){
            io.sockets.emit('zonecolor',2,"red");
            nowzone[2]=1;

        }
        else{
            io.sockets.emit('zonecolor',2,"blue");
            nowzone[2]=2;
        }
        io.sockets.emit('nowscore',nowzone);
    });
    socket.on('zone3',function(data){
        console.log("zone3");
        if (data=='A'){
            Azone3++;
        }
        else{
            Bzone3++;
        }
        io.sockets.emit('Apush3',Azone3.toString());
        io.sockets.emit('Bpush3',Bzone3.toString());

        if(Azone3>=Bzone3){
            io.sockets.emit('zonecolor',3,"red");
            nowzone[3]=1;

        }
        else{
            io.sockets.emit('zonecolor',3,"blue");
            nowzone[3]=2;
        }
        io.sockets.emit('nowscore',nowzone);
    });

    socket.on('zone4',function(data){
        console.log("zone4");
        if (data=='A'){
            Azone4++;
        }
        else{
            Bzone4++;
        }
         io.sockets.emit('Apush4',Azone4.toString());
         io.sockets.emit('Bpush4',Bzone4.toString());

        if(Azone4>=Bzone4){
            io.sockets.emit('zonecolor',4,"red");
            nowzone[4]=1;

        }
        else{
            io.sockets.emit('zonecolor',4,"blue");
            nowzone[4]=2;
        }
        io.sockets.emit('nowscore',nowzone);
    });

    socket.on('zone5',function(data){
        console.log("zone5");
        if (data=='A'){
            Azone5++;
        }
        else{
            Bzone5++;
        }
         io.sockets.emit('Apush5',Azone5.toString());
        io.sockets.emit('Bpush5',Bzone5.toString());

        if(Azone5>=Bzone5){
            io.sockets.emit('zonecolor',5,"red");
            nowzone[5]=1;

        }
        else{
            io.sockets.emit('zonecolor',5,"blue");
            nowzone[5]=2;
        }
        io.sockets.emit('nowscore',nowzone);
    });

    socket.on('zone6',function(data){
        console.log("zone6");
        if (data=='A'){
            Azone6++;
        }
        else{
            Bzone6++;
        }
        io.sockets.emit('Apush6',Azone6.toString());
        io.sockets.emit('Bpush6',Bzone6.toString());

        if(Azone6>=Bzone6){
            io.sockets.emit('zonecolor',6,"red");
            nowzone[6]=1;

        }
        else{
            io.sockets.emit('zonecolor',6,"blue");
            nowzone[6]=2;
        }
        io.sockets.emit('nowscore',nowzone);
    });

    socket.on('chooseteam',function (data) {

    });
    socket.on('gotogamepage',function () {
        io.sockets.emit('playing');

    });
    socket.on('leave',function(team,name){
        if(team==1){
            teamAcount--;
            playerlistA.remove(name);
	    console.log("leaveA: "+name);
        }
        else{
            teamBcount--;
            playerlistB.remove(name);
            console.log("leaveB: "+name);
        }

        io.sockets.emit('Amember',playerlistA);
        io.sockets.emit('Bmember',playerlistB);
        io.sockets.emit('refreshking',playerlist[0]);
    });
    var timer = function() {
        if (nowtime != 0) {

            console.log("nowtime--");
            nowtime--;
            io.sockets.emit('timer', nowtime.toString());
        }
        else{
            io.sockets.emit('timeout');
        }


    }
    socket.on('givename',function (data) {
        console.log("data: "+data);
        playerlist.push(data);
        if(teamAcount<=teamBcount){
            playerlistA.push(data);
            if(teamAcount==0&&teamBcount==0){
                socket.emit('roomkey','king');
            }
            teamAcount++;
            console.log("A");
            socket.emit('yourteam','A');


        }
        else{
            teamBcount++;
            playerlistB.push(data);
            socket.emit('yourteam','B');
            console.log("B");
        }
        //io.sockets.emit('getnamelist',playerlist);
        //io.sockets.emit('refreshlist',playerlist);
        io.sockets.emit('Amember',playerlistA);
        io.sockets.emit('Bmember',playerlistB);

    });


    var check=0;
    socket.on('startgame',function () {
        if (check == 0) {

        var timeout = setInterval(timer, 1000);
        var clean = function () {
            if (nowtime == 0) {
                console.log("yes");
                clearInterval(timeout);
                io.sockets.emit('timeout');
            }
        }
        setTimeout(clean, 21000);
    }
    check++;

    });

    socket.on('resultdata',function () {
        var resultlistA=[],resultlistB=[];
        resultlistA.push(Azone0);
        resultlistA.push(Azone1);
        resultlistA.push(Azone2);
        resultlistA.push(Azone3);
        resultlistA.push(Azone4);
        resultlistA.push(Azone5);
        resultlistA.push(Azone6);
        resultlistA.push(Azone7);
        resultlistB.push(Bzone0);
        resultlistB.push(Bzone1);
        resultlistB.push(Bzone2);
        resultlistB.push(Bzone3);
        resultlistB.push(Bzone4);
        resultlistB.push(Bzone5);
        resultlistB.push(Bzone6);
        resultlistB.push(Bzone7);
        socket.emit('data',resultlistA,resultlistB);
        if(Azone0>Bzone0){
            io.sockets.emit('bluewin');
        }
        else{
            io.sockets.emit('redwin');
        }

    });
    socket.on('restart',function () {
        check=0;
        count = 0;
        Azone0=0;Azone1=0;Azone2=0;Azone3=0;Azone4=0;Azone5=0;Azone6=0;Azone7=0;Azone8=0;Azone9=0;Azone10 = 0;
        Bzone0=0;Bzone1=0;Bzone2=0;Bzone3=0;Bzone4=0;Bzone5=0;Bzone6=0;Bzone7=0;Bzone8=0;Bzone9=0;Bzone10 = 0;
        nowtime=120;
        teamAcount=0;
        teamBcount=0;
        playerlist=[];
        playerlistA=[];
        playerlistB=[];
        nowzone=[0,0,0,0,0,0,0];


    });

});

module.exports = app;
