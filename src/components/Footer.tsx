interface Footer {
  label: string;
  href: string;
}
interface FooterProps {
  footers: Footer[];
}
export const Footer: React.FC<FooterProps> = ({ footers }) => (
  <div className="sticky mb-0 space-x-8 flex">
    {footers.map((e, i) => (
      <>
        {i !== 0 && (
          <div className="bg-[#8A92A6] w-1 h-1 rounded-full my-auto" />
        )}
        <a key={i} className="text-[#8A92A6] text-sm" href={e.href}>
          {e.label}
        </a>
      </>
    ))}
  </div>
);
