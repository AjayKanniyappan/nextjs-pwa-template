import Link from 'next/link';

function Footer(): JSX.Element {
  return (
    <div className="hidden sm:block">
      <footer className="fixed bottom-0 w-full border-t dark:bg-[#18181b] dark:border-[#393941]">
        <div className="py-4 text-center">
          <p className="text-lg font-bold text-zinc-800 hover:text-[#000000] dark:text-[#E8E2E2] dark:hover:text-[#F5F5F5]">
            Developed by{' '}
            <Link
              href="https://ajaykanniyappan.com"
              className="underline hover:underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              Ajay Kanniyappan
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
