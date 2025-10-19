const fs = require("fs");
const path = require("path");

// Files to skip
const skipFiles = ["filesOrganizer.js", "package.json"];

// Printing Directory
console.log(__dirname);

// Reading the directory
fs.readdir(__dirname, (error, files) => {
    if (error) return console.log("Error reading directory:", error);

    // Printing all files in the folder
    console.log("Files in this folder:\n", files);

    // Scanning and making folders
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // 🔒 Skip these files
        if (skipFiles.includes(file)) continue;

        fs.stat(path.join(__dirname, file), (err, stats) => {
            if (!err && stats.isFile()) {
                const folderName = path.extname(file).slice(1);
                if (folderName) {
                    const folderPath = path.join(__dirname, folderName);
                    if (!fs.existsSync(folderPath)) {
                        fs.mkdirSync(folderPath);
                        console.log(`"${folderName}" folder created successfully!`);
                    }
                }
            }
        });
    }
});

// Moving files into their respective folders
setTimeout(() => {
    fs.readdir(__dirname, (error, files1) => {
        if (error) return console.log("Error reading directory:", error);

        for (let i = 0; i < files1.length; i++) {
            const file1 = files1[i];

            // 🔒 Skip these files
            if (skipFiles.includes(file1)) continue;

            const fullPath1 = path.join(__dirname, file1);

            fs.stat(fullPath1, (err, stats) => {
                if (!err && stats.isFile()) {
                    fs.readdir(__dirname, (error, files2) => {
                        if (error) return;

                        for (let j = 0; j < files2.length; j++) {
                            const file2 = files2[j];
                            const fullPath2 = path.join(__dirname, file2);

                            fs.stat(fullPath2, (err, stats) => {
                                if (!err && stats.isDirectory()) {
                                    const extension = path.extname(file1).slice(1);
                                    if (extension === file2) {
                                        const newPath = path.join(__dirname, file2, file1);

                                        fs.rename(fullPath1, newPath, (err) => {
                                            if (err) return console.log(`Error moving ${file1}:`, err);
                                            console.log(`${file1} moved to the ${file2} folder`);
                                        });
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}, 1000);