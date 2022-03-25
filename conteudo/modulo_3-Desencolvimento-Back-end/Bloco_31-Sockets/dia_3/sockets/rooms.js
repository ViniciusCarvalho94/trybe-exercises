module.exports = (io) => {
const users = [];
  io.on('connection', (socket) => {
    socket.on('joinRoom', ({ username, room }) => {
      socket.join(room);

      socket.emit(
        'serverMessage',
        `Bem vindo ${username} a sala sobre ${room}`
      );

      socket.broadcast
        .to(room)
        .emit('serverMessage', `${username} acabou de entrar na sala`);

      users.push(username)

      socket.on('roomClientMessage', ({ message, room }) => {
        io.to(room).emit('serverMessage', `${username}: ${message}`);
      });
    });
  });
};
