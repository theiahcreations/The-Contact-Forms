function createIAHFormCorrected() {
  var form = FormApp.create("The IAH Creations - Project Order Form");
  form.setDescription(
    "Select your desired digital solution below. We specialize in rapid prototyping (24-48 hrs) and full-scale commercial development."
  );

  // Link to Google Sheets for automatic response collection
  // Method: Extract Sheet ID from full URL
  var sheetUrl =
    "https://docs.google.com/spreadsheets/d/1yMGbjuHMdHx6KGe6f6RWlwn69oh9tzSD0MlHPux6Dc8/edit?usp=sharing";
  var sheetId = sheetUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)[1];
  var sheet = SpreadsheetApp.openById(sheetId);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  // 1. Client Info
  form.addSectionHeaderItem().setTitle("Client Information");
  form.addTextItem().setTitle("Full Name").setRequired(true);
  form.addTextItem().setTitle("Email Address").setRequired(true);
  form.addTextItem().setTitle("WhatsApp Number").setRequired(true);
  form.addTextItem().setTitle("Business Name").setRequired(true);

  // 2. The Branching Question (We will set choices later)
  var serviceQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Which core service do you require?")
    .setRequired(true);

  // 3. Website Section
  var webPage = form.addPageBreakItem().setTitle("Website Configuration");
  var websiteTypeQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Select Website Type");
  websiteTypeQuestion
    .setChoices([
      websiteTypeQuestion.createChoice(
        "Single Page Website (SPW) - [~24 Hours]"
      ),
      websiteTypeQuestion.createChoice(
        "Dynamic Multi-Page Website - [72 Hrs - 1 Week]"
      ),
    ])
    .setRequired(true);
  var websiteTierQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Select Website Tier");
  websiteTierQuestion
    .setChoices([
      websiteTierQuestion.createChoice("Basic SPW (₹4,999 / $60)"),
      websiteTierQuestion.createChoice("Medium SPW (₹8,999 / $110)"),
      websiteTierQuestion.createChoice("Advance SPW (₹14,999 / $180)"),
      websiteTierQuestion.createChoice("Basic Dynamic (₹19,999 / $240)"),
      websiteTierQuestion.createChoice("Medium Dynamic (₹34,999 / $420)"),
      websiteTierQuestion.createChoice("Advance Dynamic (₹59,999 / $720)"),
    ])
    .setRequired(true);

  // 4. Web App Section
  var webAppPage = form.addPageBreakItem().setTitle("Web App Configuration");
  var webAppTypeQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Select Web App Type");
  webAppTypeQuestion
    .setChoices([
      webAppTypeQuestion.createChoice("Single Page App (SPA) - [~24 Hours]"),
      webAppTypeQuestion.createChoice(
        "Multi-Tasking Dynamic App - [72 Hrs - 1 Week]"
      ),
    ])
    .setRequired(true);
  var webAppTierQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Select Web App Tier");
  webAppTierQuestion
    .setChoices([
      webAppTierQuestion.createChoice("Basic SPA (₹24,999 / $300)"),
      webAppTierQuestion.createChoice("Medium SPA (₹44,999 / $540)"),
      webAppTierQuestion.createChoice("Advance SPA (₹89,999 / $1,080)"),
      webAppTierQuestion.createChoice("Basic Dynamic (₹49,999 / $600)"),
      webAppTierQuestion.createChoice("Medium Dynamic (₹99,999 / $1,200)"),
      webAppTierQuestion.createChoice("Advance Dynamic (₹2L+ / $2,500+)"),
    ])
    .setRequired(true);

  // 5. Mobile App Section
  var mobilePage = form.addPageBreakItem().setTitle("Mobile App Configuration");
  var mobileTypeQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Select Mobile App Type");
  mobileTypeQuestion
    .setChoices([
      mobileTypeQuestion.createChoice("Mobile SPA (WebView) - [24-48 Hours]"),
      mobileTypeQuestion.createChoice(
        "Native Dynamic App - [72 Hrs - 1 Week+]"
      ),
    ])
    .setRequired(true);
  var mobileTierQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Select Mobile App Tier");
  mobileTierQuestion
    .setChoices([
      mobileTierQuestion.createChoice("Basic Mobile SPA (₹29,999 / $360)"),
      mobileTierQuestion.createChoice("Medium Mobile SPA (₹49,999 / $600)"),
      mobileTierQuestion.createChoice("Advance Mobile SPA (₹79,999 / $950)"),
      mobileTierQuestion.createChoice("Basic Native (₹99,999 / $1,200)"),
      mobileTierQuestion.createChoice("Medium Native (₹1.5L / $1,800)"),
      mobileTierQuestion.createChoice("Advance Native (₹2.5L+ / $3,000+)"),
    ])
    .setRequired(true);

  // 6. Design & Final Section (Where everyone meets)
  var designPage = form.addPageBreakItem().setTitle("Design & Final Details");

  // Link the logic now that pages exist
  serviceQuestion.setChoices([
    serviceQuestion.createChoice("Website Creation", webPage),
    serviceQuestion.createChoice("Web App Creation", webAppPage),
    serviceQuestion.createChoice("Mobile App Creation", mobilePage),
  ]);

  // Ensure sections flow to Design Page
  webPage.setGoToPage(designPage);
  webAppPage.setGoToPage(designPage);
  mobilePage.setGoToPage(designPage);

  // Add Final Questions
  form
    .addParagraphItem()
    .setTitle("Describe the Vibe/Design (or paste reference links)");

  var contentStatusQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Content Status");
  contentStatusQuestion
    .setChoices([
      contentStatusQuestion.createChoice("I have all content ready"),
      contentStatusQuestion.createChoice("I need help with content"),
    ])
    .setRequired(true);

  var timelineQuestion = form
    .addMultipleChoiceItem()
    .setTitle("Timeline Preference");
  timelineQuestion
    .setChoices([
      timelineQuestion.createChoice("Rush (24-48 hours)"),
      timelineQuestion.createChoice("Standard (3-7 days)"),
      timelineQuestion.createChoice("Flexible (1-2 weeks)"),
    ])
    .setRequired(true);

  form
    .addParagraphItem()
    .setTitle("Additional Requirements or Notes")
    .setHelpText("Any specific features, integrations, or special requests");

  return form;
}
