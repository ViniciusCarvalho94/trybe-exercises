module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit(
      'serverMessage',
      'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.'
    );

    socket.broadcast.emit(
      'serverMessage',
      `Existem ${socket.client.conn.server.clientsCount} usuários conectados`
    );

    socket.on('clientMessage', (message) => {
      console.log(`Mensagem ${message}`);
      io.emit('serverMessage', message);
    });

    socket.on('disconnect', () => {
      socket.broadcast.emit(
        'serverMessage',
        `Existem ${socket.client.conn.server.clientsCount} usuários conectados`
      );
    });
  });
};