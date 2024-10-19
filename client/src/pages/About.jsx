export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About This Project{" "}
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              This is a simple blog application built using React, Redux,
              Node.js, Express, and MongoDB. The app allows users to create,
              read, update, and delete blog posts. It also includes a theme
              toggle feature that allows users to switch between light and dark
              modes.
            </p>
            <p>To run this project locally, follow these steps:</p>
            <ol>
              <li>Clone the repository</li>
              <li>Run npm install in both the client and server directories</li>
              <li>
                Create a .env file in the server directory and add your MongoDB
                connection string
              </li>
              <li>Start the server with npm run dev</li>
            </ol>
            <p>
              This project is not fully functional as it does not include any
              user authentication or registration. To add these features, you
              can use a library like bcryptjs for password hashing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
