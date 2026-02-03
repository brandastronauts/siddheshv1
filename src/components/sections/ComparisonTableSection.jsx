import { Check, X } from 'lucide-react';

const ComparisonTableSection = ({ heading, headers, rows }) => {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {heading}
          </h2>
        )}
        
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full bg-card rounded-xl border border-border/50 shadow-card overflow-hidden">
            {headers && (
              <thead>
                <tr className="bg-primary-navy text-white">
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left text-sm font-semibold first:rounded-tl-xl last:rounded-tr-xl"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-border">
              {rows?.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-surface/50 transition-colors">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4 text-sm">
                      {typeof cell === 'boolean' ? (
                        cell ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )
                      ) : (
                        <span className={cellIndex === 0 ? 'font-medium text-deep-ink' : 'text-muted-foreground'}>
                          {cell}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
