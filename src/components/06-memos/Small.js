import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log(' small renderizado ');
    return (
        <small>
            {value}
        </small>
    );
});
