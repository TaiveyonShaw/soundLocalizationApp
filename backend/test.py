import mat

# matFile = mat.loadmatfile('./dataset/thestruct_MoreA1N2.mat')
# mat.createarrowdataset(matFile)
test = mat.makeAPIcall("https://api.osf.io/v2/nodes/xnr9f/files/osfstorage")

newData = mat.downloadstructfiles(test['link'][0])
