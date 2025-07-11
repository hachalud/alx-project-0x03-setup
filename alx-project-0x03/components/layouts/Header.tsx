import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
            action={() => console.log("Sign In clicked")}
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
            action={() => console.log("Sign Up clicked")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
