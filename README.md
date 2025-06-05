# Event Logger API

A simple Express.js server that provides event logging functionality with CORS support.

## Features

- **Event Logging**: Log events with timestamps and custom data
- **CORS Support**: Cross-Origin Resource Sharing enabled for web applications
- **RESTful API**: Clean API endpoints for event management
- **JSON Support**: Handle JSON request/response data
- **Lightweight**: Minimal dependencies for fast performance

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **CORS**: Cross-Origin Resource Sharing middleware

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harshitabansal26/looppracticetask.git
   cd looppracticetask
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```

The server will start on `http://localhost:3000`

## API Endpoints

### GET /
- **Description**: Health check endpoint
- **Response**: Welcome message
- **Example**:
  ```bash
  curl http://localhost:3000/
  ```

### POST /log-event
- **Description**: Log a new event
- **Request Body**: JSON object with event data
- **Response**: Confirmation with timestamp
- **Example**:
  ```bash
  curl -X POST http://localhost:3000/log-event \
    -H "Content-Type: application/json" \
    -d '{"event": "user_login", "userId": "123", "details": "User logged in successfully"}'
  ```

### GET /events
- **Description**: Retrieve all logged events
- **Response**: Array of all events with timestamps
- **Example**:
  ```bash
  curl http://localhost:3000/events
  ```

## Project Structure

```
event-logger/
├── index.js           # Main server file
├── package.json       # Project dependencies and scripts
├── package-lock.json  # Exact dependency versions
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

## Usage Examples

### Logging an Event
```javascript
fetch('http://localhost:3000/log-event', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    event: 'button_click',
    page: 'homepage',
    userId: 'user123'
  })
});
```

### Retrieving Events
```javascript
fetch('http://localhost:3000/events')
  .then(response => response.json())
  .then(events => console.log(events));
```

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Running in Development
```bash
# Install dependencies
npm install

# Start the server
node index.js
```

### Adding New Features
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## Configuration

The server runs on port 3000 by default. You can modify this in the `index.js` file:

```javascript
const PORT = process.env.PORT || 3000;
```

## CORS Configuration

CORS is enabled for all origins. For production, consider restricting origins:

```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com']
}));
```

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Author**: Harshita Bansal
- **GitHub**: [@Harshitabansal26](https://github.com/Harshitabansal26)
- **Repository**: [looppracticetask](https://github.com/Harshitabansal26/looppracticetask)

## Acknowledgments

- Built with Express.js framework
- CORS middleware for cross-origin support
- Part of Loop AI practice tasks
