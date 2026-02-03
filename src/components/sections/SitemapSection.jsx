import { Link } from 'react-router-dom';
import { Check, AlertCircle, X } from 'lucide-react';

const sitemapData = {
  core: [
    { name: "Home", url: "/", status: "complete" },
    { name: "The Institute", url: "/the-institute", status: "complete" },
    { name: "Methodology", url: "/methodology", status: "complete" },
    { name: "Publications & Open Science", url: "/publications-open-science", status: "complete" },
    { name: "Governance & Oversight", url: "/governance", status: "complete" },
    { name: "Collaborate", url: "/collaborate", status: "complete" },
    { name: "Newsroom", url: "/newsroom", status: "complete" },
    { name: "Contact", url: "/contact", status: "complete" },
  ],
  technical: [
    { name: "Mission SBB-1 Technical Brief", url: "/technical-briefs/sbb-1", status: "complete" },
    { name: "Marrakesh Presentation", url: "/presentations/marrakesh-human-capital", status: "complete" },
    { name: "Oslo Proceedings Archive", url: "/proceedings/oslo-2026", status: "complete" },
  ],
  downloads: [
    { name: "Downloads Hub", url: "/downloads", status: "complete" },
    { name: "Institute Prospectus", url: "/downloads/institute-prospectus", status: "complete" },
    { name: "Micro Research Framework", url: "/downloads/micro-research-framework", status: "complete" },
    { name: "Dataset Specification v1.0", url: "/downloads/micro-dataset-specification", status: "complete" },
    { name: "Citation Guide", url: "/downloads/citation-guide", status: "complete" },
    { name: "Schema Definitions", url: "/downloads/schema-definitions", status: "complete" },
    { name: "Brand Asset Pack", url: "/downloads/brand-asset-pack", status: "complete" },
    { name: "Leadership Bio Sheet", url: "/downloads/leadership-bio-sheet", status: "complete" },
  ],
  newsroom: [
    { name: "Dispatch: Payload Authorized", url: "/newsroom/dispatch/isro-payload-authorization", status: "complete" },
    { name: "Coverage: Nobel Peace Center", url: "/newsroom/coverage/nobel-peace-center", status: "complete" },
    { name: "Update: IIT Hyderabad Advisory", url: "/newsroom/updates/iit-hyderabad-advisory", status: "complete" },
    { name: "Update: Utility Patent #4421", url: "/newsroom/updates/utility-patent-4421", status: "complete" },
    { name: "Update: Visiting Scholars 2026", url: "/newsroom/updates/visiting-scholars-2026", status: "complete" },
  ],
  legal: [
    { name: "Staff Access", url: "/staff-access", status: "complete" },
    { name: "Privacy Policy", url: "/privacy", status: "complete" },
    { name: "Terms of Use", url: "/terms", status: "complete" },
  ],
};

const StatusIcon = ({ status }) => {
  if (status === 'complete') return <Check className="w-4 h-4 text-green-600" />;
  if (status === 'partial') return <AlertCircle className="w-4 h-4 text-yellow-600" />;
  return <X className="w-4 h-4 text-red-600" />;
};

const SitemapSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-grid">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Core Pages</h3>
            <ul className="space-y-2">
              {sitemapData.core.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Technical & Archive</h3>
            <ul className="space-y-2">
              {sitemapData.technical.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Downloads</h3>
            <ul className="space-y-2">
              {sitemapData.downloads.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Newsroom Subpages</h3>
            <ul className="space-y-2">
              {sitemapData.newsroom.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Access & Legal</h3>
            <ul className="space-y-2">
              {sitemapData.legal.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Page Completion Checklist</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Page</th>
                  <th className="text-left py-3 px-4 font-semibold">URL</th>
                  <th className="text-center py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(sitemapData).flat().map((item) => (
                  <tr key={item.url} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4">
                      <Link to={item.url} className="text-primary hover:underline font-mono text-xs">
                        {item.url}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <StatusIcon status={item.status} />
                        <span className="text-xs capitalize">{item.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            This checklist ensures navigation integrity. No CTA should point to '#'.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SitemapSection;
