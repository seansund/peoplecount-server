var db = connect('127.0.0.1:27017/peoplecount');

db.countcapture.insert({
	_id: 1,
	captureDate: new Date(),
	totalCount: 100,
	deviceCount: 2
});

db.countcapturedevice.insert({
	countcapture_id: 1,
	deviceId: 'mini1',
	count: 50
});
db.countcapturedevice.insert({
	countcapture_id: 1,
	deviceId: 'mini2',
	count: 50
});


db.countcapture.insert({
	_id: 2,
	captureDate: new Date(),
	totalCount: 150,
	deviceCount: 3
});

db.countcapturedevice.insert({
	countcapture_id: 2,
	deviceId: 'mini1',
	count: 50
});
db.countcapturedevice.insert({
	countcapture_id: 2,
	deviceId: 'mini2',
	count: 50
});
db.countcapturedevice.insert({
	countcapture_id: 2,
	deviceId: 'mini3',
	count: 50
});


db.countcapture.insert({
	_id: 3,
	captureDate: new Date(),
	totalCount: 90,
	deviceCount: 1
});

db.countcapturedevice.insert({
	countcapture_id: 3,
	deviceId: 'mini1',
	count: 90
});


db.countcapture.insert({
	_id: 4,
	captureDate: new Date(),
	totalCount: 125,
	deviceCount: 3
});

db.countcapturedevice.insert({
	countcapture_id: 4,
	deviceId: 'mini1',
	count: 75
});
db.countcapturedevice.insert({
	countcapture_id: 4,
	deviceId: 'mini2',
	count: 50
});
