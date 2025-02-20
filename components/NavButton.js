import { AlertCircle } from "lucide-react";

const NavButton = ({ label }) => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition">
      <AlertCircle size={20} />
      {label}
    </button>
  );
};

export default NavButton;
