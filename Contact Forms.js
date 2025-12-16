function createIAHFormCorrected() {
  try {
    var form = FormApp.create("The IAH Creations - Project Order Form");
    form.setDescription(
      "Select your desired digital solution below. We specialize in rapid prototyping (24-48 hrs) and full-scale commercial development."
    );

    // Link to Google Sheets for automatic response collection
    var sheetId = "1yMGbjuHMdHx6KGe6f6RWlwn69oh9tzSD0MlHPux6Dc8";
    var sheet = SpreadsheetApp.openById(sheetId);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

    // 1. Client Info
    form.addSectionHeaderItem().setTitle("Client Information");
    form.addTextItem().setTitle("Full Name").setRequired(true);
    form.addTextItem().setTitle("Email Address").setRequired(true);
    form.addTextItem().setTitle("WhatsApp Number").setRequired(true);
    form.addTextItem().setTitle("Business Name").setRequired(true);

    // 2. The Branching Question
    var serviceQuestion = form.addMultipleChoiceItem();
    serviceQuestion
      .setTitle("Which core service do you require?")
      .setRequired(true);

    // 3. Website Section
    var webPage = form.addPageBreakItem().setTitle("Website Configuration");

    var websiteType = form.addMultipleChoiceItem();
    websiteType
      .setTitle("Select Website Type")
      .setChoices([
        websiteType.createChoice("Single Page Website (SPW) - [~24 Hours]"),
        websiteType.createChoice(
          "Dynamic Multi-Page Website - [72 Hrs - 1 Week]"
        ),
      ])
      .setRequired(true);

    var websiteTier = form.addMultipleChoiceItem();
    websiteTier
      .setTitle("Select Website Tier")
      .setChoices([
        websiteTier.createChoice("Basic SPW (₹4,999 / $60)"),
        websiteTier.createChoice("Medium SPW (₹8,999 / $110)"),
        websiteTier.createChoice("Advance SPW (₹14,999 / $180)"),
        websiteTier.createChoice("Basic Dynamic (₹19,999 / $240)"),
        websiteTier.createChoice("Medium Dynamic (₹34,999 / $420)"),
        websiteTier.createChoice("Advance Dynamic (₹59,999 / $720)"),
      ])
      .setRequired(true);

    // 4. Web App Section
    var webAppPage = form.addPageBreakItem().setTitle("Web App Configuration");

    var webAppType = form.addMultipleChoiceItem();
    webAppType
      .setTitle("Select Web App Type")
      .setChoices([
        webAppType.createChoice("Single Page App (SPA) - [~24 Hours]"),
        webAppType.createChoice(
          "Multi-Tasking Dynamic App - [72 Hrs - 1 Week]"
        ),
      ])
      .setRequired(true);

    var webAppTier = form.addMultipleChoiceItem();
    webAppTier
      .setTitle("Select Web App Tier")
      .setChoices([
        webAppTier.createChoice("Basic SPA (₹24,999 / $300)"),
        webAppTier.createChoice("Medium SPA (₹44,999 / $540)"),
        webAppTier.createChoice("Advance SPA (₹89,999 / $1,080)"),
        webAppTier.createChoice("Basic Dynamic (₹49,999 / $600)"),
        webAppTier.createChoice("Medium Dynamic (₹99,999 / $1,200)"),
        webAppTier.createChoice("Advance Dynamic (₹2L+ / $2,500+)"),
      ])
      .setRequired(true);

    // 5. Mobile App Section
    var mobilePage = form
      .addPageBreakItem()
      .setTitle("Mobile App Configuration");

    var mobileAppType = form.addMultipleChoiceItem();
    mobileAppType
      .setTitle("Select Mobile App Type")
      .setChoices([
        mobileAppType.createChoice("Mobile SPA (WebView) - [24-48 Hours]"),
        mobileAppType.createChoice("Native Dynamic App - [72 Hrs - 1 Week+]"),
      ])
      .setRequired(true);

    var mobileAppTier = form.addMultipleChoiceItem();
    mobileAppTier
      .setTitle("Select Mobile App Tier")
      .setChoices([
        mobileAppTier.createChoice("Basic Mobile SPA (₹29,999 / $360)"),
        mobileAppTier.createChoice("Medium Mobile SPA (₹49,999 / $600)"),
        mobileAppTier.createChoice("Advance Mobile SPA (₹79,999 / $950)"),
        mobileAppTier.createChoice("Basic Native (₹99,999 / $1,200)"),
        mobileAppTier.createChoice("Medium Native (₹1.5L / $1,800)"),
        mobileAppTier.createChoice("Advance Native (₹2.5L+ / $3,000+)"),
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
      .addParagraphTextItem()
      .setTitle("Describe the Vibe/Design (or paste reference links)");

    var contentStatus = form.addMultipleChoiceItem();
    contentStatus
      .setTitle("Content Status")
      .setChoices([
        contentStatus.createChoice("I have all content ready"),
        contentStatus.createChoice("I need help with content"),
      ])
      .setRequired(true);

    var timeline = form.addMultipleChoiceItem();
    timeline
      .setTitle("Timeline Preference")
      .setChoices([
        timeline.createChoice("Rush (24-48 hours)"),
        timeline.createChoice("Standard (3-7 days)"),
        timeline.createChoice("Flexible (1-2 weeks)"),
      ])
      .setRequired(true);

    form
      .addParagraphTextItem()
      .setTitle("Additional Requirements or Notes")
      .setHelpText("Any specific features, integrations, or special requests");

    Logger.log("Form created successfully: " + form.getEditUrl());
    return form;
  } catch (e) {
    Logger.log("Error creating form: " + e.toString());
    throw e;
  }
}
