import React from 'react'
import { UserAuth } from '../context/AuthContext'

export const Avatar = () => {
    const { user } = UserAuth();

    return (
        <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                <span className="text-xl">
                    {user && user.username ? user.username.charAt(0) : ''}
                </span>
            </div>
        </div>
    )
}