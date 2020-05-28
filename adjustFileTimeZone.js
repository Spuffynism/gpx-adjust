const fs = require('fs');

const FILE_ENCODING = 'utf8';

module.exports = (fileName) => {
    fs.readFile(fileName, FILE_ENCODING, (err, data) => {
        if (err) {
            throw err;
        }

        const [name, extension] = fileName.split('.');

        const adjustTimezone = (string) => {
            return string.replace(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/g, m => new Date(new Date(m).valueOf() + 18e6).toISOString());
        };

        const resultFileName = `${name}_adjusted.${extension}`;

        fs.writeFile(resultFileName, adjustTimezone(data), FILE_ENCODING, (err) => {
            if (err) {
                throw err;
            }

            console.log(`adjusted file saved to ${resultFileName}.`);
        });
    });
}