interface AccordionItemProps {
  title: string;
  description: string;
}

const AccordionItem = ({ title, description }: AccordionItemProps) => {
  return (
    <details className="group border border-green-700 rounded-lg overflow-hidden shadow-md">
      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-green-900 hover:text-white transition-colors duration-200 list-none bg-green-800 text-white">
        <h4 className="font-semibold group-hover:text-white">{title}</h4>
        <svg className="w-5 h-5 text-green-200 group-hover:text-white transform group-open:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </summary>
      <div className="px-4 pb-4 pt-2 bg-green-100 border-t border-green-300">
        <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
      </div>
    </details>
  );
};

export default AccordionItem;