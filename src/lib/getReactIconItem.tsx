import {FaGithubSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {IoMdMail, IoMdPhonePortrait} from 'react-icons/io'
import {BiLogoPhp, BiLogoWordpress, BiLogoTypescript} from 'react-icons/bi'
import {SiGnubash, SiJquery, SiBootstrap, SiBulma, SiTailwindcss, SiLinux, SiLaravel, SiSqlite} from 'react-icons/si'
import {RiJavascriptLine} from 'react-icons/ri'
import {GrMysql, GrReactjs,GrDocker} from 'react-icons/gr'

export const getReactIconItem = (name: string, options:{color: string; size:number;} = {color:'#191A19', size: 30}) => {
    switch(name){
      case 'GitHub': return <FaGithubSquare {...options}/>;
      case 'Telefono': return <IoMdPhonePortrait {...options} />;
      case 'E-Mail': return <IoMdMail {...options} />;
      case 'LinkedIn': return <BsLinkedin {...options} />;
      case 'PHP': return <BiLogoPhp {...options} />;
      case 'Wordpress': return <BiLogoWordpress {...options} />;
      case 'Wordpress': return <BiLogoWordpress {...options} />;
      case 'Bash': return <SiGnubash {...options} />;
      case 'JavaScript': return <RiJavascriptLine {...options} />;
      case 'jQuery': return <SiJquery {...options} />;
      case 'MySQL': return <GrMysql {...options} />;
      case 'Bootstrap': return <SiBootstrap {...options} />;
      case 'Bulma': return <SiBulma {...options} />;
      case 'Tailwind': return <SiTailwindcss {...options} />;
      case 'TypeScript': return <BiLogoTypescript {...options} />;
      case 'ReactJS': return <GrReactjs {...options} />;
      case 'Linux': return <SiLinux {...options} />;
      case 'Docker': return <GrDocker {...options} />;
      case 'Laravel': return <SiLaravel {...options} />;
      case 'SQLite': return <SiSqlite {...options} />;
      default: return name;
    }
  }