const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const config = {
  name: 'ForgeAMPTemplate',
  description: 'Forge to AMP migration template and configuration repo for GitHub Pages hosting.',
  repo: 'https://github.com/Frenzy13/ForgeAMPTemplate',
  githubPagesUrl: 'https://Frenzy13.github.io/ForgeAMPTemplate/',
  ampAddUrl: 'https://Frenzy13.github.io/ForgeAMPTemplate/',
  version: '1.0.0'
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/config', (req, res) => {
  res.json(config);
});

app.get('/health', (req, res) => {
  res.json({ ok: true, status: 'healthy', port: PORT });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AMP config server running at http://localhost:${PORT}`);
});
