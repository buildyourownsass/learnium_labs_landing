interface AccordionItemProps {
  title: string;
  description: string;
}

const AccordionItem = ({ title, description }: AccordionItemProps) => {
  return (
    <details className="group border border-gray-200 rounded-lg overflow-hidden">
      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-green-50 transition-colors duration-200 list-none">
        <h4 className="font-semibold text-gray-900 group-hover:text-green-700">{title}</h4>
        <svg className="w-5 h-5 text-gray-500 group-hover:text-green-600 transform group-open:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </summary>
      <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </details>
  );
};

export default AccordionItem;