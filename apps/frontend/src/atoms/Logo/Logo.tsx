type LogoProps = {
  img: string
  link: string
}

export const Logo: React.FC<LogoProps> = ({ img, link }) => {
  return (
    <a href={link} target="_blank">
      <img
        src={img}
        className="h-32 animate-spin-slow p-3 drop-shadow-logo-unselected transition-all duration-300 ease-in-out hover:drop-shadow-logo-selected"
        alt="React logo"
      />
    </a>
  )
}
