import React, { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const List = ({ items }) => {

    const [list, setList] = useState([])

    useEffect(() => {
        const names = items.map(el => ({
            id: uuidv4(),
            name: el,
            addIndicat: false,
        }));
        setList(names);
    }, [items]);




    const handleClick = (id) => {
        setList(list.map(prevState => 
            prevState.id === id && !prevState.addIndicat 
            ? { ...prevState, name: "!!!" + prevState.name, addIndicat: true }
            : prevState
        ))
    }


    return (
        <>
            <ul className=' '>
                {
                    list.map(el => (
                        <li key={el.id} className=" bg-gray-500  items-center 
                            mb-4  mt-3 rounded-2xl w-[600px] mx-auto  ">
                            <p className=" bg-slate-900 text-white ">{el.name}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(el.id)}> +!!!</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default List;