import React from 'react'

const Button = ({ incrementCount, text, children }) => {
    return (        
            <div>               
                <button onClick={incrementCount}>
                    {text}
                    {children}
                </button>
            </div>       
    )
}

export default Button
