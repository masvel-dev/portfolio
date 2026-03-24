type Props = {
  title: string;
  items: string[];
};

export function ListBlock({ title, items }: Props) {
  return (
    <div className="space-y-2">
      <h5>{title}</h5>
      <ul className="text-gray-500 list-disc space-y-1 pl-5">
        {items.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}