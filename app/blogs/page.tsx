const Page=()=>{
    return(
    <div>
        <h1 className="text-5xl">BLOG</h1>s

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="bg-white shadow-lg p-4">
            <h2 className="text-xl font-semibold">POST 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
        <article className="bg-white shadow-lg p-4">
            <h2 className="text-xl font-semibold">POST 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
        <article className="bg-white shadow-lg p-4">
            <h2 className="text-xl font-semibold">POST 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
    </section>
    </div>
    )
}
export default Page