import React from 'react';

interface UsernameProps {
    username: string;
}

const AdminUsername: React.FC<UsernameProps> = ({ username }) => {
    return (
        <div>
            <span>Admin: {username}</span>
        </div>
    );
};

export default AdminUsername;