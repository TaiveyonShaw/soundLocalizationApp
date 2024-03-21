from ApiScript import ApiScript

class OsfScript:
    # Compiles all of the API calls and retrieves a Json file
    def retrieveMatDataset():
        matFiles = {}
        serializedJson = {}

        osfData = ApiScript.retrieveOsfLink("https://api.osf.io/v2/nodes/xnr9f/files/osfstorage")

        structList = ApiScript.composeStructList(osfData['link'][0])

        for i in range(len(structList['links'])):
            fileName = structList['names'][i]
            linkAddress = structList['links'][i]

            matFiles[fileName] = ApiScript.loadMatFile(linkAddress, fileName)

        for key in matFiles:
            serializedJson[key] = ApiScript.serializeForJson(matFiles[key])

        print(osfData['name'])
        return serializedJson

OsfScript.retrieveMatDataset()