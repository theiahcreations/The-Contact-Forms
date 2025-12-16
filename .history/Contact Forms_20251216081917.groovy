function createIAHForm() {
  // 1. Create the Form
  var form = FormApp.create('The IAH Creations - Project Order Form');
  form.setDescription('Welcome to The IAH Creations. Select your desired digital solution below. We specialize in rapid prototyping (24-48 hrs) and full-scale commercial development.');
  form.setProgressBar(true);

  // --- SECTION 1: CLIENT DETAILS ---
  var section1 = form.addSectionHeaderItem().setTitle('Client Information');
  form.addTextItem().setTitle('Full Name').setRequired(true);
  form.addTextItem().setTitle('Email Address').setRequired(true);
  form.addTextItem().setTitle('WhatsApp / Contact Number').setRequired(true);
  form.addTextItem().setTitle('Business / Company Name').setRequired(true);

  // --- PREPARE PAGE BREAKS FOR LOGIC JUMPS ---
  // We create these first so we can link to them in the Multiple Choice question
  var webPage = form.addPageBreakItem().setTitle('Website Configuration');
  var webAppPage = form.addPageBreakItem().setTitle('Web App Configuration');
  var mobilePage = form.addPageBreakItem().setTitle('Mobile App Configuration');
  var designPage = form.addPageBreakItem().setTitle('Design & Content'); // Destination after config

  // --- SECTION 2: SERVICE SELECTION (With Logic) ---
  // We go back to insert the choice question before the page breaks
  var serviceItem = form.addMultipleChoiceItem()
      .setTitle('Which core service do you require?')
      .setHelpText('This will direct you to the specific pricing and configuration for your choice.')
      .setRequired(true);

  // Create choices that jump to specific pages
  var choiceWeb = serviceItem.createChoice('Website Creation (Portfolios, Corporate, E-com)', webPage);
  var choiceWebApp = serviceItem.createChoice('Web App Creation (Dashboards, SaaS, Tools)', webAppPage);
  var choiceMobile = serviceItem.createChoice('Mobile App Creation (iOS & Android)', mobilePage);

  serviceItem.setChoices([choiceWeb, choiceWebApp, choiceMobile]);
  
  // Move the selection question to be before the first page break
  form.moveItem(serviceItem.getIndex(), webPage.getIndex());


  // --- SECTION 3: WEBSITE CONFIGURATION ---
  // (Items added here naturally fall under 'webPage')
  form.addMultipleChoiceItem()
      .setTitle('Select Website Type')
      .setChoices([
          form.createChoice('1.1 Single Page Website (SPW) - [Turnaround: ~24 Hours]'),
          form.createChoice('1.2 Dynamic Multi-Page Website - [Turnaround: 72 Hrs - 1 Week]')
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Select Your Tier (Website)')
      .setHelpText('Prices based on INR / USD / EUR')
      .setChoices([
          form.createChoice('Basic SPW (₹4,999 | $60) - Template Based, 3 Sections'),
          form.createChoice('Medium SPW (₹8,999 | $110) - Semi-Custom, 6 Sections'),
          form.createChoice('Advance SPW (₹14,999 | $180) - Fully Custom UI/UX, Unlimited'),
          form.createChoice('Basic Dynamic (₹19,999 | $240) - Contact Form, Mobile Friendly'),
          form.createChoice('Medium Dynamic (₹34,999 | $420) - CMS Integration, SEO'),
          form.createChoice('Advance Dynamic (₹59,999 | $720) - E-commerce Ready, Adaptive')
      ])
      .setRequired(true);

  // Logic: After Website, go to Design
  webPage.setGoToPage(designPage);


  // --- SECTION 4: WEB APP CONFIGURATION ---
  // (Items added here naturally fall under 'webAppPage')
  // We need to move items to ensure they fall under the correct header if we were adding out of order, 
  // but since we are adding sequentially after creating page breaks, we just need to manage the flow.
  // Actually, in script, items are added to the end. We need to move the page breaks to the end as we go, or add items specifically.
  // Strategy: The 'add' methods append to the end. 
  // So: Add Web Items -> Add WebApp Page Break -> Add WebApp Items...
  
  // RE-STRATEGY for clean script execution:
  // 1. Create Form & Client Info
  // 2. Create Service Selection Question
  // 3. Create Web Page Break
  // 4. Create Web Items
  // 5. Create Web App Page Break
  // 6. Create Web App Items
  // 7. Create Mobile Page Break
  // 8. Create Mobile Items
  // 9. Create Design Page Break
  // 10. Create Design Items
  // 11. Finally, map the Service Selection choices to the Page Breaks.

  // Let's restart the "adding" sequence correctly below to avoid index confusion.
}

function createIAHFormCorrected() {
  var form = FormApp.create('The IAH Creations - Project Order Form');
  form.setDescription('Select your desired digital solution below. We specialize in rapid prototyping (24-48 hrs) and full-scale commercial development.');
  
  // 1. Client Info
  form.addSectionHeaderItem().setTitle('Client Information');
  form.addTextItem().setTitle('Full Name').setRequired(true);
  form.addTextItem().setTitle('Email Address').setRequired(true);
  form.addTextItem().setTitle('WhatsApp Number').setRequired(true);
  form.addTextItem().setTitle('Business Name').setRequired(true);

  // 2. The Branching Question (We will set choices later)
  var serviceQuestion = form.addMultipleChoiceItem()
      .setTitle('Which core service do you require?')
      .setRequired(true);

  // 3. Website Section
  var webPage = form.addPageBreakItem().setTitle('Website Configuration');
  form.addMultipleChoiceItem()
      .setTitle('Select Website Type')
      .setChoices([
        form.createChoice('Single Page Website (SPW) - [~24 Hours]'),
        form.createChoice('Dynamic Multi-Page Website - [72 Hrs - 1 Week]')
      ]).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Select Website Tier')
      .setChoices([
        form.createChoice('Basic SPW (₹4,999 / $60)'),
        form.createChoice('Medium SPW (₹8,999 / $110)'),
        form.createChoice('Advance SPW (₹14,999 / $180)'),
        form.createChoice('Basic Dynamic (₹19,999 / $240)'),
        form.createChoice('Medium Dynamic (₹34,999 / $420)'),
        form.createChoice('Advance Dynamic (₹59,999 / $720)')
      ]).setRequired(true);

  // 4. Web App Section
  var webAppPage = form.addPageBreakItem().setTitle('Web App Configuration');
  form.addMultipleChoiceItem()
      .setTitle('Select Web App Type')
      .setChoices([
        form.createChoice('Single Page App (SPA) - [~24 Hours]'),
        form.createChoice('Multi-Tasking Dynamic App - [72 Hrs - 1 Week]')
      ]).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Select Web App Tier')
      .setChoices([
        form.createChoice('Basic SPA (₹24,999 / $300)'),
        form.createChoice('Medium SPA (₹44,999 / $540)'),
        form.createChoice('Advance SPA (₹89,999 / $1,080)'),
        form.createChoice('Basic Dynamic (₹49,999 / $600)'),
        form.createChoice('Medium Dynamic (₹99,999 / $1,200)'),
        form.createChoice('Advance Dynamic (₹2L+ / $2,500+)')
      ]).setRequired(true);

  // 5. Mobile App Section
  var mobilePage = form.addPageBreakItem().setTitle('Mobile App Configuration');
  form.addMultipleChoiceItem()
      .setTitle('Select Mobile App Type')
      .setChoices([
        form.createChoice('Mobile SPA (WebView) - [24-48 Hours]'),
        form.createChoice('Native Dynamic App - [72 Hrs - 1 Week+]')
      ]).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Select Mobile App Tier')
      .setChoices([
        form.createChoice('Basic Mobile SPA (₹29,999 / $360)'),
        form.createChoice('Medium Mobile SPA (₹49,999 / $600)'),
        form.createChoice('Advance Mobile SPA (₹79,999 / $950)'),
        form.createChoice('Basic Native (₹99,999 / $1,200)'),
        form.createChoice('Medium Native (₹1.5L / $1,800)'),
        form.createChoice('Advance Native (₹2.5L+ / $3,000+)')
      ]).setRequired(true);

  // 6. Design & Final Section (Where everyone meets)
  var designPage = form.addPageBreakItem().setTitle('Design & Final Details');
  
  // Link the logic now that pages exist
  serviceQuestion.setChoices([
      serviceQuestion.createChoice('Website Creation', webPage),
      serviceQuestion.createChoice('Web App Creation', webAppPage),
      serviceQuestion.createChoice('Mobile App Creation', mobilePage)
  ]);
  
  // Ensure sections flow to Design Page
  webPage.setGoToPage(designPage);
  webAppPage.setGoToPage(designPage);
  mobilePage.setGoToPage(designPage);

  // Add Final Questions
  form.addParagraphItem().setTitle('Describe the Vibe/Design (or paste reference links)');
  form.addMultipleChoiceItem().setTitle('Content Status').setChoices([
      form.createChoice('I have all content ready'),
      form.createChoice('I need help with content'),
      form.createChoice('Use placeholders')
  ]);
  form.addMultipleChoiceItem().setTitle('Budget Range').setChoices([
      form.createChoice('Micro (< ₹10k)'),
      form.createChoice('Standard (₹20k - ₹50k)'),
      form.createChoice('Premium (₹50k - ₹1L)'),
      form.createChoice('Enterprise (₹1.5L+)')
  ]);
  form.addParagraphItem().setTitle('Any extra instructions?');
}