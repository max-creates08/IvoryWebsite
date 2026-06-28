# Ivory Notes Website Setup

This folder contains Ivory Notes' public product, support, and privacy pages. It is a
plain static website with no analytics, cookies, forms, build tools, or external
dependencies.

## Before publishing

1. Confirm that `support@useivory.app` can send and receive email.
2. Open `index.html`, `support.html`, and `privacy.html` in Safari.
3. Check every link and proofread the policy.
4. Confirm the policy still matches the shipping build of Ivory Notes.

## Publishing with GitHub Pages

The site can be published from the existing private Ivory repository after the
Apple Developer enrollment and support email are ready.

The simplest reliable setup is a GitHub Pages Actions workflow that uploads this
`ClearNotes/Website` directory. GitHub Pages availability for private repositories
depends on the GitHub account and plan. Another static host can serve the same
folder without changes.

After publishing, keep these permanent URLs:

- Support URL: `https://useivory.app/help`
- Privacy Policy URL: `https://useivory.app/privacy`
- Marketing URL: `https://useivory.app/`

Enter the first two URLs in App Store Connect. Also add accessible Support and
Privacy links inside Ivory Notes' Settings screen before submission.

## Updating the policy

Review the policy whenever Ivory Notes adds:

- Analytics or crash-reporting SDKs
- Cloud sync or an online account
- Third-party AI processing
- Advertising
- Purchases or subscriptions
- A new category of personal data

Update the effective date and App Store privacy answers when data practices
change. The website should describe the shipping version, not planned features.

## Support workflow

For each report, record:

- Date received
- Device and OS version
- Ivory Notes version and build
- Steps to reproduce
- Expected and actual behavior
- Screenshot or error message
- Resolution and fixed build

Do not ask users to send private recordings unless they are essential to diagnose
the issue. Ask them to remove unrelated personal information first.
