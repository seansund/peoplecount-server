# peoplecount-server

Server-side flow for peoplecount application. Communicates with devices via MQTT. The camera device code is available in [peoplecount-camera](https://github.com/seansund/peoplecount-camera).

The server exposes an HTTP request input to initiate the flow. Once started, a new capture instance is added to the database and a message with the new capture_id is published to a command topic so that devices will initiate the capture.

When the device has completed its capture it will publish to an event topic to which the server has subscribed. When a message comes in, the server looks up the capture in the database using the capture_id and updates the total count and counts list with the information from the device.
