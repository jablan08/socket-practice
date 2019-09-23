const io = require("socket.io")();

const players = {};

io.on("connection", function(socket) {
  socket.on("add-circle", (data) => {
    io.emit("add-circle", data);
  });
  socket.on("clear-circles", () => {
    io.emit("clear-circles");
  });
  socket.on('register-player', function (initials) {
    players[socket.id] = initials;
    io.emit('update-player-list', Object.values(players));
  });
  socket.on('disconnect', function () {
    delete players[socket.id];
    io.emit('update-player-list', Object.values(players));
  });
});



module.exports = io;

