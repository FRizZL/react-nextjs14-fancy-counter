export default function Title({ count }: { count: number }) {
  return (
    <h1 className="title">
      {count < 5 ? (
        <span>Fancy Counter</span>
      ) : (
        <span>Limit! Buy <b>Pro</b> for &gt;5</span>
      )}
    </h1>
  );
}
