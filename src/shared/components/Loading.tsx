function Loading() {
    return (
        <section className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 md:gap-8 px-4 lg:px-8">
                <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-lg text-gray-600">Tus próximos retos están cargando...</p>
                </div>
            </section>
    )
}

export default Loading;
