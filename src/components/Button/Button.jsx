export default function Button({ text }) {
    return (
        <button className=" text-white font-bold bg-green-800 px-8 md:px-20 py-2 mx-2 my-5 hover:cursor-pointer hover:shadow-md hover:bg-green-900 rounded-lg transition-all duration-200">
            {text}
        </button>
    );
}