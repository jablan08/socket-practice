const io = require("socket.io")();

io.on("connection", function(socket) {
  socket.on('disconnect', function () {
    delete players[socket.id];
    io.emit('update-player-list', Object.values(players));
  });
  // socket represent the currently connecting browser
  socket.on('register-player', function (initials) {
    // each socket has a unique id
    players[socket.id] = initials;
    io.emit('update-player-list', Object.values(players));
  });
  socket.on("add-circle", (data) => {
    io.emit("add-circle", data);
  });
  socket.on("clear-circles", () => {
    io.emit("clear-circles");
  });
});

var players = {};

module.exports = io;

