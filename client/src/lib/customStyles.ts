import { injectGlobal } from '@emotion/css';

injectGlobal`
  :root {
    --primary: 26 26 26; /* #1A1A1A rich black */
    --secondary: 255 51 102; /* #FF3366 energetic red */
    --accent: 0 201 255; /* #00C9FF electric blue */
    --background: 255 255 255; /* #FFFFFF pure white */
    --foreground: 51 51 51; /* #333333 soft black */
    --muted: 245 245 245; /* #F5F5F5 light gray */
    --muted-foreground: 115 115 115; /* #737373 mid gray */
    --card: 255 255 255; /* #FFFFFF white */
    --card-foreground: 51 51 51; /* #333333 soft black */
    --popover: 255 255 255; /* #FFFFFF white */
    --popover-foreground: 51 51 51; /* #333333 soft black */
    --border: 230 230 230; /* #E6E6E6 light gray */
    --input: 230 230 230; /* #E6E6E6 light gray */
    --ring: 0 201 255; /* #00C9FF electric blue */
    --radius: 0.5rem;
    
    /* Chart colors */
    --chart-1: 0 201 255; /* #00C9FF electric blue */
    --chart-2: 255 51 102; /* #FF3366 energetic red */
    --chart-3: 26 26 26; /* #1A1A1A rich black */
    --chart-4: 115 115 115; /* #737373 mid gray */
    --chart-5: 179 179 179; /* #B3B3B3 light gray */
    
    /* Sidebar colors */
    --sidebar-background: 26 26 26; /* #1A1A1A rich black */
    --sidebar-foreground: 255 255 255; /* #FFFFFF white */
    --sidebar-primary: 255 51 102; /* #FF3366 energetic red */
    --sidebar-primary-foreground: 255 255 255; /* #FFFFFF white */
    --sidebar-accent: 0 201 255; /* #00C9FF electric blue */
    --sidebar-accent-foreground: 255 255 255; /* #FFFFFF white */
    --sidebar-border: 38 38 38; /* #262626 dark gray */
    --sidebar-ring: 0 201 255; /* #00C9FF electric blue */
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: hsl(var(--foreground));
    background-color: hsl(var(--background));
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  .glass {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default {};
