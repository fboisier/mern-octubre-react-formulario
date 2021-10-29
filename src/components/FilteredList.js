import React from 'react';

const FilteredList = ({ filter, items }) =>
(
    <div className="list-group mt-2">
        {items.map((item, i) => {
            const start = item.indexOf(filter);
            const end = start + filter.length;
            
            return (
                <a 
                    className="list-group-item list-group-item-action" 
                    key={i}
                    href="/">
            
                    {item.slice(0, start)}
                    <em><b>{item.slice(start, end)}</b></em>
                    {item.slice(end)}
                    
                </a>
            );
        })
        }
    </div>
)

export default FilteredList;