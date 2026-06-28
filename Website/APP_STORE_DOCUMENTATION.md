# Ivory Notes V1 App Store Documentation

Use this file as the source of truth while completing App Store Connect.

## Product summary

Ivory Notes is a private, offline voice-notes app that records speech, creates on-device
transcripts, and turns recordings into organized notes and study materials.

## Suggested subtitle

Private offline voice notes

## Suggested category

Primary: Productivity

Secondary: Education

## Privacy summary

- No Ivory Notes account is required.
- Recording and transcription work offline.
- Audio and notes are stored locally in the app's container.
- Ivory Notes does not operate a server that receives recordings or note content.
- No third-party advertising SDK is included.
- No cross-app or cross-website tracking is used.
- Users can delete individual audio files, complete notes, or all app content.
- Apple system services remain governed by Apple's terms and privacy policies.

These statements must be reviewed again against the exact archive submitted to
Apple.

## App Review notes draft

Ivory Notes is an offline-first voice-notes app. Microphone access is used only when the
user starts an audio recording. The bundled speech model performs transcription
on the device; no account or Ivory Notes backend is required.

The companion Apple Watch app records audio and transfers it to the paired iPhone.
The iPhone then creates the transcript and note. Ivory Notes also includes Home Screen
and Lock Screen widgets and a recording Live Activity.

To test:

1. Complete the short introduction and acknowledge the recording-responsibility notice.
2. Open Record and allow microphone access.
3. Record clear speech, stop, and wait for local transcription.
4. Open the saved note to review its audio, transcript, and generated material.
5. Open Settings to view storage and privacy information.

No login or demo account is required.

## Recording responsibility

Suggested in-app and support wording:

> Always obtain permission before recording other people. You are responsible for
> following applicable laws, school rules, and workplace policies.

Do not describe this notice as legal advice.

## Required public URLs

- Marketing URL: `https://useivory.app/`
- Support URL: `https://useivory.app/help`
- Privacy Policy URL: `https://useivory.app/privacy`

## Required contact details

- Developer: Maksim Rabinovich
- Support email: `support@useivory.app`
- Copyright: © 2026 Maksim Rabinovich

## Release records

For every public build, keep:

- Version and build number
- Submission date
- Git commit and tag
- Release notes
- Known limitations
- App privacy answers
- Archive validation result
- App Review correspondence
