import React from 'react'
import Sidebar from '../components/Sidebar'

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        //  @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    )
}

export default UsersLayout