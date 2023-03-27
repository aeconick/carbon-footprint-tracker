import './Catalog.css';
import { CatalogItem } from './CatalogItem';

export const Catalog = ({
  logs
}) => {
  return (
    <section id="catalog-page">
      <h1>All Logs</h1>

      {logs.map(x => <CatalogItem key={x._id} {...x} />)}
      
      {logs.length===0 && (
        <h3 className="no-articles">No logs yet</h3>
      )}
    </section>

  );
};