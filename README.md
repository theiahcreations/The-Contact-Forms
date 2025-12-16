# The IAH Creations - Contact Forms

A Google Apps Script project for creating dynamic contact forms with automatic Google Sheets integration for The IAH Creations digital services.

## Overview

This project contains a Google Apps Script that creates a comprehensive project order form for The IAH Creations, specializing in:
- Website Creation (Single Page & Dynamic Multi-Page)
- Web App Development (SPA & Dynamic Applications)
- Mobile App Development (WebView & Native Apps)

## Features

- **Dynamic Form Logic**: Conditional branching based on service selection
- **Automatic Sheets Integration**: Responses automatically saved to Google Sheets
- **Comprehensive Pricing**: Multiple tiers for each service type
- **Client Information Collection**: Complete contact and business details
- **Timeline Management**: Rush, standard, and flexible delivery options

## Setup Instructions

### Prerequisites
- Google Account with access to Google Apps Script
- Google Sheets access for response collection

### Installation

1. **Open Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Create a new project

2. **Copy the Script**
   - Copy the contents of `Contact Forms.js`
   - Paste into the Apps Script editor

3. **Configure Google Sheets**
   - Create a new Google Sheets document
   - Copy the Sheet ID from the URL
   - Replace the Sheet ID in the script (line 9)

4. **Run the Script**
   - Execute the `createIAHFormCorrected()` function
   - Authorize the required permissions

## Usage

### Running the Form Creator
```javascript
function createIAHFormCorrected() {
  // Creates a comprehensive project order form with:
  // - Dynamic conditional branching based on service selection
  // - Automatic Google Sheets integration for response collection
  // - Complete pricing structure for all service tiers
  // - Professional form layout with progress tracking
  
  var form = FormApp.create("The IAH Creations - Project Order Form");
  // ... (complete implementation in Contact Forms.js)
  return form;
}
```

**To execute the script:**
1. Open Google Apps Script editor
2. Paste the complete code from `Contact Forms.js`
3. Click the "Run" button or press Ctrl+R
4. Authorize the required permissions when prompted
5. The form will be created and linked to your Google Sheets automatically

### Form Structure
1. **Client Information**: Name, email, contact details
2. **Service Selection**: Website, Web App, or Mobile App
3. **Service Configuration**: Type and tier selection based on choice
4. **Design & Final Details**: Requirements and timeline preferences

### Pricing Tiers

#### Website Services
- Basic SPW: ₹4,999 / $60
- Medium SPW: ₹8,999 / $110  
- Advance SPW: ₹14,999 / $180
- Basic Dynamic: ₹19,999 / $240
- Medium Dynamic: ₹34,999 / $420
- Advance Dynamic: ₹59,999 / $720

#### Web App Services
- Basic SPA: ₹24,999 / $300
- Medium SPA: ₹44,999 / $540
- Advance SPA: ₹89,999 / $1,080
- Basic Dynamic: ₹49,999 / $600
- Medium Dynamic: ₹99,999 / $1,200
- Advance Dynamic: ₹2L+ / $2,500+

#### Mobile App Services
- Basic Mobile SPA: ₹29,999 / $360
- Medium Mobile SPA: ₹49,999 / $600
- Advance Mobile SPA: ₹79,999 / $950
- Basic Native: ₹99,999 / $1,200
- Medium Native: ₹1.5L / $1,800
- Advance Native: ₹2.5L+ / $3,000+

## Configuration

### Google Sheets Integration
The form automatically connects to a Google Sheets document for response collection. The current configuration uses:

```javascript
var sheet = SpreadsheetApp.openById("1yMGbjuHMdHx6KGe6f6RWlwn69oh9tzSD0MlHPux6Dc8");
```

**Current Spreadsheet:** [IAH Creations Form Responses](https://docs.google.com/spreadsheets/d/1yMGbjuHMdHx6KGe6f6RWlwn69oh9tzSD0MlHPux6Dc8/edit?usp=sharing)

To use your own spreadsheet, replace the Sheet ID with your document's ID from the URL.

### Customization
- Modify pricing in the choice options
- Add/remove form fields as needed
- Adjust conditional logic for different service flows

## Support

For technical support or customization requests:
- Email: theiahcreations@gmail.com
- Website: [The IAH Creations](https://theiahcreations.com)

## License

© 2024 The IAH Creations. All rights reserved.