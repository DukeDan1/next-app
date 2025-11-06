import React from 'react';
import { UserTable } from './UserTable';

interface Props {
    searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams;
    return (
        <div className="container mt-5">
            <h1>Users Page</h1>
            <p>Welcome to the users page!</p>
            <UserTable sortOrder={sortOrder} />
        </div>
    );
}

export default UsersPage;
