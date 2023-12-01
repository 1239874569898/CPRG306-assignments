"use client";
import { useUserAuth } from "./auth-context";
import React from 'react';

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Try again", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Try again", error);
        }
    };
};

return (
    <main>
        User: {user?.displayName}
        <br />
        {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
        ) : (
            <button onClick={handleSignIn}>Sign In</button>
        )}
        <div>{user && <p>protected info</p>} </div>
    </main>
);
