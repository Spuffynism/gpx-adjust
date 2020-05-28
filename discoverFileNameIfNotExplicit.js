const fs = require('fs');
const glob = require('glob');

module.exports = (fileName) => {
    if (fileName !== 'latest') {
        return fileName;
    }

    return glob.sync('*.gpx')
        .reduce((latestFile, currentFile) => {
            const latestFileCreationTime = fs.statSync(latestFile).ctime;
            const currentFileCreationTime = fs.statSync(currentFile).ctime;

            return latestFileCreationTime < currentFileCreationTime
                ? latestFile
                : currentFile;
        });
}