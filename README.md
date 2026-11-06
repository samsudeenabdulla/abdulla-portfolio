# Abdulla Premium Portfolio — Version 2.0

A responsive personal portfolio built with Next.js, React and CSS.

## Requirements
- Node.js 20.9 or newer
- npm
- VS Code (recommended)

## Run locally on Windows
1. Extract this ZIP.
2. Open the `abdulla-premium-portfolio-v2` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open http://localhost:3000.

## Add your professional photo
1. Choose your professional LinkedIn/profile photograph.
2. Make a square crop if possible.
3. Rename it exactly `profile.jpg`.
4. Copy it into the `public` folder, beside `favicon.svg`.
5. Refresh the browser.

The profile card uses `/profile.jpg`. If the file is not present, it displays the initials fallback.

## Add your CV PDF
1. Use your latest CV PDF.
2. Rename it exactly `resume.pdf`.
3. Copy it into the `public` folder.
4. Refresh the browser.
5. The Download CV buttons will download `/resume.pdf`.

## Personal details already configured
- Name: Mohamed Samsudeen Abdulla
- Email: 0929abdulla@gmail.com
- GitHub: https://github.com/samsudeenabdulla
- LinkedIn: https://www.linkedin.com/in/samsudeenabdulla/

## Important content checks before publishing
- Confirm each project description reflects the actual implementation.
- Add direct repository links for each project when ready.
- Verify education details and add dates if desired.
- Only claim technologies and skills you can explain confidently.
- Test the email and CV download links.

## Production
Run `npm run build`, then `npm run start`.

## Deployment
Push the project to GitHub and import it into Vercel. Vercel detects Next.js automatically.


## Included personal assets — Version 3
The supplied professional portrait is already included as `public/profile.jpg`.
The supplied CV is already included as `public/resume.pdf`.
No renaming or copying is required for these two files.


## Version 4.0 improvements
- Interactive project detail dialogs.
- Skills grouped to reflect the supplied CV.
- Contact form that prepares an email in the visitor's default email application.
- Floating WhatsApp chat button and a contact-section WhatsApp link connected to the supplied WhatsApp Business number.
- Custom favicon and Open Graph metadata.

The contact form is a mailto-based frontend. It does not send messages through a server or store submitted data. The WhatsApp buttons open a direct chat with the configured number in WhatsApp or WhatsApp Web.
