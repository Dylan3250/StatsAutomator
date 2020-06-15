const tab_repartition = {
    '0.0': [0.5000, 0.5040, 0.5080, 0.5120, 0.5160, 0.5199, 0.5239, 0.5279, 0.5319, 0.5359],
    '0.1': [0.5398, 0.5438, 0.5478, 0.5517, 0.5557, 0.5596, 0.5636, 0.5675, 0.5714, 0.5753],
    '0.2': [0.5793, 0.5832, 0.5871, 0.5910, 0.5948, 0.5987, 0.6026, 0.6064, 0.6103, 0.6141],
    '0.3': [0.6179, 0.6217, 0.6255, 0.6293, 0.6331, 0.6368, 0.6406, 0.6443, 0.6480, 0.6517],
    '0.4': [0.6554, 0.6591, 0.6628, 0.6664, 0.6700, 0.6736, 0.6772, 0.6808, 0.6844, 0.6879],
    '0.5': [0.6915, 0.6950, 0.6985, 0.7019, 0.7054, 0.7088, 0.7123, 0.7157, 0.7190, 0.7224],
    '0.6': [0.7257, 0.7291, 0.7324, 0.7357, 0.7389, 0.7422, 0.7454, 0.7486, 0.7517, 0.7549],
    '0.7': [0.7580, 0.7611, 0.7642, 0.7673, 0.7704, 0.7734, 0.7764, 0.7794, 0.7823, 0.7852],
    '0.8': [0.7881, 0.7910, 0.7939, 0.7967, 0.7995, 0.8023, 0.8051, 0.8078, 0.8106, 0.8133],
    '0.9': [0.8159, 0.8186, 0.8212, 0.8238, 0.8264, 0.8289, 0.8315, 0.8340, 0.8365, 0.8389],
    '1.0': [0.8413, 0.8438, 0.8461, 0.8485, 0.8508, 0.8531, 0.8554, 0.8577, 0.8599, 0.8621],
    '1.1': [0.8643, 0.8665, 0.8686, 0.8708, 0.8729, 0.8749, 0.8770, 0.8790, 0.8810, 0.8830],
    '1.2': [0.8849, 0.8869, 0.8888, 0.8907, 0.8925, 0.8944, 0.8962, 0.8980, 0.8997, 0.9015],
    '1.3': [0.9032, 0.9049, 0.9066, 0.9082, 0.9099, 0.9115, 0.9131, 0.9147, 0.9162, 0.9177],
    '1.4': [0.9192, 0.9207, 0.9222, 0.9236, 0.9251, 0.9265, 0.9279, 0.9292, 0.9306, 0.9319],
    '1.5': [0.9332, 0.9345, 0.9357, 0.9370, 0.9382, 0.9394, 0.9406, 0.9418, 0.9429, 0.9441],
    '1.6': [0.9452, 0.9463, 0.9474, 0.9484, 0.9495, 0.9505, 0.9515, 0.9525, 0.9535, 0.9545],
    '1.7': [0.9554, 0.9564, 0.9573, 0.9582, 0.9591, 0.9599, 0.9608, 0.9616, 0.9625, 0.9633],
    '1.8': [0.9641, 0.9649, 0.9656, 0.9664, 0.9671, 0.9678, 0.9686, 0.9693, 0.9699, 0.9706],
    '1.9': [0.9713, 0.9719, 0.9726, 0.9732, 0.9738, 0.9744, 0.9750, 0.9756, 0.9761, 0.9767],
    '2.0': [0.9772, 0.9778, 0.9783, 0.9788, 0.9793, 0.9798, 0.9803, 0.9808, 0.9812, 0.9817],
    '2.1': [0.9821, 0.9826, 0.9830, 0.9834, 0.9838, 0.9842, 0.9846, 0.9850, 0.9854, 0.9857],
    '2.2': [0.9861, 0.9864, 0.9868, 0.9871, 0.9875, 0.9878, 0.9881, 0.9884, 0.9887, 0.9890],
    '2.3': [0.9893, 0.9896, 0.9898, 0.9901, 0.9904, 0.9906, 0.9909, 0.9911, 0.9913, 0.9916],
    '2.4': [0.9918, 0.9920, 0.9922, 0.9925, 0.9927, 0.9929, 0.9931, 0.9932, 0.9934, 0.9936],
    '2.5': [0.9938, 0.9940, 0.9941, 0.9943, 0.9945, 0.9946, 0.9948, 0.9949, 0.9951, 0.9952],
    '2.6': [0.9953, 0.9955, 0.9956, 0.9957, 0.9959, 0.9960, 0.9961, 0.9962, 0.9963, 0.9964],
    '2.7': [0.9965, 0.9966, 0.9967, 0.9968, 0.9969, 0.9970, 0.9971, 0.9972, 0.9973, 0.9974],
    '2.8': [0.9974, 0.9975, 0.9976, 0.9977, 0.9977, 0.9978, 0.9979, 0.9979, 0.9980, 0.9981],
    '2.9': [0.9981, 0.9982, 0.9982, 0.9983, 0.9984, 0.9984, 0.9985, 0.9985, 0.9986, 0.9986],
    '3.0': [0.99865, 0.99869, 0.99874, 0.99878, 0.99882, 0.99886, 0.99889, 0.99893, 0.99896, 0.99900],
    '3.1': [0.99903, 0.99906, 0.99910, 0.99913, 0.99916, 0.99918, 0.99921, 0.99924, 0.99926, 0.99929],
    '3.2': [0.99931, 0.99934, 0.99936, 0.99938, 0.99940, 0.99942, 0.99944, 0.99946, 0.99948, 0.99950],
    '3.3': [0.99952, 0.99953, 0.99955, 0.99957, 0.99958, 0.99960, 0.99961, 0.99962, 0.99964, 0.99965],
    '3.4': [0.99966, 0.99968, 0.99969, 0.99970, 0.99971, 0.99972, 0.99973, 0.99974, 0.99975, 0.99976],
    '3.5': [0.99977, 0.99978, 0.99978, 0.99979, 0.99980, 0.99981, 0.99981, 0.99982, 0.99983, 0.99983],
    '3.6': [0.99984, 0.99985, 0.99985, 0.99986, 0.99986, 0.99987, 0.99987, 0.99988, 0.99988, 0.99989],
    '3.7': [0.99989, 0.99990, 0.99990, 0.99990, 0.99991, 0.99991, 0.99992, 0.99992, 0.99992, 0.99992],
    '3.8': [0.99993, 0.99993, 0.99993, 0.99994, 0.99994, 0.99994, 0.99994, 0.99995, 0.99995, 0.99995],
    '3.9': [0.99995, 0.99995, 0.99996, 0.99996, 0.99996, 0.99996, 0.99996, 0.99996, 0.99997, 0.99997],
    '4.0': [0.99997, 0.99997, 0.99997, 0.99997, 0.99997, 0.99997, 0.99998, 0.99998, 0.99998, 0.99998]
};

const tab_student = {
    //   0.10    0.05   0.025   0.01    0.005
    '1': [3.078, 6.314, 12.706, 31.821, 63.65],
    '2': [1.886, 2.920, 4.303, 6.965, 9.925],
    '3': [1.638, 2.353, 3.182, 4.541, 5.841],
    '4': [1.533, 2.132, 2.776, 3.747, 4.604],
    '5': [1.476, 2.015, 2.571, 3.365, 4.032],
    '6': [1.440, 1.943, 2.447, 3.143, 3.707],
    '7': [1.415, 1.895, 2.365, 2.998, 3.499],
    '8': [1.397, 1.860, 2.306, 2.896, 3.355],
    '9': [1.383, 1.833, 2.262, 2.821, 3.250],
    '10': [1.372, 1.812, 2.228, 2.764, 3.169],
    '11': [1.363, 1.796, 2.201, 2.718, 3.106],
    '12': [1.356, 1.782, 2.179, 2.681, 3.055],
    '13': [1.350, 1.771, 2.160, 2.650, 3.012],
    '14': [1.345, 1.761, 2.145, 2.624, 2.977],
    '15': [1.341, 1.753, 2.131, 2.602, 2.947],
    '16': [1.337, 1.746, 2.210, 2.583, 2.921],
    '17': [1.333, 1.740, 2.110, 2.567, 2.898],
    '18': [1.330, 1.734, 2.101, 2.552, 2.878],
    '19': [1.328, 1.729, 2.093, 2.539, 2.861],
    '20': [1.325, 1.725, 2.086, 2.528, 2.845],
    '21': [1.323, 1.721, 2.080, 2.518, 2.831],
    '22': [1.321, 1.717, 2.074, 2.508, 2.819],
    '23': [1.319, 1.714, 2.068, 2.500, 2.807],
    '24': [1.318, 1.711, 2.064, 2.492, 2.797],
    '25': [1.316, 1.708, 2.060, 2.485, 2.787],
    '26': [1.315, 1.706, 2.056, 2.479, 2.779],
    '27': [1.314, 1.793, 2.052, 2.473, 2.771],
    '28': [1.313, 1.701, 2.048, 2.467, 2.763],
    '29': [1.311, 1.699, 2.045, 2.462, 2.756],
    '30': [1.310, 1.697, 2.042, 2.457, 2.750],
    '40': [1.303, 1.684, 2.021, 2.423, 2.704],
    '60': [1.296, 1.671, 2.000, 2.390, 2.660],
    '120': [1.289, 1.658, 1.980, 2.358, 2.617],
    '–': [1.282, 1.645, 1.960, 2.326, 2.576]
};
