
export const Canvas: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>
        <div className="min-h-screen bg-p-white rounded-md p-1 m-4 shadow-md">
            {children}
        </div>
    </>
}