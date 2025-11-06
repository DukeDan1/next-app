const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="aside bg-light p-3" style={{ minHeight: '100vh' }}>
            <h2>Admin Panel</h2>
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/users">Users</a>
                    </li>
                </ul>
            </nav>
            <div className="container">{children}</div>
        </div>
    );
}

export default AdminLayout;
