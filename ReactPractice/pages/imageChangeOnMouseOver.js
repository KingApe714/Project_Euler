import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="static/speakers/bw/hat_off_bw.jpeg"
                                    secondaryImg="/static/speakers/hat_off_color.jpeg"
                                    alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="static/speakers/bw/hat_on_bw.jpeg"
                                    secondaryImg="/static/speakers/hat_on_color.jpeg"
                                    alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver