import { MoveLeft } from 'lucide-react'
import React from 'react'
import {Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-background'>
        <div className='text-center'>
            <h1 className='mb-10 text-2xl font-bold text-foreground'>404 Page Not Found</h1>
            <Link to="/" className="text-sm hover:underline" style={{color:"hsl(var(--gold))"}}><MoveLeft /> Back To Home</Link>
        </div>
    </div>
  )
}

export default NotFound
