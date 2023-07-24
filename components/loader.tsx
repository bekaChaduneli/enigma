import Image from "next/image";

const Loader = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="w-14 h-14 relative animate-spin">
                <Image alt="logo" fill src="/logo.png" />
            </div>
            <p className="text-sm text-muted-foreground">
                Enigma is thinking...
            </p>
        </div>
    );
};

export default Loader;
