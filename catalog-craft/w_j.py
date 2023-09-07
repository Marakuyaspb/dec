import json

def write(data, filename):
	data = json.dumps(data)
	data = json.load(str(data))
	with open(filename, 'w', encoding = 'utf-8') as file:
		json.dump(data, file, indent = 4)


data = 'products_norm.json'

write(data)