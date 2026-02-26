import { Link } from 'react-router-dom';
import { Check, AlertCircle, X } from 'lucide-react';

const sitemapData = {
  core: [
    { name: "Home", url: "/", status: "complete" },
    { name: "The Institute", url: "/the-institute", status: "complete" },
    { name: "Methodology", url: "/methodology", status: "complete" },
    { name: "Publications", url: "/publications", status: "complete" },
    { name: "Governance & Oversight", url: "/governance", status: "complete" },
    { name: "Collaborate", url: "/collaborate", status: "complete" },
    { name: "Newsroom", url: "/newsroom", status: "complete" },
    { name: "Contact", url: "/contact", status: "complete" },
  ],
  governance: [
    { name: "Ethics", url: "/governance/ethics", status: "complete" },
    { name: "Research Standards", url: "/governance/standards", status: "complete" },
    { name: "Compliance", url: "/governance/compliance", status: "complete" },
    { name: "Our Standards", url: "/governance/our-standards", status: "complete" },
  ],
  methodology: [
    { name: "Innovation", url: "/methodology/innovation", status: "complete" },
  ],
  publications: [
    { name: "IN-SPACe Authorization Letter", url: "/publications/in-space-authorization-letter", status: "complete" },
    { name: "SAPARYA / IMF Case Study", url: "/publications/saparya-imf-case-study", status: "complete" },
  ],
  patents: [
    { name: "Patents Registry", url: "/patents", status: "complete" },
    { name: "Automated Security UAV", url: "/patents/automated-security-uav", status: "complete" },
    { name: "Borehole Rescue System", url: "/patents/borehole-rescue-system", status: "complete" },
    { name: "Contactless Delivery System", url: "/patents/contactless-delivery-system", status: "complete" },
    { name: "Autonomous Medical Assistance System", url: "/patents/autonomous-medical-assistance-system", status: "complete" },
    { name: "Autonomous Health Monitoring System", url: "/patents/autonomous-health-monitoring-system", status: "complete" },
  ],
  books: [
    { name: "Books", url: "/books", status: "complete" },
    { name: "Lining The Nest", url: "/books/lining-the-nest", status: "complete" },
  ],
  team: [
    { name: "Team", url: "/team", status: "complete" },
    { name: "Pavan Goyal", url: "/team/pavan-goyal", status: "complete" },
    { name: "Munira Hussain", url: "/team/munira-hussain", status: "complete" },
    { name: "Adolescent Research Cohort", url: "/team/adolescent-research-cohort", status: "complete" },
  ],
  downloads: [
    { name: "Downloads Hub", url: "/downloads", status: "complete" },
  ],
  technical: [
    { name: "Mission SBB-1 Technical Brief", url: "/technical-briefs/sbb-1", status: "complete" },
    { name: "Marrakesh Presentation", url: "/presentations/marrakesh-human-capital", status: "complete" },
    { name: "Oslo Proceedings Archive", url: "/proceedings/oslo-2026", status: "complete" },
  ],
  newsroom: [
    { name: "Dispatch: Payload Authorized", url: "/newsroom/dispatch/isro-payload-authorization", status: "complete" },
    { name: "Coverage: Nobel Peace Center", url: "/newsroom/coverage/nobel-peace-center", status: "complete" },
    { name: "Update: IIT Hyderabad Advisory", url: "/newsroom/updates/iit-hyderabad-advisory", status: "complete" },
    { name: "Update: Utility Patent #4421", url: "/newsroom/updates/utility-patent-4421", status: "complete" },
    { name: "Update: Visiting Scholars 2026", url: "/newsroom/updates/visiting-scholars-2026", status: "complete" },
  ],
  legal: [
    { name: "Privacy Policy", url: "/privacy", status: "complete" },
    { name: "Terms of Use", url: "/terms", status: "complete" },
    { name: "Sitemap", url: "/sitemap", status: "complete" },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
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
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Governance</h3>
            <ul className="space-y-2">
              {sitemapData.governance.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Methodology</h3>
            <ul className="space-y-2">
              {sitemapData.methodology.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Publications</h3>
            <ul className="space-y-2">
              {sitemapData.publications.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Patents</h3>
            <ul className="space-y-2">
              {sitemapData.patents.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Books</h3>
            <ul className="space-y-2">
              {sitemapData.books.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Team</h3>
            <ul className="space-y-2">
              {sitemapData.team.map((item) => (
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
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Legal & Access</h3>
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
