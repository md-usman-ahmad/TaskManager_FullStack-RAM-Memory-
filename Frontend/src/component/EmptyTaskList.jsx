export function EmptyTaskList(){
    return (
        <>
        <div class=" rounded-lg overflow-hidden h-96">
            <section class="bg-white py-16 px-4 h-full flex items-center">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="mb-8">
                        <div class="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-orange-200">
                            <span class="text-4xl text-orange-400">📁</span>
                        </div>
                    </div>
                    <h1 class="text-3xl font-light text-gray-800 mb-4">
                        Zero items in your Database
                    </h1>
                    <p class="text-base text-gray-500 mb-8 max-w-lg mx-auto">
                        Add Products into Your Database and start organizing your collection efficiently.
                    </p>
                </div>
            </section>
        </div>
        </>
    )
}