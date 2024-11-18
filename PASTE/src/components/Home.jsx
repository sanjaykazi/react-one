import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useEffect } from 'react';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);
    useEffect(() => {
        if(pasteId){
            const paste = allPastes.find((p) => p._id === pasteId);
            console.log(paste);
            if(paste){
                setTitle(paste.title);
                setValue(paste.content);
            }  
        }
    }, [pasteId]);
    function createPaste(){
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        
        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
        }else{
            //create
            dispatch(addToPastes(paste));
        }
        //after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});

    }
    return (
        <div >
            <div className='flex flex-row gap-7 place-content-between'>
                <input
                    className='p-2 place-content-evenly rounded-xl mt-2 border text-center w-[40%]'
                    type='text'
                    placeholder='Enter Title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={createPaste}
                    className='p-2 place-content-evenly rounded-xl mt-2 border'>
                    {
                        pasteId ? "Update My Paste" : "Create My Paste"
                    }
                </button>
            </div>
            <div className='mt-8'>
                <textarea 
                    className='border rounded-2xl mt-4 text-center min-w-[500px] p-4'
                    value={value}
                    placeholder='Enter content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </div>
    )
}

export default Home
