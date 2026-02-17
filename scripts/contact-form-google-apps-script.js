/**
 * Contact form handler – runs in your Google account, no third-party provider.
 *
 * SETUP:
 * 1. Go to https://script.google.com and create a new project.
 * 2. Replace the default Code.gs content with this entire file.
 * 3. Save (Ctrl+S). Run once (Run > Run function > doPost) and authorize the app if prompted.
 * 4. Deploy: Deploy > New deployment > Type: Web app
 *    - Description: Contact form
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL (ends in /exec) and add it to your site's .env:
 *    PUBLIC_CONTACT_FORM_ACTION=https://script.google.com/macros/s/.../exec
 * 6. Rebuild/redeploy your site.
 *
 * Form submissions will be emailed to the address below.
 */

var RECIPIENT_EMAIL = 'joanna@loanlady.club';
var REDIRECT_URL = 'https://loanlady.club/contact?sent=1';

function doPost(e) {
  try {
    var params = e.parameter;
    var name = params.name || '(not provided)';
    var email = params.email || '(not provided)';
    var phone = params.phone || '(not provided)';
    var message = params.message || '(not provided)';

    var subject = 'New message from Loan Lady Club contact form';
    var body =
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + phone + '\n\n' +
      'Message:\n' + message;

    MailApp.sendEmail(RECIPIENT_EMAIL, subject, body);

    return HtmlService.createHtmlOutput(
      '<!DOCTYPE html><html><head><meta charset="utf-8">' +
      '<meta http-equiv="refresh" content="0;url=' + REDIRECT_URL + '">' +
      '<script>window.location.href="' + REDIRECT_URL + '";</script></head>' +
      '<body><p>Thank you. Redirecting…</p></body></html>'
    ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (err) {
    return HtmlService.createHtmlOutput(
      '<!DOCTYPE html><html><body><p>Something went wrong. Please try calling (916) 708-8555.</p></body></html>'
    );
  }
}
