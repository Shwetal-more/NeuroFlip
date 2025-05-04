const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

const sessions = {};

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('join', (code) => {
    socket.join(code);
    console.log(`User ${socket.id} joined session ${code}`);

  });

  socket.on('update-timer', ({ minutes, seconds, isRunning, isBreak, session }) => {
    socket.to(session).emit('receive-timer', { minutes, seconds, isRunning, isBreak });
  });

  socket.on('update-tasks', ({ tasks, session }) => {
    socket.to(session).emit('receive-tasks', tasks);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});