export default function CountButtons({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="button-container">{children || null}</div>;
}
