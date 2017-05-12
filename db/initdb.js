var db = connect('127.0.0.1:27017/peoplecount');


db.createCollection('countcapture');
db.countcapture.createIndex({captureId: 1}, {unique: true});

db.createCollection('countcapturedevice');
db.countcapturedevice.createIndex({captureId: 1, deviceId: 1}, {unique: true});