import { companyLogos } from "../constant";

const Contact = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-5 text-center text-n-1/50">Contact</h5>
      <ul className="flex flex-col md:flex-row">
        {companyLogos.map((item) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] mb-4 md:mb-0"
            key={item.index}
          >
            <img src={item.logo} width={40} height={40} alt={item.logo} />
            <a className="px-2" href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
