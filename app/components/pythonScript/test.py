import scipy.io
import json
import numpy as np

# Load .mat file
mat_contents = scipy.io.loadmat('../../dataset/thestruct_MoreA1N2.mat')

attributes = scipy.io.whosmat('../../dataset/thestruct_MoreA1N2.mat')
    
print(mat_contents)