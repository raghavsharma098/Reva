export default function ReviewCard() {
    return (
        <div className="flex">
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-lg border border-purple-300">
            {/* Header Section */}
            <div className="flex items-center">
                {/* Profile Image */}
                <img
                    className="rounded-full h-12 w-12 border-2 border-purple-400 mr-4"
                    src="https://i.pinimg.com/736x/58/92/4b/58924be2d6f904ce4a6a2a0d7c893a35.jpg"
                    alt="User Profile Picture"
                />

                {/* User Info */}
                <div>
                    <h1 className="font-bold text-lg text-purple-800">Loundiya</h1>
                    <p className="text-purple-600 font-medium">Python Developer</p>
                    <p className="text-yellow-600 font-medium">⭐ Rating: 4.5/5</p>
                </div>
            </div>

            {/* Review Content */}
            <div className="mt-4">
                <p className="text-gray-700 font-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolores culpa quos illum maiores ex unde et tenetur consequatur omnis suscipit maxime deleniti labore laboriosam, excepturi, quae ipsa numquam nam."
                </p>
            </div>
            
        </div>

        </div>
        
    

    );
}
