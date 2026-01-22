/**
 * Framer to Next.js Converter Script
 * 
 * This script extracts CSS and HTML content from a Framer-exported HTML file
 * and creates the appropriate Next.js files.
 */

const fs = require('fs');
const path = require('path');

// Read the source HTML file
const htmlPath = path.join(__dirname, 'site.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extract all CSS from <style> tags in the <head>
function extractCSS(html) {
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) {
    throw new Error('Could not find <head> section');
  }
  
  const headContent = headMatch[1];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const cssBlocks = [];
  let match;
  
  while ((match = styleRegex.exec(headContent)) !== null) {
    cssBlocks.push(match[1].trim());
  }
  
  return cssBlocks.join('\n\n');
}

// Extract body content (everything inside <body>)
function extractBodyContent(html) {
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    throw new Error('Could not find <body> section');
  }
  
  return bodyMatch[1].trim();
}

// Extract SVG definitions (they're usually at the bottom for <use> references)
function extractSVGDefs(bodyContent) {
  const svgDefsMatch = bodyContent.match(/<svg[^>]*style="[^"]*display:\s*none[^"]*"[^>]*>[\s\S]*?<\/svg>/gi);
  return svgDefsMatch ? svgDefsMatch.join('\n') : '';
}

console.log('🔄 Converting Framer HTML to Next.js...\n');

// Extract CSS
console.log('📝 Extracting CSS...');
const css = extractCSS(htmlContent);
console.log(`   Found ${css.split('\n').length} lines of CSS`);

// Extract body content
console.log('📝 Extracting body content...');
const bodyContent = extractBodyContent(htmlContent);
console.log(`   Found ${bodyContent.split('\n').length} lines of HTML`);

// Create src/app directory if it doesn't exist
const appDir = path.join(__dirname, 'src', 'app');
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// Write globals.css
console.log('💾 Writing globals.css...');
fs.writeFileSync(path.join(appDir, 'globals.css'), css);

// Create page.tsx with the body content
console.log('💾 Writing page.tsx...');
const pageContent = `export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: \`${bodyContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`
      }} />
    </>
  );
}
`;
fs.writeFileSync(path.join(appDir, 'page.tsx'), pageContent);

console.log('\n✅ Conversion complete!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000');
