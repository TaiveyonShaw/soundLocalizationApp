import scipy.io as sc
import requests
import io

class ApiScript:
    # Creates a dictionary of all subject company name
    def retrieveOsfLink(APIurl):
        response = requests.get(APIurl)

        if response.status_code == 200:
            apiResponse = response.json()
            data = apiResponse['data']
            listOfData = [[] for _ in range(2)]

            for i in range(len(data)):
                listOfData[0].append(data[i]['attributes']['name'])
                listOfData[1].append(data[i]['relationships']['files']['links']['related']['href'])

            return {'name': listOfData[0], 'link': listOfData[1]}
        else:
            print('Error:', response.status_code)

    # Creates a link for all the specific subject files
    def composeStructList(structAPI):
        fileDict = {'links': [], 'names': []}

        while structAPI:
            response = requests.get(structAPI)

            if response.status_code == 200:
                apiResponse = response.json()
                data = apiResponse['data']

                for i in range(len(data)):
                    fileDict['links'].append(data[i]['links']['download'])
                    fileDict['names'].append(data[i]['attributes']['name'])

            else:
                return 'Error:', response.status_code
            
            structAPI = apiResponse['links']['next']
        
        return fileDict

    def loadMatFile(url, filename):
        response = requests.get(url)
        
        if response.status_code == 200:
            print("File downloaded successfully.")

            mat_data = io.BytesIO(response.content)
            filename = filename.replace(".mat", "")

            return sc.loadmat(mat_data)[filename]
        else:
            print("Failed to download file.")

    def serializeForJson(matFile):
        
        matDict = {
            "subject": [],
            "aid": [],
            "room": [],
            "cond": [],
            "run": [],
            "azimuths": [],
            "frequency": [],
            "rawILD": [],
            "normILD": [],
            "rawITD": [],
            "normITD": []
        }

        for i in range(len(matFile['subject'][0])):
            matDict['subject'].append(str(matFile['subject'][0][i][0]))
            matDict['aid'].append(str(matFile['aid'][0][i][0]))
            matDict['room'].append(str(matFile['room'][0][i][0]))
            matDict['cond'].append(str(matFile['cond'][0][i][0]))
            matDict['run'].append(str(matFile['run'][0][i][0]))
            matDict['azimuths'].append([-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75])
            matDict['frequency'].append(matFile['freqs'][0][i].tolist())
            matDict['rawILD'].append(matFile['rawILD'][0][i].tolist())
            matDict['normILD'].append(matFile['normILD'][0][i].tolist())
            matDict['rawITD'].append(matFile['rawITD'][0][i].tolist())
            matDict['normITD'].append(matFile['normITD'][0][i].tolist())

        return matDict