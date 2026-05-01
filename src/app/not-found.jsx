import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="w-11/12 lg:max-w-7xl mx-auto my-10 text-center">
            <div className="bg-gray-100 shadow-sm p-10 max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">SORRY!</h1>
                <h2 className="text-3xl font-bold">Page Not Found</h2>
                <p className="text-lg font-medium my-4">The page you are looking for does not exist or has been moved.</p>
                <Link href={'/'}> <button className="btn btn-primary">Go Home</button> </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;