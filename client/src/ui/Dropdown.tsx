import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface DropdownProps {
  Icon: React.ElementType;
  label: string;
  data: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ Icon, label, data, value, onChange }: DropdownProps) => {
  return (
    <div className="relative flex items-center px-4 py-2 border border-gray-200 rounded-md">
      {/* CONTENIDO VISUAL */}
      <div className="flex items-center gap-2 pointer-events-none">
        <Icon className="text-gray-400 mr-4" sx={{ fontSize: "2rem" }} />

        <div className="flex flex-col">
          <span className="font-semibold text-sm">{label}</span>

          <span className="text-lg">{value}</span>
        </div>
      </div>

      {/* FLECHA */}
      <KeyboardArrowDownIcon className="absolute right-3 text-gray-600 pointer-events-none" />

      {/* SELECT INVISIBLE */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {(data ?? []).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
