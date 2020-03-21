import React from 'react';
import {Colors} from '../../shared/colors';

function ArrowSVG(props) {
    return (
        <svg
        style={{fill: props.color ? props.color : Colors.TEXTCOLOR}}
        xmlns="http://www.w3.org/2000/svg"
        width="10.904"
        height="6.733"
        viewBox="0 0 10.904 6.733"
      >
        <path
          id="ic_keyboard_arrow_down_24px"
          d="M1.281 0l4.171 4.162L9.623 0 10.9 1.281 5.452 6.733 0 1.281z"
          transform="rotate(180 5.452 3.367)"
        />
      </svg>
    )
}

export default ArrowSVG
