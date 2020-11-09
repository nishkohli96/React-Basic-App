import React from 'react';
import Can from '../casl/Can';

const CaslEg = () => {
    /*  Based upon the value of the variable "ability" defined in Ability.js, you 
        can see the content of this page */
    return (
        <>
            <Can I="view" a="Dashboard">
                <p> Yes, I can view Dashboard page</p>
            </Can>
            <Can I="view" a="Introduction">
                <p> Yes, I can view Introduction page</p>
            </Can>
            <Can I="drink" a="coffee">
                <p> Yes, I can drink coffee</p>
            </Can>
            <Can I="drink" a="tea">
                <p> Yes, I can drink tea</p>
            </Can>
            <p style={{ color: 'red', fontWeight: '400' }}>
                Based upon the value of variable &apos;ability&apos; defined in
                Ability.js, you can see the content of this page.
            </p>
        </>
    );
};

export default CaslEg;
