function Footer() {
  return (
    <div className="hidden md:block">
      <footer className="fixed bottom-0 w-full px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
        <div className="py-6 text-md text-center dark:text-gray-400">
          <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Made by{' '}
            <a href="http://ajaykanniyappan.com" target="_blank" rel="noreferrer">
              AjayKanniyappan
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
