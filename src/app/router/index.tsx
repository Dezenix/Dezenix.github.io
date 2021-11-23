import HomePage from '@/app/pages/HomePage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function routes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}
