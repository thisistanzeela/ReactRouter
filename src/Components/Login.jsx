const Login = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="block w-full px-3 py-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="w-full py-2 px-4 bg-cyan-900 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50">
            Login
          </button>
        </div>
      </div>
    );
  };
  
  export default Login;
  