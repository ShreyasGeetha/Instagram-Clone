import IconsGroup from './IconsGroup';
import Logo from './Logo';
import Search from './Search';

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-5 lg:mx-auto flex     justify-center md:justify-around py-3">
        <Logo />

        <Search />

        <IconsGroup />
        </div>
    </div>
  );
}

export default Header;