import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const ComingSoon = () => {
  return (
    <div className="not-found">
      <h2>Coming Soon</h2>
      <p>Page under construction</p>
      <FontAwesomeIcon className="code-icon" icon={faLaptopCode} size="lg" />
    </div>
  );
};

export default ComingSoon;