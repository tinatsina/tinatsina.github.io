# Tinaye's Personal Blog & Portfolio

Welcome to my personal blog and portfolio website, built with
[Docusaurus](https://docusaurus.io/). This site showcases my technical
writing, professional achievements, and certifications as a System
Administrator, Linux Kernel Developer, and Embedded Systems Developer.

## 🚀 Features

- **Personal Blog**: Technical articles, project write-ups, and industry insights
- **Portfolio Documentation**: Detailed documentation of my works and achievements
- **Certifications Page**: Display of professional certifications and accomplishments
- **Responsive Design**: Modern, clean design that works on all devices
- **RSS/Atom Feeds**: Subscribe to blog updates via RSS or Atom feeds
- **Search Functionality**: Built-in search for blog posts and documentation

## 📁 Site Structure

```text
personal_website/
├── blog/                    # Blog posts (Markdown/MDX format)
│   ├── authors.yml         # Blog author information
│   ├── tags.yml           # Blog tag definitions
│   └── YYYY-MM-DD-*.md    # Individual blog posts
├── docs/                   # Documentation pages
│   └── *.md               # Documentation files
├── src/                   # React components and CSS
├── static/               # Static assets (images, icons)
└── docusaurus.config.js  # Site configuration
```

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 18.0
- Yarn package manager

### Installation

```bash
yarn install
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens a browser window.
Most changes are reflected live without having to restart the server.

### Creating New Blog Posts

1. Create a new Markdown file in the `blog/` directory with the format
   `YYYY-MM-DD-title.md`

2. Use the following frontmatter template:

   ```yaml
   ---
   slug: my-blog-post-title
   title: My Blog Post Title
   authors: [tinaye]
   tags: [linux, kernel, embedded]
   ---
   ```

3. Add your content in Markdown format

4. Run `yarn start` to preview your post

### Building for Production

```bash
yarn build
```

This command generates static content into the `build` directory.
The built site can be served using any static content hosting service.

## 📝 Blog Guidelines

### Post Format

- Use descriptive, SEO-friendly titles
- Include relevant tags from `blog/tags.yml`
- Add a featured image when appropriate
- Keep code examples concise and well-commented
- Use proper Markdown formatting

### Categories & Tags

- **Linux**: Kernel development, system administration, distributions
- **Embedded**: Microcontrollers, RTOS, firmware, hardware
- **DevOps**: CI/CD, automation, infrastructure as code
- **Programming**: C, Python, Rust, shell scripting
- **Career**: Professional development, certifications, industry trends

## 🚀 Deployment

### GitHub Pages Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<YourGitHubUsername> yarn deploy
```

This command builds the website and pushes to the `gh-pages` branch
automatically.

### Manual Deployment

1. Build the site: `yarn build`

2. Deploy the contents of the `build` directory to your preferred
   hosting service

## 🔧 Configuration

Key configuration files:

- `docusaurus.config.js` - Main site configuration (title, theme, navigation)
- `sidebars.js` - Documentation sidebar structure
- `blog/authors.yml` - Author profiles and metadata
- `blog/tags.yml` - Tag definitions and descriptions

## 🤝 Contributing

While this is a personal blog, suggestions and corrections are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [tinatsina.github.io](https://tinatsina.github.io/)
- **GitHub**: [@tinatsina](https://github.com/tinatsina)
- **LinkedIn**: [Tinaye Tsinakwadi](https://www.linkedin.com/in/tinayetsina/)

---

*Built with Docusaurus - A modern static website generator for documentation and
blogs.*
