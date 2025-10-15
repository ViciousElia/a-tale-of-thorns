export default function CopyrightNotice(){
    return (
        <div className="w-full text-xs text-center bg-primary text-light p-1">
            <p>Coded with resignation in NextJS and SQL from a small office in Colorado.</p>
            <p>Copyright © Terra Hyde 2025 - {new Date().getFullYear()}</p>
        </div>
    )
}