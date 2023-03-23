import './Catalog.css';

export const Catalog = () => {
return (
    <section id="catalog-page">
  <h1>All Logs</h1>
  {/* Display div: with information about every log (if any) */}
  <div className="allLogs">
    <div className="allLogs-info">
      <img src="" />
      <h6>Transport</h6>
      <h2>Drove a car</h2>
      <a href="#" className="details-button">
        Details
      </a>
    </div>
  </div>
  {/* Display paragraph: If there is no games  */}
  <h3 className="no-articles">No logs yet</h3>
</section>

);
};