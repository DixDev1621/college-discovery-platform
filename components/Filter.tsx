type FilterProps = {
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
};

export default function Filter({
  selectedLocation,
  setSelectedLocation,
}: FilterProps) {
  return (
    <select
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="w-full p-3 mb-6 border rounded-lg bg-gray-900 text-white"
    >
      <option value="All">All Locations</option>
      <option value="Chennai">Chennai</option>
      <option value="Trichy">Trichy</option>
    </select>
  );
}