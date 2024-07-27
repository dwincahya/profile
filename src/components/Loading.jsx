import 'ldrs/tailspin'

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-36">
            <l-tailspin
            size="40"
            stroke="5"
            speed="0.9"
            color="black"
            ></l-tailspin>
        </div>
    )
}