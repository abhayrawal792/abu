import React, { useEffect, useState, useRef } from 'react'; // 👈 Import useRef
import '../HeartTransition.css';
import { useLocation } from 'react-router';

const HeartTransition = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const isInitialMount = useRef(true); 

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false; 
            return;
        }

        setLoading(true);
        setFadeOut(false);

        // Allow 3.8s heart animation to draw, fill, and pulse completely
        const timer1 = setTimeout(() => {
            setFadeOut(true);
        }, 3900);

        // Smoothly unmount after fade-out transition completes
        const timer2 = setTimeout(() => {
            setLoading(false);
            setFadeOut(false);
        }, 4400);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [location.pathname]);


    return (
        <div className="relative">
            {loading && (
                <div 
                    className={`route-loader ${fadeOut ? 'fade-out-exit' : ''}`}
                    style={{
                        background: 'linear-gradient(160deg, #880e4f 0%, #c2185b 40%, #e91e8c 100%)',
                        transition: 'opacity 0.5s ease-out',
                        pointerEvents: fadeOut ? 'none' : 'all'
                    }}
                >
                    <main className='bg-[#8b0000] HeartTransisitonOpen'>
                        <svg className="heart-loader" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" version="1.1">
                            <g className="heart-loader__group">
                                <path className="heart-loader__square" strokeWidth="1" fill="none" d="M0,30 0,90 60,90 60,30z" />
                                <path className="heart-loader__circle m--left" strokeWidth="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0" />
                                <path className="heart-loader__circle m--right" strokeWidth="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0" />
                                <path className="heart-loader__heartPath" strokeWidth="2" d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0" />
                            </g>
                        </svg>
                    </main>

                </div>
            )}

            <div style={{ opacity: loading ? 0.3 : 1, transition: "opacity 0.3s ease" }}>
                {children}
            </div>
        </div>
    )
}

export default HeartTransition