const portals: (() => React.ReactNode)[] = [];

export function PortalsWrapper() {
  return (
    <>
      {portals.map((Portal, index) => (Portal ? <Portal key={index} /> : null))}
    </>
  );
}
