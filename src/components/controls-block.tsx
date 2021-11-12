import React from 'react';
import { KeyActon } from '../enums/enums';
import AppButton from './ui /app-button';

const ControlsBlock = () => {

    function buttonClick (data: KeyActon){
        console.log(KeyActon[data])
    }

    return (
        <div className='App-controls-block' >

            <AppButton onClick={() => buttonClick(KeyActon.Left)}>
                {'<'}
            </AppButton>

            <button onClick={() => buttonClick(KeyActon.Revers)}>{'()'}</button>

            <button onClick={() => buttonClick(KeyActon.Down)}>{'|'}</button>

            <button onClick={() => buttonClick(KeyActon.Right)}>{'>'}</button>
        </div>
    )
};

export default ControlsBlock;
