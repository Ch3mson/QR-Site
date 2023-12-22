
function Generator () {
    return (
        <div className="flex p-3 place-content-center">
            <input type="text" className=" mr-3 py-1 px-2 rounded bg-opacity-20 bg-indigo-500 w-[20rem] text-white leading-tight focus:outline-none" 
            placeholder="enter url here"></input>
            <button className=" mr-3 py-1 px-2 rounded outline outline-offset-2 outline-indigo-500 hover:outline-indigo-400 bg-indigo-500 bg-opacity-20 hover:bg-indigo-400 hover:bg-opacity-20">Generate</button>
        </div>
    )
}

export default Generator;