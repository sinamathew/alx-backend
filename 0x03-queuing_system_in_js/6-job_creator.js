import kue from 'kue';

// Create a queue
const queue = kue.createQueue();

// Job data
const jobData = {
  phoneNumber: '1234567890',
  message: 'This is a test message'
};

// Create a job in the queue
const job = queue.create('push_notification_code', jobData)
  .save((err) => {
    if (err) {
      console.error('Notification job creation failed:', err);
    } else {
      console.log(`Notification job created: ${job.id}`);
    }
  });

// Event listener for job completion
job.on('complete', () => {
  console.log('Notification job completed');
});

// Event listener for job failure
job.on('failed', () => {
  console.log('Notification job failed');
});
