# Flow Temp Toolkit

> A website with guidance for organisations helping people turn down their boilers

## Tech stack

- [Netlify CMS](https://www.netlifycms.org/) - A headless CMS to edit site content.
- [Eleventy](https://www.11ty.dev/) - A simple static site generator.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework to rapidly build modern websites.
- [Netlify](https://www.netlify.com/) - Hosting. Commits to the `main` branch are automatically deployed.

## Local development

### 1. Clone this repository

```
git clone https://github.com/nestauk/flow-temp-toolkit.git
```

### 2. Navigate to the directory

```
cd flow-temp-toolkit
```

### 3. Install dependencies

```
npm install
```

### 4. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5. Run development servers

Start a local development server...

```
npm run start
```

Start a proxy server for local backend for CMS

```
npx netlify-cms-proxy-server
```

Visit `http://localhost:8080/` to see the site.

## Authoring content

Visit the `[site]/admin` path in your browser to access the CMS to edit content. Users will need to be added via the Identity section on Netlify.

Content can alse be edited by directly editing the relevant `*.md` in the `src` directory and `*.yaml` files in the `_data` directory.
