var db = connect('127.0.0.1:27017/peoplecount');

db.countcapture.drop();
db.createCollection('countcapture');

db.countcapturedevice.drop();
db.createCollection('countcapturedevice');
db.countcapturedevice.createIndex({countcapture_id: 1, deviceId: 1}, {unique: true});