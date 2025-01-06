import { styles } from "../styles";
import { mail, linkedin, githubfooter } from "../assets";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-8 bottom-0 bg-tertiary`}
    >
      <div className="w-full flex flex-col md:flex-row justify-center md:gap-20 gap-6 items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <a href="mailto:ongshaoqiang@gmail.com">
            <span className="text-white text-[16px] md:text-[18px] font-bold cursor-pointer flex items-center justify-center">
              <img
                src={mail}
                alt="Email"
                className="w-7 h-7 md:w-9 md:h-9 object-contain filter brightness-0 invert opacity-70"
              />
              &nbsp;&nbsp;ongshaoqiang@gmail.com
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="http://github.com/kenjiong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubfooter}
              alt="GitHub"
              className="w-6 h-6 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-70"
            />
          </a>
          <a
            href="http://linkedin.com/in/kenjiongshaoqiang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-6 h-6 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-70"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
