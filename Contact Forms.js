function createIAHFormCorrected() {
  var form = FormApp.create("The IAH Creations - Project Order Form");
  form.setDescription(
    "Select your desired digital solution below. We specialize in rapid prototyping (24-48 hrs) and full-scale commercial development."
  );

  // Link to Google Sheets for automatic response collection
  var sheet = SpreadsheetApp.openById(
    "1Kc4HarCVO1N2lSyond9u1RUYhPcgU9vUk_drSLMomYpzqBp7qdQPbf_u"
  );
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
  form
    .addMultipleChoiceItem()
    .setTitle("Select Website Type")
    .setChoices([
      form.createChoice("Single Page Website (SPW) - [~24 Hours]"),
      form.createChoice("Dynamic Multi-Page Website - [72 Hrs - 1 Week]"),
    ])
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("Select Website Tier")
    .setChoices([
      form.createChoice("Basic SPW (₹4,999 / $60)"),
      form.createChoice("Medium SPW (₹8,999 / $110)"),
      form.createChoice("Advance SPW (₹14,999 / $180)"),
      form.createChoice("Basic Dynamic (₹19,999 / $240)"),
      form.createChoice("Medium Dynamic (₹34,999 / $420)"),
      form.createChoice("Advance Dynamic (₹59,999 / $720)"),
    ])
    .setRequired(true);

  // 4. Web App Section
  var webAppPage = form.addPageBreakItem().setTitle("Web App Configuration");
  form
    .addMultipleChoiceItem()
    .setTitle("Select Web App Type")
    .setChoices([
      form.createChoice("Single Page App (SPA) - [~24 Hours]"),
      form.createChoice("Multi-Tasking Dynamic App - [72 Hrs - 1 Week]"),
    ])
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("Select Web App Tier")
    .setChoices([
      form.createChoice("Basic SPA (₹24,999 / $300)"),
      form.createChoice("Medium SPA (₹44,999 / $540)"),
      form.createChoice("Advance SPA (₹89,999 / $1,080)"),
      form.createChoice("Basic Dynamic (₹49,999 / $600)"),
      form.createChoice("Medium Dynamic (₹99,999 / $1,200)"),
      form.createChoice("Advance Dynamic (₹2L+ / $2,500+)"),
    ])
    .setRequired(true);

  // 5. Mobile App Section
  var mobilePage = form.addPageBreakItem().setTitle("Mobile App Configuration");
  form
    .addMultipleChoiceItem()
    .setTitle("Select Mobile App Type")
    .setChoices([
      form.createChoice("Mobile SPA (WebView) - [24-48 Hours]"),
      form.createChoice("Native Dynamic App - [72 Hrs - 1 Week+]"),
    ])
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("Select Mobile App Tier")
    .setChoices([
      form.createChoice("Basic Mobile SPA (₹29,999 / $360)"),
      form.createChoice("Medium Mobile SPA (₹49,999 / $600)"),
      form.createChoice("Advance Mobile SPA (₹79,999 / $950)"),
      form.createChoice("Basic Native (₹99,999 / $1,200)"),
      form.createChoice("Medium Native (₹1.5L / $1,800)"),
      form.createChoice("Advance Native (₹2.5L+ / $3,000+)"),
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

  form
    .addMultipleChoiceItem()
    .setTitle("Content Status")
    .setChoices([
      form.createChoice("I have all content ready"),
      form.createChoice("I need help with content"),
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Timeline Preference")
    .setChoices([
      form.createChoice("Rush (24-48 hours)"),
      form.createChoice("Standard (3-7 days)"),
      form.createChoice("Flexible (1-2 weeks)"),
    ])
    .setRequired(true);

  form
    .addParagraphItem()
    .setTitle("Additional Requirements or Notes")
    .setHelpText("Any specific features, integrations, or special requests");

  return form;
}
