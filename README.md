# Bleak Narrative

### Local development quickstart

Follow these steps to get setup with locall development. Note that you'll need an internet connection to pull content from prismic.io.

You'll need these tools installed on your machine
- `git`
- `npm`

```bash
# Clone the repo
$ git clone https://github.com/benmoose/bleak-narrative.git
$ cd bleak-narrative
# Install project dependencies
$ npm i
# Set the prismic API endpoint in a .env file
$ echo "PRISMIC_API=https://bleaknarrative.cdn.prismic.io/api/v2" >> .env
# Build and serve the site locally
$ npm run dev
```

You should then be able to view the site on http://localhost:3000.
