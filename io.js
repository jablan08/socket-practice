const io = require("socket.io")();

io.on("connection", function(socket) {
  // socket represent the currently connecting browser
  socket.on("add-circle", (data) => {
    io.emit("add-circle", data);
  });
  socket.on("clear-circles", () => {
    io.emit("clear-circles");
  });
});

module.exports = io;

