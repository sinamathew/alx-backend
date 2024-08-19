import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// Log connection success
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Log connection errors
client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.message);
});

// Subscribe to the channel
client.subscribe('holberton school channel');

// Handle incoming messages
client.on('message', (channel, message) => {
  if (channel === 'holberton school channel') {
    console.log(message);
    if (message === 'KILL_SERVER') {
      client.unsubscribe('holberton school channel');
      client.quit();
    }
  }
});
