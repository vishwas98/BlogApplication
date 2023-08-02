import { faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Logo = () => {
  return (
    <div className="text-3xl text-center py-4 font-heading">
      BlogApplication
      <FontAwesomeIcon icon={faRobot} className="text-2xl text-slate-400" />
    </div>
  );
};
