from flask import Flask, jsonify
import scipy.io as sc
import mat

app = Flask(__name__)

@app.route('/')
def index():
    return 'Welcome to the Flask Demo App!'

@app.route('/api/data')
def get_data():
    mat_data = sc.loadmat('./dataset/thestruct_MoreA1N2.mat')
    print(mat_data['thestruct_MoreA1N2'])
    # Process and extract data from mat_data
    data = process_data(mat_data)
    return jsonify(mat_data)
    # data = {'message': 'This is data from the API!'}
    # return jsonify(data)

def process_data(mat_data):
    # Process and extract relevant data from mat_data
    return {'data': 'extracted_data'}

if __name__ == '__main__':
    app.run(debug=True)