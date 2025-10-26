# Hamilton Events - Multilingual Event Management Platform

A modern, responsive event management website built with Next.js 14, featuring comprehensive multilingual support and dark/light theme capabilities.

## 🌟 Features

- **Multilingual Support**: Full translation support for English, Arabic, Persian (Farsi), Dutch, Amharic, and Latin
- **RTL Language Support**: Proper right-to-left text direction for Arabic and Persian
- **Dark/Light Theme**: Seamless theme switching with proper contrast and readability
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Event Services**: Comprehensive event management services including conferences, corporate events, gala dinners, and more
- **SEO Optimized**: Built-in SEO optimization with proper meta tags and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hamilton-events
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Development

### Project Structure

```
hamilton-events/
├── app/                    # Next.js 14 app directory
│   ├── about/             # About page
│   ├── services/          # Service pages
│   │   ├── conferences-summits/
│   │   ├── corporate-conferences/
│   │   ├── event-management/
│   │   └── ...
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── language-context.tsx
│   └── navigation.tsx
├── lib/                  # Utility functions and translations
│   ├── translations/     # Translation files
│   └── utils.ts
└── public/              # Static assets
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Languages

1. **Create translation file**
   ```typescript
   // lib/translations/[language-code].ts
   export const translations = {
     // Add your translations here
   };
   ```

2. **Update language context**
   ```typescript
   // components/language-context.tsx
   const languages = [
     // Add new language entry
     { code: 'xx', label: 'Language Name' }
   ];
   ```

3. **Add RTL support (if needed)**
   ```typescript
   const isRTL = language === 'ar' || language === 'fa' || language === 'xx';
   ```

### Theme Customization

The project uses Tailwind CSS with custom theme configuration. Colors and styling can be customized in:

- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - CSS custom properties for themes
- `components/ui/` - Component-specific styling

## 🌐 Deployment

### Netlify Deployment

1. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `out` (for static export) or `.next` (for server-side rendering)

2. **Environment Variables**
   Set the following environment variables in your Netlify dashboard:
   ```
   NODE_VERSION=18
   NPM_VERSION=8
   ```

3. **netlify.toml Configuration**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Other Deployment Platforms

- **Vercel**: Deploy directly from GitHub with zero configuration
- **AWS Amplify**: Use the build settings above
- **GitHub Pages**: Enable static export in `next.config.js`

## 🎨 Customization

### Adding New Service Pages

1. Create a new directory under `app/services/[service-name]/`
2. Add a `page.tsx` file with the service content
3. Create corresponding translation files
4. Update the services navigation in `app/services/page.tsx`

### Modifying Translations

Translation files are located in `lib/translations/`. Each language has its own file with key-value pairs for all text content.

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing color scheme with theme-aware classes
- Ensure proper contrast ratios for accessibility
- Test in both light and dark modes
- Verify RTL language support for new components

## 🔧 Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all dependencies are installed
   - Check for TypeScript errors with `npm run type-check`
   - Verify all translation keys are properly defined

2. **Translation Issues**
   - Check that all language files have matching keys
   - Ensure RTL languages have proper text direction
   - Verify font feature settings for complex scripts

3. **Styling Problems**
   - Test in both light and dark themes
   - Check responsive design on different screen sizes
   - Ensure proper contrast ratios

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (including all languages and themes)
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support and questions, please contact the development team or create an issue in the repository.