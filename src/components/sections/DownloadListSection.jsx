import { Download, FileText } from 'lucide-react';

const DownloadListSection = ({ heading, items }) => {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {heading}
          </h2>
        )}
        
        <div className="max-w-2xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-navy/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-navy" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-deep-ink group-hover:text-primary-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.format} • {item.size}
                  </p>
                </div>
                
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-white transition-all">
                  <Download className="w-5 h-5 text-accent-cyan group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadListSection;
