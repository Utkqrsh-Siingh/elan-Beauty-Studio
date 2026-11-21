# Élan Beauty Studio — Website Demo

A premium, responsive salon website concept built with plain HTML, CSS and JavaScript.

## Run locally

1. Extract the ZIP.
2. Open the `elan-beauty-studio` folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

No build step or package installation is required.

## Before showing this to a real salon

Edit `config.js`:
- `name`: salon's actual name
- `whatsappNumber`: WhatsApp number with country code, digits only (India: 91 + 10-digit number)
- `phoneDisplay`: phone number shown on the page
- `address`: complete address
- `openingHours`: verified opening hours
- `instagramUrl`: the salon's actual Instagram profile

Also edit `index.html`:
- Replace all Élan branding with the client's approved brand.
- Replace the sample service descriptions with the actual services.
- Replace the sample gallery photos with images the client has permission to use.
- Replace the sample testimonial with a real, approved customer review, or remove the testimonial section.
- Update the page title and meta description.
- Add a real Google Maps link/embed only after the client confirms their address.

## Important demo notes

- The current WhatsApp number is deliberately a placeholder. The booking form will not send a request until you configure a real number.
- Service prices are not displayed because they must be confirmed by the client.
- The testimonial is clearly marked as sample content. Do not publish it as a real review.
- The photos are loaded from Unsplash URLs and require an internet connection. For a paid client project, use client-owned/licensed images and verify image usage rights.
- This is a front-end enquiry form, not a live calendar or confirmed booking system.

## Deploy on Vercel

1. Create a GitHub repository and upload the contents of this folder.
2. Sign in to Vercel and import that repository.
3. Keep the framework preset as **Other**.
4. Leave build command and output directory blank (static HTML project).
5. Deploy and test the generated URL on mobile and desktop.

## Suggested client handover

Give the client:
- The live website URL.
- The source-code ZIP/repository, as agreed in the contract.
- A short list of the services and contact details used.
- A note explaining who owns and renews the domain and any paid hosting.
