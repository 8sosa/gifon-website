type Tier = {
    name: string;
    price1Year: number;
    price3Year: number;
    price5Year: number;
  };
  
  export default function MembershipTable({ tiers }: { tiers: Tier[] }) {
    return (
      <table className="w-full border-collapse border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Membership</th>
            <th className="border p-2">1-Year</th>
            <th className="border p-2">3-Year</th>
            <th className="border p-2">5-Year</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier, i) => (
            <tr key={i}>
              <td className="border p-2">{tier.name}</td>
              <td className="border p-2">${tier.price1Year}</td>
              <td className="border p-2">${tier.price3Year}</td>
              <td className="border p-2">${tier.price5Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  