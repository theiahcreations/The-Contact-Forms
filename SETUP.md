# Setup Guide - The IAH Creations Contact Forms

## Quick Start

### Step 1: Google Sheets Preparation
1. Create a new Google Sheets document
2. Copy the Sheet ID from the URL (between `/d/` and `/edit`)
3. Share the sheet with edit permissions for the script

### Step 2: Google Apps Script Setup
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `Contact Forms.js`

### Step 3: Configure Sheet Integration
Replace the Sheet ID in line 9 of the script:
```javascript
var sheet = SpreadsheetApp.openById("YOUR_ACTUAL_SHEET_ID_HERE");
```

### Step 4: Run and Authorize
1. Save the project (Ctrl+S)
2. Click the "Run" button
3. Authorize the required permissions:
   - Google Forms access
   - Google Sheets access
   - Google Drive access

### Step 5: Test the Form
1. After successful execution, check your Google Drive
2. Find the newly created form: "The IAH Creations - Project Order Form"
3. Test the form functionality and conditional logic

## Troubleshooting

### Common Issues

**Permission Denied Error**
- Ensure you're logged into the correct Google account
- Check that the Google Sheets document exists and is accessible

**Sheet ID Not Found**
- Verify the Sheet ID is correct (39-44 characters long)
- Ensure the sheet is not deleted or moved

**Form Not Created**
- Check the execution transcript for errors
- Verify all required Google services are enabled

### Support
If you encounter issues, contact: theiahcreations@gmail.com