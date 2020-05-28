module.exports = (fileName) => {
    if (!fileName) {
        throw new Error('file name missing');
    }

    return fileName;
}