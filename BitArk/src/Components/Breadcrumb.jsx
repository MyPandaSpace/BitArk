import { Link } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/NEWS">最新消息</Link>
        </li>
        <li className="breadcrumb-separator">/</li>
        <li className="breadcrumb-item active"><Link to="/ArticlePage">虛擬貨幣的現狀與未來發展</Link></li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
