const io = require("socket.io")();

io.on("connection", function(socket) {
  // socket represent the currently connecting browser
  socket.on("add-circle", (data) => {
    io.emit("add-circle", data);
  });
});

module.exports = io;

