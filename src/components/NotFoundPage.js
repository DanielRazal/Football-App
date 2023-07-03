import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    return (
        <div>
            <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 class="text-4xl font-bold mb-4">
                    <i class="fas fa-exclamation-circle"></i> 404 Not Found
                </h1>
                <p class="text-lg">The requested page does not exist.</p>
                <Link to="/leagues" 
                class="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">Go Back</Link>
            </div>
        </div >
    )
}


export default NotFoundPage;
