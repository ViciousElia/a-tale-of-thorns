import { menuData, externals, personals, NamedPage } from '@/lib/menu-data';

export default function FooterPages() {
  const allPages = [...menuData(), ...externals(), ...personals()];
  const footerPages = allPages.filter(page => page.lock === 2);

  const onsite = footerPages.filter(page => !page.external);
  const related = personals().filter(page => page.lock === 2);
  const offsite = externals().filter(page => page.lock === 2);

  const LinkGroup = ({ title, pages }: { title: string; pages: NamedPage[] }) => (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-2 text-center">{title}</h3>
      <hr />
      <div className="flex flex-col">
        {pages.map(page => (
          <a
            key={page.name}
            href={page.href}
            title={page.name}
            className="flex items-center hover:bg-primary-800 hover:text-mid-100 transition-colors rounded justify-center"
            target={page.external ? '_blank' : '_self'}
            rel={page.external ? 'noopener noreferrer' : undefined}
          >
            {page.icon}
            <span>{page.name}</span>
            {page.external && <span>↗</span>}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-16">
      <LinkGroup title="Navigation" pages={onsite} />
      <LinkGroup title="Related Sites" pages={related} />
      <LinkGroup title="External Links" pages={offsite} />
    </div>
  );
}