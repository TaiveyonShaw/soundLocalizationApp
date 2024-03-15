import scipy.io

# Load .mat file
def LoadMatFile():
    matFile = scipy.io.loadmat('dataset/thestruct_MoreA1N2.mat')
    structFile = scipy.io.whosmat('dataset/thestruct_MoreA1N2.mat')

    structFileName = structFile[0][0]
    structData = matFile[structFileName]

    # Attributes
    subjectAttributeData = structData['subject'][0]
    aidAttributeData = structData['aid'][0]
    roomAttributeData = structData['room'][0]
    condAttributeData = structData['cond'][0]
    runAttributeData = structData['run'][0]
    azimuthsAttributeData= structData['azimuths'][0]
    freqsAttributeData = structData['freqs'][0]
    rawILDAttributeData = structData['rawILD'][0]
    normILDAttributeData = structData['normILD'][0]
    rawITDAttributeData = structData['rawITD'][0]
    normITDAttributeData = structData['normITD'][0]

    # print(subjectAttributeData)
    
    # Convert into arrows

LoadMatFile()