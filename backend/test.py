import mat

# matFile = mat.loadmatfile('./dataset/thestruct_MoreA1N2.mat')
# mat.createarrowdataset(matFile)
test = mat.makeAPIcall("https://api.osf.io/v2/nodes/xnr9f/files/osfstorage")

newData = mat.createstructlist(test['link'][0])

for i in range(len(newData[0])):
    testarray = mat.downloadstructfile(newData[0][i])
    break

print(testarray)