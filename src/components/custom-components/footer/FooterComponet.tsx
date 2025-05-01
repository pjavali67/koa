// components/footer.tsx
import Link from "next/link";
import { FooterData } from "./Footer";
import footerData from "./footer.json";

export default function FooterComponent() {
  const data: FooterData = footerData;

  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Description Section - Full width on mobile, half on tablet, quarter on desktop */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold">{data.description.heading}</h3>
            <p className="text-indigo-100 text-sm sm:text-base">
              {data.description.text}
            </p>
          </div>

          {/* Other Sections - Stack on mobile, grid on larger screens */}
          {data.sections.map((section) => (
            <div key={section.title} className="space-y-4 sm:col-span-1 lg:col-span-1 ml-20">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-indigo-100 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section - Stacked on mobile, row on larger screens */}
        <div className="border-t border-indigo-800 mt-8 pt-6 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <p className="text-indigo-200 text-xs sm:text-sm text-center sm:text-left">
            {data.copyright.text}
          </p>
          <Link
            href={data.copyright.poweredBy.href}
            className="text-indigo-200 hover:text-white transition-colors text-xs sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.copyright.poweredBy.text}
          </Link>
        </div>
      </div>
    </footer>
  );
}