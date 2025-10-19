# File Organizer

A simple Node.js script that automatically organizes files in your directory by their extensions.

## 🚀 What it does

- Scans the current directory where the script is run
- Creates folders based on file extensions (e.g., `pdf`, `docx`, `jpg`)
- Moves files into their respective extension folders
- Keeps your directory clean and organized automatically

## 📁 Usage

1. Place `filesOrganizer.js` in the directory you want to organize
2. Run the script:
```bash
node filesOrganizer.js
```

That's it! Your files will be sorted into appropriate folders by their file types.

# Example

### Before:
```
my-directory/
├── my.js
├── document.pdf
├── presentation.pptx
├── image.jpg
├── data.xlsx
└── notes.txt
```

### After:
```
my-directory/
├── my.js
├── pdf/
│   └── document.pdf
├── pptx/
│   └── presentation.pptx
├── jpg/
│   └── image.jpg
├── xlsx/
│   └── data.xlsx
└── txt/
    └── notes.txt
```

## ⚠️ Note
The script organizes all files except itself (filesOrganizer.js) to avoid moving the organizer.
