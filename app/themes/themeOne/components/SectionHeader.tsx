import React from 'react';

const SectionHeader = (props: any) => {
    return (
        <div className="col-md-12">
            <div className={"heading"+(props?.heading ?? 2)}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default SectionHeader;