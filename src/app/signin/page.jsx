import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";
import Link from "next/link";

export const metadata = {
    title: "Right travel | Login",
    description: "Affordable Custom Tours, Private Trips and Vacation Packages",
  };

export default function LoginClient() {
    
    return (
        <>
         <PageHeadTitle
                                            title="The Oxygen Plan | Sign In"
                                            description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
                                    />
            <Header />
            <main>
                <section className="bg-gray-50 login-page relative bg-cover bg-center">
                    <div className="absolute inset-0 bg-black opacity-60 "></div>
                    <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    User Login
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="enter your email"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            required=""
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300"
                                                    required=""
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="remember"
                                                    className="text-gray-500"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-green-600 hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-white flex items-center gap-2 bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm lg:px-6 px-3 lg:py-3 py-1"
                                    >
                                        Sign in
                                    </button>
                                    <p className="text-sm font-light text-gray-500">
                                        Don’t have an account yet?{" "}
                                        <Link href=" " passHref legacyBehavior>
                                        <a
                                            
                                            className="font-medium text-primary-600 hover:underline"
                                        >
                                            Sign up
                                        </a>
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
