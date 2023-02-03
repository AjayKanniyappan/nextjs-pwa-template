import { BuyMeaCoffeeSvg } from '@svg/index';

function Coffee() {
  return (
    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-16 animate-bounce mr-4 z-10">
      <div>
        <a
          title="Buy me a coffee"
          href="https://www.buymeacoffee.com/ajaykanniyappan"
          target="_blank"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          rel="noreferrer"
        >
          <div>
            <BuyMeaCoffeeSvg />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Coffee;
