function Meta() {
  return (
    <>
      <title>Next.js PWA Template</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Ajay Kanniyappan" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* KEYWORDS */}
      <meta
        name="description"
        content="A Complete Foundation for Building Robust PWA Apps using Next.js"
      />
      <meta
        name="keywords"
        content="Next.js, pwa, PWA-app, React, HTML, CSS, Sass, JavaScript, TypeScript"
      />
      {/* ICONS */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Next.js PWA Template" />
      <meta name="application-name" content="Next.js PWA Template" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#F3EFE0" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#F3EFE0" media="(prefers-color-scheme: dark)" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}

export default Meta;
