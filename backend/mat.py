import pyarrow as pa
import scipy.io as sc
import requests
import io

# Creates a dictionary of all subject company name
def makeAPIcall(APIurl):
    response = requests.get(APIurl)
    if response.status_code == 200:
        apiResponse = response.json()
        data = apiResponse['data']
        listOfData = [[] for _ in range(3)]

        for i in range(len(data)):
            listOfData[0].append(data[i]['id'])
            listOfData[1].append(data[i]['attributes']['name'])
            listOfData[2].append(data[i]['relationships']['files']['links']['related']['href'])

        extractData = {'id': listOfData[0], 'name': listOfData[1], 'link': listOfData[2]}
        return extractData
    
    else:
        print('Error:', response.status_code)

# Creates a link for all the specific subject files
def createstructlist(structAPI):
    response = requests.get(structAPI)
    if response.status_code == 200:
        apiResponse = response.json()
        data = apiResponse['data']
        listOfData = [[] for _ in range(2)]

        for i in range(len(data)):
            listOfData[0].append(data[i]['links']['download'])
            listOfData[1].append(data[i]['attributes']['name'])

        return listOfData
    
    else:
        print('Error:', response.status_code)

def createsuperstruct(arrowsDataset):
    return arrowsDataset

def downloadstructfile(url):
    response = requests.get(url)
    if response.status_code == 200:
        print("File downloaded successfully.")
        mat_data = io.BytesIO(response.content)
        return sc.loadmat(mat_data)
    else:
        print("Failed to download file.")

# Load .mat file
def loadmatfile(file):
    matFile = sc.loadmat(file)
    structFile = sc.whosmat(file)
    
    structFileName = structFile[0][0]
    structData = matFile[structFileName]

    return structData

def createarrowdataset(structData):
    # Define schema
    schema = pa.schema([
        ('subject', pa.string()),
        ('aid', pa.string()),
        ('room', pa.string()),
        ('cond', pa.string()),
        ('run', pa.int32()),
        ('freqs', pa.list_(pa.float32())),
        ('rawILD', pa.list_(pa.float32())),
        ('normILD', pa.list_(pa.float32())),
        ('rawITD', pa.list_(pa.float32())),
        ('normITD', pa.list_(pa.float32())),
    ])

    # Create lists of tuples for easier iteration
    data_tuples = zip(
        structData['subject'][0],
        structData['aid'][0],
        structData['room'][0],
        structData['cond'][0],
        structData['run'][0],
        structData['freqs'][0],
        structData['rawILD'][0],
        structData['normILD'][0],
        structData['rawITD'][0],
        structData['normITD'][0]
    )

    # Initialize lists to hold data
    data_lists = [[] for _ in range(len(schema))]

    # Iterate over tuples and populate lists
    for i, data_tuple in enumerate(data_tuples):
        if data_tuple[4][0] != 'mean':  
            for j in range(len(data_tuple)):
                data_lists[j].append(data_tuple[j][0])

    # Convert data lists to Arrow arrays
    arrow_arrays = [pa.array(data_list) for data_list in data_lists]

    # Create RecordBatch
    record_batch = pa.RecordBatch.from_arrays(arrow_arrays, schema=schema)

    # Create Table
    table = pa.Table.from_batches([record_batch])

    print(table)
    return table