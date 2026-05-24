import { useState, useEffect } from 'react';

export default function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-end font-mono tabular-nums">
            <div className="sm:text-2xl font-bold dark:text-white text-black tracking-tight">
                {time.getHours().toString().padStart(2, '0')}:
                {time.getMinutes().toString().padStart(2, '0')}:
                <span className="text-indigo-400">
                    {time.getSeconds().toString().padStart(2, '0')}
                </span>
            </div>
        </div>
    );
}
