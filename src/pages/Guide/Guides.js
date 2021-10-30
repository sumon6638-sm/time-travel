import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Guide from './Guide';

const Guides = () => {

    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch("./guide.json")
            .then(res => res.json())
            .then(data => setGuides(data));
    },[])

    return (
        <div>
            <h2 className='text-center' style={{ fontFamily: "Fruktur" }}>OUT INTERESTING GUIDES</h2>
            <hr className='w-25 mx-auto' />

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    guides.map(guide =>
                        <Guide
                            key={guide.id}
                            guide={guide}
                        ></Guide>
                    )
                }
            </div>
        </div>
    );
};

export default Guides;