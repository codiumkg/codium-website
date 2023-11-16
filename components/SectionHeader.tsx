interface Props {
  icon: JSX.Element;
  text: string;
}

export default function SectionHeader({ icon, text }: Props) {
  return (
    <h1 className="w-screen flex items-center justify-center bg-primary p-3 border-b border-t border-highlight text-xl font-bold mb-4">
      <div className="rounded-full bg-secondary border border-highlight shadow-md mr-4 p-3">
        {icon}
      </div>
      <span>{text}</span>
    </h1>
  );
}
