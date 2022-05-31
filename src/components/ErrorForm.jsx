import React from 'react'

const ErrorForm = () => {
    return (
        <div
            className="bg-red-500 rounded-lg text-center border-4 border-red-600 mb-5 py-2"
        >
            <h2
                className="text-lg font-black text-red-100"
            >
                ALL FIELDS ARE REQUIRED
            </h2>
        </div>
    )
}

export default ErrorForm
