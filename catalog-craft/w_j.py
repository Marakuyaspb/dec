import json

def write(data, filename):
	data = json.dumps(data)
	data = json.load(str(data))