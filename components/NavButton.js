import { AlertCircle, BookOpen, Bell } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* NIRF Button (Orange) */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition shadow-lg">
        <AlertCircle size={20} />
        NIRF
      </button>

      {/* E-Magazine Button (Blue) */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg">
        <BookOpen size={20} />
        E-Magazine
      </button>

      {/* Notice Button (Green) */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition shadow-lg">
        <Bell size={20} />
        Notice
      </button>
    </div>
  );
};

export default FloatingButtons;
