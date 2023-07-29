import { memo } from "react";

const Dropdown = ({ el, handleburger }) => {
return (
    <>
    <ul className="dropdown__menu">
        {el.children.map((el2) => {
        return (
            <li
            key={el2.id}
            onClick={() => {
                handleburger();
            }}
            >
            <a href="#/" className="dropdown__link">
                {el2.name}
            </a>
            </li>
        );
        })}
    </ul>
    </>
);
};

export default memo(Dropdown);
