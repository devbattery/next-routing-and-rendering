export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <seciton id="archive-filter">{archive}</seciton>
      <seciton id="archive-latest">{latest}</seciton>
    </div>
  );
}
