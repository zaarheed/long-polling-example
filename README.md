# Long Polling Example

This is a very simple NodeJS and VueJS implementation of a SPA to demonstrate long-polling where sockets or incoming HTTP/S requests are not supported.


## Requirements
- Node v6.11.2 or higher (lower versions may work but haven't been tested)


## Getting started

1. Clone the repo
2. Navigate in to the repo using command-line and then install the necessary packages with `npm install`
3. Run the command `node server.js`
4. Open your browser to `localhost/client/index.html`


## The source code explained

The `server.js` contains a simple, single-page configuration for a Node server. It declares a static directory `/client` from which the VueJS-powered `index.html` file is served, and one endpoint `/data`.

The `/data` endpoint is designed to *replicate* what would happen in a real application. And to do this, responses are delayed by a random number of seconds. Imagine each response is a message from a live chat application. To make things interesting, some responses are delayed by 60s to represent periods of inactivity where traditional polling would be wasteful.

In `index.html` the scripts for VueJS are imported and a basic component called `long-polling-app` is delcared. It calls the `/data` endpoint, and when a response is received it is added to the table, and a request is made to the `/data` again. This continues for as long as the `/data` endpoint returns a HTTP success message.