// // import React from 'react';
import PropTypes from 'prop-types';
// import { PropTypes } from 'prop-types';
// import { PropTypes } from 'prop-types';
// import { PropTypes } from 'prop-types';



const PriceOption = ({option}) => {

    const {name,price,features} = option;

    return (
       <h2>
        <span className="text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>

       </h2>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object 
}
export default PriceOption;