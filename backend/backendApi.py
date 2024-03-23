from flask import Flask, jsonify
from script.OsfScript import OsfScript

class BackendApi(Flask):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

app = BackendApi(__name__)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/')
def get_data():
    try:
        return jsonify(OsfScript.retrieveMatDataset())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
