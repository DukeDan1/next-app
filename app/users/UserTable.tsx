import Link from "next/link";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export async function UserTable(sortOrder: { sortOrder: string }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    const sortOrderVal = sortOrder.sortOrder;

    if (sortOrderVal) {
        users.sort((a, b) => {
            const av = a[sortOrderVal as keyof User];
            const bv = b[sortOrderVal as keyof User];

            if (typeof av === "number" && typeof bv === "number") {
                return av - bv;
            }

            return String(av).localeCompare(String(bv));
        });
    }

    return (
         <table className="table table-striped">
                <thead>
                    <tr>
                        <th><Link href="/users/?sortOrder=id">ID</Link></th>
                        <th><Link href="/users/?sortOrder=name">Name</Link></th>
                        <th><Link href="/users/?sortOrder=username">Username</Link></th>
                        <th><Link href="/users/?sortOrder=email">Email</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
};