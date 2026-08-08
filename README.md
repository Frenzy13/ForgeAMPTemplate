# AMP Configuration Repo

This workspace is a lightweight Node.js app that serves a static AMP configuration page locally and is ready to deploy as a GitHub Pages site.

## Local preview

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open this URL in your browser:
   ```text
   http://localhost:3000
   ```

## GitHub Pages deployment

1. Create a GitHub repository for this project.
2. Push the folder contents to the repository.
3. In GitHub, go to Settings > Pages.
4. Set the source to the default branch and root folder.
5. Save the Pages settings.
6. Use the generated GitHub Pages URL in AMP.

Example URL pattern:
```text
https://<your-user>.github.io/<your-repo>/
```

## Files you may want to update

- `server.js` — update the placeholder repo and AMP URLs.
- `public/index.html` — replace the default content with your real AMP page content.
- `public/styles.css` — adjust the styling for your page.

## Notes

- The Node server is only for local preview.
- The GitHub Pages site should serve the static files in `public/`.
- AMP can add the GitHub Pages URL as the remote page or configuration endpoint it needs.
