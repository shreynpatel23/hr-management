import React from 'react'
import {Colors } from '../../shared/colors';

function FeedsSvg(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="prefix__rss-feed" width="25" height="25" viewBox="0 0 26.034 26.034" style={{fill: props.color ? props.color : Colors.TEXTCOLOR}}>
            <path id="prefix__Path_3" d="M91.312 298.976a2.84 2.84 0 1 0 2.849 2.84 2.847 2.847 0 0 0-2.849-2.84zm0 4a1.16 1.16 0 1 1 1.17-1.16 1.165 1.165 0 0 1-1.17 1.161z" data-name="Path 3" transform="translate(-83.821 -283.283)"/>
            <path id="prefix__Path_4" d="M19.044 0H6.989A7.084 7.084 0 0 0 0 6.99v12.054a7.083 7.083 0 0 0 6.989 6.99h12.055a7.084 7.084 0 0 0 6.991-6.99V6.99A7.084 7.084 0 0 0 19.044 0zm5.311 19.044a5.382 5.382 0 0 1-5.311 5.31H6.989a5.381 5.381 0 0 1-5.309-5.31V6.99a5.382 5.382 0 0 1 5.309-5.31h12.055a5.381 5.381 0 0 1 5.311 5.31z" data-name="Path 4"/>
            <path id="prefix__Path_5" d="M93.64 186.016a.84.84 0 0 0-.84.84v2.888a.839.839 0 0 0 .84.84 5.831 5.831 0 0 1 5.979 5.992.839.839 0 0 0 .84.84h2.9a.839.839 0 0 0 .84-.839c.001-5.33-5.231-10.561-10.559-10.561zm7.614 9.72a7.441 7.441 0 0 0-6.775-6.787v-1.2a9.864 9.864 0 0 1 7.985 7.988z" data-name="Path 5" transform="translate(-87.929 -176.252)"/>
            <path id="prefix__Path_6" d="M93.64 88.48a.84.84 0 0 0-.84.84v2.887a.84.84 0 0 0 .84.84 11.256 11.256 0 0 1 11.1 11.112.839.839 0 0 0 .84.84h2.9a.84.84 0 0 0 .84-.84A15.7 15.7 0 0 0 93.64 88.48zm12.752 14.839A13 13 0 0 0 94.48 91.4v-1.215a14.019 14.019 0 0 1 13.135 13.135z" data-name="Path 6" transform="translate(-87.929 -83.836)"/>
        </svg>

    )
}

export default FeedsSvg
