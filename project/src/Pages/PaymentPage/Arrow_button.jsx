import { FaChevronRight } from "react-icons/fa";
import './Arrow_button.css';

function Arrow_button({text}) {
    return (
        <button className="arrow-button">
            {text}
            <FaChevronRight id="arrow-icon" />
        </button>
    );
};

export default Arrow_button;
