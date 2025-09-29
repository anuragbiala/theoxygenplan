import React from 'react';

export default function PageHeadTitle({ title, description }) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
        </>
    );
}
