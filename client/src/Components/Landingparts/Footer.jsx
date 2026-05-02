import Logo from "../Logo";

function Footer() {
  return (
    <div className="py-16 bg-white flex flex-col items-center justify-center text-center">
      <Logo />
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mt-4">
        Making disease surveillance accessible to everyone, everywhere
        through innovative technology and community-driven solutions.
      </p>
    </div>
  );
}

export default Footer;
