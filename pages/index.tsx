// #region Local Imports
import { Layout, TabBar } from '@Components';
// #endregion Local Imports

function Home(): JSX.Element {
    return (
        <Layout>
            <div className="p-10">
                <h1 className="text-xl font-medium">Hello, Jeongseon</h1>
                <h1 className="pt-2 text-xl font-medium">
                    Drive safely with <b>CHOBO!</b>
                </h1>
                <div className="mt-8 p-4 pb-12 rounded-lg bg-blue-400 text-white">
                    <p className="font-bold">
                        Do you have a car crash? Relax..!
                    </p>
                    <p>An Assurance will help you</p>
                </div>
                <h3 className="mt-12 text-lg">Just drive it!</h3>
                <p className="text-gray-700 text-sm">
                    Practice driving with CHOBO Teacher!
                </p>
                <ul className="mt-4 flex">
                    <div className="w-40 h-40 bg-gray-200 rounded-lg" />
                    <div className="ml-4 w-40 h-40 bg-gray-200 rounded-lg" />
                </ul>
            </div>
            <TabBar />
        </Layout>
    );
}

export default Home;
