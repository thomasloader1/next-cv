import { FaGithubSquare, FaPhp } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io'
import { BiLogoPhp, BiLogoWordpress, BiLogoTypescript } from 'react-icons/bi'
import { SiGnubash, SiJquery, SiBootstrap, SiBulma, SiTailwindcss, SiLinux, SiLaravel, SiSqlite } from 'react-icons/si'
import { GrMysql, GrReactjs, GrDocker } from 'react-icons/gr'
import { RiJavascriptFill } from 'react-icons/ri'
import { IconName } from '@/types'

interface IconOptions {
  color: string;
  size: number;
  hideText: boolean;
}

const iconComponents: Record<IconName, React.ElementType> = {
  GitHub: FaGithubSquare,
  Telefono: IoMdPhonePortrait,
  'E-Mail': IoMdMail,
  LinkedIn: BsLinkedin,
  PHP: FaPhp,
  Wordpress: BiLogoWordpress,
  Bash: SiGnubash,
  JavaScript: RiJavascriptFill,
  jQuery: SiJquery,
  MySQL: GrMysql,
  Bootstrap: SiBootstrap,
  Bulma: SiBulma,
  Tailwind: SiTailwindcss,
  TypeScript: BiLogoTypescript,
  ReactJS: GrReactjs,
  Linux: SiLinux,
  Docker: GrDocker,
  Laravel: SiLaravel,
  SQLite: SiSqlite
}

export const getReactIconItem = (name: IconName, options: IconOptions = { color: '#191A19', size: 30, hideText: true }) => {
  const IconComponent = iconComponents[name];

  const Component = () => (
    <div className='flex items-center'>
      <IconComponent  {...options} />
      <span className={options.hideText ? "hidden" : `ml-2`}>{name}</span>
    </div>
  )

  return IconComponent ? <Component /> : name
}