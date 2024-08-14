import Navbar from "@/app/component/Navbar"

const Service = () => {
    return (<>
        <div>

            <Navbar />

            <div className="h-[80vh] w-[80%] ml-64 mt-10 py-6  flex justify-center ">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full ">
                    <div className=" w-[60%] h-[100%] absolute inset-0 bg-gradient-to-r from-[#8E0E00] to-[#1F1C18] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className=" w-[60%] h-[100%] text-white relative px-4 py-10 bg-[#1F1C18] shadow-lg sm:rounded-3xl sm:p-20 ">
                        <div className="text-center pb-2  ">
                            <h1 className="text-3xl font-semibold">Contact Us!</h1>
                            <p className="text-white text-1xl">
                                Fill up the form below to send us a message.
                            </p>
                        </div>
                        <form>
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                           
                            <textarea
                                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Type your message here..."
                                name="message"
                                style={{ height: 100 }}
                                defaultValue={""}
                            />
                            <div className="flex justify-between">
                                <input
                                    className="shadow bg-white hover:bg-gray-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    defaultValue="Submit ➤"
                                />
                                <input
                                    className="shadow bg-white hover:bg-gray-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="reset"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>


    </>
    );
}

export default Service;