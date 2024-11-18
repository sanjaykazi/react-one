import React from 'react'
import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useEffect } from 'react';

const ViewPaste = () => {
    const {id} = useParams();
    const allPastes = useSelector
    ((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
                <input
                    className='p-2 place-content-evenly rounded-xl mt-2 border text-center w-[40%]'
                    type='text'
                    placeholder='Enter Title here'
                    value={paste.title}
                    disabled
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* <button
                    onClick={createPaste}
                    className='p-2 place-content-evenly rounded-xl mt-2 border'>
                    {
                        pasteId ? "Update My Paste" : "Create My Paste"
                    }
                </button> */}
            </div>
            <div className='mt-8'>
                <textarea 
                    className='border rounded-2xl mt-4 text-center min-w-[500px] p-4'
                    value={paste.content}
                    placeholder='Enter content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                    disabled
                />
            </div>
    </div>
  )
}

export default ViewPaste
