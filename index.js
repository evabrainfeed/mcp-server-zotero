const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // This is important for deployment

// Middleware to automatically parse JSON request bodies
app.use(express.json());

// A simple 'health check' endpoint to see if the server is running
app.get('/', (req, res) => {
  res.send('MCP Server is alive and running!');
});

// The endpoint for your Zotero tool
app.post('/zotero/items', (req, res) => {
  console.log('Received a request for the Zotero tool.');
  console.log('Data received:', req.body);

  // --- Developer To-Do ---
  // In this section, you will add the code to:
  // 1. Get your Zotero API key from a secure environment variable.
  // 2. Make a real API call to the Zotero API (https://api.zotero.org/...)
  // 3. Send back a meaningful response.
  // -----------------------

  // For now, we just send a success message back.
  res.status(200).json({ 
    status: 'success', 
    message: 'Request received by the Zotero tool endpoint.' 
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
